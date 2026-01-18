"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    portfolio: "Portfolio",
    clients: "Clients",
    career: "Career",
    contact: "Contact",

    // Hero Section
    pioneering: "PIONEERING THE FUTURE",
    create: "CREATE",
    innovate: "INNOVATE",
    dominate: "DOMINATE",
    heroDescription:
      "Pushing boundaries with AI-driven solutions, revolutionary web experiences, and cutting-edge mobile technology",
    launchProject: "Launch Project",
    exploreWork: "Explore Work",
    smartDevelopment: "Smart Development",
    aiModels: "AI Models",
    globalClients: "Global Clients",
    projectsLive: "Projects Live",

    // Services
    ourServices: "Our Services",
    servicesDescription:
      "Comprehensive software solutions tailored to your business needs. From web development to AI integration, we deliver excellence.",
    webDevelopment: "Web Development",
    webDevelopmentDesc:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    mobileApplications: "Mobile Applications",
    mobileApplicationsDesc:
      "Native and cross-platform mobile apps for iOS and Android that engage users and drive business growth.",
    aiSolutions: "AI Solutions",
    aiSolutionsDesc:
      "Artificial intelligence and machine learning solutions to automate processes and unlock new possibilities.",
    ecommerce: "E-Commerce",
    ecommerceDesc:
      "Complete e-commerce platforms with secure payment gateways and seamless shopping experiences.",
    cloudSolutions: "Cloud Solutions",
    cloudSolutionsDesc:
      "Scalable cloud infrastructure and migration services for modern business needs.",
    digitalTransformation: "Digital Transformation",
    digitalTransformationDesc:
      "End-to-end digital transformation services to modernize your business operations.",
    viewAllServices: "View All Services",

    // About
    aboutEnergizeTech: "About Energize Tech",
    aboutDescription1:
      "With 24 years of excellence in software development, Energize Tech Solutions has established itself as a leading technology partner across the Middle East. We specialize in delivering innovative software solutions, AI integration, web and mobile applications, and comprehensive e-commerce platforms.",
    aboutDescription2:
      "Our presence spans across Saudi Arabia, Egypt, Dubai, and Oman, enabling us to serve clients with localized expertise and global standards. We are committed to transforming businesses through cutting-edge technology and exceptional service delivery.",
    learnMore: "Learn More",
    yearsExperience: "Years Experience",
    happyClients: "Happy Clients",
    countries: "Countries",
    projectsDelivered: "Projects Delivered",

    // Portfolio
    ourPortfolio: "Our Portfolio",
    portfolioDescription:
      "Explore our successful projects across various industries and technologies. Each project represents our commitment to excellence and innovation.",
    viewAllProjects: "View All Projects",
    allProjects: "All Projects",
    mobileApps: "Mobile Apps",
    ecommercePlatform: "E-Commerce Platform",
    ecommercePlatformDesc:
      "A comprehensive e-commerce platform with advanced features including inventory management, payment integration, and analytics.",
    healthcareMobileApp: "Healthcare Mobile App",
    healthcareMobileAppDesc:
      "A mobile application for healthcare providers to manage patient records, appointments, and medical history.",
    aiPoweredAnalytics: "AI-Powered Analytics",
    aiPoweredAnalyticsDesc:
      "Machine learning platform for predictive analytics and business intelligence with real-time insights.",
    onlineRetailStore: "Online Retail Store",
    onlineRetailStoreDesc:
      "Full-featured online store with shopping cart, wishlist, and customer account management.",
    corporateWebsite: "Corporate Website",
    corporateWebsiteDesc:
      "Modern corporate website with CMS integration and multilingual support.",
    fitnessTrackingApp: "Fitness Tracking App",
    fitnessTrackingAppDesc:
      "Mobile app for tracking workouts, nutrition, and fitness goals with social features.",
    technologiesUsed: "Technologies Used",
    liveDemo: "Live Demo",
    viewDemo: "View Demo",

    // Why Choose Us
    whyChooseUs: "Why Choose Us",
    whyChooseUsDesc:
      "We combine experience, innovation, and dedication to deliver solutions that drive your business forward.",
    yearsExperienceTitle: "24 Years Experience",
    yearsExperienceDesc:
      "Two decades of proven expertise in software development and technology solutions.",
    cuttingEdgeTech: "Cutting-Edge Technology",
    cuttingEdgeTechDesc:
      "We leverage the latest technologies and frameworks to deliver superior solutions.",
    qualityAssurance: "Quality Assurance",
    qualityAssuranceDesc:
      "Rigorous testing and quality control processes ensure flawless deliverables.",
    expertTeam: "Expert Team",
    expertTeamDesc:
      "Our skilled professionals bring years of industry experience to every project.",
    support247: "24/7 Support",
    support247Desc:
      "Round-the-clock support to ensure your systems run smoothly at all times.",
    provenTrackRecord: "Proven Track Record",
    provenTrackRecordDesc:
      "Hundreds of successful projects delivered across multiple industries.",
    integrity: "Integrity",
    integrityDesc:
      "We conduct business with honesty, transparency, and ethical practices.",
    innovation: "Innovation",
    innovationDesc:
      "We continuously explore new technologies and creative solutions.",
    excellence: "Excellence",
    excellenceDesc:
      "We strive for perfection in every project and deliver quality results.",
    collaboration: "Collaboration",
    collaborationDesc:
      "We work closely with clients as partners in their success journey.",

    // Achievements
    ourAchievements: "Our Achievements",
    achievementsDescription:
      "Our track record speaks for itself. We've consistently delivered excellence and achieved remarkable milestones.",
    projectsCompleted: "Projects Completed",
    projectsCompletedDesc:
      "Successfully delivered projects across various industries",
    clientSatisfaction: "Client Satisfaction",
    clientSatisfactionDesc: "High satisfaction rate from our valued clients",
    activeClients: "Active Clients",
    activeClientsDesc: "Growing portfolio of satisfied customers",
    yearsExcellence: "Years Excellence",
    yearsExcellenceDesc: "Decades of experience in software development",

    // Vision & Mission
    ourVision: "Our Vision",
    ourVisionDesc:
      "To be the leading technology solutions provider in the Middle East, recognized for innovation, excellence, and transformative impact. We envision a future where businesses across the region leverage cutting-edge technology to achieve unprecedented growth and success.",
    ourMission: "Our Mission",
    ourMissionDesc:
      "To deliver exceptional software solutions and services that empower businesses to thrive in the digital age. We are committed to understanding our clients' unique needs, providing innovative solutions, and building long-term partnerships based on trust, quality, and mutual success.",

    // Vision 2030
    supportingVision2030: "Supporting Saudi Vision 2030",
    vision2030Description:
      "As a technology leader in Saudi Arabia, we are proud to contribute to Vision 2030 by providing cutting-edge software solutions, fostering digital transformation, and supporting the Kingdom's ambitious goals for economic diversification and technological advancement.",
    vision2030Innovation: "Innovation",
    vision2030InnovationDesc:
      "Supporting Saudi Vision 2030 through technological innovation and digital transformation.",
    globalStandards: "Global Standards",
    globalStandardsDesc:
      "Delivering solutions that meet international standards while respecting local values.",
    communityImpact: "Community Impact",
    communityImpactDesc:
      "Contributing to the Kingdom's economic diversification and digital economy growth.",
    buildingFuture: "Building the Future Together",
    buildingFutureDesc:
      "Energize Tech Solutions is committed to being a key partner in Saudi Arabia's journey towards Vision 2030, delivering innovative technology solutions that drive progress and prosperity.",

    // Clients
    ourClients: "Our Clients",
    clientsDescription:
      "Trusted by leading businesses across various industries. We take pride in our long-term partnerships and client success stories.",

    // Newsletter
    stayUpdated: "Stay Updated",
    newsletterDescription:
      "Subscribe to our newsletter to receive the latest updates, tech insights, and exclusive offers directly in your inbox.",
    enterEmail: "Enter your email",
    subscribe: "Subscribe",
    subscribed: "Subscribed!",
    thankYou: "Thank you for subscribing!",

    // Map
    findUs: "Find Us",
    mapDescription:
      "Visit us at our offices across the Middle East. We're here to serve you in Saudi Arabia, Egypt, Dubai, and Oman.",
    ourLocation: "Our Location",
    saudiArabia: "Saudi Arabia",
    egypt: "Egypt",
    dubai: "Dubai",
    oman: "Oman",

    // Contact
    getInTouch: "Get In Touch",
    contactDescription:
      "Have a project in mind? Let's discuss how we can help bring your vision to life. Contact us today.",
    contactInformation: "Contact Information",
    email: "Email",
    phone: "Phone",
    address: "Address",
    workingHours: "Working Hours",
    workingHoursTime: "Sun - Thu: 9:00 AM - 6:00 PM",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourPhone: "Your Phone",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    messageSent: "Message Sent!",

    // Career
    joinOur: "Join Our",
    team: "Team",
    careerPageIntro:
      "We are a dynamic, ambitious company with 24 years of experience. Join us and be part of a team that's shaping the future of technology across the Middle East.",
    whyWorkWithUs: "Why Work With Us",
    whyWorkWithUsDesc:
      "At Energize Tech Solutions, we're not just a company - we're a family of passionate professionals dedicated to innovation and excellence.",
    experience: "Experience",
    experienceDesc: "24 years of proven expertise in technology solutions",
    ambition: "Ambition",
    ambitionDesc: "Constantly pushing boundaries and achieving great things",
    reputation: "Reputation",
    reputationDesc: "Well-known name in the market with a strong track record",
    ourHiringProcess: "Our Hiring Process",
    apply: "Apply",
    applyDesc: "Submit your application through our form or email",
    review: "Review",
    reviewDesc: "Our HR team reviews your application",
    interview: "Interview",
    interviewDesc: "Technical and cultural fit interviews",
    offer: "Offer",
    offerDesc: "Receive and accept your offer",
    openPositions: "Open Positions",
    seniorFullStackDev: "Senior Full Stack Developer",
    mobileAppDeveloper: "Mobile App Developer",
    aiMlEngineer: "AI/ML Engineer",
    riyadhKSA: "Riyadh, Saudi Arabia",
    cairoEgypt: "Cairo, Egypt",
    dubaiUAE: "Dubai, UAE",
    fullTime: "Full-time",
    partTime: "Part-time",
    contract: "Contract",
    remote: "Remote",
    department: "Department",
    development: "Development",
    aiInnovation: "AI & Innovation",
    fsReq1: "5+ years of experience in full-stack development",
    fsReq2: "Proficiency in React, Node.js, and TypeScript",
    fsReq3: "Experience with cloud platforms (AWS/Azure)",
    fsReq4: "Strong problem-solving skills",
    fsResp1: "Develop and maintain web applications",
    fsResp2: "Collaborate with cross-functional teams",
    fsResp3: "Write clean, maintainable code",
    fsResp4: "Participate in code reviews",
    fsBenefit1: "Competitive salary package",
    fsBenefit2: "Health insurance",
    fsBenefit3: "Professional development opportunities",
    fsBenefit4: "Flexible working hours",
    applicationSubmitted: "Application submitted! We will contact you soon.",
    viewDetails: "View Details",
    backToPortfolio: "Back to Portfolio",
    backToCareers: "Back to Careers",
    applyNow: "Apply Now",
    requirements: "Requirements",
    responsibilities: "Responsibilities",
    benefits: "Benefits",
    resume: "Resume",
    submitApplication: "Submit Application",

    // Services Detail Page
    serviceWebDevelopment: "Web Development",
    serviceWebDevelopmentDesc:
      "Custom websites and web applications built with cutting-edge technologies. We create responsive, scalable, and high-performance solutions tailored to your business needs.",
    serviceWebDevelopmentFeature1: "Custom Web Applications",
    serviceWebDevelopmentFeature2: "E-Commerce Platforms",
    serviceWebDevelopmentFeature3: "Content Management Systems",
    serviceWebDevelopmentFeature4: "Progressive Web Apps",
    serviceWebDevelopmentFeature5: "API Development",
    serviceMobileApplications: "Mobile Applications",
    serviceMobileApplicationsDesc:
      "Native and cross-platform mobile applications for iOS and Android. We deliver user-friendly apps that engage customers and drive business growth.",
    serviceMobileApplicationsFeature1: "iOS Development",
    serviceMobileApplicationsFeature2: "Android Development",
    serviceMobileApplicationsFeature3: "React Native",
    serviceMobileApplicationsFeature4: "Flutter",
    serviceMobileApplicationsFeature5: "App Maintenance",
    serviceAIMachineLearning: "AI & Machine Learning",
    serviceAIMachineLearningDesc:
      "Artificial intelligence and machine learning solutions to automate processes, gain insights, and unlock new possibilities for your business.",
    serviceAIMachineLearningFeature1: "Machine Learning Models",
    serviceAIMachineLearningFeature2: "Natural Language Processing",
    serviceAIMachineLearningFeature3: "Computer Vision",
    serviceAIMachineLearningFeature4: "Predictive Analytics",
    serviceAIMachineLearningFeature5: "AI Integration",
    serviceECommerceSolutions: "E-Commerce Solutions",
    serviceECommerceSolutionsDesc:
      "Complete e-commerce platforms with secure payment gateways, inventory management, and seamless shopping experiences that convert visitors into customers.",
    serviceECommerceSolutionsFeature1: "Online Stores",
    serviceECommerceSolutionsFeature2: "Payment Integration",
    serviceECommerceSolutionsFeature3: "Inventory Management",
    serviceECommerceSolutionsFeature4: "Order Processing",
    serviceECommerceSolutionsFeature5: "Analytics & Reporting",
    serviceCloudSolutions: "Cloud Solutions",
    serviceCloudSolutionsDesc:
      "Scalable cloud infrastructure and migration services. We help you leverage the power of cloud computing for better performance and cost efficiency.",
    serviceCloudSolutionsFeature1: "Cloud Migration",
    serviceCloudSolutionsFeature2: "AWS/Azure/GCP",
    serviceCloudSolutionsFeature3: "DevOps Services",
    serviceCloudSolutionsFeature4: "Containerization",
    serviceCloudSolutionsFeature5: "Serverless Architecture",
    serviceDatabaseSolutions: "Database Solutions",
    serviceDatabaseSolutionsDesc:
      "Robust database design, optimization, and management services to ensure your data is secure, accessible, and performant.",
    serviceDatabaseSolutionsFeature1: "Database Design",
    serviceDatabaseSolutionsFeature2: "Performance Optimization",
    serviceDatabaseSolutionsFeature3: "Data Migration",
    serviceDatabaseSolutionsFeature4: "Backup & Recovery",
    serviceDatabaseSolutionsFeature5: "Data Security",
    serviceCybersecurity: "Cybersecurity",
    serviceCybersecurityDesc:
      "Comprehensive security solutions to protect your digital assets, data, and infrastructure from threats and vulnerabilities.",
    serviceCybersecurityFeature1: "Security Audits",
    serviceCybersecurityFeature2: "Penetration Testing",
    serviceCybersecurityFeature3: "Security Implementation",
    serviceCybersecurityFeature4: "Compliance",
    serviceCybersecurityFeature5: "Incident Response",
    serviceBusinessIntelligence: "Business Intelligence",
    serviceBusinessIntelligenceDesc:
      "Data analytics and business intelligence solutions to transform raw data into actionable insights for informed decision-making.",
    serviceBusinessIntelligenceFeature1: "Data Analytics",
    serviceBusinessIntelligenceFeature2: "Dashboard Development",
    serviceBusinessIntelligenceFeature3: "Reporting Systems",
    serviceBusinessIntelligenceFeature4: "Data Visualization",
    serviceBusinessIntelligenceFeature5: "Predictive Modeling",
    serviceDigitalTransformation: "Digital Transformation",
    serviceDigitalTransformationDesc:
      "End-to-end digital transformation services to modernize your business operations, processes, and customer experiences.",
    serviceDigitalTransformationFeature1: "Process Automation",
    serviceDigitalTransformationFeature2: "Digital Strategy",
    serviceDigitalTransformationFeature3: "System Integration",
    serviceDigitalTransformationFeature4: "Workflow Optimization",
    serviceDigitalTransformationFeature5: "Change Management",
    serviceMaintenanceSupport: "Maintenance & Support",
    serviceMaintenanceSupportDesc:
      "Ongoing maintenance, updates, and technical support to ensure your systems run smoothly and stay up-to-date with the latest technologies.",
    serviceMaintenanceSupportFeature1: "24/7 Support",
    serviceMaintenanceSupportFeature2: "System Updates",
    serviceMaintenanceSupportFeature3: "Bug Fixes",
    serviceMaintenanceSupportFeature4: "Performance Monitoring",
    serviceMaintenanceSupportFeature5: "Technical Consulting",

    // Tech Stack
    techStackDescription:
      "Our comprehensive technology ecosystem powering innovative solutions across web, mobile, cloud, and AI platforms.",
    ourTechnologies: "Our Technologies",
    cuttingEdge: "Cutting-Edge",
    techStack: "Tech Stack",
    exploreServices: "Explore Services",
    techReactNextjs: "React & Next.js",
    techNodePython: "Node.js & Python",
    techAIML: "AI & Machine Learning",
    techCloudInfrastructure: "Cloud Infrastructure",
    techMobileDevelopment: "Mobile Development",
    techDatabaseSystems: "Database Systems",
    websites: "Websites",
    mobileAppsLabel: "Mobile Apps",
    ecommerceLabel: "E-Commerce",
    cyberSecurity: "Cyber Security",
    aiMl: "AI/ML",
    saas: "SaaS",
    learnMoreService: "Learn More",

    // Offices
    officeRiyadh: "Riyadh, Saudi Arabia",
    officeCairo: "Cairo, Egypt",
    officeDubai: "Dubai, UAE",
    officeMuscat: "Muscat, Oman",

    // Clients Page
    clientTestimonials: "Client Testimonials",
    ourPartners: "Our Partners",
    testimonial1Name: "Ahmed Al-Saud",
    testimonial1Company: "Tech Corporation",
    testimonial1Role: "CEO",
    testimonial1Quote:
      "Energize Tech Solutions transformed our business operations with their innovative software solutions. Their expertise and dedication are unmatched.",
    testimonial2Name: "Sarah Mohamed",
    testimonial2Company: "Digital Innovations",
    testimonial2Role: "CTO",
    testimonial2Quote:
      "Working with Energize Tech has been a game-changer. They delivered a mobile app that exceeded our expectations and drove significant user engagement.",
    testimonial3Name: "Mohammed Hassan",
    testimonial3Company: "E-Commerce Plus",
    testimonial3Role: "Founder",
    testimonial3Quote:
      "Their e-commerce platform solution helped us scale our business rapidly. Professional, reliable, and results-driven team.",

    // Footer
    footerDescription:
      "Leading software development company with 24 years of experience, delivering cutting-edge solutions across the Middle East.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",

    // About Page
    ourStory: "Our Story",
    ourStoryDesc1:
      "Founded with a vision to transform businesses through technology, Energize Tech Solutions has grown from a small startup to a recognized leader in software development across the Middle East. Our journey spans 24 years of innovation, dedication, and client success.",
    ourStoryDesc2:
      "We specialize in delivering innovative software solutions, AI integration, web and mobile applications, and comprehensive e-commerce platforms. Our presence spans across Saudi Arabia, Egypt, Dubai, and Oman, enabling us to serve clients with localized expertise and global standards.",
    ourStoryDesc3:
      "We are committed to transforming businesses through cutting-edge technology and exceptional service delivery, building long-term partnerships based on trust and mutual success.",
    boardOfDirectors: "Board of Directors",
    ourValues: "Our Values",
    ourTechnologyStack: "Our Technology Stack",
    ourOffices: "Our Offices",
    ceoFounder: "CEO & Founder",
    cto: "CTO",
    coo: "COO",
    cfo: "CFO",
    visionaryLeader:
      "Visionary leader with 25+ years in technology and business transformation.",
    techExpert:
      "Expert in cutting-edge technologies and software architecture.",
    operationsSpecialist:
      "Operations specialist ensuring excellence in delivery and client satisfaction.",
    financialStrategist:
      "Financial strategist driving sustainable growth and business development.",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    portfolio: "المشاريع",
    clients: "العملاء",
    career: "الوظائف",
    contact: "اتصل بنا",

    // Hero Section
    pioneering: "ريادة المستقبل",
    create: "أنشئ",
    innovate: "ابتكر",
    dominate: "هيمن",
    heroDescription:
      "دفع الحدود مع حلول مدعومة بالذكاء الاصطناعي، تجارب ويب ثورية، وتقنيات موبايل متطورة",
    launchProject: "إطلاق المشروع",
    exploreWork: "استكشف الأعمال",
    smartDevelopment: "تطوير ذكي",
    aiModels: "نماذج الذكاء الاصطناعي",
    globalClients: "عملاء عالميون",
    projectsLive: "مشاريع مباشرة",

    // Services
    ourServices: "خدماتنا",
    servicesDescription:
      "حلول برمجية شاملة مصممة خصيصاً لاحتياجات عملك. من تطوير الويب إلى تكامل الذكاء الاصطناعي، نقدم التميز.",
    webDevelopment: "تطوير الويب",
    webDevelopmentDesc:
      "مواقع وتطبيقات ويب مخصصة مبنية بأحدث التقنيات لأداء وتجربة مستخدم مثالية.",
    mobileApplications: "تطبيقات الموبايل",
    mobileApplicationsDesc:
      "تطبيقات موبايل أصلية ومتعددة المنصات لنظامي iOS و Android تجذب المستخدمين وتدفع نمو الأعمال.",
    aiSolutions: "حلول الذكاء الاصطناعي",
    aiSolutionsDesc:
      "حلول الذكاء الاصطناعي والتعلم الآلي لأتمتة العمليات وفتح إمكانيات جديدة.",
    ecommerce: "التجارة الإلكترونية",
    ecommerceDesc:
      "منصات تجارة إلكترونية كاملة مع بوابات دفع آمنة وتجارب تسوق سلسة.",
    cloudSolutions: "حلول السحابة",
    cloudSolutionsDesc:
      "بنية تحتية سحابية قابلة للتوسع وخدمات الهجرة لاحتياجات الأعمال الحديثة.",
    digitalTransformation: "التحول الرقمي",
    digitalTransformationDesc: "خدمات تحول رقمي شاملة لتحديث عمليات عملك.",
    viewAllServices: "عرض جميع الخدمات",

    // About
    aboutEnergizeTech: "عن إنرجايز تك",
    aboutDescription1:
      "مع 24 عاماً من التميز في تطوير البرمجيات، أصبحت إنرجايز تك سوليوشنز شريكاً تقنياً رائداً في الشرق الأوسط. نتخصص في تقديم حلول برمجية مبتكرة، تكامل الذكاء الاصطناعي، تطبيقات الويب والموبايل، ومنصات التجارة الإلكترونية الشاملة.",
    aboutDescription2:
      "وجودنا يمتد عبر السعودية، مصر، دبي، وعمان، مما يمكننا من خدمة العملاء بخبرة محلية ومعايير عالمية. نحن ملتزمون بتحويل الأعمال من خلال التكنولوجيا المتطورة وتقديم خدمات استثنائية.",
    learnMore: "اعرف المزيد",
    yearsExperience: "سنوات خبرة",
    happyClients: "عملاء سعداء",
    countries: "دول",
    projectsDelivered: "مشاريع منجزة",

    // Portfolio
    ourPortfolio: "مشاريعنا",
    portfolioDescription:
      "استكشف مشاريعنا الناجحة عبر مختلف الصناعات والتقنيات. كل مشروع يمثل التزامنا بالتميز والابتكار.",
    viewAllProjects: "عرض جميع المشاريع",
    allProjects: "جميع المشاريع",
    mobileApps: "تطبيقات الموبايل",
    ecommercePlatform: "منصة التجارة الإلكترونية",
    ecommercePlatformDesc:
      "منصة تجارة إلكترونية شاملة مع ميزات متقدمة تشمل إدارة المخزون وتكامل الدفع والتحليلات.",
    healthcareMobileApp: "تطبيق الرعاية الصحية",
    healthcareMobileAppDesc:
      "تطبيق موبايل لمقدمي الرعاية الصحية لإدارة سجلات المرضى والمواعيد والتاريخ الطبي.",
    aiPoweredAnalytics: "التحليلات المدعومة بالذكاء الاصطناعي",
    aiPoweredAnalyticsDesc:
      "منصة تعلم آلي للتحليلات التنبؤية وذكاء الأعمال مع رؤى في الوقت الفعلي.",
    onlineRetailStore: "متجر التجزئة الإلكتروني",
    onlineRetailStoreDesc:
      "متجر إلكتروني كامل الميزات مع سلة التسوق وقائمة الأمنيات وإدارة حسابات العملاء.",
    corporateWebsite: "الموقع المؤسسي",
    corporateWebsiteDesc: "موقع مؤسسي حديث مع تكامل CMS ودعم متعدد اللغات.",
    fitnessTrackingApp: "تطبيق تتبع اللياقة",
    fitnessTrackingAppDesc:
      "تطبيق موبايل لتتبع التمارين والتغذية وأهداف اللياقة مع ميزات اجتماعية.",
    technologiesUsed: "التقنيات المستخدمة",
    liveDemo: "عرض مباشر",
    viewDemo: "عرض تجريبي",

    // Why Choose Us
    whyChooseUs: "لماذا تختارنا",
    whyChooseUsDesc:
      "نجمع بين الخبرة والابتكار والتفاني لتقديم حلول تدفع عملك للأمام.",
    yearsExperienceTitle: "24 عاماً من الخبرة",
    yearsExperienceDesc:
      "عقدان من الخبرة المثبتة في تطوير البرمجيات وحلول التكنولوجيا.",
    cuttingEdgeTech: "التكنولوجيا المتطورة",
    cuttingEdgeTechDesc: "نستخدم أحدث التقنيات والأطر لتقديم حلول متفوقة.",
    qualityAssurance: "ضمان الجودة",
    qualityAssuranceDesc:
      "عمليات اختبار ومراقبة جودة صارمة تضمن تسليمات خالية من العيوب.",
    expertTeam: "فريق خبير",
    expertTeamDesc:
      "يجلب محترفونا المهرة سنوات من الخبرة في الصناعة لكل مشروع.",
    support247: "دعم 24/7",
    support247Desc:
      "دعم على مدار الساعة لضمان تشغيل أنظمتك بسلاسة في جميع الأوقات.",
    provenTrackRecord: "سجل حافل مثبت",
    provenTrackRecordDesc: "مئات المشاريع الناجحة المنجزة عبر صناعات متعددة.",
    integrity: "النزاهة",
    integrityDesc: "نمارس الأعمال بأمانة وشفافية وممارسات أخلاقية.",
    innovation: "الابتكار",
    innovationDesc: "نستكشف باستمرار تقنيات وحلول إبداعية جديدة.",
    excellence: "التميز",
    excellenceDesc: "نسعى للكمال في كل مشروع ونقدم نتائج عالية الجودة.",
    collaboration: "التعاون",
    collaborationDesc: "نعمل بشكل وثيق مع العملاء كشركاء في رحلة نجاحهم.",

    // Achievements
    ourAchievements: "إنجازاتنا",
    achievementsDescription:
      "سجلنا يتحدث عن نفسه. لقد قدمنا التميز باستمرار وحققنا معالم رائعة.",
    projectsCompleted: "مشاريع مكتملة",
    projectsCompletedDesc: "مشاريع منجزة بنجاح عبر مختلف الصناعات",
    clientSatisfaction: "رضا العملاء",
    clientSatisfactionDesc: "معدل رضا عالي من عملائنا الكرام",
    activeClients: "عملاء نشطون",
    activeClientsDesc: "محفظة متنامية من العملاء الراضين",
    yearsExcellence: "سنوات التميز",
    yearsExcellenceDesc: "عقود من الخبرة في تطوير البرمجيات",

    // Vision & Mission
    ourVision: "رؤيتنا",
    ourVisionDesc:
      "أن نكون مزود حلول تقنية رائداً في الشرق الأوسط، معترفاً بنا للابتكار والتميز والتأثير التحويلي. نتطلع إلى مستقبل حيث تستفيد الشركات في المنطقة من التكنولوجيا المتطورة لتحقيق نمو ونجاح غير مسبوقين.",
    ourMission: "مهمتنا",
    ourMissionDesc:
      "تقديم حلول وخدمات برمجية استثنائية تمكّن الشركات من الازدهار في العصر الرقمي. نحن ملتزمون بفهم احتياجات عملائنا الفريدة، وتقديم حلول مبتكرة، وبناء شراكات طويلة الأمد مبنية على الثقة والجودة والنجاح المتبادل.",

    // Vision 2030
    supportingVision2030: "دعم رؤية السعودية 2030",
    vision2030Description:
      "كقائد تقني في السعودية، نحن فخورون بالمساهمة في رؤية 2030 من خلال تقديم حلول برمجية متطورة، وتعزيز التحول الرقمي، ودعم أهداف المملكة الطموحة للتنويع الاقتصادي والتقدم التقني.",
    vision2030Innovation: "الابتكار",
    vision2030InnovationDesc:
      "دعم رؤية السعودية 2030 من خلال الابتكار التقني والتحول الرقمي.",
    globalStandards: "معايير عالمية",
    globalStandardsDesc:
      "تقديم حلول تلبي المعايير الدولية مع احترام القيم المحلية.",
    communityImpact: "التأثير المجتمعي",
    communityImpactDesc:
      "المساهمة في التنويع الاقتصادي للمملكة ونمو الاقتصاد الرقمي.",
    buildingFuture: "بناء المستقبل معاً",
    buildingFutureDesc:
      "إنرجايز تك سوليوشنز ملتزمة بأن تكون شريكاً رئيسياً في رحلة السعودية نحو رؤية 2030، وتقديم حلول تقنية مبتكرة تدفع التقدم والازدهار.",

    // Clients
    ourClients: "عملاؤنا",
    clientsDescription:
      "موثوق به من قبل الشركات الرائدة عبر مختلف الصناعات. نفخر بشراكاتنا طويلة الأمد وقصص نجاح عملائنا.",

    // Newsletter
    stayUpdated: "ابق على اطلاع",
    newsletterDescription:
      "اشترك في نشرتنا الإخبارية لتلقي آخر التحديثات ورؤى التقنية والعروض الحصرية مباشرة في بريدك الإلكتروني.",
    enterEmail: "أدخل بريدك الإلكتروني",
    subscribe: "اشترك",
    subscribed: "تم الاشتراك!",
    thankYou: "شكراً لك على الاشتراك!",

    // Map
    findUs: "اعثر علينا",
    mapDescription:
      "زرنا في مكاتبنا عبر الشرق الأوسط. نحن هنا لخدمتك في السعودية، مصر، دبي، وعمان.",
    ourLocation: "موقعنا",
    saudiArabia: "المملكة العربية السعودية",
    egypt: "مصر",
    dubai: "دبي",
    oman: "عمان",

    // Contact
    getInTouch: "تواصل معنا",
    contactDescription:
      "لديك مشروع في الاعتبار؟ دعنا نناقش كيف يمكننا المساعدة في تحقيق رؤيتك. اتصل بنا اليوم.",
    contactInformation: "معلومات الاتصال",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    address: "العنوان",
    workingHours: "ساعات العمل",
    workingHoursTime: "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    yourPhone: "هاتفك",
    yourMessage: "رسالتك",
    sendMessage: "إرسال الرسالة",
    messageSent: "تم إرسال الرسالة!",

    // Career
    joinOur: "انضم إلى",
    team: "فريقنا",
    careerPageIntro:
      "نحن شركة ديناميكية وطموحة مع 24 عاماً من الخبرة. انضم إلينا وكن جزءاً من فريق يشكل مستقبل التكنولوجيا في جميع أنحاء الشرق الأوسط.",
    whyWorkWithUs: "لماذا تعمل معنا",
    whyWorkWithUsDesc:
      "في إنرجايز تك سوليوشنز، لسنا مجرد شركة - نحن عائلة من المحترفين المتحمسين المكرسين للابتكار والتميز.",
    experience: "الخبرة",
    experienceDesc: "24 عاماً من الخبرة المثبتة في حلول التكنولوجيا",
    ambition: "الطموح",
    ambitionDesc: "دفع الحدود باستمرار وتحقيق أشياء عظيمة",
    reputation: "السمعة",
    reputationDesc: "اسم معروف في السوق مع سجل حافل قوي",
    ourHiringProcess: "عملية التوظيف لدينا",
    apply: "التقديم",
    applyDesc: "قدم طلبك من خلال نموذجنا أو البريد الإلكتروني",
    review: "المراجعة",
    reviewDesc: "فريق الموارد البشرية لدينا يراجع طلبك",
    interview: "المقابلة",
    interviewDesc: "مقابلات تقنية وثقافية",
    offer: "العرض",
    offerDesc: "استلم وقبل عرضك",
    openPositions: "الوظائف المتاحة",
    seniorFullStackDev: "مطور Full Stack كبير",
    mobileAppDeveloper: "مطور تطبيقات موبايل",
    aiMlEngineer: "مهندس الذكاء الاصطناعي/التعلم الآلي",
    riyadhKSA: "الرياض، المملكة العربية السعودية",
    cairoEgypt: "القاهرة، مصر",
    dubaiUAE: "دبي، الإمارات العربية المتحدة",
    fullTime: "دوام كامل",
    partTime: "دوام جزئي",
    contract: "عقد",
    remote: "عن بُعد",
    department: "القسم",
    development: "التطوير",
    aiInnovation: "الذكاء الاصطناعي والابتكار",
    fsReq1: "5+ سنوات خبرة في تطوير Full Stack",
    fsReq2: "إتقان React و Node.js و TypeScript",
    fsReq3: "خبرة مع منصات السحابة (AWS/Azure)",
    fsReq4: "مهارات حل المشكلات القوية",
    fsResp1: "تطوير وصيانة تطبيقات الويب",
    fsResp2: "التعاون مع فرق متعددة الوظائف",
    fsResp3: "كتابة كود نظيف وقابل للصيانة",
    fsResp4: "المشاركة في مراجعات الكود",
    fsBenefit1: "حزمة راتب تنافسية",
    fsBenefit2: "تأمين صحي",
    fsBenefit3: "فرص التطوير المهني",
    fsBenefit4: "ساعات عمل مرنة",
    applicationSubmitted: "تم تقديم الطلب! سنتواصل معك قريباً.",
    viewDetails: "عرض التفاصيل",
    backToPortfolio: "العودة إلى المشاريع",
    backToCareers: "العودة إلى الوظائف",
    applyNow: "قدم الآن",
    requirements: "المتطلبات",
    responsibilities: "المسؤوليات",
    benefits: "المزايا",
    resume: "السيرة الذاتية",
    submitApplication: "إرسال الطلب",

    // Services Detail Page
    serviceWebDevelopment: "تطوير الويب",
    serviceWebDevelopmentDesc:
      "مواقع وتطبيقات ويب مخصصة مبنية بأحدث التقنيات. ننشئ حلولاً متجاوبة وقابلة للتوسع وعالية الأداء مصممة خصيصاً لاحتياجات عملك.",
    serviceWebDevelopmentFeature1: "تطبيقات ويب مخصصة",
    serviceWebDevelopmentFeature2: "منصات التجارة الإلكترونية",
    serviceWebDevelopmentFeature3: "أنظمة إدارة المحتوى",
    serviceWebDevelopmentFeature4: "تطبيقات الويب التقدمية",
    serviceWebDevelopmentFeature5: "تطوير واجهات برمجة التطبيقات",
    serviceMobileApplications: "تطبيقات الموبايل",
    serviceMobileApplicationsDesc:
      "تطبيقات موبايل أصلية ومتعددة المنصات لنظامي iOS و Android. نقدم تطبيقات سهلة الاستخدام تجذب العملاء وتدفع نمو الأعمال.",
    serviceMobileApplicationsFeature1: "تطوير iOS",
    serviceMobileApplicationsFeature2: "تطوير Android",
    serviceMobileApplicationsFeature3: "React Native",
    serviceMobileApplicationsFeature4: "Flutter",
    serviceMobileApplicationsFeature5: "صيانة التطبيقات",
    serviceAIMachineLearning: "الذكاء الاصطناعي والتعلم الآلي",
    serviceAIMachineLearningDesc:
      "حلول الذكاء الاصطناعي والتعلم الآلي لأتمتة العمليات والحصول على رؤى وفتح إمكانيات جديدة لعملك.",
    serviceAIMachineLearningFeature1: "نماذج التعلم الآلي",
    serviceAIMachineLearningFeature2: "معالجة اللغة الطبيعية",
    serviceAIMachineLearningFeature3: "رؤية الكمبيوتر",
    serviceAIMachineLearningFeature4: "التحليلات التنبؤية",
    serviceAIMachineLearningFeature5: "تكامل الذكاء الاصطناعي",
    serviceECommerceSolutions: "حلول التجارة الإلكترونية",
    serviceECommerceSolutionsDesc:
      "منصات تجارة إلكترونية كاملة مع بوابات دفع آمنة وإدارة المخزون وتجارب تسوق سلسة تحول الزوار إلى عملاء.",
    serviceECommerceSolutionsFeature1: "المتاجر الإلكترونية",
    serviceECommerceSolutionsFeature2: "تكامل الدفع",
    serviceECommerceSolutionsFeature3: "إدارة المخزون",
    serviceECommerceSolutionsFeature4: "معالجة الطلبات",
    serviceECommerceSolutionsFeature5: "التحليلات والتقارير",
    serviceCloudSolutions: "حلول السحابة",
    serviceCloudSolutionsDesc:
      "بنية تحتية سحابية قابلة للتوسع وخدمات الهجرة. نساعدك على الاستفادة من قوة الحوسبة السحابية لأداء أفضل وكفاءة في التكلفة.",
    serviceCloudSolutionsFeature1: "الهجرة إلى السحابة",
    serviceCloudSolutionsFeature2: "AWS/Azure/GCP",
    serviceCloudSolutionsFeature3: "خدمات DevOps",
    serviceCloudSolutionsFeature4: "الحاويات",
    serviceCloudSolutionsFeature5: "البنية المعمارية بدون خادم",
    serviceDatabaseSolutions: "حلول قواعد البيانات",
    serviceDatabaseSolutionsDesc:
      "خدمات تصميم وتحسين وإدارة قواعد البيانات القوية لضمان أمان وصول وأداء بياناتك.",
    serviceDatabaseSolutionsFeature1: "تصميم قواعد البيانات",
    serviceDatabaseSolutionsFeature2: "تحسين الأداء",
    serviceDatabaseSolutionsFeature3: "هجرة البيانات",
    serviceDatabaseSolutionsFeature4: "النسخ الاحتياطي والاستعادة",
    serviceDatabaseSolutionsFeature5: "أمان البيانات",
    serviceCybersecurity: "الأمن السيبراني",
    serviceCybersecurityDesc:
      "حلول أمنية شاملة لحماية أصولك الرقمية وبياناتك وبنيتك التحتية من التهديدات والثغرات.",
    serviceCybersecurityFeature1: "التدقيق الأمني",
    serviceCybersecurityFeature2: "اختبار الاختراق",
    serviceCybersecurityFeature3: "تنفيذ الأمان",
    serviceCybersecurityFeature4: "الامتثال",
    serviceCybersecurityFeature5: "الاستجابة للحوادث",
    serviceBusinessIntelligence: "ذكاء الأعمال",
    serviceBusinessIntelligenceDesc:
      "حلول تحليلات البيانات وذكاء الأعمال لتحويل البيانات الخام إلى رؤى قابلة للتنفيذ لاتخاذ قرارات مستنيرة.",
    serviceBusinessIntelligenceFeature1: "تحليلات البيانات",
    serviceBusinessIntelligenceFeature2: "تطوير لوحات المعلومات",
    serviceBusinessIntelligenceFeature3: "أنظمة التقارير",
    serviceBusinessIntelligenceFeature4: "تصور البيانات",
    serviceBusinessIntelligenceFeature5: "النمذجة التنبؤية",
    serviceDigitalTransformation: "التحول الرقمي",
    serviceDigitalTransformationDesc:
      "خدمات تحول رقمي شاملة لتحديث عمليات عملك وعملياته وتجارب عملائك.",
    serviceDigitalTransformationFeature1: "أتمتة العمليات",
    serviceDigitalTransformationFeature2: "الاستراتيجية الرقمية",
    serviceDigitalTransformationFeature3: "تكامل الأنظمة",
    serviceDigitalTransformationFeature4: "تحسين سير العمل",
    serviceDigitalTransformationFeature5: "إدارة التغيير",
    serviceMaintenanceSupport: "الصيانة والدعم",
    serviceMaintenanceSupportDesc:
      "صيانة وتحديثات ودعم فني مستمر لضمان تشغيل أنظمتك بسلاسة والبقاء محدثة بأحدث التقنيات.",
    serviceMaintenanceSupportFeature1: "دعم 24/7",
    serviceMaintenanceSupportFeature2: "تحديثات النظام",
    serviceMaintenanceSupportFeature3: "إصلاح الأخطاء",
    serviceMaintenanceSupportFeature4: "مراقبة الأداء",
    serviceMaintenanceSupportFeature5: "الاستشارات التقنية",

    // Tech Stack
    techStackDescription:
      "منظومتنا التقنية الشاملة التي تدعم الحلول المبتكرة عبر منصات الويب والموبايل والسحابة والذكاء الاصطناعي.",
    ourTechnologies: "تقنياتنا",
    cuttingEdge: "أحدث",
    techStack: "التقنيات",
    exploreServices: "استكشف الخدمات",
    techReactNextjs: "React & Next.js",
    techNodePython: "Node.js & Python",
    techAIML: "الذكاء الاصطناعي والتعلم الآلي",
    techCloudInfrastructure: "البنية التحتية السحابية",
    techMobileDevelopment: "تطوير الموبايل",
    techDatabaseSystems: "أنظمة قواعد البيانات",
    websites: "مواقع الويب",
    mobileAppsLabel: "تطبيقات الموبايل",
    ecommerceLabel: "التجارة الإلكترونية",
    cyberSecurity: "الأمن السيبراني",
    aiMl: "الذكاء الاصطناعي",
    saas: "البرمجيات كخدمة",
    learnMoreService: "اعرف المزيد",

    // Offices
    officeRiyadh: "الرياض، المملكة العربية السعودية",
    officeCairo: "القاهرة، مصر",
    officeDubai: "دبي، الإمارات العربية المتحدة",
    officeMuscat: "مسقط، عمان",

    // Clients Page
    clientTestimonials: "شهادات العملاء",
    ourPartners: "شركاؤنا",
    testimonial1Name: "أحمد السعود",
    testimonial1Company: "تيك كوربوريشن",
    testimonial1Role: "الرئيس التنفيذي",
    testimonial1Quote:
      "حولت إنرجايز تك سوليوشنز عمليات أعمالنا بحلولها البرمجية المبتكرة. خبرتها وتفانيها لا مثيل لهما.",
    testimonial2Name: "سارة محمد",
    testimonial2Company: "الابتكارات الرقمية",
    testimonial2Role: "رئيس التكنولوجيا",
    testimonial2Quote:
      "كان العمل مع إنرجايز تك نقطة تحول. لقد قدموا تطبيق موبايل تجاوز توقعاتنا ودفع مشاركة المستخدمين بشكل كبير.",
    testimonial3Name: "محمد حسن",
    testimonial3Company: "إي-كومرس بلس",
    testimonial3Role: "المؤسس",
    testimonial3Quote:
      "ساعدنا حل منصة التجارة الإلكترونية الخاص بهم على توسيع أعمالنا بسرعة. فريق محترف وموثوق ومدفوع بالنتائج.",

    // Footer
    footerDescription:
      "شركة رائدة في تطوير البرمجيات بخبرة 24 عاماً، تقدم حلولاً متطورة في جميع أنحاء الشرق الأوسط.",
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات الاتصال",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",

    // About Page
    ourStory: "قصتنا",
    ourStoryDesc1:
      "تأسست برؤية لتحويل الأعمال من خلال التكنولوجيا، نمت إنرجايز تك سوليوشنز من شركة ناشئة صغيرة إلى قائد معترف به في تطوير البرمجيات عبر الشرق الأوسط. تمتد رحلتنا على 24 عاماً من الابتكار والتفاني ونجاح العملاء.",
    ourStoryDesc2:
      "نتخصص في تقديم حلول برمجية مبتكرة وتكامل الذكاء الاصطناعي وتطبيقات الويب والموبايل ومنصات التجارة الإلكترونية الشاملة. يمتد وجودنا عبر المملكة العربية السعودية ومصر ودبي وعمان، مما يمكننا من خدمة العملاء بخبرة محلية ومعايير عالمية.",
    ourStoryDesc3:
      "نحن ملتزمون بتحويل الأعمال من خلال التكنولوجيا المتطورة وتقديم الخدمات الاستثنائية، وبناء شراكات طويلة الأمد قائمة على الثقة والنجاح المتبادل.",
    boardOfDirectors: "مجلس الإدارة",
    ourValues: "قيمنا",
    ourTechnologyStack: "تقنياتنا",
    ourOffices: "مكاتبنا",
    ceoFounder: "الرئيس التنفيذي والمؤسس",
    cto: "رئيس التكنولوجيا",
    coo: "رئيس العمليات",
    cfo: "رئيس المالية",
    visionaryLeader:
      "قائد رؤيوي مع أكثر من 25 عاماً في التكنولوجيا وتحويل الأعمال.",
    techExpert: "خبير في التقنيات المتطورة وهندسة البرمجيات.",
    operationsSpecialist: "أخصائي عمليات يضمن التميز في التسليم ورضا العملاء.",
    financialStrategist: "استراتيجي مالي يدفع النمو المستدام وتطوير الأعمال.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language;
    if (saved && (saved === "en" || saved === "ar")) {
      setLang(saved);
      // Apply immediately on mount
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = saved;
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", lang);
      // Update HTML attributes
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      // Update body class for font
      if (lang === "ar") {
        document.body.classList.add("font-arabic");
      } else {
        document.body.classList.remove("font-arabic");
      }
    }
  }, [lang, mounted]);

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
