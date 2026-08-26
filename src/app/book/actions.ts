"use server";

import { Resend } from "resend";

export type BookingState = {
  status: "idle" | "success" | "error";
  message: string;
  whatsappUrl?: string;
  emailSent?: boolean;
};

const initialState: BookingState = { status: "idle", message: "" };

const requiredFields = ["name", "phone", "service", "vehicle", "area", "startDate", "package"] as const;
const availableDays = new Set(["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]);

function clean(value: FormDataEntryValue | null, maxLength = 200) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function submitBooking(
  _previousState: BookingState = initialState,
  formData: FormData,
): Promise<BookingState> {
  const honeypot = clean(formData.get("company"));
  if (honeypot) return { status: "success", message: "Thank you. Your request has been received." };

  const booking = {
    name: clean(formData.get("name"), 80),
    phone: clean(formData.get("phone"), 30),
    email: clean(formData.get("email"), 120),
    service: clean(formData.get("service"), 80),
    vehicle: clean(formData.get("vehicle"), 80),
    area: clean(formData.get("area"), 120),
    startDate: clean(formData.get("startDate"), 20),
    package: clean(formData.get("package"), 100),
    preferredDays: formData.getAll("preferredDays").map((day) => clean(day, 20)).filter((day) => availableDays.has(day)),
    timing: "5:00 PM – 2:00 AM",
    message: clean(formData.get("message"), 1000),
  };

  const missing = requiredFields.some((field) => !booking[field]);
  if (missing) {
    return { status: "error", message: "Please complete all required fields before submitting." };
  }

  if (!booking.preferredDays.length) {
    return { status: "error", message: "Please select at least one preferred service day." };
  }

  const requiredDayCount = booking.package.includes("Thrice") ? 3 : booking.package.includes("Twice") ? 2 : 1;
  if (booking.preferredDays.length !== requiredDayCount) {
    return {
      status: "error",
      message: `This package requires exactly ${requiredDayCount} preferred ${requiredDayCount === 1 ? "day" : "days"}.`,
    };
  }

  if (new Date(`${booking.startDate}T12:00:00Z`).getUTCDay() === 5) {
    return { status: "error", message: "Friday is our weekly day off. Please choose another start date." };
  }

  if (!/^[+\d][\d\s()-]{6,24}$/.test(booking.phone)) {
    return { status: "error", message: "Please enter a valid phone or WhatsApp number." };
  }

  if (booking.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email)) {
    return { status: "error", message: "Please enter a valid email address or leave it empty." };
  }

  const whatsappMessage = [
    "Hello JM Car Wash & Cleaning, I would like to confirm my booking request:",
    "",
    `Name: ${booking.name}`,
    `Phone: ${booking.phone}`,
    `Service: ${booking.service}`,
    `Vehicle: ${booking.vehicle}`,
    `Package: ${booking.package}`,
    `Area: ${booking.area}`,
    `Start date: ${booking.startDate}`,
    `Preferred days: ${booking.preferredDays.join(", ")}`,
    `Service timing: ${booking.timing}`,
    booking.message ? `Notes: ${booking.message}` : "",
  ].filter(Boolean).join("\n");

  const whatsappUrl = `https://wa.me/971528843059?text=${encodeURIComponent(whatsappMessage)}`;
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.BOOKING_NOTIFICATION_EMAIL || "jmcarwashandcleaning@gmail.com";
  const fromEmail = process.env.BOOKING_FROM_EMAIL || "JM Car Wash Bookings <onboarding@resend.dev>";
  let emailSent = false;

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: [notificationEmail],
        replyTo: booking.email || undefined,
        subject: `New booking: ${booking.service} — ${booking.name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#202226">
            <h1 style="font-size:24px">New website booking request</h1>
            <p style="color:#62666b">Please contact the customer to confirm availability.</p>
            <table style="width:100%;border-collapse:collapse">
              ${Object.entries(booking).map(([label, value]) => value && (!Array.isArray(value) || value.length) ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:700;text-transform:capitalize">${escapeHtml(label)}</td><td style="padding:10px;border-bottom:1px solid #eee">${escapeHtml(Array.isArray(value) ? value.join(", ") : value)}</td></tr>` : "").join("")}
            </table>
            <p style="margin-top:24px"><a href="${whatsappUrl}" style="background:#292b2e;color:#fff;padding:12px 18px;border-radius:8px;text-decoration:none">Reply on WhatsApp</a></p>
          </div>`,
      });
      emailSent = !error;
    } catch {
      emailSent = false;
    }
  }

  return {
    status: "success",
    message: emailSent
      ? "Your request has been sent. Please send the prepared WhatsApp message so our team can confirm your slot."
      : "Your details are ready. Please send the prepared WhatsApp message so our team receives your request.",
    whatsappUrl,
    emailSent,
  };
}
