import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DIAGRAMS_DIR = 'C:\\Users\\Ovais\\Downloads\\udaan\\generated_diagrams';

if (!fs.existsSync(DIAGRAMS_DIR)) {
  fs.mkdirSync(DIAGRAMS_DIR, { recursive: true });
}

// Diagram 1: ER Diagram SVG
const erDiagramHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; background: #ffffff; font-family: 'Segoe UI', Arial, sans-serif; display: flex; justify-content: center; align-items: center; padding: 20px; }
  svg { max-width: 100%; height: auto; }
  text { font-family: 'Segoe UI', Arial, sans-serif; }
</style>
</head>
<body>
<svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.12"/>
    </filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#234B38"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="600" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#234B38">ENTITY RELATIONSHIP (ER) DIAGRAM — UDAAN CAREER GUIDANCE PORTAL</text>
  <text x="600" y="58" text-anchor="middle" font-size="13" fill="#666">Architectural schema for Underprivileged Student Guidance, Scholarships, Exams & Mentorship</text>

  <!-- ENTITY: USERS -->
  <g transform="translate(60, 220)">
    <rect width="180" height="90" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="90" y="32" text-anchor="middle" font-size="16" font-weight="bold" fill="#234B38">STUDENT_USER</text>
    <line x1="15" y1="42" x2="165" y2="42" stroke="#234B38" stroke-width="1.5"/>
    <text x="90" y="60" text-anchor="middle" font-size="11" fill="#303832">PK: user_id</text>
    <text x="90" y="76" text-anchor="middle" font-size="10" fill="#666">income_bracket, state, grade</text>
  </g>

  <!-- User Attributes (Ovals) -->
  <ellipse cx="60" cy="140" rx="45" ry="20" fill="#fff" stroke="#234B38" stroke-width="1.5"/>
  <text x="60" y="144" text-anchor="middle" font-size="10" font-weight="bold" text-decoration="underline">user_id (PK)</text>
  <line x1="75" y1="158" x2="100" y2="220" stroke="#234B38" stroke-width="1.2"/>

  <ellipse cx="150" cy="120" rx="42" ry="18" fill="#fff" stroke="#234B38" stroke-width="1.5"/>
  <text x="150" y="124" text-anchor="middle" font-size="10">full_name</text>
  <line x1="150" y1="138" x2="140" y2="220" stroke="#234B38" stroke-width="1.2"/>

  <ellipse cx="235" cy="140" rx="42" ry="18" fill="#fff" stroke="#234B38" stroke-width="1.5"/>
  <text x="235" y="144" text-anchor="middle" font-size="10">state_domicile</text>
  <line x1="220" y1="156" x2="185" y2="220" stroke="#234B38" stroke-width="1.2"/>

  <ellipse cx="30" cy="265" rx="40" ry="18" fill="#fff" stroke="#234B38" stroke-width="1.5"/>
  <text x="30" y="269" text-anchor="middle" font-size="10">lang_pref</text>
  <line x1="55" y1="265" x2="60" y2="265" stroke="#234B38" stroke-width="1.2"/>

  <ellipse cx="55" cy="360" rx="48" ry="18" fill="#fff" stroke="#234B38" stroke-width="1.5"/>
  <text x="55" y="364" text-anchor="middle" font-size="10">annual_income</text>
  <line x1="75" y1="344" x2="105" y2="310" stroke="#234B38" stroke-width="1.2"/>

  <ellipse cx="160" cy="370" rx="45" ry="18" fill="#fff" stroke="#234B38" stroke-width="1.5"/>
  <text x="160" y="374" text-anchor="middle" font-size="10">category (EWS/OBC)</text>
  <line x1="160" y1="352" x2="160" y2="310" stroke="#234B38" stroke-width="1.2"/>

  <!-- Relationship: Submits Quiz / Assessment -->
  <polygon points="330,265 375,235 420,265 375,295" fill="#F8F6EF" stroke="#C66B4E" stroke-width="2"/>
  <text x="375" y="269" text-anchor="middle" font-size="11" font-weight="bold" fill="#C66B4E">completes</text>
  <line x1="240" y1="265" x2="330" y2="265" stroke="#234B38" stroke-width="1.5"/>
  <text x="250" y="258" font-size="12" font-weight="bold" fill="#234B38">1</text>

  <!-- ENTITY: ASSESSMENT_RESPONSE -->
  <g transform="translate(480, 220)">
    <rect width="180" height="90" rx="4" fill="#FAF5E8" stroke="#E7C875" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="90" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#303832">ASSESSMENT</text>
    <line x1="15" y1="40" x2="165" y2="40" stroke="#E7C875" stroke-width="1.5"/>
    <text x="90" y="58" text-anchor="middle" font-size="11" fill="#303832">PK: assessment_id</text>
    <text x="90" y="75" text-anchor="middle" font-size="10" fill="#666">FK: user_id, budget_limit</text>
  </g>
  <line x1="420" y1="265" x2="480" y2="265" stroke="#234B38" stroke-width="1.5"/>
  <text x="465" y="258" font-size="12" font-weight="bold" fill="#234B38">N</text>

  <!-- Relationship: Suggests Career -->
  <polygon points="720,265 765,235 810,265 765,295" fill="#F8F6EF" stroke="#C66B4E" stroke-width="2"/>
  <text x="765" y="269" text-anchor="middle" font-size="11" font-weight="bold" fill="#C66B4E">recommends</text>
  <line x1="660" y1="265" x2="720" y2="265" stroke="#234B38" stroke-width="1.5"/>
  <text x="670" y="258" font-size="12" font-weight="bold" fill="#234B38">N</text>

  <!-- ENTITY: CAREER_PATHWAY -->
  <g transform="translate(870, 220)">
    <rect width="200" height="95" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="100" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#234B38">CAREER_PATHWAY</text>
    <line x1="15" y1="38" x2="185" y2="38" stroke="#234B38" stroke-width="1.5"/>
    <text x="100" y="55" text-anchor="middle" font-size="11" fill="#303832">PK: career_id</text>
    <text x="100" y="70" text-anchor="middle" font-size="10" fill="#666">title, min_qualification, domain</text>
    <text x="100" y="85" text-anchor="middle" font-size="10" fill="#C66B4E">govt_route_fee, is_vocational</text>
  </g>
  <line x1="810" y1="265" x2="870" y2="265" stroke="#234B38" stroke-width="1.5"/>
  <text x="850" y="258" font-size="12" font-weight="bold" fill="#234B38">1</text>

  <!-- Attributes for Career Pathway -->
  <ellipse cx="900" cy="140" rx="45" ry="18" fill="#fff" stroke="#234B38" stroke-width="1.5"/>
  <text x="900" y="144" text-anchor="middle" font-size="10" text-decoration="underline">career_id (PK)</text>
  <line x1="915" y1="158" x2="940" y2="220" stroke="#234B38" stroke-width="1.2"/>

  <ellipse cx="990" cy="125" rx="42" ry="18" fill="#fff" stroke="#234B38" stroke-width="1.5"/>
  <text x="990" y="129" text-anchor="middle" font-size="10">salary_range</text>
  <line x1="990" y1="143" x2="980" y2="220" stroke="#234B38" stroke-width="1.2"/>

  <ellipse cx="1080" cy="145" rx="48" ry="18" fill="#fff" stroke="#234B38" stroke-width="1.5"/>
  <text x="1080" y="149" text-anchor="middle" font-size="10">govt_college_route</text>
  <line x1="1060" y1="161" x2="1030" y2="220" stroke="#234B38" stroke-width="1.2"/>

  <!-- Relationship: Links Scholarships -->
  <polygon points="970,360 1010,335 1050,360 1010,385" fill="#F8F6EF" stroke="#C66B4E" stroke-width="2"/>
  <text x="1010" y="364" text-anchor="middle" font-size="11" font-weight="bold" fill="#C66B4E">funds_via</text>
  <line x1="970" y1="315" x2="1010" y2="335" stroke="#234B38" stroke-width="1.5"/>
  <text x="975" y="335" font-size="12" font-weight="bold" fill="#234B38">N</text>

  <!-- ENTITY: SCHOLARSHIP (Bottom Right) -->
  <g transform="translate(900, 430)">
    <rect width="210" height="95" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="105" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#234B38">SCHOLARSHIP</text>
    <line x1="15" y1="38" x2="195" y2="38" stroke="#234B38" stroke-width="1.5"/>
    <text x="105" y="55" text-anchor="middle" font-size="11" fill="#303832">PK: scholarship_id</text>
    <text x="105" y="70" text-anchor="middle" font-size="10" fill="#666">scheme_name, portal (MahaDBT/NSP)</text>
    <text x="105" y="85" text-anchor="middle" font-size="10" fill="#C66B4E">income_ceiling, is_sample, last_verified</text>
  </g>
  <line x1="1010" y1="385" x2="1010" y2="430" stroke="#234B38" stroke-width="1.5"/>
  <text x="1018" y="415" font-size="12" font-weight="bold" fill="#234B38">M</text>

  <!-- Relationship: Requires Entrance Exams -->
  <polygon points="760,430 805,405 850,430 805,455" fill="#F8F6EF" stroke="#C66B4E" stroke-width="2"/>
  <text x="805" y="434" text-anchor="middle" font-size="11" font-weight="bold" fill="#C66B4E">requires</text>
  <line x1="885" y1="315" x2="825" y2="410" stroke="#234B38" stroke-width="1.5"/>
  <text x="860" y="360" font-size="12" font-weight="bold" fill="#234B38">N</text>

  <!-- ENTITY: ENTRANCE_EXAM -->
  <g transform="translate(680, 500)">
    <rect width="190" height="90" rx="4" fill="#FAF5E8" stroke="#E7C875" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="95" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#303832">ENTRANCE_EXAM</text>
    <line x1="15" y1="38" x2="175" y2="38" stroke="#E7C875" stroke-width="1.5"/>
    <text x="95" y="55" text-anchor="middle" font-size="11" fill="#303832">PK: exam_id</text>
    <text x="95" y="70" text-anchor="middle" font-size="10" fill="#666">exam_code, conducting_body</text>
    <text x="95" y="84" text-anchor="middle" font-size="10" fill="#666">official_portal, fee_concession</text>
  </g>
  <line x1="790" y1="452" x2="780" y2="500" stroke="#234B38" stroke-width="1.5"/>
  <text x="790" y="485" font-size="12" font-weight="bold" fill="#234B38">M</text>

  <!-- Relationship: Tracks Roadmap -->
  <polygon points="150,470 195,445 240,470 195,495" fill="#F8F6EF" stroke="#C66B4E" stroke-width="2"/>
  <text x="195" y="474" text-anchor="middle" font-size="11" font-weight="bold" fill="#C66B4E">tracks</text>
  <line x1="150" y1="310" x2="180" y2="445" stroke="#234B38" stroke-width="1.5"/>
  <text x="145" y="370" font-size="12" font-weight="bold" fill="#234B38">1</text>

  <!-- ENTITY: ROADMAP_ITEM -->
  <g transform="translate(90, 540)">
    <rect width="190" height="90" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="95" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#234B38">ROADMAP_ITEM</text>
    <line x1="15" y1="38" x2="175" y2="38" stroke="#234B38" stroke-width="1.5"/>
    <text x="95" y="55" text-anchor="middle" font-size="11" fill="#303832">PK: item_id, FK: user_id</text>
    <text x="95" y="70" text-anchor="middle" font-size="10" fill="#666">career_id, milestone_title</text>
    <text x="95" y="84" text-anchor="middle" font-size="10" fill="#234B38">is_completed, is_offline_cached</text>
  </g>
  <line x1="195" y1="495" x2="195" y2="540" stroke="#234B38" stroke-width="1.5"/>
  <text x="205" y="525" font-size="12" font-weight="bold" fill="#234B38">N</text>

  <!-- Relationship: Student Requests Mentor -->
  <polygon points="340,680 385,655 430,680 385,705" fill="#F8F6EF" stroke="#C66B4E" stroke-width="2"/>
  <text x="385" y="684" text-anchor="middle" font-size="10" font-weight="bold" fill="#C66B4E">requests (safeguarded)</text>
  <line x1="170" y1="630" x2="350" y2="675" stroke="#234B38" stroke-width="1.5"/>
  <text x="220" y="670" font-size="12" font-weight="bold" fill="#234B38">1</text>

  <!-- ENTITY: MENTORSHIP_SESSION -->
  <g transform="translate(480, 640)">
    <rect width="200" height="95" rx="4" fill="#F6ECE8" stroke="#C66B4E" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="100" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#C66B4E">MENTOR_SESSION</text>
    <line x1="15" y1="38" x2="185" y2="38" stroke="#C66B4E" stroke-width="1.5"/>
    <text x="100" y="55" text-anchor="middle" font-size="11" fill="#303832">PK: session_id</text>
    <text x="100" y="70" text-anchor="middle" font-size="10" fill="#666">FK: user_id, FK: mentor_id</text>
    <text x="100" y="85" text-anchor="middle" font-size="10" fill="#234B38">guardian_consent, moderated_link</text>
  </g>
  <line x1="430" y1="680" x2="480" y2="680" stroke="#234B38" stroke-width="1.5"/>
  <text x="450" y="670" font-size="12" font-weight="bold" fill="#234B38">N</text>

  <!-- Relationship: Mentor Conducts -->
  <polygon points="730,680 770,655 810,680 770,705" fill="#F8F6EF" stroke="#C66B4E" stroke-width="2"/>
  <text x="770" y="684" text-anchor="middle" font-size="11" font-weight="bold" fill="#C66B4E">guides</text>
  <line x1="680" y1="680" x2="730" y2="680" stroke="#234B38" stroke-width="1.5"/>
  <text x="700" y="670" font-size="12" font-weight="bold" fill="#234B38">N</text>

  <!-- ENTITY: MENTOR -->
  <g transform="translate(860, 640)">
    <rect width="190" height="90" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="95" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#234B38">VERIFIED_MENTOR</text>
    <line x1="15" y1="38" x2="175" y2="38" stroke="#234B38" stroke-width="1.5"/>
    <text x="95" y="55" text-anchor="middle" font-size="11" fill="#303832">PK: mentor_id</text>
    <text x="95" y="70" text-anchor="middle" font-size="10" fill="#666">name, profession, organization</text>
    <text x="95" y="84" text-anchor="middle" font-size="10" fill="#234B38">is_police_verified, languages</text>
  </g>
  <line x1="810" y1="680" x2="860" y2="680" stroke="#234B38" stroke-width="1.5"/>
  <text x="830" y="670" font-size="12" font-weight="bold" fill="#234B38">1</text>

  <!-- Diagram Legend Box -->
  <g transform="translate(60, 770)">
    <rect width="1080" height="60" rx="4" fill="#F8F6EF" stroke="#303832" stroke-width="1"/>
    <text x="20" y="25" font-size="12" font-weight="bold" fill="#234B38">LEGEND & ARCHITECTURAL HIGHLIGHTS:</text>
    <text x="20" y="45" font-size="11" fill="#303832">• Rectangles: Core System Entities  |  • Diamonds: Relational Cardinality (1:1, 1:N, M:N)  |  • Ovals: Key Attributes & Foreign Keys</text>
    <text x="650" y="25" font-size="11" font-weight="bold" fill="#C66B4E">Safeguarding: Minors undergo mandatory guardian consent before session scheduling</text>
    <text x="650" y="45" font-size="11" fill="#234B38">Integrations: MahaDBT (Maharashtra) & National Scholarship Portal (NSP)</text>
  </g>
