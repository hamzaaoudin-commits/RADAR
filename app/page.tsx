import Link from "next/link"
import { NavBar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { SectionDivider } from "@/components/section-divider"
import { BridgeSection } from "@/components/bridge-section"
import { FaqSection } from "@/components/faq-section"
import { FAQ_HOME } from "@/lib/radar-faqs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <ManifestoSection />

      {/* Passerelle vers le produit : la home pose le problème et la conviction,
          le détail des sept radars vit désormais sur /produit. */}
      <section className="section text-center">
        <div className="mx-auto max-w-[640px]">
          <div className="kicker mb-5">La réponse</div>
          <h2 className="h-section mb-6">Sept radars, construits sur votre entreprise.</h2>
          <p className="lede mx-auto mb-8 max-w-[560px]">
            IA, technologies, réglementation, marché, concurrence, opportunités,
            risques. Chacun filtré par l&apos;empreinte stratégique propre à votre
            entreprise — pas par votre secteur en général.
          </p>
          <Link href="/produit" className="btn-primary">Voir ce que RADAR surveille</Link>
        </div>
      </section>

      <SectionDivider word="DÉTECTEZ." caption="Ce que RADAR fait, avant tout le reste" />
      <BridgeSection />
      <FaqSection faqs={FAQ_HOME} />
      <Footer />
    </main>
  )
}
