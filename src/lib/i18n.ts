export type SupportedLocale = "en" | "sr" | "bn";

export const defaultLocale: SupportedLocale = "en";

export const localeMetadata: Record<
  SupportedLocale,
  { name: string; nativeName: string; dir: "ltr" }
> = {
  en: { name: "English", nativeName: "English", dir: "ltr" },
  sr: { name: "Serbian", nativeName: "Srpski", dir: "ltr" },
  bn: { name: "Bangla", nativeName: "বাংলা", dir: "ltr" },
};

/**
 * Translation-ready dictionary structure.
 * Initial site language is English; Serbian (sr) and Bangla (bn) dictionaries
 * can be populated here or loaded from CMS/JSON files without refactoring pages.
 */
export interface TranslationDictionary {
  common: {
    bookConsultation: string;
    exploreServices: string;
    contactUs: string;
  };
}

export const dictionaries: Record<SupportedLocale, Partial<TranslationDictionary>> =
  {
    en: {
      common: {
        bookConsultation: "Book a Consultation",
        exploreServices: "Explore Our Services",
        contactUs: "Contact Mentora",
      },
    },
    sr: {},
    bn: {},
  };
