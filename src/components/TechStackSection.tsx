import { motion } from "framer-motion";
import { techIcons } from "@/data/portfolio";

export default function TechStackSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">Tech Stack</h2>
          <h3 className="mb-14 text-center text-4xl font-bold md:text-5xl">Technologies I <span className="gradient-text">Use</span></h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techIcons.map((tech, i) => (
              <motion.div key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card flex items-center gap-2 rounded-xl px-5 py-3 text-base font-medium text-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary">
                <span className="text-lg">⚡</span> {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
