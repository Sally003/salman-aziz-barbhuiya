import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import DataBackground from "./DataBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <DataBackground />

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38_92%_50%/0.06)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220_20%_8%/0.8)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="section-container relative z-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Left — Typography & CTAs */}
          <div className="md:col-span-7 space-y-7">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-mono text-primary tracking-[0.25em] uppercase">
                <span className="w-8 h-px bg-primary inline-block" />
                Data Analyst &amp; Risk Specialist
              </span>
            </div>

            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.92] tracking-tight text-foreground">
                Salman
                <br />
                Aziz
                <br />
                <span className="text-primary">Barbhuiya.</span>
              </h1>
            </div>

            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                CSE graduate with strong analytical expertise — specializing in
                data-driven decision-making, fraud detection, and ML-based automation
                to deliver measurable impact.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
              >
                Explore My Work
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://drive.google.com/file/d/1E2mjo_IFY7qwPXF-D8l9NeU3AM5vCnDW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-3 pt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
              <a
                href="https://www.linkedin.com/in/salman900236/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/Sally003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Right — Glassmorphism portrait card */}
          <div className="md:col-span-5 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <div className="relative group">
              {/* Ambient glow behind the card */}
              <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(ellipse_at_center,_hsl(38_92%_50%/0.12)_0%,_transparent_70%)] blur-2xl pointer-events-none transition-all duration-500 group-hover:scale-105" />

              {/* Glassmorphism card */}
              <div className="relative rounded-2xl p-2 bg-card/40 backdrop-blur-xl border border-border/60 shadow-2xl shadow-background/60">
                {/* Inner subtle border */}
                <div className="rounded-xl overflow-hidden border border-border/30">
                  <img
                    src={profilePhoto}
                    alt="Salman Aziz Barbhuiya — Data Analyst"
                    className="w-64 sm:w-72 md:w-80 lg:w-[22rem] aspect-[3/4] object-cover object-top"
                  />
                </div>

                {/* Name plate at bottom of card */}
                <div className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-foreground">Salman A. Barbhuiya</p>
                    <p className="text-[10px] text-muted-foreground font-mono">Data &amp; Risk Analyst</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
                </div>
              </div>

              {/* Floating accent dot */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 animate-float pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-20 pt-8 border-t border-border/60 grid grid-cols-3 gap-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { value: "1+", label: "Years Experience" },
            { value: "6+", label: "Projects Delivered" },
            { value: "3", label: "Internships" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-display font-black text-primary leading-none">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
