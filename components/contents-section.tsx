const CONTENTS = [
  { n: "01", t: "Le radar", d: "Une empreinte stratégique propre à votre entreprise — secteur, taille, marché, concurrents, outils — sur laquelle tout le reste se construit." },
  { n: "07", t: "Les radars", d: "Sept domaines surveillés en continu, chacun construit sur cette empreinte, pas sur un modèle générique." },
  { n: "05", t: "Minutes par semaine", d: "Le changement majeur, l'opportunité, le risque, ce que font vos concurrents, ce que vous devriez faire. Pas cinquante newsletters à lire." },
  { n: "36", t: "Mois de visibilité", d: "Une timeline en quatre horizons — de l'imminent au scénario stratégique — pour cesser de subir et commencer à anticiper." },
]

export function ContentsSection() {
  return (
    <section id="produit" className="section">
      <div className="shell-lg">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">Ce que RADAR construit</div>
          <h2 className="h-section">Une empreinte stratégique, propre à votre entreprise.</h2>
        </div>

        <div className="grid-auto">
          {CONTENTS.map((c) => (
            <div key={c.t} className="card px-7 py-8">
              <div className="mb-3.5 font-serif text-[2.25rem] font-bold leading-none text-brand">{c.n}</div>
              <h3 className="mb-2.5 font-serif text-[1.3rem] font-bold">{c.t}</h3>
              <p className="body-sm">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
