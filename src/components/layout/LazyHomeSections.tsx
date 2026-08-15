import dynamic from "next/dynamic";

const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs").then((module) => module.WhyChooseUs));
const CleaningIntro = dynamic(() => import("@/components/sections/CleaningIntro").then((module) => module.CleaningIntro));
const StatsBar = dynamic(() => import("@/components/sections/StatsBar").then((module) => module.StatsBar));
const ServicesShowcase = dynamic(() => import("@/components/sections/ServicesShowcase").then((module) => module.ServicesShowcase));
const BeforeAfter = dynamic(() => import("@/components/sections/BeforeAfter").then((module) => module.BeforeAfter));
const UaeServiceBanner = dynamic(() => import("@/components/sections/UaeServiceBanner").then((module) => module.UaeServiceBanner));
const LocationsSection = dynamic(() => import("@/components/sections/LocationsSection").then((module) => module.LocationsSection));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then((module) => module.FaqSection));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((module) => module.Testimonials));
const Footer = dynamic(() => import("@/components/layout/Footer").then((module) => module.Footer));

export function LazyHomeSections() {
  return (
    <>
      <WhyChooseUs />
      <CleaningIntro />
      <StatsBar />
      <ServicesShowcase />
      <BeforeAfter />
      <UaeServiceBanner />
      <LocationsSection />
      <FaqSection />
      <Testimonials />
      <Footer />
    </>
  );
}
