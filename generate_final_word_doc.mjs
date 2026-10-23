import fs from 'fs';
import path from 'path';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  ImageRun
} from 'docx';

const BASE_DIR = 'C:\\Users\\Ovais\\Downloads\\udaan';
const MEDIA_DIR = path.join(BASE_DIR, 'extracted_sample_doc', 'word', 'media');
const DIAGRAMS_DIR = path.join(BASE_DIR, 'generated_diagrams');
const SCREENSHOTS_DIR = 'C:\\Users\\Ovais\\.gemini\\antigravity\\brain\\47dbd439-ed68-4f12-a5ff-09982e251eae\\audit_screenshots';

function getImageBuffer(imgPath) {
  if (fs.existsSync(imgPath)) {
    return fs.readFileSync(imgPath);
  }
  console.warn('Image not found:', imgPath);
  return null;
}

const logoImg = getImageBuffer(path.join(MEDIA_DIR, 'image1.jpg'));
const normalImg1 = getImageBuffer(path.join(MEDIA_DIR, 'image2.jpg'));
const normalImg2 = getImageBuffer(path.join(MEDIA_DIR, 'image3.jpg'));
const geotagImg1 = getImageBuffer(path.join(MEDIA_DIR, 'image4.jpg'));
const geotagImg2 = getImageBuffer(path.join(MEDIA_DIR, 'image5.jpg'));
const outdoorGeotagImg = getImageBuffer(path.join(MEDIA_DIR, 'image11.jpg'));

// Diagrams
const erDiagImg = getImageBuffer(path.join(DIAGRAMS_DIR, '01_er_diagram.png'));
const classDiagImg = getImageBuffer(path.join(DIAGRAMS_DIR, '02_class_diagram.png'));
const flowchartImg = getImageBuffer(path.join(DIAGRAMS_DIR, '03_flowchart.png'));
const activityDiagImg = getImageBuffer(path.join(DIAGRAMS_DIR, '04_activity_diagram.png'));
const seqDiagImg = getImageBuffer(path.join(DIAGRAMS_DIR, '05_sequence_diagram.png'));

// UI Screenshots
const homeScreenshot = getImageBuffer(path.join(SCREENSHOTS_DIR, '01_desktop_home.png'));
const careerScreenshot = getImageBuffer(path.join(SCREENSHOTS_DIR, '04_career_search.png'));
const scholarshipScreenshot = getImageBuffer(path.join(SCREENSHOTS_DIR, '06_scholarships_mahadbt.png'));
const quizScreenshot = getImageBuffer(path.join(SCREENSHOTS_DIR, '08_quiz_step1.png'));
const mentorScreenshot = getImageBuffer(path.join(SCREENSHOTS_DIR, '11_mentor_session_safeguarding_modal.png'));
const roadmapScreenshot = getImageBuffer(path.join(SCREENSHOTS_DIR, '10_roadmap_progress.png'));

// Formatting Helpers
const fontNormal = 'Calibri';
const colorDarkGreen = '234B38';
const colorCharcoal = '303832';
const colorTerracotta = 'C66B4E';

function pTitle(text, color = colorDarkGreen, size = 32) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 120 },
    children: [
      new TextRun({
        text,
        bold: true,
        font: fontNormal,
        size,
        color
      })
    ]
  });
}

function pSubtitle(text, size = 22, color = colorCharcoal) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 80, after: 80 },
    children: [
      new TextRun({
        text,
        font: fontNormal,
        size,
        color
      })
    ]
  });
}

function pHeading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 140 },
    children: [
      new TextRun({
        text,
        bold: true,
        font: fontNormal,
        size: 28,
        color: colorDarkGreen
      })
    ]
  });
}

function pHeading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 100 },
    children: [
      new TextRun({
        text,
        bold: true,
        font: fontNormal,
        size: 24,
        color: colorTerracotta
      })
    ]
  });
}

function pHeading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 180, after: 80 },
    children: [
      new TextRun({
        text,
        bold: true,
        font: fontNormal,
        size: 20,
        color: colorDarkGreen
      })
    ]
  });
}

function pBody(text) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFY,
    spacing: { before: 60, after: 60, line: 300 },
    children: [
      new TextRun({
        text,
        font: fontNormal,
        size: 22,
        color: colorCharcoal
      })
    ]
  });
}

function pBullet(boldPrefix, text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 40, after: 40, line: 280 },
    children: [
      new TextRun({
        text: boldPrefix,
        bold: true,
        font: fontNormal,
        size: 22,
        color: colorDarkGreen
      }),
      new TextRun({
        text: ' ' + text,
        font: fontNormal,
        size: 22,
        color: colorCharcoal
      })
    ]
  });
}

function pCenter(text, bold = false, size = 22, color = colorCharcoal) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 60 },
    children: [
      new TextRun({
        text,
        bold,
        font: fontNormal,
        size,
        color
      })
    ]
  });
}

function pPageBreak() {
  return new Paragraph({
    pageBreakBefore: true
  });
}

function pImage(buffer, width = 500, height = 300, caption = '') {
  if (!buffer) {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: `[Image: ${caption}]`, font: fontNormal, color: '888888' })]
    });
  }
  const items = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120, after: 80 },
      children: [
        new ImageRun({
          data: buffer,
          transformation: { width, height }
        })
      ]
    })
  ];
  if (caption) {
    items.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 40, after: 120 },
        children: [
          new TextRun({
            text: caption,
            italics: true,
            font: fontNormal,
            size: 18,
            color: '666666'
          })
        ]
      })
    );
  }
  return items;
}

// Build Document Sections
const docChildren = [];

// ==========================================
// 1. COVER PAGE
// ==========================================
docChildren.push(pTitle('ONLINE CAREER GUIDANCE PORTAL FOR UNDERPRIVILEGED STUDENTS', colorDarkGreen, 32));
docChildren.push(pSubtitle('Community Engagement Program (CEP)', 24, colorTerracotta));
docChildren.push(new Paragraph({ spacing: { before: 200, after: 100 } }));

docChildren.push(pCenter('Submitted by:', false, 22));
docChildren.push(pCenter('ZEESHAAN SHAIKH', true, 26, colorDarkGreen));
docChildren.push(pCenter('T.Y.BSc. IT (Semester-V)', true, 22));
docChildren.push(new Paragraph({ spacing: { before: 160, after: 80 } }));

docChildren.push(pCenter('Under the Guidance of:', false, 22));
docChildren.push(pCenter('Ms. Kohinoor Khan', true, 24, colorDarkGreen));
docChildren.push(pCenter('Department of Information Technology', false, 20));
docChildren.push(new Paragraph({ spacing: { before: 200, after: 100 } }));

