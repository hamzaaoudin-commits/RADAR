"use client"

import { useMemo, useState, type ReactNode } from "react"
import type { Brief, Severity } from "@/lib/brief-data"
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

const ALERT_LABEL: Record<Severity, string> = {
  critical: "Critique",
  important: "Élevé",
  watch: "Surveillance",
}

function Folio({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="jf-folio">
      <span className="jf-folio-n">{n}</span>
      <span className="jf-folio-t">{children}</span>
      <span aria-hidden className="jf-folio-line" />
    </div>
  )
}

function Refs({ refs, sources }: { refs?: number[]; sources?: Brief["sources"] }) {
  if (!refs?.length || !sources) return null
  return (
    <ul className="jf-refs">
      {refs.map((n) => {
        const src = sources[n - 1]
        if (!src) return null
        return (
          <li key={n}>
            <span className="jf-ref-n">[{n}]</span>{" "}
            <a href={src.url} target="_blank" rel="noopener noreferrer">
              {src.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function buildPages(b: Brief): Page[] {
  const pages: Page[] = []
  const ref = `RADAR/EC/2026-${b.week.replace("Semaine ", "")}`
  const nb = b.rubriques.reduce((n, r) => n + r.breves.length, 0)
  const une = b.items[0]

  /* Couverture */
  pages.push({
    label: "Couverture",
    content: (
      <div className="jf-cover">
        <div aria-hidden className="jf-cover-rings" />
        <div className="jf-cover-top">
          <div className="jf-eyebrow jf-red">Diffusion restreinte · Abonnés</div>
        </div>
        <div className="jf-cover-mid">
          <div className="jf-mast">RADAR</div>
          <div className="jf-cover-sub">Note hebdomadaire de veille stratégique</div>
          <div aria-hidden className="jf-cover-rule" />
          <div className="jf-cover-num">N° {b.week.replace("Semaine ", "")}</div>
          <div className="jf-cover-market">{b.market}</div>
          <div className="jf-cover-period">{b.dateLabel}</div>
        </div>
        <div className="jf-cover-bot">
          <div className="jf-eyebrow">Référence {ref}</div>
          <div className="jf-eyebrow">Établie le lundi 26 octobre 2026</div>
        </div>
      </div>
    ),
  })

  /* Synthèse */
  pages.push({
    label: "Synthèse",
    content: (
      <div>
        <Folio n="I.">Synthèse</Folio>
        <h3 className="jf-h1">{b.headline}</h3>
        <p className="jf-chapo">{b.summary}</p>
        <div className="jf-alert">
          <div className="jf-alert-tag">
            <span>Niveau d&apos;alerte</span>
            <strong>{ALERT_LABEL[une.severity]}</strong>
          </div>
          <div className="jf-alert-txt">
            <strong>{une.label}.</strong> {une.why}
          </div>
        </div>
        <div className="jf-sommaire-h">Au sommaire — {nb} articles</div>
        <div className="flex flex-col gap-1.5">
          {b.rubriques.map((r) => (
            <div key={r.name} className="flex items-baseline gap-2">
              <span className="jf-som-name">{r.name}</span>
              <span className="jf-som-dots" />
              <span className="jf-som-n">{r.breves.length || "—"}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  })

  /* Sujets prioritaires */
  pages.push({
    label: "Sujets prioritaires",
    content: (
      <div>
        <Folio n="II.">Sujets prioritaires</Folio>
        <div className="flex flex-col">
          {b.items.map((i) => (
            <div key={i.rank} className="jf-sujet">
              <div className="jf-sujet-rank">{i.rank}</div>
              <div>
                <div className="jf-sujet-label">{i.label}</div>
                <div className="jf-sujet-meta">
                  {i.domain} · Alerte {ALERT_LABEL[i.severity].toLowerCase()} · Horizon {i.horizon}
                </div>
                <p className="jf-sujet-act">
                  <span className="jf-red">À faire : </span>
                  {i.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  })

  /* Recommandation */
  pages.push({
    label: "Recommandation",
    content: (
      <div className="flex h-full flex-col">
        <Folio n="III.">Recommandation de la semaine</Folio>
        <div className="jf-action">{b.todo}</div>
      </div>
    ),
  })

  /* Articles : une page par article */
  for (const r of b.rubriques) {
    if (r.breves.length === 0) {
      pages.push({
        label: r.name,
        content: (
          <div>
            <Folio n="IV.">{r.name}</Folio>
            <p className="jf-empty">Rien à signaler cette semaine. Balayé : {r.empty}.</p>
          </div>
        ),
      })
      continue
    }
    r.breves.forEach((a, idx) => {
      pages.push({
        label: `${r.name} ${idx + 1}`,
        content: (
          <div>
            <Folio n="IV.">
              {r.name} · {idx + 1}/{r.breves.length}
            </Folio>
            <h4 className="jf-h2">{a.title}</h4>
            <p className="jf-body">{a.body}</p>
            {a.visual && <ArticleVisual visual={a.visual} />}
            <div className="jf-imp">
              <div className="jf-eyebrow jf-red mb-1">Ce que cela change</div>
              <p className="jf-imp-text">{a.implication}</p>
            </div>
            <div className="jf-srcbox">
              <span className={`jf-conf ${a.confidence === "relayed" ? "is-relayed" : ""}`}>
                {a.confidence === "relayed" ? "Relayé · à confirmer" : "Source consultée"}
              </span>
              <div className="jf-src">{a.source}</div>
              <Refs refs={a.refs} sources={b.sources} />
            </div>
          </div>
        ),
      })
    })
  }

  /* Calendrier */
  pages.push({
    label: "Calendrier",
    content: (
      <div>
        <Folio n="V.">Calendrier</Folio>
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

  /* Chiffres */
  pages.push({
    label: "Chiffres clés",
    content: (
      <div>
        <Folio n="VI.">Chiffres clés</Folio>
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

  /* Sources et méthode */
  pages.push({
    label: "Sources",
    content: (
      <div>
        <Folio n="VII.">Sources et méthode</Folio>
        <ol className="jf-srclist">
          {b.sources?.map((s, i) => (
            <li key={s.url}>
              <span className="jf-ref-n">[{i + 1}]</span>{" "}
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="jf-method">
          <div className="jf-eyebrow jf-red mb-1.5">Comment lire ce numéro</div>
          <p>
            <strong>Source consultée</strong> : la rédaction a lu la page citée. <strong>Relayé · à confirmer</strong> :
            l&apos;information vient d&apos;un tiers et n&apos;a pas été revérifiée à la source. Un montant que la source ne
            publie pas est écrit « non publié », jamais estimé. Ce document informe ; il ne remplace ni un conseil juridique
            ni un conseil fiscal.
          </p>
        </div>
        <div className="jf-sign">La rédaction RADAR</div>
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
    <div className="mx-auto w-full max-w-[580px]">
      <div
        className="jf-stage"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next()
          if (e.key === "ArrowLeft") prev()
        }}
        role="group"
        aria-label="Note hebdomadaire RADAR, feuilletable"
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
