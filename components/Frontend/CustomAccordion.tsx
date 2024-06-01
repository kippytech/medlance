import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export interface faqItem {
    qn: string;
    ans: string | React.ReactNode;
  }
  
  export default function CustomAccordion({FAQ}: {FAQ: faqItem[]}) {
    return (
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((faq, i) => (
            <AccordionItem value={`item ${i + 1}`} key={i}>
            <AccordionTrigger>{faq.qn}</AccordionTrigger>
            <AccordionContent>{faq.ans}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
  