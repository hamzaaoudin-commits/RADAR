import { TagBubbles } from "./tag-bubbles"
import { ContentBubbles } from "./content-bubbles"

const SIGNALS = [
  "une nouvelle IA",
  "un nouveau concurrent",
  "une nouvelle réglementation",
  "une nouvelle technologie",
  "une nouvelle plateforme",
  "une nouvelle habitude de vos clients",
  "un nouveau business model",
]

const SOURCES = [
  "le journal officiel",
  "le site du régulateur",
  "trois newsletters",
  "la presse du métier",
  "les pages tarifaires de vos fournisseurs",
  "les annonces de vos concurrents",
]

const TRIED = [
  {
    t: "Des alertes par mot-clé",
    d: "Elles remontent tout, sans jamais distinguer un fait qui change une décision d'une mention anecdotique. Vous les désactivez au bout de deux semaines.",
  },
  {
    t: "Des newsletters sectorielles",
    d: "Il en faut cinq pour couvrir un marché, et aucune ne dit ce que l'information change pour vous. Vous finissez informé, et toujours pas avancé.",
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
          Vous ne manquez pas d&apos;information. Elle est éparpillée partout.
        </h2>
        <p className="lede mb-6">
          Chaque semaine, votre secteur encaisse, en même temps :
        </p>

        <div className="mb-10">
          <TagBubbles items={SIGNALS} />
        </div>

        <p className="mb-4 body-sm">
          Et pour savoir ce qui a changé, il faudrait surveiller vous-même :
        </p>
        <div className="mb-6">
          <TagBubbles items={SOURCES} />
        </div>
        <p className="mb-10 body-sm">
          Six sources minimum, chaque semaine. Ce n&apos;est pas un manque de
          discipline. C&apos;est un travail à temps plein que personne ne fait à
          votre place.
        </p>

        <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">
          Ce que vous avez sans doute déjà essayé
        </div>
        <div className="mb-12">
          <ContentBubbles items={TRIED} />
        </div>

        <p className="mb-8 body-sm">
          Aucune de ces solutions n&apos;échoue par manque de bonne volonté. Elles
          échouent parce qu&apos;aucune ne couvre le marché entier, et qu&apos;aucune
          ne dit ce que l&apos;information change. Il faut donc les additionner, puis
          faire soi-même le travail de tri. C&apos;est la vraie cause, et la seule que
          RADAR a été construit pour traiter.
        </p>

        <div className="card px-7 py-8">
          <p className="m-0 font-serif text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug text-white/90">
            Un seul journal, chaque lundi, qui couvre votre marché en entier — et
            qui dit, pour chaque information, ce qu&apos;elle change chez vous. Après
            l&apos;avoir lu, vous n&apos;avez plus rien à ouvrir.
          </p>
        </div>
      </div>
    </section>
  )
}
