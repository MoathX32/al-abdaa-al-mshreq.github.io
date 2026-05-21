export type Locale = "en" | "ar";

export type TranslationKey =
  | "navHome" | "navAbout" | "navServices" | "navProjects" | "navGallery" | "navContact" | "navTeam"
  | "companyName" | "companySub" | "companyShort"
  | "heroEyebrow" | "heroTitle" | "heroSubtitle" | "heroCta" | "heroCtaSecondary"
  | "statsClients" | "statsYears" | "statsProjects" | "statsTeam"
  | "aboutEyebrow" | "aboutTitle" | "aboutStory" | "aboutLearnMore"
  | "visionEyebrow" | "visionTitle" | "visionQuote" | "visionBody"
  | "servicesEyebrow" | "servicesTitle" | "servicesSubtitle"
  | "whyEyebrow" | "whyTitle" | "whySubtitle"
  | "why1Title" | "why1Body" | "why2Title" | "why2Body" | "why3Title" | "why3Body" | "why4Title" | "why4Body"
  | "projectsEyebrow" | "projectsTitle" | "projectsSubtitle"
  | "galleryEyebrow" | "galleryTitle" | "gallerySubtitle"
  | "galleryAll" | "galleryVilla" | "galleryRenovation" | "galleryElectrical" | "galleryContracting" | "galleryPool"
  | "teamEyebrow" | "teamTitle" | "teamSubtitle"
  | "partnersEyebrow" | "partnersTitle"
  | "contactEyebrow" | "contactTitle" | "contactSubtitle"
  | "contactInfoTitle" | "contactPhone" | "contactEmail" | "contactAddress" | "contactHours" | "contactHoursValue"
  | "formTitle" | "formName" | "formEmail" | "formPhone" | "formService" | "formMessage" | "formSubmit"
  | "formOption1" | "formOption2" | "formOption3" | "formOption4"
  | "footerTagline" | "footerDownload" | "footerQuickLinks" | "footerReach" | "footerRights"
  | "scrollTop" | "menuToggle" | "langToggle";

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Projects",
    navGallery: "Gallery",
    navContact: "Contact",
    navTeam: "Team",

    companyName: "AL-ABDAA AL-MSHREQ",
    companySub: "Building Contracting L.L.C",
    companyShort: "AMC",

    heroEyebrow: "Building Contracting · Dubai, UAE",
    heroTitle: "Crafting Tomorrow's Landmarks, Today",
    heroSubtitle:
      "We are not just constructing buildings — we are shaping the future. From bespoke villas to large-scale developments, every project carries our signature of precision, integrity, and excellence.",
    heroCta: "Start Your Project",
    heroCtaSecondary: "Explore Our Work",

    statsClients: "Satisfied Clients",
    statsYears: "Years of Expertise",
    statsProjects: "Projects Delivered",
    statsTeam: "Skilled Professionals",

    aboutEyebrow: "Who We Are",
    aboutTitle: "Welcome to AL-ABDAA AL-MSHREQ",
    aboutStory:
      "Rooted in innovation and integrity, AL-ABDAA AL-MSHREQ has been shaping skylines and communities across the UAE. Our commitment extends beyond bricks and mortar — we build lasting relationships and deliver exceptional results, on time and within budget.",
    aboutLearnMore: "Discover Our Story",

    visionEyebrow: "Our Vision",
    visionTitle: "Designed to Endure, Built to Inspire",
    visionQuote:
      "“To be the leading provider of custom home building services in the region, known for our commitment to quality and customer satisfaction.”",
    visionBody:
      "We envision a future where our craftsmanship shapes not only structures but also the lives of those who inhabit them. We create homes that stand as timeless symbols of excellence.",

    servicesEyebrow: "What We Do",
    servicesTitle: "Comprehensive Construction Services",
    servicesSubtitle:
      "From foundation to finishing touches, we cover every discipline a modern build demands — under one accountable team.",

    whyEyebrow: "Why Choose Us",
    whyTitle: "The AMC Difference",
    whySubtitle: "Four pillars that make every project a success story.",
    why1Title: "Licensed & Accredited",
    why1Body: "Fully certified by Dubai Municipality, RTA, DEWA, and trusted by Emaar, DAMAC and MBRHE.",
    why2Title: "Delivered On Time",
    why2Body: "Disciplined project management, transparent reporting, and predictable timelines — every time.",
    why3Title: "Quality Craftsmanship",
    why3Body: "Premium materials, hand-picked specialists, and meticulous attention to every finish.",
    why4Title: "End-to-End Service",
    why4Body: "From concept and design to handover and post-construction support, one team, one promise.",

    projectsEyebrow: "Selected Work",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "A glimpse into the homes and developments we've brought to life across Dubai.",

    galleryEyebrow: "Our Portfolio",
    galleryTitle: "Project Gallery",
    gallerySubtitle: "A visual journey through our finest work in construction and renovation.",
    galleryAll: "All",
    galleryVilla: "Villas",
    galleryRenovation: "Renovation",
    galleryElectrical: "Electrical",
    galleryContracting: "Contracting",
    galleryPool: "Pools",

    teamEyebrow: "The People Behind The Build",
    teamTitle: "Meet Our Leadership",
    teamSubtitle: "Decades of combined expertise, driven by a shared standard of excellence.",

    partnersEyebrow: "Trusted Partners",
    partnersTitle: "Certified & Contracted With",

    contactEyebrow: "Get In Touch",
    contactTitle: "Let's Build Something Together",
    contactSubtitle:
      "Tell us about your project. Our team will get back to you within one business day.",
    contactInfoTitle: "Contact Information",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactAddress: "Address",
    contactHours: "Working Hours",
    contactHoursValue: "Sun – Thu · 9:00 AM – 6:00 PM",

    formTitle: "Send Us a Message",
    formName: "Your Name",
    formEmail: "Your Email",
    formPhone: "Phone Number",
    formService: "Service of Interest",
    formMessage: "Your Message",
    formSubmit: "Send Message",
    formOption1: "General Contracting",
    formOption2: "Villa Construction",
    formOption3: "Renovation & Restoration",
    formOption4: "Other Inquiry",

    footerTagline: "Building dreams with integrity, innovation, and a passion for excellence.",
    footerDownload: "Download Company Profile",
    footerQuickLinks: "Quick Links",
    footerReach: "Reach Us",
    footerRights: "© 2026 AL-ABDAA AL-MSHREQ Building Contracting L.L.C. All rights reserved.",

    scrollTop: "Back to top",
    menuToggle: "Toggle menu",
    langToggle: "العربية",
  },
  ar: {
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navServices: "خدماتنا",
    navProjects: "مشاريعنا",
    navGallery: "المعرض",
    navContact: "اتصل بنا",
    navTeam: "فريقنا",

    companyName: "الإبداع المشرق",
    companySub: "للمقاولات ذ.م.م",
    companyShort: "AMC",

    heroEyebrow: "مقاولات البناء · دبي، الإمارات",
    heroTitle: "نصنع معالم الغد، اليوم",
    heroSubtitle:
      "نحن لا نشيد المباني فحسب، بل نصنع المستقبل. من الفلل الفاخرة إلى المشاريع الكبرى، يحمل كل مشروع توقيعنا في الدقة والنزاهة والتميز.",
    heroCta: "ابدأ مشروعك",
    heroCtaSecondary: "استكشف أعمالنا",

    statsClients: "عميل سعيد",
    statsYears: "عاماً من الخبرة",
    statsProjects: "مشروعاً منجزاً",
    statsTeam: "محترف ماهر",

    aboutEyebrow: "من نحن",
    aboutTitle: "أهلاً بكم في الإبداع المشرق",
    aboutStory:
      "بأساس متجذر في الابتكار والنزاهة، نقوم بتشكيل آفاق ومجتمعات الإمارات. يمتد التزامنا إلى ما هو أبعد من البناء — نحن نبني علاقات دائمة ونقدم نتائج استثنائية، في الوقت المحدد وضمن الميزانية.",
    aboutLearnMore: "اكتشف قصتنا",

    visionEyebrow: "رؤيتنا",
    visionTitle: "صمم لتدوم، بُني ليلهم",
    visionQuote:
      "«أن نكون المزود الرائد لخدمات بناء المنازل المخصصة في المنطقة، معروفين بالتزامنا بالجودة ورضا العملاء.»",
    visionBody:
      "نتصور مستقبلاً لا تشكل فيه براعتنا الهياكل فحسب، بل حياة من يسكنونها. نصنع منازل تقف كرموز خالدة للتميز.",

    servicesEyebrow: "ماذا نقدم",
    servicesTitle: "خدمات بناء شاملة",
    servicesSubtitle:
      "من الأساسات إلى اللمسات النهائية، نغطي كل تخصص يتطلبه البناء الحديث — تحت فريق واحد مسؤول.",

    whyEyebrow: "لماذا نحن",
    whyTitle: "ميزة الإبداع المشرق",
    whySubtitle: "أربعة أسس تجعل من كل مشروع قصة نجاح.",
    why1Title: "مرخصون ومعتمدون",
    why1Body: "معتمدون بالكامل من بلدية دبي وهيئة الطرق وديوا، وموثوقون لدى إعمار ودامك وMBRHE.",
    why2Title: "التسليم في الوقت المحدد",
    why2Body: "إدارة مشاريع منضبطة، وتقارير شفافة، ومواعيد يمكن التنبؤ بها — في كل مرة.",
    why3Title: "حرفية عالية الجودة",
    why3Body: "مواد فاخرة ومتخصصون مختارون بعناية واهتمام دقيق بكل تشطيب.",
    why4Title: "خدمة متكاملة",
    why4Body: "من التصور والتصميم إلى التسليم ودعم ما بعد البناء، فريق واحد ووعد واحد.",

    projectsEyebrow: "أعمال مختارة",
    projectsTitle: "مشاريعنا المميزة",
    projectsSubtitle: "لمحة عن المنازل والمشاريع التي أحييناها في أنحاء دبي.",

    galleryEyebrow: "أعمالنا",
    galleryTitle: "معرض المشاريع",
    gallerySubtitle: "رحلة بصرية عبر أرقى أعمالنا في البناء والتجديد.",
    galleryAll: "الكل",
    galleryVilla: "فلل",
    galleryRenovation: "تجديد",
    galleryElectrical: "كهرباء",
    galleryContracting: "مقاولات",
    galleryPool: "مسابح",

    teamEyebrow: "خلف كل بناء",
    teamTitle: "تعرف على قيادتنا",
    teamSubtitle: "عقود من الخبرة المتراكمة، يقودها معيار مشترك للتميز.",

    partnersEyebrow: "شركاء موثوقون",
    partnersTitle: "معتمدون ومتعاقدون مع",

    contactEyebrow: "تواصل معنا",
    contactTitle: "لنبنِ شيئاً معاً",
    contactSubtitle: "أخبرنا عن مشروعك. سيعاود فريقنا التواصل معك خلال يوم عمل واحد.",
    contactInfoTitle: "معلومات الاتصال",
    contactPhone: "الهاتف",
    contactEmail: "البريد الإلكتروني",
    contactAddress: "العنوان",
    contactHours: "ساعات العمل",
    contactHoursValue: "الأحد – الخميس · 9:00 ص – 6:00 م",

    formTitle: "أرسل لنا رسالة",
    formName: "اسمك",
    formEmail: "بريدك الإلكتروني",
    formPhone: "رقم الهاتف",
    formService: "الخدمة المطلوبة",
    formMessage: "رسالتك",
    formSubmit: "إرسال الرسالة",
    formOption1: "مقاولات عامة",
    formOption2: "بناء فلل",
    formOption3: "تجديد وترميم",
    formOption4: "استفسار آخر",

    footerTagline: "نبني الأحلام بالنزاهة والابتكار وشغف التميز.",
    footerDownload: "تحميل ملف الشركة",
    footerQuickLinks: "روابط سريعة",
    footerReach: "تواصل معنا",
    footerRights: "© 2026 الإبداع المشرق للمقاولات ذ.م.م. جميع الحقوق محفوظة.",

    scrollTop: "العودة للأعلى",
    menuToggle: "القائمة",
    langToggle: "English",
  },
};

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key];
}
