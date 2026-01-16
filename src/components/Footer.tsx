const footerLinks = [
  { label: "About", href: "#solution" },
  { label: "Research", href: "#research" },
  { label: "Progress Logs", href: "#prototype" },
  { label: "Contact", href: "#cta" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Alron Q</h3>
            <p className="text-background/70">Education • Innovation • Accessibility</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-background/70 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Alron Q. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
