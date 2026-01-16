import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductOverviewSection from "@/components/ProductOverviewSection";
import StudyAppSection from "@/components/StudyAppSection";
import AudienceSection from "@/components/AudienceSection";
import ComparisonSection from "@/components/ComparisonSection";
import PrototypeSection from "@/components/PrototypeSection";
import RoadmapSection from "@/components/RoadmapSection";
import ResearchSection from "@/components/ResearchSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ProductOverviewSection />
        <StudyAppSection />
        <AudienceSection />
        <ComparisonSection />
        <PrototypeSection />
        <RoadmapSection />
        <ResearchSection />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
