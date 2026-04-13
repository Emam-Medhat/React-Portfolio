import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Globe } from "lucide-react";
import { profile } from "@/data/portfolio";

const highlights = [
  { icon: Briefcase, label: "3+ Years Experience" },
  { icon: Code2, label: "10+ Projects Delivered" },
  { icon: Globe, label: "Remote-First Developer" },
  { icon: MapPin, label: profile.location },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-primary uppercase">About Me</h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">Crafting Digital Experiences</h3>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                I'm a passionate Full-Stack Developer based in Cairo, Egypt, specializing in Laravel and Vue.js. With over 3 years of experience, I've built everything from multi-tenant SaaS platforms to enterprise ERP systems.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                I focus on clean architecture, performance optimization, and delivering exceptional user experiences. I thrive in remote teams and have collaborated with companies across the USA, Saudi Arabia, Jordan, and Egypt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open source, and continuously learning to stay at the forefront of web development.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="glass-card flex flex-col items-center justify-center rounded-xl p-6 text-center">
                  <h.icon className="mb-3 text-primary" size={28} />
                  <p className="text-sm font-medium text-foreground">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
