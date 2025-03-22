import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Book a cleaner online or over the phone",
      description: "Easily book a cleaning service online or over the phone. When you book your service, our Area Coordinators will find the perfect cleaner for your needs and allow selected Cleaning Contractors to view and request your job."
    },
    {
      number: 2,
      title: "Your cleaner undergoes vetting procedures",
      description: "All Cleaners registered with the Agency undergo a rigorous vetting procedure to guarantee their suitability"
    },
    {
      number: 3,
      title: "We notify you that a cleaner has been selected",
      description: "When your cleaner has successfully passed our vetting procedures, you will be notified that we've found you the perfect match!"
    },
    {
      number: 4,
      title: "Meet your cleaner",
      description: "Your new cleaner will get in touch to setup a first meeting to introduce themselves. After your meeting, we'll contact you for a post-service follow up to ensure your satisfaction. If they don't meet your needs, rest assured we have an extensive network of alternative cleaners for you to choose from."
    },
    {
      number: 5,
      title: "Put your feet up and relax",
      description: "Here's the fun part! relax and enjoy more free time and hassle-free home cleaning with us!"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4">How it works?</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are an Agency for Domestic Cleaners that provides our clients with trustworthy and reliable cleaners. Our experienced area coordinators will ensure you have the right cleaner that suits your needs.
          </p>
          <Button className="mt-6 bg-primary hover:bg-primary/90" asChild>
            <Link href="/">
              Find your cleaner
            </Link>
          </Button>
        </div>

        <div className="grid gap-12 mt-16">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold text-lg">
                  {step.number}
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-xl mb-2">{step.title}</h5>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
