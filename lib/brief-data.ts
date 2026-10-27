/**
 * Numéro de la semaine 43 (19 — 25 octobre 2026), marché : expertise comptable.
 *
 * Chaque article renvoie à ses sources datées (`refs` → liste `sources`) et
 * porte la mention « source consultée » ou « relayé ». Règle tenue partout :
 * un montant que la source ne publie pas est écrit « non publié », jamais
 * estimé.
 */

export type Severity = "critical" | "important" | "watch"

export type BriefItem = {
  rank: string
  label: string
  domain: string
  severity: Severity
  why: string
  action: string
  horizon: string
}

export type TrackedThread = {
  title: string
  domain: string
  /** Position sur la timeline, de 0 (détecté) à 100 (traité). */
  progress: number
  stage: "Détecté" | "Confirmé" | "En test" | "Décidé" | "Traité"
  firstSeen: string
  note: string
}

/**
 * Visuel attaché à un article.
 *
 * Chaque type existe pour expliquer une forme d'information précise, et non
 * pour décorer : un écart de prix se lit en barres comparées, un seuil franchi
 * se lit sur un axe, une échéance se lit sur une frise, un remplissage se lit
 * en jauge. Un article sans visuel utile n'en porte pas.
 */
export type Visual =
  | {
      kind: "compare"
      /** Barres comparées : écart de prix, de coût, de part. */
      unit?: string
      items: { label: string; value: number; display: string; accent?: boolean }[]
      note?: string
    }
  | {
      kind: "threshold"
      /** Franchissement d'un seuil : avant/après contre une ligne de référence. */
      axisLabel: string
      thresholdLabel: string
      threshold: number
      points: { label: string; value: number; display: string }[]
      note?: string
    }
  | {
      kind: "timeline"
      /** Frise d'échéances, avec ou sans période transitoire. */
      points: { date: string; label: string; state: "past" | "now" | "future" | "deadline" }[]
      note?: string
    }
  | {
      kind: "gauge"
      /** Remplissage : places prises, enveloppe consommée, quota. */
      pct: number
      centerLabel: string
      caption: string
      note?: string
    }
  | {
      kind: "flow"
      /** Enchaînement d'états : fusion, bascule, chaîne de dépendance. */
      steps: { label: string; sub?: string; accent?: boolean }[]
      note?: string
    }

export type Breve = {
  title: string
  /** Le corps développé de l'article : le fait, ses modalités, ses chiffres. */
  body: string
  /** Ce que ça implique pour une entreprise du marché. Jamais une action datée. */
  implication: string
  source: string
  /** « direct » : source consultée par la rédaction ; « relayed » : relayée par un tiers, à confirmer avant d'agir. */
  confidence?: "direct" | "relayed"
  /** Numéros (à partir de 1) des sources du numéro, dans l'ordre de `sources`. */
  refs?: number[]
  visual?: Visual
}

export type Rubrique = {
  name: string
  breves: Breve[]
  /** Ce qui a été balayé quand la rubrique n'a rien donné. */
  empty?: string
}

export type AgendaEntry = { date: string; what: string; who: string }

export type KeyFigure = { value: string; what: string; source: string }

export type Brief = {
  slug: string
  week: string
  dateLabel: string
  headline: string
  summary: string
  /** La une, traitée en entier. */
  items: BriefItem[]
  rubriques: Rubrique[]
  agenda: AgendaEntry[]
  figures: KeyFigure[]
  todo: string
  read: boolean
  /** Marché couvert par ce numéro. */
  market?: string
  /** Sources du numéro, avec lien. */
  sources?: { label: string; url: string }[]
}

export const SEVERITY_META: Record<Severity, { label: string; color: string }> = {
  critical: { label: "Critique", color: "#ff1a1a" },
  important: { label: "Important", color: "#f59e0b" },
  watch: { label: "À surveiller", color: "#eab308" },
}

export const STAGES = ["Détecté", "Confirmé", "En test", "Décidé", "Traité"] as const

