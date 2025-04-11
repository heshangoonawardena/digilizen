"use client";
import { useTranslations } from "@/lib/use-translations";
import { cn } from "@/lib/utils";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { ChevronDown, Menu, Search, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./language-switcher";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { t } = useTranslations();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full px-4 transition-all duration-300 md:px-20",
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md dark:bg-gray-950/90"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <div className="bg-primary absolute inset-0 rounded-full opacity-30 blur-sm"></div>
                <Shield className="text-primary relative z-10 h-8 w-8" />
              </div>
              <div className="text-primary text-2xl leading-tight font-bold">
                Digilizen
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isSignedIn && (
            <nav className="hidden items-center space-x-1 md:flex">
              {[
                { href: "/", label: t("navigation.home") },
                { href: "/about", label: t("navigation.about") },
                { href: "/features", label: t("navigation.features") },
                { href: "/contact", label: t("navigation.contact") },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-primary/5 text-foreground/80 hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    "hover:bg-primary/5 text-foreground/80 hover:text-primary",
                  )}
                >
                  Portal Access <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/login" className="w-full">
                      User Portal
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/admin" className="w-full">
                      Admin Portal
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          )}

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            {isSignedIn ? (
              <UserButton />
            ) : (
              <div className="hidden items-center gap-2 md:flex">
                <SignInButton mode="modal">
                  {t("navigation.login")}
                </SignInButton>
                <Button
                  asChild
                  size="sm"
                  className="from-primary to-primary/80 hover:from-primary/90 hover:to-primary bg-gradient-to-r"
                >
                  <Link href="/register">{t("navigation.register")}</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="border-primary/20 w-[300px] border-l sm:w-[400px]"
              >
                <div className="flex h-full flex-col">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-2 py-4">
                    <Shield className="text-primary h-6 w-6" />
                    <span className="text-primary font-bold">Digilizen</span>
                  </div>

                  {/* Mobile Search */}
                  <div className="relative mb-6">
                    <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <input
                      type="search"
                      placeholder="Search..."
                      className="bg-muted/50 focus:ring-primary/30 w-full rounded-full border-none py-2 pr-4 pl-10 text-sm focus:ring-1 focus:outline-none"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  {!isSignedIn && (
                    <>
                      <nav className="flex flex-col gap-1">
                        {[
                          { href: "/", label: t("navigation.home") },
                          { href: "/about", label: t("navigation.about") },
                          {
                            href: "/features",
                            label: t("navigation.features"),
                          },
                          { href: "/contact", label: t("navigation.contact") },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "rounded-lg px-4 py-2 text-base font-medium transition-colors",
                              pathname === item.href
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-primary/5 text-foreground/80 hover:text-primary",
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </nav>
                      <div className="border-primary/10 mt-4 border-t py-4">
                        <p className="mb-2 px-4 text-sm font-medium">
                          Portal Access
                        </p>
                        <div className="flex flex-col gap-1">
                          <Link
                            href="/login"
                            className="hover:bg-primary/5 text-foreground/80 hover:text-primary rounded-lg px-4 py-2 text-base font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            User Portal
                          </Link>
                          <Link
                            href="/admin"
                            className="hover:bg-primary/5 text-foreground/80 hover:text-primary rounded-lg px-4 py-2 text-base font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Admin Portal
                          </Link>
                        </div>
                      </div>{" "}
                    </>
                  )}

                  {/* Mobile Actions */}
                  <div className="border-primary/10 mt-auto border-t py-4">
                    <div className="flex flex-col gap-2 px-4">
                      {isSignedIn ? (
                        <SignOutButton>
                          <Button variant="default">
                            {t("dashboard.navigation.logout")}
                          </Button>
                        </SignOutButton>
                      ) : (
                        <>
                          <Button
                            variant="outline"
                            className="w-full rounded-full"
                          >
                            <SignInButton mode="modal">
                              {t("navigation.login")}
                            </SignInButton>
                          </Button>
                          <Link
                            href="/register"
                            onClick={() => setIsOpen(false)}
                          >
                            <Button className="from-primary to-primary/80 hover:from-primary/90 hover:to-primary w-full rounded-full bg-gradient-to-r">
                              {t("navigation.register")}
                            </Button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
