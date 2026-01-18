import { Button } from "@/components/ui/button";
import { Mail, Users, Handshake } from "lucide-react";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build the Future of{" "}
          <span className="gradient-text">Affordable Education</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Interested in piloting in schools? Looking for incubation & mentorship?
          Want to collaborate on research?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gradient-primary border-0">
            <a href="mailto:connect.alronq@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a href="mailto:connect.alronq@gmail.com?subject=Pilot%20Program%20Interest">
              <Users className="mr-2 h-4 w-4" />
              Join the Pilot Program
            </a>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a href="mailto:connect.alronq@gmail.com?subject=Partnership%20Inquiry">
              <Handshake className="mr-2 h-4 w-4" />
              Partner with Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
