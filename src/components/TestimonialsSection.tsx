import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "I was thoroughly impressed with the level of service and quality of the product. I would highly recommend them to anyone in need of their services.",
      author: "Jess Smith",
      date: "1 Jan 2024",
      rating: 5
    },
    {
      content: "My experience with the company was great. They were prompt, professional, and their expertise was evident in the quality of their work.",
      author: "Barry Morgan",
      date: "10 March 2023",
      rating: 4
    },
    {
      content: "The quality of the work was exceptional. They were responsive to my feedback and made sure everything was done to my satisfaction. I couldn't be happier with the outcome.",
      author: "Jake Boran",
      date: "15 August 2023",
      rating: 5
    },
    {
      content: "I am extremely pleased with the work they did. They delivered on time and exceeded my expectations. I look forward to working with them again in the future.",
      author: "John Scott",
      date: "29 February 2024",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-2">What our clients are saying</h2>
            <p className="text-muted-foreground">
              With over 3,400+ 4 and 5 reviews and new testimonials added every week, our reputation as domestic cleaners in Australia is important to us, as is the safety and security of you, your family and your home.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link href="/reviews">
              <Image
                src="/images/product-review-badge.webp"
                alt="Product Review Award Winner"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-300" />
                  ))}
                </div>
                <p className="font-semibold mb-2">
                  {testimonial.rating === 5 ? "Excellent Service" : "Great Experience"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.content}
                </p>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-xs">{testimonial.date}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Want to know more */}
        <div className="mt-12 text-center">
          <h4 className="font-semibold mb-2">Want to know more?</h4>
          <p className="text-muted-foreground mb-6">
            Check out our ProductReview to see what our clients think about their service and the work their cleaners do on a regular basis.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
            <Link href="/reviews">
              Read All Reviews
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
