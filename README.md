# Udaan India — Online Career Guidance Portal for Underprivileged Students

> **“Your dreams deserve a direction.”**

### 🎓 Academic Project Information
- **Project Topic:** Online Career Guidance Portal for Underprivileged Students
- **Candidate Name:** **Zeeshaan Shaikh**
- **Degree / Class:** Bachelor of Science in Information Technology (T.Y.BSc. IT), Semester-V
- **Academic Year:** 2026 – 2027
- **Internal Project Guide:** **Ms. Kohinoor Khan**
- **Institution:** Chembur Trombay Education Society’s **N. G. Acharya & D. K. Marathe College of Arts, Science & Commerce**, Chembur, Mumbai 400 071
- **Affiliation:** University of Mumbai
- **Program:** Community Engagement Program (CEP) / Final Year IT Capstone

---

## 📌 Executive Summary

**Udaan India** is a modern, production-grade, open-access career guidance portal designed specifically for students from underprivileged backgrounds, rural communities, municipal schools, and low-income households across India, with a dedicated focus on Maharashtra (Chembur, Govandi, Mankhurd, and beyond).

Unlike commercial counselling platforms that charge ₹3,000–₹25,000 and push students exclusively into expensive private engineering or medical colleges, Udaan provides:
1. **Full Indian Education System Mapping:** Classes 9–10, 11–12 (Arts/Commerce/Science), ITI vocational trades, Polytechnic diplomas, BA/BSc/BCom, B.Sc IT, BCA, B.Tech, Nursing, Pharmacy, and Competitive Civil Service Pathways.
2. **Reality-Check College Fees:** Accurate course costs distinguishing low-cost Government institutions from private colleges, alongside realistic entry-level versus senior salary ranges (with explicit anti-guarantee disclaimers).
3. **Dedicated MahaDBT & Central NSP Scholarship Discovery:** Direct integration with Maharashtra state welfare schemes (e.g. Rajarshi Chhatrapati Shahu Maharaj Tuition Fee Concession, Dr. Punjabrao Deshmukh Hostel Allowance) and Central National Scholarship Portal schemes with complete document readiness checklists.
4. **Adaptive 6-Step Career Quiz:** An intelligent assessment engine that takes academic status, subject interests, and annual household budget into account to recommend zero-debt government college pathways and vocational alternatives.
5. **Safeguarded Human Mentorship:** A directory of verified volunteer counsellors and professionals with mandatory parental/guardian consent verification for minors (< 18 years).
6. **Multilingual & Assistive Support:** English, Hindi (हिन्दी), and Marathi (मराठी) localization, browser Web Speech narration, and an interactive educational glossary ("Jargon Buster").
7. **Offline Study Action Plan:** LocalStorage caching and one-click printable PDF roadmap export for students with limited or intermittent connectivity.

---

## 🚀 Live Demo & Repository