</svg>
</body>
</html>
`;

// Diagram 2: Class Diagram SVG
const classDiagramHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; background: #ffffff; font-family: 'Segoe UI', Arial, sans-serif; display: flex; justify-content: center; align-items: center; padding: 20px; }
  svg { max-width: 100%; height: auto; }
</style>
</head>
<body>
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Title -->
  <text x="600" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#234B38">UML CLASS DIAGRAM — UDAAN PORTAL ARCHITECTURE</text>
  <text x="600" y="58" text-anchor="middle" font-size="13" fill="#666">Modular Model-View-Controller & Service Architecture for Multilingual Education Platform</text>

  <!-- Main Root Application Component -->
  <g transform="translate(450, 80)">
    <rect width="300" height="110" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2" filter="url(#shadow)"/>
    <rect width="300" height="28" rx="4" fill="#234B38"/>
    <text x="150" y="16" text-anchor="middle" font-size="11" fill="#E7C875">&lt;&lt;React Component&gt;&gt;</text>
    <text x="150" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFFFFF">UdaanAppRoot</text>
    <text x="10" y="48" font-size="11" fill="#303832">+ currentTab: TabId</text>
    <text x="10" y="63" font-size="11" fill="#303832">+ currentLanguage: 'en' | 'hi' | 'mr'</text>
    <line x1="5" y1="72" x2="295" y2="72" stroke="#234B38" stroke-width="0.8"/>
    <text x="10" y="88" font-size="11" fill="#234B38">+ switchLanguage(lang: Language): void</text>
    <text x="10" y="102" font-size="11" fill="#234B38">+ triggerScreenReader(text: string): void</text>
  </g>

  <!-- Service 1: CareerExplorerService -->
  <g transform="translate(50, 240)">
    <rect width="250" height="135" rx="4" fill="#FAF5E8" stroke="#E7C875" stroke-width="2" filter="url(#shadow)"/>
    <rect width="250" height="28" fill="#E7C875"/>
    <text x="125" y="16" text-anchor="middle" font-size="10" fill="#303832">&lt;&lt;Service Module&gt;&gt;</text>
    <text x="125" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#303832">CareerExplorerService</text>
    <text x="10" y="48" font-size="11" fill="#303832">- careers: CareerItem[]</text>
    <text x="10" y="63" font-size="11" fill="#303832">- domains: CareerDomain[]</text>
    <line x1="5" y1="72" x2="245" y2="72" stroke="#E7C875" stroke-width="0.8"/>
    <text x="10" y="88" font-size="11" fill="#234B38">+ searchByKeyword(q: string): Career[]</text>
    <text x="10" y="103" font-size="11" fill="#234B38">+ filterByDomain(domainId): Career[]</text>
    <text x="10" y="118" font-size="11" fill="#234B38">+ getGovtCollegePathway(id): RouteInfo</text>
  </g>

  <!-- Service 2: ScholarshipEngine -->
  <g transform="translate(330, 240)">
    <rect width="260" height="135" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2" filter="url(#shadow)"/>
    <rect width="260" height="28" fill="#234B38"/>
    <text x="130" y="16" text-anchor="middle" font-size="10" fill="#E7C875">&lt;&lt;Service Module&gt;&gt;</text>
    <text x="130" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#FFFFFF">ScholarshipEngine</text>
    <text x="10" y="48" font-size="11" fill="#303832">- schemes: ScholarshipScheme[]</text>
    <text x="10" y="63" font-size="11" fill="#303832">- mahaDbtPortalUrl: string</text>
    <line x1="5" y1="72" x2="255" y2="72" stroke="#234B38" stroke-width="0.8"/>
    <text x="10" y="88" font-size="11" fill="#234B38">+ filterMahaDbtSchemes(): Scheme[]</text>
    <text x="10" y="103" font-size="11" fill="#234B38">+ checkEligibility(income, category): bool</text>
    <text x="10" y="118" font-size="11" fill="#234B38">+ verifyDocumentChecklist(): DocList</text>
  </g>

  <!-- Service 3: AssessmentEngine -->
  <g transform="translate(620, 240)">
    <rect width="250" height="135" rx="4" fill="#FAF5E8" stroke="#E7C875" stroke-width="2" filter="url(#shadow)"/>
    <rect width="250" height="28" fill="#E7C875"/>
    <text x="125" y="16" text-anchor="middle" font-size="10" fill="#303832">&lt;&lt;Algorithmic Module&gt;&gt;</text>
    <text x="125" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#303832">CareerQuizEngine</text>
    <text x="10" y="48" font-size="11" fill="#303832">- quizQuestions: QuestionStep[]</text>
    <text x="10" y="63" font-size="11" fill="#303832">- scoringWeights: Matrix</text>
    <line x1="5" y1="72" x2="245" y2="72" stroke="#E7C875" stroke-width="0.8"/>
    <text x="10" y="88" font-size="11" fill="#234B38">+ processAnswers(ans: QuizState): Match</text>
    <text x="10" y="103" font-size="11" fill="#234B38">+ computeAffordableAlternative(): Route</text>
    <text x="10" y="118" font-size="11" fill="#234B38">+ generateCareerChecklist(): Step[]</text>
  </g>

  <!-- Service 4: MentorshipSafeguarding -->
  <g transform="translate(900, 240)">
    <rect width="250" height="135" rx="4" fill="#F6ECE8" stroke="#C66B4E" stroke-width="2" filter="url(#shadow)"/>
    <rect width="250" height="28" fill="#C66B4E"/>
    <text x="125" y="16" text-anchor="middle" font-size="10" fill="#FAF5E8">&lt;&lt;Security Module&gt;&gt;</text>
    <text x="125" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#FFFFFF">MentorSafeguardService</text>
    <text x="10" y="48" font-size="11" fill="#303832">- verifiedMentors: Mentor[]</text>
    <text x="10" y="63" font-size="11" fill="#303832">- minorConsentLogs: ConsentRecord[]</text>
    <line x1="5" y1="72" x2="245" y2="72" stroke="#C66B4E" stroke-width="0.8"/>
    <text x="10" y="88" font-size="11" fill="#C66B4E">+ validateParentConsent(c): boolean</text>
    <text x="10" y="103" font-size="11" fill="#C66B4E">+ scheduleModeratedMeeting(): URL</text>
    <text x="10" y="118" font-size="11" fill="#C66B4E">+ hideStudentPersonalContact(): void</text>
  </g>

  <!-- Connection Lines from Root to Services -->
  <line x1="450" y1="135" x2="175" y2="135" stroke="#234B38" stroke-width="1.5"/>
  <line x1="175" y1="135" x2="175" y2="240" stroke="#234B38" stroke-width="1.5" stroke-dasharray="4"/>

  <line x1="500" y1="190" x2="500" y2="240" stroke="#234B38" stroke-width="1.5" stroke-dasharray="4"/>
  <line x1="700" y1="190" x2="700" y2="240" stroke="#234B38" stroke-width="1.5" stroke-dasharray="4"/>

  <line x1="750" y1="135" x2="1025" y2="135" stroke="#234B38" stroke-width="1.5"/>
  <line x1="1025" y1="135" x2="1025" y2="240" stroke="#234B38" stroke-width="1.5" stroke-dasharray="4"/>

  <!-- Entity Model Classes (Bottom Row) -->
  <!-- Entity 1: CareerItem -->
  <g transform="translate(60, 440)">
    <rect width="230" height="150" rx="4" fill="#FFFFFF" stroke="#303832" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="230" height="24" fill="#303832"/>
    <text x="115" y="17" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFFFFF">CareerItem</text>
    <text x="10" y="42" font-size="11" fill="#303832">+ id: string</text>
    <text x="10" y="58" font-size="11" fill="#303832">+ title: string</text>
    <text x="10" y="74" font-size="11" fill="#303832">+ domain: CareerDomain</text>
    <text x="10" y="90" font-size="11" fill="#303832">+ minQualification: string</text>
    <text x="10" y="106" font-size="11" fill="#303832">+ avgGovtFees: number</text>
    <text x="10" y="122" font-size="11" fill="#303832">+ salaryEntry: string</text>
    <text x="10" y="138" font-size="11" fill="#234B38">+ isVocational: boolean</text>
  </g>
  <line x1="175" y1="375" x2="175" y2="440" stroke="#234B38" stroke-width="1.5"/>

  <!-- Entity 2: ScholarshipScheme -->
  <g transform="translate(340, 440)">
    <rect width="240" height="150" rx="4" fill="#FFFFFF" stroke="#303832" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="240" height="24" fill="#303832"/>
    <text x="120" y="17" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFFFFF">ScholarshipScheme</text>
    <text x="10" y="42" font-size="11" fill="#303832">+ id: string</text>
    <text x="10" y="58" font-size="11" fill="#303832">+ title: string</text>
    <text x="10" y="74" font-size="11" fill="#303832">+ portal: 'MahaDBT' | 'NSP'</text>
    <text x="10" y="90" font-size="11" fill="#303832">+ incomeLimit: number</text>
    <text x="10" y="106" font-size="11" fill="#303832">+ maxBenefit: string</text>
    <text x="10" y="122" font-size="11" fill="#303832">+ officialUrl: string</text>
    <text x="10" y="138" font-size="11" fill="#C66B4E">+ isSample: boolean</text>
  </g>
  <line x1="460" y1="375" x2="460" y2="440" stroke="#234B38" stroke-width="1.5"/>

  <!-- Entity 3: RoadmapMilestone -->
  <g transform="translate(630, 440)">
    <rect width="230" height="150" rx="4" fill="#FFFFFF" stroke="#303832" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="230" height="24" fill="#303832"/>
    <text x="115" y="17" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFFFFF">RoadmapMilestone</text>
    <text x="10" y="42" font-size="11" fill="#303832">+ stepNumber: number</text>
    <text x="10" y="58" font-size="11" fill="#303832">+ targetCareerId: string</text>
    <text x="10" y="74" font-size="11" fill="#303832">+ actionTitle: string</text>
    <text x="10" y="90" font-size="11" fill="#303832">+ requiredDocuments: string[]</text>
    <text x="10" y="106" font-size="11" fill="#303832">+ isDone: boolean</text>
    <text x="10" y="122" font-size="11" fill="#303832">+ targetExam: string</text>
    <text x="10" y="138" font-size="11" fill="#234B38">+ isOfflineSaved: boolean</text>
  </g>
  <line x1="745" y1="375" x2="745" y2="440" stroke="#234B38" stroke-width="1.5"/>

  <!-- Entity 4: VerifiedMentor -->
  <g transform="translate(910, 440)">
    <rect width="230" height="150" rx="4" fill="#FFFFFF" stroke="#303832" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="230" height="24" fill="#303832"/>
    <text x="115" y="17" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFFFFF">VerifiedMentor</text>
    <text x="10" y="42" font-size="11" fill="#303832">+ id: string</text>
    <text x="10" y="58" font-size="11" fill="#303832">+ name: string</text>
    <text x="10" y="74" font-size="11" fill="#303832">+ role: string</text>
    <text x="10" y="90" font-size="11" fill="#303832">+ org: string</text>
    <text x="10" y="106" font-size="11" fill="#303832">+ languages: string[]</text>
    <text x="10" y="122" font-size="11" fill="#234B38">+ policeVerified: boolean</text>
    <text x="10" y="138" font-size="11" fill="#C66B4E">+ activeSessions: number</text>
  </g>
  <line x1="1025" y1="375" x2="1025" y2="440" stroke="#234B38" stroke-width="1.5"/>

  <!-- Storage and Offline Adapter (Bottom) -->
  <g transform="translate(420, 650)">
    <rect width="360" height="110" rx="4" fill="#FAF5E8" stroke="#303832" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="360" height="26" fill="#303832"/>
    <text x="180" y="17" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFFFFF">LocalStorage & PDFExportAdapter</text>
    <text x="15" y="48" font-size="11" fill="#303832">+ persistUserProgress(key: string, data: any): void</text>
    <text x="15" y="65" font-size="11" fill="#303832">+ retrieveOfflineBookmarks(): BookmarkMap</text>
    <text x="15" y="82" font-size="11" fill="#234B38">+ generatePrintableHtmlPlan(roadmap: Roadmap): void</text>
    <text x="15" y="99" font-size="11" fill="#C66B4E">+ clearTemporarySession(): void</text>
  </g>

  <!-- Connect RoadmapMilestone and LocalStorage -->
  <line x1="745" y1="590" x2="745" y2="620" stroke="#303832" stroke-width="1.2"/>
  <line x1="745" y1="620" x2="600" y2="620" stroke="#303832" stroke-width="1.2"/>
  <line x1="600" y1="620" x2="600" y2="650" stroke="#303832" stroke-width="1.2"/>

  <!-- Footer Note -->
  <text x="600" y="810" text-anchor="middle" font-size="12" fill="#666">Designed adhering to clean architecture, component separation, TypeScript strict type safety, and zero external trackers.</text>
</svg>
</body>
</html>
`;

