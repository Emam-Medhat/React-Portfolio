import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { useLanguage } from "../context/LanguageContext";

function SkillBar({ name, level, delay, isRtl }: { name: string; level: number; delay: number; isRtl: boolean }) {
  return (
    <div className="mb-5">
      <div className={`mb-2 flex items-center justify-between text-sm md:text-base ${isRtl ? 'flex-row-reverse' : ''}`}>
        <span className="font-medium text-foreground">{name}</span>
        <span className="font-semibold text-primary">{level}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay }}
          className={`h-full rounded-full bg-gradient-to-r ${isRtl ? 'from-highlight to-primary' : 'from-primary to-highlight'}`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { t, language, isRtl } = useLanguage();
  const currentSkills = skills[language];

  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">
            {t("nav.skills")}
          </h2>
          <h3 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            {language === 'en' ? (
              <>Technical <span className="gradient-text">Expertise</span></>
            ) : (
              <>الخبرة <span className="gradient-text">التقنية</span></>
            )}
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.values(currentSkills).map((category) => (
              <div key={category.title} className={`glass-card-hover rounded-2xl p-8 transition-all ${isRtl ? 'text-right' : 'text-left'}`}>
                <h4 className="mb-6 text-xl font-bold text-primary md:text-2xl">{category.title}</h4>
                {category.items.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} isRtl={isRtl} />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
