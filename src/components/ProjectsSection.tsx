import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">Projects</h2>
          <h3 className="mb-10 text-center text-4xl font-bold md:text-5xl lg:text-6xl">Featured <span className="gradient-text">Work</span></h3>
          
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)} className={`rounded-xl px-6 py-3 text-base font-semibold transition-all ${active === c ? "bg-primary text-primary-foreground scale-105" : "bg-secondary text-secondary-foreground hover:bg-accent hover:scale-105"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {filtered.map((project) => (
                <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35 }} className="glass-card group overflow-hidden rounded-2xl transition-all hover:scale-[1.03] hover:glow-primary">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} loading="lazy" width={800} height={512} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background/80 text-foreground opacity-0 transition-all group-hover:opacity-100">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                  
                  <div className="p-7">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{project.category}</span>
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-foreground">{project.title}</h4>
                    <p className="mb-5 text-base text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">{t}</span>
                      ))}
                    </div>
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
