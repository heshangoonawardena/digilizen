import { useTranslations } from "@/lib/use-translations";
import { ArrowRight, Clipboard, ShieldCheck, Smartphone } from "lucide-react";
import Link from "next/link";
import FeatureCard from "./FeatureCard";
import { Button } from "./ui/button";

const Steps = () => {
  const { t } = useTranslations();

  const steps = [
    {
      number: 1,
      icon: Clipboard,
      title: t("home.howItWorks.steps.register.title"),
      description: t("home.howItWorks.steps.register.description"),
    },
    {
      number: 2,
      icon: ShieldCheck,
      title: t("home.howItWorks.steps.verify.title"),
      description: t("home.howItWorks.steps.verify.description"),
    },
    {
      number: 3,
      icon: Smartphone,
      title: t("home.howItWorks.steps.access.title"),
      description: t("home.howItWorks.steps.access.description"),
    },
  ];

  return (
    <section className="bg-primary/5 relative flex justify-center overflow-hidden py-12">
      <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
      <div className="relative container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t("home.howItWorks.title")}
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("home.howItWorks.description")}
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col max-w-5xl gap-6 py-12 md:justify-normal">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`text-primary mx-auto text-6xl font-bold opacity-20`}
              >
                {`0${step.number}`}
              </div>
              <FeatureCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                className="max-w-sm"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={`/register`}>
            <Button
              size="lg"
              className="from-primary to-primary/80 hover:from-primary/90 hover:to-primary gap-1 bg-gradient-to-r"
            >
              {t("home.howItWorks.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Steps;
