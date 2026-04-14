import projectProptech from "@/assets/project-proptech.jpg";
import projectHospital from "@/assets/project-hospital.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectErp from "@/assets/project-erp.jpg";
import projectHr from "@/assets/project-hr.jpg";
import projectEwan from "@/assets/project-ewan.jpg";

export const profile = {
  en: {
    name: "Emam Medhat",
    title: "Full-Stack Developer",
    subtitle: "Laravel & Vue.js Specialist",
    email: "emam.dev1@gmail.com",
    phone: "+20 103 364 3475",
    location: "Cairo, Egypt",
    website: "emam1.xyz",
    summary: "Results-driven Full-Stack Developer with 3+ years of hands-on experience designing, developing, and deploying scalable web applications using Laravel and Vue.js. Proven expertise in building SaaS platforms, e-commerce solutions, ERP systems, and RESTful APIs.",
  },
  ar: {
    name: "إمام مدحت",
    title: "مطور واجهات أمامية وخلفية",
    subtitle: "أخصائي Laravel & Vue.js",
    email: "emam.dev1@gmail.com",
    phone: "+20 103 364 3475",
    location: "القاهرة، مصر",
    website: "emam1.xyz",
    summary: "مطور واجهات أمامية وخلفية ذو خبرة تزيد عن 3 سنوات في تصميم وتطوير تطبيقات الويب باستخدام Laravel و Vue.js. خبير في بناء المنصات السحابية (SaaS)، حلول التجارة الإلكترونية، وأنظمة ERP، والواجهات البرمجية RESTful APIs.",
  }
};

export const stats = {
  en: [
    { label: "Years Experience", value: 3 },
    { label: "Projects Delivered", value: 10 },
    { label: "Technologies", value: 20 },
    { label: "Happy Clients", value: 15 },
  ],
  ar: [
    { label: "سنوات الخبرة", value: 3 },
    { label: "مشاريع مكتملة", value: 10 },
    { label: "تقنيات مستخدمة", value: 20 },
    { label: "عملاء سعداء", value: 15 },
  ]
};

