import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="container mx-auto max-w-7xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Our History</h1>
      <div className="grid gap-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"
              alt="BMPC Early Days"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              The Beginning (1995)
            </h2>
            <p className="text-muted-foreground">
              BMPC was founded by a group of visionary residents in Bacayan who
              recognized the need for a community-based financial institution.
              Starting with just 50 members and a small office, we began our
              journey to empower the local community through financial
              cooperation.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="BMPC Growth"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Growth & Expansion (2005-2015)
            </h2>
            <p className="text-muted-foreground">
              The decade saw tremendous growth as we expanded our services and
              membership base. We introduced new financial products, modernized
              our systems, and established multiple branches to better serve our
              growing community.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
              alt="BMPC Today"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">BMPC Today</h2>
            <p className="text-muted-foreground">
              Today, BMPC stands as one of the leading cooperatives in the
              region, serving thousands of members with a comprehensive range of
              financial services. Our commitment to community development and
              financial inclusion remains as strong as ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
