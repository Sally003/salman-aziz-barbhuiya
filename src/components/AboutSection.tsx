import { GraduationCap, Target, Users, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const metrics = [
{ label: "Projects Completed", value: "10+", icon: Target },
{ label: "Fraud Detection Boost", value: "20%", icon: BarChart3 },
{ label: "Error Reduction", value: "40%", icon: Target },
{ label: "Automation Gain", value: "30%", icon: BarChart3 }];


const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">— About</span>
          <h2 className="font-display text-3xl md:text-4xl font-black mt-3 mb-10">
            Who I <span className="text-primary">Am</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
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
              analytics, fraud detection, risk mitigation, and ML-based automation.
            </p>

            <div className="flex items-start gap-3 mt-4">
              <Users className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-medium mb-1">Soft Skills</p>
                <p className="text-muted-foreground text-sm">
                  Communication · Collaboration · Data Storytelling · Cross-functional Teamwork
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-2 gap-4">
            {metrics.map((m) =>
            <div key={m.label} className="card-elevated flex flex-col items-center text-center p-5">
                <m.icon className="text-primary mb-3" size={24} />
                <span className="metric-value">{m.value}</span>
                <span className="text-xs text-muted-foreground mt-1">{m.label}</span>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>);

};

export default AboutSection;