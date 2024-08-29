import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Faq</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg text-center">
        For any other questions, please feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What is OCIOadvisor.com, and how does it benefit institutions and family offices?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            OCIOadvisor.com is a marketplace platform designed to connect institutions and family
            offices with top Chief Investment Officers (CIOs), investment professionals, and OCIO
            (Outsourced Chief Investment Officer) providers. By offering a curated list of
            experienced professionals, advanced AI-driven matchmaking, and comprehensive comparison
            tools, our platform helps organizations find the best fit for their investment
            management needs, saving time and ensuring better investment outcomes.
            <br />
            <br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How does OCIOadvisor.com ensure the quality and expertise of the professionals listed on
            the platform?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            We carefully curate our listings by evaluating CIOs, investment professionals, and OCIO
            providers based on their performance history, expertise, and client testimonials.
            Additionally, our platform includes verified reviews and ratings from institutions that
            have previously worked with these professionals, ensuring that only the most qualified
            and reputable experts are featured.
            <br />
            <br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What makes OCIOadvisor.com different from other investment management platforms?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            OCIOadvisor.com is unique in its exclusive focus on connecting institutions and family
            offices with CIOs and OCIO providers. Unlike general investment management platforms, we
            offer in-depth profiles, detailed comparisons, and transparent pricing information
            specific to OCIO services. Additionally, our use of AI and data analytics enhances the
            matchmaking process, ensuring a perfect fit between institutions and OCIO providers.
            <br />
            <br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How does the AI matchmaking process work on OCIOadvisor.com?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Our platform uses advanced algorithms to analyze the specific needs and preferences of
            institutions and family offices. By comparing these requirements with the expertise and
            services offered by OCIO providers, the AI matchmaking tool suggests the most suitable
            professionals for each organization, streamlining the selection process and improving
            the chances of a successful engagement.
            <br />
            <br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What is the pricing model for using OCIOadvisor.com?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            OCIOadvisor.com offers several revenue streams, including subscription fees for OCIO
            providers to be listed on the platform, success-based transaction fees upon successful
            client engagement, and premium services like enhanced profile listings and advanced
            analytics. For institutions, there may be fees associated with using our RFP (Request
            for Proposal) management service and accessing premium support.
            <br />
            <br />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
