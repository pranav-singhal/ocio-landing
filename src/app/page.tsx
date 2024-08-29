import { Faq } from "@/components/faq";
import { Features } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Faq />
      <Footer />
    </>
  );
}
