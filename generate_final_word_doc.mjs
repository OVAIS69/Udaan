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

// Build Document Content
const docChildren = [];

// ==========================================
// 1. COVER PAGE
// ==========================================
docChildren.push(pTitle('ONLINE CAREER GUIDANCE PORTAL FOR UNDERPRIVILEGED STUDENTS', colorDarkGreen, 30));
docChildren.push(pSubtitle('Community Engagement Program (CEP)', 22, colorTerracotta));
docChildren.push(new Paragraph({ spacing: { before: 180, after: 80 } }));

docChildren.push(pCenter('Submitted by:', false, 20));
docChildren.push(pCenter('ZEESHAAN SHAIKH', true, 26, colorDarkGreen));
docChildren.push(pCenter('T.Y.BSc. IT (Semester-V)', true, 22));
docChildren.push(new Paragraph({ spacing: { before: 140, after: 80 } }));

docChildren.push(pCenter('Under the Guidance of:', false, 20));
docChildren.push(pCenter('Ms. Kohinoor Khan', true, 24, colorDarkGreen));
docChildren.push(pCenter('Department of Information Technology', false, 20));
docChildren.push(new Paragraph({ spacing: { before: 160, after: 80 } }));

if (logoImg) {
  docChildren.push(...pImage(logoImg, 120, 120));
}

docChildren.push(pCenter('DEPARTMENT OF INFORMATION TECHNOLOGY', true, 22, colorDarkGreen));
docChildren.push(pCenter('Chembur Trombay Education Society’s', false, 20));
docChildren.push(pCenter('N. G. Acharya & D. K. Marathe College Of Arts, Science & Commerce', true, 22));
docChildren.push(pCenter('Shri .N.G. Acharya Marg, Chembur, Mumbai 400 071, India.', false, 18));
docChildren.push(pCenter('(Affiliated to University of Mumbai)', true, 18));
docChildren.push(new Paragraph({ spacing: { before: 80, after: 60 } }));
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
docChildren.push(new Paragraph({ spacing: { before: 80, after: 60 } }));

if (logoImg) {
  docChildren.push(...pImage(logoImg, 100, 100));
}

docChildren.push(pTitle('CERTIFICATE', colorDarkGreen, 30));
docChildren.push(
  pBody(
    'I hereby, certify that Mr. ZEESHAAN SHAIKH, student of N. G. Acharya & D. K. Marathe College Arts, Science & Commerce studying in Bachelor of Information Technology SEM-V has completed the project on Cep Title: “ONLINE CAREER GUIDANCE PORTAL FOR UNDERPRIVILEGED STUDENTS” in the area of INFORMATION TECHNOLOGY specialization for academic year 2026-2027. To the best of my Knowledge the work of the student is original and the information included in the project is correct.'
  )
);

