export type Language = 'en' | 'hi' | 'mr';

export type UserRole = 'student' | 'mentor' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  state: string;
  educationStage: string;
  category: string;
  email: string;
  isLoggedIn: boolean;
}

export type CareerCategory =
  | 'technology'
  | 'healthcare'
  | 'government'
  | 'engineering'
  | 'commerce'
  | 'creative'
  | 'education'
  | 'vocational'
  | 'emerging';

export interface CareerItem {
  id: string;
  title: string;
  titleHindi: string;
  titleMarathi: string;
  category: CareerCategory;
  categoryLabel: string;
  brief: string;
  briefHindi: string;
  briefMarathi: string;
  overview: string;
  qualifications: string[];
  subjectsAfter10th: string;
  subjectsAfter12th: string;
  entranceExams: string[];
  govtColleges: string[];
  courseFeesGovt: string;
  courseFeesPrivate: string;
  feesSourceDate: string;
  indicativeSalary: {
    startingTier2OrRural: string;
    startingMetro: string;
    experienced: string;
  };
  suitableScholarships: string[];
  freeResources: {
    title: string;
    provider: string;
    url: string;
    isFree: boolean;
  }[];
  immediateNextSteps: string[];
  disclaimer: string;
}

export type ScholarshipCategory =
  | 'central'
  | 'state_mahadbt'
  | 'state_other'
  | 'merit'
  | 'need_based'
  | 'sc_st'
  | 'obc_sbc'
  | 'ews'
  | 'girls'
  | 'pwd'
  | 'private_trust'
  | 'loan_subsidy';

export interface ScholarshipItem {
  id: string;
  title: string;
  titleHindi: string;
  titleMarathi: string;
  provider: string;
  portalName: string;
  officialUrl: string;
  category: ScholarshipCategory;
  categoryLabel: string;
  targetState: string; // "All India", "Maharashtra", "Uttar Pradesh", etc.
  educationLevel: string; // "Class 9-10", "Class 11-12", "ITI / Diploma", "Undergraduate", "Postgraduate"
  financialBenefit: string;
  eligibilityCriteria: string[];
  familyIncomeLimit: string;
  requiredDocuments: string[];
  applicationTimeline: string;
  isVerifiedGovt: boolean;
  isSampleRecord: boolean;
  lastVerifiedDate: string;
  verificationSource: string;
}

export interface EntranceExamItem {
  id: string;
  name: string;
  fullName: string;
  conductingAuthority: string;
  level: string; // "National", "State (Maharashtra)", "Defence", etc.
  frequency: string;
  eligibility: string;
  subjectsTested: string[];
  officialUrl: string;
  approxApplicationFee: {
    general: string;
    reservedOrGirls: string;
  };
  suitableForCareers: string[];
  keyDatesInfo: string;
  prepResources: {
    title: string;
    provider: string;
    url: string;
  }[];
}

export interface MentorItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  languages: string[];
  domain: string;
  experienceYears: number;
  bio: string;
  backgroundTag: string; // e.g. "First-generation graduate", "Govt School Alumnus", "Polytechnic Route"
  isVerified: boolean;
  availableDays: string[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  category: 'academic' | 'document' | 'entrance' | 'skill';
  completed: boolean;
  deadlineNotice?: string;
  externalLink?: string;
}

export interface UserRoadmap {
  careerId: string;
  careerTitle: string;
  steps: RoadmapStep[];
  lastUpdated: string;
}

export interface QAQuestion {
  id: string;
  studentName: string;
  studentGrade: string;
  question: string;
  category: string;
  date: string;
  mentorAnswer?: {
    mentorName: string;
    mentorRole: string;
    answer: string;
    date: string;
  };
}

export interface AssessmentAnswers {
  currentStage: string;
  favoriteSubjects: string[];
  interests: string[];
  careerGoalType: string; // "govt", "private", "vocational", "entrepreneur", "higher_ed"
  annualBudget: string; // "<15k", "15k-50k", "50k-1.5L", ">1.5L"
  state: string;
  studyMode: string; // "nearby_govt", "online", "distance_open", "relocate"
  category: string; // optional: "General", "OBC", "SC", "ST", "EWS", "Minority", "PwD"
}

export interface AssessmentResult {
  recommendedCareers: CareerItem[];
  affordablePathway: string;
  alternativeBudgetFriendlyOption?: string;
  applicableScholarships: ScholarshipItem[];
  suggestedSteps: string[];
}
