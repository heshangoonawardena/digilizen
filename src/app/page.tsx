"use client";
import KeyFeatures from "@/components/key-features";
import Navbar from "@/components/navbar";
import Steps from "@/components/how-it-works";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/use-translations";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const { t } = useTranslations();

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="from-primary/5 via-primary/10 to-background relative overflow-hidden bg-gradient-to-l pt-24 pb-12">
        <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
        <div className="relative container flex justify-center px-4 md:px-20">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {t("home.hero.title")}
                </h1>
                <p className="text-muted-foreground max-w-[600px] md:text-xl">
                  {t("home.hero.description")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={`/register`}>
                  <Button
                    size="lg"
                    className="from-primary to-primary/80 hover:from-primary/90 hover:to-primary gap-1 bg-gradient-to-r"
                  >
                    {t("home.hero.primaryButton")}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/learn-more`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/5"
                  >
                    {t("home.hero.secondaryButton")}
                  </Button>
                </Link>
              </div>
            </div>
            <Image src="/image.png" alt="Hero image" width={800} height={800} />
          </div>
        </div>

        {/* Animated background elements */}
        <div className="from-primary/10 via-primary/5 to-primary/10 absolute right-0 -bottom-6 left-0 h-24 -skew-y-3 transform bg-gradient-to-r"></div>
      </section>
      <KeyFeatures />
      <Steps />
    </main>
  );
}
