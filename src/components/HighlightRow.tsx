import type { Highlight } from '../types';

type HighlightRowProps = {
  highlights: Highlight[];
  onSelect: (highlightId: string) => void;
};

export function HighlightRow({ highlights, onSelect }: HighlightRowProps) {
  return (
    <section aria-label="Profile highlights" className="px-5 pb-4">
      <div className="flex gap-3 overflow-x-auto pb-1">
        {highlights.map((highlight, index) => (
          <button
            key={highlight.id}
            type="button"
            onClick={() => onSelect(highlight.id)}
            className="group min-w-[76px] animate-rise text-center"
            style={{ animationDelay: `${index * 60}ms` }}
            aria-label={`${highlight.label}: ${highlight.summary}`}
            title={highlight.summary}
          >
            <span className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-black/8 bg-white text-xl shadow-sm transition group-hover:scale-[1.04] group-hover:border-rose/30 group-focus-visible:scale-[1.04]">
              {highlight.emoji}
            </span>
            <span className="mt-2 block text-xs font-medium text-black/65">{highlight.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
