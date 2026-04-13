import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">Testimonials</h2>
          <h3 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">What Clients <span className="gradient-text">Say</span></h3>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="glass-card rounded-2xl p-8 transition-all hover:scale-105 hover:glow-primary">
                <Quote className="mb-5 text-primary/40" size={36} />
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-8 text-base text-muted-foreground leading-relaxed italic md:text-lg">"{t.text}"</p>
                <div>
                  <p className="text-lg font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
