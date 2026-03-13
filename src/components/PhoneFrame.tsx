import type { PropsWithChildren } from 'react';

type PhoneFrameProps = PropsWithChildren<{
  title: string;
}>;

export function PhoneFrame({ children, title }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[420px] md:max-w-[430px]">
      <div className="absolute inset-x-8 top-4 h-24 rounded-full bg-rose/20 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[3rem] bg-shell p-3 shadow-phone ring-1 ring-white/10 md:rounded-[3.5rem]">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-paper md:rounded-[3rem]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-center pt-3">
            <div className="h-7 w-32 rounded-full bg-black/95 shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)]" />
          </div>
          <div className="flex items-center justify-between border-b border-black/5 px-6 pb-3 pt-4 text-[11px] font-medium text-black/70">
            <span>9:41</span>
            <span className="truncate pl-10 text-center text-black/55">{title}</span>
            <span>100%</span>
          </div>
          <div className="max-h-[82vh] min-h-[760px] overflow-y-auto overscroll-contain bg-paper">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