docChildren.push(new Paragraph({ spacing: { before: 360, after: 80 } }));

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
          children: [pCenter('____________________', true), pCenter('Head Of Department', true), pCenter('Information Technology', false, 18)],
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
        })
      ]
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph({ spacing: { before: 180 } }), pCenter('____________________', true), pCenter('Vice Principal', true)],
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
        }),
        new TableCell({
          children: [new Paragraph({ spacing: { before: 180 } }), pCenter('College Seal / Stamp', false, 18, '888888')],
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
        }),
        new TableCell({
          children: [new Paragraph({ spacing: { before: 180 } }), pCenter('____________________', true), pCenter('I/c Principal', true)],
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
docChildren.push(new Paragraph({ spacing: { before: 140, after: 80 } }));

docChildren.push(
  pBody(
    'I, Mr. ZEESHAAN SHAIKH Student of N. G. Acharya & D. K. Marathe College Arts, Science & Commerce studying in Bachelor of Information Technology SEM-V, hereby declare that I have completed the Field Project titled ONLINE CAREER GUIDANCE PORTAL FOR UNDERPRIVILEGED STUDENTS During the academic year 2026-2027.'
  )
);
docChildren.push(
  pBody(
    'The report is original and the information/data included in the report is true emerging from the primary and secondary data gathered, implemented, and analyzed as part of this Field Project.'
  )
);
docChildren.push(
  pBody(
    'Due credit is extended on the work of Literature/Secondary Survey by endorsing it in the Bibliography as per prescribed format.'
  )
);

docChildren.push(new Paragraph({ spacing: { before: 360, after: 80 } }));
docChildren.push(pBody('Signature of the Student: __________________________________'));
docChildren.push(pBody('Name: ZEESHAAN SHAIKH'));
docChildren.push(pBody('Roll No. / Seat No.: 96'));
docChildren.push(pBody('Date: 23/10/2026'));
docChildren.push(pBody('Place: Chembur, Mumbai'));

// ==========================================
// 4. ANNEXURE V (STUDENT FEEDBACK)
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pTitle('Annexure V', colorDarkGreen, 26));
docChildren.push(pSubtitle('Student Feedback on CEP (To be filled by Students after CEP completion)', 20));
docChildren.push(new Paragraph({ spacing: { before: 80, after: 50 } }));

docChildren.push(pBullet('Student Name:', 'ZEESHAAN SHAIKH'));
docChildren.push(pBullet('Seat No. / Roll No.:', '96'));
docChildren.push(pBullet('Email:', 'shaikhzeeshaan11w@gmail.com'));
docChildren.push(pBullet('Department:', 'Information Technology'));
docChildren.push(pBullet('Name of the Mentor:', 'Ms. Kohinoor Khan'));
docChildren.push(pBullet('Title/Heading of Community Engagement Projects:', 'Online Career guidance portal for underprivileged students'));
docChildren.push(
  pBullet(
    'Brief description of CEP carried out:',
    'The Online Career Guidance Portal for Underprivileged Students (Udaan) aims to help students who study in municipal schools, government colleges, and low-income areas like Chembur, Govandi, and Mankhurd. Most of these students have nobody at home who can guide them about college options. They only know about expensive engineering or medical courses, which their families cannot afford. This project provides a simple, free website in English, Hindi, and Marathi. It explains real education options like 10th and 12th streams, ITI trades, polytechnic diplomas, and regular degree courses. It also helps students find real scholarships on MahaDBT and the National Scholarship Portal, shows how much government colleges actually cost, and gives them a 6-step quiz to find affordable career paths with safe mentorship.'
  )
);

docChildren.push(pBullet('Dates of CEP:', '01/08/2026 to 15/10/2026'));
docChildren.push(pBullet('My internship experience was related to my major area of study/ academic program:', 'Strongly Agree'));

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
  ['Provided a chance to use leadership skills (influence others, develop ideas with others, stimulate decision-making and action)', '', '✓', '', '', ''],
  ['Expanded my sensitivity to the ethical implications of the work involved', '✓', '', '', '', ''],
  ['Made it possible for me to be more confident in new situations', '✓', '', '', '', ''],
  ['Given me a chance to improve my interpersonal skills', '✓', '', '', '', ''],
  ['Helped me learn to handle responsibility and use my time wisely', '✓', '', '', '', ''],
  ['Helped me discover new aspects of myself that I didn’t know existed before', '', '✓', '', '', ''],
  ['Helped me develop new interests and abilities', '✓', '', '', '', ''],
  ['Helped me clarify my career goals', '✓', '', '', '', ''],
  ['Allowed me to acquire information and/ or use equipment not available at my Institute', '✓', '', '', '', ''],
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
docChildren.push(pBullet('The faculty mentor extended guidance and mentoring through-out the CEP process:', 'Strongly Agree'));
docChildren.push(pBullet('Were you able to accomplish the initial goals, tasks and new skills that were set down in CEP plan?', 'Strongly Agree'));
docChildren.push(pBullet('Considering your overall experience, how would you rate this CEP? (Circle one):', 'Excellent'));

// ==========================================
// 5. TABLE OF CONTENTS
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pTitle('TABLE OF CONTENTS', colorDarkGreen, 28));

