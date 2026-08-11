import { GlassCard } from "./glass-card"

export const RADARS = [
  { code: "AI", title: "RADAR AI", question: "Qu'est-ce que l'IA pourrait changer dans votre entreprise ?", desc: "Modèles, agents, automatisation, nouveaux outils, baisse des coûts, mutation des métiers." },
  { code: "TECH", title: "RADAR TECH", question: "Quelle technologie émergente vous concerne ?", desc: "Robotique, spatial, biotech, énergie, XR, interfaces, matériaux." },
  { code: "REG", title: "RADAR REGULATION", question: "Quelle obligation arrive ?", desc: "Lois, directives, normes, fiscalité, réglementation numérique et sectorielle. Informe et alerte — les décisions juridiques restent validées par des professionnels." },
  { code: "MKT", title: "RADAR MARKET", question: "Comment votre marché bouge-t-il ?", desc: "Nouvelles catégories, nouveaux produits, demande, comportements, prix." },
  { code: "COMP", title: "RADAR COMPETITION", question: "Que font vos concurrents ?", desc: "Nouveaux entrants, levées de fonds, produits, acquisitions, recrutements, campagnes." },
  { code: "OPP", title: "RADAR OPPORTUNITY", question: "Où pouvez-vous gagner de l'argent ?", desc: "Nouveau marché, nouveau canal, partenariat, niche émergente, technologie à adopter." },
  { code: "RISK", title: "RADAR RISK", question: "Qu'est-ce qui pourrait vous en faire perdre ?", desc: "Disruption, nouveau concurrent, technologie remplaçante, dépendance à une plateforme." },
]

export function SevenRadars() {
  return (
    <section id="radars" className="section overflow-hidden bg-ink-soft">
      <div className="shell">
        <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
          LE PRODUIT CENTRAL
        </div>
        <h2 className="mb-4 max-w-[700px] font-serif text-[clamp(1.8rem,3.6vw,3.1rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
          Sept radars. Un radar d&apos;entreprise, propre à vous.
        </h2>
        <p className="mb-12 max-w-[640px] font-sans text-[16.5px] leading-[1.75] text-white/60">
          À l&apos;inscription, RADAR apprend votre secteur, votre taille, votre marché, vos concurrents et vos outils, puis construit l&apos;empreinte stratégique de votre entreprise — et surveille ces sept domaines pour vous.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RADARS.map((r) => (
            <GlassCard key={r.code} className="p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-brand/15 px-2.5 py-1 font-sans text-[10px] font-bold tracking-[0.1em] text-brand">
                  {r.code}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-white">{r.title}</h3>
              <p className="mb-3 font-sans text-[14px] italic text-chalk-65">« {r.question} »</p>
              <p className="m-0 font-sans text-[13.5px] leading-relaxed text-chalk-55">{r.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
