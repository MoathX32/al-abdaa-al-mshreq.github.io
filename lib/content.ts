import type { Locale } from "./translations";
import {
  HardHat, Home, Hammer, Wrench, Compass, Leaf, LifeBuoy, Route, Waves, Zap, Droplet, ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
};

export const services: Service[] = [
  {
    icon: HardHat,
    title: { en: "General Contracting", ar: "مقاولات عامة" },
    body: {
      en: "We take on large-scale projects with precision, managing every phase from planning to handover.",
      ar: "نتولى المشاريع الكبيرة بدقة، ونقود كل مرحلة من التخطيط حتى التسليم.",
    },
  },
  {
    icon: Home,
    title: { en: "Villa & Residential Construction", ar: "بناء الفلل والمساكن" },
    body: {
      en: "High-quality custom homes and residential complexes where families thrive and memories are made.",
      ar: "منازل ومجمعات سكنية فاخرة حيث تزدهر العائلات وتُصنع الذكريات.",
    },
  },
  {
    icon: Hammer,
    title: { en: "Renovation & Restoration", ar: "التجديد والترميم" },
    body: {
      en: "Breathing new life into buildings — reviving historic character or modernising existing spaces.",
      ar: "نبث الحياة من جديد في المباني، سواء بإحياء الهوية التاريخية أو بتحديث المساحات القائمة.",
    },
  },
  {
    icon: Wrench,
    title: { en: "Construction Management", ar: "إدارة البناء" },
    body: {
      en: "End-to-end oversight of planning, scheduling, budgeting, and quality control.",
      ar: "إشراف شامل على التخطيط والجدولة والميزانية ومراقبة الجودة.",
    },
  },
  {
    icon: Compass,
    title: { en: "Design–Build Services", ar: "خدمات التصميم والبناء" },
    body: {
      en: "Integrated design and construction under one roof — efficient, accountable, and aligned.",
      ar: "تكامل التصميم والبناء تحت سقف واحد — كفاءة ومسؤولية وانسجام.",
    },
  },
  {
    icon: Leaf,
    title: { en: "Green Building", ar: "البناء الأخضر" },
    body: {
      en: "Eco-conscious construction practices and pathways to LEED certification.",
      ar: "ممارسات بناء صديقة للبيئة ومسارات نحو شهادة LEED.",
    },
  },
  {
    icon: Route,
    title: { en: "Civil Engineering", ar: "الهندسة المدنية" },
    body: {
      en: "Site development, grading, drainage, and full utility coordination.",
      ar: "تطوير المواقع والتسوية والصرف وتنسيق المرافق بالكامل.",
    },
  },
  {
    icon: Waves,
    title: { en: "Swimming Pool Construction", ar: "إنشاء المسابح" },
    body: {
      en: "From planning and design to excavation and the finest finishing touches.",
      ar: "من التخطيط والتصميم إلى الحفر وأدق التشطيبات النهائية.",
    },
  },
  {
    icon: Zap,
    title: { en: "Electrical Projects", ar: "المشاريع الكهربائية" },
    body: {
      en: "From residential wiring to large industrial electrical systems, DEWA-compliant.",
      ar: "من التمديدات المنزلية إلى الأنظمة الكهربائية الصناعية، متوافقة مع ديوا.",
    },
  },
  {
    icon: Droplet,
    title: { en: "Drilling & Pipe Laying", ar: "الحفر ومد الأنابيب" },
    body: {
      en: "Trenchless installation of underground utilities — water, gas, and fiber.",
      ar: "تركيب المرافق تحت الأرض بدون خنادق — المياه والغاز والألياف.",
    },
  },
  {
    icon: LifeBuoy,
    title: { en: "Post-Construction", ar: "ما بعد البناء" },
    body: {
      en: "Ongoing facility maintenance, management, and long-term support.",
      ar: "صيانة وإدارة المرافق ودعم طويل الأمد بعد التسليم.",
    },
  },
  {
    icon: ShieldCheck,
    title: { en: "Maintenance Projects", ar: "مشاريع الصيانة" },
    body: {
      en: "Routine inspections, repairs, and preventive measures to keep assets at their best.",
      ar: "فحوصات دورية وإصلاحات وإجراءات وقائية تحافظ على الأصول في أفضل حال.",
    },
  },
];

export type Project = {
  title: Record<Locale, string>;
  image: string;
  location: Record<Locale, string>;
  client: Record<Locale, string>;
  scope: Record<Locale, string>;
  budget?: string;
};

