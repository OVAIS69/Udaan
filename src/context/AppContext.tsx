import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  UserRole,
  UserProfile,
  CareerItem,
  ScholarshipItem,
  EntranceExamItem,
  RoadmapStep,
  QAQuestion
} from '../types';
import { TRANSLATIONS, TranslationDictionary } from '../translations';
import { CAREERS_DATA } from '../data/careersData';
import { SCHOLARSHIPS_DATA } from '../data/scholarshipsData';
import { EXAMS_DATA } from '../data/examsData';
import { INITIAL_QA_QUESTIONS } from '../data/mentorsData';

export type ActiveTab =
  | 'home'
  | 'careers'
  | 'scholarships'
  | 'exams'
  | 'pathways'
  | 'assessment'
  | 'mentors'
  | 'roadmap'
  | 'bookmarks'
  | 'glossary'
  | 'admin';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  switchRole: (role: UserRole) => void;
  // Bookmarks
  bookmarkedIds: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  // Roadmap
  roadmapSteps: RoadmapStep[];
  toggleRoadmapStep: (stepId: string) => void;
  addCustomRoadmapStep: (title: string, category: 'academic' | 'document' | 'entrance' | 'skill') => void;
  loadPresetRoadmap: (career: CareerItem) => void;
  resetRoadmap: () => void;
  // Details Modal
  selectedCareer: CareerItem | null;
  setSelectedCareer: (career: CareerItem | null) => void;
  selectedScholarship: ScholarshipItem | null;
  setSelectedScholarship: (scholarship: ScholarshipItem | null) => void;
  selectedExam: EntranceExamItem | null;
  setSelectedExam: (exam: EntranceExamItem | null) => void;
  // Comparison
  compareCareerIds: string[];
  toggleCompareCareer: (id: string) => void;
  clearComparison: () => void;
  // Global Search & Quick Start
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  quickStageFilter: string;
  setQuickStageFilter: (stage: string) => void;
  // Community Q&A
  qaQuestions: QAQuestion[];
  addQAQuestion: (question: string, grade: string) => void;
  // Scholarships CMS
  scholarshipsList: ScholarshipItem[];
  toggleSampleFlag: (scholarshipId: string) => void;
  toggleVerifiedFlag: (scholarshipId: string) => void;
  // Audio Speech Reader
  isSpeaking: boolean;
  speakText: (text: string) => void;
  stopSpeaking: () => void;
  // Toast notifications
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEFAULT_PROFILE: UserProfile = {
  id: 'usr-student-01',
  name: 'Aarav Deshmukh',
  role: 'student',
  state: 'Maharashtra',
  educationStage: 'Class 12 (Science)',
  category: 'OBC / EWS',
  email: 'aarav.student@udaan.demo',
  isLoggedIn: true
};

