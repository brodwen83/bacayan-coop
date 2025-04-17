import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, Wallet, Users } from "lucide-react"

export default function FinancialReportPage() {
  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Financial Report</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Full Report
        </Button>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader>
            <TrendingUp className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">₱50M</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Total Assets</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">10,000+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Active Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Wallet className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">₱20M</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Loan Portfolio</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TrendingUp className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4">15%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Annual Growth</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Financial Highlights</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Loan Interest</span>
                  <div className="flex items-center">
                    <div className="h-2 w-32 overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[60%] bg-primary"></div>
                    </div>
                    <span className="ml-4 text-sm">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Investment Returns</span>
                  <div className="flex items-center">
                    <div className="h-2 w-32 overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[25%] bg-primary"></div>
                    </div>
                    <span className="ml-4 text-sm">25%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Service Fees</span>
                  <div className="flex items-center">
                    <div className="h-2 w-32 overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[15%] bg-primary"></div>
                    </div>
                    <span className="ml-4 text-sm">15%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-semibold">Annual Reports</h2>
        <div className="space-y-4">
          {[2023, 2022, 2021].map((year) => (
            <Card key={year}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Annual Report {year}</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}