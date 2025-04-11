import { useTranslations } from '@/lib/use-translations';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    const { t } = useTranslations();

  return (
    <section className="bg-primary text-primary-foreground flex justify-center relative overflow-hidden py-12 md:py-24">
      <div className="bg-grid-pattern absolute inset-0 opacity-10"></div>
      <div className="absolute top-8 left-0 right-0 border-t-2 border-dashed mx-4"></div>
      <div className="relative container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t("home.cta.title")}
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("home.cta.description")}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href={`/register`}>
              <Button size="lg" variant="secondary" className="gap-1 ">
                {t("home.cta.primaryButton")} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href={`/dashboard`}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary"
              >
                {t("home.cta.secondaryButton")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 border-t-2 border-dashed mx-4"></div>
    </section>
  );
}

export default CallToAction;