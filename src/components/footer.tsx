"use client";

import { useTranslations } from "@/lib/use-translations";
import { Facebook, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslations();

  return (
    <footer className="bg-primary/5 flex justify-center border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div>
                <span className="text-primary text-2xl font-bold">
                  Digilizen
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Official government portal for converting physical licenses into
              secure digital credentials.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t("footer.press")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">{t("footer.resources")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/help"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t("footer.help")}
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t("footer.documentation")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">{t("footer.legal")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t("footer.cookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-muted-foreground mt-12 border-t pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sri Lanka Police Department.{" "}
            {t("footer.copyright")}
          </p>
          <p className="mt-2">Official Government Website of Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
