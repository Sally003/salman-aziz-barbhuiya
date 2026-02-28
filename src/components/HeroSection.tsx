import { ArrowRight, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import DataBackground from "./DataBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <DataBackground />

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38_92%_50%/0.05)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="section-container relative z-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left — Text content */}
          <div className="md:col-span-6 lg:col-span-7 space-y-8">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase mb-4 block">
                — Introduction
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-foreground">
                Salman
                <br />
                Aziz
                <br />
                <span className="text-primary">Barbhuiya.</span>
              </h1>
            </div>

            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                Data Analyst &amp; Risk Specialist
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 max-w-md">
                CSE graduate with strong analytical expertise — experienced in
                data-driven decision-making, fraud detection, and ML-based automation.
              </p>
            </div>

            <div className="flex items-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
              >
                My story
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/salman900236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://github.com/Sally003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Profile photo */}
          <div className="md:col-span-6 lg:col-span-5 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-2xl border border-primary/20 pointer-events-none" />
              <div className="absolute -inset-6 rounded-3xl border border-border/40 pointer-events-none" />
              {/* Glow */}
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,_hsl(38_92%_50%/0.08)_0%,_transparent_70%)] pointer-events-none" />
              <img
                src={profilePhoto}
                alt="Salman Aziz Barbhuiya"
                className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] object-cover object-top rounded-xl shadow-2xl shadow-background/80"
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 md:mt-20 pt-8 border-t border-border grid grid-cols-3 gap-8 opacity-0 animate-fade-in-up"
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