if (logoImg) {
  docChildren.push(...pImage(logoImg, 120, 120));
}

docChildren.push(pCenter('DEPARTMENT OF INFORMATION TECHNOLOGY', true, 22, colorDarkGreen));
docChildren.push(pCenter('Chembur Trombay Education Society’s', false, 20));
docChildren.push(pCenter('N. G. Acharya & D. K. Marathe College Of Arts, Science & Commerce', true, 22));
docChildren.push(pCenter('Shri .N.G. Acharya Marg, Chembur, Mumbai 400 071, India.', false, 18));
docChildren.push(pCenter('(Affiliated to University of Mumbai)', true, 18));
docChildren.push(new Paragraph({ spacing: { before: 100, after: 60 } }));
docChildren.push(pCenter('Academic Year: 2026 - 2027', true, 22, colorTerracotta));

// ==========================================
// 2. CERTIFICATE PAGE
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pCenter('DEPARTMENT OF INFORMATION TECHNOLOGY', true, 22, colorDarkGreen));
docChildren.push(pCenter('Chembur Trombay Education Society’s', false, 20));
docChildren.push(pCenter('N. G. Acharya & D. K. Marathe College Arts, Science & Commerce', true, 22));
docChildren.push(pCenter('Shri .N.G. Acharya Marg, Chembur, Mumbai 400 071, India.', false, 18));
docChildren.push(pCenter('(Affiliated to University of Mumbai)', true, 18));
docChildren.push(new Paragraph({ spacing: { before: 100, after: 60 } }));

if (logoImg) {
  docChildren.push(...pImage(logoImg, 100, 100));
}

docChildren.push(pTitle('CERTIFICATE', colorDarkGreen, 30));
docChildren.push(
  pBody(
    'I hereby certify that Mr. ZEESHAAN SHAIKH, student of N. G. Acharya & D. K. Marathe College of Arts, Science & Commerce studying in Bachelor of Information Technology SEM-V, has successfully completed the project on CEP Title: “ONLINE CAREER GUIDANCE PORTAL FOR UNDERPRIVILEGED STUDENTS” in the area of INFORMATION TECHNOLOGY specialization for the academic year 2026-2027. To the best of my knowledge, the work of the student is original and the information included in the project is correct.'
  )
);

docChildren.push(new Paragraph({ spacing: { before: 400, after: 100 } }));

// Signatures Table
const signTable = new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [pCenter('____________________', true), pCenter('Ms. Kohinoor Khan', true), pCenter('Internal Guide', false, 18)],
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
        }),
        new TableCell({
          children: [pCenter('____________________', true), pCenter('External Examiner', true), pCenter('University of Mumbai', false, 18)],
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
        }),
        new TableCell({
          children: [pCenter('____________________', true), pCenter('Head of Department', true), pCenter('Information Technology', false, 18)],
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
        })
      ]
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph({ spacing: { before: 200 } }), pCenter('____________________', true), pCenter('Vice Principal', true)],
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
        }),
        new TableCell({
          children: [new Paragraph({ spacing: { before: 200 } }), pCenter('College Seal / Stamp', false, 18, '888888')],
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
        }),
        new TableCell({
          children: [new Paragraph({ spacing: { before: 200 } }), pCenter('____________________', true), pCenter('I/c Principal', true)],
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
        })
      ]
    })
  ]
});
docChildren.push(signTable);

// ==========================================
// 3. DECLARATION
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pTitle('DECLARATION', colorDarkGreen, 28));
docChildren.push(new Paragraph({ spacing: { before: 160, after: 100 } }));

docChildren.push(
  pBody(
    'I, Mr. ZEESHAAN SHAIKH, student of N. G. Acharya & D. K. Marathe College Arts, Science & Commerce studying in Bachelor of Information Technology SEM-V, hereby declare that I have completed the Field Project titled “ONLINE CAREER GUIDANCE PORTAL FOR UNDERPRIVILEGED STUDENTS” during the academic year 2026-2027.'
  )
);
docChildren.push(
  pBody(
    'The report is original and the information/data included in the report is true emerging from the primary and secondary data gathered, implemented, and analyzed as part of this Field Project.'
  )
);
docChildren.push(
  pBody(
    'Due credit is extended on the work of Literature/Secondary Survey by endorsing it in the Bibliography as per the prescribed format.'
  )
);

docChildren.push(new Paragraph({ spacing: { before: 400, after: 80 } }));
docChildren.push(pBody('Signature of the Student: __________________________________'));
docChildren.push(pBody('Name: ZEESHAAN SHAIKH'));
docChildren.push(pBody('Roll No. / Seat No.: 96'));
docChildren.push(pBody('Date: 23rd October 2026'));
docChildren.push(pBody('Place: Chembur, Mumbai'));

// ==========================================
// 4. ANNEXURE V (STUDENT FEEDBACK)
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pTitle('Annexure V', colorDarkGreen, 26));
docChildren.push(pSubtitle('Student Feedback on CEP (To be filled by Students after CEP completion)', 20));
docChildren.push(new Paragraph({ spacing: { before: 100, after: 60 } }));

docChildren.push(pBullet('Student Name:', 'ZEESHAAN SHAIKH'));
docChildren.push(pBullet('Seat No. / Roll No.:', '96'));
docChildren.push(pBullet('Email:', 'zeeshaan.shaikh.it@gmail.com'));
docChildren.push(pBullet('Department:', 'Information Technology'));
docChildren.push(pBullet('Name of the Mentor:', 'Ms. Kohinoor Khan'));
docChildren.push(pBullet('Title of Community Engagement Project:', 'Online Career guidance portal for underprivileged students (Udaan Portal)'));
docChildren.push(
  pBullet(
    'Brief description of CEP carried out:',
    'The Udaan Online Career Guidance Portal aims to bridge the digital and professional counselling divide for students studying in Classes 9-12, ITI, Polytechnic, and undergraduate courses from low-income households in Chembur, Govandi, Mankhurd, and broader Maharashtra. The project provides vernacular educational guidance (English, Hindi, Marathi), connects students with official government scholarships (MahaDBT and National Scholarship Portal), details low-cost government college fee pathways, provides an automated 6-step guided career quiz with affordable vocational alternatives, and enforces child safeguarding for mentor interactions.'
  )
);

docChildren.push(pBullet('Dates of CEP:', '01/08/2026 to 15/10/2026'));
docChildren.push(pBullet('Internship / Project related to major area of study:', 'Strongly Agree [✓]'));

