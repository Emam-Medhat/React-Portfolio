import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profile, stats } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-highlight/6 blur-[80px]" />
        <div className="absolute right-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-6 text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">Full-Stack Developer</p>
          <h1 className="mb-6 text-6xl font-extrabold leading-[1.1] tracking-tight md:text-8xl lg:text-9xl">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-xl font-medium text-muted-foreground md:text-2xl">
            {profile.subtitle}
          </p>
          <p className="mx-auto mb-10 max-w-3xl text-base text-muted-foreground leading-relaxed md:text-lg">
            {profile.summary}
          </p>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-5">
            <a href="#contact" className="rounded-2xl bg-primary px-10 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-105 hover:glow-primary">
              Hire Me
            </a>
            <a href="/Emam_Medhat_FullStack_Developer.pdf" download className="rounded-2xl border-2 border-border px-10 py-4 text-lg font-bold text-foreground transition-all hover:bg-secondary hover:scale-105">
              Download CV
            </a>
          </div>

          <div className="mb-12 flex items-center justify-center gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110">
              <GithubIcon size={24} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110">
              <LinkedinIcon size={24} />
            </a>
            <a href={`mailto:${profile.email}`} className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-7 text-center transition-all hover:scale-105 hover:glow-primary">
              <p className="text-4xl font-extrabold text-primary md:text-5xl">{s.value}+</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-16 inline-block animate-bounce text-muted-foreground">
          <ArrowDown size={32} />
        </motion.a>
      </div>
    </section>
  );
}
