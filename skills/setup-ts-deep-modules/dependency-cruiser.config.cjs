// @ts-check
// Application des modules profonds avec dependency-cruiser.
//
// Chaque package situé sous la racine des packages est un MODULE PROFOND : de
// nombreux comportements derrière une petite interface. La SURFACE PUBLIQUE
// d’un package correspond à ses POINTS D’ENTRÉE, c’est-à-dire les fichiers à
// la racine du package. L’implémentation se trouve dans des SOUS-DOSSIERS et
// reste privée — par convention `lib/` pour l’implémentation et `tests/` pour
// les tests, bien que tout sous-dossier soit privé. Un package peut exposer
// plusieurs petits points d’entrée (index.ts, client.ts, server.ts, etc.) :
// préférez cette approche à un unique fichier d’index central gigantesque.
//
// PACKAGES_ROOT est la seule valeur que vous devriez avoir à modifier ici.

/** Emplacement des packages. Un sous-dossier direct par package, sans imbrication. */
const PACKAGES_ROOT = "src/packages";

// --- motifs dérivés (aucune modification nécessaire) ------------------------
const R = PACKAGES_ROOT;
/**
 * Éléments internes privés d’un package : tout ce qui est imbriqué dans un de
 * ses sous-dossiers. Les fichiers à la racine du package sont ses points
 * d’entrée et ne correspondent PAS à ce motif : ils restent importables depuis
 * l’extérieur.
 */
const PACKAGE_INTERNALS = `^${R}/[^/]+/[^/]+/`;

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "entrypoint-boundary-from-app",
      comment:
        "Le code de l’application ou de la racine peut importer les points d’entrée d’un package (ses fichiers racine), mais rien dans ses sous-dossiers.",
      severity: "error",
      from: { pathNot: `^${R}/` }, // le fichier importateur ne se trouve dans AUCUN package
      to: { path: PACKAGE_INTERNALS },
    },
    {
      name: "entrypoint-boundary-across-packages",
      comment:
        "Les fichiers d’un même package peuvent s’importer librement, mais ils ne peuvent atteindre les AUTRES packages que par leurs points d’entrée, jamais par leurs éléments internes.",
      severity: "error",
      // le fichier importateur se trouve dans un package ($1), sans être un fichier de test
      from: { path: `^${R}/([^/]+)/`, pathNot: `^${R}/[^/]+/tests/` },
      to: {
        path: PACKAGE_INTERNALS,
        pathNot: `^${R}/$1/`, // même package → liberté au sein du package
      },
    },
    {
      name: "tests-through-entrypoints",
      comment:
        "Les tests d’un package l’utilisent par ses points d’entrée comme n’importe quel autre code : ils peuvent importer les points d’entrée de tout package et leurs propres fixtures dans tests/, mais jamais les éléments internes d’un package, pas même les leurs.",
      severity: "error",
      from: { path: `^${R}/([^/]+)/tests/` }, // un fichier de test dans le package $1
      to: {
        path: PACKAGE_INTERNALS,
        pathNot: `^${R}/$1/tests/`, // ses propres fixtures tests/ → autorisées
      },
    },
    {
      name: "tests-folder-is-private",
      comment:
        "Le dossier tests/ d’un package n’est accessible que depuis les tests : aucun autre code ne peut importer ses fixtures.",
      severity: "error",
      from: { pathNot: `^${R}/[^/]+/tests/` }, // le fichier importateur n’est pas lui-même un test
      to: { path: `^${R}/[^/]+/tests/` },
    },
    {
      name: "no-circular",
      comment: "Aucun cycle de dépendances. Limitez la portée à `^${R}/` pour autoriser les cycles en dehors des packages.",
      severity: "error",
      from: {},
      to: { circular: true },
    },

    // --- Mise en couches (facultative, désactivée par défaut) ------------------
    // Le masquage de l’interface détermine COMMENT importer, par les points
    // d’entrée. La mise en couches détermine QUELS packages peuvent dépendre
    // les uns des autres. Ajoutez ici vos propres règles, par exemple :
    //
    // {
    //   name: "ui-may-not-depend-on-billing",
    //   severity: "error",
    //   from: { path: `^${R}/ui/` },
    //   to:   { path: `^${R}/billing/` },
    // },
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    tsConfig: { fileName: "tsconfig.json" },
    enhancedResolveOptions: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
  },
};
