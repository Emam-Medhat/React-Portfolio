import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { MapPin, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ExperienceSection() {
  const { t, language, isRtl } = useLanguage();
  const currentExperience = experience[language];

  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">
            {t("experience.title")}
          </h2>
          <h3 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            {language === 'en' ? (
              <>Professional <span className="gradient-text">Journey</span></>
            ) : (
              <>المسيرة <span className="gradient-text">المهنية</span></>
            )}
          </h3>
          
          <div className={`relative ${isRtl ? 'border-r-2 pr-10' : 'border-l-2 pl-10'} border-primary/30`}>
            {currentExperience.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: isRtl ? 30 : -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15, duration: 0.5 }} 
                className={`relative mb-14 last:mb-0 ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <div className={`absolute top-2 h-5 w-5 rounded-full border-3 border-primary bg-background ${isRtl ? '-right-[51px]' : '-left-[51px]'}`} />
                <div className="glass-card-hover rounded-2xl p-8 transition-all">
                  <h4 className="text-2xl font-bold text-foreground">{exp.role}</h4>
                  <p className="mt-2 text-xl font-semibold text-primary">{exp.company}</p>
                  <div className={`mt-3 flex flex-wrap gap-5 text-sm text-muted-foreground md:text-base ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <span className="flex items-center gap-2"><Calendar size={16} /> {exp.period}</span>
                    <span className="flex items-center gap-2"><MapPin size={16} /> {exp.location}</span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className={`flex items-start gap-3 text-base text-muted-foreground ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-5 flex flex-wrap gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
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
