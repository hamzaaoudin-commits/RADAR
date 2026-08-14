const SIGNALS = [
  "une nouvelle IA",
  "un nouveau concurrent",
  "une nouvelle réglementation",
  "une nouvelle technologie",
  "une nouvelle plateforme",
  "une nouvelle habitude de vos clients",
  "un nouveau business model",
]

const TRIED = [
  {
    t: "Des alertes par mot-clé",
    d: "Elles remontent tout, sans distinguer ce qui vous concerne de ce qui ne vous concerne pas. Vous les désactivez au bout de deux semaines.",
  },
  {
    t: "Des newsletters sectorielles",
    d: "Elles parlent à tout votre secteur en même temps. Rien n'y est écrit pour votre entreprise en particulier — vous devez encore faire le tri vous-même.",
  },
  {
    t: "Un collaborateur chargé de la veille, à côté de son poste",
    d: "C'est la première tâche sacrifiée dès que le reste s'accélère. Personne ne surveille rien deux mois plus tard.",
  },
]

export function ProblemSection() {
  return (
    <section className="section bg-ink-soft">
      <div className="shell-md">
        <div className="mb-5 kicker">Le problème</div>
        <h2 className="h-section mb-7">
          Vous ne manquez pas d&apos;information. Vous manquez d&apos;un filtre.
        </h2>
        <p className="lede mb-5">
          Chaque semaine, votre secteur encaisse, en même temps :
        </p>

        <div className="mb-8 flex flex-wrap gap-2.5">
          {SIGNALS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-hair-strong bg-white/[0.03] px-3.5 py-1.5 font-sans text-[13px] text-chalk-65"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="mb-10 body-sm">
          Vous n&apos;avez le temps de lire ni cinquante newsletters, ni de surveiller
          cent entreprises, ni de tester chaque nouvel outil — en plus de diriger
          la vôtre. Ce n&apos;est pas un manque de discipline. C&apos;est un manque de filtre.
        </p>

        <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">
          Ce que vous avez sans doute déjà essayé
        </div>
        <div className="mb-10 flex flex-col gap-5">
          {TRIED.map((x) => (
            <div key={x.t} className="border-l-2 border-hair-strong pl-4">
              <div className="mb-1 font-serif text-[15px] font-bold text-white/85">{x.t}</div>
              <p className="m-0 body-sm">{x.d}</p>
            </div>
          ))}
        </div>

        <p className="mb-8 body-sm">
          Aucune de ces solutions n&apos;échoue par manque de bonne volonté. Elles échouent
          parce qu&apos;elles ajoutent de l&apos;information sans ajouter de filtre — et sans
          filtre construit sur votre entreprise précise, plus d&apos;information ne veut
          jamais dire plus de décision. C&apos;est la vraie cause. C&apos;est la seule que RADAR
          a été construit pour traiter.
        </p>

        <div className="card px-7 py-8">
          <p className="m-0 font-serif text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug text-white/90">
            Il y a deux types de dirigeants : ceux qui découvrent le changement une
            fois qu&apos;il a déjà coûté une part de marché, et ceux qui l&apos;ont vu venir.
            RADAR existe pour vous faire changer de catégorie.
          </p>
        </div>
      </div>
    </section>
  )
}
