"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LineIcon } from "@/components/ui/LineIcon";

const benefits = [
  { icon: "team", title: "Expert Technicians", text: "Certified and experienced professionals ensuring top-quality service." },
  { icon: "equipment", title: "Advanced Equipment", text: "We use the latest technology for accurate diagnostics and reliable care." },
  { icon: "quality", title: "Premium Products", text: "Only trusted products for a spotless, long-lasting finish." },
  { icon: "customer", title: "Customer First", text: "Transparency, honesty, and customer satisfaction always come first." },
] as const;

export function WhyChooseUs() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHeading(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  const headingWords = ["Your", "Satisfaction", "is", "Our", "Mission"];

  return (
    <section className="bg-[#fafafa] px-[22px] pt-20 pb-9 max-md:pt-14" id="services">
      <div className="mx-auto max-w-[1120px]">
        <header className="mb-8 text-center">
          <p className="section-eyebrow section-eyebrow--center mb-3">Why choose us</p>
          <h2
            ref={headingRef}
            aria-label="Your Satisfaction is Our Mission"
            className="text-[clamp(27px,3vw,38px)] leading-[1.08] font-extrabold tracking-[-1.2px] text-[#191b1e]"
          >
            <span className="inline [perspective:700px]" aria-hidden="true">
              {headingWords.map((word, wordIndex) => {
                const previousCharacterCount = headingWords
                  .slice(0, wordIndex)
                  .reduce((total, item) => total + item.length, 0);

                return (
                  <span className="mr-[.23em] inline-block overflow-hidden pb-1 align-bottom last:mr-0" key={word}>
                    {[...word].map((character, characterIndex) => {
                      const order = previousCharacterCount + characterIndex;

                      return (
                        <span
                          className={`inline-block transform-gpu [transform-origin:50%_100%] [backface-visibility:hidden] transition-[transform,opacity] duration-800 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:transition-none ${
                            showHeading
                              ? "translate-y-0 opacity-100 [transform:translateY(0)_rotateX(0deg)]"
                              : "opacity-0 [transform:translateY(90%)_rotateX(-40deg)]"
                          }`}
                          style={{ transitionDelay: `${order * 28}ms` }}
                          key={`${character}-${characterIndex}`}
                        >
                          {character}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
          {benefits.map((benefit) => (
            <article className="group min-h-[210px] rounded-2xl border border-[#eceeef] bg-white px-7 py-7 text-center shadow-[0_12px_32px_#25282c0a] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_38px_#25282c14]" key={benefit.title}>
              <LineIcon className="mx-auto mb-4 size-12 text-[#55585c] transition group-hover:scale-110 group-hover:text-black" name={benefit.icon} />
              <h3 className="mb-2 text-[14px] font-extrabold text-[#232528]">{benefit.title}</h3>
              <p className="mx-auto max-w-[190px] text-xs leading-6 text-[#696c70]">{benefit.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-5 max-sm:flex-col max-sm:gap-3">
          <div className="flex items-center" aria-hidden="true">
            <Image className="size-9 rounded-full border-[3px] border-white object-cover" src="/images/testimonial-v2-img1-BGl5DInD.jpg" alt="" width={36} height={36} />
            <Image className="-ml-2 size-9 rounded-full border-[3px] border-white object-cover" src="/images/testimonial-v2-img2-BEDniIH0.jpg" alt="" width={36} height={36} />
            <Image className="-ml-2 size-9 rounded-full border-[3px] border-white object-cover" src="/images/testimonial-v2-img3-Dr2J8lNN.jpg" alt="" width={36} height={36} />
            <b className="-ml-2 grid size-10 place-items-center rounded-full border-[3px] border-white bg-[#303236] text-[10px] text-white">10K+</b>
          </div>
          <p className="text-xs font-bold tracking-[.02em] text-[#5c5f63]">Satisfied Customers Trust Us Across UAE</p>
        </div>
      </div>
    </section>
  );
}
