import type { ContactLink } from '../types';

type ContactPanelProps = {
  headline: string;
  contact: ContactLink[];
  resumeUrl: string;
};

export function ContactPanel({ headline, contact, resumeUrl }: ContactPanelProps) {
  return (
    <section id="contact-section" className="space-y-4">
      <article className="rounded-[1.75rem] bg-gradient-to-br from-[#fff7ef] via-white to-[#f4ece6] p-5 shadow-sm ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">Check out my resume!</p>
        <p className="mt-3 text-lg font-semibold tracking-tight text-ink">{headline}</p>
        <p className="mt-2 text-sm leading-6 text-black/70">
          Feel free to take a look at my resume and message me with any opportunities!
        </p>
        <div className="mt-4 flex gap-3">
          <a
            href={contact[0]?.href}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-plum focus:outline-none focus:ring-2 focus:ring-rose/40"
          >
            Email Me
          </a>
          <a
            href={resumeUrl}
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mist focus:outline-none focus:ring-2 focus:ring-rose/40"
          >
            Download Resume
          </a>
        </div>
      </article>

      <article className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">Links</p>
        <div className="mt-4 space-y-3">
          {contact.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between rounded-2xl bg-mist px-4 py-4 transition hover:bg-[#f6ede6] focus:outline-none focus:ring-2 focus:ring-rose/40"
            >
              <div>
                <p className="text-sm font-semibold text-ink">{item.label}</p>
                <p className="text-sm text-black/60">{item.value}</p>
              </div>
              <span className="text-sm text-black/35">↗</span>
            </a>
          ))}
        </div>
      </article>
    </section>
  );
}
