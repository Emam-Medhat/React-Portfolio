import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { MapPin, Calendar } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">Experience</h2>
          <h3 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">Professional <span className="gradient-text">Journey</span></h3>
          
          <div className="relative border-l-2 border-primary/30 pl-10">
            {experience.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="relative mb-14 last:mb-0">
                <div className="absolute -left-[45px] top-2 h-5 w-5 rounded-full border-3 border-primary bg-background" />
                <div className="glass-card rounded-2xl p-8 transition-all hover:glow-primary">
                  <h4 className="text-2xl font-bold text-foreground">{exp.role}</h4>
                  <p className="mt-2 text-xl font-semibold text-primary">{exp.company}</p>
                  <div className="mt-3 flex flex-wrap gap-5 text-sm text-muted-foreground md:text-base">
                    <span className="flex items-center gap-2"><Calendar size={16} /> {exp.period}</span>
                    <span className="flex items-center gap-2"><MapPin size={16} /> {exp.location}</span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-base text-muted-foreground">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
