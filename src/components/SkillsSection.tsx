import { Code, Database, Brain, Globe, MessageSquare } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "SQL", "C/C++"],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: ["Power BI", "Excel", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"],
  },
  {
    title: "ML & Computer Vision",
    icon: Brain,
    skills: ["YOLOv8", "OpenCV", "EasyOCR", "MediaPipe", "NLP", "Seq2Seq Models"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    skills: ["Communication", "Collaboration", "Data Storytelling", "Cross-functional Teamwork"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">— Skills</span>
          <h2 className="font-display text-3xl md:text-4xl font-black mt-3 mb-12">
            Technical <span className="text-primary">Stack.</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 100} className="card-elevated group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-badge">{s}</span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