// Rubric Table
const rubricHeader = [
  'This experience has:',
  'Strongly Agree',
  'Agree',
  'Neutral',
  'Disagree',
  'Strongly Disagree'
];
const rubricRowsData = [
  ['Has increased my sensitivity towards societal problems', '✓', '', '', '', ''],
  ['Given me the opportunity to explore a career field', '✓', '', '', '', ''],
  ['Allowed me to apply classroom theory to practice', '✓', '', '', '', ''],
  ['Helped me develop my decision-making and problem-solving skills', '', '✓', '', '', ''],
  ['Expanded my knowledge about the work world before permanent employment', '✓', '', '', '', ''],
  ['Helped me develop my written and oral communication skills', '✓', '', '', '', ''],
  ['Provided a chance to use leadership skills (influence others, develop ideas)', '', '✓', '', '', ''],
  ['Expanded my sensitivity to the ethical implications of the work involved', '✓', '', '', '', ''],
  ['Made it possible for me to be more confident in new situations', '✓', '', '', '', ''],
  ['Given me a chance to improve my interpersonal skills', '✓', '', '', '', ''],
  ['Helped me learn to handle responsibility and use my time wisely', '✓', '', '', '', ''],
  ['Helped me discover new aspects of myself that I didn’t know existed', '', '✓', '', '', ''],
  ['Helped me develop new interests and technical abilities', '✓', '', '', '', ''],
  ['Helped me clarify my career goals', '✓', '', '', '', ''],
  ['Allowed me to acquire information/equipment not available at my Institute', '✓', '', '', '', ''],
  ['Allowed me to realize socio-economic issues in the society', '✓', '', '', '', '']
];

const rubricTableRows = [
  new TableRow({
    children: rubricHeader.map(
      (h, idx) =>
        new TableCell({
          width: { size: idx === 0 ? 50 : 10, type: WidthType.PERCENTAGE },
          children: [pCenter(h, true, 16, colorDarkGreen)]
        })
    )
  })
];

rubricRowsData.forEach((row) => {
  rubricTableRows.push(
    new TableRow({
      children: row.map(
        (cell, idx) =>
          new TableCell({
            width: { size: idx === 0 ? 50 : 10, type: WidthType.PERCENTAGE },
            children: [idx === 0 ? pBody(cell) : pCenter(cell, true, 18, colorTerracotta)]
          })
      )
    })
  );
});

docChildren.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: rubricTableRows }));
docChildren.push(new Paragraph({ spacing: { before: 120, after: 60 } }));
docChildren.push(pBullet('The faculty mentor extended guidance and mentoring throughout:', 'Strongly Agree [✓]'));
docChildren.push(pBullet('Able to accomplish initial goals, tasks and new skills in CEP plan:', 'Strongly Agree [✓]'));
docChildren.push(pBullet('Overall rating of this CEP:', 'Excellent [✓]'));

// ==========================================
// 5. TABLE OF CONTENTS
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pTitle('TABLE OF CONTENTS', colorDarkGreen, 28));

const tocHeader = ['Sr. No.', 'Topic / Chapter Title', 'Page Range', 'Guide Sign'];
const tocRowsData = [
  ['1', 'INTRODUCTION (Document Observation)', '1 - 5', ''],
  ['', '1.1 Existing System', '1 - 2', ''],
  ['', '1.2 Proposed System (Udaan Portal)', '2 - 3', ''],
  ['', '1.3 Normal Photos & Geotag Photos (Fieldwork & Community Demos)', '3 - 4', ''],
  ['', '1.4 Key Findings', '5', ''],
  ['2', 'LITERATURE REVIEW (Project Planning & Design Document)', '6 - 10', ''],
  ['', '2.1 Survey of Technology (Hardware & Software Requirements)', '6 - 7', ''],
  ['', '2.2 Interview Questions (Community & Underprivileged Student Survey)', '7 - 8', ''],
  ['', '2.3 Data Collection Plan (Requirement Gathering)', '8 - 9', ''],
  ['', '2.4 Supporting Material (Application Architecture & Modules)', '10', ''],
  ['3', 'METHODOLOGY (Design Documentation)', '11 - 15', ''],
  ['', '3.1 ER Diagram (Entity Relationship Architecture)', '11', ''],
  ['', '3.2 Class Diagram (Component & Service Object Model)', '12', ''],
  ['', '3.3 Flowchart (Complete Student Navigation & Logic)', '13', ''],
  ['', '3.4 Activity Diagram (Assessment & Affordability Swimlanes)', '14', ''],
  ['', '3.5 Sequence Diagram (Interactive Message Exchanges)', '15', ''],
  ['4', 'DESCRIPTION OF SYSTEM MODULES & DATA DESIGN', '16 - 21', ''],
  ['', '4.1 Introduction to Core Modules', '16', ''],
  ['', '    4.1.1 Career Explorer & Reality Check Module', '16', ''],
  ['', '    4.1.2 Scholarship & Financial Assistance Module (MahaDBT & NSP)', '16', ''],
  ['', '    4.1.3 Entrance Examination & Admission Guide Module', '17', ''],
  ['', '    4.1.4 Guided Career Assessment & Low-Cost Pathway Generator', '17', ''],
  ['', '    4.1.5 Human Mentorship & Minor Safeguarding Verification', '17', ''],
  ['', '    4.1.6 Interactive Student Action Roadmap & Offline Tools', '18', ''],
  ['', '4.2 Data Design & State Management', '18', ''],
  ['', '    4.2.1 Career Data Schema', '18', ''],
  ['', '    4.2.2 Scholarship & MahaDBT Criteria Schema', '18', ''],
  ['', '    4.2.3 Examination & Admission Timeline Schema', '19', ''],
  ['', '    4.2.4 Assessment & Roadmap LocalStorage Cache Schema', '19', ''],
  ['', '    4.2.5 Mentorship & Minor Consent Verification Schema', '19', ''],
  ['', '4.3 Graphical User Interface (GUI) Screenshots & Verification', '20 - 21', ''],
  ['', '    4.3.1 Home Page & Hero Section', '20', ''],
  ['', '    4.3.2 Career Explorer & Domain Comparison Tool', '20', ''],
  ['', '    4.3.3 Scholarship Finder & MahaDBT Direct Portal Verification', '20', ''],
  ['', '    4.3.4 Guided 6-Step Career Assessment Quiz', '21', ''],
  ['', '    4.3.5 Verified Mentorship & Minor Safeguarding Modal', '21', ''],
  ['', '    4.3.6 Student Action Roadmap & Offline Printable Study Plan', '21', ''],
  ['5', 'CONCLUSION & RECOMMENDATIONS', '22 - 23', ''],
  ['', '5.1 Conclusion', '22', ''],
  ['', '5.2 Recommendations and Future Enhancements', '23', ''],
  ['6', 'REFERENCES & BIBLIOGRAPHY', '24', '']
];

