"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const tabs = [
  {
    label: "Our Specialty",
    description: "We offer a complete range of premium car wash and detailing services to keep your vehicle looking its best. From high-pressure foam washes to meticulous interior deep cleaning.",
    items: ["Hydraulic Car Wash", "Tire & Rim Cleaning", "Interior Deep Cleaning", "Glass & Mirror Cleaning", "Bug & Tar Removal", "Dashboard Cleaning", "Foam & Soap Wash", "Windshield Cleaning"],
  },
  {
    label: "Our Mission",
    description: "Our mission is to make professional car care convenient, reliable, and consistent for every customer across the UAE, with results that build lasting trust.",
    items: ["Customer-First Care", "Consistent Quality", "Convenient Booking", "Reliable Service", "Modern Equipment", "Skilled Technicians", "Eco-Conscious Products", "Complete Satisfaction"],
  },
  {
    label: "Our Values",
    description: "Honesty, craftsmanship, and attention to detail guide every wash. We treat every vehicle with respect and communicate clearly from booking to handover.",
    items: ["Transparent Pricing", "Professional Conduct", "Attention to Detail", "Honest Advice", "On-Time Delivery", "Premium Products", "Safe Techniques", "Long-Term Trust"],
  },
] as const;

export function UaeServiceBanner() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const content = tabs[activeTab];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white" id="operation">
      <div className="absolute inset-y-0 right-0 w-[45%] bg-[#dfe1e3] [clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)] max-[820px]:hidden" aria-hidden="true" />
      <div className="absolute top-14 left-4 size-[400px] opacity-[.035] [background-image:radial-gradient(circle_at_center,transparent_26%,#222_27%_29%,transparent_30%),repeating-radial-gradient(circle_at_center,#222_0_2px,transparent_3px_28px)]" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[552px] max-w-[1365px] grid-cols-[54%_46%] max-[820px]:grid-cols-1">
        <div className="z-[2] px-[clamp(28px,3vw,44px)] py-4 max-[1050px]:py-8 max-md:py-12">
          <p className={`section-eyebrow mb-3 transition-[transform,opacity] duration-700 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>How we operate</p>
          <h2 className={`max-w-[650px] text-[clamp(40px,4vw,54px)] leading-[1.04] font-extrabold tracking-[-2px] text-[#1d2024] transition-[transform,opacity] delay-100 duration-1000 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-14 opacity-0"}`}>We make trust part of every experience</h2>

          <div className={`mt-9 flex flex-wrap gap-3 transition-[transform,opacity] delay-200 duration-900 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} role="tablist" aria-label="Company information">
            {tabs.map((tab, index) => (
              <button className={`h-[50px] rounded-xl px-7 text-[14px] font-extrabold transition duration-300 ${activeTab === index ? "bg-[#303236] text-white shadow-[0_10px_25px_#20232822]" : "border border-[#e4e6e8] bg-[#f6f7f8] text-[#34373b] hover:bg-[#e9eaec]"}`} type="button" role="tab" aria-selected={activeTab === index} onClick={() => setActiveTab(index)} key={tab.label}>{tab.label}</button>
            ))}
          </div>

          <p key={`description-${activeTab}`} className={`mt-7 max-w-[650px] text-[14px] leading-6 font-semibold text-[#6b6e72] transition-[transform,opacity] delay-300 duration-900 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>{content.description}</p>
          <div key={`items-${activeTab}`} className="mt-6 grid max-w-[650px] grid-cols-2 gap-x-10 gap-y-3 max-sm:grid-cols-1">
            {content.items.map((item, index) => (
              <div
                className={`flex items-center gap-3 text-[13px] font-extrabold text-[#292c30] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                style={{ transitionDelay: `${400 + index * 65}ms` }}
                key={item}
              ><span className="text-base font-black text-[#4f5256]">✓</span>{item}</div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[552px] max-[820px]:min-h-[470px] max-sm:min-h-[430px]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#d6d8db,#f2f3f4_58%,#c7c9cc)] [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] max-[820px]:[clip-path:polygon(0_12%,100%_0,100%_100%,0_100%)]" />
          <div className="absolute right-[-120px] bottom-[-130px] size-[600px] rounded-full border-[75px] border-white/35" />
          <div className="absolute top-[12%] right-[8%] text-[170px] leading-none font-black text-white/20 max-sm:text-[110px]" aria-hidden="true">JM</div>
          <div className={`absolute inset-0 z-[2] transform-gpu transition-[transform,opacity,filter] delay-150 duration-[1300ms] ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none ${isVisible ? "translate-x-0 opacity-100 blur-none" : "translate-x-20 opacity-0 blur-[6px]"}`}>
            <Image className="absolute right-[-28px] bottom-0 h-[535px] w-auto max-w-[118%] object-contain object-bottom drop-shadow-[0_20px_28px_#20232830] max-[1050px]:h-[500px] max-[820px]:right-1/2 max-[820px]:h-auto max-[820px]:max-h-[440px] max-[820px]:translate-x-1/2 max-sm:max-h-[410px] max-sm:max-w-[142%]" src="/images/operates-one.png" alt="JM Car Wash professional service team" width={1376} height={1143} />
          </div>
          <div className={`absolute right-7 bottom-7 z-[3] rounded-full border border-white/70 bg-white/90 px-5 py-2 text-[10px] font-extrabold tracking-[.08em] text-[#303236] uppercase shadow-lg backdrop-bl-md transition-[transform,opacity] delay-700 duration-700 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>JM Car Wash Team</div>
        </div>
      </div>
    </section>
  );
}
