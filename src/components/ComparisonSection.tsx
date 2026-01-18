import { Check, X } from "lucide-react";

type ComparisonRow = {
  feature: string;
  laptop: string | boolean;
  tablet: string | boolean;
  alronq: string | boolean;
};

const comparisonData: ComparisonRow[] = [
  { feature: "Cost", laptop: "High", tablet: "Medium", alronq: "Low" },
  { feature: "Uses Existing Phone", laptop: false, tablet: false, alronq: true },
  { feature: "Distraction Control", laptop: false, tablet: false, alronq: true },
  { feature: "Upgradeable", laptop: false, tablet: false, alronq: true },
  { feature: "Education-Focused", laptop: false, tablet: false, alronq: true },
];

const ComparisonSection = () => {
  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-secondary mx-auto" />
      ) : (
        <X className="h-5 w-5 text-destructive mx-auto" />
      );
    }
    return <span className="font-medium">{value}</span>;
  };

  return (
    <section id="comparison" className="py-20 px-4 bg-section-alt-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Just Another{" "}
            <span className="gradient-text">Docking Station</span>
          </h2>
        </div>

        {/* ===== SAME TABLE FOR MOBILE + DESKTOP ===== */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[640px] bg-card rounded-xl border border-border overflow-hidden">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center font-semibold">Laptops</th>
                <th className="p-4 text-center font-semibold">Tablets</th>
                <th className="p-4 text-center font-semibold bg-primary/5">
                  <span className="gradient-text font-bold">
                    Alron Q Lapdock
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index !== comparisonData.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                >
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4 text-center text-muted-foreground">
                    {renderCell(row.laptop)}
                  </td>
                  <td className="p-4 text-center text-muted-foreground">
                    {renderCell(row.tablet)}
                  </td>
                  <td className="p-4 text-center bg-primary/5 font-medium">
                    {renderCell(row.alronq)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center mt-8 font-semibold text-lg">
          We don't replace smartphones —{" "}
          <span className="gradient-text">we transform them.</span>
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;
