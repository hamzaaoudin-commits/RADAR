import type { Metadata } from "next"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JournalFlipbook } from "@/components/journal-flipbook"
import { ThreadTracker } from "@/components/brief-view"
import { BRIEFS } from "@/lib/brief-data"

export const metadata: Metadata = {
  title: "Le journal hebdomadaire · RADAR",
  description:
    "Le journal de votre marché chaque lundi, et le suivi de chaque sujet dans le temps. L'e-mail vous prévient, cette page garde l'archive.",
}

export default function BriefPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />

      <section className="grain relative px-gutter pb-16 pt-32">
        <div className="glow-top" aria-hidden />
        <div className="grain-layer" aria-hidden />
        <div className="shell-lg relative">
          <div className="mb-3 kicker">Aperçu — données d&apos;exemple</div>
          <h1 className="mb-4 font-serif text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            Le journal hebdomadaire.
          </h1>
          <p className="lede max-w-[620px]">
            Chaque lundi à 7h, vous recevez le journal de votre marché : la une,
            sept rubriques, l&apos;agenda des échéances et les chiffres de la
            semaine. Feuilletez-le ci-dessous exactement comme vous le recevrez.
          </p>
          <p className="mt-4 max-w-[620px] font-sans text-[13px] leading-relaxed text-chalk-40">
            Ceci est une démonstration : le numéro ci-dessous est illustratif et
            porte sur un marché fictif.
          </p>
        </div>
      </section>

      <section className="px-gutter pb-24">
        <JournalFlipbook brief={BRIEFS[0]} />
      </section>

      <section className="section">
        <div className="shell-lg">
          <div className="mb-3 kicker">Le suivi</div>
          <h2 className="h-section mb-5">Ce qu&apos;un e-mail ne peut pas vous donner.</h2>
          <p className="lede mb-12 max-w-[640px]">
            Un journal vous dit ce qui a changé cette semaine. Il ne vous dit pas
            où en sont les six sujets ouverts depuis un mois. Chaque signal détecté
            reste suivi ici, de sa détection jusqu&apos;à sa résolution.
          </p>
          <ThreadTracker />
        </div>
      </section>

      <Footer />
    </main>
  )
}
