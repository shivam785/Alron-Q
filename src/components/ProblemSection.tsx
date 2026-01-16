import { Laptop, Smartphone, School, Tablet, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Laptop,
    title: "Expensive Hardware",
    description: "Laptops and desktops are expensive for many families",
  },
  {
    icon: Smartphone,
    title: "Phone Distractions",
    description: "Smartphones cause distractions like social media and short-form videos",
  },
  {
    icon: School,
    title: "Limited Access",
    description: "Schools struggle to afford computer labs",
  },
  {
    icon: Tablet,
    title: "Tablet Limitations",
    description: "Tablets lack productivity and keyboard-based learning",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 px-4 bg-section-alt-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Problem with Digital Education Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Millions of students already own smartphones, yet access to proper computing devices remains limited.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-destructive/10 rounded-lg w-fit mb-4">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-6 border-2 border-primary/20 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Result</h3>
              <p className="text-muted-foreground">
                Students have devices — but not the right learning environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
