import { Monitor, Keyboard, Battery, Volume2, Layers, Lock, Wifi, Settings } from "lucide-react";

const hardwareFeatures = [
  { icon: Layers, text: "Modular laptop-style body" },
  { icon: Monitor, text: "External display panel" },
  { icon: Keyboard, text: "Built-in keyboard & touchpad" },
  { icon: Battery, text: "Power management system" },
  { icon: Volume2, text: "Audio output via HDMI extractor" },
];

const softwareFeatures = [
  { icon: Settings, text: "Custom Android-based Study App" },
  { icon: Monitor, text: "Desktop-like interface" },
  { icon: Wifi, text: "Offline learning support" },
  { icon: Lock, text: "App locking & distraction control" },
  { icon: Settings, text: "Parent / school-managed access" },
];

const ProductOverviewSection = () => {
  return (
    <section id="product" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Makes Our Lapdock <span className="gradient-text">Unique</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Hardware Column */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary gradient-primary rounded-lg">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Hardware</h3>
            </div>
            <ul className="space-y-4">
              {hardwareFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Column */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Software (Study App)</h3>
            </div>
            <ul className="space-y-4">
              {softwareFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverviewSection;