// Diagram 3: Flowchart SVG
const flowchartHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; background: #ffffff; font-family: 'Segoe UI', Arial, sans-serif; display: flex; justify-content: center; align-items: center; padding: 20px; }
  svg { max-width: 100%; height: auto; }
</style>
</head>
<body>
<svg width="1000" height="1200" viewBox="0 0 1000 1200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#234B38"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="500" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#234B38">SYSTEM FLOWCHART — UDAAN CAREER GUIDANCE PORTAL</text>
  <text x="500" y="58" text-anchor="middle" font-size="13" fill="#666">End-to-End User Journey for Underprivileged Students & First-Generation Learners</text>

  <!-- Start Node -->
  <ellipse cx="500" cy="100" rx="90" ry="26" fill="#234B38"/>
  <text x="500" y="106" text-anchor="middle" font-size="14" font-weight="bold" fill="#FAF5E8">START</text>
  <line x1="500" y1="126" x2="500" y2="160" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Open Portal -->
  <rect x="360" y="160" width="280" height="50" rx="5" fill="#FAF5E8" stroke="#234B38" stroke-width="2"/>
  <text x="500" y="182" text-anchor="middle" font-size="13" font-weight="bold" fill="#234B38">Access Udaan Portal</text>
  <text x="500" y="198" text-anchor="middle" font-size="11" fill="#666">Select Language: English / हिन्दी / मराठी</text>
  <line x1="500" y1="210" x2="500" y2="240" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Choose Action (Decision Diamond) -->
  <polygon points="500,240 680,290 500,340 320,290" fill="#EBF3EE" stroke="#234B38" stroke-width="2"/>
  <text x="500" y="286" text-anchor="middle" font-size="13" font-weight="bold" fill="#234B38">Choose Guidance Pathway?</text>
  <text x="500" y="302" text-anchor="middle" font-size="10" fill="#666">(Direct Browse or Assessment)</text>

  <!-- Branches -->
  <!-- Branch 1: Guided Career Assessment (Left) -->
  <line x1="320" y1="290" x2="180" y2="290" stroke="#234B38" stroke-width="2"/>
  <line x1="180" y1="290" x2="180" y2="380" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="230" y="282" font-size="11" font-weight="bold" fill="#C66B4E">Assessment</text>

  <rect x="60" y="380" width="240" height="60" rx="4" fill="#FAF5E8" stroke="#E7C875" stroke-width="2"/>
  <text x="180" y="405" text-anchor="middle" font-size="12" font-weight="bold" fill="#303832">Take 6-Step Career Quiz</text>
  <text x="180" y="423" text-anchor="middle" font-size="10" fill="#666">Grade, Interests, Budget, Domicile</text>
  <line x1="180" y1="440" x2="180" y2="480" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="60" y="480" width="240" height="60" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2"/>
  <text x="180" y="503" text-anchor="middle" font-size="12" font-weight="bold" fill="#234B38">Algorithmic Scoring Engine</text>
  <text x="180" y="521" text-anchor="middle" font-size="10" fill="#666">Match Careers & Low-Cost Routes</text>

  <!-- Branch 2: Explore Careers Directly (Center-Left) -->
  <line x1="420" y1="318" x2="420" y2="380" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="430" y="350" font-size="11" font-weight="bold" fill="#234B38">Careers</text>

  <rect x="310" y="380" width="220" height="60" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2"/>
  <text x="420" y="405" text-anchor="middle" font-size="12" font-weight="bold" fill="#234B38">Career Explorer Directory</text>
  <text x="420" y="423" text-anchor="middle" font-size="10" fill="#666">Filter by 9 Domains & Vocational</text>
  <line x1="420" y1="440" x2="420" y2="480" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="310" y="480" width="220" height="60" rx="4" fill="#FAF5E8" stroke="#E7C875" stroke-width="2"/>
  <text x="420" y="503" text-anchor="middle" font-size="12" font-weight="bold" fill="#303832">Inspect Reality-Check Card</text>
  <text x="420" y="521" text-anchor="middle" font-size="10" fill="#666">Govt College Fees & Salary Range</text>

  <!-- Branch 3: Scholarships & Exams (Center-Right) -->
  <line x1="580" y1="318" x2="580" y2="380" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="590" y="350" font-size="11" font-weight="bold" fill="#234B38">Scholarships</text>

  <rect x="550" y="380" width="200" height="60" rx="4" fill="#FAF5E8" stroke="#E7C875" stroke-width="2"/>
  <text x="650" y="405" text-anchor="middle" font-size="12" font-weight="bold" fill="#303832">Scholarship Finder</text>
  <text x="650" y="423" text-anchor="middle" font-size="10" fill="#666">MahaDBT & Central NSP Portals</text>
  <line x1="650" y1="440" x2="650" y2="480" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="550" y="480" width="200" height="60" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2"/>
  <text x="650" y="503" text-anchor="middle" font-size="12" font-weight="bold" fill="#234B38">Document Checklist</text>
  <text x="650" y="521" text-anchor="middle" font-size="10" fill="#666">Income, Domicile, Caste Certs</text>

  <!-- Branch 4: Verified Mentorship (Right) -->
  <line x1="680" y1="290" x2="860" y2="290" stroke="#234B38" stroke-width="2"/>
  <line x1="860" y1="290" x2="860" y2="380" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="730" y="282" font-size="11" font-weight="bold" fill="#C66B4E">Mentorship</text>

  <rect x="760" y="380" width="200" height="60" rx="4" fill="#F6ECE8" stroke="#C66B4E" stroke-width="2"/>
  <text x="860" y="405" text-anchor="middle" font-size="12" font-weight="bold" fill="#C66B4E">Mentor Directory</text>
  <text x="860" y="423" text-anchor="middle" font-size="10" fill="#666">Police Verified Volunteers</text>
  <line x1="860" y1="440" x2="860" y2="480" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Decision: Is Student a Minor? -->
  <polygon points="860,480 940,515 860,550 780,515" fill="#FAF5E8" stroke="#C66B4E" stroke-width="1.8"/>
  <text x="860" y="512" text-anchor="middle" font-size="10" font-weight="bold" fill="#C66B4E">Under 18 Years?</text>
  <line x1="940" y1="515" x2="975" y2="515" stroke="#C66B4E" stroke-width="1.5"/>
  <line x1="975" y1="515" x2="975" y2="580" stroke="#C66B4E" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="945" y="508" font-size="10" font-weight="bold" fill="#C66B4E">Yes</text>

  <rect x="880" y="580" width="110" height="45" rx="3" fill="#F6ECE8" stroke="#C66B4E" stroke-width="1.5"/>
  <text x="935" y="600" text-anchor="middle" font-size="10" font-weight="bold" fill="#C66B4E">Require Guardian</text>
  <text x="935" y="614" text-anchor="middle" font-size="9" fill="#303832">Consent Notice</text>

  <line x1="860" y1="550" x2="860" y2="650" stroke="#234B38" stroke-width="2"/>
  <line x1="935" y1="625" x2="935" y2="650" stroke="#234B38" stroke-width="1.5"/>
  <line x1="935" y1="650" x2="860" y2="650" stroke="#234B38" stroke-width="1.5"/>

  <!-- Convergence to Action Plan / Roadmap -->
  <line x1="180" y1="540" x2="180" y2="700" stroke="#234B38" stroke-width="2"/>
  <line x1="180" y1="700" x2="500" y2="700" stroke="#234B38" stroke-width="2"/>

  <line x1="420" y1="540" x2="420" y2="700" stroke="#234B38" stroke-width="2"/>
  <line x1="650" y1="540" x2="650" y2="700" stroke="#234B38" stroke-width="2"/>

  <line x1="860" y1="650" x2="860" y2="700" stroke="#234B38" stroke-width="2"/>
  <line x1="860" y1="700" x2="500" y2="700" stroke="#234B38" stroke-width="2"/>

  <line x1="500" y1="700" x2="500" y2="740" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Convergence Box: Save to Roadmap -->
  <rect x="350" y="740" width="300" height="60" rx="5" fill="#EBF3EE" stroke="#234B38" stroke-width="2.5"/>
  <text x="500" y="765" text-anchor="middle" font-size="13" font-weight="bold" fill="#234B38">Student Action Roadmap</text>
  <text x="500" y="783" text-anchor="middle" font-size="11" fill="#666">Milestones, Key Deadlines & Document Checklist</text>
  <line x1="500" y1="800" x2="500" y2="840" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Offline Download / Print Decision -->
  <polygon points="500,840 660,885 500,930 340,885" fill="#FAF5E8" stroke="#E7C875" stroke-width="2"/>
  <text x="500" y="880" text-anchor="middle" font-size="12" font-weight="bold" fill="#303832">Need Offline / Print Guide?</text>
  <text x="500" y="896" text-anchor="middle" font-size="10" fill="#666">(Low connectivity support)</text>

  <!-- Offline Route -->
  <line x1="660" y1="885" x2="780" y2="885" stroke="#234B38" stroke-width="2"/>
  <line x1="780" y1="885" x2="780" y2="950" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="700" y="878" font-size="11" font-weight="bold" fill="#234B38">Yes</text>

  <rect x="690" y="950" width="180" height="50" rx="4" fill="#EBF3EE" stroke="#234B38" stroke-width="2"/>
  <text x="780" y="972" text-anchor="middle" font-size="12" font-weight="bold" fill="#234B38">Print / Export PDF</text>
  <text x="780" y="988" text-anchor="middle" font-size="10" fill="#666">Save to LocalStorage</text>

  <!-- Connect back to End -->
  <line x1="780" y1="1000" x2="780" y2="1050" stroke="#234B38" stroke-width="2"/>
  <line x1="780" y1="1050" x2="500" y2="1050" stroke="#234B38" stroke-width="2"/>

  <!-- Online Direct End -->
  <line x1="500" y1="930" x2="500" y2="1050" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="510" y="960" font-size="11" font-weight="bold" fill="#666">No</text>

  <!-- End Node -->
  <ellipse cx="500" cy="1100" rx="90" ry="26" fill="#234B38"/>
  <text x="500" y="1106" text-anchor="middle" font-size="14" font-weight="bold" fill="#FAF5E8">END / SAVED</text>
