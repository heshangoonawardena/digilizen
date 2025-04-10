import { useTranslations } from "@/lib/use-translations";
import { BellRing, CreditCard, QrCode, Smartphone } from "lucide-react";
import FeatureCard from "./FeatureCard";

const KeyFeatures = () => {
  const { t } = useTranslations();

  const features = [
    {
      icon: Smartphone,
      title: t("home.features.cards.accessibility.title"),
      description: t("home.features.cards.accessibility.description"),
    },
    {
      icon: QrCode,
      title: t("home.features.cards.convenience.title"),
      description: t("home.features.cards.convenience.description"),
    },
    {
      icon: CreditCard,
      title: t("home.features.cards.fine.title"),
      description: t("home.features.cards.fine.description"),
    },
    {
      icon: BellRing,
      title: t("home.features.cards.notification.title"),
      description: t("home.features.cards.notification.description"),
    },
  ];

  return (
    <section className="from-primary/5 via-primary/10 to-background relative flex items-center justify-center overflow-hidden bg-gradient-to-t py-12 md:py-24">
      <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
      <div className="relative container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="bg-primary/10 text-primary inline-block rounded-lg px-3 py-1 text-sm">
              {t("home.features.badge")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("home.features.title")}
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("home.features.description")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
