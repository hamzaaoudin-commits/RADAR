import { NavBar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionPipeline } from "@/components/solution-pipeline"
import { SevenRadars } from "@/components/seven-radars"
import { AlertBriefSection } from "@/components/alert-brief-section"
import { SectionDivider } from "@/components/section-divider"
import { PricingTable } from "@/components/pricing-table"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <SolutionPipeline />
      <SevenRadars />
      <AlertBriefSection />
      <SectionDivider word="DÉTECTEZ." caption="Ce que RADAR fait, avant tout le reste" />

      <section className="section overflow-hidden bg-ink">
        <div className="shell">
          <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
            L&apos;INVESTISSEMENT
          </div>
          <h2 className="mb-4 max-w-[700px] font-serif text-[clamp(1.8rem,3.6vw,3.1rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
            Commencez gratuitement. Montez en puissance quand ça compte.
          </h2>
          <p className="mb-10 max-w-[600px] font-sans text-[16.5px] leading-[1.75] text-white/60">
            Trois formules pour les entreprises qui veulent voir venir plutôt que subir.
          </p>
          <PricingTable compact />
          <div className="mt-8">
            <Link href="/pricing" className="font-sans text-[13.5px] text-chalk-55 underline decoration-hair-strong underline-offset-4 hover:text-white">
              Voir toutes les formules, y compris FREE et ENTERPRISE →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
