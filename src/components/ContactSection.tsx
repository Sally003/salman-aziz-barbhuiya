import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder – would integrate with backend
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <AnimatedSection className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm open to opportunities in Data Analytics, Risk Analysis, and Software Development.
              Let's connect!
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "salmanaziz.barbhuiya@gmail.com", href: "mailto:salmanaziz.barbhuiya@gmail.com" },
                { icon: Phone, text: "+91 7577065730", href: "tel:+917577065730" },
                { icon: Linkedin, text: "LinkedIn Profile", href: "https://linkedin.com/in/salmanaziz" },
                { icon: MapPin, text: "Assam, India", href: "#" },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={150}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
              />
              <button type="submit" className="btn-hero-primary w-full justify-center">
                <Send size={18} /> Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
