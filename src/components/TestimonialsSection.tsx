import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-primary uppercase">Testimonials</h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">What Clients Say</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass-card rounded-xl p-6">
                <Quote className="mb-4 text-primary/40" size={28} />
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
