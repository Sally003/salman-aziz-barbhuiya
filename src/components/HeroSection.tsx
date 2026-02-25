import { ArrowDown, Download, Mail, FolderOpen, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import DataBackground from "./DataBackground";

const roles = ["Data Analyst", "Risk Analyst", "Python Developer"];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(250,50%,15%)] via-[hsl(260,45%,20%)] to-[hsl(220,50%,12%)] text-white">
      <DataBackground />

      {/* Vibrant radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(250_80%_65%/0.25)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(172_66%_45%/0.2)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Photo */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative group">
              {/* Animated ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/10 blur-sm group-hover:blur-md transition-all duration-500" />
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
                <img
                  src={profilePhoto}
                  alt="Salman Aziz Barbhuiya"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Status dot */}
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-accent border-2 border-background shadow-lg shadow-accent/40" />
            </div>
          </div>

          {/* Badge */}
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-white/10 text-emerald-300 border border-emerald-400/30 backdrop-blur-sm">
              <Sparkles size={12} className="text-emerald-300" />
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <p
              className="text-sm font-mono text-white/50 tracking-widest uppercase opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.35s" }}
            >
              Hello, I'm
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight opacity-0 animate-fade-in-up text-white"
              style={{ animationDelay: "0.45s" }}
            >
              Salman Aziz
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-teal-300">Barbhuiya</span>
            </h1>
          </div>

          {/* Roles as pills */}
          <div
            className="flex flex-wrap justify-center gap-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.55s" }}
          >
            {roles.map((role) => (
              <span
                key={role}
                className="px-4 py-1.5 rounded-md bg-white/10 text-white/80 text-sm font-medium border border-white/10 backdrop-blur-sm"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <p
            className="text-sm text-white/40 font-mono opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Machine Learning &amp; Business Intelligence Enthusiast
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.65s" }}
          >
            CSE graduate with strong analytical expertise — experienced in
            data-driven decision-making, fraud detection, and ML-based automation.
          </p>

          {/* CTA */}
          <div
            className="flex flex-wrap gap-3 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.75s" }}
          >
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 group">
              <FolderOpen size={18} className="transition-transform group-hover:-translate-y-0.5" /> View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 hover:scale-105">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 hover:scale-105">
              <Download size={18} /> Resume
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex items-center gap-8 md:gap-12 mt-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            {[
              { value: "1+", label: "Years Exp." },
              { value: "6+", label: "Projects" },
              { value: "3", label: "Internships" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-teal-300">{stat.value}</p>
                <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.3s" }}>
          <a href="#about" className="flex flex-col items-center gap-1 text-white/30 hover:text-violet-300 transition-colors">
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
