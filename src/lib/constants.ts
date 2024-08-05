export const INTOLERANCES_AND_ALLERGIES = [
  "gluten",
  "crustaceans",
  "eggs",
  "fish",
  "peanuts",
  "soy",
  "dairy",
  "treeNuts",
  "celery",
  "mustard",
  "sesameSeeds",
  "mollusks",
  "lupins",
  "lactose",
  "cowProtein",
] as const

export const LOCALE_COOKIE = "Next-Locale"

export const MAX_FILE_SIZE = 10 * 1024 * 1024

export const MAX_FILES = 4

export const VALID_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg"]

export const locales = ["/es", "/en"]

export const LINKS = [
  { name: "Home", code: "home" as const, href: "/", matches: locales },
  {
    name: "About",
    code: "about" as const,
    href: "/about",
    matches: locales.map((locale) => `${locale}/about`),
  },
  {
    name: "Privacy",
    code: "privacy" as const,
    href: "/privacy",
    matches: locales.map((locale) => `${locale}/privacy`),
  },
  {
    name: "Scan",
    code: "scan" as const,
    href: "/scan",
    matches: locales.map((locale) => `${locale}/scan`),
  },
]
