import { CareerItem } from '../types';

export const CAREERS_DATA: CareerItem[] = [
  {
    id: 'software-developer',
    title: 'Software Developer / Engineer',
    titleHindi: 'सॉफ्टवेयर डेवलपर / इंजीनियर',
    titleMarathi: 'सॉफ्टवेअर डेव्हलपर / इंजिनिअर',
    category: 'technology',
    categoryLabel: 'Technology',
    brief: 'Build software applications, mobile apps, and systems using programming languages and problem-solving skills.',
    briefHindi: 'प्रोग्रामिंग और कोडिंग की मदद से मोबाइल ऐप, वेबसाइट और कंप्यूटर सॉफ्टवेयर का निर्माण करना।',
    briefMarathi: 'प्रोग्रामिंग भाषेचा वापर करून कॉम्प्युटर सॉफ्टवेअर, मोबाईल ॲप्स आणि डिजिटल प्रणाली तयार करणे.',
    overview: 'Software engineers design, develop, test, and maintain software applications. In India, this is one of the highest-employing private sector industries with career options spanning startups, IT services (TCS, Infosys, Wipro), product companies, and public sector undertakings (NIC, ISRO, CDAC).',
    qualifications: [
      'Option A: B.Tech / B.E. in Computer Science or Information Technology (4 Years)',
      'Option B: BCA (Bachelor of Computer Applications) (3 Years) followed by MCA (2 Years)',
      'Option C: B.Sc. in Computer Science / IT (3 Years)',
      'Option D: Diploma in Computer Engineering (3 Years post-10th) with Lateral Entry to 2nd Year B.Tech'
    ],
    subjectsAfter10th: 'Class 11-12 with Physics and Mathematics (Chemistry or Computer Science recommended)',
    subjectsAfter12th: 'Entrance exam preparation (JEE Main, State CETs like MHT-CET, WBJEE, or CUET for BCA)',
    entranceExams: ['JEE Main', 'MHT-CET (Maharashtra)', 'CUET-UG (for BCA/BSc)', 'NIMCET (for MCA)'],
    govtColleges: [
      'IITs and NITs across India (Via JEE)',
      'COEP Tech University, Pune (Govt College of Engineering)',
      'VJTI Mumbai',
      'Delhi Technological University (DTU)',
      'State Government Engineering Colleges & Central Universities'
    ],
    courseFeesGovt: '₹15,000 - ₹50,000 / year in State Govt Colleges / Central Universities (with category fee waivers)',
    courseFeesPrivate: '₹80,000 - ₹2,50,000 / year in Private Engineering Colleges',
    feesSourceDate: 'AICTE & State CET Information Brochures (Academic Year 2024-25)',
    indicativeSalary: {
      startingTier2OrRural: '₹2.8 - ₹4.2 Lakhs / year',
      startingMetro: '₹4.5 - ₹8.5 Lakhs / year (up to ₹15L+ in top product companies)',
      experienced: '₹12 - ₹28 Lakhs / year after 5-8 years'
    },
    suitableScholarships: [
      'Central Sector Scheme of Scholarships for College Students',
      'AICTE Pragati Scholarship for Girls',
      'MahaDBT Rajarshi Chhatrapati Shahu Maharaj Tuition Fee Waiver (EBC)',
      'Post-Matric Scholarship for SC/ST/OBC'
    ],
    freeResources: [
      {
        title: 'Python for Beginners & Data Structures',
        provider: 'SWAYAM / NPTEL (Govt of India)',
        url: 'https://swayam.gov.in',
        isFree: true
      },
      {
        title: 'Full Stack Web Development & JavaScript',
        provider: 'freeCodeCamp (Non-profit)',
        url: 'https://www.freecodecamp.org',
        isFree: true
      },
      {
        title: 'CS50: Introduction to Computer Science',
        provider: 'Harvard University (edX / YouTube)',
        url: 'https://cs50.harvard.edu',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'If in Class 10: Focus on scoring well in Mathematics and choose Science (PCM) or Polytechnic Diploma.',
      'If in Class 12: Download NCERT textbooks and start practicing JEE Main / MHT-CET past year question papers.',
      'Start learning free basic Python or JavaScript online using a mobile phone or local computer lab.'
    ],
    disclaimer: 'Job placement depends on individual problem-solving skills, projects, and interviews. No college can legally guarantee employment.'
  },
  {
    id: 'registered-nurse',
    title: 'Registered Nurse / Nursing Officer',
    titleHindi: 'पंजीकृत नर्स / नर्सिंग अधिकारी',
    titleMarathi: 'नोंदणीकृत परिचारिका / नर्सिंग ऑफिसर',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    brief: 'Provide compassionate patient care, medical administration, and health monitoring in hospitals and clinics.',
    briefHindi: 'अस्पतालों और स्वास्थ्य केंद्रों में मरीजों की देखभाल, दवाइयां देना और स्वास्थ्य निगरानी करना।',
    briefMarathi: 'रुग्णालये आणि आरोग्य केंद्रांमध्ये रुग्णांची काळजी घेणे, औषधोपचार करणे आणि वैद्यकीय मदत पुरवणे.',
    overview: 'Nursing is a deeply respected, high-demand healthcare profession in India and globally. Nursing officers work in Government Medical Colleges, AIIMS, district hospitals, military nursing services, and private healthcare institutions.',
    qualifications: [
      'Option A: B.Sc Nursing (4 Years degree course post-12th Science)',
      'Option B: GNM (General Nursing and Midwifery) Diploma (3 Years)',
      'Option C: ANM (Auxiliary Nurse Midwife) (2 Years post-10th or 12th for primary health centers)'
    ],
    subjectsAfter10th: 'Class 11-12 with Physics, Chemistry, and Biology (PCB) with English',
    subjectsAfter12th: 'NEET-UG (for some central institutes) or State Nursing CETs (like MH-B.Sc Nursing CET)',
    entranceExams: ['NEET-UG', 'MH-B.Sc Nursing CET (Maharashtra)', 'AIIMS B.Sc Nursing Entrance', 'Military Nursing Service (MNS)'],
    govtColleges: [
      'AIIMS Colleges of Nursing (New Delhi, Bhopal, Nagpur, etc.)',
      'Govt Medical College (GMC) Nursing Schools across all districts',
      'King George Medical University (KGMU), Lucknow',
      'Grant Govt Medical College, Mumbai'
    ],
    courseFeesGovt: '₹2,000 - ₹12,000 / year in Government Nursing Colleges (often includes stipend during internship)',
    courseFeesPrivate: '₹60,000 - ₹1,50,000 / year in Private Nursing Institutes',
    feesSourceDate: 'Indian Nursing Council (INC) & State CET Bulletins (2024)',
    indicativeSalary: {
      startingTier2OrRural: '₹2.4 - ₹3.6 Lakhs / year (District / Private Hospitals)',
      startingMetro: '₹4.2 - ₹6.5 Lakhs / year (AIIMS / Central Govt: ₹70,000+/month with allowances)',
      experienced: '₹8 - ₹14 Lakhs / year (High international demand in UK, Gulf, Germany)'
    },
    suitableScholarships: [
      'National Means-cum-Merit Scholarship (NMMSS)',
      'Post-Matric Scholarship for Minorities / SC / ST / OBC',
      'MahaDBT Savitribai Phule Scholarship for Girls',
      'State Government Nursing Stipends'
    ],
    freeResources: [
      {
        title: 'Human Anatomy & Physiology Lecture Series',
        provider: 'e-PG Pathshala / UGC',
        url: 'https://epgp.inflibnet.ac.in',
        isFree: true
      },
      {
        title: 'NCERT Class 11-12 Biology Digital Textbooks',
        provider: 'NCERT e-Pathshala',
        url: 'https://ncert.nic.in/textbook.php',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'If in Class 10: Choose Science stream with Biology (PCB).',
      'Verify minimum age requirement (usually 17 years by December of admission year).',
      'Check State Nursing CET notification dates around March-April every year.'
    ],
    disclaimer: 'Govt hospital posts require passing recruitment exams like NORCET (AIIMS) or State Health Department examinations.'
  },
  {
    id: 'civil-services-upsc',
    title: 'Civil Services (IAS / IPS / IFS / IRS)',
    titleHindi: 'सिविल सेवा (आईएएस / आईपीएस / आईएफएस)',
    titleMarathi: 'नागरी सेवा (IAS / IPS / IFS / IRS)',
    category: 'government',
    categoryLabel: 'Government Careers',
    brief: 'Lead administrative, law-enforcement, diplomatic, and public policy decisions for the nation.',
    briefHindi: 'जिले और देश के प्रशासनिक, कानून-व्यवस्था और नीति निर्माण से जुड़े महत्वपूर्ण पदों का नेतृत्व करना।',
    briefMarathi: 'जिल्हा प्रशासन, कायदा-सुव्यवस्था आणि शासकीय धोरणांची प्रभावी अंमलबजावणी करणारी सर्वोच्च सेवा.',
    overview: 'The UPSC Civil Services Examination (CSE) is India’s premier government examination conducted annually to select officers for all-India services (IAS, IPS) and central services (IFS, IRS). Any graduate from an accredited university in any discipline is eligible.',
    qualifications: [
      'Any Bachelor’s Degree (BA, B.Com, B.Sc, B.Tech, MBBS, BCA, etc.) from a recognized university',
      'Final year undergraduate students can appear for the Preliminary examination',
      'Minimum age: 21 years (Relaxations for OBC, SC, ST, and PwD categories)'
    ],
    subjectsAfter10th: 'Any stream (Humanities / Arts gives direct grounding in History, Polity & Geography; Science or Commerce also fully eligible)',
    subjectsAfter12th: 'Pursue an undergraduate degree while developing strong reading habits in current affairs and general studies',
    entranceExams: ['UPSC Civil Services Examination (CSE): Prelims, Mains & Personality Test'],
    govtColleges: [
      'Central & State Universities with affordable BA/BSc degrees (e.g., Delhi University, Pune University, BHU, Allahabad University)',
      'IGNOU (Indira Gandhi National Open University) - Distance education accepted'
    ],
    courseFeesGovt: 'Degree cost: ₹3,000 - ₹15,000 / year in Govt Colleges. Self-study with standard books is viable.',
    courseFeesPrivate: 'Private coaching can be ₹1 Lakh - ₹2 Lakhs (Note: Coaching is NOT mandatory; many toppers self-study using NCERTs)',
    feesSourceDate: 'UPSC Official Annual Notification (2024-25)',
    indicativeSalary: {
      startingTier2OrRural: 'Level 10 Pay Matrix: Basic ₹56,100 + DA + HRA (Approx ₹85,000+/month gross)',
      startingMetro: 'Similar pay scale with metro HRA + government accommodation & official transport',
      experienced: 'Cabinet Secretary / Principal Secretary: Up to ₹2,50,000/month fixed + state perks'
    },
    suitableScholarships: [
      'UPSC free coaching schemes by State Govts (e.g., SIAC Maharashtra, UP Abhyudaya Yojana)',
      'Post-Matric Scholarships for graduation studies'
    ],
    freeResources: [
      {
        title: 'NCERT Textbooks (Classes 6 to 12 History, Geography, Polity, Economics)',
        provider: 'NCERT Official Portal',
        url: 'https://ncert.nic.in',
        isFree: true
      },
      {
        title: 'PIB (Press Information Bureau) Daily Government Releases',
        provider: 'Ministry of Information & Broadcasting',
        url: 'https://pib.gov.in',
        isFree: true
      },
      {
        title: 'Sansad TV Debates & Perspective',
        provider: 'Parliament of India Official Channel',
        url: 'https://sansadtv.nic.in',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'Begin reading an editorial newspaper (The Hindu or Indian Express) daily to build reading comprehension.',
      'Read NCERT social science textbooks from Class 6 to 10 to establish fundamentals.',
      'Focus on completing graduation with good conceptual clarity.'
    ],
    disclaimer: 'Selection ratio is under 0.1%. Always maintain a solid backup career option (banking, teaching, corporate, or state exams).'
  },
  {
    id: 'industrial-electrician',
    title: 'Industrial Electrician & Wireman',
    titleHindi: 'औद्योगिक इलेक्ट्रीशियन एवं वायरमैन',
    titleMarathi: 'इंडस्ट्रियल इलेक्ट्रिशियन आणि वायरमन',
    category: 'vocational',
    categoryLabel: 'Vocational & Skilled Trades',
    brief: 'Install, maintain, and repair electrical wiring, industrial machinery, power grids, and domestic circuits.',
    briefHindi: 'कारखानों और भवनों में विद्युत वायरिंग, मोटर, ट्रांसफार्मर और उपकरणों की स्थापना व मरम्मत करना।',
    briefMarathi: 'कारखाने, इमारती आणि वीज वितरण यंत्रणेत वायरिंग, मोटर आणि उपकरणांची दुरुस्ती व देखभाल करणे.',
    overview: 'Industrial electricians are essential across manufacturing plants, railways, state electricity boards (MSEDCL, UPPCL), real estate, and renewable energy installations. A student can complete an ITI course in 2 years post-Class 10 and start earning quickly.',
    qualifications: [
      'ITI in Electrician Trade (2 Years post-Class 10)',
      'Or National Apprenticeship Certificate (NAC) via NAPS',
      'Or Diploma in Electrical Engineering (3 Years post-10th)'
    ],
    subjectsAfter10th: 'Class 10 with Mathematics and Science',
    subjectsAfter12th: 'Direct admission to ITI or lateral entry to 2nd year Polytechnic Diploma',
    entranceExams: ['State ITI Merit Admission (Based on 10th marks)', 'State Polytechnic Entrance (e.g. JEECUP, MSBTE)'],
    govtColleges: [
      'Government Industrial Training Institutes (ITIs) in every taluka/district',
      'Government Polytechnic Colleges across all states',
      'National Skill Training Institutes (NSTI)'
    ],
    courseFeesGovt: '₹1,500 - ₹5,000 for entire 2-year course in Govt ITIs (Free for SC/ST students in most states)',
    courseFeesPrivate: '₹25,000 - ₹50,000 in Private ITIs',
    feesSourceDate: 'Directorate General of Training (DGT), Ministry of Skill Development (2024)',
    indicativeSalary: {
      startingTier2OrRural: '₹1.8 - ₹3.0 Lakhs / year (Apprenticeship stipend: ₹7,000 - ₹12,000 / month)',
      startingMetro: '₹2.8 - ₹4.5 Lakhs / year in manufacturing and metro rail corporations',
      experienced: '₹6 - ₹10 Lakhs / year (Or lucrative independent electrical contractor business)'
    },
    suitableScholarships: [
      'Pre-Matric & Post-Matric ITI Stipends',
      'National Apprenticeship Promotion Scheme (NAPS) stipend subsidy',
      'MahaDBT ITI Scholarship'
    ],
    freeResources: [
      {
        title: 'Bharat Skills E-Learning (DGT Question Banks & Books in Hindi/English/Regional)',
        provider: 'Ministry of Skill Development & Entrepreneurship',
        url: 'https://bharatskills.gov.in',
        isFree: true
      },
      {
        title: 'NIMI Instructional Media Packages for Electrician Trade',
        provider: 'National Instructional Media Institute',
        url: 'https://nimi.gov.in',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'After Class 10 results, register on your state ITI admission portal (usually open June-July).',
      'Obtain an Electrical Supervisor / Wireman License from your State Licensing Board after ITI.',
      'Register on the Apprenticeship India portal (apprenticeshipindia.gov.in) for paid training.'
    ],
    disclaimer: 'Hands-on practical safety adherence is mandatory. Always work under certified supervisors when dealing with high voltage.'
  },
  {
    id: 'chartered-accountant',
    title: 'Chartered Accountant (CA)',
    titleHindi: 'चार्टर्ड अकाउंटेंट (सीए)',
    titleMarathi: 'चार्टर्ड अकाउंटंट (CA)',
    category: 'commerce',
    categoryLabel: 'Commerce & Finance',
    brief: 'Provide statutory auditing, taxation advice, corporate financial planning, and business advisory services.',
    briefHindi: 'कंपनियों और व्यक्तियों के लिए वित्तीय ऑडिट, टैक्स फाइलिंग और वित्तीय नियोजन का प्रबंधन करना।',
    briefMarathi: 'कंपन्यांचे ऑडिटिंग, आयकर सल्लागार, आर्थिक नियोजन आणि वित्तीय हिशोब व्यवस्थापन करणे.',
    overview: 'The Institute of Chartered Accountants of India (ICAI) regulates the CA profession. It is widely considered one of the most cost-effective yet prestigious professional qualifications in India because there are no expensive tuition fees required by the institute, only registration and exam fees.',
    qualifications: [
      'Step 1: CA Foundation (Post-Class 12 in any stream, though Commerce is advantageous)',
      'Step 2: CA Intermediate (Group 1 & Group 2)',
      'Step 3: Practical Articleship Training (2 Years with a practicing CA - paid stipend)',
      'Step 4: CA Final Examination'
    ],
    subjectsAfter10th: 'Class 11-12 Commerce (Accountancy, Economics, Business Studies, Mathematics recommended)',
    subjectsAfter12th: 'Register for ICAI Foundation after appearing for Class 12 exams',
    entranceExams: ['ICAI CA Foundation Examination (Conducted thrice a year: Jan, May/June, Sept)'],
    govtColleges: [
      'Conducted directly by ICAI (Pan-India statutory body). Can be pursued alongside B.Com from any Govt College.'
    ],
    courseFeesGovt: 'Total ICAI registration and examination fees: ₹75,000 - ₹90,000 across all levels spread over 4-5 years',
    courseFeesPrivate: 'Private coaching can cost ₹50,000 - ₹1.5 Lakhs (Free lectures widely available on YouTube / ICAI BoS)',
    feesSourceDate: 'ICAI Official Prospectus (2024)',
    indicativeSalary: {
      startingTier2OrRural: '₹6 - ₹9 Lakhs / year in mid-sized firms',
      startingMetro: '₹9 - ₹15 Lakhs / year (Big 4 accounting firms, banks, MNCs)',
      experienced: '₹20 - ₹50+ Lakhs / year or independent practice'
    },
    suitableScholarships: [
      'ICAI Need-Based & Merit Scholarships for Foundation and Inter students',
      'Post-Matric Scholarships for graduation studies'
    ],
    freeResources: [
      {
        title: 'ICAI Board of Studies (BoS) Knowledge Portal (Study Material & Podcasts)',
        provider: 'ICAI Official',
        url: 'https://boslive.icai.org',
        isFree: true
      },
      {
        title: 'Basic Accounting Principles & Book-keeping',
        provider: 'SWAYAM / NCERT Accountancy',
        url: 'https://swayam.gov.in',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'Register for CA Foundation on icai.org after your Class 12 board admit card is issued.',
      'Study official ICAI study modules thoroughly; pass rates depend on writing practice.',
      'Enroll simultaneously in a regular or distance B.Com degree to secure an academic graduation degree.'
    ],
    disclaimer: 'The exam pass percentage is traditionally low (15-25%). Requires disciplined daily study and strong numerical aptitude.'
  },
  {
    id: 'primary-school-teacher',
    title: 'School Teacher (Primary / TGT)',
    titleHindi: 'विद्यालय शिक्षक (प्राथमिक / प्रशिक्षित स्नातक)',
    titleMarathi: 'शालेय शिक्षक (प्राथमिक / TGT)',
    category: 'education',
    categoryLabel: 'Education',
    brief: 'Educate children, build foundational literacy, design learning activities, and shape future citizens.',
    briefHindi: 'छात्रों को पढ़ाना, बुनियादी साक्षरता विकसित करना और देश के भावी नागरिकों का मार्गदर्शन करना।',
    briefMarathi: 'विद्यार्थ्यांना ज्ञानदान करणे, मूलभूत साक्षरता घडवणे आणि भावी पिढीचे चारित्र्य घडवणे.',
    overview: 'Teaching is a vital nation-building profession offering stability, respect, and deep social contribution. Teachers work in Government Schools (Kendriya Vidyalaya, Navodaya Vidyalaya, Zilla Parishad schools) and private institutions.',
    qualifications: [
      'For Primary Teacher (PRT): Class 12 + 2-year D.El.Ed (Diploma in Elementary Education) + CTET / State TET Paper 1',
      'For Trained Graduate Teacher (TGT, Classes 6-10): Graduation (BA/BSc) + 2-year B.Ed + CTET / State TET Paper 2',
      'For Post Graduate Teacher (PGT, Classes 11-12): Master’s Degree (MA/MSc/MCom) + B.Ed'
    ],
    subjectsAfter10th: 'Any stream (Arts, Science, or Commerce)',
    subjectsAfter12th: 'State D.El.Ed CET or Bachelor’s degree followed by B.Ed CET',
    entranceExams: ['CTET (Central Teacher Eligibility Test)', 'State TET (MAHA-TET, UPTET, REET, BTET)', 'KVS / NVS Recruitment Exams'],
    govtColleges: [
      'District Institutes of Education and Training (DIETs) in every district',
      'Govt College of Education in each state university',
      'Central Institutes of Education (CIE)'
    ],
    courseFeesGovt: '₹5,000 - ₹20,000 / year in Government DIETs and State Education Colleges',
    courseFeesPrivate: '₹40,000 - ₹90,000 / year in Private B.Ed colleges',
    feesSourceDate: 'NCTE (National Council for Teacher Education) & State Examination Authorities (2024)',
    indicativeSalary: {
      startingTier2OrRural: 'Govt ZP / State Schools: ₹32,000 - ₹45,000 / month gross (as per 7th Pay Commission pay bands)',
      startingMetro: 'Kendriya Vidyalaya / Central Govt: ₹45,000 - ₹60,000 / month gross + benefits',
      experienced: '₹60,000 - ₹95,000 / month for senior teachers & headmasters'
    },
    suitableScholarships: [
      'Post-Matric Scholarships for D.El.Ed and B.Ed students',
      'Special reservations and fee concessions for women in government teaching institutes'
    ],
    freeResources: [
      {
        title: 'DIKSHA Portal (National Platform for School Education)',
        provider: 'Ministry of Education, Govt of India',
        url: 'https://diksha.gov.in',
        isFree: true
      },
      {
        title: 'CTET Previous Years Question Papers with Answer Keys',
        provider: 'CBSE Official Portal',
        url: 'https://ctet.nic.in',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'If in Class 12: Decide whether you want to do D.El.Ed directly or complete a 3-year Graduation first (recommended for better promotions).',
      'Track state DIET entrance exams held every summer.',
      'Review CTET syllabus to understand Child Development and Pedagogy concepts.'
    ],
    disclaimer: 'Clearing TET/CTET is an eligibility condition; final job appointment requires passing state recruitment exams or teacher recruitment drives (e.g. TAIT in Maharashtra).'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    titleHindi: 'डेटा विश्लेषक (डेटा एनालिस्ट)',
    titleMarathi: 'डेटा ॲनालिस्ट',
    category: 'technology',
    categoryLabel: 'Technology',
    brief: 'Extract insights from data using Excel, SQL, and PowerBI to help businesses and governments make decisions.',
    briefHindi: 'कंप्यूटर डेटा, एक्सेल और सांख्यिकी का विश्लेषण करके सही व्यावसायिक निर्णय लेने में मदद करना।',
    briefMarathi: 'डेटा, एक्सेल आणि आकडेवारीचे विश्लेषण करून संस्थांना अचूक व्यावसायिक निर्णय घेण्यास मदत करणे.',
    overview: 'Data analysts collect, clean, and interpret data sets to answer business questions. The demand for data-literate professionals extends beyond IT into retail, banking, e-commerce, agriculture, and government public health analytics.',
    qualifications: [
      'Bachelor’s Degree in any field with quantitative skills: BCA, B.Sc. Statistics / Math / CS, B.Com, or B.Tech',
      'Practical proficiency in Microsoft Excel, SQL, and data visualization tools (Power BI / Tableau)'
    ],
    subjectsAfter10th: 'Mathematics or Computer Applications recommended in Class 11-12',
    subjectsAfter12th: 'Undergraduate degree in CS, BCA, Economics, or Statistics',
    entranceExams: ['CUET-UG', 'State CETs for BCA/BSc Computer Science'],
    govtColleges: [
      'Central and State Universities offering B.Sc Statistics / Computer Science',
      'Indian Statistical Institute (ISI) Kolkata / Bangalore (via ISI Entrance)'
    ],
    courseFeesGovt: '₹5,000 - ₹30,000 / year in Government Science & Commerce Colleges',
    courseFeesPrivate: '₹60,000 - ₹1,80,000 / year in private universities',
    feesSourceDate: 'NASSCOM Industry Skills Benchmarks (2024)',
    indicativeSalary: {
      startingTier2OrRural: '₹2.8 - ₹4.5 Lakhs / year',
      startingMetro: '₹4.5 - ₹8.0 Lakhs / year',
      experienced: '₹10 - ₹22 Lakhs / year as Senior Data Analyst / Analytics Manager'
    },
    suitableScholarships: ['Central Sector Scholarship', 'Post-Matric National Scholarships'],
    freeResources: [
      {
        title: 'SQL for Data Analysis',
        provider: 'Khan Academy (Free)',
        url: 'https://www.khanacademy.org/computing/computer-programming/sql',
        isFree: true
      },
      {
        title: 'Google Data Analytics Certificate Foundations',
        provider: 'Coursera / SWAYAM Partner courses',
        url: 'https://swayam.gov.in',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'Master advanced Microsoft Excel (Pivot tables, VLOOKUP/XLOOKUP, summary formulas).',
      'Learn basic SQL queries using free online browser sandboxes without needing a high-end computer.',
      'Build a portfolio with 2 public data analysis projects on real Indian datasets (e.g. data.gov.in).'
    ],
    disclaimer: 'Practical portfolio projects and SQL ability matter more than expensive certificate courses.'
  },
  {
    id: 'solar-renewable-technician',
    title: 'Solar Energy & Renewable Technician',
    titleHindi: 'सौर ऊर्जा एवं नवीकरणीय तकनीशियन',
    titleMarathi: 'सौर ऊर्जा आणि नूतनीकरणक्षम तंत्रज्ञ',
    category: 'emerging',
    categoryLabel: 'Emerging & Green Careers',
    brief: 'Assemble, install, test, and maintain rooftop solar panels and rural renewable energy micro-grids.',
    briefHindi: 'घरों और फैक्ट्रियों में सोलर पैनल लगाना, तारों को जोड़ना और सौर ऊर्जा ग्रिड की मरम्मत करना।',
    briefMarathi: 'सौर पॅनेल बसवणे, मेंटेनन्स करणे आणि ग्रामीण भागातील हरित ऊर्जा यंत्रणा चालू ठेवणे.',
    overview: 'With India’s rapid clean energy push (PM Surya Ghar Muft Bijli Yojana targeting 1 crore rooftop solar installations), solar technicians, site supervisors, and maintenance technicians are in urgent demand across villages, towns, and cities.',
    qualifications: [
      'Suryamitra Skill Development Program (3 Months free Govt certified training)',
      'Or ITI in Solar Technician (Electrical) / Wireman / Electrician',
      'Or Diploma in Electrical Engineering'
    ],
    subjectsAfter10th: 'Class 10 pass (Minimum requirement for Suryamitra scheme)',
    subjectsAfter12th: 'Direct admission to Suryamitra centers or ITI trades',
    entranceExams: ['National Institute of Solar Energy (NISE) Suryamitra admissions (Merit based)'],
    govtColleges: [
      'National Institute of Solar Energy (NISE) affiliated training centers across India',
      'Govt ITIs running Solar Technician trade courses',
      'PMKVY (Pradhan Mantri Kaushal Vikas Yojana) Centers'
    ],
    courseFeesGovt: '100% Free under Govt Suryamitra & PMKVY Schemes (Boarding & lodging frequently sponsored)',
    courseFeesPrivate: '₹15,000 - ₹35,000 in private skill centers',
    feesSourceDate: 'Ministry of New and Renewable Energy (MNRE) Annual Guidelines (2024)',
    indicativeSalary: {
      startingTier2OrRural: '₹1.8 - ₹3.0 Lakhs / year (plus installation commission)',
      startingMetro: '₹2.5 - ₹4.5 Lakhs / year for commercial rooftop projects',
      experienced: '₹6 - ₹12 Lakhs / year as Rooftop Solar Project Contractor'
    },
    suitableScholarships: [
      'MNRE Suryamitra Free Training Sponsorship',
      'PMKVY Skill Stipends'
    ],
    freeResources: [
      {
        title: 'Suryamitra E-Learning Modules & Safety Manuals',
        provider: 'National Institute of Solar Energy (NISE)',
        url: 'https://nise.res.in',
        isFree: true
      },
      {
        title: 'Renewable Energy Basics Course',
        provider: 'NPTEL / IIT Kharagpur',
        url: 'https://nptel.ac.in',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'Locate the nearest government-approved Suryamitra training partner in your district via nise.res.in.',
      'Check eligibility: Minimum 18 years old and Class 10/ITI pass.',
      'Register for local government rooftop solar installation drives.'
    ],
    disclaimer: 'Roof safety and electrical hazard protocols must be strictly followed with safety gear at all times.'
  },
  {
    id: 'ui-ux-designer',
    title: 'UI / UX & Digital Product Designer',
    titleHindi: 'यूआई / यूएक्स एवं डिजिटल उत्पाद डिजाइनर',
    titleMarathi: 'UI / UX आणि डिजिटल उत्पादन डिझायनर',
    category: 'creative',
    categoryLabel: 'Creative & Media',
    brief: 'Design intuitive, easy-to-use mobile apps and websites that solve user problems through empathy and visual craft.',
    briefHindi: 'मोबाइल ऐप्स और वेबसाइट्स को सुंदर, उपयोग में आसान और हर किसी की समझ में आने वाला बनाना।',
    briefMarathi: 'मोबाईल ॲप्स आणि वेबसाइट्स वापरण्यासाठी सोप्या आणि देखण्या तयार करणे.',
    overview: 'User Interface (UI) and User Experience (UX) designers ensure that software is accessible, especially for users with limited literacy or non-English speakers. Designers work for Indian consumer apps (UPI apps, e-commerce, agriculture tools) and global product teams.',
    qualifications: [
      'Option A: B.Des (Bachelor of Design) in Interaction Design / Visual Communication (4 Years)',
      'Option B: Any Bachelor’s degree (BCA, BA, B.Sc) combined with a verified design portfolio',
      'Option C: Diploma in Applied Arts / Commercial Arts (3 Years)'
    ],
    subjectsAfter10th: 'Any stream (Fine Arts or Computer Science is helpful, but not required)',
    subjectsAfter12th: 'UCEED (IITs), NID DAT (National Institute of Design), or NIFT entrance examinations',
    entranceExams: ['UCEED (IIT Bombay)', 'NID DAT', 'NIFT Entrance', 'State Art CET (e.g. MAH-AAC-CET)'],
    govtColleges: [
      'National Institute of Design (NID Ahmedabad, Kurukshetra, Vijayawada, etc.)',
      'IDC School of Design, IIT Bombay / IIT Guwahati',
      'Sir J.J. School of Art, Mumbai',
      'National Institute of Fashion Technology (NIFT)'
    ],
    courseFeesGovt: '₹20,000 - ₹60,000 / year in State Govt Art Colleges; ₹1.5L - ₹2.5L / year in NIDs/IITs (with category scholarships)',
    courseFeesPrivate: '₹1.5 Lakhs - ₹4 Lakhs / year in private design colleges',
    feesSourceDate: 'NID & UCEED Official Admission Handbooks (2024)',
    indicativeSalary: {
      startingTier2OrRural: '₹3.2 - ₹5.0 Lakhs / year (remote work very common)',
      startingMetro: '₹5.5 - ₹10.5 Lakhs / year in tech companies',
      experienced: '₹15 - ₹35 Lakhs / year as Lead Product Designer'
    },
    suitableScholarships: [
      'Post-Matric Scholarships for Professional Degree Courses',
      'MahaDBT Dr. Punjabrao Deshmukh Hostel Allowance',
      'National Handicapped Finance and Development Corporation Grants'
    ],
    freeResources: [
      {
        title: 'Figma for Beginners (Free collaborative UI design tool)',
        provider: 'Figma Official Learn',
        url: 'https://help.figma.com',
        isFree: true
      },
      {
        title: 'Human-Centered Design Principles',
        provider: 'NPTEL / IIT Kanpur',
        url: 'https://nptel.ac.in',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'Create a free Figma account using any computer or Chromebook.',
      'Pick a real problem in your hometown (e.g., how to make train ticket booking simpler for rural elders) and sketch wireframes on paper.',
      'Build a simple 3-project case study portfolio on Behance or a free website.'
    ],
    disclaimer: 'In design hiring, your portfolio and visual problem-solving process matter far more than degrees.'
  },
  {
    id: 'paramedical-lab-tech',
    title: 'Medical Laboratory Technician (MLT)',
    titleHindi: 'चिकित्सा प्रयोगशाला तकनीशियन (एमएलटी)',
    titleMarathi: 'वैद्यकीय प्रयोगशाळा तंत्रज्ञ (DMLT / BMLT)',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    brief: 'Perform blood tests, diagnostic analysis, and microbiological screenings to help doctors diagnose illnesses.',
    briefHindi: 'रक्त जांच, मूत्र परीक्षण और रोगों के निदान के लिए जरूरी मेडिकल टेस्ट करना।',
    briefMarathi: 'रक्त तपासणी, लघवी तपासणी आणि रोगांचे अचूक निदान करण्यासाठी प्रयोगशाळेत चाचण्या करणे.',
    overview: 'Medical lab technicians are the backbone of diagnostic healthcare. Every hospital, primary health center (PHC), diagnostic laboratory, and blood bank requires certified lab technicians.',
    qualifications: [
      'Option A: DMLT (Diploma in Medical Laboratory Technology) (2 Years post-12th Science)',
      'Option B: BMLT / B.Sc in Medical Laboratory Technology (3 Years post-12th Science)'
    ],
    subjectsAfter10th: 'Class 11-12 with Chemistry and Biology (PCB stream)',
    subjectsAfter12th: 'Admission based on Class 12 Science PCB marks or State Paramedical Board Entrance',
    entranceExams: ['State Paramedical Board Admissions (Merit based in most states)'],
    govtColleges: [
      'Government Medical Colleges Paramedical Wings in every district',
      'All India Institute of Medical Sciences (AIIMS Paramedical courses)',
      'State Health University Affiliated Colleges (e.g. MUHS Nashik)'
    ],
    courseFeesGovt: '₹10,000 - ₹30,000 / year in Government Medical Colleges',
    courseFeesPrivate: '₹40,000 - ₹80,000 / year in private paramedical colleges',
    feesSourceDate: 'State Paramedical Councils & Medical Education Directorate (2024)',
    indicativeSalary: {
      startingTier2OrRural: '₹1.8 - ₹3.0 Lakhs / year',
      startingMetro: '₹2.8 - ₹4.5 Lakhs / year in diagnostic chains (Dr. Lal PathLabs, SRL, Metropolis)',
      experienced: '₹5 - ₹9 Lakhs / year (or running an independent authorized collection center)'
    },
    suitableScholarships: [
      'Post-Matric Scholarship for Allied Healthcare Courses',
      'MahaDBT State Minority Scholarship'
    ],
    freeResources: [
      {
        title: 'Clinical Pathology and Hematology Basics',
        provider: 'e-PG Pathshala / UGC',
        url: 'https://epgp.inflibnet.ac.in',
        isFree: true
      }
    ],
    immediateNextSteps: [
      'Ensure you pass Class 12 Science with Biology with at least 50% marks.',
      'Check your State Paramedical Board admission notification around June-July.',
      'Verify that the institution is recognized by your State Paramedical Council before taking admission.'
    ],
    disclaimer: 'Always verify state council recognition to avoid unaccredited private training shops.'
  }
];
