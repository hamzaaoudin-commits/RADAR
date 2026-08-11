"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatedOrb } from "./animated-orb"

const RINGS = [90, 170, 250, 330]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setMounted(true), 100)
        else setMounted(false)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" ref={heroRef as any} className="relative flex min-h-[86vh] items-center overflow-hidden bg-ink">
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={700} x="-10%" y="-20%" opacity={0.18} />
      <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={500} x="65%" y="20%" opacity={0.14} />
      <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={300} x="80%" y="80%" opacity={0.1} />

      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[length:60px_60px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]"
      />

      {/* Le balayage radar : le seul motif que le produit s'autorise à
          emprunter à son propre nom, rendu dans le rouge de la marque plutôt
          que dans le vert phosphore attendu — pour rester impossible à
          confondre avec un scope militaire générique. */}
      <svg
        aria-hidden
        viewBox="0 0 800 800"
        className="pointer-events-none absolute right-[-120px] top-1/2 z-0 hidden h-[720px] w-[720px] -translate-y-1/2 opacity-[0.35] md:block motion-reduce:hidden"
      >
        {RINGS.map((r) => (
          <circle key={r} cx="400" cy="400" r={r} fill="none" stroke="#e63946" strokeWidth="1" opacity={0.22} />
        ))}
        <line x1="400" y1="400" x2="400" y2="70" stroke="#e63946" strokeWidth="1.5" opacity={0.5} />
        <g
          style={{
            transformOrigin: "400px 400px",
            animation: mounted ? "radar-sweep 4.5s linear infinite" : "none",
          }}
        >
          <path d="M400 400 L400 70 A330 330 0 0 1 633 166 Z" fill="url(#sweepGradient)" opacity="0.55" />
        </g>
        <defs>
          <linearGradient id="sweepGradient" x1="400" y1="400" x2="633" y2="166" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e63946" stopOpacity="0.6" />
            <stop offset="1" stopColor="#e63946" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="400" cy="400" r="4" fill="#e63946" />
        <circle cx="240" cy="290" r="3" fill="#e63946" opacity={mounted ? 0.9 : 0} style={{ transition: "opacity 600ms ease", transitionDelay: "300ms" }} />
        <circle cx="540" cy="480" r="3" fill="#e63946" opacity={mounted ? 0.9 : 0} style={{ transition: "opacity 600ms ease", transitionDelay: "500ms" }} />
        <circle cx="470" cy="220" r="3" fill="#e63946" opacity={mounted ? 0.9 : 0} style={{ transition: "opacity 600ms ease", transitionDelay: "700ms" }} />
      </svg>

      <div className="relative z-[1] w-full shell px-gutter pt-32">
        <div
          className={[
            "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          ].join(" ")}
        >
          <div className="mb-8 inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-brand/35 bg-brand/[0.12] px-4 py-1.5">
            <span aria-hidden className="h-[7px] w-[7px] shrink-0 rounded-full bg-brand shadow-[0_0_8px_#e63946]" />
            <span className="whitespace-nowrap font-sans text-[11px] font-semibold tracking-[0.1em] text-brand">
              INTELLIGENCE STRATÉGIQUE CONTINUE
            </span>
          </div>

          <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.22em] text-chalk-40">
            Ne réagissez plus. Détectez.
          </p>

          <h1 className="m-0 mb-6 max-w-[780px] break-words font-serif text-[clamp(1.7rem,5vw,4.6rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            L&apos;intelligence qui empêche votre entreprise
            <br />
            <span className="block bg-[linear-gradient(135deg,#e63946_20%,#ff1a1a_60%,#dc2626)] bg-clip-text pb-[0.14em] text-transparent">
              de devenir obsolète.
            </span>
          </h1>

          <p className="mb-6 max-w-[640px] font-serif text-[clamp(1.05rem,2.2vw,1.5rem)] leading-[1.35] text-white/85">
            Vous n&apos;avez pas besoin de surveiller le monde. RADAR le fait pour vous — et vous dit quoi en faire.
          </p>

          <p className="mb-6 max-w-[640px] font-sans text-[13px] uppercase tracking-[0.14em] text-brand/80">
            IA · Réglementation · Marchés · Concurrents · Technologies · Comportements
          </p>

          <p className="mb-10 max-w-[600px] font-sans text-[clamp(0.9rem,1.8vw,1.15rem)] leading-[1.7] text-white/55">
            RADAR surveille en continu ce qui pourrait bouleverser votre activité, et transforme la masse d&apos;informations en une seule question résolue chaque semaine : qu&apos;est-ce qui a changé, et que devez-vous faire maintenant.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="/pricing" className="btn-primary">Démarrer gratuitement →</a>
            <a href="/dashboard" className="btn-quiet">Voir le dashboard</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
