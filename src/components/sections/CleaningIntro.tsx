import Image from "next/image";
import { LineIcon } from "@/components/ui/LineIcon";

const features = ["Exterior & Interior Cleaning", "Steam Cleaning", "Wax & Polish Protection", "Quick & Hassle-Free"];

export function CleaningIntro() {
  return (
    <section className="bg-[#fafafa] px-[22px] pt-6 pb-6" id="about">
      <div className="mx-auto grid max-w-[1120px] grid-cols-[49%_51%] overflow-hidden rounded-2xl border border-[#eceeef] bg-white shadow-[0_16px_45px_#2023280b] max-[820px]:grid-cols-1">
        <div className="relative min-h-[390px] overflow-hidden max-sm:min-h-[330px]">
          <Image className="absolute inset-0 h-full w-full object-cover" src="/images/man-with-car-wash-3.jpg" alt="JM Car Wash specialist pressure washing a car" width={922} height={1152} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent" />
          <div className="absolute right-4 bottom-4 h-[55%] w-[42%] overflow-hidden rounded-2xl border-[5px] border-white shadow-2xl max-sm:w-[45%]">
            <Image className="h-full w-full object-cover" src="/images/man-with-car-wash-1.jpg" alt="Detailed hand washing of a vehicle" width={1024} height={1052} />
          </div>
          <div className="absolute top-0 right-0 grid h-[150px] w-[150px] place-items-center rounded-bl-3xl bg-[#f2f3f4]/95 text-center shadow-lg backdrop-bl-sm max-sm:size-[125px]">
            <div>
              <LineIcon className="mx-auto mb-2 size-9" name="drop" />
              <p className="text-[11px] leading-5 font-extrabold tracking-[.04em] uppercase">Premium<br />Car Wash<br />&amp; Detailing</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-14 py-12 max-[1050px]:px-9 max-sm:px-6 max-sm:py-10">
          <p className="section-eyebrow mb-4">Car wash</p>
          <h2 className="max-w-[500px] text-[clamp(30px,3.3vw,46px)] leading-[1.08] font-extrabold tracking-[-1.5px] text-[#191b1e]">Expert Car Cleaning<br />with Premium Care</h2>
          <p className="mt-5 max-w-[540px] text-[13px] leading-6 text-[#686b70]">Give your car the shine it deserves with our premium car wash services. We use high-quality products and advanced techniques to ensure a spotless finish.</p>

          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 max-sm:grid-cols-1">
            {features.map((feature) => (
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#36383b]" key={feature}>
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#d7d9dc] bg-white"><LineIcon className="size-4" name="check" /></span>
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            <a
              className="group flex min-h-[58px] items-center justify-center gap-3 rounded-xl bg-[#2b2d30] px-5 text-white shadow-[0_12px_28px_rgb(20_22_25_/_0.18)] [animation:cta-attention_3.2s_ease-in-out_infinite] transition-colors hover:bg-black motion-reduce:animate-none"
              href="https://wa.me/971528843059?text=Hello%20JM%20Car%20Wash%2C%20I%20would%20like%20to%20book%20a%20car%20cleaning%20service."
              target="_blank"
              rel="noreferrer"
              aria-label="Contact JM Car Wash on WhatsApp"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/12 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.35L3.5 20.5l1.5-4.46A8.4 8.4 0 1 1 20.5 11.6Z" />
                  <path d="M8.2 7.7c.2-.42.4-.43.68-.44h.57c.18 0 .4.07.5.38l.7 1.75c.08.25.04.44-.1.62l-.55.7c-.15.17-.13.34-.03.52.68 1.16 1.65 2.08 2.84 2.7.2.1.37.08.5-.08l.78-.91c.17-.2.36-.23.6-.14l1.72.82c.25.12.42.26.43.45.03.6-.2 1.4-.63 1.83-.5.5-1.22.74-1.96.74-1.07 0-2.48-.48-4.23-2.03-2.04-1.81-3.2-4.15-3.1-5.42.03-.58.19-1.07.48-1.5Z" />
                </svg>
              </span>
              <strong className="text-[13px]">WhatsApp Us</strong>
              <span className="ml-auto text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>

            <a
              className="group flex min-h-[58px] items-center justify-center gap-3 rounded-xl border border-[#d8dade] bg-white px-5 text-[#292c30] shadow-[0_10px_25px_rgb(32_35_40_/_0.08)] [animation:cta-attention_3.2s_ease-in-out_.55s_infinite] transition-colors hover:border-[#bfc2c6] hover:bg-[#f4f5f6] motion-reduce:animate-none"
              href="tel:+971528843059"
              aria-label="Call JM Car Wash at +971 528843059"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eff0f1] transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.04 9.72a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span className="text-left"><small className="block text-[9px] font-bold tracking-[.08em] text-[#888b8f] uppercase">Talk to our team</small><strong className="text-[13px]">Call Us</strong></span>
              <span className="ml-auto text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
