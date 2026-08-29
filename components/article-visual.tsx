import type { Visual } from "@/lib/brief-data"

/**
 * Rendu des visuels d'article, en SVG et CSS purs.
 *
 * Chaque type de visuel correspond à une forme d'information : un écart se
 * lit en barres comparées, un franchissement en axe, une échéance en frise,
 * un remplissage en jauge, un enchaînement en flux. Aucune bibliothèque de
 * graphiques : les données sont trop simples pour le justifier, et une
 * dépendance de plus alourdirait le rendu du flipbook.
 */

function Frame({
  label,
  children,
  note,
}: {
  label: string
  children: React.ReactNode
  note?: string
}) {
  return (
    <figure className="jv">
      <figcaption className="jv-label">{label}</figcaption>
      <div className="jv-body">{children}</div>
      {note && <div className="jv-note">{note}</div>}
    </figure>
  )
}

export function ArticleVisual({ visual }: { visual: Visual }) {
  if (visual.kind === "compare") {
    const max = Math.max(...visual.items.map((i) => i.value))
    return (
      <Frame label={visual.unit ?? "Comparaison"} note={visual.note}>
        <div className="jv-bars">
          {visual.items.map((it) => (
            <div key={it.label} className="jv-bar-row">
              <div className="jv-bar-head">
                <span className="jv-bar-label">{it.label}</span>
                <span className={`jv-bar-val ${it.accent ? "is-accent" : ""}`}>{it.display}</span>
              </div>
              <div className="jv-track">
                <div
                  className={`jv-fill ${it.accent ? "is-accent" : ""}`}
                  style={{ width: `${(it.value / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Frame>
    )
  }

  if (visual.kind === "threshold") {
    const max = Math.max(visual.threshold, ...visual.points.map((p) => p.value)) * 1.25
    const h = 96
    const y = (v: number) => h - (v / max) * h
    return (
      <Frame label={visual.axisLabel} note={visual.note}>
        <svg viewBox={`0 0 260 ${h + 26}`} className="jv-svg" role="img" aria-label={visual.axisLabel}>
          {/* ligne de seuil */}
          <line
            x1="0" x2="260" y1={y(visual.threshold)} y2={y(visual.threshold)}
            className="jv-threshold-line"
          />
          <text x="2" y={y(visual.threshold) - 6} className="jv-threshold-text" textAnchor="start">
            {visual.thresholdLabel}
          </text>

          {visual.points.map((p, i) => {
            const cx = 62 + i * 136
            const below = p.value < visual.threshold
            return (
              <g key={p.label}>
                <line x1={cx} x2={cx} y1={h} y2={y(p.value)} className="jv-stem" />
                <circle
                  cx={cx}
                  cy={y(p.value)}
                  r="6"
                  className={below ? "jv-dot is-below" : "jv-dot"}
                />
                <text x={cx} y={h + 14} className="jv-axis-text" textAnchor="middle">
                  {p.label}
                </text>
                <text x={cx} y={h + 24} className="jv-axis-sub" textAnchor="middle">
                  {p.display}
                </text>
              </g>
            )
          })}
        </svg>
      </Frame>
    )
  }

  if (visual.kind === "timeline") {
    return (
      <Frame label="Calendrier" note={visual.note}>
        <div className="jv-tl">
          {visual.points.map((p) => (
            <div key={p.date + p.label} className={`jv-tl-step is-${p.state}`}>
              <span className="jv-tl-dot" />
              <div className="jv-tl-date">{p.date}</div>
              <div className="jv-tl-label">{p.label}</div>
            </div>
          ))}
        </div>
      </Frame>
    )
  }

  if (visual.kind === "gauge") {
    const r = 34
    const c = 2 * Math.PI * r
    const filled = (visual.pct / 100) * c
    return (
      <Frame label={visual.caption} note={visual.note}>
        <div className="jv-gauge">
          <svg viewBox="0 0 90 90" className="jv-gauge-svg" role="img" aria-label={visual.caption}>
            <circle cx="45" cy="45" r={r} className="jv-gauge-track" />
            <circle
              cx="45" cy="45" r={r}
              className="jv-gauge-fill"
              strokeDasharray={`${filled} ${c}`}
              transform="rotate(-90 45 45)"
            />
            <text x="45" y="49" className="jv-gauge-text" textAnchor="middle">
              {visual.centerLabel}
            </text>
          </svg>
        </div>
      </Frame>
    )
  }

  // flow
  return (
    <Frame label="Enchaînement" note={visual.note}>
      <div className="jv-flow">
        {visual.steps.map((s, i) => (
          <div key={s.label} className="jv-flow-item">
            <div className={`jv-flow-box ${s.accent ? "is-accent" : ""}`}>
              <div className="jv-flow-label">{s.label}</div>
              {s.sub && <div className="jv-flow-sub">{s.sub}</div>}
            </div>
            {i < visual.steps.length - 1 && <span aria-hidden className="jv-flow-arrow">→</span>}
          </div>
        ))}
      </div>
    </Frame>
  )
}
