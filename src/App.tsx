import { useEffect, useState } from 'react';
import { CareerPanel } from './components/CareerPanel';
import { ContactPanel } from './components/ContactPanel';
import { HighlightRow } from './components/HighlightRow';
import { PhoneFrame } from './components/PhoneFrame';
import { PostGrid } from './components/PostGrid';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileTabs, type TabKey } from './components/ProfileTabs';
import { ProjectModal } from './components/ProjectModal';
import { profileData } from './data/profileData';
import type { Project } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('posts');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!pendingScrollTarget) return;

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(pendingScrollTarget);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setPendingScrollTarget(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeTab, pendingScrollTarget]);

  const handleHighlightSelect = (highlightId: string) => {
    if (highlightId === 'resume') {
      window.open(profileData.resumeUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    const actionMap: Record<string, { tab: TabKey; target: string }> = {
      about: { tab: 'career', target: 'about-section' },
      work: { tab: 'career', target: 'work-section' },
      projects: { tab: 'posts', target: 'posts-section' },
      skills: { tab: 'career', target: 'skills-section' },
      contact: { tab: 'contact', target: 'contact-section' },
    };

    const action = actionMap[highlightId];
    if (!action) return;

    setActiveTab(action.tab);
    setPendingScrollTarget(action.target);
  };

  return (
    <main className="min-h-screen bg-[#f6efe8] bg-glow px-4 py-6 text-ink md:px-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col items-center justify-center gap-10 lg:flex-row lg:items-center">
        <section className="w-full max-w-[430px] shrink-0">
          <PhoneFrame title={profileData.username}>
            <div className="px-5 pb-2 pt-3">
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-semibold text-ink">{profileData.username}</p>
                <div className="flex items-center gap-3 text-black/55">
                  <span className="text-lg">＋</span>
                  <span className="text-lg">☰</span>
                </div>
              </div>
            </div>
            <ProfileHeader profile={profileData} />
            <HighlightRow highlights={profileData.highlights} onSelect={handleHighlightSelect} />
            <ProfileTabs activeTab={activeTab} onChange={setActiveTab}>
              {activeTab === 'posts' ? (
                <PostGrid projects={profileData.projects} onSelect={setSelectedProject} />
              ) : null}
              {activeTab === 'career' ? (
                <CareerPanel
                  about={profileData.about}
                  experience={profileData.experience}
                  education={profileData.education}
                  skills={profileData.skills}
                />
              ) : null}
              {activeTab === 'contact' ? (
                <ContactPanel headline={profileData.headline} contact={profileData.contact} resumeUrl={profileData.resumeUrl} />
              ) : null}
            </ProfileTabs>
          </PhoneFrame>
        </section>

        <aside className="hidden max-w-xl animate-rise lg:block">
          <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-float backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/35">Hello!</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-ink">{profileData.name}</h1>
            <p className="mt-4 max-w-lg text-lg leading-8 text-black/68">{profileData.about}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {profileData.contact.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 transition hover:-translate-y-0.5 hover:border-rose/30 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
