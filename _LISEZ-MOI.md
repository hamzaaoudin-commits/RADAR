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

## Passe doctrinale

Corrections des manques identifiés au regard du corpus de narratif de marque
(manifeste, ennemi nommé, voix propre) — sans toucher au système visuel
(couleurs, typographie, composants), qui reste exactement celui de
Strawberry-Prod à la demande explicite.

- Nouvelle section `components/manifesto-section.tsx` : nomme l'ennemi
  (« l'angle mort », pas la concurrence) et donne à RADAR une liste de
  refus dans le même esprit que celle de Strawberry Production, mais
  écrite pour ce produit — RADAR refuse la veille passive, le bruit
  générique, de se substituer au jugement humain, et l'angle mort.
  Insérée sur la home entre le problème et le contenu produit, avec
  ancre `#manifeste` et lien dans la navbar.
- Le hero et le footer reprennent la même formule (« notre seul ennemi :
  l'angle mort ») pour créer la répétition qui installe l'association,
  sans changer un seul pixel du design.

Ce qui reste un choix ouvert, volontairement non traité : le système
visuel de RADAR est identique à celui de Strawberry-Prod. C'est un
manquement réel au regard du Module 19 du corpus (une marque doit avoir
ses propres codes pour être inimitable), mais c'est une contrainte
explicitement posée, pas un oubli — à trancher plus tard si besoin.

## Passe direct response (règle de l'Un, mécanisme, fausse cause)

Corrections au regard du corpus de copywriting direct-response (règle de
l'Un, 3 niveaux logique/émotion/identité, mécanisme, fausse cause → vraie
cause, moins de « nous » plus de « vous »). Toujours sans toucher au design.

- **Une action** : le hero n'a plus deux boutons de même poids. « Voir les
  tarifs » reste l'unique bouton ; le lien dashboard est redescendu en
  simple lien texte.
- **Une offre** : la home affichait un aperçu à 3 formules (`PricingPreview`,
  supprimé) juste au-dessus d'une carte à offre unique (`PricingCallout`,
  conservée) — les deux se contredisaient. La home ne montre plus que
  RADAR PRO comme offre unique, avec un lien discret vers `/pricing` pour
  qui veut comparer. Le tableau comparatif complet reste sur `/pricing`,
  où le visiteur a déjà choisi de comparer — c'est le bon endroit pour le
  paradoxe du choix, pas la home.
- **Mécanisme nommé** : le pipeline en 7 étapes s'appelle maintenant « Le
  protocole RADAR » et le texte le relie explicitement au filtre construit
  sur l'entreprise, pas sur le secteur.
- **Fausse cause → vraie cause** : `problem-section.tsx` détaille
  maintenant ce que le visiteur a déjà essayé (alertes mot-clé,
  newsletters sectorielles, veille confiée à un collaborateur), pourquoi
  chacun échoue, puis nomme la vraie cause (absence de filtre) avant
  d'amener RADAR comme seule vraie solution — structure calquée sur le
  modèle du corpus.
- **Identité (niveau 3)** : ajout d'une ligne dans problem-section qui
  oppose deux catégories de dirigeants plutôt que de rester au niveau
  fonctionnel.
- **Moins de « nous », plus de « vous »** : les refus du manifeste et son
  intro sont repassés en 2e personne quand c'était encore à la 3e.

## Ce qui n'a pas été fait, volontairement

- **Pas de preuve sociale ajoutée.** RADAR n'a pas encore de client réel —
  inventer un témoignage, un logo ou un chiffre serait un mensonge, pas
  une correction. Priorité produit avant priorité copywriting.
- **Pas d'urgence artificielle ajoutée.** Le corpus recommande la rareté
  temporelle ou quantitative, mais toute urgence affichée doit être réelle
  (ex. capacité d'onboarding limitée) — à activer seulement si elle
  correspond à une contrainte vraie, jamais avec un chiffre inventé ou un
  compte à rebours factice.

## Finitions visuelles + page /brief

### Visuels (additifs uniquement — aucune couleur ni typo touchée)
Nouveaux utilitaires en fin de `app/globals.css`, tous ajoutés à la suite du
système existant sans en modifier une ligne :
- `grain` / `grain-layer` — grain SVG en overlay sur le hero et l'en-tête du
  brief. Casse l'aplat numérique des glows.
- `card-hover` — les cartes réagissent au survol : liseré qui vire au rouge de
  marque, surface qui se soulève de 2px. Appliqué aux cartes contenu, alerte,
  brief et tarifs.
- `reveal` + `components/reveal.tsx` — révélation au scroll via
  IntersectionObserver, one-shot (pas de re-animation au scroll inverse),
  neutralisée sous `prefers-reduced-motion`. Appliquée en cascade sur les
  cartes contenu et les sept radars.
- `hairline` — filet dégradé aux extrémités, plus fin qu'une bordure pleine.
- `meter` — jauge fine utilisée par le suivi du brief.
- Crochets d'angle (`bracket-tl` / `bracket-br`, déjà présents dans le
  système) ajoutés à la formule recommandée dans la grille tarifaire.

### Page `/brief`
Nouvelle page, liée depuis la navbar, le footer et la section brief de la home.
Deux blocs :

1. **Le brief de la semaine** — colonne d'archive à gauche (semaines 31 à 33,
   avec pastille « non lu »), brief sélectionné à droite : titre, résumé, puis
   les 5 points en accordéon. Chaque point s'ouvre sur « pourquoi ça compte
   pour vous » / « action recommandée » + horizon estimé.
