/**
 * Pictogrammes RADAR : un trait constant (1.6), des angles francs, aucune
 * rondeur décorative. Un par rubrique, plus la marque et quelques signes
 * d'usage (calendrier, source). Dessinés sur une grille de 24.
 */

type P = { size?: number; className?: string; strokeWidth?: number }

function Svg({ size = 24, className, strokeWidth = 1.6, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  )
}

/** Intelligence artificielle : une puce à broches. */
export const IconIA = (p: P) => (
  <Svg {...p}>
    <rect x="6" y="6" width="12" height="12" />
    <rect x="10" y="10" width="4" height="4" fill="currentColor" stroke="none" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
  </Svg>
)

/** Technologies : une fenêtre de terminal. */
export const IconTech = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="16" />
    <path d="M3 8.5h18M7 12.5l3 2.5-3 2.5M13 17.5h4" />
  </Svg>
)

/** Réglementation : un fronton à colonnes. */
export const IconReg = (p: P) => (
  <Svg {...p}>
    <path d="M3 9l9-5 9 5zM5 9v9M9.7 9v9M14.3 9v9M19 9v9M3 21h18" />
  </Svg>
)

/** Marché : trois barres montantes sur une base. */
export const IconMarche = (p: P) => (
  <Svg {...p}>
    <path d="M3 21h18M6 21v-7M12 21V5M18 21V11" />
    <path d="M3 8l5-3 4 3 8-5" strokeWidth="1.2" />
  </Svg>
)

/** Concurrence : deux cercles qui se chevauchent. */
export const IconConcurrence = (p: P) => (
  <Svg {...p}>
    <circle cx="9" cy="12" r="6" />
    <circle cx="15" cy="12" r="6" />
  </Svg>
)

/** Opportunités : une flèche qui sort du cadre. */
export const IconOpportunite = (p: P) => (
  <Svg {...p}>
    <path d="M5 19L19 5M9 5h10v10" />
    <path d="M3 3v6M3 3h6" strokeWidth="1.2" />
  </Svg>
)

/** Risques : un triangle d'alerte. */
export const IconRisque = (p: P) => (
  <Svg {...p}>
    <path d="M12 3L22 20H2z" />
    <path d="M12 10v5" />
    <rect x="11.2" y="17" width="1.6" height="1.6" fill="currentColor" stroke="none" />
  </Svg>
)

export const IconCalendrier = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="16" />
    <path d="M3 10h18M8 3v4M16 3v4M7 14h2M11 14h2M15 14h2M7 17.5h2M11 17.5h2" />
  </Svg>
)

export const IconSource = (p: P) => (
  <Svg {...p}>
    <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 15.5h7M9 19h4" />
  </Svg>
)

export const IconArrow = (p: P) => (
  <Svg {...p} strokeWidth={2.2}>
    <path d="M3 12h17M14 6l6 6-6 6" />
  </Svg>
)

export const IconChiffres = (p: P) => (
  <Svg {...p}>
    <path d="M4 4v16h16" />
    <path d="M8 15l3.5-4 3 2.5L19 7" />
  </Svg>
)

export const IconReco = (p: P) => (
  <Svg {...p}>
    <path d="M4 12l5 5L20 6" strokeWidth="2.2" />
  </Svg>
)

const BY_RUBRIQUE: Record<string, (p: P) => React.ReactElement> = {
  IA: IconIA,
  Technologies: IconTech,
  "Réglementation": IconReg,
  "Marché": IconMarche,
  Concurrence: IconConcurrence,
  "Opportunités": IconOpportunite,
  Risques: IconRisque,
}

export function RubriqueIcon({ name, ...p }: P & { name: string }) {
  const I = BY_RUBRIQUE[name] ?? IconSource
  return <I {...p} />
}

/**
 * La marque : un balayage radar. Cercles concentriques, un rayon, un point.
 * `sweep` ajoute le secteur plein (utilisé en grand sur la couverture).
 */
export function RadarMark({ size = 120, sweep = false, className }: { size?: number; sweep?: boolean; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="68" />
        <circle cx="100" cy="100" r="40" />
        <circle cx="100" cy="100" r="14" />
        <path d="M100 2v196M2 100h196" strokeWidth="0.7" />
      </g>
      {sweep && <path d="M100 100L100 4A96 96 0 0 1 168 32z" fill="#e8111f" opacity="0.9" />}
      <path d="M100 100L168 32" stroke="#e8111f" strokeWidth="2.4" />
      <circle cx="140" cy="62" r="5" fill="#e8111f" />
      <circle cx="140" cy="62" r="11" fill="none" stroke="#e8111f" strokeWidth="1" />
    </svg>
  )
}
