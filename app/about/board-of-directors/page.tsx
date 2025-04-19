import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const directors = [
  {
    name: "Cyril Manatad",
    position: "Chairperson",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",

    bio: "With over 20 years of experience in cooperative management, Sir Cy leads BMPC's strategic direction and governance.",
  },
  {
    name: "Roel ",
    position: "Vice Chairperson",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",
    bio: "Roel brings extensive financial expertise and has been instrumental in BMPC's growth over the past decade.",
  },
  {
    name: "Ross",
    position: "Secretary",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Ross oversees BMPC's administrative functions and ensures compliance with regulatory requirements.",
  },
  {
    name: "Ravy",
    position: "Treasurer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    bio: "Ravy manages BMPC's financial operations and investment strategies with precision and foresight.",
  },
];

export default function BoardOfDirectorsPage() {
  return (
    <div className="container mx-auto max-w-7xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Board of Directors</h1>

      <div className="mb-12">
        <p className="text-muted-foreground">
          {` Our Board of Directors brings together experienced professionals
          committed to BMPC's mission of financial empowerment and community
          development. Each member contributes unique expertise to guide our
          cooperative's growth and success.`}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {directors.map((director) => (
          <Card key={director.name}>
            <div className="flex flex-col md:flex-row">
              <div className="relative aspect-square w-full md:w-48">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="rounded-t-lg object-cover md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <CardTitle>{director.name}</CardTitle>
                  <p className="text-sm text-primary">{director.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {director.bio}
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-semibold">Committees</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Audit Committee",
              description:
                "Oversees financial reporting, internal controls, and compliance",
            },
            {
              name: "Credit Committee",
              description:
                "Reviews and approves loan applications, sets lending policies",
            },
            {
              name: "Education Committee",
              description: "Develops and implements member education programs",
            },
          ].map((committee) => (
            <Card key={committee.name}>
              <CardHeader>
                <CardTitle className="text-lg">{committee.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {committee.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
