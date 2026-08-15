import Image from "next/image";

const members = [
  { name: "Ahmed Al Mansoori", role: "Senior Technician", image: "/images/team-v2-1-DpkybW-W.jpg" },
  { name: "Fatima Al Zaabi", role: "Service Advisor", image: "/images/team-v2-2-BucXl6PA.jpg" },
  { name: "Layla Khalid", role: "Detailing Specialist", image: "/images/team-v2-3-DU3TRt_z.jpg" },
  { name: "Omar Hassan", role: "Quality Inspector", image: "/images/team-v2-4-CDWJ6soP.jpg" },
] as const;

export function TeamShowcase() {
  return (
    <section className="bg-white px-[22px] py-24 max-md:py-16" id="team">
      <div className="mx-auto max-w-[1120px]">
        <header className="mb-8 flex items-end justify-between gap-5 max-sm:flex-col max-sm:items-start">
          <div><p className="mb-2 text-[10px] font-extrabold tracking-[.12em] text-[#777a7e] uppercase">Our team</p><h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1.4px] text-[#191b1e]">Meet Our Expert Team</h2></div>
          {/* <a className="flex h-11 items-center gap-4 rounded-lg border border-[#e3e5e7] bg-[#fafafa] px-5 text-xs font-extrabold text-[#33363a] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg" href="#contact">View All Team <span className="grid size-6 place-items-center rounded-full bg-[#e4e5e7]">→</span></a> */}
        </header>

        <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1">
          {members.map((member) => (
            <article className="group relative h-[350px] overflow-hidden rounded-2xl border border-[#e9eaec] bg-[#f0f1f2] shadow-[0_10px_26px_#2023280b] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_#20232822]" key={member.name}>
              <Image className="h-full w-full object-cover object-top grayscale-[.12] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" src={member.image} alt={`${member.name}, ${member.role}`} width={420} height={520} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_24%,#11182718_52%,#111827d9_100%)] opacity-60 transition duration-500 group-hover:bg-[#111827a8] group-hover:opacity-100" />
              <span className="absolute top-5 left-5 grid size-9 -translate-y-2 place-items-center rounded-full border border-white/30 bg-black/20 opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-[900px]:hidden" aria-hidden="true">
                <span className="size-2 rounded-full border-2 border-white" />
              </span>
              <div className="absolute right-4 bottom-4 left-4 translate-y-1 rounded-xl border border-white/15 bg-[#202327e8] px-5 py-5 text-left text-white shadow-xl backdrop-blur-md transition duration-500 group-hover:-translate-y-1 group-hover:bg-[#202327f5]">
                <span className="mb-2.5 inline-flex rounded-full bg-white/12 px-3 py-1.5 text-[9px] font-extrabold tracking-[.06em] text-white/85 uppercase">{member.role}</span>
                <h3 className="text-lg font-extrabold tracking-[-.3px]">{member.name}</h3>
                <div className="mt-3 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-12 max-[900px]:w-10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
