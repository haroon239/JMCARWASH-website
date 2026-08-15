import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export function ServicesShowcase() {
  return (
    <section className="bg-[#fafafa] px-[22px] pt-12 pb-24 max-md:pt-9 max-md:pb-16" id="packages">
      <div className="mx-auto max-w-[1120px]">
        <header className="mb-8 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
          <div>
            <p className="mb-2 text-[10px] font-extrabold tracking-[.12em] text-[#777a7e] uppercase">Our services</p>
            <h2 className="text-[clamp(30px,3.5vw,45px)] leading-[1.04] font-extrabold tracking-[-1.5px] text-[#191b1e]">Quality Car Care<br />at Fair Prices</h2>
          </div>
          {/* <a className="flex h-11 items-center gap-4 rounded-lg border border-[#e3e5e7] bg-white px-5 text-xs font-extrabold text-[#33363a] shadow-[0_8px_22px_#2023280b] transition hover:-translate-y-0.5 hover:shadow-lg" href="#contact">View All Services <span className="grid size-6 place-items-center rounded-full bg-[#e9eaec]">→</span></a> */}
        </header>

        <div className="grid grid-cols-3 gap-6 max-[850px]:grid-cols-2 max-[580px]:grid-cols-1">
          {services.map((service) => (
            <article className="group overflow-hidden rounded-2xl border border-[#e8eaec] bg-white shadow-[0_12px_34px_#2023280c] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_#20232818]" key={service.title}>
              <div className="relative h-[215px] overflow-hidden">
                <Image className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={service.image} alt={service.title} width={500} height={330} />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-extrabold tracking-[.06em] text-[#3f4246] uppercase shadow-md backdrop-bl-sm">{service.tag}</span>
              </div>
              <div className="relative min-h-[180px] px-6 py-6">
                <h3 className="text-xl font-extrabold tracking-[-.5px] text-[#222427]">{service.title}</h3>
                <p className="mt-3 max-w-[310px] text-xs leading-6 text-[#696c70]">{service.shortDescription}</p>
                <div className="mt-5 flex items-center justify-between border-t border-[#eceeef] pt-4">
                  <Link className="text-[11px] font-extrabold text-[#2c2e31]" href={`/services/${service.slug}`}>View service details</Link>
                  <Link className="grid size-9 place-items-center rounded-full bg-[#303236] text-sm text-white transition group-hover:translate-x-1 group-hover:bg-black" href={`/services/${service.slug}`} aria-label={`View ${service.title} details`}>→</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
