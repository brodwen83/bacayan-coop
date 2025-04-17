import { HeroCarousel } from "@/components/hero-carousel";
import { LoanCalculator } from "@/components/loan-calculator";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";

const slides = [
  {
    src: "/assets/slides/loans/loan-application.jpg",
    alt: "Loan application",
    caption: "Flexible Loan Options for Members",
  },
  {
    src: "/assets/slides/loans/ph-money.jpg",
    alt: "Person holding money",
    caption: "Empowering Your Financial Goals",
  },
  {
    src: "/assets/slides/loans/contract-signed.jpg",
    alt: "Signing a contract",
    caption: "Easy & Secure Loan Processing",
  },
];

const loanPrograms = [
  {
    title: "Regular Loan",
    description:
      "For long-term financial needs such as business capital, home renovation, or major purchases. Low interest and flexible terms.",
  },
  {
    title: "Emergency Loan",
    description:
      "Quick access to funds for medical emergencies, calamities, or other urgent needs. Fast approval and release.",
  },
  {
    title: "Educational Loan",
    description:
      "Support for tuition, school supplies, and other educational expenses. Invest in your family's future.",
  },
  {
    title: "Salary Loan",
    description:
      "Ideal for short-term personal needs, repayable through salary deductions. Hassle-free and convenient.",
  },
];

export default function LoanPage() {
  return (
    <div className="flex flex-col">
      <HeroCarousel slides={slides} />

      <section className="container mx-auto max-w-7xl py-12">
        <SectionTitle
          title="Loan Programs"
          subtitle="Helping You Move Forward"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {loanPrograms.map((loan) => (
            <Card key={loan.title} className="h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{loan.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {loan.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            title="Loan Calculator"
            subtitle="Estimate Your Monthly Payments"
          />
          <div className="mt-8">
            <LoanCalculator />
          </div>
        </div>
      </section>
    </div>
  );
}
