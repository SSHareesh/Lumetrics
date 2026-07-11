// Small abstract, hand-drawn-style illustrations that echo the site's
// statistics motif (the same spirit as ScatterField) so each service card
// gets a "relevant image" without relying on stock photography.
const palettes = {
  teal: { a: "var(--color-teal)", b: "var(--color-teal-tint)", c: "var(--color-ink)" },
  indigo: { a: "var(--color-indigo)", b: "var(--color-indigo-tint)", c: "var(--color-ink)" },
  amber: { a: "var(--color-amber)", b: "var(--color-amber-tint)", c: "var(--color-ink)" },
};

function LineChartArt({ p }) {
  return (
    <>
      <rect width="100%" height="100%" fill={p.b} />
      <polyline points="20,150 80,110 140,130 200,70 260,90 320,40" fill="none" stroke={p.a} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {[20, 80, 140, 200, 260, 320].map((x, i) => (
        <circle key={x} cx={x} cy={[150, 110, 130, 70, 90, 40][i]} r="5" fill={p.a} />
      ))}
      <line x1="16" y1="176" x2="330" y2="176" stroke={p.c} strokeOpacity="0.15" />
    </>
  );
}

function CodeBlockArt({ p }) {
  return (
    <>
      <rect width="100%" height="100%" fill={p.b} />
      {[0, 1, 2, 3, 4].map((row) => (
        <rect
          key={row}
          x={24}
          y={30 + row * 26}
          width={[220, 160, 190, 120, 170][row]}
          height="10"
          rx="5"
          fill={row % 2 === 0 ? p.a : p.c}
          opacity={row % 2 === 0 ? 0.85 : 0.25}
        />
      ))}
    </>
  );
}

function DatabaseArt({ p }) {
  return (
    <>
      <rect width="100%" height="100%" fill={p.b} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0 ${i * 46})`}>
          <ellipse cx="170" cy="46" rx="90" ry="22" fill="none" stroke={p.a} strokeWidth="4" />
        </g>
      ))}
      <line x1="80" y1="46" x2="80" y2="138" stroke={p.a} strokeWidth="4" />
      <line x1="260" y1="46" x2="260" y2="138" stroke={p.a} strokeWidth="4" />
    </>
  );
}

function ConsultingArt({ p }) {
  return (
    <>
      <rect width="100%" height="100%" fill={p.b} />
      <circle cx="120" cy="90" r="46" fill="none" stroke={p.a} strokeWidth="4" />
      <circle cx="220" cy="90" r="30" fill="none" stroke={p.c} strokeOpacity="0.35" strokeWidth="4" />
      <line x1="160" y1="90" x2="196" y2="90" stroke={p.a} strokeWidth="3" strokeDasharray="3 6" />
    </>
  );
}

function DocumentArt({ p }) {
  return (
    <>
      <rect width="100%" height="100%" fill={p.b} />
      <rect x="70" y="16" width="130" height="164" rx="10" fill="none" stroke={p.a} strokeWidth="4" />
      <rect x="150" y="46" width="130" height="164" rx="10" fill={p.b} stroke={p.c} strokeOpacity="0.3" strokeWidth="4" />
      <line x1="176" y1="86" x2="252" y2="86" stroke={p.a} strokeWidth="4" />
      <line x1="176" y1="104" x2="230" y2="104" stroke={p.a} strokeWidth="4" opacity="0.6" />
    </>
  );
}

function ManuscriptArt({ p }) {
  return (
    <>
      <rect width="100%" height="100%" fill={p.b} />
      <path d="M40 160 L120 60 L160 90 L260 20" fill="none" stroke={p.a} strokeWidth="4" strokeLinecap="round" />
      <circle cx="260" cy="20" r="7" fill={p.a} />
      {[0, 1, 2, 3].map((row) => (
        <line key={row} x1="40" y1={130 - row * 0} x2="40" y2="40" stroke="transparent" />
      ))}
    </>
  );
}

const artByIcon = {
  LineChart: LineChartArt,
  Terminal: CodeBlockArt,
  Database: DatabaseArt,
  Users: ConsultingArt,
  FileCheck2: DocumentArt,
  PenLine: ManuscriptArt,
};

export default function ServiceIllustration({ icon, tone = "teal", className = "" }) {
  const Art = artByIcon[icon] || LineChartArt;
  const p = palettes[tone] || palettes.teal;
  return (
    <svg viewBox="0 0 340 190" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Art p={p} />
    </svg>
  );
}
