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
  description:
    "Audio, VR, Crypto, AI が好物の Backend & Data & Game エンジニア。",
  url: "https://usuginus.github.io/my-portfolio",
  sameAs: ["https://github.com/usuginus"],
  worksFor: [
    {
      "@type": "Organization",
      name: "株式会社メルカリ",
      url: "https://about.mercari.com/",
    },
    {
      "@type": "Organization",
      name: "株式会社メルコイン",
      url: "https://about.mercoin.com/",
    },
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "グリーホールディングス株式会社",
      url: "https://corp.gree.net/",
    },
    {
      "@type": "Organization",
      name: "REALITY株式会社",
      url: "https://reality.inc/",
    },
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "筑波大学大学院",
      department: "システム情報工学研究科",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "筑波大学",
      department: "工学システム学類",
    },
  ],
  knowsAbout: [
    "Go",
    "TypeScript",
    "gRPC",
    "Kubernetes",
    "Google Cloud",
    "Cloud Spanner",
    "BigQuery",
    "Virtual Reality",
    "Haptics",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Cloud Professional Cloud Architect",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Cloud Professional Cloud Developer",
    },
  ],
  award: [
    "GREE 新卒 MVP 2020",
    "IVRC 2019 総合優勝",
    "電気学会技術委員会奨励賞",
    "一般社団法人茗渓会賞",
  ],
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
