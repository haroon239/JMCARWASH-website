"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often should I have my car professionally washed?",
    answer: "For everyday driving in the UAE, we recommend a professional wash every one to two weeks. Regular cleaning helps remove dust, road film, salt, and contaminants before they affect the paint finish.",
  },
  {
    question: "What is included in a full car detailing service?",
    answer: "A full detail includes a careful exterior wash, wheel and tyre cleaning, interior vacuuming, dashboard and trim care, glass cleaning, and finishing protection. The exact treatment can be tailored to your vehicle’s condition.",
  },
  {
    question: "Are your cleaning products safe for my car?",
    answer: "Yes. We use professional, paint-safe products and suitable tools for each surface. Our team adjusts the process for delicate paint, leather, fabric, plastic, chrome, and coated vehicles.",
  },
  {
    question: "How long does a car wash or detailing appointment take?",
    answer: "A premium wash usually takes 45–60 minutes, while a complete interior and exterior detail may take 2–4 hours. We confirm the expected time after inspecting your vehicle and chosen package.",
  },
  {
    question: "Can you remove stains and unpleasant interior odours?",
    answer: "Most common stains and odours can be significantly reduced or removed with deep extraction and targeted treatments. Results depend on the material, the source of the stain, and how long it has been present.",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "Advance booking is recommended so we can reserve the right time and team for your vehicle. Same-day availability may be possible, so you are always welcome to call and check.",
  },
] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f4f5f6] px-5 py-[clamp(70px,8vw,110px)]" id="faq">
      <div className="pointer-events-none absolute -top-40 -right-40 size-[460px] rounded-full border-[80px] border-white/70" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-10 left-[7%] size-24 rounded-full border-[18px] border-[#e7e8ea]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1160px] grid-cols-[.82fr_1.18fr] gap-[clamp(45px,7vw,95px)] max-[850px]:grid-cols-1">
        <div className="max-w-[430px] max-[850px]:max-w-[650px]">
          <p className="mb-4 text-[11px] font-extrabold tracking-[.16em] text-[#74777b] uppercase">Frequently asked questions</p>
          <h2 className="text-[clamp(38px,4.2vw,58px)] leading-[1.02] font-extrabold tracking-[-2.2px] text-[#1d2024]">
            Everything you need to know about your clean.
          </h2>
          <p className="mt-6 max-w-[390px] text-[15px] leading-7 text-[#666a6e]">
            Clear answers, careful service, and no surprises. Here are the questions our customers ask most often.
          </p>

          <div className="mt-9 rounded-2xl border border-[#dfe1e3] bg-white p-6 shadow-[0_16px_45px_rgb(32_35_40_/_0.07)]">
            <p className="text-[11px] font-extrabold tracking-[.12em] text-[#85888c] uppercase">Still have a question?</p>
            <p className="mt-2 text-lg font-extrabold text-[#25282c]">Speak with our car-care team.</p>
            <a
              className="group mt-5 inline-flex h-12 min-w-[165px] items-center gap-3 rounded-xl bg-[#303236] px-4 text-[12px] font-extrabold text-white shadow-[0_12px_28px_rgb(20_22_25_/_0.18)] [animation:cta-attention_3.2s_ease-in-out_infinite] transition-colors hover:bg-black motion-reduce:animate-none"
              href="tel:+971528843059"
              aria-label="Call JM Car Wash at +971 528843059"
            >
              <span className="grid size-8 place-items-center rounded-full bg-white/12 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.04 9.72a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span>Call Us</span>
              <span className="ml-auto text-base transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <article className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow,transform] duration-300 ${isOpen ? "border-[#cfd1d4] shadow-[0_16px_40px_rgb(32_35_40_/_0.09)]" : "border-[#e2e4e6] hover:-translate-y-0.5 hover:border-[#cfd1d4]"}`} key={faq.question}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 px-6 py-[22px] text-left text-[clamp(15px,1.5vw,18px)] leading-6 font-extrabold text-[#292c30] outline-none focus-visible:ring-2 focus-visible:ring-[#55585c] focus-visible:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`grid size-9 shrink-0 place-items-center rounded-full transition-[transform,background-color,color] duration-500 ${isOpen ? "rotate-45 bg-[#303236] text-white" : "bg-[#f0f1f2] text-[#35383c]"}`} aria-hidden="true">
                      <span className="text-[22px] leading-none font-light">+</span>
                    </span>
                  </button>
                </h3>
                <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} id={panelId}>
                  <div className="overflow-hidden">
                    <p className="mx-6 border-t border-[#eceeef] pt-4 pb-6 pr-12 text-[14px] leading-7 text-[#666a6e] max-sm:pr-0">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
