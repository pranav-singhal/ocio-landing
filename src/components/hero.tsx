import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 pt-20 sm:gap-10">
      <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
        <span className="text-sm text-secondary-foreground">Join the waitlist</span>
        <ArrowRight size={16} />
      </div>
      <h1 className="max-w-3xl text-center font-heading text-4xl font-semibold sm:text-5xl sm:leading-tight">
        OCIO Advisor
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        Connecting Institutions &amp; Family offices to Exceptional CIOs &amp; OCIO providers.
      </p>
      <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center">
        <Input
          type="email"
          placeholder="Enter your email"
          className="h-12 border-border bg-card px-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-14 sm:flex-1"
        />
        <Button size="lg" asChild className="h-12 cursor-pointer text-base sm:h-14">
          <Link href="#">Join Waitlist</Link>
        </Button>
      </form>
      <div className="relative sm:mt-8">
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
