'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What budgeting tools are available in the Finament?",
    answer: "The dashboard offers various budgeting tools, including setting monthly budgets, tracking spending by category, forecasting future expenses, and providing alerts when you're nearing your budget limits."
  },
  {
    question: "How does the Finament categorize my expenses?",
    answer: "Our system automatically categorizes your transactions using advanced AI algorithms, while also allowing you to manually adjust categories and create custom ones to match your specific needs."
  },
  {
    question: "Can I set financial goals?",
    answer: "Yes, you can set both short-term and long-term financial goals. The platform helps you track progress and provides recommendations to help you achieve your targets."
  },
  {
    question: "What kind of customer support is available?",
    answer: "We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated team is always ready to assist you."
  },
  {
    question: "Can I customize the dashboard to suit my needs?",
    answer: "Yes, the dashboard is fully customizable. You can arrange widgets, select preferred metrics, and set up personalized notifications."
  },
  {
    question: "Are there any fees for using the Finament?",
    answer: "We offer various pricing tiers to suit different needs. Please contact our sales team for detailed pricing information."
  }
];

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Don't see the answer you're looking for?{" "}
              <a href="#" className="text-red-500 hover:text-red-400">
                Get in touch
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 grid gap-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white hover:text-white/90">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 