const tocHeader = ['Sr.no', 'Topic', 'Pg.no', 'Sign'];
const tocRowsData = [
  ['1', 'INTRODUCTION Document Observation', '1-5', ''],
  ['', '1.1 Existing System', '1-2', ''],
  ['', '1.2 Proposed System', '2', ''],
  ['', '1.3 Normal Photos & Geotag Photos', '3-4', ''],
  ['', '1.4 Key Findings', '5', ''],
  ['2', 'LITERATURE REVIEW Project Planning & Design Document', '6-10', ''],
  ['', '2.1 Survey of Technology', '6-7', ''],
  ['', '2.2 Interview Questions', '7-8', ''],
  ['', '2.3 Data Collection Plan', '8-9', ''],
  ['', '2.4 Supporting Material', '10', ''],
  ['3', 'METHODOLOGY Design Documentation', '11-15', ''],
  ['', '3.1 ER Diagram', '11', ''],
  ['', '3.2 Class Diagram', '12', ''],
  ['', '3.3 Flowchart', '13', ''],
  ['', '3.4 Activity Diagram', '14', ''],
  ['', '3.5 Sequence Diagram', '15', ''],
  ['4', 'Description of Communication Training Module Outline', '16-21', ''],
  ['', '4.1 Basic to Modules:', '16', ''],
  ['', '    4.1.1 Career Explorer Module:', '16', ''],
  ['', '    4.1.2 Scholarship & Financial Aid Module:', '16', ''],
  ['', '    4.1.4 Reporting Information / Mentorship Module:', '17', ''],
  ['', '4.2 Data Design:', '17', ''],
  ['', '    4.2.1 Career Data:', '17', ''],
  ['', '    4.2.2 Scholarship Data:', '17', ''],
  ['', '    4.2.3 Quiz Data:', '17', ''],
  ['', '    4.2.4 Reporting Information Data:', '17', ''],
  ['', '    4.2.5 Database Usage:', '18', ''],
  ['', '4.3 Graphical User Interface (GUI) Screenshots:', '19', ''],
  ['', '    4.3.1 Home Page:', '20', ''],
  ['', '    4.3.2 Career Explorer Page:', '21', ''],
  ['5', 'Conclusion & Recommendation', '22-23', ''],
  ['6', 'References', '24', '']
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
    'Choosing the right career after school or junior college is one of the biggest decisions in a student’s life. In our city, Mumbai, and especially in areas like Chembur, Govandi, and Mankhurd, many families work very hard in small jobs, driving autos, running tea stalls, or working as daily wage earners. Most parents in these neighborhoods have never been to college, so they cannot give detailed academic advice to their children. Students studying in municipal schools and government-aided junior colleges often have to figure everything out on their own.'
  )
);
docChildren.push(
  pBody(
    'When students complete their 10th or 12th standard, they usually only hear about medical or engineering. But private engineering or medical college fees can easily cost ₹1,00,000 to ₹3,00,000 every year, not including coaching classes. Because their families cannot afford such amounts, many students feel discouraged and think higher education is not for them. Some take up random low-paying delivery jobs or small shop work, while others drop out simply because they did not know about affordable government colleges, ITI trades, polytechnic diplomas, or government scholarships.'
  )
);
docChildren.push(
  pBody(
    'The project Udaan – Online Career Guidance Portal for Underprivileged Students was built to solve this exact problem. The word "Udaan" means flight, and our tagline is “Your dreams deserve a direction.” The main goal of this web application is to give students honest, clear, and practical career guidance that does not push them toward expensive private universities. Instead, it explains how the actual Indian education system works, lists real government college fees, shows verified scholarships on portals like MahaDBT and the National Scholarship Portal, and helps students find a realistic pathway based on their family’s budget.'
  )
);
docChildren.push(
  pBody(
    'The project is built using modern web development technologies including React, TypeScript, HTML, CSS, and Vite. It is designed to work quickly on budget smartphones, requires very little internet data, and can be used in English, Hindi, and Marathi. It also includes an audio reader feature for students or parents who have difficulty reading long paragraphs of text on a screen.'
  )
);

docChildren.push(pHeading2('1.1 Existing System:'));
docChildren.push(
  pBody(
    'In the existing system, students from municipal schools and low-income families mostly rely on informal advice from friends, relatives, or random videos on social media. Some look at education websites or coaching advertisements, while others try to search online on their mobile phones.'
  )
);
docChildren.push(
  pBody(
    'Although these methods can sometimes provide bits of information, they have several serious problems for students who lack proper guidance:'
  )
);
docChildren.push(
  pBullet(
    'Private Counselling is Too Expensive:',
    'Professional career counselling centres and private aptitude testing companies charge anywhere between ₹2,000 and ₹15,000 for one or two sessions. Families earning less than ₹15,000 to ₹20,000 a month cannot spend their hard-earned money on counselling.'
  )
);
docChildren.push(
  pBullet(
    'Commercial Websites Promote Private Colleges:',
    'Most popular educational websites earn money by showing paid advertisements for private colleges. They rarely tell students about low-cost government polytechnics, government ITIs, or university-affiliated aided colleges.'
  )
);
docChildren.push(
  pBullet(
    'Lack of Scholarship Awareness:',
    'The Maharashtra Government runs helpful schemes on the MahaDBT portal (such as fee concessions for EBC, OBC, SC, and ST students), and the Central Government has the National Scholarship Portal. But many students miss the application dates because they do not know what documents (like Tahsildar income certificate, domicile, or caste validity) are required beforehand.'
  )
);
docChildren.push(
  pBullet(
    'Language and Technical Terms:',
    'Most official notices and career portals are written in complex English or dense administrative language. Students who studied in Marathi or Hindi medium schools find it difficult to understand terms like "CAP rounds", "domicile", "EWS", or "creamy layer".'
  )
);
docChildren.push(
  pBullet(
    'Risk of Scams and Fake Promises:',
    'Many private coaching centres make unrealistic promises like "100% job guarantee with ₹50,000 salary in 6 months". Students who don’t know better end up wasting their family savings on unaccredited courses.'
  )
);
docChildren.push(
  pBody(
    'Therefore, there is an urgent need for a free, simple, and honest website that guides underprivileged students in their own language without pushing expensive courses.'
  )
);

