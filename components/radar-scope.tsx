"use client"

/**
 * Le scope radar — anneaux, balayage en conic-gradient et pings repris du
 * système visuel existant. Il porte les sept domaines que RADAR surveille.
 *
 * `phase` n'est pas décorative : le balayage fait un tour en 5,5s en partant
 * du haut, donc un blip à l'angle A doit s'allumer à (A / 360) x 5,5s. C'est
 * ce qui donne l'impression que le balayage révèle chaque cible en la
 * croisant, au lieu de pings qui clignotent au hasard.
 *
 * `side` bascule l'étiquette à gauche pour les blips de la moitié gauche,
 * sinon le texte partirait vers le centre du scope.
 */
const SWEEP_SECONDS = 5.5

const BLIPS = [
  { label: "IA", angle: 28, dist: 112, side: "right" },
  { label: "Tech", angle: 85, dist: 96, side: "right" },
  { label: "Marché", angle: 140, dist: 120, side: "right" },
  { label: "Concurrents", angle: 205, dist: 118, side: "left" },
  { label: "Risques", angle: 240, dist: 96, side: "left" },
  { label: "Opportunités", angle: 288, dist: 88, side: "left" },
  { label: "Réglementation", angle: 332, dist: 116, side: "left" },
].map((b) => ({ ...b, phase: ((b.angle / 360) * SWEEP_SECONDS).toFixed(2) }))

export function RadarScope() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="radar-scope">
        <div className="scope-ring r1" />
        <div className="scope-ring r2" />
        <div className="scope-ring r3" />
        <div className="scope-cross" />
        <div className="scope-sweep" />
        {BLIPS.map((b) => (
          <div
            key={b.label}
            className={`blip${b.side === "left" ? " left" : ""}`}
            style={{ "--a": `${b.angle}deg`, "--d": `${b.dist}px`, "--phase": `${b.phase}s` } as React.CSSProperties}
          >
            <span className="dot" />
            <span className="ping" />
            <span className="blip-label">{b.label}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .hero-stage { position: relative; height: 320px; margin-top: 40px; display: flex; align-items: center; justify-content: center; }
        .radar-scope { position: relative; width: 300px; height: 300px; border-radius: 50%; }
        .scope-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); border: 1px solid rgba(255,255,255,0.12); border-radius: 50%; }
        .scope-ring.r1 { width: 300px; height: 300px; }
        .scope-ring.r2 { width: 200px; height: 200px; }
        .scope-ring.r3 { width: 100px; height: 100px; }
        .scope-cross::before, .scope-cross::after { content: ""; position: absolute; top: 50%; left: 50%; background: rgba(255,255,255,0.12); }
        .scope-cross::before { width: 300px; height: 1px; transform: translate(-50%,-50%); }
        .scope-cross::after { width: 1px; height: 300px; transform: translate(-50%,-50%); }
        .scope-sweep { position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(from 0deg, rgba(230,57,70,0) 0deg, rgba(230,57,70,0) 300deg, rgba(230,57,70,0.10) 340deg, rgba(230,57,70,0.32) 356deg, rgba(230,57,70,0.6) 360deg); animation: radar-sweep 5.5s linear infinite; z-index: 2; }
        .scope-sweep::after { content: ""; position: absolute; top: 0; left: 50%; width: 1px; height: 50%; background: linear-gradient(#e63946, rgba(230,57,70,0)); transform-origin: bottom center; }
        .blip { position: absolute; top: 50%; left: 50%; width: 9px; height: 9px; transform: rotate(var(--a)) translateY(calc(-1 * var(--d))) rotate(calc(-1 * var(--a))); z-index: 3; }
        .blip .dot { position: absolute; inset: 0; background: #e63946; border-radius: 50%; box-shadow: 0 0 8px rgba(230,57,70,0.35); }
        .blip .ping { position: absolute; top: 50%; left: 50%; width: 9px; height: 9px; border-radius: 50%; border: 1.5px solid #e63946; transform: translate(-50%,-50%) scale(1); opacity: 0; animation: blip-ping 5.5s linear infinite; animation-delay: var(--phase, 0s); }
        .blip .blip-label { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-family: 'DM Sans', monospace; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap; color: rgba(255,255,255,0.7); background: rgba(10,10,10,0.7); padding: 2px 6px; border-radius: 4px; }
        .blip.left .blip-label { left: auto; right: 16px; }
        @keyframes radar-sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blip-ping {
          0% { opacity: 0; transform: translate(-50%,-50%) scale(1); }
          4% { opacity: 0.9; transform: translate(-50%,-50%) scale(1); }
          22% { opacity: 0; transform: translate(-50%,-50%) scale(3.4); }
          100% { opacity: 0; transform: translate(-50%,-50%) scale(3.4); }
        }
        @media (max-width: 700px) {
          .hero-stage { height: 260px; }
          .radar-scope { transform: scale(0.74); }
          .blip .blip-label { font-size: 9.5px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .scope-sweep { animation: none; background: conic-gradient(from 300deg, rgba(230,57,70,0) 0deg, rgba(230,57,70,0.28) 55deg, rgba(230,57,70,0) 60deg); }
          .blip .ping { animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
