"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="bg-[#f5f6f7] px-[22px] py-20 max-md:py-14" id="gallery">
      <div className="mx-auto max-w-[1120px] rounded-[26px] border border-[#e7e9eb] bg-white px-8 pt-9 pb-8 shadow-[0_18px_50px_#2023280d] max-sm:px-4">
        <header className="mb-6 text-center"><p className="section-eyebrow section-eyebrow--center mb-3">Results you can see</p><h2 className="text-[clamp(30px,3.5vw,45px)] font-extrabold tracking-[-1.4px] text-[#191b1e]">See the True Difference</h2></header>

        <div className="relative mx-auto h-[360px] max-w-[900px] overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#dfe1e3,#f7f7f7)] max-md:h-[285px] max-sm:h-[220px]">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#8e9296_1px,transparent_1px)] [background-size:18px_18px]" />
          <Image className="absolute top-1/2 left-1/2 z-[2] w-[94%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_22px_18px_#3335]" src="/images/before-and-after-img-2-DcljG4o1.png" alt="Professionally cleaned red car" width={1324} height={421} />
          <div className="absolute inset-0 z-[3] overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <div className="absolute inset-0 bg-[#68625a]/24 mix-blend-multiply" />
            <Image className="absolute top-1/2 left-1/2 w-[94%] -translate-x-1/2 -translate-y-1/2 object-contain brightness-[.66] saturate-[.25] sepia-[.25] drop-shadow-[0_22px_18px_#3335]" src="/images/before-and-after-img-2-DcljG4o1.png" alt="Car before professional cleaning" width={1324} height={421} />
          </div>
          <div className="pointer-events-none absolute top-0 bottom-0 z-[5] w-0.5 bg-white shadow-[0_0_10px_#0008]" style={{ left: `${position}%` }}><span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-[#303236] text-xs font-black text-white shadow-lg">↔</span></div>
          <input className="absolute inset-0 z-[6] h-full w-full cursor-ew-resize opacity-0" type="range" min="8" max="92" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label="Move the slider to compare the car before and after cleaning" />
          <span className="absolute bottom-4 left-4 z-[7] rounded-full bg-[#34363a] px-4 py-2 text-[10px] font-extrabold text-white uppercase">Before</span>
          <span className="absolute right-4 bottom-4 z-[7] rounded-full bg-white px-4 py-2 text-[10px] font-extrabold text-[#25272a] uppercase shadow">After</span>
        </div>
        <p className="mt-5 text-center text-xs text-[#76797d]">Drag the slider to reveal the transformation</p>
      </div>
    </section>
  );
}