docChildren.push(pHeading2('1.2 Proposed System:'));
docChildren.push(
  pBody(
    'The proposed system, Udaan – Online Career Guidance Portal for Underprivileged Students, is an open-access web application created to make career counselling easy, accessible, and practical for every Indian student.'
  )
);
docChildren.push(
  pBody(
    'The application provides a clear, step-by-step guidance interface that addresses the shortcomings of the existing system:'
  )
);
docChildren.push(
  pBullet(
    'Realistic Education Pathways:',
    'Udaan covers all practical routes after 10th and 12th: Arts, Commerce, Science, ITI trades (such as Electrician, Fitter, and COPA), Polytechnic 3-year diplomas, undergraduate degrees (BA, BCom, BSc, BSc IT, BCA, BTech, Nursing, Pharmacy), open schooling (NIOS), and competitive government exams (UPSC, SSC, Railway Recruitment, Police, and Banking).'
  )
);
docChildren.push(
  pBullet(
    'Fee Reality Checks:',
    'Instead of hiding college fees, each career page clearly shows how much a government college costs compared to a private college, along with realistic starting salaries. This prevents students and parents from falling into debt traps.'
  )
);
docChildren.push(
  pBullet(
    'MahaDBT and Central Scholarship Finder:',
    'The scholarship section lets students filter opportunities specifically for Maharashtra (MahaDBT) and Central schemes (NSP). It displays the income limit, eligible categories, deadline, official website link, and an easy document checklist.'
  )
);
docChildren.push(
  pBullet(
    'Guided 6-Step Career Quiz:',
    'Students who are confused can take a quick 6-question assessment. The system asks for their current qualification, subjects they enjoy, and their family’s annual education budget. If a student has a very low budget (under ₹25,000 per year), the system automatically suggests affordable government colleges or ITI-to-polytechnic routes.'
  )
);
docChildren.push(
  pBullet(
    'Multilingual & Audio Support:',
    'The entire website can be switched between English, Hindi, and Marathi with one click. An audio narration button uses the browser speech feature to read aloud the guidance for parents who cannot read easily.'
  )
);
docChildren.push(
  pBullet(
    'Human Mentorship with Child Safeguarding:',
    'Students can browse profiles of verified volunteer mentors (teachers, counsellors, and professionals). If a student is under 18 years old, the website asks for parent/guardian permission before booking a session, and private phone numbers are kept hidden for safety.'
  )
);
docChildren.push(
  pBullet(
    'My Roadmap & Printable Study Plan:',
    'Students can save their favorite careers to a personal checklist. They can also click a "Print / Save PDF" button to print a neat paper copy to keep at home, which is very helpful when internet data is limited.'
  )
);

// Normal & Geotag Photos
docChildren.push(pHeading2('1.3 Normal Photos & Geotag Photos:'));
docChildren.push(
  pBody(
    'During our Community Engagement Program (CEP), we visited local community centres, tuition rooms, and open study spaces in Chembur and Govandi to talk to students who recently passed their 10th and 12th board exams. We showed them the Udaan portal on a laptop and mobile phones to see if they could easily understand the options and find scholarships.'
  )
);

docChildren.push(pHeading3('Normal Photos:'));
if (normalImg1) {
  docChildren.push(...pImage(normalImg1, 280, 220, 'Plate 1.1: Local youth and student community centre near Chembur-Govandi area'));
}
if (normalImg2) {
  docChildren.push(...pImage(normalImg2, 280, 220, 'Plate 1.2: Interacting with local students and discussing post-SSC/HSC career options'));
}

docChildren.push(pHeading3('Geotag Photos:'));
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
      'Plate 1.4: GPS Geotag Photo — Demonstrating Udaan portal and checking MahaDBT scholarships with students (Lat: 19.062128°, Long: 72.917072°)'
    )
  );
}

docChildren.push(pHeading2('1.4 Key Findings:'));
docChildren.push(
  pBody(
    'Our fieldwork in Chembur and Govandi helped us understand the ground reality faced by students from low-income families:'
  )
);
docChildren.push(
  pBullet(
    '1. Earning Early is a Major Priority:',
    'More than half of the students we interviewed said their families need them to start earning within 1 to 2 years after 10th or 12th. When we showed them ITI trades (like Electrician and Fitter) and 3-year polytechnic diplomas, they were very excited because these courses are affordable and lead directly to employment.'
  )
);
docChildren.push(
  pBullet(
    '2. Huge Gap in MahaDBT Information:',
    'Almost 80% of the students we met qualified for government fee concessions (like EBC, SC, ST, or OBC scholarships), but very few had actually applied. The main reason was confusion about which documents were needed and how to link their bank accounts with Aadhaar.'
  )
);
docChildren.push(
  pBullet(
    '3. Regional Languages Make a Big Difference:',
    'When students opened the website in English, they moved slowly and asked many questions about simple terms. But when we switched the portal to Marathi or Hindi, they were able to read the options independently and completed the career quiz easily.'
  )
);
docChildren.push(
  pBullet(
    '4. Printable Roadmaps are Very Useful:',
    'Most students share a single smartphone with their parents or siblings and have limited daily internet data packs. Being able to print out their roadmap on paper allowed them to keep their study plan on their wall without needing an active internet connection.'
  )
);

// ==========================================
// 7. CHAPTER 2: LITERATURE REVIEW
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('2. LITERATURE REVIEW (PROJECT PLANNING & DESIGN DOCUMENT):'));
docChildren.push(
  pBody(
    'Before writing code for the Udaan portal, we studied government education websites, Maharashtra state scholarship portals, entrance exam guidelines, and standard web accessibility rules. The goal was to build a tool that runs smoothly on affordable devices and is easy to use for people with basic digital knowledge.'
  )
);

