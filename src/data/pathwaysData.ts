export interface EducationPathwayStage {
  id: string;
  stageName: string;
  stageNameHindi: string;
  stageNameMarathi: string;
  targetGroup: string;
  summary: string;
  options: {
    title: string;
    description: string;
    duration: string;
    avgGovtCost: string;
    avgPrivateCost: string;
    keyPrerequisites: string;
    futureOutcomes: string[];
    isAffordableHighlight?: boolean;
  }[];
}

export const PATHWAYS_DATA: EducationPathwayStage[] = [
  {
    id: 'after-10th',
    stageName: 'After Class 10 (Secondary Schooling)',
    stageNameHindi: 'कक्षा 10 के बाद के रास्ते',
    stageNameMarathi: 'इयत्ता १० वी नंतरचे मार्ग',
    targetGroup: 'Students completing Class 10 Board exams',
    summary: 'Class 10 is the foundational branching point in the Indian education system. Students can choose between traditional Senior Secondary (Class 11-12), vocational trade training (ITI), or technical diplomas (Polytechnic).',
    options: [
      {
        title: 'Class 11-12: Science Stream (PCM / PCB / PCMB)',
        description: 'Rigorous 2-year preparation for engineering, medicine, pharmacy, nursing, defense, and fundamental research.',
        duration: '2 Years',
        avgGovtCost: '₹1,500 - ₹5,000 / year in Govt Junior Colleges / Kendriya Vidyalayas',
        avgPrivateCost: '₹30,000 - ₹1,20,000 / year in private schools',
        keyPrerequisites: 'Class 10 with minimum 55-60% in Science and Mathematics',
        futureOutcomes: ['JEE Main / Advanced (B.Tech)', 'NEET-UG (MBBS, BDS, Nursing)', 'MHT-CET', 'NDA (Defense)']
      },
      {
        title: 'Class 11-12: Commerce Stream',
        description: 'Focuses on financial literacy, accountancy, business law, economics, and taxation.',
        duration: '2 Years',
        avgGovtCost: '₹1,200 - ₹4,000 / year in Govt Junior Colleges',
        avgPrivateCost: '₹25,000 - ₹80,000 / year in private colleges',
        keyPrerequisites: 'Class 10 pass with interest in numbers, business, and economics',
        futureOutcomes: ['CA Foundation (ICAI)', 'B.Com / BBA', 'Banking Examinations', 'CMA & CS']
      },
      {
        title: 'Class 11-12: Humanities & Arts Stream',
        description: 'Builds critical thinking, history, political science, geography, literature, journalism, and public administration.',
        duration: '2 Years',
        avgGovtCost: '₹1,000 - ₹3,500 / year in Govt schools',
        avgPrivateCost: '₹20,000 - ₹70,000 / year in private schools',
        keyPrerequisites: 'Class 10 pass with interest in social issues and writing',
        futureOutcomes: ['UPSC / State PSC Civil Services', 'Law (5-Year Integrated BA LLB)', 'Design (NID / NIFT)', 'Teaching & Journalism']
      },
      {
        title: 'Polytechnic Diploma (Engineering & Technology)',
        description: 'Practical, industry-oriented engineering training. Crucial for students seeking an affordable technical education without expensive Class 11-12 coaching.',
        duration: '3 Years (Post-10th)',
        avgGovtCost: '₹6,000 - ₹18,000 / year in Govt Polytechnics',
        avgPrivateCost: '₹40,000 - ₹80,000 / year in private polytechnics',
        keyPrerequisites: 'Class 10 pass with Math and Science',
        futureOutcomes: ['Direct Lateral Entry to 2nd Year B.Tech (Direct 3-year B.Tech)', 'Junior Engineer in Railways / PWD / MSEB', 'Industrial Technical Supervisor'],
        isAffordableHighlight: true
      },
      {
        title: 'ITI (Industrial Training Institute) Trades',
        description: 'Short-duration vocational training focusing 100% on practical craftsmanship, tools, wiring, and machinery. Ideal for students needing fast employment.',
        duration: '1 to 2 Years',
        avgGovtCost: '₹1,500 - ₹3,500 total in Govt ITIs (Often 100% free for reserved/EWS students)',
        avgPrivateCost: '₹20,000 - ₹45,000 in private ITIs',
        keyPrerequisites: 'Class 10 pass (or Class 8 pass for certain artisanal trades)',
        futureOutcomes: ['Paid Apprenticeship (NAPS)', 'Railway Assistant Loco Pilot / Technician', 'Self-employed Certified Wireman / Contractor'],
        isAffordableHighlight: true
      },
      {
        title: 'Open Schooling (NIOS - National Institute of Open Schooling)',
        description: 'Flexible distance school education recognized equally with CBSE/State boards for all higher education and government exams. Allows earning while studying.',
        duration: 'Self-paced (Up to 5 years)',
        avgGovtCost: '₹2,500 - ₹4,500 for entire secondary course',
        avgPrivateCost: 'N/A (Direct government board)',
        keyPrerequisites: 'Self-declaration / Previous school leaving certificate',
        futureOutcomes: ['Eligible for all colleges, JEE, NEET, CUET, and government jobs', 'Flexible exam-on-demand option'],
        isAffordableHighlight: true
      }
    ]
  },
  {
    id: 'after-12th',
    stageName: 'After Class 12 (Higher Secondary)',
    stageNameHindi: 'कक्षा 12 के बाद के रास्ते',
    stageNameMarathi: 'इयत्ता १२ वी नंतरचे मार्ग',
    targetGroup: 'Students passing Class 12 boards',
    summary: 'After Class 12, students enter degree programs, professional certifications, or direct recruitment routes. There are affordable government colleges for every single domain.',
    options: [
      {
        title: 'Traditional Degree: B.Sc / B.Com / B.A',
        description: '3-year or 4-year (NEP 2020) undergraduate degrees offered across all state and central universities. Affordable, respectable, and opens all government exam eligibility.',
        duration: '3 to 4 Years',
        avgGovtCost: '₹3,000 - ₹12,000 / year in Govt colleges',
        avgPrivateCost: '₹25,000 - ₹90,000 / year in private universities',
        keyPrerequisites: 'Class 12 in corresponding stream (or any stream for BA)',
        futureOutcomes: ['All Graduate Govt Exams (UPSC, SSC CGL, Banking, State PSC)', 'Postgraduate studies (MSc/MCom/MA)', 'Teaching (B.Ed)', 'Corporate jobs'],
        isAffordableHighlight: true
      },
      {
        title: 'Professional Degree: B.Tech / B.E (Engineering)',
        description: 'Technical degree leading to software, civil, mechanical, and electrical careers.',
        duration: '4 Years',
        avgGovtCost: '₹20,000 - ₹60,000 / year in State Govt Engineering Colleges',
        avgPrivateCost: '₹90,000 - ₹2,50,000 / year in private colleges',
        keyPrerequisites: 'Class 12 with Physics and Mathematics + JEE Main or State CET (MHT-CET)',
        futureOutcomes: ['Software Engineer', 'Core Engineering Jobs', 'GATE (PSU Recruitment & M.Tech)']
      },
      {
        title: 'Healthcare Degree: B.Sc Nursing / B.Pharm / BMLT',
        description: 'High-demand healthcare professions with lower entry barriers and faster return on investment than MBBS.',
        duration: '3 to 4 Years',
        avgGovtCost: '₹5,000 - ₹25,000 / year in Govt Medical / Pharmacy colleges',
        avgPrivateCost: '₹60,000 - ₹1,40,000 / year in private institutes',
        keyPrerequisites: 'Class 12 with Biology (PCB) + State CET or NEET',
        futureOutcomes: ['Nursing Officer in AIIMS / District Hospitals', 'Registered Pharmacist / Drug Inspector', 'Medical Diagnostic Specialist'],
        isAffordableHighlight: true
      },
      {
        title: 'Distance / Online Degree: IGNOU & State Open Universities',
        description: 'Recognized by UGC and UPSC. Allows students from rural areas to work daytime jobs while earning an accredited Bachelor’s degree at minimal cost.',
        duration: '3 Years (Flexible up to 6 years)',
        avgGovtCost: '₹4,000 - ₹8,000 / year',
        avgPrivateCost: 'N/A',
        keyPrerequisites: 'Class 12 pass from any recognized board',
        futureOutcomes: ['Full eligibility for UPSC, SSC, Banking, and State PSCs', 'Distance degree valid for all govt jobs'],
        isAffordableHighlight: true
      }
    ]
  }
];