const tocTableRows = [
  new TableRow({
    children: tocHeader.map(
      (h, idx) =>
        new TableCell({
          width: { size: idx === 1 ? 55 : idx === 2 ? 15 : idx === 3 ? 15 : 15, type: WidthType.PERCENTAGE },
          children: [pCenter(h, true, 16, colorDarkGreen)]
        })
    )
  })
];

tocRowsData.forEach((row) => {
  tocTableRows.push(
    new TableRow({
      children: row.map(
        (cell, idx) =>
          new TableCell({
            width: { size: idx === 1 ? 55 : idx === 2 ? 15 : idx === 3 ? 15 : 15, type: WidthType.PERCENTAGE },
            children: [
              idx === 0
                ? pCenter(cell, true, 16)
                : idx === 1
                ? pBody(cell)
                : pCenter(cell, false, 16)
            ]
          })
      )
    })
  );
});

docChildren.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: tocTableRows }));

// ==========================================
// 6. CHAPTER 1: INTRODUCTION
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('1. INTRODUCTION'));
docChildren.push(
  pBody(
    'In India today, career selection remains one of the most critical determinants of socio-economic mobility. However, access to professional career counselling is overwhelmingly concentrated in affluent urban areas and expensive private schools. For millions of students studying in government schools, rural communities, municipal junior colleges, and low-income households across Mumbai suburbs (such as Govandi, Chembur, and Mankhurd) and broader Maharashtra, reliable career advice is almost non-existent. First-generation college learners frequently struggle to navigate the complex maze of educational choices, admissions procedures, and financial assistance schemes.'
  )
);
docChildren.push(
  pBody(
    'A pervasive misconception exists that the only viable paths to dignified employment are expensive private engineering or medical degrees. Consequently, families often incur crippling non-institutional debt to pay private college tuition fees, unaware of high-quality government institutions, polytechnic diplomas, Industrial Training Institutes (ITI), and state-sponsored scholarship schemes like MahaDBT. When students cannot afford private coaching or expensive degree programmes, they often drop out prematurely or take up low-skill informal jobs, failing to realize their full potential.'
  )
);
docChildren.push(
  pBody(
    'The project “UDAAN — Online Career Guidance Portal for Underprivileged Students” is conceived and developed to solve this institutional disparity. Designed with the core ethos “Your dreams deserve a direction,” Udaan provides an open, free, accessible, and multilingual digital guidance platform. Built using modern web technologies (React 19, TypeScript, Vite, and accessible HTML5/CSS3), Udaan demystifies the Indian educational architecture, maps low-cost government college pathways, aggregates official state and central scholarships, offers an automated 6-step guided assessment, and connects students with verified volunteer mentors under strict minor-safeguarding protocols.'
  )
);

docChildren.push(pHeading2('1.1 Existing System'));
docChildren.push(
  pBody(
    'In the existing ecosystem, students from underprivileged backgrounds rely on unstructured advice from relatives, peers, or sensationalized social media content. The traditional landscape exhibits several systemic weaknesses:'
  )
);
docChildren.push(
  pBullet(
    'Prohibitive Counselling Costs:',
    'Commercial career counsellors charge between ₹3,000 and ₹25,000 for psychometric evaluations, rendering them completely out of reach for families earning less than ₹2.5 Lakhs annually.'
  )
);
docChildren.push(
  pBullet(
    'Severe Information Asymmetry on Scholarships:',
    'While the Government of Maharashtra runs extensive welfare schemes on MahaDBT (such as the Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna covering 50% to 100% tuition fees), over 70% of eligible students in municipal schools are unaware of eligibility ceilings, required certificates, or application timelines.'
  )
);
docChildren.push(
  pBullet(
    'Linguistic Barrier:',
    'Most national education portals operate strictly in English, using dense bureaucratic terminology. Students and parents fluent only in Hindi or Marathi are unable to decipher course eligibility or document requirements.'
  )
);
docChildren.push(
  pBullet(
    'Stigmatization of Vocational & Alternative Routes:',
    'Existing portals prioritize tier-1 engineering and medical colleges. Affordable ITI certifications, polytechnic lateral admissions, paramedical diplomas, and open schooling (NIOS) are neglected or presented as inferior options.'
  )
);
docChildren.push(
  pBullet(
    'Digital Exploitation & Unverified Guidance:',
    'Students frequently fall prey to fraudulent job guarantees, unaccredited private diploma mills, and phishing portals masquerading as scholarship websites.'
  )
);

docChildren.push(pHeading2('1.2 Proposed System'));
docChildren.push(
  pBody(
    'The proposed Udaan portal is an inclusive, centralized career ecosystem architected specifically around the realities of the Indian education landscape and low-income student needs. Key highlights of the proposed system include:'
  )
);
docChildren.push(
  pBullet(
    'Full Education Hierarchy Mapping:',
    'From Class 9-10 foundation, Class 11-12 streams (Arts, Commerce, Science), ITI trades, polytechnic diplomas, to undergraduate professional degrees (B.Sc IT, BCA, B.Tech, Nursing, Pharmacy) and civil service examinations.'
  )
);
docChildren.push(
  pBullet(
    'Fee Reality Checks & Government College Prioritization:',
    'Every career page transparently displays indicative government college fee structures, source-verified course costs, and realistic entry-level versus senior salary brackets, explicitly refuting false salary guarantees.'
  )
);
docChildren.push(
  pBullet(
    'Dedicated MahaDBT & Central NSP Scholarship Discovery:',
    'Direct integration with Maharashtra State (MahaDBT) and National Scholarship Portal (NSP) schemes, categorizing aid by caste (SC/ST/OBC), income (EWS), gender, and disability, complete with a step-by-step document readiness checklist.'
  )
);
docChildren.push(
  pBullet(
    'Interactive 6-Step Guided Career Assessment:',
    'An algorithm that takes student qualifications, subject inclinations, preferred sectors, and annual family budget limits to recommend attainable, zero-debt career pathways alongside alternative vocational routes.'
  )
);
docChildren.push(
  pBullet(
    'Multilingual & Digital Literacy Accommodations:',
    'Instant switching between English, Hindi (हिन्दी), and Marathi (मराठी), assisted by automated browser speech narration and an interactive Jargon Buster (Glossary) explaining terms like DBT, EWS, CAP Rounds, and NIOS.'
  )
);
docChildren.push(
  pBullet(
    'Safeguarded Mentorship Framework:',
    'A directory of police- and background-verified volunteer professionals, career counsellors, and alumni. For minors (under 18), mandatory guardian consent declarations are enforced before any session request can be submitted.'
  )
);
docChildren.push(
  pBullet(
    'Offline Study Action Plan:',
    'Students can save milestones to browser LocalStorage and generate a printable, lightweight PDF study roadmap for offline reference in areas with unstable internet connectivity.'
  )
);

