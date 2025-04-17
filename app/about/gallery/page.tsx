import { Card } from "@/components/ui/card";
import Image from "next/image";

const events = [
  {
    title: "Annual General Assembly 2023",
    date: "December 2023",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    description:
      "Members gathered for our annual meeting to discuss cooperative achievements and future plans.",
    size: "large",
  },
  {
    title: "Financial Literacy Workshop",
    date: "October 2023",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    description:
      "Educational workshop helping members improve their financial management skills.",
    size: "small",
  },
  {
    title: "Community Outreach Program",
    date: "September 2023",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop",
    description:
      "BMPC members volunteering in local community development initiatives.",
    size: "small",
  },
  {
    title: "25th Anniversary Celebration",
    date: "August 2023",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    description:
      "Celebrating 25 years of service to the community with special events and recognition ceremonies.",
    size: "medium",
  },
  {
    title: "Member Appreciation Day",
    date: "July 2023",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    description:
      "Special event recognizing and celebrating our valued members.",
    size: "medium",
  },
  {
    title: "Leadership Summit",
    date: "June 2023",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    description:
      "Annual gathering of cooperative leaders to discuss strategic initiatives.",
    size: "large",
  },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-4xl font-bold text-center">Event Gallery</h1>

      <div className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground">
          Explore the vibrant life of our cooperative through our event gallery.
          These moments showcase our commitment to member engagement, community
          development, and cooperative values.
        </p>
      </div>

      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (
          <Card
            key={event.title}
            className={`overflow-hidden bg-card text-card-foreground ${
              event.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : event.size === "medium"
                ? "md:col-span-2"
                : ""
            }`}
          >
            <div className="group relative h-full w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                  <p className="mb-2 text-sm text-white/80">{event.date}</p>
                  <p className="text-sm text-white/70">{event.description}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
