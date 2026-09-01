import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingTable } from "@/components/pricing-table"
import { PricingCallout } from "@/components/pricing-callout"
import { FaqSection, type FaqEntry } from "@/components/faq-section"

const FAQ: FaqEntry[] = [
  {
    q: "Puis-je changer de formule à tout moment ?",
    a: "Oui. Vous pouvez monter ou descendre de formule à tout moment ; le changement s'applique dès la prochaine échéance.",
    icon: "cpu",
  },
  {
    q: "Le journal est-il personnalisé pour mon entreprise ?",
    a: "Non, et c'est un choix. RADAR couvre un marché entier : le journal est le même pour toutes les entreprises qui y opèrent, ce qui permet d'y consacrer un travail de fond impossible à produire maison par maison. Quand une action dépend de votre configuration, elle est explicitement segmentée.",
    icon: "eye",
  },
  {
    q: "RADAR REGULATION remplace-t-il un conseil juridique ?",
    a: "Non. RADAR informe et alerte sur les évolutions réglementaires qui vous concernent ; toute décision juridique doit être validée par un professionnel compétent.",
    icon: "shield",
  },
  {
    q: "Qu'est-ce qui différencie RADAR PRO de RADAR ADVISORY ?",
    a: "PRO couvre jusqu'à deux marchés, avec les sept rubriques, le suivi des sujets et la roadmap à 36 mois — le tout produit sans intervention. ADVISORY monte à cinq marchés et y ajoute un analyste humain qui applique chaque marché à votre configuration : réunions, audits, recommandations propres à votre entreprise.",
    icon: "price",
  },
  {
    q: "Puis-je annuler à tout moment ?",
    a: "Oui, sans engagement de durée sur les formules RADAR et RADAR PRO. ADVISORY et ENTERPRISE sont contractualisés à la mise en place.",
    icon: "xcircle",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-ink">
      <NavBar />

      <section className="section-hero bg-ink">
        <div className="shell-md">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/35 bg-brand/[0.12] px-4 py-1.5">
            <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-brand shadow-[0_0_8px_#e63946]" />
            <span className="font-sans text-[11px] font-semibold tracking-[0.1em] text-brand">TARIFS</span>
          </div>
          <h1 className="mb-6 font-serif text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Une formule pour chaque niveau de risque que vous êtes prêt à ignorer.
          </h1>
          <p className="mx-auto max-w-[560px] font-sans text-[16px] leading-relaxed text-white/60">
            Un marché suivi en profondeur, ou plusieurs sur mesure. Pas d&apos;engagement sur RADAR et RADAR PRO.
          </p>
        </div>
      </section>

      <PricingCallout />

      <section className="section bg-ink">
        <div className="shell">
          <PricingTable />
        </div>
      </section>

      <section className="section bg-ink-soft">
        <div className="shell-md">
          <div className="mb-3 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
            COMPARATIF DÉTAILLÉ
          </div>
          <h2 className="mb-10 font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
            Ce que chaque formule couvre, domaine par domaine.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse font-sans text-[13.5px]">
              <thead>
                <tr className="border-b border-hair-strong text-left text-chalk-40">
                  <th className="py-3 pr-4 font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">Domaine surveillé</th>
                  <th className="py-3 px-4 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">RADAR</th>
                  <th className="py-3 px-4 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">PRO</th>
                  <th className="py-3 px-4 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">Advisory</th>
                  <th className="py-3 pl-4 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["RADAR AI", "✓", "✓", "✓", "✓"],
                  ["RADAR TECH", "—", "✓", "✓", "✓"],
                  ["RADAR REGULATION", "✓", "✓", "✓", "✓"],
                  ["RADAR MARKET", "✓", "✓", "✓", "✓"],
                  ["RADAR COMPETITION", "—", "✓", "✓", "✓"],
                  ["RADAR OPPORTUNITY", "—", "✓", "✓", "✓"],
                  ["RADAR RISK", "—", "✓", "✓", "✓"],
                  ["Marchés suivis", "1", "1", "1", "plusieurs"],
                  ["Briefing hebdomadaire", "✓", "✓", "✓", "✓"],
                  ["Suivi des sujets dans le temps", "—", "✓", "✓", "✓"],
                  ["Scénarios & roadmap 36 mois", "—", "✓", "✓", "✓"],
                  ["Application à votre entreprise", "—", "—", "✓", "✓"],
                  ["Analyste humain dédié", "—", "—", "✓", "✓"],
                  ["API & intégrations", "—", "—", "—", "✓"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-hair">
                    <td className="py-3 pr-4 text-chalk-75">{row[0]}</td>
                    {row.slice(1).map((cell, i) => (
                      <td key={i} className={`py-3 px-4 text-center ${cell === "✓" ? "text-brand" : "text-chalk-40"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQ} />

      <Footer />
    </main>
  )
}
