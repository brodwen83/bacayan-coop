import { SectionTitle } from "@/components/section-title";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl p-8 space-y-12 py-12">
      <SectionTitle
        title="About Bacayan Multipurpose Cooperative"
        subtitle="Rooted in community. Growing together."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-muted-foreground mb-4">
            The Bacayan Multipurpose Cooperative (BMPC) is a community-based
            cooperative founded with the mission of empowering individuals and
            families through financial inclusion, cooperative education, and
            shared growth.
          </p>
          <p className="text-muted-foreground">
            Since our establishment, we’ve remained committed to providing
            high-quality services that improve the financial well-being and
            livelihood of our members while upholding the principles of
            cooperation, transparency, and sustainability.
          </p>
        </div>
        <div className="relative w-full aspect-video min-h-[200px] rounded-xl overflow-hidden">
          <Image
            src="/assets/about.jpg"
            alt="About BMPC"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg bg-muted">
          <h3 className="font-bold text-xl mb-2">Our Vision</h3>
          <p className="text-muted-foreground">
            A strong, self-reliant cooperative committed to improving the
            quality of life of its members and the community.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-muted">
          <h3 className="font-bold text-xl mb-2">Our Mission</h3>
          <p className="text-muted-foreground">
            To provide sustainable financial and social services to members by
            promoting cooperative values and principles.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-muted">
          <h3 className="font-bold text-xl mb-2">Core Values</h3>
          <p className="text-muted-foreground">
            Integrity, Commitment, Service, Empowerment, and Sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}
