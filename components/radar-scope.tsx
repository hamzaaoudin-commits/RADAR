"use client"

/**
 * Le scope radar — copié à l'identique du composant RadarScope de la page
 * /radar de Strawberry Production : mêmes anneaux, même balayage en
 * conic-gradient, mêmes pings. Seuls les libellés des blips changent : au
 * lieu de noms de marques lues, ce sont les domaines que RADAR surveille.
 */
export function RadarScope() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="radar-scope">
        <div className="scope-ring r1" />
        <div className="scope-ring r2" />
        <div className="scope-ring r3" />
        <div className="scope-cross" />
        <div className="scope-sweep" />
        <div className="scope-center" />
        <div className="blip" style={{ "--a": "38deg", "--d": "120px", "--phase": "0.58s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">IA</span></div>
        <div className="blip" style={{ "--a": "118deg", "--d": "92px", "--phase": "1.8s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Concurrents</span></div>
        <div className="blip left" style={{ "--a": "212deg", "--d": "128px", "--phase": "3.24s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Réglementation</span></div>
        <div className="blip left" style={{ "--a": "300deg", "--d": "76px", "--phase": "4.58s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Marché</span></div>
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
        .scope-center { position: absolute; top: 50%; left: 50%; width: 8px; height: 8px; background: #fff; border-radius: 50%; transform: translate(-50%,-50%); z-index: 3; }
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
        @media (prefers-reduced-motion: reduce) {
          .scope-sweep { animation: none; background: conic-gradient(from 300deg, rgba(230,57,70,0) 0deg, rgba(230,57,70,0.28) 55deg, rgba(230,57,70,0) 60deg); }
          .blip .ping { animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
