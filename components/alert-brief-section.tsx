import { GlassCard } from "./glass-card"
import { ScoreGauge } from "./score-gauge"

export function AlertBriefSection() {
  return (
    <section id="score" className="section overflow-hidden bg-ink">
      <div className="shell">
        <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
          CE QUE VOUS RECEVEZ
        </div>
        <h2 className="mb-12 max-w-[700px] font-serif text-[clamp(1.8rem,3.6vw,3.1rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
          Un score, une alerte quand ça compte, cinq minutes par semaine.
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <ScoreGauge />

          <div className="flex flex-col gap-6">
            <GlassCard className="border-l-2 border-l-[#ff1a1a] p-6">
              <div className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ff1a1a]">
                🔴 RADAR ALERT
              </div>
              <h3 className="mb-1 font-serif text-base font-bold text-white">
                OpenAI — nouvelle capacité d&apos;agent autonome
              </h3>
              <p className="mb-3 font-sans text-[13px] text-chalk-55">Impact potentiel : <span className="text-[#ff1a1a]">élevé</span> · Horizon : 6–18 mois</p>
              <p className="m-0 font-sans text-[13.5px] leading-relaxed text-chalk-65">
                Cette technologie pourrait automatiser une partie de votre processus. Action recommandée : tester sur un flux pilote.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                YOUR WEEK IN 5 MINUTES
              </div>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {[
                  ["01", "Le changement majeur"],
                  ["02", "L'opportunité"],
                  ["03", "Le risque"],
                  ["04", "Ce que font vos concurrents"],
                  ["05", "Ce que vous devriez faire"],
                ].map(([n, label]) => (
                  <li key={n} className="flex items-center gap-3 font-sans text-[14px] text-chalk-75">
                    <span className="font-mono text-[12px] text-brand">{n}</span>
                    {label}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
