import { Smartphone, Monitor, Keyboard, BookOpen, Check } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    text: "Insert your phone into the lapdock",
  },
  {
    icon: Monitor,
    text: "Connect instantly to a larger screen",
  },
  {
    icon: Keyboard,
    text: "Use keyboard, touchpad, and speakers",
  },
  {
    icon: BookOpen,
    text: "Access a custom, study-focused app",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Phone-Powered <span className="gradient-text">Learning PC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We introduce a DIY Lapdock that converts smartphones into full desktop-like computers focused purely on education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 transition-colors"
            >
              <div className="p-4 gradient-primary rounded-full w-fit mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/20 rounded-2xl p-8 max-w-3xl mx-auto border border-border">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            {["No expensive hardware", "No distractions", "Just learning"].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="font-semibold">{item}</span>
                {index < 2 && <span className="hidden sm:inline text-muted-foreground mx-2">•</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
