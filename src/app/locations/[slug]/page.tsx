import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getLocation, locations } from "@/data/locations";
import { services } from "@/data/services";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

const workingHours = [
  ["Monday – Friday", "8:00 AM – 8:00 PM"],
  ["Saturday", "9:00 AM – 7:00 PM"],
  ["Sunday", "10:00 AM – 6:00 PM"],
] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  return {
    title: `Car Wash in ${location.name} | JM Car Wash & Cleaning`,
    description: location.introduction,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const whatsappMessage = encodeURIComponent(`Hello JM Car Wash, I would like to book a car cleaning service in ${location.name} (${location.area}). Please share available services and appointment times.`);
  const whatsappUrl = `https://wa.me/971528843059?text=${whatsappMessage}`;

  return (
    <>
      <Header />
      <main className="overflow-hidden bg-white text-[#1c1f23]">
        <section className="relative bg-[#f3f4f5] px-5 pt-8 pb-[clamp(65px,7vw,100px)]">
          <div className="pointer-events-none absolute -top-44 -left-32 size-[430px] rounded-full border-[75px] border-white/70" aria-hidden="true" />
          <div className="mx-auto max-w-[1180px]">
            <nav className="mb-7 flex items-center gap-2 text-[11px] font-bold text-[#777a7e]" aria-label="Breadcrumb">
              <Link className="transition hover:text-black" href="/">Home</Link><span aria-hidden="true">/</span>
              <Link className="transition hover:text-black" href="/#locations">Locations</Link><span aria-hidden="true">/</span>
              <span className="text-[#2c2f33]">{location.name}</span>
            </nav>

            <div className="grid min-h-[570px] grid-cols-[1.05fr_.95fr] overflow-hidden rounded-[28px] border border-[#dfe1e3] bg-white shadow-[0_25px_65px_rgb(32_35_40_/_0.10)] max-[850px]:grid-cols-1">
              <div className="relative min-h-[500px] animate-[hero-slide-right_1s_both] overflow-hidden bg-[#dfe1e3] motion-reduce:animate-none max-sm:min-h-[390px]">
                <Image className="object-cover" src={location.image} alt={`${location.area} service area`} fill priority sizes="(max-width: 850px) 100vw, 53vw" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(20_22_25_/.72),transparent_58%)]" />
                <div className="absolute right-8 bottom-8 left-8 text-white max-sm:right-5 max-sm:bottom-5 max-sm:left-5">
                  <p className="text-[10px] font-extrabold tracking-[.15em] text-white/65 uppercase">JM Car Wash service area</p>
                  <p className="mt-2 text-[clamp(28px,4vw,46px)] leading-none font-extrabold tracking-[-1.5px]">{location.area}</p>
                </div>
              </div>

              <div className="animate-[hero-image-reveal_1.1s_.1s_both] px-[clamp(28px,5vw,68px)] py-[clamp(50px,7vw,82px)] motion-reduce:animate-none">
                <span className="inline-flex rounded-full bg-[#eff0f1] px-4 py-2 text-[10px] font-extrabold tracking-[.1em] text-[#55585c] uppercase">Service location</span>
                <h1 className="mt-6 text-[clamp(48px,6vw,76px)] leading-[.95] font-extrabold tracking-[-3px]">Car care in<br />{location.name}</h1>
                <p className="mt-7 max-w-[500px] text-[15px] leading-7 text-[#666a6e]">{location.introduction}</p>

                <div className="mt-8 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  <a className="flex h-[58px] items-center gap-3 whitespace-nowrap rounded-xl bg-[#2b2d30] px-5 text-[13px] font-extrabold text-white shadow-[0_12px_28px_rgb(20_22_25_/_0.18)] [animation:cta-attention_3.2s_ease-in-out_infinite] hover:bg-black motion-reduce:animate-none" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="grid size-8 place-items-center rounded-full bg-white/12" aria-hidden="true">◉</span>Book on WhatsApp<span className="ml-auto" aria-hidden="true">→</span></a>
                  <a className="flex h-[58px] items-center gap-3 rounded-xl border border-[#d8dade] bg-white px-5 text-[13px] font-extrabold shadow-[0_10px_25px_rgb(32_35_40_/_0.08)] [animation:cta-attention_3.2s_ease-in-out_.55s_infinite] hover:bg-[#f4f5f6] motion-reduce:animate-none" href="tel:+971528843059"><span className="grid size-8 place-items-center rounded-full bg-[#eff0f1]" aria-hidden="true">☎</span>Call Us<span className="ml-auto" aria-hidden="true">→</span></a>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-[#e6e8ea] pt-6"><span className="grid size-10 place-items-center rounded-full bg-[#eff0f1]" aria-hidden="true">⌖</span><div><p className="text-[9px] font-extrabold tracking-[.1em] text-[#888b8f] uppercase">Coverage</p><p className="mt-1 text-sm font-extrabold">{location.area} service area</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-[clamp(70px,8vw,110px)]">
          <div className="mx-auto max-w-[1120px]">
            <header className="mx-auto max-w-[680px] text-center"><p className="text-[10px] font-extrabold tracking-[.15em] text-[#777a7e] uppercase">Available in {location.name}</p><h2 className="mt-3 text-[clamp(36px,4.4vw,54px)] leading-[1.02] font-extrabold tracking-[-2px]">Choose the care your vehicle needs.</h2><p className="mx-auto mt-5 max-w-[590px] text-sm leading-7 text-[#686b70]">Select a service to review full details, then book directly with our team for the {location.name} service area.</p></header>
            <div className="mt-11 grid grid-cols-3 gap-5 max-[850px]:grid-cols-2 max-sm:grid-cols-1">
              {services.map((service) => (
                <Link className="group overflow-hidden rounded-2xl border border-[#e1e3e5] bg-white shadow-[0_14px_35px_rgb(32_35_40_/.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgb(32_35_40_/.13)]" href={`/services/${service.slug}`} key={service.slug}>
                  <div className="relative h-[205px] overflow-hidden"><Image className="object-cover transition duration-700 group-hover:scale-105" src={service.image} alt={service.title} fill sizes="(max-width: 640px) 100vw, 33vw" /><span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-extrabold tracking-[.08em] uppercase">{service.tag}</span></div>
                  <div className="p-6"><h3 className="text-xl font-extrabold">{service.title}</h3><p className="mt-3 text-xs leading-6 text-[#696c70]">{service.shortDescription}</p><span className="mt-5 inline-flex text-[11px] font-extrabold">View service details →</span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f4f5] px-5 py-[clamp(70px,8vw,105px)]">
          <div className="mx-auto grid max-w-[1120px] grid-cols-[1fr_.85fr] gap-[clamp(45px,8vw,110px)] max-[800px]:grid-cols-1">
            <div><p className="text-[10px] font-extrabold tracking-[.15em] text-[#777a7e] uppercase">Simple booking</p><h2 className="mt-3 text-[clamp(36px,4.4vw,54px)] leading-[1.02] font-extrabold tracking-[-2px]">Professional care without the guesswork.</h2><div className="mt-9 grid grid-cols-3 gap-4 max-sm:grid-cols-1">{[["01", "Choose", "Select the service that matches your vehicle."], ["02", "Confirm", "Message us to confirm timing and availability."], ["03", "Enjoy", "Our team completes the service with careful attention."]].map(([number, title, text]) => <article className="rounded-2xl border border-[#dfe1e3] bg-white p-6" key={number}><span className="text-3xl font-black text-[#d8dade]">{number}</span><h3 className="mt-5 text-lg font-extrabold">{title}</h3><p className="mt-2 text-xs leading-6 text-[#6b6e72]">{text}</p></article>)}</div></div>
            <aside className="rounded-[24px] bg-[#282b2f] p-[clamp(28px,4vw,45px)] text-white shadow-[0_20px_50px_rgb(20_22_25_/.2)]"><p className="text-[10px] font-extrabold tracking-[.14em] text-white/45 uppercase">Working hours</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-1px]">Plan your appointment.</h2><div className="mt-8 divide-y divide-white/10">{workingHours.map(([day, time]) => <div className="flex justify-between gap-5 py-4 text-xs" key={day}><span className="font-bold text-white/70">{day}</span><span className="whitespace-nowrap font-extrabold">{time}</span></div>)}</div><p className="mt-6 text-xs leading-6 text-white/55">Appointments and service availability are confirmed directly by our team.</p><a className="mt-7 flex h-12 items-center justify-center rounded-xl bg-white text-xs font-extrabold text-[#282b2f]" href={whatsappUrl} target="_blank" rel="noreferrer">Check availability on WhatsApp</a></aside>
          </div>
        </section>

        <section className="px-5 py-[clamp(70px,8vw,105px)]">
          <div className="mx-auto grid max-w-[1120px] grid-cols-[.8fr_1.2fr] gap-[clamp(40px,7vw,85px)] max-[800px]:grid-cols-1"><div><p className="text-[10px] font-extrabold tracking-[.15em] text-[#777a7e] uppercase">Location questions</p><h2 className="mt-3 text-[clamp(36px,4.4vw,52px)] leading-[1.02] font-extrabold tracking-[-2px]">Before you book.</h2><p className="mt-5 text-sm leading-7 text-[#686b70]">Need something specific? Message or call our team and we will confirm the best option for your vehicle.</p></div><div className="space-y-3">{[
            ["Do you serve the full surrounding area?", `We serve customers in the ${location.name} and ${location.area} service area. Please share your exact location on WhatsApp so our team can confirm coverage.`],
            ["Is an advance appointment required?", "Advance booking is recommended so we can confirm the right service, timing, and team availability."],
            ["Can I choose any of the listed services?", "Yes. Availability and final timing depend on the vehicle, selected service, and appointment schedule."],
          ].map(([question, answer]) => <details className="group rounded-2xl border border-[#e1e3e5] bg-[#fafafa] open:bg-white open:shadow-[0_12px_30px_rgb(32_35_40_/.07)]" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-extrabold"><span>{question}</span><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#eceeef] text-lg transition group-open:rotate-45 group-open:bg-[#303236] group-open:text-white">+</span></summary><p className="mx-6 border-t border-[#e7e9eb] pt-4 pb-6 text-sm leading-7 text-[#6a6d71]">{answer}</p></details>)}</div></div>
        </section>

        <section className="bg-[#25282c] px-5 py-[clamp(65px,7vw,90px)] text-white"><div className="mx-auto flex max-w-[1120px] items-center justify-between gap-8 max-[760px]:flex-col max-[760px]:items-start"><div><p className="text-[10px] font-extrabold tracking-[.15em] text-white/45 uppercase">Serving {location.name}</p><h2 className="mt-3 max-w-[680px] text-[clamp(34px,4vw,50px)] leading-[1.03] font-extrabold tracking-[-2px]">Ready to arrange your car-care appointment?</h2></div><div className="flex gap-3 max-sm:w-full max-sm:flex-col"><a className="flex h-13 items-center justify-center whitespace-nowrap rounded-xl bg-white px-6 text-xs font-extrabold text-[#25282c]" href={whatsappUrl} target="_blank" rel="noreferrer">Book on WhatsApp</a><a className="flex h-13 items-center justify-center rounded-xl border border-white/20 px-6 text-xs font-extrabold" href="tel:+971528843059">Call Us</a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
