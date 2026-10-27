import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingTable } from "@/components/pricing-table"
import { FaqSection, type FaqEntry } from "@/components/faq-section"

const FAQ: FaqEntry[] = [
  {
    q: "Qu'est-ce que je reçois pour 20€ par mois ?",
    a: "Le numéro RADAR de la semaine, par mail, chaque lundi à 7h : la une, les sept rubriques de votre marché, l'agenda des échéances, les chiffres de la semaine et l'action de la semaine. Un exemple complet est visible sur la page Le journal.",
    icon: "price",
  },
  {
    q: "Le prix change-t-il selon le marché ?",
    a: "Non. L'offre est à 20€ par mois pour tous les marchés couverts par RADAR : vous choisissez le vôtre, le prix reste le même.",
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
    q: "Puis-je annuler à tout moment ?",
    a: "Oui, sans engagement de durée. La résiliation prend effet à la fin de la période mensuelle en cours.",
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
            20€ par mois. Tous les marchés. Un numéro chaque lundi.
          </h1>
          <p className="mx-auto max-w-[560px] font-sans text-[16px] leading-relaxed text-white/60">
            Vous choisissez votre marché, le prix ne change pas. Le numéro RADAR de la semaine arrive par mail chaque lundi à 7h. Sans engagement.
          </p>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="shell">
          <PricingTable />
        </div>
      </section>

      <FaqSection faqs={FAQ} />

      <Footer />
    </main>
  )
}