- **GitHub Repository:** [https://github.com/OVAIS69/Udaan](https://github.com/OVAIS69/Udaan)
- **Primary Tech Stack:** React 19, TypeScript, Vite, CSS3 Art-Directed Palette, Lucide-React, LocalStorage API.

---

## ⚡ Deployment to Vercel (Step-by-Step)

You can deploy Udaan to Vercel either via the **Vercel Dashboard (Recommended)** or via the **Command Line**.

### Method 1: Deploy via Vercel Web Dashboard (Easiest & Automatic CI/CD)
1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account (`OVAIS69`).
2. Click **"Add New..."** → **"Project"**.
3. In the list of GitHub repositories, find **`Udaan`** (or `OVAIS69/Udaan`) and click **"Import"**.
4. Configure the project:
   - **Framework Preset:** `Vite` (automatically detected)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**.
6. In about 30–45 seconds, your application will be live at `https://udaan-production.vercel.app` (or your assigned Vercel URL).

### Method 2: Deploy via Vercel CLI (Terminal)
Open your terminal inside the project directory (`c:\Users\Ovais\Downloads\udaan`) and run:

```bash
# 1. Install Vercel CLI globally (if not installed)
npm install -g vercel

# 2. Log in to Vercel
vercel login

# 3. Deploy to Preview
vercel

# 4. Deploy to Production
vercel --prod
```

---

## 🎤 Viva Voce Project Defense Guide (Page-by-Page Explanation)

When explaining this project to the External Examiner, Internal Guide, or Viva panel, follow this structured walkthrough:

```
                  ┌─────────────────────────────────────────┐
                  │       UDAAN ARCHITECTURE OVERVIEW       │
                  └─────────────────────────────────────────┘
                                       │
     ┌───────────────────┬─────────────┴───────┬───────────────────┐
     ▼                   ▼                     ▼                   ▼
[Career Explorer]  [Scholarships]       [6-Step Quiz]      [Mentors & Safeguard]
  - 9 Domains        - MahaDBT & NSP      - Budget Filter    - Police Verified
  - Govt vs Private  - Income Limits      - Zero-Debt Paths  - Minor Consent Modal
  - Salary Context   - Doc Checklist      - ITI Alternative  - Shielded Contact Info
     │                   │                     │                   │
     └───────────────────┴─────────────┬───────┴───────────────────┘
                                       ▼
                       [Student Action Roadmap & PDF Export]
                       (Offline LocalStorage + Clean Print Layout)
```

### 1. Introduction & Problem Statement (Cover & Chapter 1)
* **What is the core problem?**
  *"Career guidance in India is a privilege of the wealthy. Private counsellors charge thousands of rupees, pushing students toward expensive private colleges. Rural and municipal school students, especially first-generation learners in areas like Govandi and Chembur, lack awareness of government college options, ITI trades, and state scholarships like MahaDBT."*
* **What is Udaan's mission?**
  *"Udaan bridges this digital divide by offering a completely free, multilingual, and reality-checked guidance portal that prioritizes affordability, government schemes, and immediate vocational viability."*

### 2. Home Page & Visual Art Direction (`/`)
* **Key Design Decisions:**
  - Designed with an intentional Indian education palette: **Forest Green (`#234B38`)**, **Warm Ivory (`#F8F6EF`)**, **Terracotta (`#C66B4E`)**, and **Charcoal (`#303832`)**.
  - No AI-generated clutter, no heavy corporate gradients.
  - Features real Indian educational pathways starting directly from Class 9-10 up to competitive civil service examinations.
  - Multi-language switcher (English, Hindi, Marathi) with persistent state.
  - Audio reader integration using browser Web Speech API to assist parents with low literacy.

### 3. Career Explorer (`Careers` Tab)
* **Examiner Question:** *"How does your career explorer differ from sites like Shiksha or Careers360?"*
* **Your Answer:**
  - *"Commercial sites promote sponsored private universities. Udaan provides an honest **Reality Check** for every career."*
  - *"We show the **Government College Route** (which costs a fraction of private tuition), exact source and date of fees, entrance exam requirements, and a realistic starting salary range rather than inflated package promises."*
  - *"We feature 9 full domains, explicitly highlighting vocational trades (Electrician, Technician, Healthcare Assistant) alongside high-tech careers."*

### 4. Scholarship Discovery & MahaDBT Integration (`Scholarships` Tab)
* **Examiner Question:** *"How do you handle scholarships and prevent fraud?"*
* **Your Answer:**
  - *"We focus strictly on official portals: the **National Scholarship Portal (NSP)** and Maharashtra's **MahaDBT** (`mahadbt.maharashtra.gov.in`)."*
  - *"Every opportunity displays its verification date, family income ceiling, category eligibility (SC/ST/OBC/EWS), and an interactive **Document Checklist** so students know exactly what certificates they need before visiting the Tahsildar office."*
  - *"Sample/demonstration records are transparently marked with an amber badge to uphold academic and ethical integrity."*

### 5. Personalized Career Quiz & Low-Cost Route Engine (`Career Quiz` Tab)
* **Examiner Question:** *"How does the recommendation algorithm work?"*
* **Your Answer:**
  - *"It is a 6-step diagnostic evaluation capturing current qualification, favorite subjects, sector interest, budget bracket, domicile state, and preferred mode."*
  - *"If a student selects a low budget (e.g., < ₹25,000/year), our scoring algorithm automatically generates a **Zero-Debt Alternative Pathway** (such as Government ITI followed by lateral polytechnic admission) so financial constraints never stop their education."*

### 6. Mentorship & Minor Safeguarding (`Mentors` Tab)
* **Examiner Question:** *"How do you protect young students when interacting with mentors?"*
* **Your Answer:**
  - *"Child safeguarding is a core pillar. All mentors are verified volunteers, educators, and working professionals."*
  - *"For any student under 18 years of age, our system triggers a mandatory **Guardian Consent Modal** requiring explicit parental acknowledgment before any query or session can be requested."*
  - *"Personal phone numbers and sensitive data are strictly shielded."*

### 7. Student Action Roadmap & Offline Tools (`My Roadmap` Tab)
* **Examiner Question:** *"How do students in low-connectivity areas use this?"*
* **Your Answer:**
  - *"Students can add any career pathway to their personal roadmap. Milestones are saved directly to browser **LocalStorage**, meaning zero data loss even on page refresh."*
  - *"The portal includes a specialized **Print / PDF Export** stylesheet that generates a clean, ink-friendly offline study plan that students can take to their school or library."*

---

## 📂 Project Directory Structure

```
udaan/
├── index.html                           # Root HTML with Google Fonts (Manrope & Inter)
├── package.json                         # Dependencies (React 19, TypeScript, Lucide, Docx)
├── vite.config.ts                       # Vite bundler configuration
├── Udaan_Project_Viva_Documentation.docx# Complete 2MB Native Word Project Report
├── generate_final_word_doc.mjs          # Word Document automation generator
├── generate_diagrams.mjs                # Puppeteer vector UML & architecture diagram renderer
├── generated_diagrams/                  # Rendered High-Resolution Diagrams
│   ├── 01_er_diagram.png               # Entity Relationship Diagram
│   ├── 02_class_diagram.png            # UML Class Architecture Diagram
│   ├── 03_flowchart.png                # System Flowchart
│   ├── 04_activity_diagram.png         # Activity Diagram with Swimlanes
│   └── 05_sequence_diagram.png         # Sequence Interaction Diagram
└── src/
    ├── App.tsx                          # Core Application Controller & State
    ├── main.tsx                         # React entrypoint
    ├── components/                      # Modular UI Components
    │   ├── Header.tsx                   # Sleek Horizontal Navigation & Mobile Drawer
    │   ├── Hero.tsx                     # Editorial Hero & Key Statistics
    │   ├── CareerExplorer.tsx           # 9 Domains, Search, Compare & Reality Check
    │   ├── ScholarshipFinder.tsx        # MahaDBT + Central NSP + Eligibility Filters
    │   ├── ExamGuide.tsx                # Entrance Exams & Admissions Timeline
    │   ├── PathwayExplorer.tsx          # Class 9 to Postgrad Interactive Hierarchy
    │   ├── CareerQuiz.tsx               # 6-Step Guided Assessment & Low-Cost Matcher
    │   ├── MentorDirectory.tsx          # Verified Mentors & Minor Safeguarding Modal
    │   ├── StudentRoadmap.tsx           # Action Checklist & Offline PDF Generator
    │   ├── SavedBookmarks.tsx           # Bookmarks & Quick Access Storage
    │   ├── GlossaryModal.tsx            # Jargon Buster (DBT, EWS, CAP, NIOS)
    │   └── Toast.tsx                    # Accessible User Feedback Notifications
    └── data/                            # Verified Indian Education Datasets
        ├── careersData.ts               # Career Pathways with Govt Fee Reality Checks
        ├── scholarshipsData.ts          # MahaDBT & NSP Scholarship Schemes
        ├── examsData.ts                 # Entrance Exams & Agency Portals
        ├── mentorsData.ts               # Verified Volunteers & Safeguarding Criteria
        └── translations.ts              # English, Hindi & Marathi UI Dictionaries
```

---

## 📄 Formal Word Documentation (`.docx`)

The project report is compiled into a university-format Word document:
- **Filename:** `Udaan_Project_Viva_Documentation.docx`
- **Location:** Root repository directory
- **Includes:**
  1. Title Page with College Emblem Logo (CTES N. G. Acharya & D. K. Marathe College)
  2. Official Certificate with all five institutional signature blocks
  3. Student Declaration by **Zeeshaan Shaikh**
  4. Annexure V (Student Feedback Form on CEP with complete rubric checkmarks)
  5. Table of Contents
  6. Chapter 1: Introduction, Existing System, Proposed System, Normal & Geotag Field Photos (Govandi Slums / Chembur)
  7. Chapter 2: Literature Review, Minimum Hardware & Software tables, 12 Community Interview Questions, Data Collection Plan
  8. Chapter 3: Methodology with 5 full-page UML & Architecture diagrams (ER, Class, Flowchart, Activity, Sequence)
  9. Chapter 4: System Modules & Data Design with 6 rendered UI screenshots
  10. Chapter 5: Conclusion, Fieldwork Evidence & Future Recommendations
  11. Chapter 6: Official References & Bibliography

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript check & production build
npm run build

# Preview production build locally
npm run preview
```

***
*Developed by **Zeeshaan Shaikh** (T.Y.BSc. IT, CTES N. G. Acharya & D. K. Marathe College) under the guidance of **Ms. Kohinoor Khan**.*