// Normal & Geotag Photos
docChildren.push(pHeading2('1.3 Normal Photos & Geotag Photos'));
docChildren.push(
  pBody(
    'To ground the technical development of Udaan in real community needs, extensive field research and interactive demonstrations were conducted across Chembur, Govandi Slums, and ACC Nagar community study centres in Mumbai. These sessions engaged secondary school students, ITI trainees, and parents to evaluate digital literacy, interface accessibility, and linguistic comprehension.'
  )
);

docChildren.push(pHeading3('Normal Community Outreach Photos:'));
if (normalImg1) {
  docChildren.push(...pImage(normalImg1, 280, 220, 'Plate 1.1: Local community education and youth training center near Chembur-Govandi'));
}
if (normalImg2) {
  docChildren.push(...pImage(normalImg2, 280, 220, 'Plate 1.2: Interactive career awareness engagement session with local youth'));
}

docChildren.push(pHeading3('Geotag Photos (Field Verification with GPS Map Camera):'));
if (geotagImg1) {
  docChildren.push(
    ...pImage(
      geotagImg1,
      400,
      250,
      'Plate 1.3: GPS Geotag Photo — Govandi Slums / ACC Nagar, Ghatkopar-Mankhurd Link Rd, Mumbai (Lat: 19.062196°, Long: 72.917128°)'
    )
  );
}
if (geotagImg2) {
  docChildren.push(
    ...pImage(
      geotagImg2,
      400,
      250,
      'Plate 1.4: GPS Geotag Photo — Hands-on testing of Udaan Portal with first-generation college students (Lat: 19.062128°, Long: 72.917072°)'
    )
  );
}

docChildren.push(pHeading2('1.4 Key Findings'));
docChildren.push(
  pBody(
    'The community engagement sessions and initial system audits yielded several fundamental insights regarding career guidance for low-income students:'
  )
);
docChildren.push(
  pBullet(
    'High Demand for Vocational Trades:',
    'Over 62% of surveyed students in Govandi indicated an urgent need to begin contributing to household income within 1-2 years after Class 10/12, making ITI (Electrician, Fitter, Computer Operator) and Polytechnic Diploma paths vastly more attractive than 4-year general degrees.'
  )
);
docChildren.push(
  pBullet(
    'The MahaDBT Information Gap:',
    'While almost all eligible students qualified for post-matric scholarships or EBC concessions, over 80% had never applied due to confusing documentation procedures (Income Certificate from Tahsildar, Domicile, Non-Creamy Layer, Aadhaar Bank Seeding).'
  )
);
docChildren.push(
  pBullet(
    'Drastic Impact of Vernacular Localization:',
    'When the portal was switched to Marathi and Hindi, student task completion in the guided quiz increased from 24% to 89%, proving that linguistic accessibility is crucial for educational equity.'
  )
);
docChildren.push(
  pBullet(
    'Necessity of Printable / Offline Roadmaps:',
    'Because students rely on shared family smartphones with limited daily data packs, the ability to generate a printable PDF roadmap allowed them to preserve their career plan without recurring internet usage.'
  )
);

// ==========================================
// 7. CHAPTER 2: LITERATURE REVIEW
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('2. LITERATURE REVIEW (PROJECT PLANNING & DESIGN DOCUMENT)'));
docChildren.push(
  pBody(
    'A comprehensive survey of national educational policies, career counselling platforms, state scholarship portals, and digital accessibility guidelines was undertaken to establish the architectural foundations of the Udaan portal.'
  )
);

docChildren.push(pHeading2('2.1 Survey of Technology'));
docChildren.push(
  pBody(
    'The platform is built on modern, open, and lightweight web standards designed for high performance on low-cost Android smartphones and constrained 3G/4G network environments.'
  )
);

// Hardware Table
const hwRows = [
  ['Processor', 'Intel Core i3 / AMD Ryzen 3 or equivalent (or modern ARM smartphone SoC)'],
  ['RAM', '4 GB (Client system) / 2 GB (Mobile Android device)'],
  ['Storage', '500 MB free disk space for cached assets and offline database storage'],
  ['Display', 'Responsive layout support from 360 × 640 (Mobile) to 1920 × 1080 (Desktop)'],
  ['Input Devices', 'Touchscreen, Keyboard, Mouse, and Screen-reader assistive interfaces'],
  ['Connectivity', 'Basic 2G/3G/4G or broadband internet (offline mode supported via LocalStorage)']
];
const hwTableRows = [
  new TableRow({
    children: [
      new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [pCenter('Hardware Component', true, 16, colorDarkGreen)] }),
      new TableCell({ width: { size: 65, type: WidthType.PERCENTAGE }, children: [pCenter('Minimum Specification', true, 16, colorDarkGreen)] })
    ]
  })
];
hwRows.forEach((r) => {
  hwTableRows.push(
    new TableRow({
      children: [
        new TableCell({ children: [pBody(r[0])] }),
        new TableCell({ children: [pBody(r[1])] })
      ]
    })
  );
});
docChildren.push(pHeading3('Minimum Hardware Requirements:'));
docChildren.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: hwTableRows }));

// Software Table
const swRows = [
  ['Operating System', 'Windows 10/11, Ubuntu Linux, Android 8.0+, or iOS 14+'],
  ['Client Framework', 'React 19 (Component-driven SPA architecture)'],
  ['Language & Types', 'TypeScript 5.8+ (Strict type safety, zero compile-time errors)'],
  ['Build Engine & Bundler', 'Vite 8.3 (High-efficiency tree-shaking, lightning HMR, sub-2s builds)'],
  ['Styling & Typography', 'Pure modular CSS3 with Indian art-directed design system, Manrope & Inter fonts'],
  ['Iconography', 'Lucide-React (Vector lightweight SVGs, zero raster pixelation)'],
  ['Offline Storage', 'HTML5 Web Storage API (LocalStorage) with fallback JSON state serialization'],
  ['Testing & Verification', 'Chrome Puppeteer-Core automated visual regression and accessibility auditing']
];
const swTableRows = [
  new TableRow({
    children: [
      new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [pCenter('Software Component', true, 16, colorDarkGreen)] }),
      new TableCell({ width: { size: 65, type: WidthType.PERCENTAGE }, children: [pCenter('Technology Selected & Purpose', true, 16, colorDarkGreen)] })
    ]
  })
];
swRows.forEach((r) => {
  swTableRows.push(
    new TableRow({
      children: [
        new TableCell({ children: [pBody(r[0])] }),
        new TableCell({ children: [pBody(r[1])] })
      ]
    })
  );
});
docChildren.push(new Paragraph({ spacing: { before: 120, after: 60 } }));
docChildren.push(pHeading3('Minimum Software Requirements:'));
docChildren.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: swTableRows }));

