import { ArrowDown, Download, Mail, FolderOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import DataBackground from "./DataBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DataBackground />

      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile Photo */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
                <img
                  src={profilePhoto}
                  alt="Salman Aziz Barbhuiya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full border border-primary/10 animate-pulse-slow" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left flex-1">
            <p
              className="text-sm font-mono text-primary mb-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Hello, I'm
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Salman Aziz
              <br />
              <span className="gradient-text">Barbhuiya</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground font-medium mb-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Data Analyst · Risk Analyst · Python Developer
            </p>
            <p
              className="text-sm text-muted-foreground/70 mb-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.55s" }}
            >
              Machine Learning & Business Intelligence Enthusiast
            </p>
            <p
              className="text-base text-muted-foreground max-w-xl mt-4 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Computer Science & Engineering graduate with strong analytical expertise.
              Experienced in data-driven decision-making, fraud detection, and ML-based
              automation — focused on improving system efficiency and reducing manual errors.
            </p>

            {/* CTA */}
            <div
              className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <a href="#projects" className="btn-hero-primary">
                <FolderOpen size={18} /> View Projects
              </a>
              <a href="#contact" className="btn-hero-outline">
                <Mail size={18} /> Contact Me
              </a>
              <a href="#" className="btn-hero-outline">
                <Download size={18} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <a href="#about" className="text-muted-foreground/50 hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
