"use client"
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "@/lib/use-translations";
import { RegistrationForm } from "@/components/registerForm";

export default function Register() {
  const {t} = useTranslations()

  return (
    <div className="flex min-h-screen flex-col items-center">

      <div className="container max-w-4xl flex-1 px-4 py-12 md:py-24">
        <div className="mb-8">
          <Link
            href={`/`}
            className="text-muted-foreground hover:text-primary inline-flex items-center text-sm font-medium"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            {t("register.backHome")}
          </Link>
        </div>

        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("register.title")}
          </h1>
          <p className="text-muted-foreground">{t("register.description")}</p>
        </div>
        <RegistrationForm/>

      </div>

    </div>
  );
}
