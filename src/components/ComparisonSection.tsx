import { Check, X } from "lucide-react";

const comparisonData = [
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
        <Check className="h-5 w-5 text-secondary" />
      ) : (
        <X className="h-5 w-5 text-destructive" />
      );
    }
    return <span>{value}</span>;
  };

  return (
    <section id="comparison" className="py-20 px-4 bg-section-alt-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Just Another <span className="gradient-text">Docking Station</span>
          </h2>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full bg-card rounded-xl border border-border overflow-hidden">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center font-semibold">Laptops</th>
                <th className="p-4 text-center font-semibold">Tablets</th>
                <th className="p-4 text-center font-semibold bg-primary/5">
                  <span className="gradient-text font-bold">Alron Q Lapdock</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={index !== comparisonData.length - 1 ? "border-b border-border" : ""}
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

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-4"
            >
              <h3 className="font-semibold mb-4">{row.feature}</h3>

              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Laptop</p>
                  {renderCell(row.laptop)}
                </div>

                <div>
                  <p className="text-muted-foreground mb-1">Tablet</p>
                  {renderCell(row.tablet)}
                </div>

                <div className="bg-primary/5 rounded-lg py-2">
                  <p className="gradient-text font-semibold mb-1">Alron Q</p>
                  {renderCell(row.alronq)}
                </div>
              </div>
            </div>
          ))}
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