2. **Le suivi des sujets** (`ThreadTracker`) — c'est la réponse à la demande :
   ce que l'e-mail ne peut pas donner. Chaque signal détecté est suivi sur une
   timeline en 5 étapes (Détecté → Confirmé → En test → Décidé → Traité) avec
   jauge de progression, semaine de première détection et note d'avancement.
   Un sujet traité passe au vert et sort du rouge de marque.

Les données sont dans `lib/brief-data.ts` et sont explicitement annoncées
comme illustratives, en haut de page — même règle que le dashboard : jamais
un chiffre inventé présenté comme un résultat réel.

## Restructuration des pages

- **`/dashboard` supprimé.** La page de démo du dashboard RADAR PRO et son
  composant `glass-card.tsx` (devenu inutilisé) ont été retirés. Tous les
  liens qui y menaient ont été repointés : le lien secondaire du hero mène
  maintenant à `/produit`, celui de la section de transition à `/brief`, et
  les entrées navbar/footer ont été supprimées.
- **Nouvelle page `/produit`.** Elle rassemble tout le détail produit qui
  encombrait la home : ce que RADAR construit, les sept radars, le protocole
  en sept étapes, l'alerte et le brief. Elle se termine sur un CTA unique
  vers les tarifs.
- **Tarifs entièrement sur `/pricing`.** La carte d'offre recommandée
  (`PricingCallout`) a quitté la home pour la page tarifs, où elle sert
  désormais d'en-tête au-dessus de la grille comparative : recommandation
  unique d'abord, comparaison ensuite pour qui veut creuser. Ses liens, qui
  bouclaient sur `/pricing`, pointent maintenant vers l'ancre de la formule.
- **Home allégée.** Elle ne garde que le parcours de conviction — hero,
  problème (fausse cause → vraie cause), manifeste, passerelle vers le
  produit, bandeau, transition, FAQ. Le détail produit et les prix vivent
  sur leurs pages dédiées.

Navigation résultante : Manifeste · Produit · Le brief · Tarifs.

## Le manifeste devient le moment de conversion

Le manifeste était déjà sur la page d'accueil, mais deux choses le
neutralisaient : une entrée « Manifeste » dans le menu le faisait passer pour
une page annexe, et la section s'arrêtait sur une déclaration sans jamais
demander quoi que ce soit.

- **Entrée « Manifeste » retirée du menu.** La navigation ne garde que
  Produit · Le brief · Tarifs. La doctrine n'est plus une destination : elle
  est sur le chemin de tout le monde, lue au moment où le lecteur vient
  d'admettre le problème.
- **Chaque refus est suivi de sa conséquence pour le lecteur** (bloc « Pour
  vous »). Une doctrine qui ne se traduit pas en bénéfice concret ne fait
  adhérer personne — c'est ce qui manquait pour qu'elle vende.
- **Le manifeste se referme sur une décision, pas sur une conviction** : « Si
  vous êtes d'accord avec ces quatre lignes, vous n'avez pas besoin d'être
  convaincu de la suite » + bouton tarifs + réassurance sans engagement.
- **Relance finale après la FAQ** (`closing-cta.tsx`) : le manifeste demande
  une première fois quand la conviction est fraîche, la relance demande une
  seconde fois une fois les objections levées.
- **Hiérarchie des boutons revue** pour éviter trois demandes concurrentes :
  les deux demandes d'achat (manifeste, relance finale) sont en bouton
  principal ; la passerelle produit passe en bouton secondaire et la
  transition vers le brief en simple lien.
