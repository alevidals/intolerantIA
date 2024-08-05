import type {
  aiSettingsSchema,
  scanResponseSchema,
  scanSchema,
} from "@/lib/schemas"
import type { z } from "zod"

export type UserInfo = Omit<
  z.infer<typeof scanSchema>,
  "model" | "apiKey" | "files"
>
export type ScanForm = z.infer<typeof scanSchema>
export type ScanResponse = z.infer<typeof scanResponseSchema>
export type AiSettings = z.infer<typeof aiSettingsSchema>

export type TranslationKeys = {
  home: string
  about: string
  privacy: string
  scan: string
  welcomeTo: string
  thePlaceTo: string
  howItWorks: string
  howItWorks1: string
  howItWorks2: string
  howItWorks3: string
  whyUseIntolerantIA: string
  whyUseIntolerantIAResponse: string
  builtBy: string
  sourceCode: string
  introducingIntolerantIA: string
  about1: string
  about2: string
  about3: string
  about4: string
  about5: string
  privacyPolicy: string
  weTakePrivacy: string
  tableOfContents: string
  privacyHeader: string
  privacy1: string
  privacy1Text: string
  privacy2: string
  privacy2Text: string
  privacy3: string
  privacy3Text: string
  privacy4: string
  privacy4Text: string
  fillTheForm: string
  uploadGoodImages: string
  allergies: string
  intolerances: string
  gluten: string
  crustaceans: string
  eggs: string
  fish: string
  peanuts: string
  soy: string
  dairy: string
  treeNuts: string
  celery: string
  mustard: string
  sesameSeeds: string
  mollusks: string
  lupins: string
  lactose: string
  cowProtein: string
  clickToUploadImages: string
  imagesRequirements: string
  submit: string
  thanksForScanning: string
  alertTitle: string
  alertDescription: string
  noDataYet: string
  here: string
  foodThatCanBeEaten: string
  foodThatCannotBeEaten: string
  foodThatShouldBeAsked: string
  scanAgain: string
  information: string
  settingsInformation: string
  iaSettings: string
  setHereApiAndModel: string
  apiKey: string
  model: string
  apiKeyRequired: string
  light: string
  dark: string
  system: string
  toggleTheme: string
  maxFiles: string
  invalidFormat: string
  maxFileSize: string
  oneIntoleranceOrAllergyRequired: string
  oneImageIsRequired: string
  modelRequired: string
  unexpectedError: string
  invalidImages: string
  save: string
  settingsSavedSuccessfully: string
  english: string
  spanish: string
  localeSwitcher: string
  siteDescription: string
}

export type TranslationKey = keyof TranslationKeys
