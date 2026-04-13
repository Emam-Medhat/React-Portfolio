import projectProptech from "@/assets/project-proptech.jpg";
import projectHospital from "@/assets/project-hospital.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectErp from "@/assets/project-erp.jpg";
import projectHr from "@/assets/project-hr.jpg";
import projectEwan from "@/assets/project-ewan.jpg";

export const profile = {
  name: "Emam Medhat",
  title: "Full-Stack Developer",
  subtitle: "Laravel & Vue.js Specialist",
  email: "am7834213@gmail.com",
  phone: "+20 103 364 3475",
  location: "Cairo, Egypt",
  website: "emam1.xyz",
  linkedin: "https://linkedin.com/in/emam-medhat",
  github: "https://github.com/Emam-Medhat",
  summary: "Results-driven Full-Stack Developer with 3+ years of hands-on experience designing, developing, and deploying scalable web applications using Laravel and Vue.js. Proven expertise in building SaaS platforms, e-commerce solutions, ERP systems, and RESTful APIs. Successfully delivered 10+ enterprise-grade projects.",
};

export const stats = [
  { label: "Years Experience", value: 3 },
  { label: "Projects Delivered", value: 10 },
  { label: "Technologies", value: 20 },
  { label: "Happy Clients", value: 15 },
];

export const skills = {
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
};

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Kemedar LLC",
    location: "Miami, USA (Remote)",
    period: "Oct 2024 – Nov 2025",
    highlights: [
      "Architected multi-tenant PropTech SaaS platform serving 500+ users",
      "Designed secure RESTful APIs with JWT auth and RBAC (15+ permission levels)",
      "Engineered real-time notifications with Laravel WebSockets & Redis, reducing delivery time by 85%",
      "Integrated Stripe & PayPal handling $100K+ monthly transactions at 99.9% success rate",
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
];

export const projects = [
  {
    title: "PropTech SaaS Platform",
    description: "Multi-tenant property management platform with real-time features, payment integration, and advanced RBAC. Serving 500+ users with $100K+ monthly transactions.",
    tech: ["Laravel", "Vue.js", "Redis", "Stripe", "WebSockets"],
    category: "SaaS",
    image: projectProptech,
  },
  {
    title: "Hospital Management System",
    description: "Comprehensive healthcare platform with appointment scheduling, billing, patient records, and real-time operational dashboards for hospital staff.",
    tech: ["Laravel", "Vue.js", "MySQL", "WebSockets"],
    category: "Healthcare",
    image: projectHospital,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with Stripe payments, cart management, order tracking, inventory control, and customer analytics dashboard.",
    tech: ["Laravel", "Vue.js", "Stripe", "Redis", "MySQL"],
    category: "E-Commerce",
    image: projectEcommerce,
  },
  {
    title: "ERP System",
    description: "Enterprise resource planning with HR, Inventory, Finance modules, role-based access control, and comprehensive reporting & analytics.",
    tech: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
    category: "Enterprise",
    image: projectErp,
  },
  {
    title: "HR Management System",
    description: "Payroll processing, attendance tracking, leave management, and employee performance analytics with automated reporting.",
    tech: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
    category: "Enterprise",
    image: projectHr,
  },
  {
    title: "EWAN Real Estate Platform",
    description: "Digital real estate platform for the Arab world integrating AI concepts, modern property management, IoT-ready architecture, and smart analytics.",
    tech: ["Laravel", "Vue.js", "PostgreSQL", "Redis", "Docker"],
    category: "SaaS",
    image: projectEwan,
  },
];

export const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CTO, Kemedar LLC",
    text: "Emam delivered exceptional work on our PropTech platform. His expertise in Laravel and Vue.js helped us build a scalable, production-ready SaaS product that handles thousands of users effortlessly.",
  },
  {
    name: "Sara Al-Rashid",
    role: "Project Manager, Kawkaba Tech",
    text: "Outstanding developer with deep understanding of complex healthcare systems. Delivered on time with clean, maintainable code and excellent communication throughout the project.",
  },
  {
    name: "Mohamed Farid",
    role: "CEO, Infosas",
    text: "Emam's ability to architect ERP systems from scratch is remarkable. He transformed our business processes with elegant solutions and his attention to detail is second to none.",
  },
];

export const techIcons = [
  "PHP", "Laravel", "Vue.js", "JavaScript", "TypeScript",
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker",
  "Tailwind CSS", "Bootstrap", "Git", "Vite", "Node.js",
];