export const projects: Project[] = [
  {
    title: { en: "Al Quoz First 15", ar: "مشروع آل قوز الأولى 15" },
    image: "/images/projects/al-quoz-1.jpg",
    location: { en: "Al Quoz First, Dubai", ar: "آل قوز الأولى، دبي" },
    client: { en: "Yousuf Abdulla Mohammed", ar: "يوسف عبدالله محمد" },
    scope: {
      en: "Maintenance & completion of a residential villa — porcelain tiling, gypsum ceilings, aluminum joinery, MEP works.",
      ar: "صيانة وإكمال فيلا سكنية — بلاط بورسلين وأسقف جبسية وأعمال ألمنيوم وكهروميكانيك.",
    },
    budget: "AED 453,247",
  },
  {
    title: { en: "Al Warqaa 4 – Unit 12", ar: "آل ورقاء 4 - الوحدة 12" },
    image: "/images/projects/al-warqaa-1.jpg",
    location: { en: "Al Warqaa 4, Dubai", ar: "آل ورقاء 4، دبي" },
    client: { en: "Thani Butti Salem Al Shamsi", ar: "ثاني بطي سالم الشامسي" },
    scope: {
      en: "Renovation and structural additions — double-glazed aluminum, full DEWA upgrade, waterproofing, anti-termite.",
      ar: "تجديد وإضافات إنشائية — ألمنيوم مزدوج، ترقية ديوا كاملة، عزل، مقاومة النمل الأبيض.",
    },
    budget: "AED 468,394",
  },
  {
    title: { en: "Arabian Ranches 2 – Yasmin", ar: "المرابع العربية 2 - ياسمين" },
    image: "/images/projects/arabian-ranches-1.jpg",
    location: { en: "Arabian Ranches 2, Dubai", ar: "المرابع العربية 2، دبي" },
    client: { en: "Mr. Mohammed bin Saad Al-Faraj", ar: "السيد محمد بن سعد الفرج" },
    scope: {
      en: "High-end villa renovation with landscaping — premium glass panels, porcelain walkways, custom irrigation, decorative lighting.",
      ar: "تجديد فيلا فاخرة مع تنسيق الحدائق — ألواح زجاجية فاخرة، ممرات بورسلين، نظام ري مخصص، إضاءة زخرفية.",
    },
  },
  {
    title: { en: "Oud Al Muteena 17 (MBRHE)", ar: "عود المطينة 17 (MBRHE)" },
    image: "/images/projects/oud-al-muteena-1.jpg",
    location: { en: "Oud Al Muteena First, Dubai", ar: "عود المطينة الأولى، دبي" },
    client: { en: "Mohammed Bin Rashid Housing Establishment", ar: "مؤسسة محمد بن راشد للإسكان" },
    scope: {
      en: "Renovation and additions — modernised structure, energy-efficient systems, DEWA-compliant electrical overhaul.",
      ar: "تجديد وإضافات — هيكلة حديثة، أنظمة موفرة للطاقة، إصلاح كهربائي متوافق مع ديوا.",
    },
    budget: "AED 600,000",
  },
  {
    title: { en: "Al Badaa 13 – Luxury Villa", ar: "آل بدع 13 - فيلا فاخرة" },
    image: "/images/projects/al-badaa-1.jpg",
    location: { en: "Al Badaa, Dubai", ar: "آل بدع، دبي" },
    client: { en: "Wartha Ali Muhsin Barakat", ar: "ورثة علي محسن بركات" },
    scope: {
      en: "Premium bathroom renovation, 12mm glass installations, shaded parking for 5 cars, complete MEP overhaul.",
      ar: "تجديد حمامات فاخر، تركيبات زجاجية 12 ملم، مظلة لخمس سيارات، إصلاح متكامل للكهروميكانيك.",
    },
    budget: "AED 500,000",
  },
];

export type GalleryItem = {
  src: string;
  alt: Record<Locale, string>;
  category: "villa" | "renovation" | "electrical" | "contracting" | "pool";
};

export const galleryItems: GalleryItem[] = [
  { src: "/images/gallery/villa-1.jpg",      alt: { en: "Villa Exterior",        ar: "واجهة فيلا" },        category: "villa" },
  { src: "/images/gallery/villa-11.jpg",     alt: { en: "Villa Exterior",        ar: "واجهة فيلا" },        category: "villa" },
  { src: "/images/gallery/villa-111.jpg",    alt: { en: "Villa Exterior",        ar: "واجهة فيلا" },        category: "villa" },
  { src: "/images/gallery/villa-1111.jpg",   alt: { en: "Villa Exterior",        ar: "واجهة فيلا" },        category: "villa" },
  { src: "/images/gallery/villa-11111.jpg",  alt: { en: "Villa Exterior",        ar: "واجهة فيلا" },        category: "villa" },
  { src: "/images/gallery/villa-2.jpg",      alt: { en: "Villa Gate",            ar: "بوابة فيلا" },         category: "villa" },
  { src: "/images/gallery/villa-22.jpg",     alt: { en: "Villa Gate",            ar: "بوابة فيلا" },         category: "villa" },
  { src: "/images/gallery/villa-3.jpg",      alt: { en: "Villa Under Construction", ar: "فيلا قيد الإنشاء" }, category: "villa" },
  { src: "/images/gallery/villa-33.jpg",     alt: { en: "Villa Under Construction", ar: "فيلا قيد الإنشاء" }, category: "villa" },
  { src: "/images/gallery/renewal-1.jpg",    alt: { en: "Waterproofing Work",    ar: "أعمال العزل" },        category: "renovation" },
  { src: "/images/gallery/renewal-2.jpg",    alt: { en: "Plastering Work",       ar: "أعمال التلييس" },     category: "renovation" },
  { src: "/images/gallery/electric-1.jpg",   alt: { en: "Electrical Panel",      ar: "لوحة كهربائية" },     category: "electrical" },
  { src: "/images/gallery/electric-2.jpg",   alt: { en: "Complex Wiring",        ar: "أسلاك معقدة" },        category: "electrical" },
  { src: "/images/gallery/concrete-1.jpg",   alt: { en: "Concrete Foundation",   ar: "أساس خرساني" },       category: "contracting" },
  { src: "/images/gallery/concrete-2.jpg",   alt: { en: "Reinforcement Work",    ar: "أعمال التسليح" },     category: "contracting" },
  { src: "/images/gallery/pool-1.jpg",       alt: { en: "Pool Construction",     ar: "إنشاء مسبح" },        category: "pool" },
  { src: "/images/gallery/pool-2.jpg",       alt: { en: "Pool Reinforcement",    ar: "تسليح مسبح" },        category: "pool" },
];

