import Link from "next/link"
import { NavBar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarketsMarquee } from "@/components/markets-marquee"
import { SourceTrustBar } from "@/components/source-trust-bar"
import { ProblemSection } from "@/components/problem-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { ContentsSection } from "@/components/contents-section"
import { SevenRadars } from "@/components/seven-radars"
import { PipelineGrid } from "@/components/pipeline-grid"
import { AlertBriefSection } from "@/components/alert-brief-section"
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
      <MarketsMarquee />
      <SourceTrustBar />
      <ProblemSection />

      {/* La conviction arrive juste après l'aveu du problème, pas sur une page
          annexe : c'est le moment où le lecteur est prêt à adhérer. */}
      <ManifestoSection />

      {/* Le produit vit ici, sur la home, pas sur une page à part : c'est ce
          qu'on vend, il ne doit jamais être à un clic de distance. */}
      <ContentsSection />
      <SevenRadars />
      <PipelineGrid />
      <AlertBriefSection />

      <BridgeSection />
      <FaqSection faqs={FAQ_HOME} />
      <ClosingCTA />
      <Footer />
    </main>
  )
}
