import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ServicesSection = () => {
  const serviceItems = [
    "Dusting", "Linen changing", "Bathroom cleaning",
    "Vacuuming", "Kitchen cleaning", "Washing",
    "Mopping", "Fridge cleaning", "Ironing",
    "Tidying", "Oven cleaning", "Pantry tidying",
    "Surfaces wiped", "Bed making", "And much more"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-16">Cleaning services we offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Regular Clean Card */}
          <Card className="border-0 shadow-sm overflow-hidden">
            <CardHeader className="bg-secondary/10 py-4">
              <div className="text-sm uppercase font-medium text-center text-secondary">Most Popular</div>
              <CardTitle className="text-2xl mt-2">Regular Clean</CardTitle>
              <CardDescription className="mt-2 flex items-baseline">
                <span className="text-lg font-medium">from $38 p/h*</span>
                <span className="text-sm ml-1">for a 3 hour service</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">
                Book an ongoing weekly or fortnightly clean and never worry about the general chores again!
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>Cleaners Police Checked and trained</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>Customised cleaning to suit your needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>Contractors are covered by Public Liability Insurance</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="https://book.www.airtasker.com.com.au/" target="_blank">
                  Get Pricing and Book Online
                </Link>
              </Button>
              <Link
                href="/services/regular-clean"
                className="text-sm text-primary hover:underline text-center"
              >
                Learn more about Regular Cleaning
              </Link>
            </CardFooter>
          </Card>

          {/* Once-Off Clean Card */}
          <Card className="border-0 shadow-sm overflow-hidden">
            <CardHeader className="bg-muted py-4">
              <CardTitle className="text-2xl">Once-Off Clean</CardTitle>
              <CardDescription className="mt-2"></CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">
                Our move out and spring cleans take the hard work out of a big cleaning job by using our expert one-off cleaners.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>Highly trained end of lease and spring cleaners</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>All cleaning equipment supplied</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>Full clean or partial clean depending on your time or budget</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="https://book.www.airtasker.com.com.au/" target="_blank">
                  Get Pricing and Book Online
                </Link>
              </Button>
              <Link
                href="/services/one-off-clean"
                className="text-sm text-primary hover:underline text-center"
              >
                Learn more about Once-Off Cleaning
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* What can be included section */}
        <div className="mt-16">
          <h5 className="text-lg font-semibold mb-4">What can be included?</h5>
          <p className="mb-6">
            Any household chore, including mopping, ironing or doing the washing. Each clean is fully customisable to meet your needs. Just add any special requests in our simple booking process.
          </p>

          <Link href="/about/how-does-it-work" className="text-primary hover:underline mb-6 inline-block">
            How it works
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
            {serviceItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
