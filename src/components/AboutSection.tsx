import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Globe } from "lucide-react";
import { profile } from "@/data/portfolio";

const highlights = [
  { icon: Briefcase, label: "3+ Years Experience", desc: "Building enterprise-grade apps" },
  { icon: Code2, label: "10+ Projects Delivered", desc: "SaaS, ERP, E-Commerce & more" },
  { icon: Globe, label: "Remote-First Developer", desc: "USA, Saudi Arabia, Jordan, Egypt" },
  { icon: MapPin, label: profile.location, desc: "Open to global remote work" },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">About Me</h2>
          <h3 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">Crafting Digital <span className="gradient-text">Experiences</span></h3>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
                I'm a passionate Full-Stack Developer based in Cairo, Egypt, specializing in <span className="font-semibold text-primary">Laravel</span> and <span className="font-semibold text-primary">Vue.js</span>. With over 3 years of experience, I've built everything from multi-tenant SaaS platforms to enterprise ERP systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
                I focus on clean architecture, performance optimization, and delivering exceptional user experiences. I thrive in remote teams and have collaborated with companies across the USA, Saudi Arabia, Jordan, and Egypt.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
                When I'm not coding, I'm exploring new technologies, contributing to open source, and continuously learning to stay at the forefront of web development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              {highlights.map((h, i) => (
                <motion.div key={h.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card flex flex-col items-center justify-center rounded-2xl p-8 text-center transition-all hover:scale-105 hover:glow-primary">
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
