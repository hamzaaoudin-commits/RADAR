import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, type LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Mentions légales · RADAR",
  description:
    "Éditeur, hébergement, propriété intellectuelle et informations légales du site RADAR.",
}

const REVISION = "21 août 2026"

const SECTIONS: LegalSection[] = [
  {
    title: "Éditeur du site",
    body: (
      <>
        <p>Le présent site est édité par :</p>
        <p>
          <strong>Hamza El Jaouahiry</strong>
          <br />
          Entrepreneur individuel (micro-entreprise), exerçant sous le nom
          commercial <strong>RADAR</strong>
          <br />
          8 place Eugène Thomas
          <br />
          93160 Noisy-le-Grand
          <br />
          France
        </p>
        <p>
          <strong>SIREN</strong> : 105 253 314
          <br />
          <strong>SIRET</strong> : 105 253 314 00014
          <br />
          <strong>Code APE</strong> : 7022Z — Conseil pour les affaires et autres
          conseils de gestion
          <br />
          <strong>TVA</strong> : non applicable, article 293 B du Code général des
          impôts
        </p>
        <p>
          <strong>Email</strong> : contact@radar-intelligence.fr
        </p>
      </>
    ),
  },
  {
    title: "Directeur de la publication",
    body: <p>Hamza El Jaouahiry, en qualité d&apos;entrepreneur individuel.</p>,
  },
  {
    title: "Hébergement",
    body: (
      <>
        <p>Le site est hébergé par :</p>
        <p>
          <strong>Vercel Inc.</strong>
          <br />
          440 N Barranca Avenue #4133
          <br />
          Covina, CA 91723
          <br />
          États-Unis
          <br />
          Site :{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand"
          >
            vercel.com
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Nature du service",
    body: (
      <>
        <p>
          RADAR est un service d&apos;information et de veille stratégique par
          abonnement. Il produit chaque semaine, pour un marché donné, une
          synthèse des changements susceptibles d&apos;affecter les entreprises
          qui y opèrent.
        </p>
        <p>
          RADAR n&apos;est ni un cabinet d&apos;avocats, ni un cabinet
          d&apos;expertise comptable, ni un conseiller en investissements
          financiers, ni un organisme de formation. Les analyses diffusées
          signalent des échéances et des expositions ; elles ne constituent en
          aucun cas un conseil juridique, fiscal, comptable, médical ou financier
          personnalisé. Toute décision relevant de ces domaines doit être
          validée par un professionnel compétent.
        </p>
      </>
    ),
  },
  {
    title: "Propriété intellectuelle",
    body: (
      <>
        <p>
          L&apos;ensemble du site — textes, images, graphismes, logo, structure,
          code source et identité visuelle — ainsi que les briefs, alertes,
          rapports et fiches de marché produits par le service, sont la propriété
          exclusive de Hamza El Jaouahiry (RADAR), sauf mention contraire
          explicite.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication ou
          adaptation de tout ou partie de ces éléments, par quelque procédé que
          ce soit, sans autorisation écrite préalable, est strictement interdite
          et constituerait une contrefaçon sanctionnée par les articles L.335-2
          et suivants du Code de la propriété intellectuelle.
        </p>
        <p>
          Les faits, données publiques, textes réglementaires et communiqués
          cités en source dans les briefs demeurent la propriété de leurs
          émetteurs respectifs.
        </p>
      </>
    ),
  },
  {
    title: "Crédits",
    body: (
      <>
        <p>Conception, rédaction et direction artistique : Hamza El Jaouahiry — RADAR.</p>
        <p>
          Polices : Playfair Display et DM Sans (Google Fonts, licence Open Font
          License).
        </p>
      </>
    ),
  },
  {
    title: "Données personnelles",
    body: (
      <>
        <p>
          Les données personnelles collectées via ce site (création de compte,
          abonnement, paiement, envoi des briefs par courriel) sont traitées
          conformément au Règlement Général sur la Protection des Données (RGPD)
          et à la loi française Informatique et Libertés.
        </p>
        <p>
          Pour en savoir plus, consultez notre{" "}
          <Link href="/confidentialite" className="text-brand">
            politique de confidentialité
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "Cookies",
    body: (
      <p>
        Ce site utilise un nombre minimal de cookies techniques nécessaires à son
        fonctionnement, notamment pour maintenir la session d&apos;un abonné.
        Aucun cookie publicitaire ou de traçage marketing tiers n&apos;est déposé
        sans le consentement préalable de l&apos;utilisateur.
      </p>
    ),
  },
  {
    title: "Loi applicable et juridiction",
    body: (
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas
        de litige, et après tentative de résolution amiable, les tribunaux
        français de Paris seront seuls compétents.
      </p>
    ),
  },
]

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions"
      titleAccent="légales"
      lead="Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique."
      revision={REVISION}
      sections={SECTIONS}
      current="mentions-legales"
    />
  )
}
