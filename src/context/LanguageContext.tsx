"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi" | "gu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navServices: "Services",
    navProjects: "Projects",
    navBlog: "Blog",
    navContact: "Contact",
    navAdmin: "Admin",

    // Hero
    heroTitle: "HIRE. BUILD. LAUNCH.",
    heroSubtitle: "Hi, I'm Vishvrajsinh Rathod, an M.Sc. IT Student & Full-Stack Developer from Ahmedabad, Gujarat.",
    heroBtnHire: "Hire Me",
    heroBtnProjects: "View Projects",
    heroBtnResume: "Download Resume",

    // About
    aboutTitle: "About Me",
    aboutIntro: "Enthusiastic IT graduate with skills in Python, HTML, CSS, JavaScript, and MySQL. Currently pursuing my M.Sc. in Information Technology at Silver Oak University.",
    aboutEducation: "Education & Journey",
    aboutSkills: "Core Stack",
    aboutStatsYears: "Years Learning & Building",
    aboutStatsProjects: "Projects Completed",
    aboutStatsClient: "Clients Globally",

    // Skills
    skillsTitle: "Technical Arsenal",
    skillsSubtitle: "A curated list of technologies I leverage daily to engineer premium solutions.",
    skillsFilterAll: "All Stack",
    skillsFilterFrontend: "Frontend",
    skillsFilterBackend: "Backend & DB",
    skillsFilterAI: "AI & APIs",

    // Services
    servicesTitle: "Services Offered",
    servicesSubtitle: "Premium digital solutions designed to elevate your company's web experience.",
    serviceDevTitle: "Full-Stack Web Development",
    serviceDevDesc: "Tailored Next.js and React applications with premium styling, clean code, and fast performance.",
    serviceAiTitle: "AI Integration",
    serviceAiDesc: "Embed advanced AI models (Gemini, Claude, OpenAI) to create intelligent user interfaces.",
    serviceApiTitle: "API & Backend Design",
    serviceApiDesc: "High-performance REST APIs built with FastAPI, connected to PostgreSQL and Supabase.",
    serviceSeoTitle: "Technical SEO & Speed",
    serviceSeoDesc: "Optimization of pages to score 95+ on Lighthouse, ensuring higher traffic and conversions.",

    // Projects
    projectsTitle: "Featured Projects",
    projectsSubtitle: "A display of premium applications built to solve complex real-world problems.",
    projLiveDemo: "Live Demo",
    projGithub: "GitHub",
    projArchitecture: "Architecture",
    projChallenges: "Challenges Overcome",
    projFeatures: "Key Features",

    // GitHub
    githubTitle: "Open Source Footprint",
    githubSubtitle: "Live contribution tracker and active code repositories.",
    githubCommits: "Total Commits (This Year)",
    githubRepos: "Pinned Repositories",
    githubStars: "Stars Earned",

    // Certificates
    certTitle: "Achievements & Certificates",
    certBtnVerify: "Verify Credentials",

    // Testimonials
    testTitle: "Client & Colleague Feedback",

    // Blog
    blogTitle: "Insights & Engineering Articles",
    blogSearch: "Search articles...",
    blogReadingTime: "min read",

    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "Ready to work together? Book a slot or drop me a direct message.",
    contactName: "Name",
    contactEmail: "Email",
    contactMessage: "Message",
    contactSend: "Send Message",
    contactBooking: "Book a Calendly Call",

    // AI
    aiChatTitle: "AI Portfolio Assistant",
    aiPlaceholder: "Ask me about my skills, projects, or career...",
    aiAdviser: "AI Career Advisor",
    aiAnalyzer: "AI Resume Analyzer",
    aiProjectRec: "Project Recommender",

    // Common
    visitorCount: "Visitor Count",
    localTime: "Local Time",
  },
  hi: {
    navHome: "मुख्य",
    navAbout: "मेरे बारे में",
    navSkills: "कौशल",
    navServices: "सेवाएं",
    navProjects: "परियोजनाएं",
    navBlog: "ब्लॉग",
    navContact: "संपर्क",
    navAdmin: "एडमिन",

    heroTitle: "हायर. बिल्ड. लॉन्च.",
    heroSubtitle: "नमस्ते, मैं विश्वराजसिंह राठौड़ हूँ, एक एम.एससी. आईटी छात्र और फुल-स्टैक डेवलपर, अहमदाबाद से।",
    heroBtnHire: "हायर करें",
    heroBtnProjects: "परियोजनाएं देखें",
    heroBtnResume: "रिज्यूमे डाउनलोड करें",

    aboutTitle: "मेरे बारे में",
    aboutIntro: "पायथन, एचटीएमएल, सीएसएस, जावास्क्रिप्ट और माईएसक्यूएल में कौशल के साथ उत्साही आईटी स्नातक। वर्तमान में सिल्वर ओक यूनिवर्सिटी से सूचना प्रौद्योगिकी में एम.एससी. कर रहा हूँ।",
    aboutEducation: "शिक्षा और यात्रा",
    aboutSkills: "मुख्य तकनीक",
    aboutStatsYears: "सीखने और बनाने के वर्ष",
    aboutStatsProjects: "पूरी की गई परियोजनाएं",
    aboutStatsClient: "वैश्विक क्लाइंट",

    skillsTitle: "तकनीकी कौशल",
    skillsSubtitle: "दैनिक प्रीमियम समाधान तैयार करने के लिए उपयोग की जाने वाली तकनीकों की सूची।",
    skillsFilterAll: "सभी",
    skillsFilterFrontend: "फ्रंटएंड",
    skillsFilterBackend: "बैकएंड और डेटाबेस",
    skillsFilterAI: "एआई और एपीआई",

    servicesTitle: "प्रदान की जाने वाली सेवाएं",
    servicesSubtitle: "आपकी कंपनी के वेब अनुभव को बेहतर बनाने के लिए डिज़ाइन किए गए प्रीमियम डिजिटल समाधान।",
    serviceDevTitle: "फुल-स्टैक वेब डेवलपमेंट",
    serviceDevDesc: "प्रीमियम डिज़ाइन, साफ़ कोड और तेज़ प्रदर्शन के साथ अनुकूलित नेक्स्ट.जेएस और रिएक्ट ऐप्स।",
    serviceAiTitle: "एआई एकीकरण",
    serviceAiDesc: "बुद्धिमान यूजर इंटरफेस बनाने के लिए उन्नत एआई मॉडल (जेमिनी, क्लाउड, ओपनएआई) एम्बेड करना।",
    serviceApiTitle: "एपीआई और बैकएंड डिज़ाइन",
    serviceApiDesc: "फास्टएपीआई के साथ निर्मित उच्च-प्रदर्शन रेस्ट एपीआई, जो पोस्टग्रेएसक्यूएल और सूपाबेस से जुड़े हैं।",
    serviceSeoTitle: "तकनीकी एसईओ और गति",
    serviceSeoDesc: "उच्च ट्रैफिक और रूपांतरण सुनिश्चित करने के लिए लाइटहाउस पर 95+ स्कोर करने के लिए पृष्ठों का अनुकूलन।",

    projectsTitle: "फीचर्ड प्रोजेक्ट्स",
    projectsSubtitle: "जटिल वास्तविक दुनिया की समस्याओं को हल करने के लिए बनाई गई प्रीमियम परियोजनाओं का प्रदर्शन।",
    projLiveDemo: "लाइव डेमो",
    projGithub: "गिटहब",
    projArchitecture: "आर्किटेक्चर",
    projChallenges: "चुनौतियां",
    projFeatures: "मुख्य विशेषताएं",

    githubTitle: "ओपन सोर्स योगदान",
    githubSubtitle: "लाइव योगदान ट्रैकर और सक्रिय कोड रिपॉजिटरी।",
    githubCommits: "कुल कमिट (इस वर्ष)",
    githubRepos: "पिन की गई रिपॉजिटरी",
    githubStars: "प्राप्त स्टार्स",

    certTitle: "उपलब्धियां और प्रमाण पत्र",
    certBtnVerify: "क्रेडेंशियल सत्यापित करें",

    testTitle: "क्लाइंट और सहकर्मियों की प्रतिक्रिया",

    blogTitle: "इंजीनियरिंग ब्लॉग और विचार",
    blogSearch: "लेख खोजें...",
    blogReadingTime: "मिनट पढ़ने का समय",

    contactTitle: "संपर्क करें",
    contactSubtitle: "एक साथ काम करने के लिए तैयार हैं? अपॉइंटमेंट बुक करें या सीधा संदेश भेजें।",
    contactName: "नाम",
    contactEmail: "ईमेल",
    contactMessage: "संदेश",
    contactSend: "संदेश भेजें",
    contactBooking: "कैलेंडली कॉल बुक करें",

    aiChatTitle: "एआई पोर्टफोलियो सहायक",
    aiPlaceholder: "मुझसे मेरे कौशल, परियोजनाओं या करियर के बारे में पूछें...",
    aiAdviser: "एआई करियर सलाहकार",
    aiAnalyzer: "एआई रिज्यूमे विश्लेषक",
    aiProjectRec: "परियोजना अनुशंसा",

    visitorCount: "विजिटर संख्या",
    localTime: "स्थानीय समय",
  },
  gu: {
    navHome: "મુખ્ય",
    navAbout: "મારા વિશે",
    navSkills: "કૌશલ્યો",
    navServices: "સેવાઓ",
    navProjects: "પ્રોજેક્ટ્સ",
    navBlog: "બ્લોગ",
    navContact: "સંપર્ક",
    navAdmin: "એડમિન",

    heroTitle: "હાયર. બિલ્ડ. લૉન્ચ.",
    heroSubtitle: "નમસ્તે, હું વિશ્વરાજસિંહ રાઠોડ છું, એક એમ.એસસી. આઈટી વિદ્યાર્થી અને ફૂલ-સ્ટેક ડેવલપર, અમદાવાદથી.",
    heroBtnHire: "હાયર કરો",
    heroBtnProjects: "પ્રોજેક્ટ્સ જુઓ",
    heroBtnResume: "રેઝ્યૂમે ડાઉનલોડ કરો",

    aboutTitle: "મારા વિશે",
    aboutIntro: "પાયથોન, એચટીએમએલ, સીએસએસ, જાવાસ્ક્રિપ્ટ અને માયએસક્યુએલ કૌશલ્યો સાથે ઉત્સાહી આઈટી ગ્રેજ્યુએટ. હાલમાં સિલ્વર ઓક યુનિવર્સિટીમાંથી ઈન્ફોર્મેશન ટેકનોલોજીમાં એમ.એસસી. કરી રહ્યો છું.",
    aboutEducation: "શિક્ષણ અને પ્રવાસ",
    aboutSkills: "મુખ્ય ટેકનોલોજી",
    aboutStatsYears: "શીખવા અને બનાવવાના વર્ષો",
    aboutStatsProjects: "પૂરા થયેલા પ્રોજેક્ટ્સ",
    aboutStatsClient: "વૈશ્વિક ક્લાયન્ટ્સ",

    skillsTitle: "તકનીકી કૌશલ્યો",
    skillsSubtitle: "દૈનિક પ્રીમિયમ સોલ્યુશન્સ બનાવવા માટે ઉપયોગમાં લેવાતી ટેક્નોલોજીઓની સૂચિ.",
    skillsFilterAll: "બધા",
    skillsFilterFrontend: "ફ્રન્ટએન્ડ",
    skillsFilterBackend: "બેકએન્ડ અને ડેટાબેઝ",
    skillsFilterAI: "એઆઈ અને એપીઆઈ",

    servicesTitle: "સેવાઓ",
    servicesSubtitle: "તમારી કંપનીના વેબ અનુભવને વધારવા માટે રચાયેલ પ્રીમિયમ ડિજિટલ સોલ્યુશન્સ.",
    serviceDevTitle: "ફૂલ-સ્ટેક વેબ ડેવલપમેન્ટ",
    serviceDevDesc: "પ્રીમિયમ ડિઝાઇન, ક્લીન કોડ અને ઝડપી પ્રદર્શન સાથે કસ્ટમાઇઝ્ડ નેક્સ્ટ.જેએસ અને રિએક્ટ એપ્સ.",
    serviceAiTitle: "એઆઈ એકીકરણ",
    serviceAiDesc: "બુદ્ધિશાળી વપરાશકર્તા ઇન્ટરફેસ બનાવવા માટે અદ્યતન એઆઈ મોડલ્સ (જેમિની, ક્લાઉડ, ઓપનએઆઈ) નો ઉપયોગ કરવો.",
    serviceApiTitle: "એપીઆઈ અને બેકએન્ડ ડિઝાઇન",
    serviceApiDesc: "ફાસ્ટએપીઆઈ સાથે બનેલ હાઇ-પર્ફોર્મન્સ રેસ્ટ એપીઆઈ, જે પોસ્ટગ્રેએસક્યુએલ અને સુપાબેઝ સાથે જોડાયેલ છે.",
    serviceSeoTitle: "તકનીકી એસઈઓ અને સ્પીડ",
    serviceSeoDesc: "વધુ ટ્રાફિક અને રૂપાંતરણો સુનિશ્ચિત કરવા માટે લાઇટહાઉસ પર 95+ સ્કોર કરવા માટે પૃષ્ઠોનું ઑપ્ટિમાઇઝેશન.",

    projectsTitle: "પ્રોજેક્ટ્સ",
    projectsSubtitle: "જટિલ વાસ્તવિક દુનિયાની સમસ્યાઓ હલ કરવા માટે બનેલા પ્રીમિયમ પ્રોજેક્ટ્સનું પ્રદર્શન.",
    projLiveDemo: "લાઈવ ડેમો",
    projGithub: "ગીટહબ",
    projArchitecture: "આર્કિટેક્ચર",
    projChallenges: "પડકારો",
    projFeatures: "મુખ્ય વિશેષતાઓ",

    githubTitle: "ઓપન સોર્સ યોગદાન",
    githubSubtitle: "લાઇવ યોગદાન ટ્રેકર અને સક્રિય કોડ રિપોઝીટરીઝ.",
    githubCommits: "કુલ કમિટ્સ (આ વર્ષે)",
    githubRepos: "પિન કરેલી રિપોઝીટરીઝ",
    githubStars: "મેળવેલા સ્ટાર્સ",

    certTitle: "સિદ્ધિઓ અને પ્રમાણપત્રો",
    certBtnVerify: "પ્રમાણપત્ર ચકાસો",

    testTitle: "ક્લાયંટ અને સાથીદારોના પ્રતિસાદ",

    blogTitle: "એન્જિનિયરિંગ બ્લોગ અને વિચારો",
    blogSearch: "લેખ શોધો...",
    blogReadingTime: "મિનિટ વાંચન સમય",

    contactTitle: "સંપર્ક કરો",
    contactSubtitle: "સાથે કામ કરવા માટે તૈયાર છો? એપોઇન્ટમેન્ટ બુક કરો અથવા સીધો સંદેશ મોકલો.",
    contactName: "નામ",
    contactEmail: "ઈમેલ",
    contactMessage: "સંદેશ",
    contactSend: "સંદેશ મોકલો",
    contactBooking: "કેલેન્ડલી કૉલ બુક કરો",

    aiChatTitle: "એઆઈ પોર્ટફોલિયો સહાયક",
    aiPlaceholder: "મને મારા કૌશલ્યો, પ્રોજેક્ટ્સ અથવા કારકિર્દી વિશે પૂછો...",
    aiAdviser: "એઆઈ કારકિર્દી સલાહકાર",
    aiAnalyzer: "એઆઈ રેઝ્યૂમે વિશ્લેષક",
    aiProjectRec: "પ્રોજેક્ટ ભલામણ",

    visitorCount: "મુલાકાતીઓ ની સંખ્યા",
    localTime: "સ્થાનિક સમય",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang && (savedLang === "en" || savedLang === "hi" || savedLang === "gu")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
