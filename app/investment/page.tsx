import { HeroCarousel } from "@/components/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { HandCoins, PiggyBank } from "lucide-react";

const slides = [
  {
    src: "/assets/slides/investment/coins-growing.jpg",
    alt: "Coins stacked with plant growing",
    caption: "Nurture Your Investments",
  },
  {
    src: "/assets/slides/investment/jar-coins.jpg",
    alt: "Jar filled with coins labeled 'Investment'",
    caption: "Secure Your Future",
  },
  {
    src: "/assets/slides/investment/hand-coins.jpg",
    alt: "Hand placing coin into stack",
    caption: "Building Wealth Together",
  },
];

export default function InvestmentPage() {
  return (
    <div className="flex flex-col">
      <HeroCarousel slides={slides} />
      <div className="container mx-auto max-w-7xl py-12">
        <h1 className="my-8 text-4xl font-bold text-center">Investment</h1>

        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto text-center">
          {` Investment is a fundamental pillar in the growth of Bacayan
          Multipurpose Cooperative. Members' pooled funds—through Share Capital,
          Time Deposits, and Regular Savings—enable the cooperative to provide
          loans and support community development, while giving back returns in
          the form of dividends and interest.`}
        </p>

        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Through fair and reasonable terms, members can enjoy steady growth on
          their contributions and play a part in building a stronger cooperative
          for all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Share Capital */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <HandCoins className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Share Capital</h2>
              </div>
              <p>
                {` As a member, you can make equity contributions to the
                cooperative's capital fund through Share Capital.`}
              </p>
              <p className="text-muted-foreground">
                The minimum required contribution is <strong>₱2,000.00</strong>,
                and members may increase this up to a maximum of{" "}
                <strong>₱200,000.00</strong> per year of membership.
              </p>
            </CardContent>
          </Card>

          {/* Deposits */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <PiggyBank className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Deposits</h2>
              </div>
              <p>
                Members may place funds with the cooperative for a fixed or
                flexible term, either as Regular Savings or Time Deposits.
              </p>

              <div className="space-y-2">
                <p>
                  <strong>Savings Deposit</strong>
                  <br />
                  Withdrawable anytime with no penalties. Interest is computed
                  quarterly and accrues monthly if not withdrawn during the
                  quarter. Currently earns{" "}
                  <strong>2% interest per annum</strong>.
                </p>
                <p>
                  <strong>Time Deposit</strong>
                  <br />
                  Offers higher interest rates. Placement terms and conditions
                  apply. Please refer to official guidelines.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
