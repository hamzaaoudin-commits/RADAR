import { ScoreGauge } from "./score-gauge"

export function AlertBriefSection() {
  return (
    <section id="score" className="section">
      <div className="shell-lg">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">Ce que vous recevez</div>
          <h2 className="h-section">Un score, une alerte quand ça compte, cinq minutes par semaine.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <ScoreGauge />

          <div className="flex flex-col gap-6">
            <div className="card border-l-2 border-l-[#ff1a1a] px-6 py-6">
              <div className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ff1a1a]">
                🔴 RADAR ALERT
              </div>
              <h3 className="mb-1 font-serif text-base font-bold text-white">
                OpenAI — nouvelle capacité d&apos;agent autonome
              </h3>
              <p className="mb-3 font-sans text-[13px] text-chalk-55">
                Impact potentiel : <span className="text-[#ff1a1a]">élevé</span> · Horizon : 6–18 mois
              </p>
              <p className="m-0 body-sm">
                Cette technologie pourrait automatiser une partie de votre processus.
                Action recommandée : tester sur un flux pilote.
              </p>
            </div>

            <div className="card px-6 py-6">
              <div className="mb-4 kicker">Your week in 5 minutes</div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
