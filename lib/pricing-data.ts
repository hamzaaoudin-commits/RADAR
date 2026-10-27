/**
 * Une seule offre, au même prix pour tous les marchés.
 *
 * Le journal est le même pour tous les abonnés d'un marché ; le prix ne
 * dépend donc ni de la taille de l'entreprise ni du marché choisi.
 */
export type Offer = {
  id: string
  name: string
  price: string
  cadence: string
  target: string
  features: string[]
}

export const OFFER: Offer = {
  id: "radar",
  name: "RADAR",
  price: "20€",
  cadence: "/mois",
  target: "Tous les marchés, au même prix",
  features: [
    "Le numéro RADAR de la semaine, dans votre boîte mail chaque lundi à 7h",
    "Le marché de votre choix, parmi tous ceux que RADAR couvre",
    "La une, les sept rubriques, l'agenda et les chiffres de la semaine",
    "Alertes hors numéro quand ça ne peut pas attendre",
    "Archive des numéros précédents sur le site",
    "Sans engagement, résiliable à tout moment",
  ],
}
