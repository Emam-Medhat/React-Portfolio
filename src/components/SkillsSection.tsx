import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between text-sm md:text-base">
        <span className="font-medium text-foreground">{name}</span>
        <span className="font-semibold text-primary">{level}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-highlight"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">Skills</h2>
          <h3 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">Technical <span className="gradient-text">Expertise</span></h3>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.values(skills).map((category) => (
              <div key={category.title} className="glass-card rounded-2xl p-8 transition-all hover:glow-primary">
                <h4 className="mb-6 text-xl font-bold text-primary md:text-2xl">{category.title}</h4>
                {category.items.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
