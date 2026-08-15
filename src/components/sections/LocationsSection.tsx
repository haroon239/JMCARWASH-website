"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { locations } from "@/data/locations";

export function LocationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-5 py-[clamp(72px,8vw,112px)]" id="locations">
      <div className="pointer-events-none absolute top-16 -left-32 size-[330px] rounded-full border-[60px] border-[#f2f3f4]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[4%] bottom-5 text-[clamp(90px,14vw,190px)] leading-none font-black tracking-[-.08em] text-[#f6f6f7] select-none" aria-hidden="true">UAE</div>

      <div className="relative mx-auto max-w-[1160px]">
        <header className="mx-auto mb-12 max-w-[680px] text-center">
          <p className={`section-eyebrow section-eyebrow--center mb-4 transition-[transform,opacity] duration-700 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>Closer care, wherever you are</p>
          <h2 className={`text-[clamp(38px,4.5vw,58px)] leading-[1.02] font-extrabold tracking-[-2.2px] text-[#1d2024] transition-[transform,opacity] delay-100 duration-1000 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-9 opacity-0"}`}>Premium car care across Dubai</h2>
          <p className={`mx-auto mt-5 max-w-[580px] text-[15px] leading-7 text-[#6a6d71] transition-[transform,opacity] delay-200 duration-900 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>Professional washing and detailing conveniently available in the communities you know.</p>
        </header>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
          {locations.map((location, index) => (
            <Link
              className={`group relative isolate aspect-[1.42] overflow-hidden rounded-[20px] bg-[#dfe1e3] shadow-[0_18px_45px_rgb(32_35_40_/_0.10)] transition-[transform,opacity] duration-1000 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
              style={{ transitionDelay: `${220 + index * 95}ms` }}
              href={`/locations/${location.slug}`}
              key={location.name}
              aria-label={`View car wash service details for ${location.area}`}
            >
              <Image
                className="object-cover transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]"
                src={location.image}
                alt={`${location.area} car wash service location`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgb(17_19_22_/_0.82)_100%)] transition-colors duration-500 group-hover:bg-[linear-gradient(180deg,rgb(17_19_22_/_0.06)_15%,rgb(17_19_22_/_0.9)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div className="translate-y-5 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0">
                  <p className="text-[10px] font-bold tracking-[.14em] text-white/70 uppercase">Service area</p>
                  <h3 className="mt-1 text-[22px] leading-none font-extrabold text-white">{location.name}</h3>
                  <p className="mt-2 translate-y-2 text-xs font-semibold text-white/80 opacity-0 transition-[transform,opacity] duration-500 group-hover:translate-y-0 group-hover:opacity-100">{location.area}</p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/35 bg-white/15 text-lg text-white backdrop-blur-md transition duration-500 group-hover:rotate-[-35deg] group-hover:bg-white group-hover:text-[#25282c]" aria-hidden="true">↗</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={`mt-9 flex items-center justify-center gap-4 transition-[transform,opacity] delay-[850ms] duration-900 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
          <span className="h-px w-12 bg-[#cfd1d4]" aria-hidden="true" />
          <p className="text-center text-[12px] font-bold tracking-[.04em] text-[#65686c]">More Dubai service areas coming soon</p>
          <span className="h-px w-12 bg-[#cfd1d4]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