export const BRIEFS: Brief[] = [
  {
    slug: "s43",
    week: "Semaine 43",
    dateLabel: "19 — 25 octobre 2026",
    market: "Expertise comptable",
    read: false,
    headline: "Le budget 2027 prend du retard : le vote des recettes passe au 3 novembre",
    summary:
      "Le vote de la partie recettes, prévu le 20 octobre, a été reporté au 3 novembre : à la fin de la séance du 19, les députés n'avaient examiné que 15 articles sur 58. Pendant ce temps, la facture électronique entre dans sa phase d'exploitation (75 % des assujettis à la TVA ont désigné une plateforme, et le ministre a annoncé qu'aucune sanction ne serait prononcée avant la fin de 2026) et la profession voisine des avocats lance sa propre plateforme d'IA hébergée en France.",
    todo:
      "Ne figez aucun conseil de clôture qui repose sur une mesure du projet de budget avant le 3 novembre : préparez deux versions, avec et sans la mesure. En parallèle, listez les clients qui n'ont pas encore désigné de plateforme de réception : ce sont les 25 % restants, et l'absence de sanction jusqu'à la fin de 2026 est une tolérance annoncée, pas un report des dates légales. Enfin, demandez à chaque prestataire qui héberge un site ou un extranet la version de PHP en service : les correctifs du 21 octobre existent pour les branches 8.2 à 8.5 uniquement.",
    sources: [
      { label: "NosParlementaires — Budget 2027 : calendrier à l'Assemblée (mis à jour le 24 oct.)", url: "https://nosparlementaires.fr/actualites/budget-2027-calendrier-assemblee-cinq-semaines" },
      { label: "Assemblée nationale — Dossier législatif du PLF 2027 (n° 3210, déposé le 1er oct.)", url: "https://www.assemblee-nationale.fr/dyn/17/dossiers/PLF_2027" },
      { label: "KPMG — Publication du PLF 2027 : mesures pour les entreprises (2 oct.)", url: "https://kpmg.com/av/fr/avocats/eclairages/2026/10/publication-du-plf-2027.html" },
      { label: "Legifiscal — Amendements PLF 2027 adoptés par les députés (21 oct.)", url: "https://www.legifiscal.fr/actualites-fiscales/4693-amendements-plf-2027-adoptes-deputes-suite.html" },
      { label: "Village de la Justice — Facturation électronique au 1er septembre 2026 (publié le 31 août, mis à jour le 9 oct.)", url: "https://www.village-justice.com/articles/facturation-electronique-1er-septembre-2026-que-tout-cabinet-doit-avoir-fait,58836.html" },
      { label: "MoneyVox — Montants des amendes de la facturation électronique, loi de finances 2026 (4 mars, mis à jour le 6 mars)", url: "https://www.moneyvox.fr/banque-pro/actualites/107838/facturation-electronique-obligatoire-50-euros-amende-par-facture-en-cas-de-manquement-des-2026" },
      { label: "Legifiscal — Facturation électronique : un mois après le lancement, 3 entreprises sur 4 ont désigné une plateforme (15 oct.)", url: "https://www.legifiscal.fr/actualites-fiscales/4687-facturation-electronique-mois-lancement-3-entreprises-4-designe-plateforme.html" },
      { label: "TPE Actu — Facturation électronique : premier bilan (10 oct.)", url: "https://tpeactu.fr/2026/10/10/facturation-electronique-premier-bilan-octobre-2026/" },
      { label: "Observatoire de la facturation électronique — plateformes et tarifs (mis à jour le 25 oct.)", url: "https://comparateur-efacturation.fr/guide/observatoire-facturation-electronique-2026" },
      { label: "Conseil national des barreaux — Avocat+ (23 oct.)", url: "https://cnb.avocat.fr/actualite/avocat-votre-exercice-augmente-en-toute-souverainete" },
      { label: "Daf-Mag — IA agentique : comment Cegid veut transformer le contrôle financier (22 oct.)", url: "https://www.daf-mag.fr/bi-1244/outils-si-2132/ia-agentique-comment-cegid-veut-transformer-le-controle-financier-27814" },
      { label: "Visa — Premier pilote en conditions réelles de paiements par agents IA de confiance, avec BILL et Billtrust (20 oct.)", url: "https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.22856.html" },
      { label: "CPA Practice Advisor — Thomson Reuters publie la nouvelle version de CoCounsel (22 oct.)", url: "https://www.cpapracticeadvisor.com/2026/10/22/thomson-reuters-releases-next-version-of-cocounsel-for-tax-audit-and-accounting-pros/192280/" },
      { label: "Kaspersky — Failles PHP CVE-2026-109618 et CVE-2026-109619 (21 oct.)", url: "https://www.kaspersky.com/blog/cve-2026-109618-109619-php-vulnerabilities/56583/" },
      { label: "The Hacker News — PHP2Shell : deux failles critiques de PHP (21 oct., avant la publication des correctifs)", url: "https://thehackernews.com/2026/10/php2shell-two-unpatched-critical-php.html" },
      { label: "LetsDataScience — PHP publie des correctifs pour deux failles critiques (23 oct.)", url: "https://letsdatascience.com/news/ai-discovered-php-flaws-force-governments-and-companies-to-t-92f5dbbe" },
      { label: "AI Weekly — Wharton : la « reddition cognitive » face à l'IA (29 juin, mis à jour le 15 août)", url: "https://aiweekly.co/alerts/wharton-coins-cognitive-surrender-as-users-let-ai-decide" },
      { label: "CFNEWS — Numeris porte le M&A à son actif (13 oct.)", url: "https://www.cfnews.net/L-actualite/Build-up/Numeris-porte-le-M-A-a-son-actif-747800" },
      { label: "CFNEWS — Audit CPA en ordre de bataille pour tripler de taille (8 oct.)", url: "https://www.cfnews.net/L-actualite/Dette/Operations/Audit-CPA-en-ordre-de-bataille-pour-tripler-de-taille-745153" },
      { label: "Le Brief IA des experts-comptables, édition du 26 octobre (relais : cabinet de Townsville, enquête PwC)", url: "https://insignalebriefia.substack.com/p/le-brief-ia-des-experts-comptables-a44" },
    ],
    items: [
      {
        rank: "01",
        label: "Budget 2027 : le vote des recettes est reporté au 3 novembre",
        domain: "Réglementation",
        severity: "critical",
        why: "Aucune mesure fiscale du projet n'est acquise : 43 articles et plus de 2 600 amendements restent à examiner, et le texte peut encore être rejeté.",
        action: "Préparer deux versions de chaque conseil de clôture, avec et sans la mesure, et ne rien figer avant le 3 novembre.",
        horizon: "0–3 mois",
      },
      {
        rank: "02",
        label: "Facture électronique : 75 % des assujettis ont désigné une plateforme",
        domain: "Marché",
        severity: "important",
        why: "La réception est obligatoire depuis le 1er septembre ; l'émission arrive pour les PME le 1er septembre 2027. Le ministre a annoncé qu'aucune sanction ne serait prononcée avant la fin de 2026, sans reporter les dates légales.",
        action: "Identifier les clients sans plateforme désignée et planifier leur raccordement avant la fin de l'année.",
        horizon: "0–3 mois",
      },
      {
        rank: "03",
        label: "Les avocats lancent Avocat+, une plateforme d'IA hébergée en France",
        domain: "IA",
        severity: "watch",
        why: "Une profession réglementée voisine obtient une plateforme de branche, avec hébergement en France et non-entraînement sur les documents déposés : la question se posera pour la vôtre.",
        action: "Vérifier où vont les données de vos propres outils d'IA et si elles servent à entraîner les modèles.",
        horizon: "6–18 mois",
      },
      {
        rank: "04",
        label: "Deux cabinets parisiens accélèrent avec des capitaux",
        domain: "Concurrence",
        severity: "important",
        why: "Numeris (350 collaborateurs, adossé à un fonds) rachète un cabinet de conseil en M&A ; Audit CPA se tourne vers le capital-investissement pour tripler de taille.",
        action: "Évaluer ce que vos clients dirigeants peuvent attendre en conseil de cession et de transmission.",
        horizon: "3–6 mois",
      },
      {
        rank: "05",
        label: "Failles critiques de PHP : correctifs publiés le 21 octobre",
        domain: "Risques",
        severity: "important",
        why: "Deux failles permettent une exécution de code à distance sans authentification ; les versions 8.1 et antérieures n'ont pas de correctif officiel.",
        action: "Obtenir de chaque prestataire la version de PHP en service et la confirmation que le correctif est appliqué.",
        horizon: "0–3 mois",
      },
    ],
    rubriques: [
      {
        name: "IA",
        breves: [
          {
            title: "Les avocats lancent Avocat+, une plateforme d'IA hébergée en France",
            body: "Le Conseil national des barreaux a lancé le 23 octobre Avocat+, sa plateforme d'IA juridique, bâtie sur l'infrastructure du Legal Data Space, qui agit comme tiers de confiance et intermédiaire de données. Le lancement comprend dix assistants spécialisés dans les principaux domaines du droit français, et près de 50 assistants métiers déjà préconfigurés par des avocats. Les modèles sont exploités sur une infrastructure hébergée en France, et les documents déposés par les avocats ne servent pas à entraîner les modèles. Aucun tarif n'est mentionné sur la page.",
            implication: "Une profession réglementée voisine obtient une plateforme de branche, avec deux engagements que vos clients et vos collaborateurs sauront désormais nommer : l'hébergement en France et la non-réutilisation des documents. Ce que vous utilisez aujourd'hui doit pouvoir répondre à ces deux questions. Aucune annonce équivalente côté experts-comptables n'a été relevée cette semaine.",
            source: "CNB, communiqué du 23 octobre",
            confidence: "direct",
            refs: [10],
          },
          {
            title: "Cegid met des agents de contrôle dans ses logiciels de finance",
            body: "Présentés le 8 octobre à Cegid Connections Enterprise (Paris) et détaillés par Daf-Mag le 22 octobre : en trésorerie, un agent attribue un score de risque à chaque virement d'un lot ; dans l'ERP, un agent repère les incohérences, notamment les marges négatives, et le contrôleur examine ensuite les cas signalés. La validation reste une étape distincte de la détection, et le score est une aide au contrôle, non une garantie d'absence de fraude. Les produits concernés, le calendrier de disponibilité et les clients visés ne sont pas précisés ; les cabinets d'expertise comptable ne sont pas mentionnés.",
            implication: "Ces agents s'adressent aux directions financières, pas aux cabinets. Un client équipé pourra néanmoins vous demander comment votre revue s'articule avec un score produit par un agent. Daf-Mag note que la gouvernance — qui définit les règles, valide, documente — reste à définir.",
            source: "Daf-Mag, 22 octobre ; présentation du 8 octobre",
            confidence: "direct",
            refs: [11],
          },
        ],
      },
      {
        name: "Technologies",
        breves: [
          {
            title: "Un pilote Visa, BILL et Billtrust fait régler des factures approuvées par un agent",
            body: "Visa, BILL et Billtrust ont annoncé le 20 octobre un premier pilote en conditions réelles : un agent IA initie et finalise le paiement de factures fournisseurs déjà approuvées par l'acheteur, via les portails fournisseurs. L'agent de BILL, enregistré auprès de Visa, paie pour le compte de ses clients selon leurs instructions approuvées ; Billtrust, côté fournisseur, l'authentifie et lui donne accès au portail. L'agent n'exécute que des paiements admissibles déjà approuvés, aucun identifiant de portail n'est partagé et chaque chemin de paiement est lié à une facture. Le Trusted Agent Protocol de Visa peut remplacer les protections anti-robots comme les CAPTCHA. Périmètre géographique et calendrier ne sont pas précisés dans le communiqué.",
            implication: "Le paiement d'une facture approuvée sans intervention humaine est démontré en conditions réelles, avec la décision de payer laissée à l'acheteur. Rien n'annonce son arrivée en France ; il montre vers quoi la facture électronique peut conduire du côté des paiements.",
            source: "Visa, communiqué du 20 octobre",
            confidence: "direct",
            refs: [12],
          },
          {
            title: "Thomson Reuters publie la nouvelle version de CoCounsel pour la fiscalité, l'audit et la comptabilité",
            body: "Annoncée le 22 octobre et disponible immédiatement pour les clients aux États-Unis uniquement, la plateforme écrit et exécute du code pour les calculs (amortissements, distributions minimales obligatoires, revenu qualifié d'entreprise, contrôles de seuils, comparaisons multi-scénarios). Elle produit des classeurs Excel multi-onglets à formules dynamiques, avec un onglet d'hypothèses documenté, ainsi que des mémos en Word et PDF. Elle est conçue pour fonctionner sur n'importe quel modèle d'IA de pointe et prend en charge le protocole MCP. Le prix n'est pas publié.",
            implication: "Ce que l'éditeur met en avant, c'est un classeur dont les hypothèses sont visibles et des calculs refaits par du code plutôt que « devinés » : c'est l'exigence que vos propres revues de travaux produits par IA devraient avoir. L'offre ne concerne pas la France.",
            source: "CPA Practice Advisor, 22 octobre (modifié le 23)",
            confidence: "direct",
            refs: [13],
          },
        ],
      },
      {
        name: "Réglementation",
        breves: [
          {
            title: "Budget 2027 : le vote des recettes est reporté au 3 novembre",
            body: "Le projet de loi de finances (n° 3210) a été déposé le 1er octobre et sa discussion en séance a débuté le 13 octobre (Assemblée nationale). À la fin de la séance du 19 octobre, les députés n'avaient examiné que 15 articles sur 58 de la première partie ; 43 restent à examiner, avec plus de 2 600 amendements. Le vote prévu le 20 octobre est repoussé au mardi 3 novembre ; l'examen reprend le 27 octobre jusqu'au 2 novembre, et le vote sur l'ensemble du budget reste fixé au 17 novembre. Si la partie recettes est rejetée, le texte part au Sénat, une commission mixte paritaire cherche un accord et le gouvernement pourrait ensuite agir par ordonnance ; la date limite du Parlement est le 17 décembre, faute de quoi une loi spéciale permettrait à l'État de continuer à percevoir les impôts. L'an dernier, la première partie avait été rejetée par 404 voix contre 1 et le budget 2026 n'a été adopté qu'en février 2026, par le 49.3. Votes adoptés à ce stade : indexation du barème de l'impôt sur le revenu sur l'inflation (96 voix contre 0) et suppression de la baisse de l'abattement fiscal sur les pensions (116 contre 30). Le report est relevé par NosParlementaires ; la page de l'Assemblée consultée n'en fait pas état.",
            implication: "Aucune mesure fiscale du projet n'est acquise, et rien ne garantit que la première partie sera adoptée. Les conseils de clôture qui supposent une mesure du projet doivent être livrés en deux versions.",
            source: "NosParlementaires (mis à jour le 24 octobre) ; Assemblée nationale, dossier législatif",
            confidence: "direct",
            refs: [1, 2],
            visual: {
              kind: "timeline",
              points: [
                { date: "20 oct.", label: "Vote initial prévu, reporté", state: "past" },
                { date: "27 oct. – 2 nov.", label: "Reprise de l'examen", state: "now" },
                { date: "3 novembre", label: "Vote de la première partie", state: "future" },
                { date: "17 novembre", label: "Vote sur l'ensemble du budget", state: "future" },
                { date: "17 décembre", label: "Date limite du Parlement", state: "deadline" },
              ],
              note: "Au-delà du 17 décembre, sans budget voté, une loi spéciale permet de continuer à percevoir les impôts.",
            },
          },
          {
            title: "Facture électronique : amendes relevées, mais aucune sanction avant la fin de 2026",
            body: "Selon la loi de finances 2026, l'émission d'une facture non électronique est sanctionnée de 50 € par facture (15 € auparavant), plafonnée à 15 000 € par année civile ; le défaut de transmission des données de transaction coûte 500 € par transmission (250 € auparavant), avec le même plafond ; l'absence de plateforme est sanctionnée de 500 € après une mise en demeure restée sans effet pendant trois mois, puis 1 000 € après une seconde. Une première infraction réparée spontanément ou dans les 30 jours suivant une première demande de l'administration n'est pas sanctionnée. Au comité de suivi du 8 octobre, le ministre a annoncé qu'aucune sanction ne serait prononcée jusqu'à la fin de 2026, et qu'un guide actualisé serait publié sous deux semaines ; cette tolérance ne reporte pas les dates légales. L'émission devient obligatoire pour les PME, TPE et micro-entreprises le 1er septembre 2027.",
            implication: "L'absence de sanction jusqu'à fin 2026 est une tolérance annoncée par le ministre, pas un report : la réception est obligatoire depuis le 1er septembre, et les montants ci-dessus s'appliqueront ensuite. Un dossier de preuve (plateforme choisie, date, difficultés, corrections) reste le meilleur appui pour un client en difficulté.",
            source: "MoneyVox (loi de finances 2026) ; Legifiscal, 15 octobre ; Village de la Justice, mis à jour le 9 octobre",
            confidence: "direct",
            refs: [6, 7, 5],
            visual: {
              kind: "compare",
              unit: "Amende en euros, avant et après la loi de finances 2026",
              items: [
                { label: "Facture non électronique — avant", value: 15, display: "15 €" },
                { label: "Facture non électronique — après", value: 50, display: "50 €", accent: true },
                { label: "Données non transmises — avant", value: 250, display: "250 €" },
                { label: "Données non transmises — après", value: 500, display: "500 €", accent: true },
              ],
              note: "Les deux amendes sont plafonnées à 15 000 € par an. Aucune sanction ne sera prononcée avant la fin de 2026.",
            },
          },
          {
            title: "Sécurité sociale : les députés rejettent la partie recettes",
            body: "Le 23 octobre, l'Assemblée a rejeté la partie recettes du budget de la Sécurité sociale par 115 voix contre 1. Le vote prévu le 27 octobre ne s'applique donc plus.",
            implication: "Aucune règle nouvelle de cotisations n'est acquise pour vos clients employeurs : le texte poursuit son parcours et son calendrier est à suivre semaine après semaine.",
            source: "NosParlementaires, mis à jour le 24 octobre",
            confidence: "direct",
            refs: [1],
          },
        ],
      },
      {
        name: "Marché",
        breves: [
          {
            title: "Facture électronique : 75 % des assujettis ont désigné une plateforme",
            body: "Au comité de suivi du 8 octobre, présidé par le ministre de l'Action et des Comptes publics, le premier bilan faisait état de 75 % des entreprises assujetties à la TVA ayant désigné une plateforme de réception — un indicateur de désignation, non de bon fonctionnement de la chaîne de facturation —, de plus de 20 millions de factures échangées depuis le 1er septembre et de plus de 70 milliards d'euros de valeur de factures. Environ un quart des assujettis n'a pas encore désigné de plateforme. Au 13 octobre, la liste officielle comptait 155 plateformes, dont 9 en attente de tests d'interopérabilité. Sur 57 offres relevées au 25 octobre, 14 sont gratuites et le prix d'entrée payant médian est de 29 € HT par mois (comparateur rémunéré par commissions d'affiliation).",
            implication: "Le sujet n'est plus de convaincre mais de raccorder les retardataires. Un quart des assujettis n'a pas désigné de plateforme : c'est le travail d'accompagnement le plus immédiat de votre portefeuille.",
            source: "Communiqué du ministère (9 octobre) repris par TPE Actu (10 octobre) et Legifiscal (15 octobre) ; Observatoire, 25 octobre",
            confidence: "direct",
            refs: [8, 7, 9],
            visual: {
              kind: "gauge",
              pct: 75,
              centerLabel: "75 %",
              caption: "Assujettis à la TVA ayant désigné une plateforme de réception",
              note: "Comité de suivi du 8 octobre 2026. L'émission des factures est obligatoire pour les PME le 1er septembre 2027.",
            },
          },
        ],
      },
      {
        name: "Concurrence",
        breves: [
          {
            title: "Numeris, adossé à un fonds, rachète le cabinet de conseil FCS Consulting",
            body: "Le groupe parisien d'expertise comptable Numeris, environ 350 collaborateurs et 42 M€ de chiffre d'affaires, a repris l'intégralité des titres de FCS Consulting, un cabinet de conseil en fusions-acquisitions. Numeris est financé en LBO par Strada Partners. Opération publiée le 13 octobre ; le prix et le chiffre d'affaires de la cible ne sont pas publiés. Cette opération date de la semaine précédente : aucune nouvelle opération équivalente n'a été retenue cette semaine.",
            implication: "Un cabinet capitalisé ajoute à son offre le conseil en cession, qui est une porte d'entrée vers les clients dirigeants. Cela renforce l'intérêt de savoir ce que vous répondez à un dirigeant qui prépare une cession.",
            source: "CFNEWS, 13 octobre (extrait accessible)",
            confidence: "direct",
            refs: [18],
          },
          {
            title: "Audit CPA veut tripler de taille et se tourne vers le capital-investissement",
            body: "Le cabinet parisien, fondé en 2005, attend plus de 80 M€ de chiffre d'affaires cette année et se tourne vers le private equity pour tripler de taille. Une opération de financement est datée du 6 octobre ; le montant de la dette et les financeurs ne sont pas publiés. Article du 8 octobre.",
            implication: "Deux cabinets parisiens annoncent une croissance appuyée sur des capitaux en moins d'une semaine : la consolidation du segment se poursuit.",
            source: "CFNEWS, 8 octobre, mis à jour le 9 octobre (extrait accessible)",
            confidence: "direct",
            refs: [19],
          },
        ],
      },
      {
        name: "Opportunités",
        breves: [
          {
            title: "Le « Pacte Papin » : abattement doublé et droits de mutation à 0,1 % pour la transmission",
            body: "Pour les cessions réalisées entre le 1er janvier 2027 et le 31 décembre 2029, le projet de loi prévoit un abattement fixe du dirigeant porté de 500 000 € à 1 M€, un suramortissement de 30 % pour les PME et de 60 % pour les microentreprises, et des droits de mutation réduits à 0,1 % sur les fonds de commerce et les parts sociales, sous conditions d'ancienneté du salarié repreneur (cinq ans de contrat sur les dix dernières années). En parallèle, un amendement adopté par les députés étend l'abattement de 500 000 € aux associés de sociétés d'exercice libéral partant en retraite, pour les cessions à compter de 2027. Rien n'est définitivement voté : le vote de la première partie est repoussé au 3 novembre.",
            implication: "Une mesure de transmission en discussion crée un motif de conversation avec chaque dirigeant proche d'une cession, même si le texte final peut différer. Elle justifie un point de situation avant la fin de l'année plutôt qu'un conseil ferme.",
            source: "KPMG, 2 octobre ; Legifiscal, 21 octobre",
            confidence: "direct",
            refs: [3, 4],
          },
          {
            title: "Un cabinet australien fait écrire par l'IA des scripts qu'il exécute en local",
            body: "Le cabinet de Townsville dirigé par Trent Yesberg fait écrire des scripts par Claude et ChatGPT, puis les exécute en local, reliés à QuickBooks et Xero. Un script exécuté en local n'entraîne pas d'appel facturé au modèle à chaque traitement ; les coûts d'infrastructure, de maintenance et de contrôle restent à la charge du cabinet. La démarche a donné naissance à Twine Biller, un outil de refacturation des abonnements. Article du 16 octobre.",
            implication: "Une autre façon d'industrialiser un traitement répétitif : écrire une fois, exécuter sans coût par appel. Le coût réel se déplace vers la maintenance et le contrôle du script.",
            source: "CPA Trendlines, 16 octobre, relayé par Le Brief IA du 26 octobre (non revérifié à la source)",
            confidence: "relayed",
            refs: [20],
          },
        ],
      },
      {
        name: "Risques",
        breves: [
          {
            title: "Deux failles critiques de PHP corrigées le 21 octobre",
            body: "Les correctifs des failles CVE-2026-109618 et CVE-2026-109619 (« PHP2Shell »), toutes deux notées 9,2 sur l'échelle CVSS v4.0, ont été publiés le 21 octobre dans les versions 8.5.12, 8.4.27, 8.3.36 et 8.2.35. Elles permettent une exécution de code à distance sans authentification et touchent PHP-FPM, Apache avec mod_php, php-cgi, FrankenPHP et LiteSpeed, mod_php présentant un chemin d'attaque démontré. Il n'existe pas de correctif officiel pour les branches 8.1 et antérieures ; des correctifs minimaux pour compilation manuelle sont disponibles pour les branches 7.4, 8.0 et 8.1. Kaspersky rapporte des premières tentatives d'exploitation avant la publication des correctifs, alors qu'une source du 21 octobre, rédigée avant la sortie, n'en relevait aucune. Une source indique que les chercheurs ont été aidés par l'IA, sans nommer le modèle.",
            implication: "Votre site, votre extranet ou ceux d'un prestataire peuvent tourner sous PHP. Demandez la version en service et la confirmation écrite du correctif : chez un hébergeur, le numéro de version peut rester identique, il faut consulter le journal des modifications du paquet. Kaspersky recommande de vérifier les journaux depuis le 20 octobre.",
            source: "Kaspersky, 21 octobre ; The Hacker News, 21 octobre ; LetsDataScience, 23 octobre",
            confidence: "direct",
            refs: [14, 15, 16],
          },
          {
            title: "Rappel : 80 % des réponses erronées d'une IA sont acceptées par les utilisateurs",
            body: "Les chercheurs de la Wharton School Steven Shaw et Gideon Nave décrivent une « reddition cognitive » : sur 1 372 participants, 80 % des réponses erronées de l'IA ont été acceptées. La date de l'étude n'est pas indiquée ; l'article consulté date du 29 juin 2026 (mis à jour le 15 août) : ce n'est donc pas établi comme une nouveauté de la semaine. Le Brief IA du 26 octobre la cite d'après un article de Business Insider, non consulté.",
            implication: "Une revue qui se contente de valider ce que l'IA propose est exposée à ce biais. Une procédure de revue doit prévoir un contrôle avant la consultation de l'outil, sur les écritures et estimations à enjeu.",
            source: "AI Weekly, 29 juin, mis à jour le 15 août",
            confidence: "direct",
            refs: [17],
          },
        ],
      },
    ],
    agenda: [
      { date: "27 octobre", what: "Reprise de l'examen du budget 2027 à l'Assemblée, jusqu'au 2 novembre", who: "tout le marché" },
      { date: "3 novembre", what: "Vote de la première partie (recettes) du budget 2027", who: "tout le marché" },
      { date: "17 novembre", what: "Vote sur l'ensemble du budget 2027 à l'Assemblée", who: "tout le marché" },
      { date: "17 décembre", what: "Date limite du Parlement ; à défaut, loi spéciale pour continuer à percevoir les impôts", who: "tout le marché" },
      { date: "31 décembre", what: "Fin de la période annoncée sans aucune sanction pour la facturation électronique", who: "tout le marché" },
      { date: "1er septembre 2027", what: "Émission des factures électroniques et e-reporting étendus aux PME, TPE et micro-entreprises", who: "clients PME" },
    ],
    figures: [
      { value: "75 %", what: "des assujettis à la TVA ont désigné une plateforme de réception de factures (indicateur de désignation)", source: "Comité de suivi du 8 octobre ; Legifiscal, 15 octobre ; TPE Actu, 10 octobre" },
      { value: "20 M", what: "de factures électroniques échangées depuis le 1er septembre, pour plus de 70 Md€ de valeur de factures", source: "Communiqué du ministère du 9 octobre, repris par TPE Actu" },
      { value: "15 sur 58", what: "articles de la première partie du budget 2027 examinés à la fin de la séance du 19 octobre", source: "NosParlementaires, mis à jour le 24 octobre" },
      { value: "9,2", what: "note CVSS v4.0 des deux failles critiques de PHP corrigées le 21 octobre", source: "Kaspersky, 21 octobre" },
    ],
  },
]

