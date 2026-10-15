import { Language } from '../types';

export interface TranslationDictionary {
  brandName: string;
  tagline: string;
  heroDescription: string;
  findCareerPath: string;
  exploreScholarships: string;
  quickStartTitle: string;
  quickStartSubtitle: string;
  navHome: string;
  navCareers: string;
  navScholarships: string;
  navExams: string;
  navPathways: string;
  navAssessment: string;
  navMentors: string;
  navRoadmap: string;
  navBookmarks: string;
  navGlossary: string;
  searchPlaceholder: string;
  filterAll: string;
  verifiedGovtBadge: string;
  sampleRecordBadge: string;
  officialPortalLink: string;
  viewDetails: string;
  saveToBookmarks: string;
  savedToBookmarks: string;
  compareCareers: string;
  generateRoadmap: string;
  disclaimerTitle: string;
  disclaimerText: string;
  audioReadAloud: string;
  audioStop: string;
  roleStudent: string;
  roleMentor: string;
  roleAdmin: string;
  switchRole: string;
  affordableHighlight: string;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    brandName: 'Udaan India',
    tagline: 'Your dreams deserve a direction.',
    heroDescription: 'Discover careers, explore affordable education, find scholarships, and plan your next step — all in one place, built for students across India.',
    findCareerPath: 'Find My Career Path',
    exploreScholarships: 'Explore Scholarships',
    quickStartTitle: 'Where are you right now?',
    quickStartSubtitle: 'Pick your current stage to get tailored pathways, exams, and financial aid.',
    navHome: 'Home',
    navCareers: 'Career Explorer',
    navScholarships: 'Scholarships',
    navExams: 'Entrance Exams',
    navPathways: 'Education Pathways',
    navAssessment: 'Guided Assessment',
    navMentors: 'Mentors',
    navRoadmap: 'My Roadmap',
    navBookmarks: 'Saved Items',
    navGlossary: 'Simple Terms',
    searchPlaceholder: 'Search careers, scholarships, exams, or colleges...',
    filterAll: 'All',
    verifiedGovtBadge: 'Verified Govt Portal',
    sampleRecordBadge: 'Demonstration Record',
    officialPortalLink: 'Visit Official Application Portal',
    viewDetails: 'View Complete Guide',
    saveToBookmarks: 'Save to My Items',
    savedToBookmarks: 'Saved',
    compareCareers: 'Compare Careers',
    generateRoadmap: 'Build Personal Roadmap',
    disclaimerTitle: 'Student Advisory & Safeguard',
    disclaimerText: 'Udaan India does not charge any fees, guarantee competitive exam admissions, or promise jobs. All scholarships link to verified government and statutory authority portals. Beware of fake agents asking for money.',
    audioReadAloud: 'Read Aloud (Audio)',
    audioStop: 'Stop Reading',
    roleStudent: 'Student View',
    roleMentor: 'Mentor View',
    roleAdmin: 'Portal Admin',
    switchRole: 'Switch Role',
    affordableHighlight: 'Affordable / Low-Cost Route'
  },
  hi: {
    brandName: 'उड़ान इंडिया',
    tagline: 'आपके सपनों को सही दिशा।',
    heroDescription: 'करियर की खोज करें, किफायती शिक्षा के रास्ते जानें, छात्रवृत्तियां पाएं और अपना अगला कदम तय करें — पूरे भारत के छात्रों के लिए समर्पित।',
    findCareerPath: 'मेरा करियर मार्ग खोजें',
    exploreScholarships: 'छात्रवृत्तियां देखें',
    quickStartTitle: 'आप अभी किस कक्षा या स्तर पर हैं?',
    quickStartSubtitle: 'अपनी वर्तमान स्थिति चुनें ताकि आपको सही रास्ते, परीक्षाएं और सहायता मिल सके।',
    navHome: 'होम',
    navCareers: 'करियर खोजें',
    navScholarships: 'छात्रवृत्तियां',
    navExams: 'प्रवेश परीक्षाएं',
    navPathways: 'शिक्षा के रास्ते',
    navAssessment: 'मार्गदर्शन परीक्षा',
    navMentors: 'मार्गदर्शक (मेंटर)',
    navRoadmap: 'मेरा रोडमैप',
    navBookmarks: 'सुरक्षित विकल्प',
    navGlossary: 'सरल शब्दकोश',
    searchPlaceholder: 'करियर, छात्रवृत्ति, परीक्षा या कॉलेज खोजें...',
    filterAll: 'सभी',
    verifiedGovtBadge: 'सत्यापित सरकारी पोर्टल',
    sampleRecordBadge: 'डेमो नमूना रिकॉर्ड',
    officialPortalLink: 'आधिकारिक पोर्टल पर जाएं',
    viewDetails: 'पूरी जानकारी देखें',
    saveToBookmarks: 'सेव करें',
    savedToBookmarks: 'सेव किया गया',
    compareCareers: 'करियर तुलना करें',
    generateRoadmap: 'व्यक्तिगत रोडमैप बनाएं',
    disclaimerTitle: 'छात्र सुरक्षा एवं सूचना',
    disclaimerText: 'उड़ान इंडिया कभी कोई शुल्क नहीं लेता, न ही किसी परीक्षा में चयन या नौकरी की झूठी गारंटी देता है। सभी छात्रवृत्तियां सीधे आधिकारिक सरकारी पोर्टलों से जुड़ी हैं। पैसे मांगने वाले धोखेबाजों से सावधान रहें।',
    audioReadAloud: 'बोलकर सुनाएं (ऑडियो)',
    audioStop: 'ऑडियो रोकें',
    roleStudent: 'छात्र प्रोफाइल',
    roleMentor: 'मेंटर प्रोफाइल',
    roleAdmin: 'पोर्टल एडमिन',
    switchRole: 'रोल बदलें',
    affordableHighlight: 'किफायती / कम खर्च का मार्ग'
  },
  mr: {
    brandName: 'उडाण इंडिया',
    tagline: 'तुमच्या स्वप्नांना योग्य दिशा.',
    heroDescription: 'करिअरचे पर्याय शोधा, परवडणाऱ्या शिक्षणाचे मार्ग जाणून घ्या, शिष्यवृत्ती मिळवा आणि पुढचे पाऊल टाका — भारतातील सर्व विद्यार्थ्यांसाठी मोफत व्यासपीठ.',
    findCareerPath: 'माझा करिअर मार्ग शोधा',
    exploreScholarships: 'शिष्यवृत्ती शोधा',
    quickStartTitle: 'सध्या तुम्ही कोणत्या टप्प्यावर आहात?',
    quickStartSubtitle: 'तुमची सद्यस्थिती निवडा आणि योग्य शैक्षणिक मार्ग, प्रवेश परीक्षा व शासकीय सवलती मिळवा.',
    navHome: 'मुख्यपृष्ठ',
    navCareers: 'करिअर शोध',
    navScholarships: 'शिष्यवृत्ती (महाडीबीटी व केंद्र)',
    navExams: 'प्रवेश परीक्षा',
    navPathways: 'शैक्षणिक मार्ग',
    navAssessment: 'करिअर चाचणी',
    navMentors: 'मार्गदर्शक (मेंटर)',
    navRoadmap: 'माझा रोडमॅप',
    navBookmarks: 'जतन केलेले पर्याय',
    navGlossary: 'सोपे शब्द समजून घ्या',
    searchPlaceholder: 'करिअर, शिष्यवृत्ती, परीक्षा किंवा कॉलेज शोधा...',
    filterAll: 'सर्व',
    verifiedGovtBadge: 'सत्यापित शासकीय पोर्टल',
    sampleRecordBadge: 'नमुना डेमो नोंद',
    officialPortalLink: 'अधिकृत अर्जाच्या पोर्टलवर जा',
    viewDetails: 'सविस्तर माहिती पहा',
    saveToBookmarks: 'जतन करा',
    savedToBookmarks: 'जतन झाले',
    compareCareers: 'करिअर तुलना',
    generateRoadmap: 'वैयक्तिक रोडमॅप तयार करा',
    disclaimerTitle: 'विद्यार्थी सुरक्षा व सूचना',
    disclaimerText: 'उडाण इंडिया कोणत्याही शुल्काची मागणी करत नाही, तसेच स्पर्धा परीक्षांमध्ये हमखास निवडीची खोटी हमी देत नाही. सर्व शिष्यवृत्ती महाडीबीटी आणि राष्ट्रीय छात्रवृत्ती पोर्टलशी जोडलेल्या आहेत.',
    audioReadAloud: 'मोठ्याने ऐका (ऑडिओ)',
    audioStop: 'ऑडिओ थांबवा',
    roleStudent: 'विद्यार्थी प्रोफाइल',
    roleMentor: 'मेंटर प्रोफाइल',
    roleAdmin: 'पोर्टल ॲडमिन',
    switchRole: 'भूमिका बदला',
    affordableHighlight: 'कमी खर्चातील / शासकीय मार्ग'
  }
};
