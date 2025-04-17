import { EventSlideshow } from "@/components/event-slideshow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, PiggyBank, Users, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
          alt="BMPC Office"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
            Welcome to Bacayan Multi-Purpose Cooperative
          </h1>
          <p className="max-w-[600px] text-white/90 dark:text-white md:text-xl">
            Join our community of members working together for financial growth
            and mutual support
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/membership">Become a Member</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black hover:bg-white/90 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <Users className="h-12 w-12 text-primary" />
              <CardTitle className="mt-4">Membership Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-400">
                Join our cooperative and enjoy exclusive benefits, including
                dividend sharing and voting rights.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <Link href="/membership" className="flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <PiggyBank className="h-12 w-12 text-primary" />
              <CardTitle className="mt-4">Investment Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-400">
                Grow your wealth with our diverse range of investment products
                and competitive returns.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <Link href="/investment" className="flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <Wallet className="h-12 w-12 text-primary" />
              <CardTitle className="mt-4">Loan Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-400">
                Access affordable loans with flexible terms tailored to your
                needs.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <Link href="/loans" className="flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="w-full py-16">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-center text-3xl font-bold sm:text-left">
              Event Gallery
            </h2>
            <Button variant="outline" asChild>
              <Link href="/about/gallery">View All Events</Link>
            </Button>
          </div>
          <EventSlideshow />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Join BMPC?</h2>
          <p className="mx-auto mb-8 max-w-[600px]">
            Take the first step towards financial empowerment by becoming a
            member of our cooperative.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