export const THREADS: TrackedThread[] = [
  {
    title: "Budget 2027 : vote des recettes",
    domain: "Réglementation",
    progress: 40,
    stage: "Confirmé",
    firstSeen: "Semaine 40",
    note: "Projet déposé le 1er octobre. Vote de la première partie reporté du 20 octobre au 3 novembre.",
  },
  {
    title: "Facture électronique : raccordement des clients",
    domain: "Marché",
    progress: 40,
    stage: "Confirmé",
    firstSeen: "Semaine 36",
    note: "75 % des assujettis ont désigné une plateforme. Aucune sanction avant fin 2026 ; émission pour les PME le 1er septembre 2027.",
  },
  {
    title: "Consolidation du segment par les fonds",
    domain: "Concurrence",
    progress: 40,
    stage: "Confirmé",
    firstSeen: "Semaine 41",
    note: "Audit CPA (8 octobre) et Numeris / FCS Consulting (13 octobre). Aucune nouvelle opération retenue en semaine 43.",
  },
  {
    title: "Plateformes d'IA souveraines des professions réglementées",
    domain: "IA",
    progress: 20,
    stage: "Détecté",
    firstSeen: "Semaine 43",
    note: "Avocat+ lancé le 23 octobre. Aucune annonce équivalente côté experts-comptables à ce stade.",
  },
  {
    title: "Transmission : le « Pacte Papin »",
    domain: "Opportunités",
    progress: 20,
    stage: "Détecté",
    firstSeen: "Semaine 40",
    note: "Mesure du projet de loi, non votée. À reprendre après le vote du 3 novembre.",
  },
  {
    title: "Failles PHP corrigées le 21 octobre",
    domain: "Risques",
    progress: 40,
    stage: "Confirmé",
    firstSeen: "Semaine 43",
    note: "Pas de correctif officiel pour PHP 8.1 et antérieur. Version et correctif à confirmer auprès de chaque prestataire.",
  },
]
