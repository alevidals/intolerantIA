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
] as const

export const LINKS = [
  { name: "Home", href: "/", matches: ["/"] },
  { name: "About", href: "/about", matches: ["/about"] },
  { name: "Scan", href: "/scan", matches: ["/scan", "/scan/result"] },
]
