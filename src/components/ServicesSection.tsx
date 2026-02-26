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
              className="group p-6 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-background/20 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                <s.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-1 group-hover:text-primary-foreground transition-colors">
                {s.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 group-hover:text-primary-foreground/70 transition-colors">
                {s.projects}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary-foreground/80 transition-colors">
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
