import fs from 'fs';
import path from 'path';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType
} from 'docx';

async function createDocument() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Title
          new Paragraph({
            text: 'Udaan India — Career Guidance for Every Student',
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: '“Your dreams deserve a direction.”',
                italics: true,
                bold: true,
                size: 28,
                color: '234B38'
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: 'Complete Project Documentation, Page-by-Page Walkthrough & Viva Voce Guide',
                bold: true,
                size: 24,
                color: 'C66B4E'
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 600 }
          }),

          // Metadata Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Project Name', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph('Udaan India — Public Career Guidance Portal')] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Repository', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph('https://github.com/OVAIS69/Udaan')] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Author / Developer', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph('Ovais Shaikh (OVAIS69)')] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Tech Stack', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph('React 19, TypeScript, Vite, CSS Custom Properties, Web Speech API')] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Target Audience', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph('Classes 9–12, Undergraduates, Rural & First-Generation Students Across India')] })
                ]
              })
            ]
          }),

          new Paragraph({ text: '', spacing: { after: 400 } }),

          // Section 1: Executive Overview
          new Paragraph({
            text: '1. Executive Project Overview & Mission',
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: 'In India, over 70% of students in rural communities, government municipal schools, and low-income families lack access to professional career counselling. Millions of students make life-altering stream and course decisions based solely on neighborhood hearsay or commercial coaching advertisements that push expensive private colleges.',
            spacing: { after: 200 }
          }),
          new Paragraph({
            text: 'Udaan India is a high-empathy, public-interest career guidance platform built around the real Indian educational framework. It specifically highlights affordable government colleges, ITIs, polytechnics, fee concessions (like Maharashtra’s MahaDBT 50% EBC waiver), and official central scholarships (NSP), ensuring that financial limitations never stop a student from reaching their true potential.',
            spacing: { after: 400 }
          }),

          // Section 2: Visual & Design System
          new Paragraph({
            text: '2. Art-Directed Visual Identity & Palette',
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: 'Unlike generic AI-generated templates with purple neon gradients and glassmorphism, Udaan India follows a grounded, human-centered editorial identity inspired by Indian educational heritage:',
            spacing: { after: 200 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: '• Forest Green (#234B38): ', bold: true }),
              new TextRun('Primary brand color, conveying trust, scholarship, and institutional dignity.\n'),
              new TextRun({ text: '• Warm Ivory (#F8F6EF): ', bold: true }),
              new TextRun('Page background color, providing comfortable contrast that prevents eye strain.\n'),
              new TextRun({ text: '• Terracotta (#C66B4E): ', bold: true }),
              new TextRun('Accent and call-to-action color, reflecting Indian clay craftsmanship.\n'),
              new TextRun({ text: '• Charcoal (#303832): ', bold: true }),
              new TextRun('High-contrast typography meeting WCAG AAA legibility standards.\n'),
              new TextRun({ text: '• Muted Mustard (#E7C875): ', bold: true }),
              new TextRun('Badges, verified markers, and notice highlights.')
            ],
            spacing: { after: 400 }
          }),

          // Section 3: Page-by-Page Walkthrough
          new Paragraph({
            text: '3. Page-by-Page Walkthrough (How to Explain Your Project)',
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),

          // Page 1
          new Paragraph({
            text: 'Page 1: Homepage & Quick-Start Hub',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Purpose: Welcomes the student with the inspiring tagline “Your dreams deserve a direction.” and immediately reduces decision anxiety with a 6-category quick-start selector.\n• Key Components: Hero banner, quick-start cards ("I am in Class 10", "I am in Class 12", "I am pursuing graduation", "I want to learn a skill & start earning"), and a top advisory bar confirming 100% free access and portal verification.',
            spacing: { after: 200 }
          }),

          // Page 2
          new Paragraph({
            text: 'Page 2: Career Explorer (9 Domains)',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Purpose: A structured encyclopedia of 9 major sectors (Technology, Healthcare, Government, Engineering, Commerce, Creative, Education, Vocational, Emerging).\n• Unique Features: Sourced Government vs. Private fee benchmarks, starting salaries with Tier-2/Rural vs. Metro context, 100% free learning resources (SWAYAM, NPTEL, NCERT), and a side-by-side comparison modal allowing students to compare two careers across qualifications, costs, and durations.',
            spacing: { after: 200 }
          }),

          // Page 3
          new Paragraph({
            text: 'Page 3: Scholarships & Financial Assistance',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Purpose: Connects students directly with statutory financial aid to eliminate out-of-pocket costs.\n• Sourced Portals: MahaDBT (Rajarshi Shahu Maharaj 50% tuition waiver for EBC students), National Scholarship Portal (NSP: scholarships.gov.in), UP SAMS, Bihar PMS, AICTE Pragati for Girls, and Vidya Lakshmi education loan interest subsidies (CSIS).\n• Safeguard: Sample demonstration records are clearly marked with amber badges so students never submit real documents to mock records.',
            spacing: { after: 200 }
          }),

          // Page 4
          new Paragraph({
            text: 'Page 4: Entrance Examinations & Admissions',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Purpose: Guides students through national and state entrance tests (JEE Main, NEET-UG, CUET-UG, MHT-CET, NDA, SSC).\n• Highlights: Detailed examination formats, conducting bodies (NTA, UPSC, State CET Cells), application fee concessions (e.g. 100% fee exemption for female and SC/ST candidates in SSC and NDA), and direct links to free NTA Abhyas mock tests.',
            spacing: { after: 200 }
          }),

          // Page 5
          new Paragraph({
            text: 'Page 5: Educational Pathways & Lateral Entry',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Purpose: Visualizes the realistic branching of the Indian education system post-Class 10 and Class 12.\n• Key Highlight: The "Polytechnic to B.Tech Lateral Entry" route. Shows how students can skip expensive Class 11-12 coaching, complete a 3-year Government Polytechnic Diploma, and enter the 2nd year of B.Tech with 70% lower tuition costs and superior practical laboratory experience.',
            spacing: { after: 200 }
          }),

          // Page 6
          new Paragraph({
            text: 'Page 6: Guided Career & Affordability Assessment',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Purpose: An interactive 6-step questionnaire capturing qualifications, favorite subjects, daily activities, career environment preference, annual budget, and state of residence.\n• Output: Generates personalized career recommendations and a "Low-Cost Alternative Route" (e.g., if a student cannot afford private engineering, it suggests state polytechnics or distance BCA + Swayam certifications).',
            spacing: { after: 200 }
          }),

          // Page 7
          new Paragraph({
            text: 'Page 7: Human Mentors & Child Safeguarding',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Purpose: Facilitates safe mentorship from verified college professors, government officers, and first-generation alumni.\n• Safeguarding: Zero contact exposure (no student phone numbers or emails shown), supervised group circles, mandatory parental consent for minors under 18, and a community Q&A board.',
            spacing: { after: 200 }
          }),

          // Page 8
          new Paragraph({
            text: 'Page 8: Personal Student Roadmap',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Purpose: An interactive checklist helping students track statutory documents (Income Certificate from Tahsildar, Domicile, Aadhaar-DBT linking), entrance exam deadlines, and study goals.\n• Features: Real-time progress bar (e.g., 40%), custom milestone addition, persistent browser storage, and a print-ready PDF stylesheet for offline review.',
            spacing: { after: 200 }
          }),

          // Page 9 & 10
          new Paragraph({
            text: 'Page 9 & 10: Bookmarks & Education Glossary',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Bookmarks: Shortlisted careers, scholarships, and exams stored in localStorage for quick reference.\n• Glossary: A digital literacy tool decoding confusing bureaucratic jargon (DBT, EWS, CAP Round, Lateral Entry, Domicile, NIOS, ITI) into plain, everyday language.',
            spacing: { after: 200 }
          }),

          // Page 11
          new Paragraph({
            text: 'Page 11: Admin CMS & Verification Portal',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: '• Purpose: Role-based administration dashboard allowing portal moderators to toggle verified government status, flag sample records, and audit submitted questions.',
            spacing: { after: 400 }
          }),

          // Section 4: Viva Voce Q&A
          new Paragraph({
            text: '4. Comprehensive Viva Voce Questions & Model Answers',
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),

          new Paragraph({
            children: [
              new TextRun({ text: 'Q1: What is the primary problem statement of Udaan India?\n', bold: true, color: '234B38' }),
              new TextRun({ text: 'Model Answer: ', bold: true }),
              new TextRun({ text: 'In India, students from rural schools and underprivileged backgrounds lack professional career counselling. Many fall victim to misleading private college advertisements or believe that only high-cost engineering/medical pathways exist. Udaan India bridges this information asymmetry by mapping out affordable government college routes, lateral entry schemes, statutory fee concessions (like MahaDBT), and free learning resources without commercial advertisements.' })
            ],
            spacing: { after: 250 }
          }),

          new Paragraph({
            children: [
              new TextRun({ text: 'Q2: How does the application support students with low digital literacy?\n', bold: true, color: '234B38' }),
              new TextRun({ text: 'Model Answer: ', bold: true }),
              new TextRun({ text: 'We implemented three key digital literacy solutions: First, an integrated Web Speech API Text-to-Speech audio reader that reads page content aloud in English, Hindi, and Marathi. Second, a "Simple Terms" Education Glossary that translates complex bureaucratic acronyms like DBT, EWS, and CAP Rounds into plain language. Third, a clean, high-contrast visual hierarchy with simple touch-friendly buttons tested down to 320px budget smartphone screens.' })
            ],
            spacing: { after: 250 }
          }),

          new Paragraph({
            children: [
              new TextRun({ text: 'Q3: How does the portal protect student privacy and minor safeguarding?\n', bold: true, color: '234B38' }),
              new TextRun({ text: 'Model Answer: ', bold: true }),
              new TextRun({ text: 'Safeguarding is built into the architecture: We maintain a strict "Zero Contact Exposure" policy where student phone numbers and emails are never requested or exposed publicly. When requesting guidance sessions, students under 18 must verify parental/guardian consent, and interactions are held exclusively in moderated group circles rather than unmonitored private chats.' })
            ],
            spacing: { after: 250 }
          }),

          new Paragraph({
            children: [
              new TextRun({ text: 'Q4: What is the technical stack and why was it chosen?\n', bold: true, color: '234B38' }),
              new TextRun({ text: 'Model Answer: ', bold: true }),
              new TextRun({ text: 'The platform is built with React 19, TypeScript, and Vite, utilizing custom CSS variables matching our art-directed color system. We chose React and Vite for blazing-fast client-side routing, instant rendering on low-bandwidth 4G connections, and zero compilation latency. State management utilizes React Context with localStorage persistence for bookmarks, roadmap progress, and user profiles.' })
            ],
            spacing: { after: 250 }
          }),

          new Paragraph({
            children: [
              new TextRun({ text: 'Q5: How are scholarships verified and distinguished from mock records?\n', bold: true, color: '234B38' }),
              new TextRun({ text: 'Model Answer: ', bold: true }),
              new TextRun({ text: 'Every scholarship opportunity displays its conducting authority, official portal URL, eligibility rules, and a "Last Verified" date. Official schemes (such as MahaDBT and the National Scholarship Portal) carry a green "Verified Official Govt Portal" badge. Mock demonstration records are prominently labeled with amber borders and warning text to ensure students never upload real documents to sample records.' })
            ],
            spacing: { after: 400 }
          }),

          // Section 5: Deployment
          new Paragraph({
            text: '5. Step-by-Step Vercel Deployment Instructions',
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: 'Method 1: Direct GitHub Integration on Vercel Dashboard (Recommended)\n1. Open https://vercel.com and log in with your GitHub account (OVAIS69).\n2. Click "Add New..." -> "Project".\n3. Select the repository: OVAIS69/Udaan\n4. Vercel automatically detects the Vite framework preset.\n5. Build Settings:\n   • Build Command: npm run build\n   • Output Directory: dist\n   • Install Command: npm install\n6. Click "Deploy". Your project will be live in 30 seconds with automatic continuous deployment on every git push.\n\nMethod 2: Command Line Deployment via Vercel CLI\n1. In your terminal, run: npm install -g vercel\n2. Navigate to project root: cd c:\\Users\\Ovais\\Downloads\\udaan\n3. Run: vercel login (authenticate with your browser)\n4. Run: vercel --prod\n5. Follow the interactive prompts (select defaults by pressing Enter).',
            spacing: { after: 400 }
          })
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  const outputPath = path.join('c:\\Users\\Ovais\\Downloads\\udaan', 'Udaan_Project_Viva_Documentation.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Word document successfully created at: ${outputPath}`);
}

createDocument().catch(console.error);
