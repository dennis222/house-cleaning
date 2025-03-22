import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t pt-8 pb-4">
      <div className="container mx-auto px-4">
        {/* Book section */}
        <div className="grid md:grid-cols-2 gap-8 py-10 border-b">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Book your cleaner in 1 mintue.</h4>
            <p className="text-muted-foreground">
              Using our simple booking form you can have your clean booked in 1 Mintue.
            </p>
            <div className="relative mt-4 max-w-md">
              <input
                type="text"
                placeholder="Enter your postcode"
                className="w-full px-4 py-2 border rounded-md pr-28"
              />
              <Button size="sm" className="absolute right-1 top-1 bg-primary hover:bg-primary/90">
                <Link href="https://google.com.au/" target="_blank">
                  Get Pricing
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Or call our friendly team</h4>
            <p className="text-muted-foreground">
              Get your questions answered with our customer service's team!
            </p>
            <Button variant="outline" size="lg" asChild className="mt-4 flex items-center justify-center gap-2 max-w-xs">
              <Link href="tel:1300364646" className="text-lg">
                Call 1300 364 646
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-1">enquiries MON-FRI 8:30am - 5pm AEST</p>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <Image
                src="/images/ad-logo.png"
                alt="Absolute Domestics Logo"
                width={160}
                height={45}
              />
            </Link>

            <div className="flex gap-2 mb-4">
              <h6 className="font-semibold">Connect with us</h6>
              <div className="flex items-center gap-2">
                <Link href="https://www.facebook.com/www.airtasker.com/" target="_blank" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-primary" />
                </Link>
                <Link href="https://instagram.com/www.airtasker.comofficial" target="_blank" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-primary" />
                </Link>
                <Link href="https://linkedin.com/company/absolute-domestics" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-primary" />
                </Link>
                <Link href="https://www.youtube.com/channel/UC9ZhoIFTdrleXq48_doIQCg" target="_blank" aria-label="YouTube">
                  <Youtube className="h-5 w-5 text-primary" />
                </Link>
              </div>
            </div>
          </div>

          {/* Absolute Domestics */}
          <div className="lg:col-span-1">
            <h6 className="font-semibold mb-4">Absolute Domestics</h6>
            <div className="flex flex-col gap-2 text-sm">
              <div>
                <strong className="block">Head Office</strong>
                <p>Shop 18F, 21-27 Bunker Road,</p>
                <p>Victoria Point, QLD 4165</p>
              </div>
              <div>
                <strong className="block">Phone</strong>
                <Link href="tel:1300364646" className="text-primary hover:underline">
                  1300 364 646
                </Link>
              </div>
              <div>
                <strong className="block">Operating Hours</strong>
                <p>Monday: 8:30am - 5:00pm</p>
                <p>Tuesday: 8:30am - 5:00pm</p>
                <p>Wednesday: 8:30am - 5:00pm</p>
                <p>Thursday: 8:30am - 5:00pm</p>
                <p>Friday: 8:30am - 5:00pm</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h6 className="font-semibold mb-4">Services</h6>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/services/regular-clean" className="hover:text-primary transition-colors">
                  Regular Clean
                </Link>
              </li>
              <li>
                <Link href="/services/one-off-clean" className="hover:text-primary transition-colors">
                  One off Clean
                </Link>
              </li>
              <li>
                <Link href="/services/aged-care" className="hover:text-primary transition-colors">
                  Aged Care / Disability
                </Link>
              </li>
              <li>
                <Link href="/services/ndis" className="hover:text-primary transition-colors">
                  NDIS
                </Link>
              </li>
              <li>
                <Link href="/services/end-of-lease-cleaning" className="hover:text-primary transition-colors">
                  End of Lease Cleaning
                </Link>
              </li>
            </ul>

            <h6 className="font-semibold mb-4 mt-6">About Us</h6>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/about/how-does-it-work" className="hover:text-primary transition-colors">
                  How does it work?
                </Link>
              </li>
              <li>
                <Link href="/about/meet-the-team" className="hover:text-primary transition-colors">
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/cleaning-jobs" className="hover:text-primary transition-colors">
                  Become a Cleaner
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* New South Wales */}
          <div className="lg:col-span-1">
            <h6 className="font-semibold mb-4">New South Wales</h6>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <Link href="/locations/central-coast" className="hover:text-primary transition-colors">
                  Central Coast
                </Link>
              </li>
              <li>
                <Link href="/locations/lismore" className="hover:text-primary transition-colors">
                  Lismore
                </Link>
              </li>
              <li>
                <Link href="/locations/newcastle" className="hover:text-primary transition-colors">
                  Newcastle
                </Link>
              </li>
              <li>
                <Link href="/locations/port-macquarie" className="hover:text-primary transition-colors">
                  Port Macquarie
                </Link>
              </li>
              <li>
                <Link href="/locations/sutherland" className="hover:text-primary transition-colors">
                  Sutherland
                </Link>
              </li>
              <li>
                <Link href="/locations/sydney" className="hover:text-primary transition-colors">
                  Sydney
                </Link>
              </li>
              <li>
                <Link href="/locations/northern-beaches" className="hover:text-primary transition-colors">
                  Northern Beaches
                </Link>
              </li>
            </ul>

            <h6 className="font-semibold mb-4 mt-6">Queensland</h6>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <Link href="/locations/brisbane" className="hover:text-primary transition-colors">
                  Brisbane
                </Link>
              </li>
              <li>
                <Link href="/locations/gold-coast" className="hover:text-primary transition-colors">
                  Gold Coast
                </Link>
              </li>
              <li>
                <Link href="/locations/sunshine-coast" className="hover:text-primary transition-colors">
                  Sunshine Coast
                </Link>
              </li>
            </ul>
          </div>

          {/* Other states */}
          <div className="lg:col-span-1">
            <h6 className="font-semibold mb-4">Victoria</h6>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <Link href="/locations/melbourne" className="hover:text-primary transition-colors">
                  Melbourne
                </Link>
              </li>
              <li>
                <Link href="/locations/geelong" className="hover:text-primary transition-colors">
                  Geelong
                </Link>
              </li>
            </ul>

            <h6 className="font-semibold mb-4 mt-6">Western Australia</h6>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <Link href="/locations/perth" className="hover:text-primary transition-colors">
                  Perth
                </Link>
              </li>
            </ul>

            <h6 className="font-semibold mb-4 mt-6">South Australia</h6>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <Link href="/locations/adelaide" className="hover:text-primary transition-colors">
                  Adelaide
                </Link>
              </li>
            </ul>

            <h6 className="font-semibold mb-4 mt-6">ACT</h6>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <Link href="/locations/canberra" className="hover:text-primary transition-colors">
                  Canberra
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h6 className="font-semibold mb-4">Get the App</h6>
              <p className="text-sm mb-2">Manage all your cleans in one place, using our simple easy to use app!</p>
              <div className="flex gap-2">
                <Link href="https://apps.apple.com/au/app/myabdom/id1553742811" target="_blank">
                  <Image
                    src="https://www.www.airtasker.com.com.au/_next/static/media/app-store.c1de4835.svg"
                    alt="Download on App Store"
                    width={120}
                    height={40}
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.www.airtasker.com.myabdom&hl=en_US" target="_blank">
                  <Image
                    src="https://www.www.airtasker.com.com.au/_next/static/media/google-play.25f53fdc.svg"
                    alt="Download on Google Play"
                    width={120}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-4 border-t flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/registration-terms-and-conditions" className="hover:text-primary transition-colors">
              Terms of Use
            </Link>
            <Link href="/data-policy" className="hover:text-primary transition-colors">
              Cookie & Data Policy
            </Link>
            <Link href="/about/collection-notification-statement" className="hover:text-primary transition-colors">
              Collection Notice Statement
            </Link>
          </div>
          <div>
            © 2025 All Rights Reserved | Absolute Domestics
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
