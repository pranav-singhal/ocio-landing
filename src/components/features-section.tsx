import { Download, Frame, Gauge, LayoutDashboard, Sparkles } from "lucide-react";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-primary">Features</span>
        <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl">
          Key Features
        </h2>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-3 py-10">
        <div className="group/feature relative flex flex-col py-10 lg:border-x lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
          <div className="relative z-10 mb-4 px-10">
            <Frame size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">
              Curated Listings:
              <br />
            </span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm dark:text-neutral-300">
            The platform will provide a comprehensive database of CIOs, Investment veterans, and
            OCIO providers with detailed profiles, including performance history, expertise, and
            client testimonials.
            <br />
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-b lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
          <div className="relative z-10 mb-4 px-10">
            <Gauge size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">
              Comparison Tools:
              <br />
            </span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm dark:text-neutral-300">
            Side-by-side comparison of different OCIO providers, including the fees, services
            provided, and past performance. <br />
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-b lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
          <div className="relative z-10 mb-4 px-10">
            <Download size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">
              User Reviews &amp; Ratings: <br />
            </span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm dark:text-neutral-300">
            Verified reviews and ratings from other institutions that have worked with the OCIO
            providers.
            <br />
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-x">
          <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
          <div className="relative z-10 mb-4 px-10">
            <Sparkles size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">AI Matchmaking</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm dark:text-neutral-300">
            Advanced algorithms that match organizations with the most suitable OCIO providers based
            on their unique requirements.
            <br />
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
          <div className="relative z-10 mb-4 px-10">
            <LayoutDashboard size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">
              RFP Management: <br />
            </span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm dark:text-neutral-300">
            Streamlined Request for Proposal (RFP) process to efficiently engage with multiple OCIO
            providers and receive tailored proposals.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}
