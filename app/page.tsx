"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { title: "Signature Hand Wash", text: "A careful two-bucket wash, wheel clean and hand dry for a flawless everyday finish.", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=85" },
  { title: "Interior Revival", text: "Deep vacuuming, steam detailing and surface care that makes the cabin feel new again.", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=85" },
  { title: "Ceramic Protection", text: "Long-lasting gloss and hydrophobic protection, professionally prepared and applied.", image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=85" },
];

const team = [
  ["Ayaan Khan", "Detailing Lead", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85"],
  ["Maya Reed", "Interior Specialist", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85"],
  ["Liam Cole", "Paint Technician", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=700&q=85"],
  ["Sofia James", "Customer Care", "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85"],
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")), { threshold: .14 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Counter({ end, suffix = "+" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0; const step = Math.max(1, Math.ceil(end / 42));
      const timer = setInterval(() => { start = Math.min(end, start + step); setValue(start); if (start >= end) clearInterval(timer); }, 28);
      obs.disconnect();
    });
    if (ref.current) obs.observe(ref.current); return () => obs.disconnect();
  }, [end]);
  return <div ref={ref} className="stat-number">{value}{suffix}</div>;
}

export default function Home() {
  useReveal();
  const [compare, setCompare] = useState(52);
  return <main>
    <div className="topbar"><span>Mon–Sat: 8:00–18:00</span><span>hello@autoglow.com</span><span>21 River Road, Your City</span></div>
    <header className="nav">
      <a className="brand" href="#top"><span>AG</span> AutoGlow</a>
      <nav><a href="#services">Services</a><a href="#about">About</a><a href="#team">Team</a><a href="#pricing">Pricing</a></nav>
      <a className="call" href="tel:+1234567890">Call us · (123) 456 7890</a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <p className="eyebrow light">Detailing done differently</p>
        <h1>Complete care.<br/><em>Unmistakable shine.</em></h1>
        <p className="lead">Premium car care built around meticulous hands, proven products and the kind of attention your vehicle deserves.</p>
        <div className="actions"><a className="btn red" href="#booking">Book your wash</a><a className="play" href="#services"><span>▶</span> See our work</a></div>
        <div className="trust"><div className="avatars"><i>AK</i><i>MR</i><i>LC</i></div><b>4.9/5</b><span>from 800+ happy drivers</span></div>
      </div>
      <div className="hero-photo"><div className="seal">100%<small>HAND FINISH</small></div><div className="satisfied"><b>800+</b><span>satisfied customers</span></div></div>
    </section>

    <section className="booking" id="booking">
      <div className="service-tabs"><span>✦ Car Wash</span><span>◉ Detailing</span><span>◆ Engine Care</span><span>▣ Interior Cleaning</span><span>◇ Wax & Polish</span></div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Service<select aria-label="Service"><option>Signature wash</option><option>Full detail</option><option>Ceramic protection</option></select></label>
        <label>Vehicle<select aria-label="Vehicle"><option>Sedan</option><option>SUV</option><option>Pickup truck</option></select></label>
        <label>Location<input aria-label="Location" placeholder="Enter your area"/></label>
        <button className="btn red">Check availability →</button>
      </form>
    </section>

    <section className="mission section reveal">
      <p className="eyebrow">Why AutoGlow</p><h2>Your satisfaction is our mission</h2>
      <div className="feature-grid">
        {[['◎','Obsessive attention','Every vent, seam and surface is handled with care.'],['✦','Contactless options','Modern wash methods protect delicate paintwork.'],['▣','Professional equipment','Premium products and calibrated tools, every time.']].map(x=><article key={x[1]}><b className="icon">{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p><a href="#services">Learn more →</a></article>)}
      </div>
      <div className="promise"><span>★★★★★</span> 100% satisfaction promise, on every clean</div>
    </section>

    <section className="about section" id="about">
      <div className="about-collage reveal"><img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=85" alt="Professional detailing a car"/><div className="mini-note">We wash it<br/>to shine it.</div></div>
      <div className="about-copy reveal"><p className="eyebrow">About us</p><h2>Expert car cleaning with quality care</h2><p>We combine skilled craftsmanship with modern detailing systems to revive, protect and maintain every vehicle. No rushed jobs—just honest care and a finish you can feel.</p>
        <div className="checks"><span>✓ Certified & insured</span><span>✓ Deep-clean standards</span><span>✓ Reserve your spot</span><span>✓ Flexible schedules</span></div>
        <a className="btn red" href="#booking">Discover our story</a>
      </div>
    </section>

    <section className="stats">
      <div><Counter end={12}/><span>Years of expertise</span></div><div><Counter end={40}/><span>Trained specialists</span></div><div><Counter end={200} suffix="k+"/><span>Vehicles renewed</span></div><div><Counter end={98} suffix="%"/><span>Five-star reviews</span></div>
    </section>

    <section className="section services" id="services"><div className="section-head reveal"><div><p className="eyebrow">What we do</p><h2>Premium care, fair prices</h2></div><a className="btn outline" href="#pricing">View all services</a></div>
      <div className="cards">{services.map((s,i)=><article className="service-card reveal" key={s.title} style={{transitionDelay:`${i*90}ms`}}><img src={s.image} alt={s.title}/><div><small>0{i+1}</small><h3>{s.title}</h3><p>{s.text}</p><a href="#booking">Book service →</a></div></article>)}</div>
    </section>

    <section className="cta reveal"><p className="eyebrow light">Drive in dull. Drive out brilliant.</p><h2>The best version of your car<br/>is one appointment away.</h2><p>Friendly specialists, transparent pricing and premium results.</p><a className="btn red" href="#booking">Book your detail</a></section>

    <section className="section team" id="team"><div className="team-intro reveal"><p className="eyebrow">Meet the crew</p><h2>People who care<br/>about the details</h2><p>Our specialists bring patience, pride and proven technique to every vehicle.</p><a href="#booking" className="btn red">Meet the team</a></div>
      {team.map((m,i)=><article className={`member reveal m${i}`} key={m[0]}><img src={m[2]} alt={m[0]}/><div><b>{m[0]}</b><span>{m[1]}</span></div></article>)}
    </section>

    <section className="comparison section"><p className="eyebrow light">Before & after</p><h2>See the power of a true clean</h2><div className="compare" style={{"--split":`${compare}%`} as React.CSSProperties}><div className="after"></div><div className="before"></div><div className="split-line"><span>↔</span></div><input type="range" min="8" max="92" value={compare} onChange={e=>setCompare(+e.target.value)} aria-label="Compare before and after"/><small className="before-label">Before</small><small className="after-label">After</small></div></section>

    <section className="process section reveal"><div><p className="eyebrow">How it works</p><h2>We make every part<br/>of the experience easy</h2><p>Choose your service, reserve a convenient time, and leave the rest to our specialists.</p></div><ol><li><b>01</b><span><strong>Choose your care</strong>Pick the package that fits your car.</span></li><li><b>02</b><span><strong>Reserve your time</strong>Book in less than a minute.</span></li><li><b>03</b><span><strong>Enjoy the shine</strong>Collect a car that feels renewed.</span></li></ol></section>

    <section className="pricing section" id="pricing"><p className="eyebrow">Simple pricing</p><h2>Choose your perfect clean</h2><div className="price-grid">
      {[["Essential","35","Exterior hand wash","Wheel & tire clean","Hand dry"],["Complete","55","Everything in Essential","Interior vacuum & wipe","Windows inside & out"],["Signature","89","Everything in Complete","Paint decontamination","Premium wax protection"]].map((p,i)=><article className={i===1?'popular':''} key={p[0]}>{i===1&&<small>Most popular</small>}<h3>{p[0]}</h3><div className="price"><sup>$</sup>{p[1]}</div><ul>{p.slice(2).map(x=><li key={x}>✓ {x}</li>)}</ul><a href="#booking" className={`btn ${i===1?'red':'dark'}`}>Choose package</a></article>)}
    </div></section>
    <footer><a className="brand" href="#top"><span>AG</span> AutoGlow</a><p>Premium car care, made personal.</p><p>© 2026 AutoGlow. All rights reserved.</p></footer>
  </main>;
}
