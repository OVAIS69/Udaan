export interface GlossaryTerm {
  term: string;
  hindiTerm: string;
  marathiTerm: string;
  meaning: string;
  whyItMatters: string;
  howToGetOrDo: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'DBT (Direct Benefit Transfer)',
    hindiTerm: 'डीबीटी (प्रत्यक्ष लाभ अंतरण)',
    marathiTerm: 'डीबीटी (थेट लाभ हस्तांतरण)',
    meaning: 'A system where scholarship and grant money is sent directly from the government treasury into your bank account without middlemen.',
    whyItMatters: 'If your bank account is not linked to your Aadhaar card via NPCI, your scholarship will be stuck or rejected.',
    howToGetOrDo: 'Visit your bank branch and ask them to "NPCI Seed my bank account with Aadhaar for DBT scholarships". This is free.'
  },
  {
    term: 'EWS (Economically Weaker Section)',
    hindiTerm: 'ईडब्ल्यूएस (आर्थिक रूप से कमजोर वर्ग)',
    marathiTerm: 'ईडब्ल्यूएस (आर्थिकदृष्ट्या दुर्बल घटक)',
    meaning: 'A 10% reservation category in central and state higher education institutions and government jobs for General category citizens whose annual family income is below ₹8 Lakhs.',
    whyItMatters: 'Provides lower entrance cutoff marks and subsidized application fees in JEE, NEET, UPSC, and state colleges.',
    howToGetOrDo: 'Apply at your local Tahsildar / Taluk office, CSC center, or state portal (e.g., Aaple Sarkar in Maharashtra or e-District in UP).'
  },
  {
    term: 'CAP Round (Centralized Admission Process)',
    hindiTerm: 'सीएपी राउंड (केंद्रीकृत प्रवेश प्रक्रिया)',
    marathiTerm: 'सीएपी फेरी (केंद्रीभूत प्रवेश प्रक्रिया)',
    meaning: 'An official government online counseling system where colleges are allotted based on your entrance rank and college preference list.',
    whyItMatters: 'In states like Maharashtra, government fee reimbursement schemes (like EBC tuition waiver) are ONLY given if you take admission through an official CAP round. Institutional/management quota seats do not qualify.',
    howToGetOrDo: 'Register on the State CET Cell portal after your results, upload verified documents, and submit your option form.'
  },
  {
    term: 'Lateral Entry (Direct 2nd Year)',
    hindiTerm: 'लेटरल एंट्री (द्वितीय वर्ष में सीधा प्रवेश)',
    marathiTerm: 'लॅटरल एंट्री (थेट द्वितीय वर्ष प्रवेश)',
    meaning: 'A provision that allows students who completed a 3-year Polytechnic Diploma or B.Sc to take direct admission into the 2nd year (3rd semester) of a 4-year B.Tech / B.E degree.',
    whyItMatters: 'You skip Class 11-12 and the 1st year of engineering. Total time is 3 years Diploma + 3 years Engineering.',
    howToGetOrDo: 'Apply through the State DSE (Direct Second Year) admission round after your final diploma semester marksheet.'
  },
  {
    term: 'Domicile Certificate (Adhivash Praman Patra)',
    hindiTerm: 'निवास प्रमाण पत्र (डोमिसाइल सर्टिफिकेट)',
    marathiTerm: 'अधिवास प्रमाणपत्र (डोमिसाइल सर्टिफिकेट)',
    meaning: 'An official document certifying that you have lived in a specific state for a minimum number of years (usually 10 or 15 years).',
    whyItMatters: 'Mandatory to claim 85% state quota seats in engineering and medical colleges, and all state scholarships like MahaDBT.',
    howToGetOrDo: 'Issued by Executive Magistrate / Tahsildar. You will need your school leaving certificate, ration card, and electricity bill.'
  },
  {
    term: 'ITI (Industrial Training Institute)',
    hindiTerm: 'आईटीआई (औद्योगिक प्रशिक्षण संस्थान)',
    marathiTerm: 'आयटीआय (औद्योगिक प्रशिक्षण संस्था)',
    meaning: 'Government and private institutes that provide 1-year or 2-year technical and trade training (Electrician, Fitter, Welder, Machinist, COPA) immediately after Class 10 or 8.',
    whyItMatters: 'Lowest cost technical education in India with rapid access to railway apprentice, state electricity, and manufacturing jobs.',
    howToGetOrDo: 'Admissions open online across all states every June-July based on Class 10 board exam marks.'
  },
  {
    term: 'NIOS (National Institute of Open Schooling)',
    hindiTerm: 'एनआईओएस (राष्ट्रीय मुक्त विद्यालयी शिक्षा संस्थान)',
    marathiTerm: 'एनआयओएस (राष्ट्रीय मुक्त विद्यालयीन शिक्षण संस्था)',
    meaning: 'An autonomous government school board under the Ministry of Education that allows students to complete Class 10 and Class 12 through distance education with exam-on-demand.',
    whyItMatters: 'Valid across India. NIOS certificates are legally 100% equal to CBSE and State Boards for college admissions, JEE, NEET, and UPSC.',
    howToGetOrDo: 'Register online directly at nios.ac.in. Textbooks are delivered to your home by post for free.'
  }
];
