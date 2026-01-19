import { Check, RefreshCw } from "lucide-react";

const completedItems = [
  "Display connectivity tested",
  "External audio successfully extracted",
  "Keyboard & mouse workflow validated",
];

const inProgressItems = [
  "Custom Study App in development",
  "School pilot planning",
];

const PrototypeSection = () => {
  return (
    <section id="prototype" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Current <span className="gradient-text">Development Stage</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="space-y-4 mb-6">
              {completedItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1 bg-secondary/20 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-6 space-y-4">
              {inProgressItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1 bg-primary/20 rounded-full">
                    <RefreshCw className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <span className="font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-8 text-muted-foreground font-medium">
            This project is actively being built and validated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
