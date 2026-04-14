import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t, language, isRtl } = useLanguage();
  const currentProfile = profile[language];
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3 text-center text-base font-semibold tracking-[0.3em] text-primary uppercase md:text-lg">
            {t("nav.contact")}
          </h2>
          <h3 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            {language === 'en' ? (
              <>Let's Work <span className="gradient-text">Together</span></>
            ) : (
              <>لنعمل <span className="gradient-text">معاً</span></>
            )}
          </h3>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <h4 className="mb-8 text-2xl font-bold">{t("contact.title")}</h4>
              <div className="space-y-6">
                <a href={`mailto:${currentProfile.email}`} className={`flex items-center gap-5 text-lg text-muted-foreground transition-colors hover:text-primary ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <span className="truncate">{currentProfile.email}</span>
                </a>
                {currentProfile.phone && (
                  <a href={`tel:${currentProfile.phone}`} className={`flex items-center gap-5 text-lg text-muted-foreground transition-colors hover:text-primary ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <span>{currentProfile.phone}</span>
                  </a>
                )}
                <div className={`flex items-center gap-5 text-lg text-muted-foreground ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <span>{currentProfile.location}</span>
                </div>
              </div>
              <div className={`mt-10 flex gap-4 ${isRtl ? 'justify-end' : 'justify-start'}`}>
                <a href={currentProfile.github} target="_blank" rel="noopener noreferrer" className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"><GithubIcon size={22} /></a>
                <a href={currentProfile.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"><LinkedinIcon size={22} /></a>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass-card-hover space-y-5 rounded-2xl p-8">
              {sent ? (
                <div className="flex h-full min-h-[300px] items-center justify-center text-center">
                  <div>
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <Send className="text-primary" size={32} />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{t("contact.sentTitle")}</p>
                    <p className="mt-3 text-lg text-muted-foreground">{t("contact.sentDesc")}</p>
                  </div>
                </div>
              ) : (
                <>
                  <input type="text" placeholder={t("contact.name")} required className={`w-full rounded-xl bg-input px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${isRtl ? 'text-right' : 'text-left'}`} />
                  <input type="email" placeholder={t("contact.email")} required className={`w-full rounded-xl bg-input px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${isRtl ? 'text-right' : 'text-left'}`} />
                  <input type="text" placeholder={t("contact.subject")} className={`w-full rounded-xl bg-input px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${isRtl ? 'text-right' : 'text-left'}`} />
                  <textarea placeholder={t("contact.message")} rows={5} required className={`w-full rounded-xl bg-input px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none ${isRtl ? 'text-right' : 'text-left'}`} />
                  <button type="submit" className={`flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.02] hover-lift ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <Send size={20} className={isRtl ? 'rotate-180' : ''} /> {t("contact.send")}
                  </button>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