export type TeamMember = {
  name: Record<Locale, string>;
  role: Record<Locale, string>;
  bio: Record<Locale, string>;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: { en: "Eng. Abdullah Mohamed", ar: "م. عبد الله محمد" },
    role: { en: "General Manager", ar: "المدير العام" },
    bio: {
      en: "Leading AMC with 15+ years of UAE construction expertise. Specialises in delivering high-quality projects on time and on budget.",
      ar: "يقود الإبداع المشرق بخبرة تزيد عن 15 عاماً في مجال البناء بالإمارات. متخصص في تسليم مشاريع عالية الجودة في الوقت المحدد.",
    },
    image: "/images/team/abdullah.jpg",
  },
  {
    name: { en: "Eng. Ahmed Talal", ar: "م. أحمد طلال" },
    role: { en: "HR Manager", ar: "مدير الموارد البشرية" },
    bio: {
      en: "Manages our skilled workforce, ensuring top talent and full compliance with UAE regulations.",
      ar: "يدير فريق العمل الماهر ويضمن أفضل المواهب والامتثال للوائح الإمارات.",
    },
    image: "/images/team/ahmed.jpg",
  },
  {
    name: { en: "Eng. Moaz Mohamed", ar: "م. معاذ محمد" },
    role: { en: "Contracts Manager", ar: "مدير العقود" },
    bio: {
      en: "Oversees project execution with precision, from planning to handover. Together, we build excellence.",
      ar: "يشرف على تنفيذ المشاريع بدقة، من التخطيط إلى التسليم. معاً، نبني التميز.",
    },
    image: "/images/team/moaz.jpg",
  },
  {
    name: { en: "Mr. Abdulrahman Mahmoud", ar: "أ. عبد الرحمن محمود" },
    role: { en: "Accountant", ar: "محاسب" },
    bio: {
      en: "Manages financial operations and ensures fiscal responsibility across every project.",
      ar: "يدير العمليات المالية ويضمن المسؤولية المالية في كل مشروع.",
    },
    image: "/images/team/abdulrahman.jpg",
  },
];

export const partners = [
  { src: "/images/Mohammed Bin Rashid.png", alt: "Mohammed Bin Rashid Housing Establishment" },
  { src: "/images/Emaar.png",               alt: "Emaar" },
  { src: "/images/Build in Dubai.png",      alt: "Build in Dubai" },
  { src: "/images/Damac.png",               alt: "Damac" },
  { src: "/images/NAFFCO.png",              alt: "NAFFCO" },
  { src: "/images/Dubai Municipality.png",  alt: "Dubai Municipality" },
  { src: "/images/RTA.png",                 alt: "RTA" },
];

export const contactDetails = {
  phone: "+971 56 554 7397",
  phoneHref: "tel:+971565547397",
  email: "info@abdaamshreq.com",
  emailHref: "mailto:info@abdaamshreq.com",
  whatsapp: "https://wa.me/971565547397",
  linkedin: "https://www.linkedin.com/company/al-abdaa-al-mshreq/",
  facebook: "https://www.facebook.com/ALABDAAALMSHREQ/",
  instagram: "https://www.instagram.com/al_abdaa_al_mshreq/",
  address: {
    en: "Dubai, Al Qusais Industrial Area 2, Damascus Street, Al Fahad 4, Office 349",
    ar: "دبي، القصيص الصناعية 2، شارع دمشق، الفهد 4، مكتب 349",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2145.1930180442305!2d55.38698089089959!3d25.278313426654414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1752311389303!5m2!1sen!2sae",
};

export const stats = [
  { value: 180, suffix: "+", key: "statsClients"  as const },
  { value: 15,  suffix: "+", key: "statsYears"    as const },
  { value: 250, suffix: "+", key: "statsProjects" as const },
  { value: 45,  suffix: "+", key: "statsTeam"     as const },
];
