"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { primaryNavigation } from "@/data/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-[#e9eaec] bg-white text-[#17191c]">
      <div className="mx-auto grid h-24 w-[calc(100%_-_44px)] max-w-[1180px] grid-cols-[190px_1fr_auto] items-center gap-[30px] max-[1080px]:grid-cols-[150px_1fr_auto] max-[1080px]:gap-[18px] max-[780px]:flex max-[780px]:h-[75px] max-[780px]:w-full max-[780px]:justify-between max-[780px]:px-[18px]">
        <Link className="flex items-center" href="/#home" aria-label="JM Car Wash home">
          <Image className="h-[70px] w-[160px] scale-[1.28] object-contain max-[1080px]:w-[140px] max-[780px]:h-[58px] max-[780px]:w-[130px]" src="/images/logo1.png" alt="JM Car Wash" width={640} height={400} preload />
        </Link>

        <nav className={`flex h-full items-center justify-center gap-[35px] max-[1080px]:gap-5 max-[780px]:absolute max-[780px]:top-[75px] max-[780px]:right-0 max-[780px]:left-0 max-[780px]:h-auto max-[780px]:flex-col max-[780px]:items-stretch max-[780px]:gap-0 max-[780px]:bg-white max-[780px]:px-5 max-[780px]:pt-2 max-[780px]:pb-5 max-[780px]:shadow-[0_18px_28px_#1c1d2030] max-[780px]:transition-all ${isOpen ? "max-[780px]:visible max-[780px]:translate-y-0 max-[780px]:opacity-100" : "max-[780px]:invisible max-[780px]:-translate-y-2 max-[780px]:opacity-0"}`} aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link className="relative flex h-full items-center whitespace-nowrap text-[13px] font-bold text-[#303236] first:after:absolute first:after:right-0 first:after:bottom-[25px] first:after:left-0 first:after:h-0.5 first:after:bg-[#333] max-[780px]:h-auto max-[780px]:border-b max-[780px]:border-[#ececef] max-[780px]:px-0.5 max-[780px]:py-3.5 max-[780px]:first:after:hidden" key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="mt-4 hidden grid-cols-2 gap-3 max-[780px]:grid">
            <a className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#292b2e] px-3 text-xs font-extrabold text-white" href="https://wa.me/971528843059?text=Hello%20JM%20Car%20Wash%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
              <span className="text-base" aria-hidden="true">◉</span> WhatsApp
            </a>
            <a className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#dfe1e3] bg-[#f5f6f7] px-3 text-xs font-extrabold text-[#292b2e]" href="tel:+971528843059" onClick={() => setIsOpen(false)}>
              <span className="text-base" aria-hidden="true">☎</span> Call Us
            </a>
          </div>
        </nav>

        <div className="flex items-center gap-[15px]">
          <a
            className="group flex h-[44px] min-w-[190px] items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-[#292b2e] px-[16px] text-xs font-extrabold text-white shadow-[0_8px_20px_#15151524] [animation:cta-attention_3.2s_ease-in-out_infinite] transition-colors hover:bg-black motion-reduce:animate-none max-[1080px]:hidden"
            href="https://wa.me/971528843059?text=Hello%20JM%20Car%20Wash%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noreferrer"
            aria-label="Book an appointment with JM Car Wash on WhatsApp"
          >
            <span className="grid size-7 place-items-center rounded-full bg-white/12 transition-transform group-hover:scale-110" aria-hidden="true">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.35L3.5 20.5l1.5-4.46A8.4 8.4 0 1 1 20.5 11.6Z" />
                <path d="M8.2 7.7c.2-.42.4-.43.68-.44h.57c.18 0 .4.07.5.38l.7 1.75c.08.25.04.44-.1.62l-.55.7c-.15.17-.13.34-.03.52.68 1.16 1.65 2.08 2.84 2.7.2.1.37.08.5-.08l.78-.91c.17-.2.36-.23.6-.14l1.72.82c.25.12.42.26.43.45.03.6-.2 1.4-.63 1.83-.5.5-1.22.74-1.96.74-1.07 0-2.48-.48-4.23-2.03-2.04-1.81-3.2-4.15-3.1-5.42.03-.58.19-1.07.48-1.5Z" />
              </svg>
            </span>
            Book on WhatsApp
          </a>
          <a className="group flex h-[44px] min-w-[112px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#dfe1e3] bg-white px-3 text-xs font-extrabold text-[#292b2e] shadow-[0_7px_18px_rgb(25_27_30_/_0.07)] [animation:cta-attention_3.2s_ease-in-out_.55s_infinite] transition-colors hover:border-[#bfc2c6] hover:bg-[#f4f5f6] motion-reduce:animate-none max-[780px]:hidden" href="tel:+971528843059" aria-label="Call JM Car Wash at +971 528843059">
            <span className="grid size-7 place-items-center rounded-full bg-[#eff0f1] text-sm transition-transform group-hover:scale-110" aria-hidden="true">☎</span>
            <span>Call Us</span>
          </a>
          <button className="hidden size-11 rounded-lg border-0 bg-[#292b2e] p-[11px] max-[780px]:block" type="button" aria-label="Toggle navigation" aria-expanded={isOpen} onClick={() => setIsOpen((current) => !current)}>
            <span className="my-1 block h-0.5 rounded-sm bg-white" /><span className="my-1 block h-0.5 rounded-sm bg-white" /><span className="my-1 block h-0.5 rounded-sm bg-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
