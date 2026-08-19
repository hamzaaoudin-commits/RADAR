import type { Metadata } from "next"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BriefView, ThreadTracker } from "@/components/brief-view"

export const metadata: Metadata = {
  title: "Le brief hebdomadaire · RADAR",
  description:
    "Votre semaine en cinq minutes, et le suivi de chaque sujet dans le temps. L'e-mail vous prévient, cette page vous montre où vous en êtes.",
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
            Le brief hebdomadaire.
          </h1>
          <p className="lede max-w-[620px]">
            Chaque lundi à 7h, vous recevez la semaine de votre marché en cinq
            minutes par e-mail. Cette page en garde l&apos;archive — et suit chaque
            sujet jusqu&apos;à ce qu&apos;il soit traité.
          </p>
          <p className="mt-4 max-w-[620px] font-sans text-[13px] leading-relaxed text-chalk-40">
            Ceci est une démonstration : les briefs ci-dessous sont illustratifs et
            portent sur un marché fictif.
          </p>
        </div>
      </section>

      <section className="px-gutter pb-24">
        <div className="shell-lg">
          <BriefView />
        </div>
      </section>

      <section className="section">
        <div className="shell-lg">
          <div className="mb-3 kicker">Le suivi</div>
          <h2 className="h-section mb-5">Ce qu&apos;un e-mail ne peut pas vous donner.</h2>
          <p className="lede mb-12 max-w-[640px]">
            Un brief vous dit ce qui a changé cette semaine sur votre marché. Il ne
            vous dit pas où en sont les six sujets ouverts depuis un mois. Chaque
            signal détecté reste suivi ici, de sa détection jusqu&apos;à sa
            résolution.
          </p>
          <ThreadTracker />
        </div>
      </section>

      <Footer />
    </main>
  )
}
