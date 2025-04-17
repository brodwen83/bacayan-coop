"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Building2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const aboutRoutes = [
  { label: "History", href: "/about/history" },
  { label: "Company Profile", href: "/about/company-profile" },
  { label: "Financial Report", href: "/about/financial-report" },
  { label: "Board of Directors", href: "/about/board-of-directors" },
  { label: "Awards & Distinctions", href: "/about/awards" },
  { label: "Event Gallery", href: "/about/gallery" },
];

const routes = [
  { label: "Home", href: "/" },
  { label: "Membership", href: "/membership" },
  { label: "Investment", href: "/investment" },
  { label: "Loans", href: "/loans" },
  { label: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold text-foreground">BMPC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-full ml-8">
          <div className="flex space-x-4">
            {routes.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary">
                <span>About Us</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {aboutRoutes.map(({ label, href }) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link href={href}>{label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4">
                {routes.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    About Us
                  </p>
                  {aboutRoutes.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block pl-4 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <hr className="my-2" />
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    Register
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
