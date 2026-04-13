import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-primary uppercase">Projects</h2>
          <h3 className="mb-8 text-center text-3xl font-bold md:text-4xl">Featured Work</h3>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)} className={`rounded-lg px-5 py-2 text-sm font-medium transition-all ${active === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {filtered.map((project) => (
                <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="glass-card group rounded-xl p-6 transition-all hover:glow-primary">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{project.category}</span>
                    <ExternalLink size={16} className="text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-foreground">{project.title}</h4>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
