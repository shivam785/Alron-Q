"use client";

import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, ArrowRight } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto text-center">
        {/* ================= TEXT ================= */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Turn Any Smartphone into a{" "}
            <span className="gradient-text">
              Distraction-Free Study Laptop
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A low-cost DIY lapdock that transforms smartphones into powerful
            educational PCs — designed for schools, students, and digital
            inclusion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="gradient-primary border-0">
              <a href="#how-it-works">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#cta">Join Pilot Program</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#prototype">View Prototype</a>
            </Button>
          </div>
        </div>

        {/* ================= PRODUCT PREVIEW (FIXED) ================= */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-xl p-8">

            {/* Preview box */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">

              {/* 🔥 PARTICLES — NOW ACTUALLY VISIBLE */}
              <Particles
                color="#9fd3ff"
                particleCount={isMobile ? 10000 : 30000}
                particleSize={2}
                animate
                className="absolute inset-0 z-0 pointer-events-none "
              />

              {/* Foreground content (semi-transparent) */}
              <div className="relative z-10 h-full w-full flex items-center justify-center ">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="p-4 bg-primary/20 rounded-full">
                      <Smartphone className="h-8 w-8 text-primary" />
                    </div>

                    <ArrowRight className="h-6 w-6 text-muted-foreground" />

                    <div className="p-4 bg-secondary/20 rounded-full">
                      <Monitor className="h-8 w-8 text-secondary" />
                    </div>
                  </div>

                  <p className="text-muted-foreground font-medium">
                    Alron Q Lapdock — Product Preview
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
