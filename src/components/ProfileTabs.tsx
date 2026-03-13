import type { ReactNode } from 'react';

export type TabKey = 'posts' | 'career' | 'contact';

type ProfileTabsProps = {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
  children: ReactNode;
};

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: 'posts', label: 'Posts' },
  { key: 'career', label: 'Career' },
  { key: 'contact', label: 'Contact' },
];

export function ProfileTabs({ activeTab, onChange, children }: ProfileTabsProps) {
  return (
    <section className="pb-8">
      <div className="sticky top-0 z-20 border-y border-black/5 bg-paper/95 px-3 py-2 backdrop-blur">
        <div className="grid grid-cols-3 rounded-2xl bg-[#f5ede6] p-1">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onChange(tab.key)}
                className={[
                  'rounded-xl px-3 py-2 text-sm font-medium transition',
                  isActive ? 'bg-white text-ink shadow-sm' : 'text-black/45 hover:text-ink',
                ].join(' ')}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="animate-fade px-4 pt-4">{children}</div>
    </section>
  );
}