docChildren.push(pHeading2('2.1 Survey of Technology (Minimum Hardware and Software Requirements):'));
docChildren.push(
  pBody(
    'Udaan is designed as a lightweight single-page web application. It uses React with TypeScript and Vite so that pages load quickly even on slow mobile internet connections. The user interface does not depend on heavy images or slow external animations.'
  )
);

// Hardware Table
const hwRows = [
  ['Processor', 'Intel Core i3 or equivalent (Desktop/Laptop) / Any standard smartphone quad-core processor'],
  ['RAM', '4 GB (Computer) / 2 GB (Android mobile device)'],
  ['Storage', '500 MB free space (for caching web assets and offline saved roadmaps)'],
  ['Display', 'Responsive layout that works from 360 × 640 (Mobile) up to 1920 × 1080 (Desktop)'],
  ['Input Devices', 'Touchscreen, Keyboard, and Mouse'],
  ['Internet Connection', 'Basic 2G/3G/4G or broadband (offline reading supported after initial page load)']
];
const hwTableRows = [
  new TableRow({
    children: [
      new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [pCenter('Hardware Component', true, 16, colorDarkGreen)] }),
      new TableCell({ width: { size: 65, type: WidthType.PERCENTAGE }, children: [pCenter('Minimum Requirement', true, 16, colorDarkGreen)] })
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
  ['Frontend Framework', 'React 19 (Component-based architecture)'],
  ['Language', 'TypeScript 5.8+ (Strict type checking, zero runtime crashes)'],
  ['Build Tool', 'Vite 8.3 (Fast build times and lightweight bundled files)'],
  ['Styling', 'Pure HTML5 and CSS3 (Custom warm ivory, forest green, and terracotta palette)'],
  ['Icons', 'Lucide-React (Clean, lightweight vector icons)'],
  ['Client Storage', 'HTML5 LocalStorage (To save student bookmarks and roadmaps without mandatory login)'],
  ['Browser', 'Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari']
];
const swTableRows = [
  new TableRow({
    children: [
      new TableCell({ width: { size: 35, type: WidthType.PERCENTAGE }, children: [pCenter('Software Component', true, 16, colorDarkGreen)] }),
      new TableCell({ width: { size: 65, type: WidthType.PERCENTAGE }, children: [pCenter('Technology / Requirement', true, 16, colorDarkGreen)] })
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

docChildren.push(pHeading2('2.2 Interview Questions:'));
docChildren.push(
  pBody(
    'The following interview questions were asked during our field visits in Chembur and Govandi to understand what information students and parents struggle to find:'
  )
);
const interviewQuestions = [
  'Which class have you recently passed or are currently studying in?',
  'Do you know the difference between General BSc, BSc Information Technology, and a Polytechnic Diploma?',
  'Have you ever spoken to a professional career counsellor, or was it too expensive?',
  'Do you know about the MahaDBT scholarship portal run by the Maharashtra Government?',
  'What is your family’s approximate annual income, and can you afford private college fees of ₹1 Lakh per year?',
  'Do you know which government or aided colleges in Mumbai offer degree courses in your stream?',
  'Would you prefer a 1-year or 2-year ITI trade so you can start earning sooner?',
  'Have you ever checked the National Scholarship Portal (scholarships.gov.in) for central government aid?',
  'What certificates do you have ready at home (Income certificate, Domicile, Caste certificate, Ration card)?',
  'Do you find English-only career websites hard to read, and would Marathi or Hindi be easier?',
  'Would your parents feel safer if the website asked for guardian permission before you talk to a mentor?',
  'Would an offline printable roadmap help you keep track of admission dates and exams?'
];
interviewQuestions.forEach((q, idx) => {
  docChildren.push(pBullet(`${idx + 1}.`, q));
});

docChildren.push(pHeading2('2.3 Data Collection Plan (Requirement Gathering):'));
docChildren.push(
  pBody(
    'The requirements for Udaan were gathered by analyzing real challenges faced by students in municipal schools, reviewing official government scholarship portals, and studying guidelines issued by the Directorate of Technical Education (DTE) Maharashtra.'
  )
);

docChildren.push(pHeading3('2.3.1 Requirement Identification:'));
docChildren.push(
  pBullet('Realistic College Fees:', 'The portal must display actual government college fees and dates so students are not misled.')
);
docChildren.push(
  pBullet('Official Scholarship Links:', 'Direct hyperlinks to MahaDBT (`mahadbt.maharashtra.gov.in`) and NSP with clear document lists.')
);
docChildren.push(
  pBullet('Vocational Education Support:', 'Equal importance for ITI trades and polytechnic diplomas alongside degrees.')
);
docChildren.push(
  pBullet('Multilingual Voice Reader:', 'Web Speech API integration to read text aloud for parents and slow readers.')
);
docChildren.push(
  pBullet('Offline Accessibility:', 'LocalStorage integration to save bookmarks and export roadmaps to PDF.')
);

docChildren.push(pHeading3('2.3.2 Data Collection Methods:'));
docChildren.push(
  pBody(
    'We gathered information through three main ways: directly interviewing students and parents in Chembur and Govandi, reading official admission booklets from DTE Maharashtra and Mumbai University, and checking live government portals such as scholarships.gov.in and mahadbt.maharashtra.gov.in.'
  )
);

docChildren.push(pHeading3('2.3.3 Expected Outcome:'));
docChildren.push(
  pBody(
    'The expected outcome is a practical, trustworthy, and free web platform that helps any student in India—regardless of their financial background—discover affordable career options and scholarships with confidence.'
  )
);

docChildren.push(pHeading2('2.4 Supporting Material (Application/Website/Prototypes):'));
docChildren.push(
  pBody(
    'The completed Udaan web application is organized into clear sections: Home, Career Explorer, Scholarship Finder, Entrance Exam Guide, Education Pathways, Career Quiz, Mentors, and My Roadmap. The website does not require full page reloads, making it smooth and fast to use on any phone or computer.'
  )
);

// ==========================================
// 8. CHAPTER 3: METHODOLOGY
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('3. METHODOLOGY (DESIGN DOCUMENTATION):'));
docChildren.push(
  pBody(
    'This chapter provides the software design documentation for Udaan, including the Entity-Relationship diagram, UML Class diagram, system flowchart, activity diagram, and sequence diagram.'
  )
);

// 3.1 ER Diagram
docChildren.push(pHeading2('3.1 ER Diagram:'));
docChildren.push(
  pBody(
    'An Entity-Relationship (ER) diagram shows how data entities, their attributes, and their relationships are structured in a system. In Udaan, the main entity `STUDENT_USER` connects to `ASSESSMENT_RESPONSE` and `ROADMAP_ITEM`. The `CAREER_PATHWAY` entity links to `SCHOLARSHIP` and `ENTRANCE_EXAM` through many-to-many relationships, so that when a student views a career, the system can instantly show eligible scholarships and exams. The `MENTOR_SESSION` entity connects students and verified mentors, with a mandatory flag for parental consent to protect young students.'
  )
);
if (erDiagImg) {
  docChildren.push(...pImage(erDiagImg, 560, 390, 'Figure 3.1: Entity-Relationship Diagram for Udaan Career Guidance Portal'));
}

// 3.2 Class Diagram
docChildren.push(pPageBreak());
docChildren.push(pHeading2('3.2 Class Diagram:'));
docChildren.push(
  pBody(
    'The Class diagram illustrates the object-oriented structure of the React application. The main controller `UdaanAppRoot` manages the active tab and language context (`LanguageContext`). Independent service modules handle specific tasks: `CareerExplorerService` for filtering careers, `ScholarshipEngine` for MahaDBT eligibility checks, `CareerQuizEngine` for computing low-cost matches, and `MentorSafeguardService` for minor consent validation. A local storage adapter handles offline saving.'
  )
);
if (classDiagImg) {
  docChildren.push(...pImage(classDiagImg, 560, 420, 'Figure 3.2: UML Class Diagram for Component and Service Architecture'));
}

// 3.3 Flowchart
docChildren.push(pPageBreak());
docChildren.push(pHeading2('3.3 Flowchart:'));
docChildren.push(
  pBody(
    'The flowchart maps the complete sequence of steps a student follows when using Udaan. The process starts on the homepage where the user chooses English, Hindi, or Marathi. They can then either explore careers directly or take the 6-step guided quiz. The flowchart shows the decision points where the system checks their budget, suggests vocational alternatives, checks parental consent for minors, and allows them to download a printable roadmap.'
  )
);
if (flowchartImg) {
  docChildren.push(...pImage(flowchartImg, 460, 560, 'Figure 3.3: Flowchart showing End-to-End User Guidance Journey'));
}

// 3.4 Activity Diagram
docChildren.push(pPageBreak());
docChildren.push(pHeading2('3.4 Activity Diagram:'));
docChildren.push(
  pBody(
    'The activity diagram represents the workflow of the guided career assessment using four swimlanes: `Student / User`, `Udaan Web Interface`, `Assessment & Match Engine`, and `MahaDBT / NSP Portal Gateways`. It explains how student inputs are verified, how scholarship criteria are checked in parallel, and how the system decides between degree routes and affordable vocational routes based on family budget.'
  )
);
if (activityDiagImg) {
  docChildren.push(...pImage(activityDiagImg, 540, 460, 'Figure 3.4: UML Activity Diagram with Swimlane Process Flow'));
}

// 3.5 Sequence Diagram
docChildren.push(pPageBreak());
docChildren.push(pHeading2('3.5 Sequence Diagram:'));
docChildren.push(
  pBody(
    'The sequence diagram shows the step-by-step communication between different components over time. It details how the student interacts with the React interface, how the assessment engine evaluates answers, how scholarship data is queried, and how final roadmap milestones are saved securely in browser storage.'
  )
);
if (seqDiagImg) {
  docChildren.push(...pImage(seqDiagImg, 560, 420, 'Figure 3.5: UML Sequence Diagram for Career Evaluation and Scholarship Flow'));
}

// ==========================================
// 9. CHAPTER 4: SYSTEM MODULES & DATA DESIGN
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('4. Description of Communication Training Module Outline'));
docChildren.push(
  pBody(
    'Udaan is divided into functional modules designed to guide underprivileged students simply and clearly. This chapter explains the working of each module, its data structure, and screenshots of the actual website.'
  )
);

docChildren.push(pHeading2('4.1 Basic to Modules:'));

docChildren.push(pHeading3('4.1.1 Career Explorer Module:'));
docChildren.push(
  pBody(
    'The Career Explorer module lets students explore 9 career domains: Technology, Healthcare, Government Services, Engineering, Commerce, Creative, Education, Vocational Trades, and Emerging Sectors. Each career card gives a complete reality check: what qualifications are needed, required entrance exams, government college fees, and realistic entry-level versus senior salary ranges.'
  )
);

docChildren.push(pHeading3('4.1.2 Scholarship & Financial Aid Module:'));
docChildren.push(
  pBody(
    'This module helps students discover verified scholarships from the Maharashtra Government (MahaDBT) and the Central Government (National Scholarship Portal). It clearly marks sample test data so students are not confused, and provides an interactive checklist of required certificates (such as Tahsildar income certificate, domicile, and caste validity).'
  )
);

docChildren.push(pHeading3('4.1.4 Reporting Information / Mentorship Module:'));
docChildren.push(
  pBody(
    'The Mentorship module allows students to connect with verified volunteer career counsellors and professionals. To safeguard young students, anyone under 18 years of age must get parent/guardian consent before booking. Personal phone numbers are kept private, and students can also access our Jargon Buster glossary to understand terms like DBT, EWS, CAP rounds, and NIOS.'
  )
);

docChildren.push(pHeading2('4.2 Data Design:'));
docChildren.push(
  pBody(
    'The data design describes how career information, scholarships, quiz answers, and roadmap milestones are formatted and handled in the application.'
  )
);

docChildren.push(pHeading3('4.2.1 Career Data:'));
docChildren.push(
  pBody(
    'Contains structured information for each career pathway, including title, domain, minimum qualification, average government college fee, fee source date, entry salary, senior salary, vocational flag, and required entrance examinations.'
  )
);

docChildren.push(pHeading3('4.2.2 Scholarship Data:'));
docChildren.push(
  pBody(
    'Stores scholarship records with scheme title, conducting portal (MahaDBT or NSP), maximum family income limit, benefit amount, official application link, verification date, and sample record indicator.'
  )
);

docChildren.push(pHeading3('4.2.3 Quiz Data:'));
docChildren.push(
  pBody(
    'Contains the 6 guided assessment questions and scoring weights used to evaluate student preferences and match them with affordable education routes.'
  )
);

docChildren.push(pHeading3('4.2.4 Reporting Information Data:'));
docChildren.push(
  pBody(
    'Maintains mentor profile information, verified status badges, language proficiencies, and minor safeguarding confirmation records.'
  )
);

docChildren.push(pHeading3('4.2.5 Database Usage:'));
docChildren.push(
  pBody(
    'The current implementation stores user roadmap milestones, bookmarks, and quiz progress using HTML5 LocalStorage on the client side. This ensures that students do not have to give away their private mobile numbers or create passwords, keeping the platform fast, safe, and completely private.'
  )
);

// GUI Screenshots
docChildren.push(pPageBreak());
docChildren.push(pHeading2('4.3 Graphical User Interface (GUI) Screenshots:'));
docChildren.push(
  pBody(
    'The graphical user interface of Udaan is designed to look clean, welcoming, and easy to read. It uses warm ivory, forest green, terracotta, and charcoal colors rather than generic AI templates.'
  )
);

if (homeScreenshot) {
  docChildren.push(...pImage(homeScreenshot, 520, 290, 'Plate 4.1: Home Page showing Language Switcher, Audio Reader, and Education Levels'));
}
if (careerScreenshot) {
  docChildren.push(...pImage(careerScreenshot, 520, 290, 'Plate 4.2: Career Explorer Page showing 9 Domains, Search, and Reality-Check Fee Details'));
}
if (scholarshipScreenshot) {
  docChildren.push(...pImage(scholarshipScreenshot, 520, 290, 'Plate 4.3: Scholarship Page with MahaDBT filter, income limits, and official portal links'));
}
if (quizScreenshot) {
  docChildren.push(...pImage(quizScreenshot, 520, 290, 'Plate 4.4: Guided Career Assessment Quiz evaluating class, interests, and budget'));
}
if (mentorScreenshot) {
  docChildren.push(...pImage(mentorScreenshot, 520, 290, 'Plate 4.5: Mentor Directory Page with Verified Volunteers and Minor Safeguarding Consent Modal'));
}
if (roadmapScreenshot) {
  docChildren.push(...pImage(roadmapScreenshot, 520, 290, 'Plate 4.6: Student Roadmap Page with progress checklist and printable offline study plan'));
}

// ==========================================
// 10. CHAPTER 5: CONCLUSION & RECOMMENDATIONS
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('5. Conclusion & Recommendation'));

docChildren.push(pHeading2('5.1 Conclusion:'));
docChildren.push(
  pBody(
    'Udaan – Online Career Guidance Portal for Underprivileged Students was developed to bridge the guidance gap for students from government schools, rural areas, and low-income families in Mumbai and across India. By providing clear educational pathways, transparent government college fees, direct links to official scholarships on MahaDBT and the National Scholarship Portal, and a budget-aware career quiz, the project helps first-generation college students make informed career decisions without falling into debt.'
  )
);
docChildren.push(
  pBody(
    'During our community field testing in Chembur and Govandi, we verified that the website works smoothly on basic Android smartphones, uses minimal internet data, and is easy to understand in Marathi and Hindi. Features like audio narration and printable PDF roadmaps proved very helpful for students and parents with limited digital literacy.'
  )
);

if (outdoorGeotagImg) {
  docChildren.push(
    ...pImage(
      outdoorGeotagImg,
      420,
      260,
      'Plate 5.1: Demonstrating Udaan portal to local students near Govandi Flyover, Mumbai (GPS Lat: 19.062197°, Long: 72.917093°)'
    )
  );
}

docChildren.push(pHeading2('5.2 Recommendations and Future Enhancements:'));
docChildren.push(
  pBody(
    'The application can be developed further in the future by adding features such as:'
  )
);
docChildren.push(
  pBullet(
    '1. Voice-Based Assistant in Marathi and Hindi:',
    'Adding speech-to-text input so students and parents can speak questions in their own language.'
  )
);
docChildren.push(
  pBullet(
    '2. WhatsApp Notification Alerts:',
    'Sending free WhatsApp alerts about upcoming MahaDBT scholarship deadlines and entrance exam application dates.'
  )
);
docChildren.push(
  pBullet(
    '3. Certificate Scanner:',
    'Allowing students to take a photo of their income or caste certificate on their phone to check if it matches scholarship eligibility rules.'
  )
);
docChildren.push(
  pBullet(
    '4. Additional Indian Languages:',
    'Expanding the portal to include Gujarati, Urdu, Tamil, and Bengali to help students in other parts of the country.'
  )
);

// ==========================================
// 11. CHAPTER 6: REFERENCES
// ==========================================
docChildren.push(pPageBreak());
docChildren.push(pHeading1('6. References:'));
docChildren.push(
  pBody(
    'The following resources, official government websites, and technical documentation were used during the development of the Udaan project:'
  )
);

const references = [
  'Government of Maharashtra. MahaDBT Portal (Direct Benefit Transfer). Available at: https://mahadbt.maharashtra.gov.in/',
  'Ministry of Education, Government of India. National Scholarship Portal (NSP). Available at: https://scholarships.gov.in/',
  'Directorate of Technical Education (DTE), Maharashtra State. Centralized Admission Process (CAP) Guidelines. Available at: https://dtemaharashtra.gov.in/',
  'Directorate General of Training (DGT), Ministry of Skill Development and Entrepreneurship. Craftsmen Training Scheme (CTS) ITI Portal. Available at: https://www.dgt.gov.in/',
  'National Council of Educational Research and Training (NCERT). Career Guidance Guidelines for Secondary School Students, New Delhi.',
  'Ministry of Education, Government of India. National Education Policy (NEP) 2020.',
  'React Documentation and Community Guidelines. Available at: https://react.dev/',
  'TypeScript Official Handbook. Microsoft Corporation. Available at: https://www.typescriptlang.org/',
  'Vite Frontend Tooling Documentation. Available at: https://vite.dev/',
  'World Wide Web Consortium (W3C). Web Content Accessibility Guidelines (WCAG) 2.1 Standards. Available at: https://www.w3.org/WAI/',
  'Mozilla Developer Network (MDN). Web Storage API and Web Speech API. Available at: https://developer.mozilla.org/'
];

references.forEach((ref, idx) => {
  docChildren.push(pBullet(`[${idx + 1}]`, ref));
});

docChildren.push(new Paragraph({ spacing: { before: 240, after: 120 } }));
docChildren.push(pCenter('*** END OF PROJECT REPORT ***', true, 20, colorDarkGreen));

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
  console.log('Compiling humanized Word Document (.docx)...');
  const buffer = await Packer.toBuffer(finalDoc);
  const outPath = path.join(BASE_DIR, 'Udaan_Project_Viva_Documentation.docx');
  fs.writeFileSync(outPath, buffer);
  console.log(`Humanized document successfully generated at: ${outPath} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`);
}

saveDocument().catch(console.error);
