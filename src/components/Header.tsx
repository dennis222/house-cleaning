import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4">
        {/* Top bar with phone number and book online button */}
        <div className="hidden lg:flex justify-between items-center py-2 text-sm">
          <p className="text-muted-foreground">
            enquiries Monday - Friday <strong>8:30am - 5pm AEST</strong>
          </p>
          <div className="flex items-center gap-4">
            <Link href="tel:1300364646" className="flex items-center gap-2 hover:text-primary transition-colors">
              <PhoneCall className="h-4 w-4" />
              Call 000 000 000 
            </Link>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="https://book.absolutedomestics.com.au/" target="_blank">
                Get Pricing & Book Online
              </Link>
            </Button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ad-logo.png"
              alt="Absolute Domestics Logo"
              width={160}
              height={45}
              priority
            />
          </Link>

          {/* Mobile call button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="tel:1300364646" className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white">
              <PhoneCall className="h-5 w-5" />
            </Link>
            <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
              <Link href="https://book.absolutedomestics.com.au/" target="_blank">
                Book Online
              </Link>
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="https://book.absolutedomestics.com.au/" target="_blank" className="text-foreground hover:text-primary transition-colors">
              Pricing & Book Online
            </Link>
            <Link href="/locations" className="text-foreground hover:text-primary transition-colors">Locations</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/jobs" className="text-foreground hover:text-primary transition-colors">Become a Cleaner</Link>
            <Link href="/reviews" className="text-foreground hover:text-primary transition-colors">Reviews</Link>
            <Link href="/faqs" className="text-foreground hover:text-primary transition-colors">FAQs</Link>
            <Link href="/contact-us" className="text-foreground hover:text-primary transition-colors">Contact Us</Link>
            <Link href="https://my.absolutedomestics.com.au/login" target="_blank" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
              Login/Register
            </Link>
          </nav>

          {/* Mobile navigation button */}
          <button className="lg:hidden text-foreground p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
