# RADAR — site autonome

Extrait du design system de Strawberry Production (mêmes tokens de couleur,
mêmes polices, mêmes composants) pour un tout nouveau produit : RADAR,
intelligence stratégique continue pour entreprises.

## ⚠️ Collision de nom à régler avant de publier

Le site Strawberry Production a **déjà** un produit qui s'appelle RADAR :
l'abonnement à 15€/mois d'archive de lectures de marques (`/radar` sur
gostrawberryprod.com, lib/radar-library.tsx, lib/radar-reads.ts). C'est un
produit totalement différent de celui décrit dans ton document
(intelligence stratégique B2B à 49-5000€/mois). Si les deux existent en
même temps sous le même nom, tu vas semer la confusion — sur ton propre
site, dans ta propre tête de marque. À trancher : renommer l'un des deux,
ou fusionner les deux offres sous un même nom avec des paliers cohérents.

## Stack

Identique à Strawberry-Prod : Next.js 16 (App Router), React 19, Tailwind v4,
TypeScript. `app/globals.css` est une copie conforme du fichier de
Strawberry-Prod (mêmes tokens, mêmes utilitaires `@utility`, même grain de
fond, même signature de mouvement). Polices Playfair Display + DM Sans via
next/font/google — se chargent normalement sur Vercel/GitHub ; seul
l'environnement de build utilisé pour vérifier ce projet bloque l'accès à
fonts.googleapis.com, donc le `next build` a été validé une fois sans les
polices Google (structure/CSS/TS), puis les imports ont été restaurés tels
quels.

Le composant `components/radar-scope.tsx` — le scope animé avec balayage et
blips — est copié à l'identique de `RadarScope` sur `/radar` de
Strawberry-Prod (mêmes anneaux, même conic-gradient, même timing d'animation
et de ping). Seuls les libellés des quatre blips changent : au lieu de noms
de marques lues (Sézane, Qonto...), ce sont les domaines que RADAR
surveille (IA, Concurrents, Réglementation, Marché).

La home suit la même structure de page que `/radar` : pill → h-display →
lede → CTA → scope, puis grille de 4 cartes (kicker "Ce que RADAR
construit"), puis liste à icônes façon "les cinq instruments" (ici les sept
radars), puis la grille à cases numérotées ("la grille" → devenue le
pipeline en 7 étapes), le bandeau plein rouge (SectionDivider), la carte
d'abonnement centrée, la citation de transition, puis la FAQ à accordéon —
composant `FaqSection` copié à l'identique, icônes comprises.

## Pages

- `/` — landing : hero (balayage radar en SVG, dans le rouge de la marque),
  problème, "ce que RADAR n'est pas" (pipeline info → décision), les 7
  radars, score + alerte + brief hebdo, aperçu tarifs, CTA.
- `/pricing` — 5 formules (Free, RADAR 49€, PRO 199€, Advisory 999€,
  Enterprise 5000€+) + tableau comparatif domaine par domaine + FAQ.
- `/dashboard` — maquette du dashboard produit (score, répartition par
  sévérité, top 5 changements, timeline 36 mois). Données d'exemple,
  clairement annoncées comme telles — même principe que sur Strawberry-Prod :
  jamais de faux chiffre présenté comme réel.

## Pour lancer

```
npm install
npm run dev
```

## À faire avant mise en ligne

- Résoudre la collision de nom ci-dessus.
- Remplacer l'email de contact placeholder (`hello@radar-intelligence.io`)
  et le lien LinkedIn placeholder dans `components/footer.tsx`.
- Pages `/mentions-legales`, `/cgv`, `/confidentialite` liées en pied de
  page mais pas encore créées.
- Aucun moyen de paiement n'est branché : les CTA renvoient vers `/pricing`,
  pas vers Stripe — à faire quand les liens de paiement existeront.

## Version fusionnée

La home combine désormais les deux versions : le visuel exact de la page
RADAR de Strawberry-Prod (scope animé, grille à cases, FAQ à accordéon,
bandeau plein rouge, carte d'abonnement) ET le contenu produit plus étoffé
proposé initialement (section problème, score détaillé par domaine + alerte
+ brief hebdo, aperçu des 3 formules payantes en grille). `/pricing` et
`/dashboard` restent les pages dédiées, restylées avec les mêmes classes
utilitaires (`card`, `kicker`, `eyebrow`, `h-section`) pour rester cohérentes
avec le reste du site.

## Dernière passe

- Favicon ajouté (`app/icon.svg`, détecté automatiquement par Next.js) — un
  scope radar simplifié en rouge de marque sur fond ink.
- Offre RADAR FREE supprimée partout : `lib/pricing-data.ts`, aperçu tarifs
  de la home, tableau comparatif de `/pricing`.
- "Intelligence stratégique continue, pour entreprises" → "Intelligence
  stratégique continue" dans le hero.
- Ligne d'essai ("14 jours offerts...") retirée du hero et de la carte
  d'abonnement — il n'y a plus d'offre gratuite à teaser.
- CTA "Essai gratuit" / "Démarrer gratuitement" remplacés par "Voir les
  tarifs" (navbar, hero). Le bouton "Commencer" du tier FREE dans
  PricingTable a disparu avec le tier.
- Le concept de score par entreprise est entièrement retiré : composant
  `score-gauge.tsx` supprimé, section score de la home réduite à
  alerte + brief hebdo, ligne "Score de préparation" retirée du comparatif
  tarifs, colonne score retirée du dashboard (qui garde la répartition par
  sévérité des alertes et le top 5 changements, qui ne notent pas
  l'entreprise elle-même).
