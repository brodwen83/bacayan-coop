import { Building2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background p-8 text-foreground">
      <div className="container mx-auto max-w-7xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold">BMPC</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering communities through financial cooperation and growth
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-muted-foreground hover:text-primary"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/investment"
                  className="text-muted-foreground hover:text-primary"
                >
                  Investment
                </Link>
              </li>
              <li>
                <Link
                  href="/loans"
                  className="text-muted-foreground hover:text-primary"
                >
                  Loans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">123 Bacayan Street</li>
              <li className="text-muted-foreground">Cebu City, 6000</li>
              <li className="text-muted-foreground">Philippines</li>
              <li className="text-muted-foreground">Phone: (032) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bacayan Multi-Purpose Cooperative. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
