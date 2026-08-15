import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getService, services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: `${service.title} | JM Car Wash & Cleaning`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const relatedServices = services.filter((item) => item.slug !== service.slug);
  const whatsappMessage = encodeURIComponent(`Hello JM Car Wash, I would like to book the ${service.title} service. Please share available times and details.`);
  const whatsappUrl = `https://wa.me/971528843059?text=${whatsappMessage}`;

  return (
    <>
      <Header />
      <main className="overflow-hidden bg-white text-[#1c1f23]">
        <section className="relative bg-[#f3f4f5] px-5 pt-8 pb-[clamp(65px,7vw,100px)]">
          <div className="pointer-events-none absolute -top-40 -right-28 size-[430px] rounded-full border-[75px] border-white/70" aria-hidden="true" />
          <div className="mx-auto max-w-[1180px]">
            <nav className="mb-7 flex items-center gap-2 text-[11px] font-bold text-[#777a7e]" aria-label="Breadcrumb">
              <Link className="transition hover:text-black" href="/">Home</Link><span aria-hidden="true">/</span>
              <Link className="transition hover:text-black" href="/#packages">Services</Link><span aria-hidden="true">/</span>
              <span className="text-[#2c2f33]">{service.title}</span>
            </nav>

            <div className="grid min-h-[580px] grid-cols-[.92fr_1.08fr] overflow-hidden rounded-[28px] border border-[#e0e2e4] bg-white shadow-[0_25px_65px_rgb(32_35_40_/_0.10)] max-[850px]:grid-cols-1">
              <div className="animate-[hero-slide-right_1.2s_cubic-bezier(.22,.75,.22,1)_both] px-[clamp(28px,5vw,70px)] py-[clamp(48px,7vw,82px)] motion-reduce:animate-none">
                <span className="inline-flex rounded-full bg-[#eff0f1] px-4 py-2 text-[10px] font-extrabold tracking-[.1em] text-[#55585c] uppercase">{service.tag}</span>
                <h1 className="mt-6 max-w-[550px] text-[clamp(43px,5vw,68px)] leading-[.98] font-extrabold tracking-[-3px] text-[#191b1e]">{service.title}</h1>
                <p className="mt-7 max-w-[560px] text-[15px] leading-7 text-[#666a6e]">{service.description}</p>

                <div className="mt-8 grid max-w-[490px] grid-cols-2 gap-3 max-sm:grid-cols-1">
                  <a className="group flex h-[58px] items-center gap-3 whitespace-nowrap rounded-xl bg-[#2b2d30] px-5 text-[13px] font-extrabold text-white shadow-[0_12px_28px_rgb(20_22_25_/_0.18)] [animation:cta-attention_3.2s_ease-in-out_infinite] transition-colors hover:bg-black motion-reduce:animate-none" href={whatsappUrl} target="_blank" rel="noreferrer">
                    <span className="grid size-8 place-items-center rounded-full bg-white/12 text-base" aria-hidden="true">◉</span>
                    Book on WhatsApp <span className="ml-auto" aria-hidden="true">→</span>
                  </a>
                  <a className="group flex h-[58px] items-center gap-3 rounded-xl border border-[#d8dade] bg-white px-5 text-[13px] font-extrabold text-[#292c30] shadow-[0_10px_25px_rgb(32_35_40_/_0.08)] [animation:cta-attention_3.2s_ease-in-out_.55s_infinite] hover:bg-[#f4f5f6] motion-reduce:animate-none" href="tel:+971528843059">
                    <span className="grid size-8 place-items-center rounded-full bg-[#eff0f1]" aria-hidden="true">☎</span>
                    Call Us <span className="ml-auto" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="relative min-h-[500px] animate-[hero-image-reveal_1s_.15s_both] overflow-hidden bg-[#dfe1e3] motion-reduce:animate-none max-sm:min-h-[390px]">
                <Image className="object-cover" src={service.image} alt={`${service.title} by JM Car Wash`} fill priority sizes="(max-width: 850px) 100vw, 54vw" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255_/.15),transparent_35%),linear-gradient(0deg,rgb(20_22_25_/.42),transparent_42%)]" />
                <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between gap-4 rounded-2xl border border-white/35 bg-white/88 px-6 py-5 shadow-xl backdrop-bl-xl max-sm:px-4">
                  <div><p className="text-[9px] font-extrabold tracking-[.1em] text-[#808388] uppercase">Estimated duration</p><p className="mt-1 text-sm font-extrabold text-[#292c30]">{service.duration}</p></div>
                  <span className="h-9 w-px bg-[#d7d9dc]" aria-hidden="true" />
                  <div><p className="text-[9px] font-extrabold tracking-[.1em] text-[#808388] uppercase">Ideal for</p><p className="mt-1 text-sm font-extrabold text-[#292c30]">{service.idealFor}</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-[clamp(70px,8vw,110px)]">
          <div className="mx-auto grid max-w-[1120px] grid-cols-[.8fr_1.2fr] gap-[clamp(45px,8vw,110px)] max-[800px]:grid-cols-1">
            <div>
              <p className="text-[10px] font-extrabold tracking-[.15em] text-[#777a7e] uppercase">What is included</p>
              <h2 className="mt-3 text-[clamp(34px,4vw,50px)] leading-[1.03] font-extrabold tracking-[-2px]">Every detail, carefully handled.</h2>
              <p className="mt-5 text-sm leading-7 text-[#686b70]">We adapt the final treatment to your vehicle’s size, material, and condition while maintaining a consistent quality process.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {service.included.map((item, index) => (
                <div className="group flex min-h-[72px] items-center gap-4 rounded-2xl border border-[#e4e6e8] bg-[#fafafa] px-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_rgb(32_35_40_/.08)]" key={item}>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#303236] text-xs font-extrabold text-white">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[13px] font-extrabold text-[#303337]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f4f5] px-5 py-[clamp(70px,8vw,105px)]">
          <div className="mx-auto max-w-[1120px]">
            <header className="mx-auto max-w-[650px] text-center"><p className="text-[10px] font-extrabold tracking-[.15em] text-[#777a7e] uppercase">Our process</p><h2 className="mt-3 text-[clamp(34px,4vw,50px)] leading-[1.03] font-extrabold tracking-[-2px]">A considered three-step service.</h2></header>
            <div className="mt-11 grid grid-cols-3 gap-5 max-[760px]:grid-cols-1">
              {service.process.map((step, index) => (
                <article className="relative rounded-2xl border border-[#dfe1e3] bg-white p-7 shadow-[0_14px_35px_rgb(32_35_40_/.06)] transition duration-300 hover:-translate-y-1.5" key={step.title}>
                  <span className="text-[42px] leading-none font-black text-[#e5e6e8]">0{index + 1}</span><h3 className="mt-6 text-xl font-extrabold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[#6a6d71]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-[clamp(70px,8vw,110px)]">
          <div className="mx-auto grid max-w-[1120px] grid-cols-[1fr_.95fr] gap-[clamp(45px,7vw,90px)] max-[820px]:grid-cols-1">
            <div><p className="text-[10px] font-extrabold tracking-[.15em] text-[#777a7e] uppercase">Why choose this service</p><h2 className="mt-3 text-[clamp(34px,4vw,50px)] leading-[1.03] font-extrabold tracking-[-2px]">Care you can see and feel.</h2><div className="mt-8 space-y-4">{service.benefits.map((benefit) => <article className="rounded-2xl border border-[#e4e6e8] p-6" key={benefit.title}><h3 className="text-lg font-extrabold">{benefit.title}</h3><p className="mt-2 text-sm leading-7 text-[#6a6d71]">{benefit.text}</p></article>)}</div></div>
            <div><p className="text-[10px] font-extrabold tracking-[.15em] text-[#777a7e] uppercase">Service questions</p><h2 className="mt-3 text-[clamp(34px,4vw,50px)] leading-[1.03] font-extrabold tracking-[-2px]">Good to know.</h2><div className="mt-8 space-y-3">{service.faqs.map((faq) => <details className="group rounded-2xl border border-[#e1e3e5] bg-[#fafafa] open:bg-white open:shadow-[0_12px_30px_rgb(32_35_40_/.07)]" key={faq.question}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[14px] font-extrabold"><span>{faq.question}</span><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#eceeef] text-lg transition group-open:rotate-45 group-open:bg-[#303236] group-open:text-white">+</span></summary><p className="mx-6 border-t border-[#e7e9eb] pt-4 pb-6 text-sm leading-7 text-[#6a6d71]">{faq.answer}</p></details>)}</div></div>
          </div>
        </section>

        <section className="bg-[#25282c] px-5 py-[clamp(65px,7vw,90px)] text-white">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-8 max-[760px]:flex-col max-[760px]:items-start">
            <div><p className="text-[10px] font-extrabold tracking-[.15em] text-white/45 uppercase">Ready when you are</p><h2 className="mt-3 max-w-[680px] text-[clamp(34px,4vw,50px)] leading-[1.03] font-extrabold tracking-[-2px]">Give your vehicle the care it deserves.</h2></div>
            <div className="flex gap-3 max-sm:w-full max-sm:flex-col"><a className="flex h-13 items-center justify-center whitespace-nowrap rounded-xl bg-white px-6 text-xs font-extrabold text-[#25282c]" href={whatsappUrl} target="_blank" rel="noreferrer">Book on WhatsApp</a><a className="flex h-13 items-center justify-center rounded-xl border border-white/20 px-6 text-xs font-extrabold" href="tel:+971528843059">Call Us</a></div>
          </div>
        </section>

        <section className="bg-[#f7f8f9] px-5 py-[clamp(65px,7vw,90px)]">
          <div className="mx-auto max-w-[1120px]"><div className="mb-8 flex items-end justify-between gap-5"><div><p className="text-[10px] font-extrabold tracking-[.15em] text-[#777a7e] uppercase">Explore more</p><h2 className="mt-2 text-[clamp(30px,3.5vw,43px)] font-extrabold tracking-[-1.5px]">Related services</h2></div><Link className="text-xs font-extrabold" href="/#packages">View all services →</Link></div><div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">{relatedServices.map((related) => <Link className="group grid grid-cols-[150px_1fr] overflow-hidden rounded-2xl border border-[#e1e3e5] bg-white shadow-[0_12px_30px_rgb(32_35_40_/.06)] transition hover:-translate-y-1 max-[480px]:grid-cols-1" href={`/services/${related.slug}`} key={related.slug}><div className="relative min-h-[150px]"><Image className="object-cover transition duration-500 group-hover:scale-105" src={related.image} alt={related.title} fill sizes="150px" /></div><div className="flex flex-col justify-center p-6"><span className="text-[9px] font-extrabold tracking-[.1em] text-[#818489] uppercase">{related.tag}</span><h3 className="mt-2 text-xl font-extrabold">{related.title}</h3><span className="mt-4 text-xs font-bold">View details →</span></div></Link>)}</div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
