const REFUSALS = [
  {
    title: "Nous refusons la veille passive.",
    body: "Un flux d'informations n'est pas une réponse. RADAR ne relaie jamais un fait sans dire pourquoi il compte pour vous et ce qu'il faut en faire.",
  },
  {
    title: "Nous refusons le bruit générique.",
    body: "Pas d'alerte sectorielle envoyée à tout le monde. Chaque signal est filtré par l'empreinte stratégique propre à votre entreprise — ou il n'est pas envoyé.",
  },
  {
    title: "Nous refusons de remplacer votre jugement.",
    body: "RADAR informe et recommande. Il ne décide jamais à votre place — et sur le terrain réglementaire, la décision finale revient toujours à un professionnel compétent.",
  },
  {
    title: "Nous refusons l'angle mort.",
    body: "Vous ne devriez jamais découvrir une révolution une fois qu'elle est déjà devenue votre problème. C'est la seule raison d'être de RADAR.",
  },
]

export function ManifestoSection() {
  return (
    <section id="manifeste" className="section relative overflow-hidden bg-ink">
      <div className="glow-center" aria-hidden />
      <div className="shell-md relative">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">Pourquoi RADAR existe</div>
          <h2 className="h-section mb-6">
            L&apos;ennemi n&apos;est pas la concurrence. C&apos;est l&apos;angle mort.
          </h2>
          <p className="lede mx-auto max-w-[620px]">
            Vous ne devriez jamais apprendre qu&apos;un monde a changé en le découvrant
            déjà installé chez un concurrent. Le changement ne prévient pas — mais il
            laisse toujours des signaux, avant. RADAR existe pour les voir à votre place.
          </p>
        </div>

        <div className="mx-auto max-w-[720px]">
          {REFUSALS.map((r, i) => (
            <div
              key={r.title}
              className="grid gap-4 border-b border-white/[0.08] py-8 first:border-t sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8"
            >
              <div className="font-mono text-[13px] text-brand">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="mb-2 font-serif text-[1.15rem] font-bold leading-snug text-white">{r.title}</h3>
                <p className="m-0 body-sm">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
