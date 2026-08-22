export function AlertBriefSection() {
  return (
    <section className="section">
      <div className="shell-md">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">Ce que vous recevez</div>
          <h2 className="h-section">Un numéro, cinq blocs, dix minutes.</h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="card card-hover border-l-2 border-l-[#ff1a1a] px-6 py-6">
            <div className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ff1a1a]">
              LA UNE DE LA SEMAINE
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

          <div className="card card-hover px-6 py-6">
            <div className="mb-4 kicker">La structure d&apos;un numéro</div>
            <ul className="m-0 mb-6 flex list-none flex-col gap-3 p-0">
              {[
                ["01", "La une, traitée en entier"],
                ["02", "Les sept rubriques du marché"],
                ["03", "L'agenda des échéances"],
                ["04", "Les chiffres de la semaine"],
                ["05", "Ce qu'il faut faire cette semaine"],
              ].map(([n, label]) => (
                <li key={n} className="flex items-center gap-3 font-sans text-[14px] text-chalk-75">
                  <span className="font-mono text-[12px] text-brand">{n}</span>
                  {label}
                </li>
              ))}
            </ul>
            <a
              href="/brief"
              className="font-sans text-[13px] text-chalk-55 underline decoration-hair-strong underline-offset-4 transition-colors hover:text-white"
            >
              Lire un numéro complet →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
