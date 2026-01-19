import { GraduationCap, School, Users, Globe } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Affordable, focused learning",
  },
  {
    icon: School,
    title: "Schools",
    description: "Low-cost computer labs",
  },
  {
    icon: Users,
    title: "Parents",
    description: "Safe phone usage at home",
  },
  {
    icon: Globe,
    title: "Rural Areas",
    description: "Reuse existing smartphones",
  },
];

const AudienceSection = () => {
  return (
    <section id="audience" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed for <span className="gradient-text">Real-World Education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-md transition-shadow"
            >
              <div className="p-4 gradient-primary rounded-full w-fit mx-auto mb-4">
                <audience.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{audience.title}</h3>
              <p className="text-muted-foreground text-sm">{audience.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center font-semibold text-lg text-muted-foreground">
          One device. Multiple learning environments.
        </p>
      </div>
    </section>
  );
};

export default AudienceSection;
