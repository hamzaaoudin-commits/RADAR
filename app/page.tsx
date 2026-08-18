import Link from "next/link"
import { NavBar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { SectionDivider } from "@/components/section-divider"
import { BridgeSection } from "@/components/bridge-section"
import { FaqSection } from "@/components/faq-section"
import { ClosingCTA } from "@/components/closing-cta"
import { FAQ_HOME } from "@/lib/radar-faqs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <HeroSection />
      <ProblemSection />

      {/* La conviction arrive juste après l'aveu du problème, pas sur une page
          annexe : c'est le moment où le lecteur est prêt à adhérer. */}
      <ManifestoSection />

      {/* Pour qui veut d'abord comprendre le produit avant de décider. */}
      <section className="section text-center">
        <div className="mx-auto max-w-[640px]">
          <div className="kicker mb-5">La réponse</div>
          <h2 className="h-section mb-6">Sept radars, construits sur votre entreprise.</h2>
          <p className="lede mx-auto mb-8 max-w-[560px]">
            IA, technologies, réglementation, marché, concurrence, opportunités,
            risques. Chacun filtré par l&apos;empreinte stratégique propre à votre
            entreprise — pas par votre secteur en général.
          </p>
          <Link href="/produit" className="btn-ghost">Voir ce que RADAR surveille</Link>
        </div>
      </section>

      <SectionDivider word="DÉTECTEZ." caption="Ce que RADAR fait, avant tout le reste" />
      <BridgeSection />
      <FaqSection faqs={FAQ_HOME} />
      <ClosingCTA />
      <Footer />
    </main>
  )
}
