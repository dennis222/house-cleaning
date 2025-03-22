import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  return (
    <>
      {/* Video section */}
      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
              <Image
                src="/images/regular-clean.jpeg"
                alt="Fresh spaces, happy faces"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Fresh spaces, happy faces</h3>
              <p className="text-muted-foreground mb-6">
                Watch real customers share their experiences with Absolute Domestics! From busy professionals to families, they reveal how our trusted, police-checked cleaners have transformed their homes and lifestyles. Discover the difference a reliable, quality home clean can make!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wind-down and relax section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Wind-down and relax, find the perfect cleaner for your home</h3>
              <p className="text-muted-foreground mb-4">
                We take the hassle out of finding a cleaner. Absolute Domestics connects you with handpicked local cleaners who can offer personalised cleaning services.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether it's a Regular or One-off clean, our Area Coordinator will match you with the perfect fit. Cleaning your home is the heart of our business.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/once-off-clean.jpeg"
                alt="Wind-down and relax"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Providers section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/ndis-service.jpeg"
                alt="NDIS providers"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-2">Providers for NDIS, aged care and disability</h3>
              <p className="text-muted-foreground mb-6">
                Our services stand out as dedicated providers for NDIS, aged care, and disability sectors, offering tailored home cleaning solutions. We ensure a comfortable, safe, and hygienic environment for all our clients, respecting their unique needs and preferences.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/faqs">
                  Learn more
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Australia's largest agency for domestic cleaners, trusted for over 30 years.</h3>
              <p className="text-muted-foreground mb-6">
                Committed to excellence, we've spent over three decades offering reliable, high-quality domestic cleaning services. Our wide network in Australia and New Zealand means you can enjoy a spotless home, provided by professionals who care, no matter where you are.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/about">
                  Learn more
                </Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2 relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/about-team.jpeg"
                alt="About Absolute Domestics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <section className="py-8 bg-background border-t">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-8">
            We are also providers for NDIS, aged care and disability providers.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Image src="/icons/qbe.svg" alt="QBE" width={80} height={40} className="h-10 w-auto" />
            <Image src="/icons/allianz.svg" alt="Allianz" width={80} height={40} className="h-10 w-auto" />
            <Image src="/icons/suncorp.svg" alt="Suncorp" width={80} height={40} className="h-10 w-auto" />
            <Image src="/icons/qantas.svg" alt="Qantas" width={80} height={40} className="h-10 w-auto" />
            <Image src="/icons/nrma.svg" alt="NRMA" width={80} height={40} className="h-10 w-auto" />
            <Image src="/icons/mater.svg" alt="Mater Foundation" width={80} height={40} className="h-10 w-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
