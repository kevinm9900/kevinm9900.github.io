import type { Project } from '../types';

type PostGridProps = {
  projects: Project[];
  onSelect: (project: Project) => void;
};

export function PostGrid({ projects, onSelect }: PostGridProps) {
  return (
    <section id="posts-section" aria-label="Project posts">
      <div className="grid grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelect(project)}
            className={`group aspect-square overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${project.accent} p-3 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-float focus:outline-none focus:ring-2 focus:ring-rose/40`}
            style={{ animationDelay: `${index * 55}ms` }}
          >
            <div className="flex h-full flex-col justify-between rounded-[1.1rem] bg-white/45 p-2 backdrop-blur-[2px]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">
                {project.category}
              </span>
              <div>
                <p className="text-sm font-semibold leading-4 text-ink">{project.title}</p>
                <p className="mt-1 line-clamp-3 text-[11px] leading-4 text-black/55">{project.summary}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
