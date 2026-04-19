import Hero from "@/components/sections/Hero";
import Resume from "@/components/sections/Resume";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import FadeIn from "@/components/ui/FadeIn";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Usuginu",
  alternateName: ["うすぎぬ", "伊藤弘一郎", "Koichiro Ito"],
  jobTitle: "Software Engineer",
  url: "https://usuginus.github.io/my-portfolio",
  sameAs: ["https://github.com/usuginus"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
