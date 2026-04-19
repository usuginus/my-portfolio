import SectionHeading from "@/components/ui/SectionHeading";
import { workExperience, education, awards } from "@/data/resume";

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-14 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Resume" />

        {/* About */}
        <p className="text-sm leading-relaxed text-muted mb-16">
          会津高校でクイズ研究部を立ち上げ高校生クイズ全国大会に出場、テレビ放映。筑波大学・大学院では VR
          とハプティクスを研究し、IVRC 2019 総合優勝。2020
          年にグリーへ新卒入社し、メタバースライブ配信アプリ「REALITY」のバックエンド開発に従事。新卒MVP受賞・チームの立ち上げ・データ基盤構築・Engineering Managerを経験。
          2025 年からは株式会社メルカリでフィンテック領域の開発に従事し、暗号資産取引サービスの開発と AI Agent を活用した開発支援に取り組んでいる。
        </p>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-6">
            Experience
          </h3>
          <div className="space-y-12">
          {workExperience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h4 className="font-bold">{job.company}</h4>
                  {job.subsidiary && (
                    <p className="text-sm text-muted">{job.subsidiary}</p>
                  )}
                </div>
                <p className="text-xs text-muted tabular-nums">{job.period}</p>
              </div>

              <div className="mt-6 border-l border-border pl-6 space-y-8">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h5 className="text-sm font-bold">{role.title}</h5>
                      <p className="text-xs text-muted tabular-nums">
                        {role.period}
                      </p>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {role.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted">
                          - {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-4">
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.institution}>
                  <p className="text-sm font-bold">{edu.institution}</p>
                  {edu.program && (
                    <p className="text-xs text-muted">{edu.program}</p>
                  )}
                  <p className="text-xs text-muted">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-4">
              Awards
            </h3>
            <div className="space-y-2">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="flex items-baseline justify-between gap-4"
                >
                  <p className="text-sm">{award.title}</p>
                  <p className="text-xs text-muted tabular-nums flex-shrink-0">
                    {award.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
