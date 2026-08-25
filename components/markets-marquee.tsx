const MARKETS = [
  "Expertise comptable",
  "Agences de communication et marketing",
  "Professions juridiques",
  "Agences immobilières",
  "Formation professionnelle",
  "Recrutement & conseil RH",
  "E-commerce & vente directe",
  "Éditeurs de logiciels B2B",
  "Assurance & courtage",
  "Santé libérale",
  "Transport & logistique",
  "Bâtiment & travaux publics",
  "Industrie agroalimentaire",
  "Restauration",
  "Hôtellerie & tourisme",
  "Commerce de détail spécialisé",
]

/**
 * Bandeau défilant des marchés couverts, sous le hero.
 *
 * Même mécanique que le bandeau de marques : la liste est dupliquée une
 * fois, et translater de -50% ramène exactement au point de départ, sans
 * saut visible à la boucle.
 */
export function MarketsMarquee() {
  const line = [...MARKETS, ...MARKETS]

  return (
    <div className="relative overflow-hidden border-y border-hair bg-ink-soft py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-soft to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-soft to-transparent"
      />
      <div className="mb-2 text-center font-sans text-[10px] uppercase tracking-[0.22em] text-chalk-40">
        Marchés couverts
      </div>
      <div
        className="flex w-max items-center gap-8 whitespace-nowrap motion-reduce:animate-none"
        style={{ animation: "sp-marquee 42s linear infinite" }}
      >
        {line.map((m, i) => (
          <span key={`${m}-${i}`} className="flex items-center gap-8">
            <span className="font-sans text-[13px] text-chalk-55">{m}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-brand/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
