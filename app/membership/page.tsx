import { HeroCarousel } from "@/components/hero-carousel";
import { CheckCircle2 } from "lucide-react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
    alt: "Members in assembly",
    caption: "Unity through Membership",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    alt: "Financial literacy",
    caption: "Grow Together, Learn Together",
  },
  {
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
    alt: "Community outreach",
    caption: "Serving the Community with Purpose",
  },
];

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-muted-foreground">
    <CheckCircle2 className="mt-1 text-primary" size={18} />
    <span>{children}</span>
  </li>
);

export default function MembershipPage() {
  return (
    <div className="flex flex-col">
      <HeroCarousel slides={slides} />
      <div className="container mx-auto max-w-7xl py-12">
        <h1 className="my-8 text-4xl font-bold text-center">Membership</h1>

        {/* Qualifications */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Qualification</h2>
          <p className="mb-4 text-muted-foreground">
            Any natural person can be a member of the Bacayan Multipurpose
            Cooperative provided they meet the following:
          </p>
          <ul className="space-y-3">
            <CheckItem>Must be 18 years of age</CheckItem>
            <CheckItem>Must be a Filipino Citizen</CheckItem>
            <CheckItem>
              If living abroad, must be a natural-born Filipino Citizen with a
              residence in the Philippines
            </CheckItem>
            <CheckItem>Must be able to validly enter into a contract</CheckItem>
          </ul>
        </section>

        {/* Online Application */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Online Application</h2>
          <p className="text-muted-foreground">
            BMPC only accepts online applications for membership, which a
            prospective applicant can do through our Online Application system.
            Just click the membership button on the homepage.
          </p>
          <p className="mt-4 text-muted-foreground">
            The application has 4 stages: personal profile entry, selfie
            capture, uploading of supporting documents, and submission of the
            application after watching a short video seminar.
          </p>
        </section>

        {/* Rights and Duties */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Rights of Membership
            </h2>
            <ul className="space-y-3">
              <CheckItem>
                Equal voting rights with other members regardless of capital
                share
              </CheckItem>
              <CheckItem>
                Access to COOP services like loans and savings with tax-free
                interest
              </CheckItem>
              <CheckItem>
                Participation in the COOP’s Health fund (e.g. PAG TINABANGAY)
              </CheckItem>
              <CheckItem>
                Investment in share capital with tax-exempt dividends
              </CheckItem>
              <CheckItem>
                Information on the financial status of the cooperative
              </CheckItem>
              <CheckItem>
                Right to attend all general and special member meetings
              </CheckItem>
              <CheckItem>
                Access to membership policies, rules, and procedures
              </CheckItem>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Duties & Responsibilities
            </h2>
            <ul className="space-y-3">
              <CheckItem>Pay the annual membership dues promptly</CheckItem>
              <CheckItem>
                Settle outstanding obligations with the COOP
              </CheckItem>
              <CheckItem>
                Maintain accurate personal information with BMPC
              </CheckItem>
              <CheckItem>
                Stay informed via BMPC website and announcements
              </CheckItem>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
