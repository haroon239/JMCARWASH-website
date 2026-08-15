import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  ["Home", "/#home"],
  ["About Us", "/#about"],
  ["Services", "/#services"],
  ["Our Team", "/#team"],
  ["Gallery", "/#gallery"],
  ["Contact Us", "/#contact"],
] as const;

const services = ["Premium Car Wash", "Interior Detailing", "Paint Protection", "Steam Cleaning", "Wax & Polish", "Doorstep Service"];

const hours = [
  ["Monday – Friday", "8:00 AM – 8:00 PM"],
  ["Saturday", "9:00 AM – 7:00 PM"],
  ["Sunday", "10:00 AM – 6:00 PM"],
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#25282c] text-white" id="contact">
      <div className="absolute inset-0 opacity-[.045] [background-image:linear-gradient(30deg,#fff_12%,transparent_12.5%,transparent_87%,#fff_87.5%,#fff),linear-gradient(150deg,#fff_12%,transparent_12.5%,transparent_87%,#fff_87.5%,#fff)] [background-position:0_0,36px_63px] [background-size:72px_126px]" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 size-[380px] rounded-full border-[70px] border-white/[.025]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-[1.15fr_.8fr_1fr_1.25fr] gap-14 px-[22px] pt-20 pb-16 max-[1000px]:grid-cols-2 max-md:gap-10 max-md:pt-14 max-[520px]:grid-cols-1">
        <div>
          <Link className="inline-flex rounded-xl bg-white px-4 py-2.5" href="/#home" aria-label="JM Car Wash home">
            <Image className="h-[70px] w-[170px] scale-[1.22] object-contain" src="/images/logo1.png" alt="JM Car Wash" width={640} height={400} />
          </Link>
          <p className="mt-6 max-w-[290px] text-[13px] leading-7 text-white/62">Premium car wash and detailing delivered with care, precision, and dependable service. Your car deserves the finish we deliver.</p>
          <div className="mt-6 space-y-3 text-xs text-white/75">
            <a className="flex items-center gap-3 transition hover:text-white" href="tel:+971528843059"><span className="grid size-8 place-items-center rounded-full border border-white/15 bg-white/5">☎</span>+971 528843059</a>
            <a className="flex items-center gap-3 transition hover:text-white" href="mailto:jmcarwashandcleaning@gmail.com"><span className="grid size-8 place-items-center rounded-full border border-white/15 bg-white/5">✉</span>jmcarwashandcleaning@gmail.com</a>
          </div>
          <div className="mt-6 flex gap-2.5" aria-label="Social media links">
            {["f", "in", "◎"].map((social) => <a className="grid size-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-xs font-extrabold text-white/80 transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white hover:text-[#292c30]" href="#" key={social} aria-label={social}>{social}</a>)}
          </div>
        </div>

        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-7 space-y-4">{quickLinks.map(([label, href]) => <li key={label}><Link className="group flex items-center gap-2.5 text-[13px] text-white/65 transition hover:translate-x-1 hover:text-white" href={href}><span className="h-px w-3 bg-white/30 transition group-hover:w-5 group-hover:bg-white" />{label}</Link></li>)}</ul>
        </div>

        <div>
          <FooterHeading>Our Services</FooterHeading>
          <ul className="mt-7 space-y-4">{services.map((service) => <li className="flex items-center gap-2.5 text-[13px] text-white/65" key={service}><span className="size-1.5 rounded-full bg-white/35" />{service}</li>)}</ul>
        </div>

        <div>
          <FooterHeading>Working Hours</FooterHeading>
          <div className="mt-7 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[.035] px-5">{hours.map(([day, time]) => <div className="flex items-center justify-between gap-5 py-4 text-xs" key={day}><span className="font-bold text-white/80">{day}</span><span className="whitespace-nowrap text-white/55">{time}</span></div>)}</div>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[.035] px-5 py-4"><p className="text-[10px] font-extrabold tracking-[.1em] text-white/40 uppercase">Service area</p><p className="mt-2 text-[13px] font-bold text-white/80">Serving customers across the UAE</p></div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#1f2226]">
        <div className="mx-auto flex min-h-[78px] max-w-[1180px] items-center justify-between gap-5 px-[22px] text-[11px] text-white/50 max-sm:flex-col max-sm:justify-center max-sm:py-5 max-sm:text-center">
          <p>© {new Date().getFullYear()} JM Car Wash &amp; Cleaning. All rights reserved.</p>
          <div className="flex gap-6"><a className="transition hover:text-white" href="#">Privacy Policy</a><a className="transition hover:text-white" href="#">Terms &amp; Conditions</a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="relative pb-4 text-lg font-extrabold tracking-[-.3px] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-white/70">{children}</h2>;
}
