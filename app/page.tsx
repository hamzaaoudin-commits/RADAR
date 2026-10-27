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
import { JournalFlipbook } from "@/components/journal-flipbook"
import { BRIEFS } from "@/lib/brief-data"
import { PricingPreview } from "@/components/pricing-preview"
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
      <section className="section">
        <div className="shell-md">
          <div className="mb-12 text-center">
            <div className="kicker mb-5">Le livrable</div>
            <h2 className="h-section mb-5">Chaque lundi à 7h, le journal de votre marché.</h2>
            <p className="lede mx-auto max-w-[640px]">
              Voici le vrai numéro de la semaine 43 ({BRIEFS[0].dateLabel}), marché :{" "}
              {BRIEFS[0].market?.toLowerCase()}. Feuilletez-le : chaque information renvoie à sa source.
            </p>
          </div>
          <JournalFlipbook brief={BRIEFS[0]} />
          <div className="mt-10 text-center">
            <Link href="/pricing" className="btn-primary">20€/mois · Recevoir le journal chaque lundi</Link>
          </div>
        </div>
      </section>
      <PricingPreview />

      <BridgeSection />
      <FaqSection faqs={FAQ_HOME} />
      <ClosingCTA />
      <Footer />
    </main>
  )
}
