"use client";

import { useEffect, useState } from "react";
import { useLanguageStore } from "@/stores/language-store";
import enTranslations from "@/lib/dictionaries/en.json";
import siTranslations from "@/lib/dictionaries/si.json";

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKey = NestedKeyOf<typeof enTranslations>;

const translations = {
  en: enTranslations,
  si: siTranslations,
};

export const useTranslations = () => {
  const { language } = useLanguageStore();
  const [t, setT] = useState(translations[language]);

  useEffect(() => {
    setT(translations[language]);
  }, [language]);

  const translate = (key: TranslationKey): string => {
    const keys = key.split(".");
    let result: unknown = t;

    for (const k of keys) {
      if (typeof result === "object" && result !== null && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key; // Return the key if translation not found
      }
    }

    return typeof result === "string" ? result : key; // Ensure the result is a string
  };

  return { t: translate, language };
};
