import { Monitor, BookOpen, Gamepad2, ShieldCheck, WifiOff, Smartphone } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Desktop-style UI",
    description: "Keyboard & mouse friendly interface",
  },
  {
    icon: BookOpen,
    title: "All-in-One Learning",
    description: "Courses, videos, and notes in one place",
  },
  {
    icon: Gamepad2,
    title: "Mind Development",
    description: "Logic games & mind-development tools",
  },
  {
    icon: ShieldCheck,
    title: "No Distractions",
    description: "No social media, no ads, no reels",
  },
  {
    icon: WifiOff,
    title: "Offline Access",
    description: "Works in low-connectivity regions",
  },
];

const StudyAppSection = () => {
  return (
    <section id="study-app" className="py-20 px-4 bg-section-alt-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A <span className="gradient-text">Learning-First</span> Application
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our Study App is built specifically for junior and secondary students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 border border-primary/20">
            <Smartphone className="h-5 w-5 text-primary" />
            <span className="font-semibold">Phones become tools, not distractions.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAppSection;
