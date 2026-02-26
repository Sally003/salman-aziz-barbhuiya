import { ArrowRight, Download, Mail, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import DataBackground from "./DataBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <DataBackground />

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38_92%_50%/0.06)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            {/* Intro label */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">
                — Introduction
              </span>
            </div>

            {/* Name */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">Salman
Aziz Barbhuiya
                <br />
                <span className="text-primary">Aziz.</span>
              </h1>
            </div>

            {/* Description */}
            <div className="opacity-0 animate-fade-in-up space-y-4" style={{ animationDelay: "0.45s" }}>
              <p className="text-lg text-foreground font-medium">
                Data Analyst &amp; Risk Specialist, based in India.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                CSE graduate with strong analytical expertise — experienced in
                data-driven decision-making, fraud detection, and ML-based automation.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <a href="#about" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300 group">
                My story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/salman-aziz-barbhuiya" },
              { icon: Github, href: "#" },
              { icon: Mail, href: "mailto:salmanwrk009@gmail.com" }].
              map((s, i) =>
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors">

                  <s.icon size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="opacity-0 animate-fade-in-up flex justify-center md:justify-end" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-border">
                <img
                  src={profilePhoto}
                  alt="Salman Aziz Barbhuiya"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row at bottom */}
        <div className="mt-20 pt-8 border-t border-border grid grid-cols-3 gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.85s" }}>
          {[
          { value: "1+", label: "Years of Experience." },
          { value: "6+", label: "Projects Completed." },
          { value: "3", label: "Internships Done." }].
          map((stat) =>
          <div key={stat.label} className="flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-display font-black text-primary">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default HeroSection;