import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.jpeg"
          alt="Absolute Domestics Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-lg">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">
            Local cleaners handpicked for your home
          </h1>
          <p className="text-white text-lg mb-8">
            Established for 30 years with cleaning contractors who are carefully screened and trained, we offer the choice of regular and once off cleans.
          </p>

          {/* Search input */}
          <div className="relative max-w-md">
            <div className="flex items-center border rounded-md bg-white overflow-hidden">
              <div className="p-3 text-muted-foreground">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="Enter your postcode"
                className="w-full px-2 py-3 bg-transparent outline-none"
              />
              <Button className="absolute right-1 top-1 bg-primary hover:bg-primary/90">
                <Link href="https://book.www.airtasker.com.com.au/" target="_blank">
                  Find My Cleaner
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
