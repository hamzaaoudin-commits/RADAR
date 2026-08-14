import { NavBar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { ContentsSection } from "@/components/contents-section"
import { SevenRadars } from "@/components/seven-radars"
import { PipelineGrid } from "@/components/pipeline-grid"
import { AlertBriefSection } from "@/components/alert-brief-section"
import { SectionDivider } from "@/components/section-divider"
import { PricingCallout } from "@/components/pricing-callout"
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
      <ContentsSection />
      <SevenRadars />
      <PipelineGrid />
      <AlertBriefSection />
      <SectionDivider word="DÉTECTEZ." caption="Ce que RADAR fait, avant tout le reste" />
      <PricingCallout />
      <BridgeSection />
      <FaqSection faqs={FAQ_HOME} />
      <Footer />
    </main>
  )
}
