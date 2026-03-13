import type { ProfileData } from '../types';

type ProfileHeaderProps = {
  profile: ProfileData;
};

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="animate-rise px-5 pb-4 pt-3">
      <div className="flex items-start gap-4">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-rose via-[#f0dfd4] to-[#d4ddef] text-2xl font-semibold text-plum shadow-float ring-4 ring-white/80">
          {profile.avatarImageUrl ? (
            <img
              src={profile.avatarImageUrl}
              alt={`${profile.name} profile`}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                const fallback = event.currentTarget.nextElementSibling as HTMLSpanElement | null;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}
          <span
            className="flex h-full w-full items-center justify-center"
            style={{ display: profile.avatarImageUrl ? 'none' : 'flex' }}
          >
            {profile.avatarFallback}
          </span>
        </div>
        <div className="min-w-0 flex-1 pt-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xl font-semibold tracking-tight text-ink">{profile.name}</p>
              <p className="text-sm text-black/50">{profile.username}</p>
            </div>
            <a
              href={profile.resumeUrl}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-rose/40"
            >
              Resume
            </a>
          </div>
          <p className="mt-3 text-sm font-medium leading-5 text-plum">{profile.headline}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-[15px] leading-6 text-black/80">
        <p>{profile.bio}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-black/60">
          <span>{profile.location}</span>
          <a className="font-medium text-rose transition hover:text-plum" href={profile.websiteUrl}>
            {profile.websiteLabel}
          </a>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 rounded-3xl bg-white/80 p-3 shadow-[0_12px_30px_rgba(17,17,17,0.05)] ring-1 ring-black/5">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-mist px-3 py-3 text-center">
            <p className="text-lg font-semibold text-ink">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-black/45">{stat.label}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
