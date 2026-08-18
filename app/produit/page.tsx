import type { Metadata } from "next"
import Link from "next/link"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContentsSection } from "@/components/contents-section"
import { SevenRadars } from "@/components/seven-radars"
import { PipelineGrid } from "@/components/pipeline-grid"
import { AlertBriefSection } from "@/components/alert-brief-section"

export const metadata: Metadata = {
  title: "Le produit · RADAR",
  description:
    "Sept radars construits sur l'empreinte stratégique de votre entreprise, un protocole en sept étapes, et une alerte quand ça compte.",
}

export default function ProduitPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />

      <section className="grain relative px-gutter pb-8 pt-32">
        <div className="glow-top" aria-hidden />
        <div className="grain-layer" aria-hidden />
        <div className="shell-lg relative">
          <div className="mb-3 kicker">Le produit</div>
          <h1 className="mb-4 font-serif text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            Sept radars, construits sur votre entreprise.
          </h1>
          <p className="lede max-w-[640px]">
            Pas une veille sectorielle envoyée à tout le monde. Une empreinte
            stratégique propre à votre entreprise, sur laquelle sept domaines sont
            surveillés en continu — et filtrés avant de vous arriver.
          </p>
        </div>
      </section>

      <ContentsSection />
      <SevenRadars />
      <PipelineGrid />
      <AlertBriefSection />

      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[640px]">
          <h2 className="mb-5 font-serif text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-snug text-white">
            Reste à choisir la profondeur de surveillance.
          </h2>
          <Link href="/pricing" className="btn-primary">Voir les tarifs</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
