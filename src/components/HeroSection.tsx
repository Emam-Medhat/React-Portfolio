import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-highlight/5 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">Full-Stack Developer</p>
          <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">{profile.summary}</p>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:glow-primary">Hire Me</a>
            <a href="/Emam_Medhat_FullStack_Developer.pdf" download className="rounded-xl border border-border px-8 py-3 font-semibold text-foreground transition-all hover:bg-secondary">Download CV</a>
          </div>
          <div className="mb-10 flex items-center justify-center gap-5">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary"><Github size={22} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin size={22} /></a>
            <a href={`mailto:${profile.email}`} className="text-muted-foreground transition-colors hover:text-primary"><Mail size={22} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-primary">{s.value}+</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
        <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-12 inline-block animate-bounce text-muted-foreground">
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
}
