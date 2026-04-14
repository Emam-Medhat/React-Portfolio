import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Mail, Sparkles, Code2, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profile, stats } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";
import BackendCodeShowcase from "./BackendCodeShowcase";
import { useLanguage } from "../context/LanguageContext";

// ─── Typewriter Hook ──────────────────────────────────────────────
function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  useEffect(() => {
    if (!words || words.length === 0) return;
    setDisplay(words[wordIdx].slice(0, charIdx));
  }, [charIdx, wordIdx, words]);

  return display;
}

// ─── Animated Counter ─────────────────────────────────────────────
function AnimatedCounter({ value, delay }: { value: number; delay: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay * 1000 + 800);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(value / 40) || 1;
    const timer = setInterval(() => {
      current = Math.min(current + step, value);
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [started, value]);

  return <>{count}</>;
}

// ─── Floating Particles ───────────────────────────────────────────
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Grid Lines ───────────────────────────────────────────────────
function GridLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
      <div
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

// ─── Mouse Glow ───────────────────────────────────────────────────
function MouseGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none absolute h-[600px] w-[600px] rounded-full"
      style={{
        left: springX,
        top: springY,
        background:
          "radial-gradient(circle, oklch(0.6 0.2 260 / 8%) 0%, transparent 70%)",
      }}
    />
  );
}

// ─── Typewriter Role ──────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// ─── Greeting Typewriter ──────────────────────────────────────────
function GreetingTypewriter({ prefix, text, speed = 70 }: { prefix: string; text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed < (prefix.length + text.length)) {
      const t = setTimeout(() => setDisplayed((d) => d + 1), speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setDone(true), 600);
      return () => clearTimeout(t);
    }
  }, [displayed, prefix, text, speed]);

  const fullText = prefix + text;
  const visibleText = fullText.slice(0, displayed);
  const prefixVisible = visibleText.slice(0, prefix.length);
  const nameVisible = visibleText.slice(prefix.length);

  return (
    <span aria-label={fullText}>
      <span>{prefixVisible}</span>
      {nameVisible && (
        <span className="gradient-text">{nameVisible}</span>
      )}
      {!done && (
        <motion.span
          className="inline-block w-[3px] h-[0.85em] bg-primary align-middle ml-[2px] rounded-sm"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.7, repeat: Infinity }}
        />
      )}
    </span>
  );
}

