import { ScholarshipItem } from '../types';

export const SCHOLARSHIPS_DATA: ScholarshipItem[] = [
  {
    id: 'mahadbt-ebc-freeship',
    title: 'Rajarshi Chhatrapati Shahu Maharaj Tuition Fee Waiver (EBC Scheme)',
    titleHindi: 'राजर्षि छत्रपति शाहू महाराज शिक्षण शुल्क शिष्यवृत्ति (ईबीसी योजना)',
    titleMarathi: 'राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना (EBC)',
    provider: 'Government of Maharashtra (Higher & Technical Education Dept)',
    portalName: 'MahaDBT Official Portal',
    officialUrl: 'https://mahadbt.maharashtra.gov.in',
    category: 'state_mahadbt',
    categoryLabel: 'Maharashtra State (MahaDBT)',
    targetState: 'Maharashtra',
    educationLevel: 'Undergraduate & Professional Courses (Engg, Pharma, Law, Degree)',
    financialBenefit: '50% Tuition Fee & 50% Exam Fee Waiver for Annual Income up to ₹8 Lakhs in Govt / Aided / Private Colleges',
    eligibilityCriteria: [
      'Candidate must be a domicile of Maharashtra state.',
      'Annual family income from all sources must not exceed ₹8,00,000.',
      'Must have taken admission through CAP (Centralized Admission Process) round.',
      'Maximum 2 children from the same family eligible for this scheme.',
      'Minimum 50% attendance maintained in previous academic term.'
    ],
    familyIncomeLimit: 'Up to ₹8,00,000 per year',
    requiredDocuments: [
      'Maharashtra Domicile Certificate',
      'Competent Authority Income Certificate (Tahsildar / SDO) for current financial year',
      'CAP Allotment Letter & College Fee Receipt',
      'HSC / Diploma Marksheet',
      'Aadhaar Card seeded with active bank account (NPCI DBT linked)',
      'Self-Declaration of maximum 2 beneficiaries'
    ],
    applicationTimeline: 'Academic Year 2024-25 / 2025-26: Usually opens August and remains active with extensions till March/April',
    isVerifiedGovt: true,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Official Govt Portal: October 2024 (Valid for AY 2024-26)',
    verificationSource: 'https://mahadbt.maharashtra.gov.in — Higher and Technical Education Department Rules'
  },
  {
    id: 'mahadbt-hostel-maintenance',
    title: 'Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna (Hostel Allowance)',
    titleHindi: 'डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना',
    titleMarathi: 'डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना',
    provider: 'Government of Maharashtra',
    portalName: 'MahaDBT Official Portal',
    officialUrl: 'https://mahadbt.maharashtra.gov.in',
    category: 'state_mahadbt',
    categoryLabel: 'Maharashtra State (MahaDBT)',
    targetState: 'Maharashtra',
    educationLevel: 'ITI, Diploma, Degree & Professional Students staying in Hostel/Rented rooms',
    financialBenefit: '₹30,000 / year (for Mumbai, Pune, Nagpur, Aurangabad) or ₹20,000 / year (other areas) direct bank transfer for living expenses',
    eligibilityCriteria: [
      'Domicile of Maharashtra.',
      'Children of Registered Alpabhudharak (Marginal Landholder) Farmers or Registered Laborers.',
      'Family annual income up to ₹8 Lakhs (Full allowance for farmer children; ₹10k/yr for income up to ₹1L).',
      'Must be residing in a hostel or registered rented room away from native hometown.'
    ],
    familyIncomeLimit: 'Up to ₹8,00,000 per year (for children of registered marginal farmers)',
    requiredDocuments: [
      'Domicile Certificate of Maharashtra',
      'Father / Mother’s 7/12 extract or Landless Laborer certificate',
      'Hostel certificate or registered rent agreement with landlord verification',
      'Income Certificate issued by Tahsildar',
      'College Bonafide Certificate'
    ],
    applicationTimeline: 'Aligned with MahaDBT admission calendar (August - March annually)',
    isVerifiedGovt: true,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Official Govt Portal: October 2024',
    verificationSource: 'mahadbt.maharashtra.gov.in Directorate of Technical Education'
  },
  {
    id: 'nsp-central-sector',
    title: 'Central Sector Scheme of Scholarship for College and University Students',
    titleHindi: 'कॉलेज और विश्वविद्यालय के छात्रों के लिए केंद्रीय क्षेत्र छात्रवृत्ति योजना',
    titleMarathi: 'कॉलेज आणि विद्यापीठातील विद्यार्थ्यांसाठी सेंट्रल सेक्टर शिष्यवृत्ती',
    provider: 'Department of Higher Education, Ministry of Education, Govt of India',
    portalName: 'National Scholarship Portal (NSP)',
    officialUrl: 'https://scholarships.gov.in',
    category: 'central',
    categoryLabel: 'Central Government (NSP)',
    targetState: 'All India',
    educationLevel: 'Undergraduate & Postgraduate (Degree courses)',
    financialBenefit: '₹12,000 / year for first 3 years of UG; ₹20,000 / year for Postgraduate courses (Direct Bank Transfer via PFMS)',
    eligibilityCriteria: [
      'Above 80th percentile of successful candidates in the relevant stream from a State or Central Board in Class 12.',
      'Pursuing regular courses (not correspondence or distance mode) in recognized colleges.',
      'Family income from all sources not exceeding ₹4,50,000 per annum.',
      'Not receiving any other central or state scholarship for the same course.'
    ],
    familyIncomeLimit: 'Up to ₹4,50,000 per year',
    requiredDocuments: [
      'Class 12 Marksheet indicating percentile',
      'Aadhaar Number & Bank account seeded with Aadhaar',
      'Income Certificate from competent state authority',
      'College Bonafide Certificate / Institution verification on NSP'
    ],
    applicationTimeline: 'NSP Portal opens July/August; applications close October/November annually',
    isVerifiedGovt: true,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Official Govt Portal: October 2024',
    verificationSource: 'scholarships.gov.in & education.gov.in Scheme Guidelines'
  },
  {
    id: 'nsp-nmmss-class9-12',
    title: 'National Means-cum-Merit Scholarship Scheme (NMMSS)',
    titleHindi: 'राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति योजना (एनएमएमएसएस)',
    titleMarathi: 'नॅशनल मीन्स-कम-मेरिट शिष्यवृत्ती योजना (NMMSS)',
    provider: 'Department of School Education & Literacy, Ministry of Education',
    portalName: 'National Scholarship Portal (NSP)',
    officialUrl: 'https://scholarships.gov.in',
    category: 'need_based',
    categoryLabel: 'School Education (Class 9-12)',
    targetState: 'All India',
    educationLevel: 'Class 9 to Class 12 (Govt & Aided school students)',
    financialBenefit: '₹12,000 per annum (₹1,000 per month) from Class 9 through Class 12 to prevent dropouts',
    eligibilityCriteria: [
      'Students studying in regular Government, Local Body, and Govt-aided schools.',
      'Family income not exceeding ₹3,50,000 per year.',
      'Must appear and qualify the State Level NMMSS Selection Test in Class 8 (Mental Ability & Scholastic Aptitude Tests).',
      'Must secure at least 55% marks in Class 8 (50% for SC/ST).'
    ],
    familyIncomeLimit: 'Up to ₹3,50,000 per year',
    requiredDocuments: [
      'Class 8 Marksheet with required percentage',
      'State NMMSS Exam Admit Card / Merit Certificate',
      'Aadhaar-seeded bank account in student’s name',
      'Income Certificate issued by Revenue Authority'
    ],
    applicationTimeline: 'State exam held Nov/Dec of Class 8; NSP registration opened July-October for Class 9 onwards',
    isVerifiedGovt: true,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Official Govt Portal: October 2024',
    verificationSource: 'education.gov.in & scholarships.gov.in'
  },
  {
    id: 'aicte-pragati-girls',
    title: 'AICTE Pragati Scholarship Scheme for Girl Students',
    titleHindi: 'छात्राओं के लिए एआईसीटीई प्रगति छात्रवृत्ति योजना',
    titleMarathi: 'मुलींसाठी एआयसीटीई प्रगती शिष्यवृत्ती योजना',
    provider: 'All India Council for Technical Education (AICTE), Ministry of Education',
    portalName: 'NSP / AICTE Portal',
    officialUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati',
    category: 'girls',
    categoryLabel: 'Women & Girls in STEM',
    targetState: 'All India',
    educationLevel: 'First Year Degree (B.Tech) or Diploma in AICTE-approved Technical Institutions',
    financialBenefit: '₹50,000 per annum for every year of study (towards tuition fee, computer purchase, books, and equipment)',
    eligibilityCriteria: [
      'Female student admitted to First year of Degree or Diploma level course in AICTE approved institution.',
      'Admission must be through Centralized Admission Process (State CET / JEE).',
      'Maximum 2 girl children per family.',
      'Family annual income must be less than ₹8,00,000 per annum.'
    ],
    familyIncomeLimit: 'Up to ₹8,00,000 per year',
    requiredDocuments: [
      'Class 10 and 12 marksheets',
      'CAP Allotment letter to AICTE-approved college',
      'Annual Income certificate of family from Tahsildar/SDM',
      'Parents’ declaration that they have not more than 2 girl beneficiaries'
    ],
    applicationTimeline: 'Announced on National Scholarship Portal between August and November each year',
    isVerifiedGovt: true,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Official Govt Portal: October 2024',
    verificationSource: 'aicte-india.org & scholarships.gov.in'
  },
  {
    id: 'aicte-saksham-pwd',
    title: 'AICTE Saksham Scholarship for Specially-Abled Students (PwD)',
    titleHindi: 'दिव्यांग छात्रों के लिए एआईसीटीई सक्षम छात्रवृत्ति',
    titleMarathi: 'दिव्यांग विद्यार्थ्यांसाठी एआयसीटीई सक्षम शिष्यवृत्ती',
    provider: 'All India Council for Technical Education (AICTE)',
    portalName: 'National Scholarship Portal (NSP)',
    officialUrl: 'https://www.aicte-india.org',
    category: 'pwd',
    categoryLabel: 'Students with Disabilities (PwD)',
    targetState: 'All India',
    educationLevel: 'Degree / Diploma in AICTE Approved Technical Colleges',
    financialBenefit: '₹50,000 per annum for tuition, equipment purchase, and assistive technology devices',
    eligibilityCriteria: [
      'Specially-abled student having disability of not less than 40%.',
      'Admitted to 1st year of Degree/Diploma course in an AICTE approved institution.',
      'Family income not exceeding ₹8,00,000 per year.'
    ],
    familyIncomeLimit: 'Up to ₹8,00,000 per year',
    requiredDocuments: [
      'Disability Certificate issued by Competent Medical Authority (Civil Surgeon) or UDID Card',
      'Allotment letter for technical course',
      'Income Certificate',
      'Aadhaar seeded bank details'
    ],
    applicationTimeline: 'August - November on NSP Portal',
    isVerifiedGovt: true,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Official Govt Portal: October 2024',
    verificationSource: 'aicte-india.org'
  },
  {
    id: 'up-post-matric-scholarship',
    title: 'Uttar Pradesh Post-Matric Scholarship & Fee Reimbursement Scheme',
    titleHindi: 'उत्तर प्रदेश दशमोत्तर छात्रवृत्ति एवं शुल्क प्रतिपूर्ति योजना',
    titleMarathi: 'उत्तर प्रदेश पोस्ट-मॅट्रिक शिष्यवृत्ती योजना',
    provider: 'Social Welfare Department, Government of Uttar Pradesh',
    portalName: 'UP Scholarship Portal (SAMS)',
    officialUrl: 'https://scholarship.up.gov.in',
    category: 'state_other',
    categoryLabel: 'State Governments (Uttar Pradesh)',
    targetState: 'Uttar Pradesh',
    educationLevel: 'Classes 11-12, ITI, Polytechnic, Undergrad & Postgrad',
    financialBenefit: 'Complete Tuition Fee Reimbursement + Maintenance Allowance (₹2,500 to ₹12,000/yr depending on course)',
    eligibilityCriteria: [
      'Domicile of Uttar Pradesh.',
      'Enrolled in recognized school/college in UP.',
      'Income limit: Up to ₹2,50,000/yr for SC/ST; Up to ₹2,00,000/yr for General, OBC, and Minorities.'
    ],
    familyIncomeLimit: '₹2,00,000 / year (OBC/Gen) and ₹2,50,000 / year (SC/ST)',
    requiredDocuments: [
      'UP Domicile & Caste Certificate from Edistrict UP portal',
      'Verified Income Certificate',
      'High School & Intermediate Marksheet',
      'Fee receipt and bonafide from UP educational institute'
    ],
    applicationTimeline: 'July to December annually on scholarship.up.gov.in',
    isVerifiedGovt: true,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Official Govt Portal: October 2024',
    verificationSource: 'scholarship.up.gov.in'
  },
  {
    id: 'bihar-post-matric-pms',
    title: 'Bihar Post-Matric Scholarship Scheme (PMS Online)',
    titleHindi: 'बिहार पोस्ट-मैट्रिक छात्रवृत्ति योजना (पीएमएस ऑनलाइन)',
    titleMarathi: 'बिहार पोस्ट-मॅट्रिक शिष्यवृत्ती योजना',
    provider: 'Education Department & SC/ST/BC/EBC Welfare Dept, Govt of Bihar',
    portalName: 'Bihar PMS Online Portal',
    officialUrl: 'https://pmsonline.bih.nic.in',
    category: 'state_other',
    categoryLabel: 'State Governments (Bihar)',
    targetState: 'Bihar',
    educationLevel: 'Post-Matric (Intermediate 11-12, ITI, Polytechnic, Degree, Paramedical)',
    financialBenefit: 'Tuition Fee refund + Monthly Maintenance allowance direct to student bank account',
    eligibilityCriteria: [
      'Permanent resident of Bihar State.',
      'Belongs to SC, ST, BC, or EBC category.',
      'Annual family income from all sources not exceeding ₹3,00,000.',
      'Enrolled in recognized institution in or outside Bihar.'
    ],
    familyIncomeLimit: 'Up to ₹3,00,000 per year',
    requiredDocuments: [
      'Bihar Resident / Domicile Certificate',
      'Caste Certificate (Jati Praman Patra)',
      'Current Year Income Certificate',
      'College Bonafide with Fee Structure breakdown',
      'Aadhaar and linked bank passbook'
    ],
    applicationTimeline: 'August - November on pmsonline.bih.nic.in',
    isVerifiedGovt: true,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Official Govt Portal: October 2024',
    verificationSource: 'pmsonline.bih.nic.in'
  },
  {
    id: 'vidya-lakshmi-csis-loan',
    title: 'Central Scheme for Interest Subsidy (CSIS) & Vidya Lakshmi Education Loans',
    titleHindi: 'केंद्रीय ब्याज सब्सिडी योजना (सीएसआईएस) एवं विद्या लक्ष्मी शिक्षा ऋण',
    titleMarathi: 'केंद्रीय व्याज अनुदान योजना (CSIS) आणि विद्या लक्ष्मी शैक्षणिक कर्ज',
    provider: 'Ministry of Education & Department of Financial Services (Govt of India)',
    portalName: 'Vidya Lakshmi Portal',
    officialUrl: 'https://www.vidyalakshmi.co.in',
    category: 'loan_subsidy',
    categoryLabel: 'Govt Loan & Interest Subsidies',
    targetState: 'All India',
    educationLevel: 'Professional & Technical Degree courses in India',
    financialBenefit: '100% Government subsidy on loan interest during the course duration + 1 year moratorium period (Student pays 0% interest until 1 year after graduation)',
    eligibilityCriteria: [
      'Students from Economically Weaker Sections (EWS) whose gross parental income is up to ₹4.5 Lakhs per year.',
      'Enrolled in recognized technical or professional courses in India in NAAC / NBA accredited institutions.',
      'Availed educational loan from scheduled commercial banks under IBA model scheme.'
    ],
    familyIncomeLimit: 'Up to ₹4,50,000 per year',
    requiredDocuments: [
      'Authorized Income Certificate from competent state revenue authority',
      'College Admission Letter with certified fee structure',
      'Loan application via single window portal vidyalakshmi.co.in',
      'Aadhaar and PAN card'
    ],
    applicationTimeline: 'Open throughout the year during college admissions',
    isVerifiedGovt: true,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Official Govt Portal: October 2024',
    verificationSource: 'education.gov.in & vidyalakshmi.co.in'
  },
  {
    id: 'reliance-foundation-ug-scholarship',
    title: 'Reliance Foundation Undergraduate Scholarships',
    titleHindi: 'रिलायंस फाउंडेशन स्नातक छात्रवृत्ति',
    titleMarathi: 'रिलायन्स फाउंडेशन पदवीपूर्व शिष्यवृत्ती',
    provider: 'Reliance Foundation (Private Philanthropy)',
    portalName: 'Reliance Foundation Portal',
    officialUrl: 'https://www.scholarships.reliancefoundation.org',
    category: 'private_trust',
    categoryLabel: 'Private Foundations & Philanthropy',
    targetState: 'All India',
    educationLevel: 'First year of any regular undergraduate degree course',
    financialBenefit: 'Up to ₹2,00,000 over the course of the degree + mentorship and youth alumni network',
    eligibilityCriteria: [
      'Resident Indian citizen who passed Class 12 with minimum 60% marks.',
      'Enrolled in full-time regular 1st year undergraduate degree in India.',
      'Household annual income preference under ₹2.5 Lakhs (Upper cap: ₹15 Lakhs, with strong preference for lower income).',
      'Mandatory online aptitude test participation.'
    ],
    familyIncomeLimit: 'Preference for income under ₹2,50,000 / year (Eligible up to ₹15 Lakhs)',
    requiredDocuments: [
      'Class 10 and 12 marksheets',
      'College Bonafide / Enrollment letter',
      'Official family income proof',
      'Passport size photograph'
    ],
    applicationTimeline: 'Applications open August to October annually',
    isVerifiedGovt: false,
    isSampleRecord: false,
    lastVerifiedDate: 'Verified Foundation Initiative: October 2024',
    verificationSource: 'scholarships.reliancefoundation.org official notification'
  },
  {
    id: 'sample-rural-merit-grant',
    title: '[DEMONSTRATION SAMPLE] Rural Innovators Micro-Grant (Mock Example)',
    titleHindi: '[डेमो रिकॉर्ड] ग्रामीण नवप्रवर्तक अनुदान (नमूना रिकॉर्ड)',
    titleMarathi: '[नमुना नोंद] ग्रामीण नाविन्यता अनुदान (डेमो रेकॉर्ड)',
    provider: 'Demonstration Test NGO Trust',
    portalName: 'Example Demo Sandbox',
    officialUrl: '#sample-record',
    category: 'merit',
    categoryLabel: 'Demonstration / Sample Record',
    targetState: 'All India',
    educationLevel: 'All Students (Sample Data)',
    financialBenefit: '₹15,000 one-time experimental prototype grant',
    eligibilityCriteria: [
      'NOTICE: This is a sample placeholder record designed to demonstrate how custom scholarships appear in this portal.',
      'Not an actual government application. Do not submit personal data here.'
    ],
    familyIncomeLimit: 'Demonstration placeholder',
    requiredDocuments: [
      'Demonstration marksheets only'
    ],
    applicationTimeline: 'Sample testing record - not open for active submission',
    isVerifiedGovt: false,
    isSampleRecord: true,
    lastVerifiedDate: 'Sample Record for UI Testing: October 2024',
    verificationSource: 'Portal Internal Testing Benchmark'
  }
];
