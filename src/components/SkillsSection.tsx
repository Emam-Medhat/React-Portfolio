import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-highlight"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-primary uppercase">Skills</h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">Technical Expertise</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.values(skills).map((category) => (
              <div key={category.title} className="glass-card rounded-xl p-6">
                <h4 className="mb-5 text-lg font-semibold text-primary">{category.title}</h4>
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
