"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 700, suffix: "+", label: "Expert Technicians", icon: "people" },
  { target: 40, suffix: "+", label: "Service Centers", icon: "pin" },
  { target: 200, suffix: "K+", label: "Happy Customers", icon: "heart" },
  { target: 6, suffix: "K+", label: "Luxury Cars Serviced", icon: "car" },
] as const;

function StatIcon({ name }: { name: (typeof stats)[number]["icon"] }) {
  const paths = {
    people: <><circle cx="12" cy="8" r="3"/><path d="M6 20v-1.5A4.5 4.5 0 0 1 10.5 14h3a4.5 4.5 0 0 1 4.5 4.5V20M6 11a2.5 2.5 0 1 1 0-5m12 5a2.5 2.5 0 1 0 0-5"/></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.2"/></>,
    heart: <><path d="M20 8c0 5-8 10-8 10S4 13 4 8a4 4 0 0 1 7-2.6A4 4 0 0 1 20 8Z"/><path d="M8 20h8"/></>,
    car: <><path d="m5 16-1-1v-4l2-5h12l2 5v4l-1 1M6 11h12M7 16v2m10-2v2"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/></>,
  };
  return <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setProgress(1);
        return;
      }

      const duration = 1800;
      const startedAt = performance.now();
      let animationFrame = 0;
      const animate = (now: number) => {
        const elapsed = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        setProgress(eased);
        if (elapsed < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, { threshold: 0.3 });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fafafa] px-[22px] pb-6">
      <div className="mx-auto grid max-w-[1120px] grid-cols-4 overflow-hidden rounded-2xl border border-[#e9eaec] bg-[linear-gradient(110deg,#f8f8f8,#fff,#f1f2f3)] shadow-[0_14px_40px_#2023280b] max-[760px]:grid-cols-2 max-[430px]:grid-cols-1">
        {stats.map((stat, index) => (
          <article className={`flex min-h-[104px] items-center justify-center gap-4 px-5 py-5 ${index ? "border-l border-[#e2e3e5] max-[760px]:odd:border-l max-[760px]:even:border-l-0 max-[430px]:border-t max-[430px]:border-l-0" : ""}`} key={stat.label}>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-[#3d4044] shadow-[0_6px_18px_#20232810]"><StatIcon name={stat.icon} /></span>
            <div><strong className="block min-w-[84px] text-[clamp(24px,2.5vw,34px)] leading-none font-black tracking-[-1px] text-[#202225] tabular-nums">{Math.round(stat.target * progress)}{stat.suffix}</strong><span className="mt-1.5 block text-[10px] font-bold text-[#66696d]">{stat.label}</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}
