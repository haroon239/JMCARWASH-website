import Image from "next/image";

const circularMessage = "WELCOME TO JM CAR WASH & CLEANING • SINCE 2021 • ";

export function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[linear-gradient(112deg,#fff_0%,#f8f9fa_49%,#eceeef_100%)] text-[#181a1d] max-[700px]:min-h-0" id="home">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_36%,#fff_0_7%,transparent_36%),linear-gradient(90deg,transparent_49%,#dfe2e4aa_49.2%,transparent_49.5%)]" aria-hidden="true" />

      <div className="relative z-[2] mx-auto grid min-h-[650px] w-[calc(100%_-_44px)] max-w-[1180px] grid-cols-[51%_49%] items-stretch max-[900px]:grid-cols-[54%_46%] max-[700px]:flex max-[700px]:min-h-0 max-[700px]:w-full max-[700px]:flex-col">
        <div className="z-[2] animate-[hero-slide-right_1.7s_cubic-bezier(.22,.75,.22,1)_both] pt-[84px] pr-5 pb-[50px] pl-[5px] will-change-transform motion-reduce:animate-none max-[700px]:px-6 max-[700px]:pt-[43px] max-[700px]:pb-[25px] max-[430px]:pt-[38px]">
          <div className="mb-5 max-[700px]:mb-[13px]">
            <p className="mb-2 text-[11px] leading-none font-extrabold tracking-[.18em] text-[#96999d] uppercase max-[700px]:text-[10px]">JM Car Wash &amp; Cleaning</p>
            <p className="section-eyebrow section-eyebrow--plain p-0">Expert car service</p>
          </div>
          <h1 className="text-[clamp(45px,4.15vw,63px)] leading-[1.08] font-normal tracking-[-2.5px] max-[900px]:text-[47px] max-[700px]:text-[clamp(37px,10.8vw,49px)] max-[700px]:leading-[1.05] max-[700px]:tracking-[-1.8px] max-[430px]:text-[38px]">
            <strong className="font-[850]">Complete Car Care,</strong><br />Premium Service<br />
            <em className="font-['Segoe_Script','Brush_Script_MT',cursive] text-[.82em] font-normal tracking-[-1px]">Across UAE</em>
          </h1>
          <p className="mt-6 max-w-[540px] text-sm leading-[1.75] text-[#5f6266] max-[700px]:mt-[18px] max-[700px]:text-[13px] max-[700px]:leading-[1.65]">From routine maintenance to advanced care, we keep your car performing at its best. Trusted by thousands of car owners across UAE.</p>

          <div className="mt-[30px] grid max-w-[430px] grid-cols-2 gap-3 max-[700px]:mt-[22px] max-[430px]:grid-cols-1">
            <a
              className="group flex min-h-[58px] items-center gap-3 rounded-xl bg-[#2b2d30] px-5 text-white shadow-[0_12px_28px_rgb(20_22_25_/_0.18)] [animation:cta-attention_3.2s_ease-in-out_infinite] transition-colors hover:bg-black motion-reduce:animate-none"
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
              className="group flex min-h-[58px] items-center gap-3 rounded-xl border border-[#d8dade] bg-white px-5 text-[#292c30] shadow-[0_10px_25px_rgb(32_35_40_/_0.08)] [animation:cta-attention_3.2s_ease-in-out_.55s_infinite] transition-colors hover:border-[#bfc2c6] hover:bg-[#f4f5f6] motion-reduce:animate-none"
              href="tel:+971528843059"
              aria-label="Call JM Car Wash at +971 528843059"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eff0f1] transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.04 9.72a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span className="text-left"><strong className="text-[13px]">Call Us</strong></span>
              <span className="ml-auto text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-[30px] flex items-center gap-[19px] max-[700px]:mt-5 max-[430px]:mt-[19px]">
            <div className="flex items-center" aria-hidden="true">
              <Image className="size-[38px] rounded-full border-[3px] border-white object-cover" src="/images/testimonial-v2-img1-BGl5DInD.jpg" alt="" width={40} height={40} />
              <Image className="-ml-[9px] size-[38px] rounded-full border-[3px] border-white object-cover" src="/images/testimonial-v2-img2-BEDniIH0.jpg" alt="" width={40} height={40} />
              <Image className="-ml-[9px] size-[38px] rounded-full border-[3px] border-white object-cover" src="/images/testimonial-v2-img3-Dr2J8lNN.jpg" alt="" width={40} height={40} />
              <b className="-ml-[9px] grid size-[38px] place-items-center rounded-full border-[3px] border-white bg-[#37393d] text-[9px] text-white">10K+</b>
            </div>
            <p className="text-[11px] leading-[1.45] font-bold text-[#55585c] uppercase">Happy customers<br />across UAE</p>
          </div>
        </div>

        <div className="relative min-h-[650px] max-[700px]:mt-0 max-[700px]:min-h-[390px] max-[430px]:min-h-[360px]">
          <div className="absolute right-[-90px] bottom-[-130px] size-[650px] rounded-full bg-[#dadddf] max-[430px]:size-[470px]" aria-hidden="true" />
          <div className="absolute right-[-40px] bottom-0 z-[2] h-[610px] w-[min(570px,105%)] animate-[hero-image-reveal_.9s_both] overflow-hidden rounded-tl-[48%] max-[900px]:right-[-50px] max-[900px]:w-[120%] max-[700px]:right-0 max-[700px]:h-[390px] max-[700px]:w-full max-[700px]:animate-none max-[700px]:rounded-none max-[430px]:h-[360px]">
            <Image className="h-full w-full object-cover object-[48%_center] saturate-[.38] contrast-[.92] max-[700px]:object-[center_43%] max-[700px]:saturate-[.45] max-[700px]:contrast-[.95]" src="/images/man-with-car-wash-1.jpg" alt="JM Car Wash professional cleaning a vehicle" width={1024} height={1052} priority />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#f5f6f7_0,transparent_18%),linear-gradient(0deg,#dfe1e240_0,transparent_25%)] max-[700px]:bg-[linear-gradient(180deg,#f4f5f6_0,transparent_18%)]" />
          </div>

          <div className="absolute top-[42px] right-[24px] z-[4] size-[146px] rounded-full border border-[#dfe1e3] bg-white text-[#333] shadow-[0_10px_32px_#20212426] max-[900px]:top-[30px] max-[900px]:right-[18px] max-[900px]:size-[125px] max-[700px]:hidden" aria-label="Welcome to JM Car Wash and Cleaning, since 2021">
            <div className="absolute inset-0 animate-[spin_18s_linear_infinite]" aria-hidden="true">
              {[...circularMessage].map((character, index) => (
                <span className="absolute top-1/2 left-1/2 z-[2] h-[65px] origin-top-left text-[8px] font-black tracking-[.12px] max-[900px]:h-[55px] max-[900px]:text-[7px] max-[430px]:h-[47px] max-[430px]:text-[6px]" key={`${character}-${index}`} style={{ transform: `rotate(${index * (360 / circularMessage.length)}deg) translateY(-100%)` }}>{character}</span>
              ))}
            </div>
            <div className="absolute inset-[31px] rounded-full border border-[#aeb1b5] bg-[#f3f4f5] max-[430px]:inset-6" />
            <div className="absolute inset-0 z-[3] grid place-items-center text-xl font-black">JM</div>
          </div>

          <a className="absolute right-0.5 bottom-14 z-[5] grid min-h-[84px] w-[300px] animate-[hero-fade-up_.8s_.35s_both] grid-cols-[47px_1fr_25px] items-center gap-3 rounded-[13px] bg-[#fffffff2] px-[18px] py-[15px] text-[#292b2e] shadow-[0_14px_38px_#1f22252d] backdrop-blur-[10px] max-[900px]:w-[265px] max-[700px]:right-[18px] max-[700px]:bottom-[18px] max-[700px]:w-[min(300px,calc(100%_-_36px))] max-[430px]:grid-cols-[42px_1fr_20px]" href="#contact">
            <span className="grid size-[43px] place-items-center rounded-full border border-[#d5d7d9] text-xl" aria-hidden="true">⌖</span>
            <span><strong className="block text-xs leading-[1.4]">Fast &amp; Reliable Car Wash</strong><small className="mt-1 block text-[10px] text-[#76797d] uppercase">At your doorstep</small></span>
            <b className="text-[21px]" aria-hidden="true">→</b>
          </a>
        </div>
      </div>
    </section>
  );
}
