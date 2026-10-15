import { MentorItem, QAQuestion } from '../types';

export const MENTORS_DATA: MentorItem[] = [
  {
    id: 'mentor-1',
    name: 'Dr. Sunita Patil',
    role: 'Associate Professor & Career Counsellor',
    organization: 'Government College of Arts & Science, Aurangabad',
    location: 'Chhatrapati Sambhajinagar (Aurangabad), Maharashtra',
    languages: ['Marathi', 'Hindi', 'English'],
    domain: 'Education & Higher Studies',
    experienceYears: 16,
    bio: 'Guided over 2,000 rural and first-generation learners toward government college admissions, teacher eligibility tests (TET/CTET), and UGC-NET. Specializes in affordable degree navigation.',
    backgroundTag: 'First-Generation Graduate & Govt College Faculty',
    isVerified: true,
    availableDays: ['Saturday afternoon', 'Sunday morning']
  },
  {
    id: 'mentor-2',
    name: 'Pravin R. Deshmukh',
    role: 'Senior Executive Engineer',
    organization: 'Maharashtra State Electricity Distribution Co. (MSEDCL)',
    location: 'Nagpur, Maharashtra',
    languages: ['Marathi', 'Hindi', 'English'],
    domain: 'Engineering & Vocational Trades',
    experienceYears: 12,
    bio: 'Started with an ITI in Wireman trade from Govt ITI, completed Polytechnic Diploma via lateral entry, and subsequently cleared the Junior Engineer state recruitment exam. Passionate about guiding students from village schools.',
    backgroundTag: 'ITI to Polytechnic Lateral Entry Success',
    isVerified: true,
    availableDays: ['Sunday afternoon']
  },
  {
    id: 'mentor-3',
    name: 'Kavita Verma',
    role: 'Staff Software Engineer',
    organization: 'Technology Services & Open Source Contributor',
    location: 'Pune / Remote',
    languages: ['Hindi', 'English'],
    domain: 'Technology & Software',
    experienceYears: 8,
    bio: 'Self-taught programmer who studied in a rural government intermediate college in Uttar Pradesh and learned coding using free online resources and local cyber cafes. Helps students build real coding projects without expensive laptops.',
    backgroundTag: 'Govt School Alumna & Tech Lead',
    isVerified: true,
    availableDays: ['Saturday morning', 'Wednesday evening']
  },
  {
    id: 'mentor-4',
    name: 'Mohd. Tariq Ansari',
    role: 'Senior Nursing Officer',
    organization: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'New Delhi',
    languages: ['Hindi', 'Urdu', 'English'],
    domain: 'Healthcare & Nursing',
    experienceYears: 9,
    bio: 'Graduated with B.Sc Nursing from a state government medical college with 100% post-matric scholarship support. Mentors students on NORCET preparation and affordable healthcare diploma routes.',
    backgroundTag: 'Scholarship Beneficiary & AIIMS Officer',
    isVerified: true,
    availableDays: ['Sunday morning']
  },
  {
    id: 'mentor-5',
    name: 'Anjali Sharma, ACA',
    role: 'Practicing Chartered Accountant',
    organization: 'ICAI Member & Financial Literacy Volunteer',
    location: 'Jaipur, Rajasthan',
    languages: ['Hindi', 'English'],
    domain: 'Commerce & Finance',
    experienceYears: 7,
    bio: 'Cleared CA Foundation, Inter, and Final on self-study using ICAI modules while pursuing a B.Com from a state university. Offers practical guidance on passing CA exams without paying lakhs in private coaching.',
    backgroundTag: 'Self-Study CA Achiever',
    isVerified: true,
    availableDays: ['Saturday evening']
  }
];

export const INITIAL_QA_QUESTIONS: QAQuestion[] = [
  {
    id: 'qa-1',
    studentName: 'Rohan K. (Class 10)',
    studentGrade: 'Class 10 Student, Satara (Maharashtra)',
    question: 'My family cannot afford private engineering coaching. Can I do a 3-year Polytechnic diploma after 10th and then join B.Tech directly?',
    category: 'Engineering & Vocational',
    date: '12 Oct 2024',
    mentorAnswer: {
      mentorName: 'Pravin R. Deshmukh',
      mentorRole: 'Senior Executive Engineer, MSEDCL',
      answer: 'Yes, Rohan! This is one of the most reliable and affordable technical paths in India. After Class 10, join a Government Polytechnic (annual fees are under ₹10,000 and 100% reimbursed for reserved or low-income students via MahaDBT). After your 3-year diploma, you qualify for "Direct Second Year Engineering (DSE)" admission into B.Tech without having to appear for JEE or MHT-CET. You save two years of private coaching fees and enter B.Tech with stronger hands-on practical skills than 12th-pass students.',
      date: '13 Oct 2024'
    }
  },
  {
    id: 'qa-2',
    studentName: 'Pooja S. (Class 12 Arts)',
    studentGrade: 'Class 12 Humanities, Varanasi (UP)',
    question: 'I want to prepare for government administrative exams (UPSC/UPPSC), but my family wants me to get a degree that also gives a private backup job. What should I study?',
    category: 'Government & Civil Services',
    date: '08 Oct 2024',
    mentorAnswer: {
      mentorName: 'Dr. Sunita Patil',
      mentorRole: 'Associate Professor & Career Counsellor',
      answer: 'Pooja, consider a Bachelor in Computer Applications (BCA) or a BA in Economics / Journalism from a reputable government university. Both allow you to read General Studies and current affairs daily, while keeping high-demand private sector skills (data analysis, writing, digital communications) active. Remember: UPSC requires any recognized Bachelor degree, so you do not need to restrict yourself to pure political science if you want a reliable backup.',
      date: '09 Oct 2024'
    }
  },
  {
    id: 'qa-3',
    studentName: 'Vikram M. (Class 12 Science)',
    studentGrade: 'Class 12 PCB, Beed (Maharashtra)',
    question: 'My NEET score may not get me a government MBBS seat, and private medical colleges charge ₹60-80 Lakhs which we do not have. What good medical careers are possible?',
    category: 'Healthcare',
    date: '04 Oct 2024',
    mentorAnswer: {
      mentorName: 'Mohd. Tariq Ansari',
      mentorRole: 'Senior Nursing Officer, AIIMS',
      answer: 'Vikram, MBBS is not the only path to a noble medical career. Look closely at B.Sc Nursing, B.Pharm (Pharmacy), and BPT (Physiotherapy) in Government Medical Colleges. For example, B.Sc Nursing in a Govt Medical College costs under ₹10,000 per year, offers clinical exposure, and graduates routinely get appointed as Nursing Officers in AIIMS with starting gross salaries of ₹75,000/month. Additionally, DMLT (Medical Lab Technology) and Radiology Diplomas offer direct employment.',
      date: '05 Oct 2024'
    }
  }
];