export default function HeroSection() {
  const { t, language, isRtl } = useLanguage();
  const currentProfile = profile[language];
  const currentStats = stats[language];

  const roles = language === 'en' ? [
    "Full-Stack Developer",
    "Laravel Specialist",
    "Vue.js Engineer",
    "SaaS Architect",
    "API Craftsman",
  ] : [
    "مطور واجهات أمامية وخلفية",
    "أخصائي لارافل",
    "مهندس Vue.js",
    "مهندس منصات سحابية",
    "خبير واجهات برمجية",
  ];

  const typeText = useTypewriter(roles, 80, 2200);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* ── Backgrounds ── */}
      <GridLines />
      <FloatingParticles />
      <MouseGlow />

      {/* Static gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full blur-[120px]"
          style={{ background: "oklch(0.6 0.2 260 / 10%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full blur-[100px]"
          style={{ background: "oklch(0.65 0.18 200 / 8%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute right-1/3 top-2/3 h-[300px] w-[300px] rounded-full blur-[80px]"
          style={{ background: "oklch(0.6 0.2 260 / 6%)" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 pt-12 lg:pt-0 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* ── Left Column (Profile Info) ── */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
            className={`flex-1 w-full max-w-2xl flex flex-col items-center lg:items-start ${isRtl ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}
          >
            {/* Avatar & Greeting row */}
            <div className={`flex flex-col md:flex-row items-center gap-6 mb-8 w-full justify-center ${isRtl ? 'lg:justify-start lg:flex-row-reverse' : 'lg:justify-start'}`}>
              <motion.div variants={itemVariants}>
                <motion.div 
                  className="relative h-32 w-32 md:h-36 md:w-36 rounded-full border-4 border-background overflow-hidden shrink-0"
                  style={{
                    boxShadow: "0 0 30px oklch(0.6 0.2 260 / 30%), inset 0 0 0 2px oklch(0.6 0.2 260 / 50%)"
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img 
                    src="/WhatsApp%20Image%202026-04-12%20at%209.53.40%20AM.jpeg" 
                    alt={currentProfile.name} 
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </motion.div>

              <div className={`flex flex-col items-center mt-2 ${isRtl ? 'lg:items-end' : 'lg:items-start'}`}>
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-3">
                  <motion.span
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase backdrop-blur-sm"
                    whileHover={{ scale: 1.05, borderColor: "oklch(0.6 0.2 260 / 60%)" }}
                  >
                    <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                      <Sparkles size={14} />
                    </motion.span>
                    {t("hero.available")}
                  </motion.span>
                </motion.div>
                {/* Greeting */}
                <motion.p variants={itemVariants} className="text-base font-medium tracking-[0.3em] text-muted-foreground uppercase md:text-sm">
                  {t("hero.hello")}
                </motion.p>
              </div>
            </div>

            {/* Name */}
            <div className="mb-5 overflow-hidden" style={{ perspective: 800 }}>
              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-[54px] lg:leading-[1.1]">
                <GreetingTypewriter 
                  prefix={language === 'en' ? "Hi, I'm " : "أهلاً، أنا "} 
                  text={currentProfile.name} 
                  speed={70} 
                />
                <span className="relative inline-block">
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] rounded-full"
                    style={{
                      background: "linear-gradient(90deg, oklch(0.6 0.2 260), oklch(0.65 0.18 200), oklch(0.6 0.2 260))",
                      backgroundSize: "200% 100%",
                      width: "100%",
                    }}
                    initial={{ scaleX: 0, transformOrigin: isRtl ? "right" : "left" }}
                    animate={{
                      scaleX: 1,
                      backgroundPosition: ["0% 0%", "200% 0%"],
                    }}
                    transition={{
                      scaleX: { delay: 1.5, duration: 0.7, ease: "easeOut" },
                      backgroundPosition: { delay: 2.2, duration: 2.5, repeat: Infinity, ease: "linear" },
                    }}
                  />
                </span>
              </h1>
            </div>

            {/* Typewriter Role */}
            <motion.div variants={itemVariants} className={`mb-6 flex h-8 items-center justify-center gap-3 ${isRtl ? 'lg:justify-end flex-row-reverse' : 'lg:justify-start'}`}>
              <Code2 size={20} className="text-primary shrink-0" />
              <span className="text-xl font-semibold text-foreground md:text-2xl">
                {typeText}
                <motion.span className="ml-0.5 inline-block h-6 w-0.5 bg-primary align-middle" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="mb-4 text-lg font-medium text-primary/80 md:text-xl">
              {currentProfile.subtitle}
            </motion.p>

            {/* Summary */}
            <motion.p variants={itemVariants} className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              {currentProfile.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className={`mb-10 flex flex-wrap items-center justify-center gap-4 ${isRtl ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <motion.a
                href="#contact"
                className="group relative overflow-hidden rounded-2xl bg-primary px-8 py-3.5 text-lg font-bold text-primary-foreground shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{ boxShadow: "0 0 30px oklch(0.6 0.2 260 / 25%)" }}
              >
                <motion.span className="absolute inset-0 -skew-x-12 bg-white/20" initial={{ x: "-150%" }} whileHover={{ x: "200%" }} transition={{ duration: 0.55 }} />
                <span className="relative flex items-center gap-2">
                  <Zap size={18} />
                  {t("hero.hireMe")}
                </span>
              </motion.a>

              <motion.a
                href="/Emam_Medhat_FullStack_Developer.pdf"
                download
                className="group rounded-2xl border-2 border-border bg-secondary/40 px-8 py-3.5 text-lg font-bold text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("hero.downloadCv")}
              </motion.a>
            </motion.div>

            {/* Social Icons & Stats Wrapper */}
            <div className={`flex flex-col md:flex-row items-center gap-10 w-full justify-center ${isRtl ? 'lg:justify-start lg:flex-row-reverse' : 'lg:justify-start'}`}>
              {/* Social Icons */}
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                {[
                  { href: currentProfile.github || "https://github.com/Emam-Medhat", icon: <GithubIcon size={20} />, label: "GitHub" },
                  { href: currentProfile.linkedin || "https://linkedin.com/in/emam-medhat", icon: <LinkedinIcon size={20} />, label: "LinkedIn" },
                  { href: `mailto:${currentProfile.email}`, icon: <Mail size={20} />, label: "Email" },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
              
              {/* Vertical divider */}
              <div className="hidden md:block h-12 w-px bg-border" />

              {/* Minimal Stats */}
              <motion.div variants={itemVariants} className={`flex items-center gap-8 text-center ${isRtl ? 'flex-row-reverse' : ''}`}>
                 {currentStats.slice(0, 2).map((stat, i) => (
                   <div key={i} className={`flex flex-col leading-tight ${isRtl ? 'items-end' : 'items-start'}`}>
                      <span className={`text-3xl font-black ${i === 0 ? 'text-foreground' : 'text-primary'}`}>
                         <AnimatedCounter value={stat.value} delay={0.1 + i * 0.1} />+
                      </span>
                      <span className="text-xs font-medium text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</span>
                   </div>
                 ))}
              </motion.div>
            </div>

          </motion.div>

          {/* ── Right Column (Backend Code Showcase) ── */}
          <div className="hidden lg:flex flex-1 w-full relative z-10 items-center justify-center lg:pl-10">
            <motion.div 
               initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full scale-95 xl:scale-100 origin-center"
            >
              <BackendCodeShowcase />
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="mt-16 inline-flex flex-col items-center gap-2 text-muted-foreground/60 transition-colors hover:text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">{t("hero.scroll")}</span>
          <motion.div
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1"
            whileHover={{ borderColor: "oklch(0.6 0.2 260)" }}
          >
            <motion.div
              className="h-2 w-1 rounded-full bg-current"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
