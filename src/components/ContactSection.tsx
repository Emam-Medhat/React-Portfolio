import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">Contact</h2>
          <h3 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">Let's Work <span className="gradient-text">Together</span></h3>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h4 className="mb-8 text-2xl font-bold">Get in Touch</h4>
              <div className="space-y-6">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-5 text-lg text-muted-foreground transition-colors hover:text-primary">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10"><Mail size={22} className="text-primary" /></div>
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="flex items-center gap-5 text-lg text-muted-foreground transition-colors hover:text-primary">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10"><Phone size={22} className="text-primary" /></div>
                  {profile.phone}
                </a>
                <div className="flex items-center gap-5 text-lg text-muted-foreground">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10"><MapPin size={22} className="text-primary" /></div>
                  {profile.location}
                </div>
              </div>
              <div className="mt-10 flex gap-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"><GithubIcon size={22} /></a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"><LinkedinIcon size={22} /></a>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass-card space-y-5 rounded-2xl p-8">
              {sent ? (
                <div className="flex h-full min-h-[300px] items-center justify-center text-center">
                  <div>
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <Send className="text-primary" size={32} />
                    </div>
                    <p className="text-2xl font-bold text-foreground">Message Sent!</p>
                    <p className="mt-3 text-lg text-muted-foreground">I'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <>
                  <input type="text" placeholder="Your Name" required className="w-full rounded-xl bg-input px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="email" placeholder="Your Email" required className="w-full rounded-xl bg-input px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="text" placeholder="Subject" className="w-full rounded-xl bg-input px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <textarea placeholder="Your Message" rows={5} required className="w-full rounded-xl bg-input px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.02] hover:glow-primary">
                    <Send size={20} /> Send Message
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