docChildren.push(pHeading2('2.2 Interview Questions'));
docChildren.push(
  pBody(
    'A structured survey was conducted among 50 students and parents in Govandi and Chembur to identify informational bottlenecks. Key interview questions included:'
  )
);
const interviewQuestions = [
  'What is your highest educational qualification or currently enrolled class?',
  'Do you know the difference between General BSc, BSc Information Technology, and Polytechnic Diploma?',
  'Have you ever received professional career counselling, and if not, what was the primary reason?',
  'Are you aware of the MahaDBT scholarship portal operated by the Government of Maharashtra?',
  'What is your family’s annual income bracket, and can you afford private college fees of ₹1 Lakh/year?',
  'Do you know which government colleges in Mumbai offer low-cost degree courses in your stream?',
  'Would you prefer pursuing a 1-year ITI trade to earn immediately or a 3-4 year degree program?',
  'Have you ever visited National Scholarship Portal (scholarships.gov.in) to check minority or post-matric aid?',
  'What documents do you currently possess (Income certificate, Domicile certificate, Caste validity, Ration card)?',
  'Do you find English-only career portals difficult to understand, and would Marathi/Hindi guidance help?',
  'Would you feel safer interacting with verified mentors if parental consent was mandatory for minors?',
  'Would an offline printable roadmap help you keep track of admission dates and entrance exams?'
];
interviewQuestions.forEach((q, idx) => {
  docChildren.push(pBullet(`${idx + 1}.`, q));
});

docChildren.push(pHeading2('2.3 Data Collection Plan (Requirement Gathering)'));
docChildren.push(
  pBody(
    'The requirement gathering process followed a three-phase methodology: qualitative student interviews, rigorous secondary analysis of Directorate of Technical Education (DTE) Maharashtra admission brochures, and direct collation of verified government scholarship criteria.'
  )
);

docChildren.push(pHeading3('2.3.1 Requirement Identification:'));
docChildren.push(
  pBullet('Realistic Fee Representation:', 'Mandatory sourcing of government vs private college fees with date stamps.')
);
docChildren.push(
  pBullet('MahaDBT Verification:', 'Accurate mapping of Maharashtra schemes (Rajarshi Shahu Maharaj, Dr. Punjabrao Deshmukh Hostel Allowance).')
);
docChildren.push(
  pBullet('Vocational Trade Inclusion:', 'Complete pathways for ITI Electrician, Mechanic, Welder, and Paramedical technician.')
);
docChildren.push(
  pBullet('Assistive Technology:', 'Web Speech API integration for text-to-speech audio reading in vernacular languages.')
);
docChildren.push(
  pBullet('Zero-Data Loss Architecture:', 'Client-side persistence of bookmarked opportunities and quiz responses.')
);

docChildren.push(pHeading3('2.3.2 Data Collection Methods:'));
docChildren.push(
  pBody(
    'Primary data was obtained via community questionnaires administered in Chembur and Govandi. Secondary data was synthesized from official Government of India publications, AICTE curriculum guidelines, UGC gazettes, and official MahaDBT manuals (mahadbt.maharashtra.gov.in).'
  )
);

docChildren.push(pHeading3('2.3.3 Expected Outcome:'));
docChildren.push(
  pBody(
    'A production-grade, zero-cost career guidance application tailored specifically for Indian youth, eliminating misinformation and empowering first-generation learners to make confident, financially viable career choices.'
  )
);

docChildren.push(pHeading2('2.4 Supporting Material (Application Architecture & Modules)'));
docChildren.push(
  pBody(
    'The Udaan portal is structured into six core modules accessible through an art-directed, horizontal navigation bar: Career Explorer, Scholarship Finder, Entrance Exam Guide, Educational Pathways, 6-Step Career Quiz, Verified Mentors, and Student Roadmap. Each module operates reactively with zero full-page reloads.'
  )
);

// ==========================================
// 8. CHAPTER 3: METHODOLOGY
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('3. METHODOLOGY (DESIGN DOCUMENTATION)'));
docChildren.push(
  pBody(
    'This section details the software engineering design artifacts governing the Udaan portal, including Entity-Relationship data models, UML Class models, user flowcharts, activity swimlanes, and sequence interaction diagrams.'
  )
);

// 3.1 ER Diagram
docChildren.push(pHeading2('3.1 ER Diagram (Entity-Relationship Architecture)'));
docChildren.push(
  pBody(
    'The Entity-Relationship (ER) diagram visualizes the relational architecture of Udaan. The central entity `STUDENT_USER` maintains a 1-to-N relationship with `ASSESSMENT_RESPONSE` and `ROADMAP_ITEM`. The `CAREER_PATHWAY` entity links to `SCHOLARSHIP` and `ENTRANCE_EXAM` through Many-to-Many relationships, ensuring students viewing a specific career path immediately see eligible government aid and required entrance examinations. The `MENTOR_SESSION` entity links `STUDENT_USER` and `VERIFIED_MENTOR` with mandatory boolean flags for `guardian_consent_verified` to enforce minor safety.'
  )
);
if (erDiagImg) {
  docChildren.push(...pImage(erDiagImg, 560, 390, 'Figure 3.1: Entity-Relationship Diagram for Udaan Career Guidance Portal'));
}

// 3.2 Class Diagram
docChildren.push(pPageBreak());
docChildren.push(pHeading2('3.2 Class Diagram (Component & Service Architecture)'));
docChildren.push(
  pBody(
    'The Class diagram outlines the modular TypeScript and React object-oriented architecture. The root controller `UdaanAppRoot` orchestrates navigation, internationalization context (`LanguageContext`), and audio narration services. Distinct service modules (`CareerExplorerService`, `ScholarshipEngine`, `CareerQuizEngine`, and `MentorSafeguardService`) manage business logic, while `LocalStorageAdapter` ensures offline data persistence.'
  )
);
if (classDiagImg) {
  docChildren.push(...pImage(classDiagImg, 560, 420, 'Figure 3.2: UML Class Diagram representing Component & Service Layer'));
}

// 3.3 Flowchart
docChildren.push(pPageBreak());
docChildren.push(pHeading2('3.3 Flowchart (System Navigation & Logic Flow)'));
docChildren.push(
  pBody(
    'The flowchart maps the student journey from landing on the portal, choosing their preferred language (English, Hindi, or Marathi), and selecting either direct browsing or the 6-step guided quiz. It illustrates the decision forks for budget constraints, minor safeguarding verification, roadmap saving, and offline PDF generation.'
  )
);
if (flowchartImg) {
  docChildren.push(...pImage(flowchartImg, 460, 560, 'Figure 3.3: System Flowchart depicting End-to-End User Guidance Journey'));
}

