import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Star, Trophy } from "lucide-react"

export default function AwardsPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">Awards & Distinctions</h1>
      
      <div className="mb-12">
        <p className="text-muted-foreground">
          BMPC has been recognized for its excellence in cooperative management, member service, and community impact. These awards reflect our commitment to our mission and values.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Recent Awards</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Trophy className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Best Cooperative of the Year</CardTitle>
              <p className="text-sm text-muted-foreground">2023</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Awarded by the Cooperative Development Authority for excellence in financial management and member service.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Star className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Community Impact Award</CardTitle>
              <p className="text-sm text-muted-foreground">2022</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Recognized for outstanding contributions to community development and financial literacy programs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Innovation Excellence</CardTitle>
              <p className="text-sm text-muted-foreground">2022</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Honored for implementing innovative digital solutions to enhance member services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>ISO 9001:2015</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Certified for quality management systems, ensuring consistent delivery of services that meet member and regulatory requirements.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>5-Star Cooperative Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Highest rating awarded by the Cooperative Development Authority for financial stability and operational excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-semibold">Recognition Timeline</h2>
        <div className="space-y-6">
          {[
            {
              year: "2023",
              awards: [
                "Best Cooperative of the Year",
                "Excellence in Digital Transformation",
              ],
            },
            {
              year: "2022",
              awards: [
                "Community Impact Award",
                "Innovation Excellence Award",
              ],
            },
            {
              year: "2021",
              awards: [
                "Outstanding Financial Performance",
                "Member Service Excellence",
              ],
            },
          ].map((year) => (
            <Card key={year.year}>
              <CardHeader>
                <CardTitle>{year.year}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  {year.awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}