const phases = [
  {
    number: "1",
    title: "Prototype, Testing & Launch",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Journey <span className="gradient-text">Ahead</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div
                  className={`bg-card rounded-xl p-6 border-2 text-center h-full flex flex-col items-center justify-start transition-all duration-300 ${
                    phase.status === "current"
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {/* Number Circle - Adaptive Text Color */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold bg-primary text-primary-foreground shadow-md ring-4 ring-primary/10">
                    {phase.number}
                  </div>

                  {/* Title - Uses card-foreground to stay visible in all modes */}
                  <h3 className="font-bold text-card-foreground text-sm md:text-base mb-auto">
                    {phase.title}
                  </h3>

                  {/* Status Badge - Adaptive Backgrounds */}
                  <div className="mt-4">
                    <span className={`inline-block text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border ${
                      phase.status === "current" 
                      ? "bg-primary text-primary-foreground border-transparent" 
                      : "bg-muted text-muted-foreground border-border"
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                </div>

                {/* Arrow Connector - Adaptive Color */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 text-border z-10 font-light text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-10 font-medium text-muted-foreground">
          Built step-by-step with real users.
        </p>
      </div>
    </section>
  );
};

export default RoadmapSection;