"use client";

import { useActionState } from "react";
import { submitBooking, type BookingState } from "./actions";

const initialState: BookingState = { status: "idle", message: "" };

const fieldClass = "mt-2 h-13 w-full rounded-xl border border-[#dfe1e3] bg-white px-4 text-sm text-[#202226] outline-none transition placeholder:text-[#969a9f] focus:border-[#292b2e] focus:ring-3 focus:ring-[#292b2e]/8";

export function BookingForm() {
  const [state, formAction, pending] = useActionState(submitBooking, initialState);

  if (state.status === "success") {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[22px] border border-[#e1e3e5] bg-white p-8 text-center shadow-[0_18px_50px_rgb(26_28_31_/.08)]">
        <div className="grid size-16 place-items-center rounded-full bg-[#292b2e] text-2xl text-white" aria-hidden="true">✓</div>
        <p className="mt-6 text-xs font-extrabold tracking-[.14em] text-[#74787d] uppercase">Request prepared</p>
        <h2 className="mt-2 text-3xl font-black tracking-[-1px] text-[#1d1f22]">One final step</h2>
        <p className="mt-4 max-w-[470px] text-sm leading-7 text-[#666a70]">{state.message}</p>
        {state.whatsappUrl && (
          <a className="mt-7 flex h-14 min-w-[240px] items-center justify-center gap-3 rounded-xl bg-[#292b2e] px-6 text-sm font-extrabold text-white shadow-[0_12px_28px_rgb(24_26_29_/.18)] transition hover:-translate-y-0.5 hover:bg-black" href={state.whatsappUrl} target="_blank" rel="noreferrer">
            <span className="grid size-7 place-items-center rounded-full bg-white/10" aria-hidden="true">◉</span>
            Send on WhatsApp
          </a>
        )}
        <button className="mt-5 text-xs font-bold text-[#666a70] underline underline-offset-4" type="button" onClick={() => window.location.reload()}>Make another booking</button>
      </div>
    );
  }

  return (
    <form className="rounded-[22px] border border-[#e1e3e5] bg-white p-7 shadow-[0_18px_50px_rgb(26_28_31_/.08)] max-sm:p-5" action={formAction}>
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 max-sm:grid-cols-1">
        <Field label="Full name" name="name" placeholder="Your name" autoComplete="name" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" placeholder="+971 5X XXX XXXX" autoComplete="tel" required />
        <Field label="Email (optional)" name="email" type="email" placeholder="name@example.com" autoComplete="email" />
        <label className="text-xs font-extrabold text-[#34373b]">Service required <span className="text-[#8a8e93]">*</span>
          <select className={fieldClass} name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Luxury Hand Wash</option><option>Interior Detailing</option><option>Paint Protection</option><option>Full Car Detailing</option><option>Steam Cleaning</option><option>Wax &amp; Polish</option><option>Other / Not sure</option>
          </select>
        </label>
        <Field label="Vehicle" name="vehicle" placeholder="e.g. Toyota Land Cruiser" required />
        <Field label="Area / location" name="area" placeholder="e.g. JBR, Dubai" autoComplete="street-address" required />
        <Field label="Preferred date" name="date" type="date" required />
        <label className="text-xs font-extrabold text-[#34373b]">Preferred time <span className="text-[#8a8e93]">*</span>
          <select className={fieldClass} name="time" defaultValue="" required>
            <option value="" disabled>Select a time</option><option>8:00 AM – 11:00 AM</option><option>11:00 AM – 2:00 PM</option><option>2:00 PM – 5:00 PM</option><option>5:00 PM – 8:00 PM</option><option>Flexible</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-xs font-extrabold text-[#34373b]">Additional notes (optional)
        <textarea className={`${fieldClass} h-28 resize-y py-3.5`} name="message" placeholder="Tell us about the vehicle condition, parking access, or any special request." maxLength={1000} />
      </label>

      <div className="absolute -left-[9999px]" aria-hidden="true"><label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label></div>

      {state.status === "error" && <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700" role="alert">{state.message}</p>}

      <button className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#292b2e] px-6 text-sm font-extrabold text-white shadow-[0_12px_28px_rgb(24_26_29_/.16)] transition hover:bg-black disabled:cursor-wait disabled:opacity-60" type="submit" disabled={pending}>
        {pending ? "Preparing your request…" : "Submit booking request"}<span aria-hidden="true">→</span>
      </button>
      <p className="mt-4 text-center text-[11px] leading-5 text-[#85898e]">Submitting this form does not guarantee a slot. Our team will confirm availability with you.</p>
    </form>
  );
}

function Field({ label, name, required = false, ...props }: { label: string; name: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <label className="text-xs font-extrabold text-[#34373b]">{label} {required && <span className="text-[#8a8e93]">*</span>}<input className={fieldClass} name={name} required={required} {...props} /></label>;
}
