import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const defaultContext: LanguageContextType = {
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => key,
  isRtl: false,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check local storage for saved language
    const savedLang = localStorage.getItem('app-language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguage(savedLang);
    } else {
      // Check browser preference if no saved language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ar') {
        setLanguage('ar');
      }
    }
  }, []);

  useEffect(() => {
    // Update HTML dir attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('app-language', language);

    // Toggle font class on body
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  // Simple dictionary structure for translation strings
  const dictionary: Record<Language, Record<string, string>> = {
    en: {
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.testimonials': 'Testimonials',
      'nav.contact': 'Contact',
      'hero.available': 'Available for Work',
      'hero.hello': 'Hello, World! 👋',
      'hero.hireMe': 'Hire Me',
      'hero.downloadCv': 'Download CV',
      'hero.scroll': 'Scroll',
      'about.title': 'About Me',
      'about.subtitle': 'Getting to know me',
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Some of my recent work',
      'projects.viewAll': 'View All',
      'experience.title': 'Experience',
      'experience.subtitle': 'My professional journey',
      'skills.title': 'Tech Stack',
      'skills.subtitle': 'Technologies I work with',
      'contact.title': 'Get in Touch',
      'contact.subtitle': 'Let\'s build something together',
      'contact.name': 'Your Name',
      'contact.email': 'Your Email',
      'contact.message': 'Your Message',
      'contact.subject': 'Subject',
      'contact.send': 'Send Message',
      'contact.sentTitle': 'Message Sent!',
      'contact.sentDesc': "I'll get back to you soon.",
    },
    ar: {
      'nav.about': 'عني',
      'nav.projects': 'المشاريع',
      'nav.experience': 'الخبرة',
      'nav.skills': 'المهارات',
      'nav.testimonials': 'التوصيات',
      'nav.contact': 'تواصل معي',
      'hero.available': 'متاح للعمل',
      'hero.hello': 'مرحباً بالعالم! 👋',
      'hero.hireMe': 'وظفني',
      'hero.downloadCv': 'تحميل السيرة الذاتية',
      'hero.scroll': 'التمرير للأسفل',
      'about.title': 'من أنا',
      'about.subtitle': 'تعرف علي أكثر',
      'projects.title': 'أبرز المشاريع',
      'projects.subtitle': 'بعض من أعمالي الأخيرة',
      'projects.viewAll': 'عرض الكل',
      'experience.title': 'خبراتي',
      'experience.subtitle': 'مسيرتي المهنية',
      'skills.title': 'التقنيات المستخدمة',
      'skills.subtitle': 'التقنيات التي أعمل بها',
      'contact.title': 'تواصل معي',
      'contact.subtitle': 'دعنا نبني شيئاً رائعاً معاً',
      'contact.name': 'اسمك',
      'contact.email': 'بريدك الإلكتروني',
      'contact.message': 'رسالتك',
      'contact.subject': 'الموضوع',
      'contact.send': 'إرسال الرسالة',
      'contact.sentTitle': 'تم إرسال الرسالة!',
      'contact.sentDesc': 'سأقوم بالرد عليك قريباً.',
    },
  };

  const t = (key: string): string => {
    return dictionary[language][key] || key;
  };

  const isRtl = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};
