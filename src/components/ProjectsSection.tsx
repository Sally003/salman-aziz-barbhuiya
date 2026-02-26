import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Customer Behaviour Tracking",
    tag: "Amazon",
    desc: "Analyzed churn-like trends using SQL and Power BI. Generated actionable insights from customer interaction data for retention-based decision support.",
    tech: ["SQL", "Power BI", "Data Analysis"],
  },
  {
    title: "Fraud Monitoring System",
    tag: "Kibana – Amazon",
    desc: "Monitored network signals to detect remote fraud activity. Increased fraud detection efficiency by 20% through pattern recognition.",
    tech: ["Kibana", "Data Analytics", "Risk Analysis"],
  },
  {
    title: "Face Recognition Attendance",
    tag: "Personal Project",
    desc: "Real-time attendance tracking system with automated identity verification using computer vision libraries.",
    tech: ["Python", "OpenCV", "MediaPipe"],
  },
  {
    title: "English Language Translator",
    tag: "NLP Research",
    desc: "NLP-based Seq2Seq deep learning model focused on consumer text understanding and language translation.",
    tech: ["Python", "Deep Learning", "NLP"],
  },
  {
    title: "Hotel Management System",
    tag: "Web Application",
    desc: "Full-stack web app tracking customer history and satisfaction metrics with database management.",
    tech: ["PHP", "MySQL", "HTML/CSS"],
  },
  {
    title: "Power BI Dashboards",
    tag: "Data Visualization",
    desc: "Interactive dashboards and reporting insights from large dataset manipulation for business stakeholders.",
    tech: ["Power BI", "Data Viz", "Excel"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="section-container">
        <AnimatedSection>
          <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">— Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-black mt-3 mb-12">
            Selected <span className="text-primary">Projects.</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 100} className="card-elevated group flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {p.tag}
                </span>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs text-muted-foreground font-mono">{t}</span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
