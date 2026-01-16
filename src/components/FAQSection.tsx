import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much will the Alron Q Lapdock cost?",
    answer:
      "We are designing the lapdock to be significantly cheaper than traditional laptops. Our goal is to make it affordable for schools and families, with a target price point that enables widespread digital inclusion.",
  },
  {
    question: "What smartphones are compatible?",
    answer:
      "The lapdock is designed to work with most Android smartphones that support USB-C video output (DisplayPort Alt Mode) or wireless display protocols. We are also exploring compatibility with a wider range of devices in future versions.",
  },
  {
    question: "How does the Study App prevent distractions?",
    answer:
      "The Study App launches automatically when the phone connects to the lapdock. It provides a locked-down environment with only approved educational content, blocking access to social media, games, and other distracting apps during study sessions.",
  },
  {
    question: "Can schools customize the educational content?",
    answer:
      "Yes! Schools and parents can manage which apps and content are accessible through the Study App. This allows customization based on curriculum requirements and age-appropriate content policies.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes, the Study App supports offline learning with pre-downloaded courses, videos, and study materials. This makes it ideal for rural areas with limited or unreliable internet connectivity.",
  },
  {
    question: "How can my school join the pilot program?",
    answer:
      "We are actively seeking schools for our pilot program. Please reach out through our contact form, and our team will provide details about participation, requirements, and timeline.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
