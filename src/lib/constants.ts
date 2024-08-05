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
  { name: "Home", href: "/", matches: ["/"] },
  { name: "About", href: "/about", matches: ["/about"] },
  { name: "Privacy", href: "/privacy", matches: ["/privacy"] },
  { name: "Scan", href: "/scan", matches: ["/scan", "/scan/result"] },
]
