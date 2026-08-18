import Link from "next/link"

/**
 * Respiration entre le bandeau et la FAQ. Volontairement sans bouton
 * principal : les deux demandes d'achat de la page sont le manifeste et la
 * relance finale — celle-ci n'est qu'une porte pour aller voir le produit
 * en fonctionnement.
 */
export function BridgeSection() {
  return (
    <section className="section pb-20 text-center">
      <div className="mx-auto max-w-[720px]">
        <p className="mb-5 font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic leading-snug text-chalk-75">
          Voir le changement arriver ne sert à rien si personne ne suit ce qu&apos;on
          en a fait.
        </p>
        <Link
          href="/brief"
          className="font-sans text-[13.5px] text-chalk-55 underline decoration-hair-strong underline-offset-4 transition-colors hover:text-white"
        >
          Voir un brief hebdomadaire et son suivi dans le temps →
        </Link>
      </div>
    </section>
  )
}
