const techs = [
  { name: "Bidii", Icon: BidiiIcon },
  { name: "Next.js", Icon: NextJsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "Supabase", Icon: SupabaseIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "Google Cloud", Icon: GoogleIcon },
  { name: "PostgreSQL", Icon: PostgresIcon },
];

function BidiiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <circle cx="12" cy="12" r="11" fill="#1E5AA8" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
      >
        B
      </text>
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.2 17.2-8.1-10.5v8.3H7.7V5.1h1.9l8.1 10.5V5.1h1.4v12.1h-1.9z" />
    </svg>
  );
}
function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M8 9h5M10.5 9v7M14 13.5c0 1.2 1 2 2.4 2s2.4-.7 2.4-1.8-1-1.5-2.4-1.9c-1.4-.4-2.2-.8-2.2-1.9 0-1 .9-1.7 2.1-1.7 1.1 0 1.9.5 2.2 1.3" />
    </svg>
  );
}
function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98.99 2.11 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.16 14.49 6 12 6zM6.5 12.5c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98.99 2.11 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35-.98-.99-2.11-2.15-4.6-2.15z" />
    </svg>
  );
}
function SupabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M13.2 22.5c-.5.6-1.5.3-1.5-.5v-8.3H5.1c-1 0-1.6-1.2-1-2L10.8 1.5c.5-.6 1.5-.3 1.5.5v8.3h6.6c1 0 1.6 1.2 1 2L13.2 22.5z" />
    </svg>
  );
}
function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 2l8 4.6v10.8L12 22l-8-4.6V6.6L12 2z" />
      <path d="M12 8v8M9 9.8l3-1.8 3 1.8M9 14.2l3 1.8 3-1.8" />
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 12a9 9 0 1 1-2.6-6.35" strokeLinecap="round" />
      <path d="M21 12h-8" strokeLinecap="round" />
    </svg>
  );
}
function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3c-4.5 0-8 3-8 7.5 0 3.7 2.3 6.7 5.5 7.9.4.1.6-.2.6-.4v-1.6c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.3.8a8 8 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8.5 1.2.2 2.1.1 2.3.5.5.8 1.2.8 2.1 0 3.1-1.9 3.8-3.6 4 .3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4C18.7 17.2 21 14.2 21 10.5 21 6 17.5 3 13 3z" />
    </svg>
  );
}

export default function TechStrip() {
  const items = [...techs, ...techs];

  return (
    <section className="bg-white py-10 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-ink/40 mb-6">
        Built with the tools that scale
      </p>
      <div className="relative">
        <div className="flex gap-16 animate-tech-scroll w-max">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex items-center gap-2 text-ink/60 hover:text-ink transition-colors shrink-0"
            >
              <t.Icon />
              <span className="text-sm font-medium whitespace-nowrap">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
