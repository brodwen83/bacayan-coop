import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Heart, Target, Users2 } from "lucide-react";

export default function CompanyProfilePage() {
  return (
    <div className="container mx-auto max-w-7xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Company Profile</h1>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">About BMPC</h2>
        <p className="text-muted-foreground">
          Bacayan Multi-Purpose Cooperative (BMPC) is a member-owned financial
          institution dedicated to providing accessible financial services and
          promoting economic development in our community. With over 25 years of
          service, we have grown to become a trusted partner in our members'
          financial journey.
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Target className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To provide innovative financial solutions that empower our members
              and contribute to the sustainable development of our community.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Heart className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be the leading cooperative in fostering financial inclusion and
              community prosperity through excellence in service and member
              engagement.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Key Statistics</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Users2 className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">10,000+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Active Members</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Building className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">5</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Branch Locations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">25+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Years of Service</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold">Core Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Integrity",
              description:
                "We conduct our business with honesty and transparency",
            },
            {
              title: "Excellence",
              description:
                "We strive for the highest standards in all our services",
            },
            {
              title: "Community",
              description:
                "We prioritize the welfare of our community in all decisions",
            },
            {
              title: "Innovation",
              description:
                "We embrace change and continuously improve our services",
            },
          ].map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
