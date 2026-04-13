import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { MapPin, Calendar } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-primary uppercase">Experience</h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">Professional Journey</h3>
          <div className="relative border-l-2 border-primary/30 pl-8">
            {experience.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative mb-12 last:mb-0">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                  <p className="mt-1 text-lg font-medium text-primary">{exp.company}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{t}</span>
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
