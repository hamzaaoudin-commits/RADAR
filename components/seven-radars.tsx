import { Reveal } from "./reveal"

export const RADARS = [
  { n: "01", t: "RADAR AI", d: "Modèles, agents, automatisation, nouveaux outils, baisse des coûts, mutation des métiers.", why: "Qu'est-ce que l'IA est en train de changer dans les métiers de votre marché ?" },
  { n: "02", t: "RADAR TECH", d: "Robotique, spatial, biotech, énergie, XR, interfaces, nouveaux matériaux.", why: "Quelle technologie émergente vous concerne, avant qu'elle ne devienne la norme ?" },
  { n: "03", t: "RADAR REGULATION", d: "Lois, directives, normes, fiscalité, réglementation numérique et sectorielle. Informe et alerte — les décisions juridiques restent validées par des professionnels compétents.", why: "Quelle obligation arrive, et combien de temps avez-vous pour vous y préparer ?" },
  { n: "04", t: "RADAR MARKET", d: "Nouvelles catégories, nouveaux produits, demande, comportements, prix.", why: "Comment votre marché bouge-t-il pendant que vous êtes occupé à le servir ?" },
  { n: "05", t: "RADAR COMPETITION", d: "Les acteurs structurants du marché : dominants, entrants, substituts. Produits, levées, acquisitions, recrutements, changements de discours.", why: "Un repositionnement n'est annoncé par personne. Il se remarque des mois plus tard." },
  { n: "06", t: "RADAR OPPORTUNITY", d: "Nouveau canal, partenariat, niche émergente, segment délaissé par les dominants, technologie à adopter avant saturation.", why: "Où peut-on gagner de l'argent sur ce marché avant que la place ne soit prise ?" },
  { n: "07", t: "RADAR RISK", d: "Disruption, nouveau concurrent, technologie remplaçante, dépendance à une plateforme.", why: "Qu'est-ce qui pourrait vous en faire perdre — avant que ce ne soit devenu votre problème ?" },
]

function RadarIcon({ index }: { index: number }) {
  const props = { viewBox: "0 0 32 32", width: 30, height: 30, "aria-hidden": true as const }
  const stroke = { stroke: "currentColor", strokeWidth: 1.4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const }

  switch (index) {
    case 0: // AI — un nœud de réseau
      return (
        <svg {...props}>
          <circle cx="16" cy="8" r="2.2" {...stroke} />
          <circle cx="8" cy="22" r="2.2" {...stroke} />
          <circle cx="24" cy="22" r="2.2" {...stroke} />
          <circle cx="16" cy="16" r="2.2" fill="currentColor" stroke="none" />
          <line x1="16" y1="10" x2="16" y2="14" {...stroke} opacity="0.6" />
          <line x1="9.6" y1="20.5" x2="14.5" y2="17.3" {...stroke} opacity="0.6" />
          <line x1="22.4" y1="20.5" x2="17.5" y2="17.3" {...stroke} opacity="0.6" />
        </svg>
      )
    case 1: // TECH — un circuit
      return (
        <svg {...props}>
          <rect x="10" y="10" width="12" height="12" rx="1" {...stroke} />
          <path d="M14 10V5M18 10V5M14 22v5M18 22v5M10 14H5M10 18H5M22 14h5M22 18h5" {...stroke} opacity="0.6" />
        </svg>
      )
    case 2: // REGULATION — une balance
      return (
        <svg {...props}>
          <line x1="16" y1="5" x2="16" y2="26" {...stroke} />
          <line x1="8" y1="10" x2="24" y2="10" {...stroke} opacity="0.6" />
          <path d="M8 10l-3.5 7a3.5 3.5 0 0 0 7 0z" {...stroke} opacity="0.7" />
          <path d="M24 10l-3.5 7a3.5 3.5 0 0 0 7 0z" {...stroke} opacity="0.7" />
          <line x1="12" y1="26" x2="20" y2="26" {...stroke} />
        </svg>
      )
    case 3: // MARKET — une courbe
      return (
        <svg {...props}>
          <path d="M5 24l6-8 5 4 9-12" {...stroke} />
          <path d="M20 8h5v5" {...stroke} opacity="0.6" />
        </svg>
      )
    case 4: // COMPETITION — un balayage radar
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="11" {...stroke} opacity="0.3" />
          <circle cx="16" cy="16" r="6" {...stroke} opacity="0.5" />
          <path d="M16 16 L16 5 A11 11 0 0 1 24.8 10.8 Z" fill="currentColor" opacity="0.18" stroke="none" />
          <line x1="16" y1="16" x2="16" y2="5" {...stroke} />
          <circle cx="24" cy="11" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      )
    case 5: // OPPORTUNITY — une cible
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="11" {...stroke} opacity="0.35" />
          <circle cx="16" cy="16" r="6.5" {...stroke} opacity="0.65" />
          <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
        </svg>
      )
    default: // RISK — un triangle d'alerte
      return (
        <svg {...props}>
          <path d="M16 5l12 21H4z" {...stroke} />
          <line x1="16" y1="13" x2="16" y2="20" {...stroke} />
          <circle cx="16" cy="23.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}

export function SevenRadars() {
  return (
    <section id="radars" className="section bg-ink-soft">
      <div className="shell-lg">
        <div className="mb-14 text-center">
          <div className="kicker mb-5">Le produit central</div>
          <h2 className="h-section mb-6">Sept radars, braqués sur un seul marché.</h2>
          <p className="lede mx-auto max-w-[640px]">
            Chaque marché suivi a sa fiche : périmètre, chaîne de valeur, dépendances communes, acteurs structurants, cadre réglementaire. Les sept radars sont balayés contre elle, chaque semaine, et ce qui ne la touche pas est jeté.
          </p>
        </div>

        <div className="mx-auto max-w-[920px]">
          {RADARS.map((r, i) => (
            <Reveal key={r.n}>
            <div
              className={`grid gap-6 border-b border-white/[0.08] py-10 md:grid-cols-[100px_minmax(0,1fr)] md:gap-10 ${i === 0 ? "border-t" : ""}`}
            >
              <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-5">
                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center border border-brand/35 bg-brand/[0.06] text-brand">
                  <RadarIcon index={i} />
                </div>
              </div>

              <div>
                <div className="mb-2 font-sans text-[11px] text-chalk-40">{r.n}</div>
                <h3 className="mb-3 font-serif text-[1.3rem] font-bold leading-tight">{r.t}</h3>
                <p className="mb-5 max-w-[600px] body-sm">{r.d}</p>
                <p className="max-w-[560px] border-l-2 border-brand/50 pl-4 font-serif text-[14.5px] italic leading-snug text-chalk-55">
                  {r.why}
                </p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
