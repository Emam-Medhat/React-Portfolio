import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Globe } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { t, language, isRtl } = useLanguage();
  const currentProfile = profile[language];

  const highlights = language === 'en' ? [
    { icon: Briefcase, label: "3+ Years Experience", desc: "Building enterprise-grade apps" },
    { icon: Code2, label: "10+ Projects Delivered", desc: "SaaS, ERP, E-Commerce & more" },
    { icon: Globe, label: "Remote-First Developer", desc: "USA, Saudi Arabia, Jordan, Egypt" },
    { icon: MapPin, label: currentProfile.location, desc: "Open to global remote work" },
  ] : [
    { icon: Briefcase, label: "خبرة +3 سنوات", desc: "بناء تطبيقات لشركات كبرى" },
    { icon: Code2, label: "أكثر من 10 مشاريع", desc: "SaaS, ERP, تجارة إلكترونية والمزيد" },
    { icon: Globe, label: "مطور يعمل عن بعد", desc: "أمريكا، السعودية، الأردن، مصر" },
    { icon: MapPin, label: currentProfile.location, desc: "متاح للعمل عن بعد عالمياً" },
  ];

  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">
            {t("about.title")}
          </h2>
          <h3 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            {language === 'en' ? (
              <>Crafting Digital <span className="gradient-text">Experiences</span></>
            ) : (
              <>ابتكار تجارب <span className="gradient-text">رقمية متميزة</span></>
            )}
          </h3>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div className={`space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
                {language === 'en' ? (
                  <>I'm a passionate Full-Stack Developer based in Cairo, Egypt, specializing in <span className="font-semibold text-primary">Laravel</span> and <span className="font-semibold text-primary">Vue.js</span>. With over 3 years of experience, I've built everything from multi-tenant SaaS platforms to enterprise ERP systems.</>
                ) : (
                  <>أنا مطور واجهات أمامية وخلفية (Full-Stack) مقيم في القاهرة، مصر، متخصص في <span className="font-semibold text-primary">Laravel</span> و <span className="font-semibold text-primary">Vue.js</span>. مع خبرة تزيد عن 3 سنوات، قمت ببناء كل شيء من منصات SaaS متعددة المستأجرين إلى أنظمة ERP للمؤسسات.</>
                )}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
                {language === 'en' ? (
                  <>I focus on clean architecture, performance optimization, and delivering exceptional user experiences. I thrive in remote teams and have collaborated with companies across the USA, Saudi Arabia, Jordan, and Egypt.</>
                ) : (
                  <>أركز على العمارة البرمجية النظيفة، وتحسين الأداء، وتقديم تجارب مستخدم استثنائية. أتألق في الفرق التي تعمل عن بعد وقد تعاونت مع شركات في أمريكا، السعودية، الأردن، ومصر.</>
                )}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
                {language === 'en' ? (
                  <>When I'm not coding, I'm exploring new technologies, contributing to open source, and continuously learning to stay at the forefront of web development.</>
                ) : (
                  <>عندما لا أقوم بالبرمجة، أقوم باستكشاف تقنيات جديدة، والمساهمة في المصادر المفتوحة، والتعلم المستمر للبقاء في طليعة تطوير الويب.</>
                )}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              {highlights.map((h, i) => (
                <motion.div 
                  key={h.label} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.1 }} 
                  className="glass-card-hover flex flex-col items-center justify-center rounded-2xl p-8 text-center transition-all hover:scale-105"
                >
                  <h.icon className="mb-4 text-primary" size={36} />
                  <p className="text-base font-bold text-foreground">{h.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
