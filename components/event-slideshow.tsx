"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    title: "Annual General Assembly 2023",
    date: "December 2023",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    description:
      "Nagsama-sama ang mga miyembro para sa taunang pagpupulong tungkol sa mga tagumpay ng kooperatiba at mga plano sa hinaharap.",
  },
  {
    title: "Financial Literacy Workshop",
    date: "October 2023",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    description:
      "Edukasyonal na workshop para sa pagpapalawak ng kaalaman sa tamang paghawak ng pera.",
  },
  {
    title: "Community Outreach Program",
    date: "September 2023",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop",
    description:
      "Pagsama-sama ng mga BMPC members para tumulong sa mga proyekto para sa komunidad.",
  },
  {
    title: "25th Anniversary Celebration",
    date: "August 2023",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    description:
      "Pagdiriwang ng 25 taon ng serbisyo sa komunidad—may mga espesyal na event at pagkilala sa mga miyembro.",
  },
];

export function EventSlideshow() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mx-auto w-full px-4">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-12"
      >
        {events.map((event) => (
          <SwiperSlide key={event.title}>
            <Link href="/about/gallery">
              <Card className="overflow-hidden transition-transform hover:scale-[1.02] bg-card text-card-foreground">
                <div className="relative aspect-video">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                  <p className="text-sm text-primary">{event.date}</p>
                </CardContent>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
