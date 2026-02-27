import { ArrowRight, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import DataBackground from "./DataBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <DataBackground />

      {/* Profile photo as background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src={profilePhoto}
          alt="Salman Aziz Barbhuiya"
          className="h-full max-h-[90vh] object-contain opacity-40 md:opacity-50"
        />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38_92%_50%/0.06)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="section-container relative z-10 py-20 md:py-28">
        {/* Top nav area with logo and links */}
        <div className="flex items-center justify-between mb-16 md:mb-24 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
        </div>

        {/* Main hero grid — name on left overlapping photo */}
        <div className="grid md:grid-cols-12 gap-8 items-end">
          {/* Left — Large Name */}
          <div className="md:col-span-7 space-y-6">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-foreground">
                Salman
                <br />
                Aziz
                <br />
                <span className="text-primary">Barbhuiya.</span>
              </h1>
            </div>

            {/* Social icons below name */}
            <div className="flex items-center gap-5 opacity-0 animate-fade-in-up pt-6" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://www.linkedin.com/in/salman900236/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Sally003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Center — removed, photo is now background */}

          {/* Right — Introduction */}
          <div className="md:col-span-5 space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">
              — Introduction
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug">
              Data Analyst &amp; Risk Specialist, based in India.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CSE graduate with strong analytical expertise — experienced in
              data-driven decision-making, fraud detection, and ML-based automation.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300 group"
            >
              My story{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Stats row at bottom */}
        <div
          className="mt-20 pt-8 border-t border-border grid grid-cols-3 gap-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          {[
            { value: "1+", label: "Years of Experience." },
            { value: "6+", label: "Projects Completed." },
            { value: "3", label: "Internships Done." },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-display font-black text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
