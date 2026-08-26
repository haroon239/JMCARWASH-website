import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "./BookingForm";
import { BookingQr } from "./BookingQr";

export const metadata: Metadata = {
  title: "Book a Car Wash | JM Car Wash & Cleaning",
  description: "Request a professional mobile car wash or detailing appointment with JM Car Wash & Cleaning in Dubai.",
};

export default function BookPage() {
  return (
    <main className="bg-[#f5f6f7]">
      <Header />
      <section className="relative overflow-hidden border-b border-[#e5e7e9] bg-white px-[22px] py-16 max-md:py-11">
        <div className="absolute -top-32 -right-24 size-[420px] rounded-full border-[75px] border-[#f2f3f4]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1180px] text-center">
          <p className="section-eyebrow section-eyebrow--center">Quick &amp; convenient booking</p>
          <h1 className="mx-auto mt-5 max-w-[760px] text-[clamp(38px,5.6vw,68px)] leading-[.98] font-black tracking-[-3px] text-[#1d1f22] max-sm:tracking-[-2px]">Book your car care in minutes</h1>
          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-[#696d72]">Share a few details and our team will contact you to confirm the most convenient available time.</p>
        </div>
      </section>

      <section className="px-[22px] py-16 max-md:py-10">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[1fr_350px] items-start gap-8 max-[920px]:grid-cols-1">
          <BookingForm />
          <aside className="space-y-6 max-[920px]:grid max-[920px]:grid-cols-2 max-[920px]:gap-5 max-sm:block max-sm:space-y-5">
            <BookingQr />
            <div className="rounded-[22px] bg-[#292b2e] p-7 text-white">
              <p className="text-[11px] font-extrabold tracking-[.14em] text-white/50 uppercase">Prefer to talk?</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-.5px]">We are here to help.</h2>
              <p className="mt-3 text-xs leading-6 text-white/60">For urgent or same-day requests, contact our team directly.</p>
              <div className="mt-6 grid gap-3">
                <a className="flex h-12 items-center justify-between rounded-xl bg-white px-4 text-xs font-extrabold text-[#292b2e]" href="https://wa.me/971528843059?text=Hello%20JM%20Car%20Wash%2C%20I%20would%20like%20to%20book%20a%20service." target="_blank" rel="noreferrer"><span>WhatsApp Us</span><span>→</span></a>
                <a className="flex h-12 items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 text-xs font-extrabold text-white" href="tel:+971528843059"><span>Call +971 52 884 3059</span><span>→</span></a>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
