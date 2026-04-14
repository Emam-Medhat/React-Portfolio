import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsSection() {
  const { t, language, isRtl } = useLanguage();
  const currentProjects = projects[language];

  // Derive categories from current language projects
  const categories = useMemo(() => {
    const allLabel = language === 'en' ? "All" : "الكل";
    const uniqueCats = Array.from(new Set(currentProjects.map((p) => p.category)));
    return [allLabel, ...uniqueCats];
  }, [currentProjects, language]);

  const [active, setActive] = useState(language === 'en' ? "All" : "الكل");

  // Filter projects based on active category
  const filtered = useMemo(() => {
    const allLabel = language === 'en' ? "All" : "الكل";
    return active === allLabel 
      ? currentProjects 
      : currentProjects.filter((p) => p.category === active);
  }, [active, currentProjects, language]);

  // Reset active category when language changes
  useMemo(() => {
    setActive(language === 'en' ? "All" : "الكل");
  }, [language]);

  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">
            {t("nav.projects")}
          </h2>
          <h3 className="mb-10 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            {language === 'en' ? (
              <>Featured <span className="gradient-text">Work</span></>
            ) : (
              <>أبرز <span className="gradient-text">الأعمال</span></>
            )}
          </h3>
          
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button 
                key={c} 
                onClick={() => setActive(c)} 
                className={`rounded-xl px-6 py-3 text-base font-semibold transition-all ${active === c ? "bg-primary text-primary-foreground scale-105" : "bg-secondary text-secondary-foreground hover:bg-accent hover:scale-105"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {filtered.map((project) => (
                <motion.div 
                  key={project.title} 
                  layout 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }} 
                  transition={{ duration: 0.35 }} 
                  className={`glass-card-hover group overflow-hidden rounded-2xl transition-all hover:scale-[1.03] ${isRtl ? 'text-right' : 'text-left'}`}
                >
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} loading="lazy" width={800} height={512} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className={`absolute top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background/80 text-foreground opacity-0 transition-all group-hover:opacity-100 ${isRtl ? 'left-4' : 'right-4'}`}>
                      <ExternalLink size={18} />
                    </div>
                  </div>
                  
                  <div className="p-7">
                    <div className={`mb-3 flex items-center ${isRtl ? 'justify-end' : 'justify-between'}`}>
                      <span className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{project.category}</span>
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-foreground">{project.title}</h4>
                    <p className="mb-5 text-base text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
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
