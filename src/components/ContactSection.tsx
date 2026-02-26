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
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — Info */}
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
                { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/salman-aziz-barbhuiya" },
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
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={150}>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
              />
              <button type="submit" disabled={sending} className="btn-hero-primary w-full justify-center">
                <Send size={18} /> {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
