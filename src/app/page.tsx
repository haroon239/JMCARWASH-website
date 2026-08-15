import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { LazyHomeSections } from "@/components/layout/LazyHomeSections";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LazyHomeSections />
    </main>
  );
}
