import { GraduationCap, Target, Users, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const metrics = [
  { label: "Projects Completed", value: "10+", icon: Target },
  { label: "Fraud Detection Boost", value: "20%", icon: BarChart3 },
  { label: "Error Reduction", value: "40%", icon: Target },
  { label: "Automation Gain", value: "30%", icon: BarChart3 },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — text */}
          <AnimatedSection className="space-y-5">
            <div className="flex items-start gap-3 mb-4">
              <GraduationCap className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">B.Tech in Computer Science & Engineering (2024)</strong>
                <br />
                Dhemaji Engineering College, Assam — under Assam Science and Technology University.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Grew up in and around Army cantonment environments; educated at Army Public School.
              This upbringing instilled a <strong className="text-foreground">disciplined, structured work ethic</strong> and a
              strong analytical mindset.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I specialize in <strong className="text-foreground">data-driven decision-making</strong>, customer behavior
              analytics, fraud detection, risk mitigation, and ML-based automation. Continuously
              expanding my expertise across computer science domains.
            </p>

            <div className="flex items-start gap-3 mt-4">
              <Users className="text-accent mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-medium mb-1">Soft Skills</p>
                <p className="text-muted-foreground text-sm">
                  Communication · Collaboration · Data Storytelling · Cross-functional Teamwork
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — metrics */}
          <AnimatedSection className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="card-elevated flex flex-col items-center text-center p-5">
                <m.icon className="text-primary mb-3" size={24} />
                <span className="metric-value">{m.value}</span>
                <span className="text-xs text-muted-foreground mt-1">{m.label}</span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
