import Hero from "@/components/sections/Hero";
import Resume from "@/components/sections/Resume";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <Resume />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Portfolio />
      </FadeIn>
    </>
  );
}
