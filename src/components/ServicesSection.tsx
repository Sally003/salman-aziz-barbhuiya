import { BarChart3, ShieldCheck, Terminal, Globe, Database } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Data Analyst",
    desc: "Data cleaning, visualization, business insights, and reporting dashboards that drive decisions.",
    icon: BarChart3,
  },
  {
    title: "Risk Analyst",
    desc: "Fraud detection, behavior pattern recognition, and anomaly detection across systems.",
    icon: ShieldCheck,
  },
  {
    title: "Python Developer",
    desc: "Automation scripts, ML model development, and data processing tool engineering.",
    icon: Terminal,
  },
  {
    title: "Web Designer",
    desc: "Responsive website design using HTML, CSS, JavaScript, and PHP.",
    icon: Globe,
  },
  {
    title: "SQL Database Handler",
    desc: "Database design, optimization, complex querying, and performance management.",
    icon: Database,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 100} className="card-elevated group text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
