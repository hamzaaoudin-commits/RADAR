import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingTable } from "@/components/pricing-table"
import { PricingCallout } from "@/components/pricing-callout"

const FAQ = [
  {
    q: "Puis-je changer de formule à tout moment ?",
    a: "Oui. Vous pouvez monter ou descendre de formule à tout moment ; le changement s'applique dès la prochaine échéance.",
  },
  {
    q: "RADAR REGULATION remplace-t-il un conseil juridique ?",
    a: "Non. RADAR informe et alerte sur les évolutions réglementaires qui vous concernent ; toute décision juridique doit être validée par un professionnel compétent.",
  },
  {
    q: "Comment RADAR construit-il mon radar d'entreprise ?",
    a: "À l'inscription, vous renseignez votre secteur, votre taille, votre marché, vos concurrents et vos outils. RADAR construit à partir de ça une empreinte stratégique et surveille en continu les sept domaines qui vous concernent.",
  },
  {
    q: "Qu'est-ce qui différencie RADAR PRO de RADAR ADVISORY ?",
    a: "PRO est une surveillance approfondie et automatisée sur vos sept radars, avec scénarios et roadmap. ADVISORY y ajoute un analyste humain : réunions, audits, recommandations personnalisées et accompagnement de transformation.",
  },
  {
    q: "Puis-je annuler à tout moment ?",
    a: "Oui, sans engagement de durée sur les formules RADAR et RADAR PRO. ADVISORY et ENTERPRISE sont contractualisés à la mise en place.",
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
            De la surveillance ciblée à l&apos;intelligence sur-mesure pour grands groupes. Pas d&apos;engagement sur RADAR et RADAR PRO.
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
                  ["Briefing hebdomadaire", "✓", "✓", "✓", "✓"],
                  ["Scénarios & roadmap 36 mois", "—", "✓", "✓", "✓"],
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

      <section className="section bg-ink">
        <div className="shell-sm">
          <div className="mb-3 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">FAQ</div>
          <h2 className="mb-10 font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
            Questions fréquentes.
          </h2>
          <div className="flex flex-col divide-y divide-hair">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-[16px] text-white">
                  {f.q}
                  <span className="ml-4 shrink-0 text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 font-sans text-[14px] leading-relaxed text-chalk-65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