</svg>
</body>
</html>
`;

// Diagram 4: Activity Diagram SVG
const activityDiagramHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; background: #ffffff; font-family: 'Segoe UI', Arial, sans-serif; display: flex; justify-content: center; align-items: center; padding: 20px; }
  svg { max-width: 100%; height: auto; }
</style>
</head>
<body>
<svg width="1100" height="950" viewBox="0 0 1100 950" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#234B38"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="550" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#234B38">UML ACTIVITY DIAGRAM — GUIDED CAREER & AFFORDABILITY FLOW</text>
  <text x="550" y="58" text-anchor="middle" font-size="13" fill="#666">Swimlane Process: Student, Frontend Interface, Recommendation Engine & Portal Gateways</text>

  <!-- Swimlanes Headers -->
  <rect x="40" y="80" width="240" height="40" fill="#234B38"/>
  <text x="160" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="#FAF5E8">STUDENT / USER</text>

  <rect x="280" y="80" width="280" height="40" fill="#303832"/>
  <text x="420" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="#FAF5E8">UDAAN WEB INTERFACE</text>

  <rect x="560" y="80" width="280" height="40" fill="#234B38"/>
  <text x="700" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="#FAF5E8">ASSESSMENT & MATCH ENGINE</text>

  <rect x="840" y="80" width="220" height="40" fill="#303832"/>
  <text x="950" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="#FAF5E8">MAHADBT / NSP PORTAL</text>

  <!-- Swimlane Dividers -->
  <line x1="280" y1="120" x2="280" y2="880" stroke="#ccc" stroke-dasharray="5"/>
  <line x1="560" y1="120" x2="560" y2="880" stroke="#ccc" stroke-dasharray="5"/>
  <line x1="840" y1="120" x2="840" y2="880" stroke="#ccc" stroke-dasharray="5"/>

  <!-- Start Circle -->
  <circle cx="160" cy="150" r="14" fill="#234B38"/>
  <line x1="160" y1="164" x2="160" y2="200" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 1: Opens Portal -->
  <rect x="80" y="200" width="160" height="45" rx="10" fill="#FAF5E8" stroke="#234B38" stroke-width="1.8"/>
  <text x="160" y="226" text-anchor="middle" font-size="12" fill="#303832">Opens Career Portal</text>
  <line x1="240" y1="222" x2="340" y2="222" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 2: Render Multi-lingual Home -->
  <rect x="340" y="200" width="160" height="45" rx="10" fill="#EBF3EE" stroke="#234B38" stroke-width="1.8"/>
  <text x="420" y="222" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">Render UI in Selected</text>
  <text x="420" y="236" text-anchor="middle" font-size="11" fill="#234B38">Language (EN/HI/MR)</text>
  <line x1="420" y1="245" x2="420" y2="280" stroke="#234B38" stroke-width="2"/>
  <line x1="420" y1="280" x2="160" y2="280" stroke="#234B38" stroke-width="2"/>
  <line x1="160" y1="280" x2="160" y2="310" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 3: Submits Quiz Inputs -->
  <rect x="75" y="310" width="170" height="50" rx="10" fill="#FAF5E8" stroke="#234B38" stroke-width="1.8"/>
  <text x="160" y="332" text-anchor="middle" font-size="11" font-weight="bold" fill="#303832">Fills Class, Interest &amp;</text>
  <text x="160" y="347" text-anchor="middle" font-size="11" fill="#C66B4E">Budget Bracket (&lt;25k)</text>
  <line x1="245" y1="335" x2="620" y2="335" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 4: Engine Filters Pathways -->
  <rect x="620" y="310" width="160" height="50" rx="10" fill="#EBF3EE" stroke="#234B38" stroke-width="1.8"/>
  <text x="700" y="332" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">Filter Feasible Routes</text>
  <text x="700" y="347" text-anchor="middle" font-size="11" fill="#234B38">&amp; Govt College Seats</text>
  <line x1="780" y1="335" x2="880" y2="335" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 5: Cross-check Scholarships -->
  <rect x="880" y="310" width="140" height="50" rx="10" fill="#FAF5E8" stroke="#E7C875" stroke-width="1.8"/>
  <text x="950" y="332" text-anchor="middle" font-size="11" font-weight="bold" fill="#303832">Query MahaDBT</text>
  <text x="950" y="347" text-anchor="middle" font-size="11" fill="#666">&amp; NSP Criteria</text>
  <line x1="950" y1="360" x2="950" y2="420" stroke="#234B38" stroke-width="2"/>
  <line x1="950" y1="420" x2="780" y2="420" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 6: Correlate Recommendations -->
  <rect x="620" y="395" width="160" height="50" rx="10" fill="#EBF3EE" stroke="#234B38" stroke-width="1.8"/>
  <text x="700" y="417" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">Generate Primary +</text>
  <text x="700" y="432" text-anchor="middle" font-size="11" fill="#234B38">Vocational Alternative</text>
  <line x1="620" y1="420" x2="490" y2="420" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 7: Display Match Cards -->
  <rect x="330" y="395" width="160" height="50" rx="10" fill="#FAF5E8" stroke="#234B38" stroke-width="1.8"/>
  <text x="410" y="417" text-anchor="middle" font-size="11" font-weight="bold" fill="#303832">Display Reality Cards &amp;</text>
  <text x="410" y="432" text-anchor="middle" font-size="11" fill="#666">Fee Breakdown</text>
  <line x1="330" y1="420" x2="230" y2="420" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Decision: Is budget sufficient? -->
  <polygon points="160,490 220,520 160,550 100,520" fill="#FAF5E8" stroke="#C66B4E" stroke-width="1.8"/>
  <text x="160" y="518" text-anchor="middle" font-size="10" font-weight="bold" fill="#C66B4E">Affordable?</text>
  <line x1="160" y1="445" x2="160" y2="490" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- If No: Pick Vocational / ITI Alternative -->
  <line x1="100" y1="520" x2="60" y2="520" stroke="#C66B4E" stroke-width="2"/>
  <line x1="60" y1="520" x2="60" y2="600" stroke="#C66B4E" stroke-width="2"/>
  <line x1="60" y1="600" x2="85" y2="600" stroke="#C66B4E" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="65" y="512" font-size="10" font-weight="bold" fill="#C66B4E">No</text>

  <rect x="85" y="580" width="150" height="45" rx="10" fill="#F6ECE8" stroke="#C66B4E" stroke-width="1.8"/>
  <text x="160" y="600" text-anchor="middle" font-size="10" font-weight="bold" fill="#C66B4E">Select Free Govt ITI /</text>
  <text x="160" y="614" text-anchor="middle" font-size="10" fill="#303832">Apprenticeship Route</text>

  <!-- If Yes: Select Degree Route -->
  <line x1="220" y1="520" x2="250" y2="520" stroke="#234B38" stroke-width="2"/>
  <line x1="250" y1="520" x2="250" y2="600" stroke="#234B38" stroke-width="2"/>
  <line x1="250" y1="600" x2="235" y2="600" stroke="#234B38" stroke-width="2"/>
  <text x="225" y="512" font-size="10" font-weight="bold" fill="#234B38">Yes</text>

  <!-- Join into Roadmap -->
  <line x1="160" y1="625" x2="160" y2="670" stroke="#234B38" stroke-width="2"/>
  <line x1="160" y1="670" x2="330" y2="670" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 8: Add to Roadmap -->
  <rect x="330" y="645" width="160" height="50" rx="10" fill="#EBF3EE" stroke="#234B38" stroke-width="1.8"/>
  <text x="410" y="667" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">Save Step-by-Step</text>
  <text x="410" y="682" text-anchor="middle" font-size="11" fill="#234B38">Checklist to Roadmap</text>
  <line x1="490" y1="670" x2="620" y2="670" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 9: LocalStorage Cache -->
  <rect x="620" y="645" width="160" height="50" rx="10" fill="#FAF5E8" stroke="#E7C875" stroke-width="1.8"/>
  <text x="700" y="667" text-anchor="middle" font-size="11" font-weight="bold" fill="#303832">Persist in LocalStorage</text>
  <text x="700" y="682" text-anchor="middle" font-size="11" fill="#666">(Enable Offline Access)</text>
  <line x1="700" y1="695" x2="700" y2="740" stroke="#234B38" stroke-width="2"/>
  <line x1="700" y1="740" x2="490" y2="740" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Activity 10: Export Printable Plan -->
  <rect x="330" y="715" width="160" height="50" rx="10" fill="#EBF3EE" stroke="#234B38" stroke-width="1.8"/>
  <text x="410" y="737" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">Export PDF / Print</text>
  <text x="410" y="752" text-anchor="middle" font-size="11" fill="#234B38">Offline Action Plan</text>
  <line x1="410" y1="765" x2="410" y2="800" stroke="#234B38" stroke-width="2"/>
  <line x1="410" y1="800" x2="160" y2="800" stroke="#234B38" stroke-width="2"/>
  <line x1="160" y1="800" x2="160" y2="830" stroke="#234B38" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- End Encircled Dot -->
  <circle cx="160" cy="850" r="14" fill="#fff" stroke="#234B38" stroke-width="2"/>
  <circle cx="160" cy="850" r="8" fill="#234B38"/>
</svg>
</body>
</html>
`;

