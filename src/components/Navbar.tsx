import { useState, useEffect } from "react";
import { Menu, X, Download, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage, isRtl } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card-hover py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold gradient-text">EM</a>
        
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l border-border pl-6 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold transition-all hover:bg-accent hover:text-accent-foreground"
            >
              <Globe size={14} />
              {language === "en" ? "العربية" : "English"}
            </button>
            <a href="/Emam_Medhat_FullStack_Developer.pdf" download className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:glow-primary hover-lift">
              <Download size={14} /> {t("hero.downloadCv")}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
          >
            <span className="text-xs font-bold">{language === "en" ? "AR" : "EN"}</span>
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="glass-card absolute inset-x-0 top-0 z-50 p-6 md:hidden">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xl font-bold gradient-text">EM</span>
              <button onClick={() => setOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-primary">
                  {l.label}
                </a>
              ))}
              <a href="/Emam_Medhat_FullStack_Developer.pdf" download className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-medium text-primary-foreground">
                <Download size={18} /> {t("hero.downloadCv")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
