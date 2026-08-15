type LineIconProps = {
  name: "team" | "equipment" | "quality" | "customer" | "drop" | "check";
  className?: string;
};

export function LineIcon({ name, className = "" }: LineIconProps) {
  const paths = {
    team: <><circle cx="12" cy="8" r="3"/><path d="M6.5 19v-1.5A4.5 4.5 0 0 1 11 13h2a4.5 4.5 0 0 1 4.5 4.5V19M5 10a2.5 2.5 0 1 0 0-5m14 5a2.5 2.5 0 1 1 0-5M2 18v-1a4 4 0 0 1 4-4m16 5v-1a4 4 0 0 0-4-4"/></>,
    equipment: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h3m5 0h.01M8 17l3-4 2 2 3-4 2 6"/></>,
    quality: <><path d="M7 4h10l1 5a6 6 0 1 1-12 0l1-5Z"/><path d="M9 4V2h6v2m-8 7-3-2v5h4m9-3 3-2v5h-4m-7 7 3-3 3 3"/></>,
    customer: <><circle cx="10" cy="8" r="4"/><path d="M3 21v-2a7 7 0 0 1 14 0v2m1-13 1.5 1.5L22 7m-4 5 1.5 1.5L22 11"/></>,
    drop: <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Zm-3 14a3 3 0 0 0 3 2"/>,
    check: <path d="m7 12 3 3 7-7"/>,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
