import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Investigation Specialist",
    company: "Amazon",
    period: "Sep 2024 – Dec 2025",
    points: [
      "Analyzed customer behavior and flagged suspicious activity trends across global markets.",
      "Identified churn-like patterns and supported retention strategies.",
      "Built data insights using large datasets for cross-functional teams.",
      "Improved automation accuracy, reducing manual intervention significantly.",
      "Contributed to fraud detection and risk mitigation initiatives.",
    ],
  },
  {
    title: "ML Intern",
    company: "Indian Oil Corporation Ltd.",
    period: "Aug 2023 – Sep 2023",
    points: [
      "Built YOLOv8-based license plate recognition system.",
      "Reduced manual errors by 40% through automation.",
      "Studied pipeline systems and automated valve processes (30% error reduction).",
    ],
  },
  {
    title: "NLP Intern",
    company: "Jorhat Engineering College",
    period: "Sep 2022 – Oct 2022",
    points: [
      "Conducted NLP research on semantic similarity analysis.",
      "Built Python tools for text processing and analysis.",
      "Studied Encoder-Decoder and Seq2Seq models for language translation.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="section-container">
        <AnimatedSection>
          <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">— Experience</span>
          <h2 className="font-display text-3xl md:text-4xl font-black mt-3 mb-12">
            Work <span className="text-primary">History.</span>
          </h2>
        </AnimatedSection>

        <div className="relative pl-10 md:pl-14">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 150} className="mb-12 last:mb-0 relative">
              <div className="timeline-dot" style={{ top: "6px" }} />
              <div className="card-elevated">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Briefcase size={18} className="text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-sm font-mono text-primary">@ {exp.company}</span>
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
