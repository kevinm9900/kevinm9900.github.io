import type { Project } from '../types';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 px-4 pb-4 pt-20 backdrop-blur-sm md:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className={`animate-rise w-full max-w-md rounded-[2rem] bg-gradient-to-br ${project.accent} p-2 shadow-phone`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="rounded-[1.6rem] bg-white/90 p-5 backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">{project.category}</p>
              <h2 id="project-modal-title" className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-black/5 px-3 py-2 text-sm font-medium text-black/60 transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-rose/40"
            >
              Close
            </button>
          </div>

          <p className="mt-4 text-sm leading-6 text-black/75">{project.description}</p>

          <div className="mt-5 rounded-2xl bg-mist p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">Impact</p>
            <p className="mt-2 text-sm leading-6 text-black/75">{project.impact}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-black/65">
                {tag}
              </span>
            ))}
          </div>

          {project.linkUrl ? (
            <a
              href={project.linkUrl}
              className="mt-5 inline-flex rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-plum focus:outline-none focus:ring-2 focus:ring-rose/40"
            >
              {project.linkLabel ?? 'Visit'}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
