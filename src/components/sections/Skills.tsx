import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillSections } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-14 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Skills" />

        <div className="grid md:grid-cols-2 gap-16">
          {skillSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold">{section.title}</h3>
              <p className="text-xs text-muted mb-6">{section.subtitle}</p>

              <div className="space-y-5">
                {section.technologies.map((cat) => (
                  <div key={cat.category}>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                      {cat.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <SkillBadge key={item} name={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
