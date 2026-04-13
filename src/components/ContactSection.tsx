import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-primary uppercase">Contact</h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">Let's Work Together</h3>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h4 className="mb-6 text-xl font-semibold">Get in Touch</h4>
              <div className="space-y-5">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Mail size={18} className="text-primary" /></div>
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Phone size={18} className="text-primary" /></div>
                  {profile.phone}
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><MapPin size={18} className="text-primary" /></div>
                  {profile.location}
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"><Github size={18} /></a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"><Linkedin size={18} /></a>
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass-card space-y-4 rounded-xl p-6">
              {sent ? (
                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Send className="text-primary" size={24} />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Message Sent!</p>
                    <p className="mt-2 text-sm text-muted-foreground">I'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <>
                  <input type="text" placeholder="Your Name" required className="w-full rounded-lg bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="email" placeholder="Your Email" required className="w-full rounded-lg bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="text" placeholder="Subject" className="w-full rounded-lg bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <textarea placeholder="Your Message" rows={4} required className="w-full rounded-lg bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-all hover:glow-primary">
                    <Send size={16} /> Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
