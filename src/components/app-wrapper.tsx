"use client";

import { type ReactNode, useEffect } from "react";
import { useSettingsStore } from "@/stores/settings-store";

interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const { language } = useSettingsStore();

  // Update the html lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
