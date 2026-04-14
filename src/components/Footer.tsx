import { profile } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language, isRtl } = useLanguage();
  const currentProfile = profile[language];

  return (
    <footer className="border-t border-border px-6 py-14">
      <div className={`mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row ${isRtl ? 'md:flex-row-reverse' : ''}`}>
        <div className={`text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
          <p className="text-xl font-bold gradient-text">{currentProfile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {language === 'en' 
              ? 'Full-Stack Developer • Laravel & Vue.js' 
              : 'مطور واجهات أمامية وخلفية • لارافل و Vue.js'}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {currentProfile.name}. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
        </p>
        <div className="flex gap-4">
          <a href={currentProfile.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"><GithubIcon size={18} /></a>
          <a href={currentProfile.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"><LinkedinIcon size={18} /></a>
          <a href={`mailto:${currentProfile.email}`} className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
