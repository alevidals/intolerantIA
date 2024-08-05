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

export const MAX_FILE_SIZE = 10 * 1024 * 1024

export const MAX_FILES = 4

export const VALID_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg"]

export const LINKS = [
  { name: "Home", code: "home" as const, href: "/", matches: ["/"] },
  {
    name: "About",
    code: "about" as const,
    href: "/about",
    matches: ["/about"],
  },
  {
    name: "Privacy",
    code: "privacy" as const,
    href: "/privacy",
    matches: ["/privacy"],
  },
  {
    name: "Scan",
    code: "scan" as const,
    href: "/scan",
    matches: ["/scan", "/scan/result"],
  },
]