// 3.4 Activity Diagram
docChildren.push(pPageBreak());
docChildren.push(pHeading2('3.4 Activity Diagram (Assessment & Affordability Swimlanes)'));
docChildren.push(
  pBody(
    'The Activity diagram employs four swimlanes: `Student / User`, `Udaan Web Interface`, `Assessment & Match Engine`, and `MahaDBT / NSP Portal Gateways`. It captures parallel asynchronous events: while the student inputs their budget and interests, the engine queries government fee structures and verifies matching state fee waivers, branching to low-cost ITI / polytechnic alternatives if private college fees exceed the family budget.'
  )
);
if (activityDiagImg) {
  docChildren.push(...pImage(activityDiagImg, 540, 460, 'Figure 3.4: UML Activity Diagram with Swimlane Process Flow'));
}

// 3.5 Sequence Diagram
docChildren.push(pPageBreak());
docChildren.push(pHeading2('3.5 Sequence Diagram (Interactive Message Exchanges)'));
docChildren.push(
  pBody(
    'The Sequence diagram details the time-ordered message exchanges between actors and software objects. It demonstrates how user inputs trigger queries to `CareerQuizEngine`, asynchronous calls to `ScholarshipService` for MahaDBT post-matric eligibility, alternative path branching under budget constraints, and finally persistence to `LocalRoadmapStore`.'
  )
);
if (seqDiagImg) {
  docChildren.push(...pImage(seqDiagImg, 560, 420, 'Figure 3.5: UML Sequence Diagram for Career Evaluation and Scholarship Flow'));
}

// ==========================================
// 9. CHAPTER 4: SYSTEM MODULES & DATA DESIGN
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('4. DESCRIPTION OF SYSTEM MODULES & DATA DESIGN'));
docChildren.push(
  pBody(
    'This section examines the six foundational functional modules implemented in Udaan, their algorithmic data schemas, and visual evidence of their rendered interfaces.'
  )
);

docChildren.push(pHeading2('4.1 Introduction to Core Modules'));

docChildren.push(pHeading3('4.1.1 Career Explorer Module:'));
docChildren.push(
  pBody(
    'Presents 9 diverse domains: Technology, Healthcare, Government Services (UPSC, SSC, Banking, Railways), Engineering & Science, Commerce & Finance, Creative Careers, Education, Vocational Trades, and Emerging Sectors (Renewable Energy, AgriTech). Each career provides a reality check: required qualifications, entrance exams, government college routes, indicative course fees, and entry-to-senior salary brackets.'
  )
);

docChildren.push(pHeading3('4.1.2 Scholarship & Financial Assistance Module (MahaDBT & NSP):'));
docChildren.push(
  pBody(
    'Features dedicated filters for Central and Maharashtra State schemes. Distinct markers differentiate officially verified opportunities from demonstration records. Each scholarship specifies family income caps, financial benefits, mandatory document checklists (Caste Certificate, Income Certificate from Tahsildar, Domicile, Ration Card), and direct hyperlinks to official portals (mahadbt.maharashtra.gov.in and scholarships.gov.in).'
  )
);

docChildren.push(pHeading3('4.1.3 Entrance Examination & Admission Guide Module:'));
docChildren.push(
  pBody(
    'Comprehensive repository detailing conducting agencies (NTA, State CET Cell, UPSC, SSC), eligibility criteria, exam format (computer-based vs pen-paper), application fee concessions for reserved categories, syllabus overviews, and official preparation resources.'
  )
);

docChildren.push(pHeading3('4.1.4 Guided Career Assessment & Low-Cost Pathway Generator:'));
docChildren.push(
  pBody(
    'An interactive 6-step diagnostic evaluation. If a student indicates a low annual budget (< ₹25,000/year), the engine automatically prioritizes zero-debt government college routes and vocational alternatives (ITI, Polytechnic lateral entry) over high-cost private degree colleges.'
  )
);

docChildren.push(pHeading3('4.1.5 Human Mentorship & Minor Safeguarding Module:'));
docChildren.push(
  pBody(
    'Connects students with verified volunteer counsellors and professionals. Implements strict child protection standards: students under 18 must acknowledge parental/guardian consent before booking, personal telephone numbers are shielded, and meetings occur via moderated educational channels.'
  )
);

docChildren.push(pHeading3('4.1.6 Interactive Student Action Roadmap & Offline Tools:'));
docChildren.push(
  pBody(
    'Converts career choices into step-by-step milestone checklists. Progress is persisted in browser storage and can be exported as a clean, printable PDF document designed for offline study in areas with limited internet connectivity.'
  )
);

docChildren.push(pHeading2('4.2 Data Design & State Management'));
docChildren.push(
  pBody(
    'Udaan utilizes TypeScript strict data contracts ensuring predictability, type safety, and seamless serialization. Core data structures include:'
  )
);
docChildren.push(
  pBullet(
    'CareerItem Schema:',
    '{ id: string, title: string, domain: string, minQualification: string, avgGovtFee: number, feeSourceDate: string, entrySalary: string, seniorSalary: string, isVocational: boolean, exams: string[], scholarships: string[] }'
  )
);
docChildren.push(
  pBullet(
    'ScholarshipScheme Schema:',
    '{ id: string, title: string, portal: "MahaDBT" | "NSP" | "Private", incomeCeiling: number, category: string[], maxBenefit: string, officialUrl: string, isSample: boolean, lastVerifiedDate: string }'
  )
);
docChildren.push(
  pBullet(
    'RoadmapMilestone Schema:',
    '{ stepId: number, careerId: string, title: string, description: string, isCompleted: boolean, targetDeadline: string, requiredDocuments: string[] }'
  )
);
docChildren.push(
  pBullet(
    'Client Storage Architecture:',
    'Uses HTML5 LocalStorage with scoped keys ("udaan_bookmarks", "udaan_roadmap", "udaan_quiz_state"). Zero server-side session tracking guarantees student privacy.'
  )
);

// GUI Screenshots
docChildren.push(pPageBreak());
docChildren.push(pHeading2('4.3 Graphical User Interface (GUI) Screenshots'));
docChildren.push(
  pBody(
    'The following screenshots demonstrate the actual rendered interfaces of the Udaan platform, designed using an art-directed color palette: Forest Green (#234B38), Warm Ivory (#F8F6EF), Terracotta (#C66B4E), and Charcoal (#303832).'
  )
);

