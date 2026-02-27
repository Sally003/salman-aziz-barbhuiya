import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_u9w9jw7",
        "template_irq873m",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "MrPw6MsIrx45LPWCZ"
      );
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-container">
        {/* Top row: Contact info + Quote */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left — Contact info */}
          <AnimatedSection className="space-y-8">
            <div>
              <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">— Contact</span>
              <h2 className="font-display text-3xl md:text-4xl font-black mt-3">
                Any Type Of Query
                <br />
                &amp; Discussion.
              </h2>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-sm">
                I'm open to opportunities in Data Analytics, Risk Analysis, and Software Development.
                Let's connect!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "salmanwrk009@gmail.com", href: "mailto:salmanwrk009@gmail.com" },
                { icon: Phone, text: "+91 7577065730", href: "tel:+917577065730" },
                { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/salman900236/" },
                { icon: MapPin, text: "Bangalore, Karnataka, India", href: "#" },
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

            <a
              href="mailto:salmanwrk009@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all group"
            >
              salmanwrk009@gmail.com <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedSection>

          {/* Right — Inspirational quote + stats */}
          <AnimatedSection delay={150} className="space-y-10">
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug">
                You can't use up creativity,
                <br />
                the more you use, more you have
                <br />
                in your significant mind.
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-md">
                Driven by curiosity and a passion for turning raw data into meaningful insights that
                empower better decisions.
              </p>
            </div>

            <div className="flex items-end gap-12">
              {[
                { value: "1+", label: "Years of\nExperience." },
                { value: "6+", label: "Projects\nCompleted." },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-4xl md:text-5xl font-display font-black text-primary">{stat.value}</span>
                  <span className="block text-xs text-muted-foreground mt-1 whitespace-pre-line">{stat.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Form section */}
        <AnimatedSection delay={200}>
          <div className="border-t border-border pt-12">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Estimate your project?
              <br />
              <span className="text-primary">Let me know here.</span>
            </h3>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 max-w-2xl">
              <input
                type="text"
                placeholder="What's your name?"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none md:col-span-2"
              />
              <button type="submit" disabled={sending} className="btn-hero-primary w-full justify-center md:col-span-2 max-w-xs">
                <Send size={18} /> {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
