const phases = [
  {
    number: "1",
    title: "Prototype , Testing & Launch",
    status: "current",
  },
  {
    number: "2",
    title: "School Pilot Programs",
    status: "upcoming",
  },
  {
    number: "3",
    title: "Custom PCB & Study App Optimization",
    status: "upcoming",
  },
  {
    number: "4",
    title: "Manufacturing & Scale-up",
    status: "upcoming",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 px-4 bg-section-alt-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Journey <span className="gradient-text">Ahead</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div
                  className={`bg-card rounded-xl p-6 border-2 text-center h-full ${
                    phase.status === "current"
                      ? "border-primary shadow-lg"
                      : "border-primary shadow-lg"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold ${
                      phase.status === "current"
                        ? "bg-muted gradient-primary text-muted-foreground"
                        : "bg-muted  gradient-primary  text-muted-foreground"
                    }`}
                  >
                    {phase.number}
                  </div>
                  <h3 className={`font-semibold ${phase.status === "current" ? "" : "text-primary"}`}>
                    {phase.title}
                  </h3>
                  {phase.status === "current" && (
                    <span className="inline-block mt-3 text-xs font-semibold gradient-primary text-primary px-3 py-1 rounded-full">
                      Current
                    </span>
                  )}
                   {phase.status === "upcoming" && (
                    <span className="inline-block mt-3 text-xs font-semibold gradient-primary text-primary px-3 py-1 rounded-full">
                      Upcoming
                    </span>
                  )}
                </div>
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground">
                      →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-8 font-medium text-muted-foreground">
          Built step-by-step with real users.
        </p>
      </div>
    </section>
  );
};

export default RoadmapSection;
