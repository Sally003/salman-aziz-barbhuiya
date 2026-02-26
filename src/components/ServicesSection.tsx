import { BarChart3, ShieldCheck, Terminal, Globe, Database } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Data Analyst.",
    desc: "Data cleaning, visualization, business insights, and reporting dashboards that drive decisions.",
    icon: BarChart3,
    projects: "6+ Projects",
  },
  {
    title: "Risk Analyst.",
    desc: "Fraud detection, behavior pattern recognition, and anomaly detection across systems.",
    icon: ShieldCheck,
    projects: "2+ Projects",
  },
  {
    title: "Python Developer.",
    desc: "Automation scripts, ML model development, and data processing tool engineering.",
    icon: Terminal,
    projects: "4+ Projects",
  },
  {
    title: "Web Designer.",
    desc: "Responsive website design using HTML, CSS, JavaScript, and PHP.",
    icon: Globe,
    projects: "2+ Projects",
  },
  {
    title: "SQL Database Handler.",
    desc: "Database design, optimization, complex querying, and performance management.",
    icon: Database,
    projects: "3+ Projects",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">— Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-black mt-3 mb-12">
            What I <span className="text-primary">Do.</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <AnimatedSection
              key={s.title}
              delay={i * 100}
              className="group relative p-6 rounded-lg bg-primary text-primary-foreground border border-primary transition-all duration-300 cursor-default hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/15 flex items-center justify-center mb-4">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold mb-1">
                {s.title}
              </h3>
              <p className="text-xs text-primary-foreground/60 mb-3">
                {s.projects}
              </p>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                {s.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
