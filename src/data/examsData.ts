import { EntranceExamItem } from '../types';

export const EXAMS_DATA: EntranceExamItem[] = [
  {
    id: 'jee-main',
    name: 'JEE (Main)',
    fullName: 'Joint Entrance Examination (Main)',
    conductingAuthority: 'National Testing Agency (NTA)',
    level: 'National (All India)',
    frequency: 'Twice a year (Session 1 in January, Session 2 in April)',
    eligibility: 'Passed Class 12 with Physics, Mathematics, and one of Chemistry/Biology/Technical Vocational subject. No age limit.',
    subjectsTested: ['Physics', 'Chemistry', 'Mathematics (30 questions each, total 300 marks)'],
    officialUrl: 'https://jeemain.nta.nic.in',
    approxApplicationFee: {
      general: '₹1,000 for Male candidates',
      reservedOrGirls: '₹800 for Female; ₹500 for SC / ST / PwD candidates'
    },
    suitableForCareers: ['Software Developer / Engineer', 'Mechanical Engineer', 'Civil Engineer', 'Data Analyst'],
    keyDatesInfo: 'Registration usually opens November for January session and February for April session.',
    prepResources: [
      {
        title: 'NCERT Exemplar & Textbooks (Class 11 & 12 Physics, Chemistry, Math)',
        provider: 'NCERT Official',
        url: 'https://ncert.nic.in'
      },
      {
        title: 'National Test Abhyas (Free NTA Mock Test App)',
        provider: 'Ministry of Education / NTA',
        url: 'https://www.nta.ac.in/abhyas'
      },
      {
        title: 'Swayam Prabha DTH Channel 22 (IIT-PAL Free Lectures)',
        provider: 'Ministry of Education',
        url: 'https://swayamprabha.gov.in'
      }
    ]
  },
  {
    id: 'neet-ug',
    name: 'NEET (UG)',
    fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
    conductingAuthority: 'National Testing Agency (NTA)',
    level: 'National (Mandatory for all Medical / Dental / AYUSH seats in India)',
    frequency: 'Once a year (Usually first Sunday of May)',
    eligibility: 'Passed Class 12 with Physics, Chemistry, Biology/Biotechnology, and English with minimum 50% marks (40% for SC/ST/OBC). Minimum age 17 years.',
    subjectsTested: ['Physics (45 questions)', 'Chemistry (45 questions)', 'Biology: Botany & Zoology (90 questions, total 720 marks)'],
    officialUrl: 'https://neet.nta.nic.in',
    approxApplicationFee: {
      general: '₹1,700',
      reservedOrGirls: '₹1,600 (EWS/OBC-NCL); ₹1,000 (SC/ST/PwD/Third Gender)'
    },
    suitableForCareers: ['Registered Nurse / Nursing Officer', 'Doctor (MBBS / BAMS)', 'Pharmacist', 'Medical Laboratory Technician'],
    keyDatesInfo: 'Notification and registration generally release in February with exam in May.',
    prepResources: [
      {
        title: 'NCERT Biology Word-by-Word Digital Audio & PDF',
        provider: 'NCERT e-Pathshala',
        url: 'https://epathshala.nic.in'
      },
      {
        title: 'NTA Student Mock Tests and Previous Year Papers',
        provider: 'NTA Official Portal',
        url: 'https://nta.ac.in'
      }
    ]
  },
  {
    id: 'cuet-ug',
    name: 'CUET (UG)',
    fullName: 'Common University Entrance Test (Undergraduate)',
    conductingAuthority: 'National Testing Agency (NTA)',
    level: 'National (Central, State, Deemed, and Participating Universities)',
    frequency: 'Once a year (May-June)',
    eligibility: 'Passed Class 12 in any stream (Arts, Commerce, Science). Specific subject criteria depend on target university & degree.',
    subjectsTested: ['Language Test (Hindi, English, Regional languages)', 'Domain Specific Subjects (up to 6 subjects)', 'General Aptitude Test'],
    officialUrl: 'https://cuetug.ntaonline.in',
    approxApplicationFee: {
      general: '₹1,000 for up to 3 subjects',
      reservedOrGirls: '₹900 (OBC-NCL/EWS); ₹800 (SC/ST/PwD)'
    },
    suitableForCareers: ['Data Analyst', 'School Teacher (Primary / TGT)', 'Chartered Accountant (CA)', 'UI / UX & Digital Product Designer'],
    keyDatesInfo: 'Applications open late February to early April; computer-based or hybrid test in May-June.',
    prepResources: [
      {
        title: 'CUET Class 12 Syllabus Breakdown & Sample Questions',
        provider: 'NTA CUET Portal',
        url: 'https://cuetug.ntaonline.in'
      },
      {
        title: 'e-PG Pathshala & SWAYAM General Awareness',
        provider: 'UGC / MoE',
        url: 'https://swayam.gov.in'
      }
    ]
  },
  {
    id: 'mht-cet',
    name: 'MHT-CET',
    fullName: 'Maharashtra Common Entrance Test',
    conductingAuthority: 'State Common Entrance Test Cell, Government of Maharashtra',
    level: 'State Level (Maharashtra Engineering, Pharmacy, and Agriculture admissions)',
    frequency: 'Once a year (April-May in PCM and PCB groups)',
    eligibility: 'HSC (Class 12) passed or appearing with Physics and Mathematics (for Engg) or Biology (for Pharmacy) with minimum 45% (40% for reserved categories). Maharashtra state candidates qualify for 85% home state quota.',
    subjectsTested: ['Paper 1: Mathematics (100 marks)', 'Paper 2: Physics & Chemistry (100 marks)', 'Paper 3: Biology (100 marks) (No negative marking)'],
    officialUrl: 'https://cetcell.mahacet.org',
    approxApplicationFee: {
      general: '₹1,000 (Open Category from Maharashtra & OMS)',
      reservedOrGirls: '₹800 (SC, ST, VJ/DT-NT, OBC, SBC, EWS, PwD of Maharashtra state)'
    },
    suitableForCareers: ['Software Developer / Engineer', 'Industrial Electrician & Wireman', 'Solar Energy & Renewable Technician'],
    keyDatesInfo: 'Registration January-March; Admit cards issued April; Exams conducted in shifts across Maharashtra.',
    prepResources: [
      {
        title: 'Maharashtra State Board Balbharati Textbooks (Classes 11 & 12)',
        provider: 'Maharashtra State Bureau of Textbook Production (eBalbharati)',
        url: 'https://ebalbharati.in'
      },
      {
        title: 'State CET Cell Mock Tests & Syllabus Weightage',
        provider: 'CET Cell Maharashtra',
        url: 'https://cetcell.mahacet.org'
      }
    ]
  },
  {
    id: 'ssc-cgl-chsl',
    name: 'SSC (CGL & CHSL)',
    fullName: 'Staff Selection Commission (Combined Graduate Level & Combined Higher Secondary Level)',
    conductingAuthority: 'Staff Selection Commission, Government of India',
    level: 'National (Group B and Group C Central Government posts)',
    frequency: 'Once a year for each tier',
    eligibility: 'CHSL: Class 12 pass (Age 18-27); CGL: Any Bachelor’s Degree (Age 18-32). Relaxations for OBC (+3 yrs), SC/ST (+5 yrs).',
    subjectsTested: ['General Intelligence & Reasoning', 'General Awareness', 'Quantitative Aptitude (Mathematics)', 'English Comprehension'],
    officialUrl: 'https://ssc.gov.in',
    approxApplicationFee: {
      general: '₹100 only',
      reservedOrGirls: '₹0 (Women candidates and SC/ST/PwD/Ex-servicemen are 100% EXEMPT from fee)'
    },
    suitableForCareers: ['Civil Services (IAS / IPS / IFS / IRS)', 'Chartered Accountant (CA)', 'School Teacher (Primary / TGT)'],
    keyDatesInfo: 'SSC publishes an annual calendar. CHSL exams usually in June/July; CGL in September/October.',
    prepResources: [
      {
        title: 'SSC Official Previous Question Papers and Answer Keys',
        provider: 'Staff Selection Commission',
        url: 'https://ssc.gov.in'
      },
      {
        title: 'NCERT Mathematics and General Science (Classes 6 to 10)',
        provider: 'NCERT',
        url: 'https://ncert.nic.in'
      }
    ]
  },
  {
    id: 'nda-exam',
    name: 'NDA & NA Exam',
    fullName: 'National Defence Academy & Naval Academy Examination',
    conductingAuthority: 'Union Public Service Commission (UPSC)',
    level: 'National (Officer entry into Indian Army, Navy, and Air Force)',
    frequency: 'Twice a year (NDA-I in April, NDA-II in September)',
    eligibility: 'Army Wing: Class 12 pass in any stream; Air Force and Navy: Class 12 with Physics and Mathematics. Age: 16.5 to 19.5 years. Both male and female candidates eligible. 100% Free cadet training with monthly stipend upon selection.',
    subjectsTested: ['Mathematics (300 marks)', 'General Ability Test - English & General Knowledge (600 marks)', 'SSB Interview (5 days)'],
    officialUrl: 'https://upsc.gov.in',
    approxApplicationFee: {
      general: '₹100 only',
      reservedOrGirls: '₹0 (SC / ST candidates and all Female candidates are 100% FEE EXEMPT)'
    },
    suitableForCareers: ['Civil Services (IAS / IPS / IFS / IRS)', 'Software Developer / Engineer'],
    keyDatesInfo: 'NDA 1 notifications in December/January; NDA 2 in May/June annually.',
    prepResources: [
      {
        title: 'UPSC Previous 10 Years Question Papers with Solution Keys',
        provider: 'UPSC Official Archives',
        url: 'https://upsc.gov.in/examinations/previous-question-papers'
      }
    ]
  },
  {
    id: 'iti-polytechnic-admission',
    name: 'State Polytechnic & ITI Admissions',
    fullName: 'State Directorate of Vocational Education and Training / Technical Boards',
    conductingAuthority: 'State Technical Boards (e.g. MSBTE Maharashtra, JEECUP UP, BTE Delhi)',
    level: 'State Level (District / Taluka Level access)',
    frequency: 'Once a year (June-August after Class 10 Board results)',
    eligibility: 'Passed Class 10 with Science and Mathematics. Direct lateral entry to 2nd year Polytechnic available for Class 12 Science or ITI passouts.',
    subjectsTested: ['In states like Maharashtra: Merit based on 10th Marks. In UP/Bihar: Entrance test with basic Class 10 Science, Math, and General Aptitude.'],
    officialUrl: 'https://dvet.gov.in',
    approxApplicationFee: {
      general: '₹200 - ₹400',
      reservedOrGirls: '₹100 - ₹250 (Free in several state ITIs)'
    },
    suitableForCareers: ['Industrial Electrician & Wireman', 'Solar Energy & Renewable Technician', 'Software Developer / Engineer'],
    keyDatesInfo: 'Online registration begins within 2 weeks of Class 10 state board results.',
    prepResources: [
      {
        title: 'Bharat Skills ITI Trade Syllabi and NIMI Study Books',
        provider: 'DGT / Ministry of Skill Development',
        url: 'https://bharatskills.gov.in'
      }
    ]
  }
];
