"use client"

import { useMemo, useState, type ReactNode } from "react"
import type { Brief } from "@/lib/brief-data"
import { ArticleVisual } from "./article-visual"

/**
 * Le numéro présenté comme l'objet qu'il deviendra réellement : un book
 * qu'on feuillette, pas une liste qu'on scrolle.
 *
 * Mécanique : chaque page est une feuille positionnée en pile (perspective
 * 3D), tournée à 0° (face visible) ou -180° (retournée, dos visible) selon
 * sa position par rapport à la page courante. La feuille en cours
 * d'animation reçoit temporairement un z-index forcé au-dessus de tout,
 * levé à la fin de la transition — sans ça, la page qui arrive
 * (immobile, déjà au bon angle) s'affiche instantanément par-dessus celle
 * qui tourne, et l'animation devient invisible.
 */

type Page = { label: string; content: ReactNode }

function buildPages(b: Brief): Page[] {
  const pages: Page[] = []

  pages.push({
    label: "Couverture",
    content: (
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between">
            <div className="jf-eyebrow">Intelligence de marché</div>
            <div className="jf-eyebrow">France</div>
          </div>
          <div className="jf-mast">
            RADAR<span className="text-brand">.</span>
          </div>
          <div className="jf-eyebrow mt-2">Hebdomadaire · Édition abonné</div>
        </div>

        {/* Sommaire : ce qui transforme une page de titre en couverture de
            dossier — le lecteur sait ce qu'il tient avant d'ouvrir. */}
        <div className="my-6">
          <div className="jf-eyebrow mb-3 text-brand">Au sommaire</div>
          <div className="flex flex-col gap-1.5">
            {b.rubriques.map((r) => (
              <div key={r.name} className="flex items-baseline gap-2">
                <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/45">
                  {r.name}
                </span>
                <span className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-[8.5px] text-white/30">
                  {r.breves.length || "—"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 h-px bg-white/12" />
          <div className="jf-eyebrow mb-2 text-brand">Édition de la semaine</div>
          <div className="jf-market">{b.week}</div>
          <div className="mt-2 font-mono text-[10px] tracking-[0.06em] text-white/40">
            {b.dateLabel}
          </div>
        </div>
      </div>
    ),
  })

  pages.push({
    label: "La une",
    content: (
      <div>
        <div className="jf-eyebrow mb-3 text-brand">La une</div>
        <h3 className="jf-h1">{b.headline}</h3>
        <p className="jf-chapo">{b.summary}</p>
      </div>
    ),
  })

  for (const r of b.rubriques) {
    pages.push({
      label: r.name,
      content: (
        <div>
          <div className="jf-rubline">
            <span className="jf-eyebrow text-brand">{r.name}</span>
            <span className="jf-eyebrow text-white/30">
              {r.breves.length ? `${r.breves.length} article${r.breves.length > 1 ? "s" : ""}` : "rien cette semaine"}
            </span>
          </div>
          {r.breves.length === 0 ? (
            <p className="jf-empty">Rien à signaler cette semaine. Balayé : {r.empty}.</p>
          ) : (
            <div className="flex flex-col gap-5">
              {r.breves.map((a) => (
                <div key={a.title}>
                  <h4 className="jf-h2">{a.title}</h4>
                  <p className="jf-body">{a.body}</p>
                  {a.visual && <ArticleVisual visual={a.visual} />}
                  <div className="jf-imp">
                    <div className="jf-eyebrow mb-1 text-brand">Ce que ça implique pour vous</div>
                    <p className="jf-imp-text">{a.implication}</p>
                  </div>
                  <div className="jf-src">Source — {a.source}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    })
  }

  pages.push({
    label: "L’agenda",
    content: (
      <div>
        <div className="jf-rubline">
          <span className="jf-eyebrow text-brand">L&apos;agenda</span>
          <span className="jf-eyebrow text-white/30">{b.agenda.length} échéances</span>
        </div>
        <div className="flex flex-col">
          {b.agenda.map((a) => (
            <div key={a.what} className="jf-ag">
              <div className="jf-ag-date">{a.date}</div>
              <div>
                <div className="jf-ag-what">{a.what}</div>
                <div className="jf-ag-who">{a.who}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  })

  pages.push({
    label: "Les chiffres",
    content: (
      <div>
        <div className="jf-rubline">
          <span className="jf-eyebrow text-brand">Les chiffres de la semaine</span>
          <span className="jf-eyebrow text-white/30">{b.figures.length}</span>
        </div>
        <div className="flex flex-col">
          {b.figures.map((f) => (
            <div key={f.what} className="jf-fig">
              <div className="jf-fig-val">{f.value}</div>
              <div>
                <div className="jf-fig-what">{f.what}</div>
                <div className="jf-fig-src">{f.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  })

  pages.push({
    label: "L’action",
    content: (
      <div className="flex h-full flex-col">
        <div className="jf-rubline">
          <span className="jf-eyebrow text-brand">Ce qu&apos;il faut faire cette semaine</span>
        </div>
        <div className="jf-action">{b.todo}</div>
        <div className="mt-auto pt-6 text-center">
          <div className="jf-mast" style={{ fontSize: "1.3rem" }}>
            RADAR<span className="text-brand">.</span>
          </div>
          <div className="jf-eyebrow mt-1 text-white/30">Prochain numéro lundi</div>
        </div>
      </div>
    ),
  })

  return pages
}

export function JournalFlipbook({ brief }: { brief: Brief }) {
  const pages = useMemo(() => buildPages(brief), [brief])
  const [current, setCurrent] = useState(0)
  const [turning, setTurning] = useState<number | null>(null)

  const canNext = current < pages.length - 1
  const canPrev = current > 0

  function next() {
    if (!canNext || turning !== null) return
    setTurning(current)
    setCurrent((c) => c + 1)
  }

  function prev() {
    if (!canPrev || turning !== null) return
    setTurning(current - 1)
    setCurrent((c) => c - 1)
  }

  return (
    <div className="mx-auto w-full max-w-[520px]">
      <div
        className="jf-stage"
        role="group"
        aria-label="Numéro de démonstration, feuilletable"
      >
        <div className="jf-inner">
          {pages.map((p, i) => {
            const flipped = i < current
            const isTurning = turning === i
            const z = isTurning ? 999 : flipped ? i : pages.length * 2 - i
            return (
              <div
                key={p.label + i}
                className="jf-leaf"
                style={{
                  zIndex: z,
                  transform: `rotateY(${flipped ? -179.5 : 0}deg)`,
                }}
                onTransitionEnd={(e) => {
                  if (e.propertyName === "transform" && turning === i) setTurning(null)
                }}
              >
                <div className="jf-face jf-front">
                  <div className="jf-content">{p.content}</div>
                  <div aria-hidden className="jf-page-rule" />
                  <div className="jf-page-num">{String(i + 1).padStart(2, "0")}</div>
                </div>
                <div className="jf-face jf-back" />
              </div>
            )
          })}
        </div>

        <button
          type="button"
          aria-label="Page précédente"
          onClick={prev}
          disabled={!canPrev || turning !== null}
          className="jf-nav jf-nav-l"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Page suivante"
          onClick={next}
          disabled={!canNext || turning !== null}
          className="jf-nav jf-nav-r"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-chalk-40">
          {pages[current].label}
        </span>
        <span className="font-mono text-[11px] text-chalk-40">
          {String(current + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
