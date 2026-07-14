import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import FloatingShapes from "../components/FloatingShapes";
import Button from "../components/Button";
import { profile } from "../data/profile";

const contactItems = [
  { icon: FaEnvelope, label: "Email", value: profile.email, href: profile.socials.email },
  { icon: FaPhoneAlt, label: "Phone", value: profile.phone, href: profile.socials.phone },
  { icon: FaLinkedin, label: "LinkedIn", value: "vinit-srivastava", href: profile.socials.linkedin },
  { icon: FaGithub, label: "GitHub", value: "VinitSrivastava2002", href: profile.socials.github },
  { icon: FaMapMarkerAlt, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `${profile.socials.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[var(--color-ink)] text-white overflow-hidden">
      <FloatingShapes variant="contact" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="section-eyebrow mb-3">Let's Connect</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Can we start with a "hi"?
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Have a role, freelance project, or just want to talk shop? My inbox is open.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const Comp = href ? "a" : "div";
              return (
                <Comp
                  key={label}
                  href={href}
                  target={href && !href.startsWith("mailto") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass !bg-white/5 !border-white/10 rounded-2xl p-5 hover:!bg-white/10 transition-colors duration-300"
                >
                  <span className="w-11 h-11 rounded-xl bg-[var(--color-azure)] flex items-center justify-center shrink-0">
                    <Icon />
                  </span>
                  <span>
                    <p className="text-xs font-mono text-white/50">{label}</p>
                    <p className="font-medium">{value}</p>
                  </span>
                </Comp>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass !bg-white/5 !border-white/10 rounded-3xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-mono text-white/50 mb-1.5 block">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--color-azure-2)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-white/50 mb-1.5 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--color-azure-2)] transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-white/50 mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--color-azure-2)] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button as="button" variant="primary" className="w-full justify-center !bg-[var(--color-azure)] hover:!bg-white hover:!text-[var(--color-ink)]">
              {sent ? "Opening your email client…" : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
