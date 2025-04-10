import { useTranslations } from "@/lib/use-translations";
import { BellRing, CreditCard, QrCode, Smartphone } from "lucide-react";

const KeyFeatures = () => {
  const { t } = useTranslations();

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
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="border-primary/10 bg-primary/5 hover:bg-primary/10 flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="bg-primary/10 rounded-full p-3">
              <Smartphone className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-center text-xl font-bold">
              {t("home.features.cards.accessibility.title")}
            </h3>
            <p className="text-muted-foreground text-center">
              {t("home.features.cards.accessibility.description")}
            </p>
          </div>
          <div className="border-primary/10 bg-primary/5 hover:bg-primary/10 flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="bg-primary/10 rounded-full p-3">
              <QrCode className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-center text-xl font-bold">
              {t("home.features.cards.convenience.title")}
            </h3>
            <p className="text-muted-foreground text-center">
              {t("home.features.cards.convenience.description")}
            </p>
          </div>
          <div className="border-primary/10 bg-primary/5 hover:bg-primary/10 flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="bg-primary/10 rounded-full p-3">
              <CreditCard className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-center text-xl font-bold">
              {t("home.features.cards.fine.title")}
            </h3>
            <p className="text-muted-foreground text-center">
              {t("home.features.cards.fine.description")}
            </p>
          </div>
          <div className="border-primary/10 bg-primary/5 hover:bg-primary/10 flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="bg-primary/10 rounded-full p-3">
              <BellRing className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-center text-xl font-bold">
              {t("home.features.cards.notification.title")}
            </h3>
            <p className="text-muted-foreground text-center">
              {t("home.features.cards.notification.description")}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="from-primary/10 via-primary/5 to-primary/10 absolute right-0 -bottom-6 left-0 h-24 -skew-y-3 transform bg-gradient-to-r"></div> */}
    </section>
  );
};

export default KeyFeatures;