const DEFAULT_ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 'step-1',
    title: 'Obtain Current Financial Year Income Certificate',
    description: 'Issued by Tahsildar / Revenue Authority. Essential to qualify for government scholarships and 50% tuition waiver.',
    category: 'document',
    completed: true,
    deadlineNotice: 'Valid for current financial year'
  },
  {
    id: 'step-2',
    title: 'Seed Bank Account with Aadhaar for Direct Benefit Transfer (DBT)',
    description: 'Visit bank branch and ensure account is linked to NPCI mapper for scholarships.gov.in and MahaDBT transfers.',
    category: 'document',
    completed: true,
    externalLink: 'https://myaadhaar.uidai.gov.in'
  },
  {
    id: 'step-3',
    title: 'Download and Master NCERT Core Textbooks',
    description: 'Solve all end-of-chapter exemplar problems for competitive exam foundation (JEE, NEET, CUET).',
    category: 'academic',
    completed: false
  },
  {
    id: 'step-4',
    title: 'Register for Central & State Entrance Examinations',
    description: 'Keep track of application portals (NTA / State CET Cell) during November to March.',
    category: 'entrance',
    completed: false
  },
  {
    id: 'step-5',
    title: 'Submit Post-Matric Scholarship Application on MahaDBT / NSP',
    description: 'Apply within 30 days of completing college admission via Centralized Admission Process (CAP).',
    category: 'document',
    completed: false
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('udaan_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('udaan_bookmarks');
    return saved ? JSON.parse(saved) : ['software-developer', 'mahadbt-ebc-freeship', 'mht-cet'];
  });

  const [roadmapSteps, setRoadmapSteps] = useState<RoadmapStep[]>(() => {
    const saved = localStorage.getItem('udaan_roadmap');
    return saved ? JSON.parse(saved) : DEFAULT_ROADMAP_STEPS;
  });

  const [selectedCareer, setSelectedCareer] = useState<CareerItem | null>(null);
  const [selectedScholarship, setSelectedScholarship] = useState<ScholarshipItem | null>(null);
  const [selectedExam, setSelectedExam] = useState<EntranceExamItem | null>(null);
  const [compareCareerIds, setCompareCareerIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quickStageFilter, setQuickStageFilter] = useState<string>('');
  const [qaQuestions, setQaQuestions] = useState<QAQuestion[]>(INITIAL_QA_QUESTIONS);
  const [scholarshipsList, setScholarshipsList] = useState<ScholarshipItem[]>(SCHOLARSHIPS_DATA);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('udaan_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('udaan_bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  useEffect(() => {
    localStorage.setItem('udaan_roadmap', JSON.stringify(roadmapSteps));
  }, [roadmapSteps]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const switchRole = (role: UserRole) => {
    if (role === 'student') {
      setUserProfile(DEFAULT_PROFILE);
      showToast('Switched to Student Mode (Aarav Deshmukh)');
    } else if (role === 'mentor') {
      setUserProfile({
        id: 'usr-mentor-01',
        name: 'Dr. Sunita Patil',
        role: 'mentor',
        state: 'Maharashtra',
        educationStage: 'Faculty & Career Guide',
        category: 'Educator',
        email: 'dr.sunita@college.edu.in',
        isLoggedIn: true
      });
      showToast('Switched to Verified Mentor Mode (Dr. Sunita Patil)');
    } else if (role === 'admin') {
      setUserProfile({
        id: 'usr-admin-01',
        name: 'Portal Administrator',
        role: 'admin',
        state: 'All India',
        educationStage: 'Platform Safety & Verification Lead',
        category: 'Staff',
        email: 'admin@udaanindia.gov.in',
        isLoggedIn: true
      });
      showToast('Switched to Administrator Mode (CMS & Verification Controls)');
    }
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      if (prev.includes(id)) {
        showToast('Removed from saved items');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Saved to your bookmarks!');
        return [...prev, id];
      }
    });
  };

  const isBookmarked = (id: string) => bookmarkedIds.includes(id);

  const toggleRoadmapStep = (stepId: string) => {
    setRoadmapSteps((prev) =>
      prev.map((step) =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      )
    );
  };

  const addCustomRoadmapStep = (
    title: string,
    category: 'academic' | 'document' | 'entrance' | 'skill'
  ) => {
    const newStep: RoadmapStep = {
      id: 'step-' + Date.now(),
      title,
      description: 'Custom milestone added by student.',
      category,
      completed: false
    };
    setRoadmapSteps((prev) => [newStep, ...prev]);
    showToast('New milestone added to your roadmap!');
  };

  const loadPresetRoadmap = (career: CareerItem) => {
    const generated: RoadmapStep[] = [
      {
        id: 'step-gen-1',
        title: `Verify 10th / 12th Prerequisites for ${career.title}`,
        description: `Ensure you have the required subjects: ${career.subjectsAfter12th}`,
        category: 'academic',
        completed: false
      },
      {
        id: 'step-gen-2',
        title: `Prepare Required Entrance Exam (${career.entranceExams[0] || 'State CET'})`,
        description: 'Download past question papers and review syllabus weightage.',
        category: 'entrance',
        completed: false
      },
      {
        id: 'step-gen-3',
        title: 'Apply for Fee Waiver / Scholarships on MahaDBT / NSP',
        description: `Check eligibility for: ${career.suitableScholarships.slice(0, 2).join(', ')}`,
        category: 'document',
        completed: false
      },
      {
        id: 'step-gen-4',
        title: 'Study Free Foundational Course Online',
        description: career.freeResources[0]?.title || 'Complete free introductory module',
        category: 'skill',
        completed: false,
        externalLink: career.freeResources[0]?.url
      }
    ];

    setRoadmapSteps(generated);
    setActiveTab('roadmap');
    showToast(`Roadmap generated for ${career.title}!`);
  };

  const resetRoadmap = () => {
    setRoadmapSteps(DEFAULT_ROADMAP_STEPS);
    showToast('Roadmap reset to standard preparation milestones.');
  };

  const toggleCompareCareer = (id: string) => {
    setCompareCareerIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 2) {
        showToast('You can compare maximum 2 careers at once.');
        return [prev[1], id];
      }
      showToast('Career added to comparison.');
      return [...prev, id];
    });
  };

  const clearComparison = () => {
    setCompareCareerIds([]);
  };

  const addQAQuestion = (question: string, grade: string) => {
    const newQA: QAQuestion = {
      id: 'qa-' + Date.now(),
      studentName: `${userProfile.name} (${userProfile.educationStage})`,
      studentGrade: grade || userProfile.educationStage,
      question,
      category: 'General Career Guidance',
      date: 'Just now'
    };
    setQaQuestions((prev) => [newQA, ...prev]);
    showToast('Your question has been submitted for mentor review!');
  };

  const toggleSampleFlag = (scholarshipId: string) => {
    setScholarshipsList((prev) =>
      prev.map((item) =>
        item.id === scholarshipId
          ? { ...item, isSampleRecord: !item.isSampleRecord }
          : item
      )
    );
    showToast('Updated demonstration flag for scholarship');
  };

  const toggleVerifiedFlag = (scholarshipId: string) => {
    setScholarshipsList((prev) =>
      prev.map((item) =>
        item.id === scholarshipId
          ? { ...item, isVerifiedGovt: !item.isVerifiedGovt }
          : item
      )
    );
    showToast('Updated government verification status');
  };

  // Text-To-Speech for Students with Limited Literacy
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) {
      showToast('Text-to-speech is not supported on this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (language === 'hi') {
      utterance.lang = 'hi-IN';
    } else if (language === 'mr') {
      utterance.lang = 'mr-IN';
    } else {
      utterance.lang = 'en-IN';
    }
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
    showToast('Reading content aloud...');
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    showToast('Audio reading paused.');
  };

  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        activeTab,
        setActiveTab,
        userProfile,
        setUserProfile,
        switchRole,
        bookmarkedIds,
        toggleBookmark,
        isBookmarked,
        roadmapSteps,
        toggleRoadmapStep,
        addCustomRoadmapStep,
        loadPresetRoadmap,
        resetRoadmap,
        selectedCareer,
        setSelectedCareer,
        selectedScholarship,
        setSelectedScholarship,
        selectedExam,
        setSelectedExam,
        compareCareerIds,
        toggleCompareCareer,
        clearComparison,
        searchQuery,
        setSearchQuery,
        quickStageFilter,
        setQuickStageFilter,
        qaQuestions,
        addQAQuestion,
        scholarshipsList,
        toggleSampleFlag,
        toggleVerifiedFlag,
        isSpeaking,
        speakText,
        stopSpeaking,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
