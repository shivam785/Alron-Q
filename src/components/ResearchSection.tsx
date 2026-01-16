import { Cpu, Smartphone, Users, Globe } from "lucide-react";

const researchAreas = [
  {
    icon: Cpu,
    title: "Low-cost Computing Systems",
  },
  {
    icon: Smartphone,
    title: "Android Desktop Convergence",
  },
  {
    icon: Users,
    title: "Human-Computer Interaction",
  },
  {
    icon: Globe,
    title: "Digital Education Accessibility",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engineering Meets <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This project contributes to research in:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 border border-border text-center hover:border-primary/30 transition-colors"
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                <area.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium text-sm">{area.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-medium">
          Designed as both a startup product and research initiative.
        </p>
      </div>
    </section>
  );
};

export default ResearchSection;
