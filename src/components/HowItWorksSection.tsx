import { Smartphone, Link, Play, BookCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Insert Phone",
    description: "Insert a smartphone into the lapdock compartment",
  },
  {
    number: "02",
    icon: Link,
    title: "Connect",
    description: "Phone connects to display, keyboard, mouse, and audio",
  },
  {
    number: "03",
    icon: Play,
    title: "Launch App",
    description: "Custom Study App launches automatically",
  },
  {
    number: "04",
    icon: BookCheck,
    title: "Start Learning",
    description: "Students access only approved educational content",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-section-alt-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple. Modular. <span className="gradient-text">Affordable.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how easy it is to transform any smartphone into a learning device.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="text-4xl font-bold text-primary">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 gradient-primary rounded-lg w-fit mb-3">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 font-medium">
          Designed for daily classroom and home use.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