// Diagram 5: Sequence Diagram SVG
const sequenceDiagramHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; background: #ffffff; font-family: 'Segoe UI', Arial, sans-serif; display: flex; justify-content: center; align-items: center; padding: 20px; }
  svg { max-width: 100%; height: auto; }
</style>
</head>
<body>
<svg width="1150" height="900" viewBox="0 0 1150 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#234B38"/>
    </marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#C66B4E"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="575" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#234B38">UML SEQUENCE DIAGRAM — CAREER EVALUATION & SCHOLARSHIP FLOW</text>
  <text x="575" y="58" text-anchor="middle" font-size="13" fill="#666">Synchronous &amp; Asynchronous Message Exchanges Across Udaan Components</text>

  <!-- Lifeline Headers -->
  <!-- 1. Student User -->
  <rect x="50" y="80" width="130" height="40" rx="4" fill="#234B38"/>
  <text x="115" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="#FAF5E8">Student (User)</text>
  <line x1="115" y1="120" x2="115" y2="820" stroke="#234B38" stroke-dasharray="4"/>

  <!-- 2. Udaan React UI -->
  <rect x="250" y="80" width="150" height="40" rx="4" fill="#303832"/>
  <text x="325" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="#FAF5E8">UdaanWebInterface</text>
  <line x1="325" y1="120" x2="325" y2="820" stroke="#303832" stroke-dasharray="4"/>

  <!-- 3. CareerQuizEngine -->
  <rect x="470" y="80" width="150" height="40" rx="4" fill="#234B38"/>
  <text x="545" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="#FAF5E8">CareerQuizEngine</text>
  <line x1="545" y1="120" x2="545" y2="820" stroke="#234B38" stroke-dasharray="4"/>

  <!-- 4. ScholarshipService -->
  <rect x="690" y="80" width="160" height="40" rx="4" fill="#FAF5E8" stroke="#E7C875" stroke-width="2"/>
  <text x="770" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="#303832">ScholarshipService</text>
  <line x1="770" y1="120" x2="770" y2="820" stroke="#E7C875" stroke-dasharray="4"/>

  <!-- 5. LocalRoadmapStore -->
  <rect x="910" y="80" width="170" height="40" rx="4" fill="#F6ECE8" stroke="#C66B4E" stroke-width="2"/>
  <text x="995" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="#C66B4E">LocalRoadmapStore</text>
  <line x1="995" y1="120" x2="995" y2="820" stroke="#C66B4E" stroke-dasharray="4"/>

  <!-- Message 1 -->
  <line x1="115" y1="150" x2="325" y2="150" stroke="#234B38" stroke-width="1.8" marker-end="url(#arrow)"/>
  <text x="220" y="142" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">1. Start Career Assessment</text>

  <!-- Message 2 -->
  <line x1="325" y1="180" x2="115" y2="180" stroke="#234B38" stroke-width="1.5" stroke-dasharray="3" marker-end="url(#arrow)"/>
  <text x="220" y="172" text-anchor="middle" font-size="10" fill="#666">2. Render 6 Guided Questions (Grade, Budget)</text>

  <!-- Message 3 -->
  <line x1="115" y1="220" x2="325" y2="220" stroke="#234B38" stroke-width="1.8" marker-end="url(#arrow)"/>
  <text x="220" y="212" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">3. Submit Answers (Class 10, Low Budget)</text>

  <!-- Message 4 -->
  <line x1="325" y1="260" x2="545" y2="260" stroke="#234B38" stroke-width="1.8" marker-end="url(#arrow)"/>
  <text x="435" y="252" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">4. evaluateProfile(answers)</text>

  <!-- Message 5 -->
  <line x1="545" y1="300" x2="770" y2="300" stroke="#234B38" stroke-width="1.8" marker-end="url(#arrow)"/>
  <text x="655" y="292" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">5. queryApplicableSchemes(State: MH, Income: &lt;2.5L)</text>

  <!-- Message 6: Return MahaDBT & NSP -->
  <line x1="770" y1="340" x2="545" y2="340" stroke="#234B38" stroke-width="1.5" stroke-dasharray="3" marker-end="url(#arrow)"/>
  <text x="655" y="332" text-anchor="middle" font-size="10" fill="#234B38">6. return [MahaDBT Post-Matric, NSP Minority/SC-ST]</text>

  <!-- ALT FRAME: Low Budget vs Standard -->
  <rect x="70" y="380" width="980" height="230" fill="none" stroke="#303832" stroke-width="1.5"/>
  <path d="M 70 380 L 140 380 L 150 395 L 70 395 Z" fill="#303832"/>
  <text x="105" y="392" text-anchor="middle" font-size="10" font-weight="bold" fill="#FAF5E8">alt</text>
  <text x="170" y="392" font-size="10" font-weight="bold" fill="#303832">[Budget Constraint: Annual Fees &lt; ₹20,000]</text>

  <!-- Alt branch 1 -->
  <line x1="545" y1="420" x2="325" y2="420" stroke="#C66B4E" stroke-width="1.8" marker-end="url(#arrow-red)"/>
  <text x="435" y="412" text-anchor="middle" font-size="10" font-weight="bold" fill="#C66B4E">7a. suggestVocationalRoute(Govt ITI / Polytechnic + 100% Fee Waiver)</text>

  <line x1="325" y1="450" x2="115" y2="450" stroke="#C66B4E" stroke-width="1.8" marker-end="url(#arrow-red)"/>
  <text x="220" y="442" text-anchor="middle" font-size="10" font-weight="bold" fill="#C66B4E">8a. Show Zero-Debt Educational Pathway</text>

  <!-- Alt Divider -->
  <line x1="70" y1="480" x2="1050" y2="480" stroke="#888" stroke-dasharray="4"/>
  <text x="90" y="495" font-size="10" font-weight="bold" fill="#666">[else: Standard College Pathway]</text>

  <line x1="545" y1="520" x2="325" y2="520" stroke="#234B38" stroke-width="1.8" marker-end="url(#arrow)"/>
  <text x="435" y="512" text-anchor="middle" font-size="10" fill="#234B38">7b. suggestDegreeRoute(Govt/Aided College + MahaDBT EBC Subsidy)</text>

  <line x1="325" y1="550" x2="115" y2="550" stroke="#234B38" stroke-width="1.5" stroke-dasharray="3" marker-end="url(#arrow)"/>
  <text x="220" y="542" text-anchor="middle" font-size="10" fill="#234B38">8b. Show Stepwise Degree Timeline</text>

  <!-- Message 9: Add to Roadmap -->
  <line x1="115" y1="650" x2="325" y2="650" stroke="#234B38" stroke-width="1.8" marker-end="url(#arrow)"/>
  <text x="220" y="642" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">9. Click 'Add Pathway to My Roadmap'</text>

  <!-- Message 10: Store in LocalStorage -->
  <line x1="325" y1="690" x2="995" y2="690" stroke="#234B38" stroke-width="1.8" marker-end="url(#arrow)"/>
  <text x="660" y="682" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">10. saveMilestoneChecklist(items, offlineFlag=true)</text>

  <!-- Message 11: Ack -->
  <line x1="995" y1="730" x2="325" y2="730" stroke="#234B38" stroke-width="1.5" stroke-dasharray="3" marker-end="url(#arrow)"/>
  <text x="660" y="722" text-anchor="middle" font-size="10" fill="#666">11. roadmapSaved(success=true)</text>

  <!-- Message 12: Notification -->
  <line x1="325" y1="770" x2="115" y2="770" stroke="#234B38" stroke-width="1.8" marker-end="url(#arrow)"/>
  <text x="220" y="762" text-anchor="middle" font-size="11" font-weight="bold" fill="#234B38">12. Render Toast: 'Saved to Roadmap! Printable Offline'</text>
</svg>
</body>
</html>
`;

async function generateAllDiagrams() {
  console.log('Rendering 5 High-Resolution Vector Diagrams via Chrome Puppeteer...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const diagrams = [
    { name: '01_er_diagram.png', html: erDiagramHtml, width: 1250, height: 900 },
    { name: '02_class_diagram.png', html: classDiagramHtml, width: 1250, height: 950 },
    { name: '03_flowchart.png', html: flowchartHtml, width: 1050, height: 1250 },
    { name: '04_activity_diagram.png', html: activityDiagramHtml, width: 1150, height: 1000 },
    { name: '05_sequence_diagram.png', html: sequenceDiagramHtml, width: 1200, height: 950 }
  ];

  for (const d of diagrams) {
    const page = await browser.newPage();
    await page.setViewport({ width: d.width, height: d.height, deviceScaleFactor: 2 });
    await page.setContent(d.html, { waitUntil: 'networkidle0' });
    const outPath = path.join(DIAGRAMS_DIR, d.name);
    await page.screenshot({ path: outPath, omitBackground: false });
    console.log(`Generated: ${outPath}`);
    await page.close();
  }

  await browser.close();
  console.log('All 5 diagrams rendered successfully!');
}

generateAllDiagrams().catch(console.error);
