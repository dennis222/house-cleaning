import React from "react";
import Link from "next/link";
import Image from "next/image";

const AppFeatureSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] w-full">
              <Image
                src="https://cms.www.airtasker.com.com.au/wp-content/uploads/2024/03/AD-Image-1-2.png"
                alt="Absolute Domestics App"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-semibold mb-4">Manage your clean with our simple easy to use app</h3>
            <p className="text-muted-foreground mb-6">
              Streamline your cleaning schedule at the tap of a button. Our app simplifies your bookings and makes managing your home cleaning a breeze.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="https://apps.apple.com/au/app/myabdom/id1553742811" target="_blank">
                <Image
                  src="https://www.www.airtasker.com.com.au/_next/static/media/app-store.c1de4835.svg"
                  alt="Download on App Store"
                  width={140}
                  height={45}
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.www.airtasker.com.myabdom&hl=en_US" target="_blank">
                <Image
                  src="https://www.www.airtasker.com.com.au/_next/static/media/google-play.25f53fdc.svg"
                  alt="Download on Google Play"
                  width={140}
                  height={45}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatureSection;
