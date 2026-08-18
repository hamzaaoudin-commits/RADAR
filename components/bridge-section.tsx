import Link from "next/link"

export function BridgeSection() {
  return (
    <section className="section pb-28 text-center">
      <div className="mx-auto max-w-[720px]">
        <p className="font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic leading-snug text-chalk-75">
          Le monde change. Votre entreprise doit changer avant lui.
        </p>
        <Link href="/brief" className="btn-quiet mt-5">Voir un brief et son suivi →</Link>
      </div>
    </section>
  )
}
