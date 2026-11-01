export function WebDevGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0.5" y="0.5" width="399" height="299" rx="16" fill="none" stroke={accent} strokeOpacity="0.3" />
      <rect x="32" y="40" width="336" height="220" rx="8" fill="none" stroke={accent} strokeWidth="1.5" />
      <line x1="32" y1="72" x2="368" y2="72" stroke={accent} strokeOpacity="0.4" />
      <circle cx="52" cy="56" r="4" fill={accent} />
      <circle cx="68" cy="56" r="4" fill={accent} opacity="0.5" />
      <circle cx="84" cy="56" r="4" fill={accent} opacity="0.3" />
      <rect x="56" y="96" width="180" height="12" rx="2" fill={accent} opacity="0.8" />
      <rect x="56" y="120" width="240" height="8" rx="2" fill={accent} opacity="0.35" />
      <rect x="56" y="136" width="200" height="8" rx="2" fill={accent} opacity="0.35" />
      <rect x="56" y="164" width="100" height="32" rx="16" fill={accent} />
      <rect x="56" y="216" width="90" height="60" rx="6" fill="none" stroke={accent} strokeOpacity="0.5" />
      <rect x="156" y="216" width="90" height="60" rx="6" fill="none" stroke={accent} strokeOpacity="0.5" />
      <rect x="256" y="216" width="80" height="60" rx="6" fill="none" stroke={accent} strokeOpacity="0.5" />
    </svg>
  );
}

export function AppDevGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0.5" y="0.5" width="399" height="299" rx="16" fill="none" stroke={accent} strokeOpacity="0.3" />
      <rect x="140" y="30" width="120" height="220" rx="18" fill="none" stroke={accent} strokeWidth="1.5" />
      <rect x="150" y="48" width="100" height="184" rx="4" fill="none" stroke={accent} strokeOpacity="0.4" />
      <circle cx="200" cy="240" r="4" fill={accent} />
      <rect x="165" y="66" width="70" height="10" rx="2" fill={accent} opacity="0.8" />
      <rect x="165" y="86" width="70" height="30" rx="6" fill={accent} opacity="0.25" />
      <rect x="165" y="124" width="70" height="30" rx="6" fill={accent} opacity="0.25" />
      <rect x="165" y="162" width="70" height="30" rx="6" fill={accent} opacity="0.25" />
      <circle cx="90" cy="120" r="26" fill="none" stroke={accent} strokeOpacity="0.5" />
      <circle cx="310" cy="180" r="18" fill="none" stroke={accent} strokeOpacity="0.5" />
    </svg>
  );
}

export function SystemsGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0.5" y="0.5" width="399" height="299" rx="16" fill="none" stroke={accent} strokeOpacity="0.3" />
      <circle cx="200" cy="150" r="34" fill="none" stroke={accent} strokeWidth="1.5" />
      <circle cx="200" cy="150" r="6" fill={accent} />
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = Number((200 + Math.cos(rad) * 34).toFixed(2));
        const y1 = Number((150 + Math.sin(rad) * 34).toFixed(2));
        const x2 = Number((200 + Math.cos(rad) * 110).toFixed(2));
        const y2 = Number((150 + Math.sin(rad) * 110).toFixed(2));
        return (
          <g key={angle}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeOpacity="0.4" />
            <rect x={x2 - 14} y={y2 - 14} width="28" height="28" rx="6" fill="none" stroke={accent} strokeOpacity="0.6" />
          </g>
        );
      })}
    </svg>
  );
}

export function AiGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0.5" y="0.5" width="399" height="299" rx="16" fill="none" stroke={accent} strokeOpacity="0.3" />
      <g opacity="0.7">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={70 + col * 36}
              cy={70 + row * 32}
              r="2.5"
              fill={accent}
              opacity={(row + col) % 3 === 0 ? 0.9 : 0.25}
            />
          ))
        )}
      </g>
      <circle cx="200" cy="150" r="46" fill="none" stroke={accent} strokeWidth="1.5" />
      <path d="M182 150 L196 164 L222 136" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrainingGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0.5" y="0.5" width="399" height="299" rx="16" fill="none" stroke={accent} strokeOpacity="0.3" />
      <path d="M90 190 L200 130 L310 190 L200 250 Z" fill="none" stroke={accent} strokeWidth="1.5" />
      <path d="M140 205 V240 Q200 265 260 240 V205" fill="none" stroke={accent} strokeOpacity="0.6" />
      <line x1="310" y1="190" x2="310" y2="230" stroke={accent} strokeOpacity="0.5" />
      <circle cx="310" cy="236" r="4" fill={accent} />
      <rect x="176" y="60" width="48" height="34" rx="4" fill="none" stroke={accent} strokeOpacity="0.6" />
      <line x1="200" y1="94" x2="200" y2="130" stroke={accent} strokeOpacity="0.4" />
    </svg>
  );
}