export const skills = {
  en: {
    backend: {
      title: "Backend",
      items: [
        { name: "PHP / Laravel", level: 95 },
        { name: "RESTful APIs", level: 90 },
        { name: "WebSockets", level: 85 },
        { name: "JWT / OAuth2", level: 88 },
        { name: "FilamentPHP / Livewire", level: 80 },
      ],
    },
    frontend: {
      title: "Frontend",
      items: [
        { name: "Vue.js 2 & 3", level: 92 },
        { name: "JavaScript / TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    database: {
      title: "Database & Storage",
      items: [
        { name: "MySQL / PostgreSQL", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 82 },
      ],
    },
    devops: {
      title: "DevOps & Tools",
      items: [
        { name: "Docker", level: 80 },
        { name: "Git / CI/CD", level: 88 },
        { name: "Vite / Webpack", level: 85 },
      ],
    },
  },
  ar: {
    backend: {
      title: "الواجهة الخلفية",
      items: [
        { name: "PHP / Laravel", level: 95 },
        { name: "RESTful APIs", level: 90 },
        { name: "WebSockets", level: 85 },
        { name: "JWT / OAuth2", level: 88 },
        { name: "FilamentPHP / Livewire", level: 80 },
      ],
    },
    frontend: {
      title: "الواجهة الأمامية",
      items: [
        { name: "Vue.js 2 & 3", level: 92 },
        { name: "JavaScript / TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    database: {
      title: "قواعد البيانات",
      items: [
        { name: "MySQL / PostgreSQL", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 82 },
      ],
    },
    devops: {
      title: "أدوات التطوير",
      items: [
        { name: "Docker", level: 80 },
        { name: "Git / CI/CD", level: 88 },
        { name: "Vite / Webpack", level: 85 },
      ],
    },
  }
};

export const experience = {
  en: [
    {
      role: "Full-Stack Developer",
      company: "Kemedar LLC",
      location: "Miami, USA (Remote)",
      period: "Oct 2024 – Nov 2025",
      highlights: [
        "Architected multi-tenant PropTech SaaS platform serving 500+ users",
        "Designed secure RESTful APIs with JWT auth and RBAC (15+ permission levels)",
        "Engineered real-time notifications with Laravel WebSockets & Redis",
        "Integrated Stripe & PayPal handling $100K+ monthly transactions",
        "Optimized queries & Redis caching, improving load times by 60%",
      ],
      tech: ["Laravel 10", "Vue.js 3", "MySQL", "Redis", "Docker", "Stripe"],
    },
    {
      role: "Full-Stack Developer (Part-time)",
      company: "Gell Tec",
      location: "Amman, Jordan (Remote)",
      period: "Feb 2025 – Sep 2025",
      highlights: [
        "Developed scalable applications with Laravel, Vue.js, and RESTful APIs",
        "Implemented performance optimizations improving response times",
        "Collaborated with cross-functional teams across multiple time zones",
      ],
      tech: ["Laravel", "Vue.js", "PostgreSQL", "Docker"],
    },
    {
      role: "Full-Stack Developer",
      company: "Kawkaba Tech",
      location: "Saudi Arabia (Remote)",
      period: "Mar 2024 – Sep 2024",
      highlights: [
        "Built hospital management system with appointment scheduling & billing",
        "Developed patient record management with role-based access control",
        "Implemented real-time dashboard for hospital operations",
      ],
      tech: ["Laravel 11", "Vue.js 3", "MySQL", "Redis", "WebSockets"],
    },
    {
      role: "Full-Stack Developer",
      company: "Infosas",
      location: "Cairo, Egypt",
      period: "Jan 2023 – Feb 2024",
      highlights: [
        "Developed ERP systems (HR, Inventory, Finance modules)",
        "Built automated payroll processing and attendance tracking",
        "Designed financial reporting with data visualization dashboards",
      ],
      tech: ["Laravel 9", "Vue.js 2", "MySQL", "Bootstrap"],
    },
  ],
  ar: [
    {
      role: "مطور واجهات أمامية وخلفية",
      company: "Kemedar LLC",
      location: "ميامي، الولايات المتحدة (عن بعد)",
      period: "أكتوبر 2024 – نوفمبر 2025",
      highlights: [
        "هندسة منصة PropTech SaaS متعددة المستأجرين تخدم أكثر من 500 مستخدم",
        "تصميم واجهات برمجة تطبيقات RESTful آمنة مع مصادقة JWT و RBAC",
        "تطوير نظام إشعارات فورية باستخدام Laravel WebSockets & Redis",
        "دمج Stripe & PayPal لمعالجة معاملات شهرية تزيد عن 100 ألف دولار",
        "تحسين الاستعلامات وتخزين Redis المؤقت، مما أدى لتحسين وقت التحميل بنسبة 60%",
      ],
      tech: ["Laravel 10", "Vue.js 3", "MySQL", "Redis", "Docker", "Stripe"],
    },
    {
      role: "مطور واجهات أمامية وخلفية (دوام جزئي)",
      company: "Gell Tec",
      location: "عمان، الأردن (عن بعد)",
      period: "فبراير 2025 – سبتمبر 2025",
      highlights: [
        "تطوير تطبيقات قابلة للتطوير باستخدام Laravel و Vue.js و RESTful APIs",
        "تنفيذ تحسينات الأداء لتحسين أوقات الاستجابة",
        "التعاون مع فرق عمل عابرة للحدود في مناطق زمنية مختلفة",
      ],
      tech: ["Laravel", "Vue.js", "PostgreSQL", "Docker"],
    },
    {
      role: "مطور واجهات أمامية وخلفية",
      company: "Kawkaba Tech",
      location: "السعودية (عن بعد)",
      period: "مارس 2024 – سبتمبر 2024",
      highlights: [
        "بناء نظام إدارة المستشفيات مع جدولة المواعيد والفواتير",
        "تطوير إدارة سجلات المرضى مع التحكم في الوصول القائم على الأدوار",
        "تنفيذ لوحة تحكم فورية لعمليات المستشفى",
      ],
      tech: ["Laravel 11", "Vue.js 3", "MySQL", "Redis", "WebSockets"],
    },
    {
      role: "مطور واجهات أمامية وخلفية",
      company: "Infosas",
      location: "القاهرة، مصر",
      period: "يناير 2023 – فبراير 2024",
      highlights: [
        "تطوير أنظمة ERP (وحدات الموارد البشرية، المخازن، والمالية)",
        "بناء معالجة آلية للرواتب وتتبع الحضور",
        "تصميم التقارير المالية مع لوحات معلومات لتصور البيانات",
      ],
      tech: ["Laravel 9", "Vue.js 2", "MySQL", "Bootstrap"],
    },
  ]
};

export const projects = {
  en: [
    {
      title: "EWAN Real Estate Platform",
      description: "A comprehensive digital real estate ecosystem for the Arab world. EWAN integrates AI, Blockchain, Metaverse, and IoT within 35+ unified sub-systems. Features include smart contracts, NFT marketplaces, and virtual property tours.",
      tech: ["Laravel 12", "Vue.js", "AI (OpenAI)", "Blockchain", "Metaverse", "PostgreSQL"],
      category: "PropTech & Web3",
      image: projectEwan,
    },
    {
      title: "PropTech SaaS Platform",
      description: "Multi-tenant property management platform with real-time features, payment integration, and advanced RBAC.",
      tech: ["Laravel", "Vue.js", "Redis", "Stripe", "WebSockets"],
      category: "SaaS",
      image: projectProptech,
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive healthcare platform with appointment scheduling, billing, patient records, and operational dashboards.",
      tech: ["Laravel", "Vue.js", "MySQL", "WebSockets"],
      category: "Healthcare",
      image: projectHospital,
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with Stripe payments, cart management, and customer analytics dashboard.",
      tech: ["Laravel", "Vue.js", "Stripe", "Redis", "MySQL"],
      category: "E-Commerce",
      image: projectEcommerce,
    },
    {
      title: "ERP System",
      description: "Enterprise resource planning with HR, Inventory, Finance modules, and comprehensive reporting.",
      tech: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
      category: "Enterprise",
      image: projectErp,
    },
    {
      title: "HR Management System",
      description: "Payroll processing, attendance tracking, and employee performance analytics.",
      tech: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
      category: "Enterprise",
      image: projectHr,
    },
  ],
  ar: [
    {
      title: "منصة إيوان العقارية",
      description: "نظام بيئي رقمي شامل للعقارات في العالم العربي. يجمع إيوان بين أفضل التقنيات مثل الذكاء الاصطناعي، البلوكشين، الميتافيرس، وإنترنت الأشياء داخل أكثر من 35 نظاماً فرعياً موحداً.",
      tech: ["Laravel 12", "Vue.js", "AI (OpenAI)", "Blockchain", "Metaverse", "PostgreSQL"],
      category: "PropTech & Web3",
      image: projectEwan,
    },
    {
      title: "منصة PropTech SaaS",
      description: "منصة إدارة عقارات متعددة المستأجرين مع ميزات فورية، دمج الدفع، والتحكم المتقدم في الوصول.",
      tech: ["Laravel", "Vue.js", "Redis", "Stripe", "WebSockets"],
      category: "SaaS",
      image: projectProptech,
    },
    {
      title: "نظام إدارة المستشفيات",
      description: "منصة رعاية صحية شاملة مع جدولة المواعيد، الفواتير، سجلات المرضى، ولوحات تحكم تشغيلية.",
      tech: ["Laravel", "Vue.js", "MySQL", "WebSockets"],
      category: "Healthcare",
      image: projectHospital,
    },
    {
      title: "منصة التجارة الإلكترونية",
      description: "متجر إلكتروني متكامل مع مدفوعات Stripe، إدارة السلة، ولوحة تحكم لتحليلات العملاء.",
      tech: ["Laravel", "Vue.js", "Stripe", "Redis", "MySQL"],
      category: "E-Commerce",
      image: projectEcommerce,
    },
    {
      title: "نظام ERP المؤسسي",
      description: "تخطيط موارد المؤسسات مع وحدات الموارد البشرية والمخازن والمالية وتقارير شاملة.",
      tech: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
      category: "Enterprise",
      image: projectErp,
    },
    {
      title: "نظام إدارة الموارد البشرية",
      description: "معالجة الرواتب وتتبع الحضور وتحليلات أداء الموظفين.",
      tech: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
      category: "Enterprise",
      image: projectHr,
    },
  ]
};

export const testimonials = {
  en: [
    {
      name: "Ahmed Hassan",
      role: "CTO, Kemedar LLC",
      text: "Emam delivered exceptional work on our PropTech platform. His expertise in Laravel and Vue.js helped us build a scalable, production-ready SaaS product.",
    },
    {
      name: "Sara Al-Rashid",
      role: "Project Manager, Kawkaba Tech",
      text: "Outstanding developer with deep understanding of complex healthcare systems. Delivered on time with clean, maintainable code.",
    },
    {
      name: "Mohamed Farid",
      role: "CEO, Infosas",
      text: "Emam's ability to architect ERP systems from scratch is remarkable. He transformed our business processes with elegant solutions.",
    },
  ],
  ar: [
    {
      name: "أحمد حسن",
      role: "المدير التقني، Kemedar LLC",
      text: "قدم إمام عملاً استثنائياً في منصتنا العقارية. ساعدتنا خبرته في Laravel و Vue.js في بناء منتج SaaS قابل للتطوير وجاهز للإنتاج.",
    },
    {
      name: "سارة الرشيد",
      role: "مديرة مشاريع، Kawkaba Tech",
      text: "مطور متميز مع فهم عميق للأنظمة الصحية المعقدة. سلم المشروع في الوقت المحدد بكود نظيف وقابل للصيانة.",
    },
    {
      name: "محمد فريد",
      role: "الرئيس التنفيذي، Infosas",
      text: "قدرة إمام على هندسة أنظمة ERP من الصفر رائعة حقاً. لقد حول عملياتنا التجارية بحلول أنيقة.",
    },
  ]
};

export const techIcons = [
  "PHP", "Laravel", "Vue.js", "JavaScript", "TypeScript",
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker",
  "Tailwind CSS", "Bootstrap", "Git", "Vite", "Node.js",
];
