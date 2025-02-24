import SectionSeperator from 'src/components/home/section-seperator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'src/components/ui/accordion'

const FAQ = () => {
  return (
    <div className="px-4 py-6">
      <SectionSeperator title="Frequently Asked Questions (FAQ)" description="" />
      <div className="mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What type of jewelry does MN Jewel Park offer?</AccordionTrigger>
            <AccordionContent>
              We offer a wide range of jewelry, including gold, diamond, platinum, silver, and gemstone collections. Our
              designs include traditional South Indian jewelry, antique pieces, bridal sets, daily wear collections, and
              custom-made jewelry.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I customize my jewelry?</AccordionTrigger>
            <AccordionContent>
              Yes! We specialize in customized jewelry and can create unique designs based on your preferences. Share
              your ideas, and our expert artisans will craft a one-of-a-kind piece just for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer gold exchange?</AccordionTrigger>
            <AccordionContent>
              Yes, we provide a gold exchange program where you can trade your old gold jewelry for new designs without
              additional wastage or making charges.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is the gold jewelry certified?</AccordionTrigger>
            <AccordionContent>
              Absolutely! All our gold jewelry is BIS Hallmarked, ensuring purity and authenticity. Our diamond and
              gemstone jewelry also comes with certification from reputed labs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Do you have installment or EMI options?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer easy installment plans and gold savings schemes to help you plan your purchases
              conveniently. Contact our team to learn more about available options.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I know the current gold rate?</AccordionTrigger>
            <AccordionContent>
              We update our gold rates daily. You can check the latest gold rates at our store or contact us via phone
              or WhatsApp for real-time updates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Do you offer online shopping or home delivery?</AccordionTrigger>
            <AccordionContent>
              Currently, we operate through our physical store in Vellore, but we accept custom orders via WhatsApp or
              phone. Select products may also be available for home delivery.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Do you provide after-sales services like jewelry cleaning and repair?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer polishing, resizing, repair, and maintenance services to ensure your jewelry stays in
              perfect condition.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Can I return or exchange purchased jewelry?</AccordionTrigger>
            <AccordionContent>
              We have a return and exchange policy based on the type of jewelry purchased. Please visit our store or
              contact us for detailed terms and conditions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ
