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
    <section id="skills" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
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
