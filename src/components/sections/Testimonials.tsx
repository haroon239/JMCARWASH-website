"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "Omar Khalid", role: "Dubai Marina", image: "/images/testimonial-v2-img1-BGl5DInD.jpg", quote: "The team arrived exactly on time and treated my car with real care. The interior feels completely refreshed and the exterior finish is exceptional." },
  { name: "Aisha Rahman", role: "Business Owner", image: "/images/testimonial-v2-img2-BEDniIH0.jpg", quote: "Professional service from booking to handover. The attention to detail was impressive, and the result looked better than I expected." },
  { name: "Ahmed Saleh", role: "Jumeirah Resident", image: "/images/testimonial-v2-img3-Dr2J8lNN.jpg", quote: "Convenient, reliable, and beautifully finished. JM Car Wash has become my first choice whenever my car needs premium detailing." },
  { name: "Daniel Morgan", role: "Fleet Manager", image: "/images/testimonial-v2-img5-Da-Qf17u.jpg", quote: "We trust JM with our company vehicles because the quality is consistent every time. Their team is efficient, courteous, and dependable." },
  { name: "Mohammed Al Mansoori", role: "Abu Dhabi", image: "/images/testimonial-v2-img6-BAtgYM_v.jpg", quote: "The booking process was simple and the service was outstanding. Every surface was cleaned carefully and the car looked showroom ready." },
] as const;

const carouselItems = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0], testimonials[1]];

export function Testimonials() {
  const [position, setPosition] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const active = (position - 1 + testimonials.length) % testimonials.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const move = (direction: number) => {
    setTransitionEnabled(true);
    setPosition((current) => {
      if (direction > 0 && current >= testimonials.length + 1) return current;
      if (direction < 0 && current <= 0) return current;
      return current + direction;
    });
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => move(1), 8000);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    if (position !== testimonials.length + 1 && position !== 0) return;

    const resetTimer = window.setTimeout(() => {
      setTransitionEnabled(false);
      setPosition(position === 0 ? testimonials.length : 1);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setTransitionEnabled(true)));
    }, 1150);

    return () => window.clearTimeout(resetTimer);
  }, [position]);

  const jumpTo = (index: number) => {
    setTransitionEnabled(true);
    setPosition(index + 1);
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff_0%,#f5f6f7_52%,#fff_100%)] px-[22px] py-24 text-[#202327] max-md:py-16" id="testimonials" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-label="Customer testimonials">
      <div className="absolute -top-48 -left-48 size-[520px] rounded-full border-[90px] border-[#e8eaec]/60" aria-hidden="true" />
      <div className="absolute -right-40 -bottom-52 size-[560px] rounded-full bg-[#e9ebed]/55 blur-2xl" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 h-0.5 w-20 -translate-x-1/2 bg-[#34373b]" />

      <div className="relative mx-auto max-w-[1180px]">
        <header className="mb-16 text-center max-md:mb-12">
          <p className="section-eyebrow section-eyebrow--center mb-4">Customer stories</p>
          <h2 className="mx-auto max-w-[650px] text-[clamp(34px,4vw,52px)] leading-[1.05] font-extrabold tracking-[-1.8px] text-[#1d2024]">What Our Customers<br /><span className="font-normal text-[#5f6368]">Are Saying</span></h2>
        </header>

        <div className="overflow-hidden py-12 -my-12">
          <div
            className={`flex ${transitionEnabled ? "transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)]" : ""}`}
            style={{ transform: `translate3d(-${position * (isMobile ? 100 : 50)}%, 0, 0)` }}
          >
            {carouselItems.map((testimonial, index) => (
              <div className="min-w-1/2 px-3.5 max-[700px]:min-w-full" key={`${testimonial.name}-${index}`}>
                <article className="relative min-h-[300px] rounded-[22px] border border-[#e2e4e6] bg-white px-10 pt-16 pb-8 shadow-[0_18px_50px_#20232812] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_#2023281c] max-sm:px-6">
                  <div className="absolute -top-11 left-9 size-[88px] overflow-hidden rounded-full border-4 border-white bg-[#eceeef] shadow-[0_10px_26px_#20232826]"><Image className="h-full w-full object-cover" src={testimonial.image} alt={testimonial.name} width={100} height={100} /></div>
                  <span className="absolute top-6 right-8 font-serif text-6xl leading-none text-[#303236]/10" aria-hidden="true">“</span>
                  <p className="text-[14px] leading-7 font-medium text-[#666a6e]">{testimonial.quote}</p>
                  <div className="mt-7 flex items-end justify-between gap-5 border-t border-[#eceeef] pt-5 max-sm:flex-col max-sm:items-start">
                    <div className="border-l-2 border-[#34373b] pl-4"><h3 className="text-lg font-extrabold text-[#222529]">{testimonial.name}</h3><p className="mt-1 text-[11px] font-semibold text-[#85888c] uppercase">{testimonial.role}</p></div>
                    <div className="flex gap-1 text-sm tracking-[.12em] text-[#34373b]" aria-label="5 out of 5 stars">★★★★★</div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 flex items-center justify-center gap-3">
          <button className="grid size-11 place-items-center rounded-full border border-[#d7d9dc] bg-white text-lg text-[#55595d] shadow-sm transition hover:border-[#303236] hover:bg-[#303236] hover:text-white" type="button" onClick={() => move(-1)} aria-label="Previous testimonials">←</button>
          <div className="flex gap-2 px-3">{testimonials.map((testimonial, index) => <button className={`h-2 rounded-full transition-all ${index === active ? "w-7 bg-[#303236]" : "w-2 bg-[#cfd2d5] hover:bg-[#8a8e92]"}`} type="button" onClick={() => jumpTo(index)} aria-label={`Show testimonial from ${testimonial.name}`} key={testimonial.name} />)}</div>
          <button className="grid size-11 place-items-center rounded-full border border-[#d7d9dc] bg-white text-lg text-[#55595d] shadow-sm transition hover:border-[#303236] hover:bg-[#303236] hover:text-white" type="button" onClick={() => move(1)} aria-label="Next testimonials">→</button>
        </div>
      </div>
    </section>
  );
}
