import { Code, GraduationCap, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Code,
    text: "Affordable technology",
  },
  {
    icon: GraduationCap,
    text: "Education access",
  },
  {
    icon: Lightbulb,
    text: "Practical innovation",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4 bg-section-alt-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built by <span className="gradient-text">Engineering Students</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are Computer Science Engineering students passionate about:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto mb-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card rounded-full px-6 py-3 border border-border"
            >
              <value.icon className="h-5 w-5 text-primary" />
              <span className="font-medium">{value.text}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-medium">
          Guided by academic mentors and real-world testing.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