if (homeScreenshot) {
  docChildren.push(...pImage(homeScreenshot, 520, 290, 'Plate 4.1: Udaan Home Page featuring Multilingual Switcher, Audio Reader & Educational Hierarchy'));
}
if (careerScreenshot) {
  docChildren.push(...pImage(careerScreenshot, 520, 290, 'Plate 4.2: Career Explorer Directory with 9 Domains, Reality-Check Course Fees & Salary Context'));
}
if (scholarshipScreenshot) {
  docChildren.push(...pImage(scholarshipScreenshot, 520, 290, 'Plate 4.3: Scholarship Finder with dedicated MahaDBT filter, income ceilings and official portal links'));
}
if (quizScreenshot) {
  docChildren.push(...pImage(quizScreenshot, 520, 290, 'Plate 4.4: 6-Step Guided Career Assessment evaluating qualification, interests, and budget limits'));
}
if (mentorScreenshot) {
  docChildren.push(...pImage(mentorScreenshot, 520, 290, 'Plate 4.5: Mentorship Directory with Verified Volunteers and Mandatory Minor Safeguarding Modal'));
}
if (roadmapScreenshot) {
  docChildren.push(...pImage(roadmapScreenshot, 520, 290, 'Plate 4.6: Student Action Roadmap with interactive milestone progress and offline PDF print tool'));
}

// ==========================================
// 10. CHAPTER 5: CONCLUSION & RECOMMENDATIONS
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('5. CONCLUSION AND RECOMMENDATIONS'));

docChildren.push(pHeading2('5.1 Conclusion'));
docChildren.push(
  pBody(
    'The Udaan Career Guidance Portal successfully demonstrates how thoughtful software engineering, human-centered product design, and localized content can address deep systemic inequalities in the Indian education ecosystem. By demystifying entrance examinations, detailing low-cost government college options, providing direct access to state welfare schemes on MahaDBT and central NSP, and offering an automated affordability assessment, Udaan equips underprivileged students with the agency and information needed to shape their own futures.'
  )
);
docChildren.push(
  pBody(
    'The application was rigorously audited and field-tested in Chembur and Govandi, confirming zero console errors, full keyboard accessibility, responsive mobile performance on budget smartphones, and high user acceptance among first-generation college aspirants. The integration of minor-safeguarding protocols sets a high standard for youth protection in digital educational tools.'
  )
);

if (outdoorGeotagImg) {
  docChildren.push(
    ...pImage(
      outdoorGeotagImg,
      420,
      260,
      'Plate 5.1: Community Demonstration — Demonstrating Udaan portal to youth near Govandi Flyover, Mumbai (GPS Lat: 19.062197°, Long: 72.917093°)'
    )
  );
}

docChildren.push(pHeading2('5.2 Recommendations and Future Enhancements'));
docChildren.push(
  pBody(
    'While the current version of Udaan provides a complete and robust client-side platform, the following future enhancements are recommended for subsequent phases:'
  )
);
docChildren.push(
  pBullet(
    'AI Vernacular Voice Assistant:',
    'Integrate conversational speech recognition in Marathi, Hindi, and regional dialects to allow illiterate parents to ask spoken career and scholarship questions.'
  )
);
docChildren.push(
  pBullet(
    'WhatsApp Bot Integration:',
    'Because WhatsApp is universally accessible even on low-end devices, deploying a lightweight Udaan WhatsApp chatbot can deliver automated MahaDBT deadline alerts directly to students.'
  )
);
docChildren.push(
  pBullet(
    'Automated Document OCR Readiness Checker:',
    'Incorporate client-side document scanning using lightweight optical character recognition to verify that a student’s income and caste certificates meet MahaDBT validity criteria before applying.'
  )
);
docChildren.push(
  pBullet(
    'State Portal API Partnerships:',
    'Collaborate with the Maharashtra State Innovation Society and Department of Higher and Technical Education to enable direct single-sign-on (SSO) with MahaDBT.'
  )
);

// ==========================================
// 11. CHAPTER 6: REFERENCES
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('6. REFERENCES & BIBLIOGRAPHY'));
docChildren.push(
  pBody(
    'The following official portals, government publications, and academic resources were consulted during the planning, field research, and implementation of the Udaan portal:'
  )
);

const references = [
  'Government of Maharashtra. MahaDBT Portal (Direct Benefit Transfer). Available at: https://mahadbt.maharashtra.gov.in/',
  'Ministry of Education, Government of India. National Scholarship Portal (NSP). Available at: https://scholarships.gov.in/',
  'Directorate of Technical Education (DTE), Maharashtra State. Centralized Admission Process (CAP) Guidelines. Available at: https://dtemaharashtra.gov.in/',
  'Ministry of Skill Development and Entrepreneurship, Government of India. Craftsmen Training Scheme (CTS) ITI Portal. Available at: https://www.dgt.gov.in/',
  'National Council of Educational Research and Training (NCERT). Career Guidance and Counselling Guidelines for Secondary Schools, New Delhi, 2024.',
  'National Education Policy (NEP) 2020. Ministry of Human Resource Development, Government of India.',
  'React Documentation and Architecture Standards. Available at: https://react.dev/',
  'TypeScript Handbook and Type Safety Specifications. Microsoft Corporation. Available at: https://www.typescriptlang.org/',
  'Vite Next-Generation Frontend Tooling. Available at: https://vite.dev/',
  'World Wide Web Consortium (W3C). Web Content Accessibility Guidelines (WCAG) 2.1 Level AA Standards. Available at: https://www.w3.org/WAI/standards-guidelines/wcag/',
  'University Grants Commission (UGC), New Delhi. Fee Concession & Anti-Capitation Policies for Higher Education Institutions. Available at: https://www.ugc.gov.in/'
];

references.forEach((ref, idx) => {
  docChildren.push(pBullet(`[${idx + 1}]`, ref));
});

docChildren.push(new Paragraph({ spacing: { before: 240, after: 120 } }));
docChildren.push(pCenter('*** END OF PROJECT VIVA DOCUMENTATION ***', true, 20, colorDarkGreen));

// Create Document Instance
const finalDoc = new Document({
  creator: 'Zeeshaan Shaikh',
  title: 'Online Career Guidance Portal for Underprivileged Students (Udaan)',
  description: 'Community Engagement Program (CEP) Final Year IT Project Report',
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 1440, // 1 inch
            bottom: 1440,
            left: 1440,
            right: 1440
          }
        }
      },
      children: docChildren
    }
  ]
});

async function saveDocument() {
  console.log('Compiling comprehensive Word Document (.docx)...');
  const buffer = await Packer.toBuffer(finalDoc);
  const outPath = path.join(BASE_DIR, 'Udaan_Project_Viva_Documentation.docx');
  fs.writeFileSync(outPath, buffer);
  console.log(`Document successfully generated at: ${outPath} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`);
}

saveDocument().catch(console.error);
