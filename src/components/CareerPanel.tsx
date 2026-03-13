import type { Education, Experience } from '../types';

type CareerPanelProps = {
  about: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
};

export function CareerPanel({ about, experience, education, skills }: CareerPanelProps) {
  return (
    <section className="space-y-4">
      <article id="about-section" className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">About</p>
        <p className="mt-3 text-sm leading-6 text-black/75">{about}</p>
      </article>

      <article id="work-section" className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">Experience</p>
        <div className="mt-4 space-y-4">
          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`} className="rounded-2xl bg-mist p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink">{item.role}</p>
                  <p className="text-sm text-black/60">{item.company}</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">{item.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-5 text-black/70">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article id="skills-section" className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">Skills</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-black/10 bg-[#fcf7f2] px-3 py-2 text-sm text-black/70">
              {skill}
            </span>
          ))}
        </div>
      </article>

      <article className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">Education</p>
        <div className="mt-4 space-y-3">
          {education.map((item) => (
            <div key={item.school} className="rounded-2xl bg-mist p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink">{item.degree}</p>
                  <p className="text-sm text-black/60">{item.school}</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">{item.period}</span>
              </div>
              <p className="mt-3 text-sm leading-5 text-black/70">{item.notes}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
