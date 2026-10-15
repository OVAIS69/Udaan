import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Ovais\\.gemini\\antigravity\\brain\\47dbd439-ed68-4f12-a5ff-09982e251eae';
const SCREENSHOTS_DIR = path.join(ARTIFACT_DIR, 'audit_screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

async function runAudit() {
  console.log('🚀 Starting Comprehensive Udaan India Audit...');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const networkErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('requestfailed', (req) => {
    networkErrors.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`);
  });

  // Test 1: Desktop View & Initial Load
  console.log('\n--- 1. Testing Desktop Home Render ---');
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  const title = await page.title();
  console.log(`Page Title: "${title}"`);
  console.log(`Initial Console Errors: ${consoleErrors.length}`);
  console.log(`Initial Network Errors: ${networkErrors.length}`);

  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '01_desktop_home.png') });

  // Test 2: Brand Color Verification
  console.log('\n--- 2. Verifying Art-Direction & Brand Color System ---');
  const brandColors = await page.evaluate(() => {
    const style = getComputedStyle(document.documentElement);
    return {
      forestGreen: style.getPropertyValue('--forest-green').trim(),
      warmIvory: style.getPropertyValue('--warm-ivory').trim(),
      terracotta: style.getPropertyValue('--terracotta').trim(),
      charcoal: style.getPropertyValue('--charcoal').trim(),
      mutedMustard: style.getPropertyValue('--muted-mustard').trim()
    };
  });
  console.log('Brand Color Tokens:', brandColors);

  // Test 3: Language Switching (English -> Hindi -> Marathi)
  console.log('\n--- 3. Testing Multilingual System ---');
  await page.select('select[aria-label="Select Language"]', 'hi');
  await new Promise((r) => setTimeout(r, 400));
  const hindiHeading = await page.$eval('h1', (el) => el.innerText);
  console.log(`Hindi H1: "${hindiHeading}"`);

  await page.select('select[aria-label="Select Language"]', 'mr');
  await new Promise((r) => setTimeout(r, 400));
  const marathiHeading = await page.$eval('h1', (el) => el.innerText);
  console.log(`Marathi H1: "${marathiHeading}"`);

  await page.select('select[aria-label="Select Language"]', 'en');
  await new Promise((r) => setTimeout(r, 400));

  // Test 4: Career Explorer & Details Modal
  console.log('\n--- 4. Testing Career Explorer & Detail Modal ---');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const careerBtn = btns.find((b) => b.innerText.trim() === 'Careers');
    if (careerBtn) careerBtn.click();
  });
  await new Promise((r) => setTimeout(r, 500));

  // Search for software
  await page.type('input[placeholder*="Search"]', 'software');
  await new Promise((r) => setTimeout(r, 300));

  // Open first career detail modal
  await page.evaluate(() => {
    const viewBtn = Array.from(document.querySelectorAll('button')).find((b) => b.innerText.includes('View Complete Guide'));
    if (viewBtn) viewBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));
  const modalTitle = await page.$eval('#career-modal-title', (el) => el.innerText);
  console.log(`Opened Career Modal: "${modalTitle}"`);

  // Close modal
  await page.evaluate(() => {
    const closeBtn = document.querySelector('button[aria-label="Close details"]');
    if (closeBtn) closeBtn.click();
  });
  await new Promise((r) => setTimeout(r, 300));

  // Test 5: Scholarships & MahaDBT Filters
  console.log('\n--- 5. Testing Scholarship Discovery & Sourcing ---');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const schBtn = btns.find((b) => b.innerText.trim() === 'Scholarships');
    if (schBtn) schBtn.click();
  });
  await new Promise((r) => setTimeout(r, 500));

  // Filter MahaDBT
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const mahadbtBtn = btns.find((b) => b.innerText.includes('MahaDBT'));
    if (mahadbtBtn) mahadbtBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  // Open document checklist modal
  await page.evaluate(() => {
    const checkBtn = document.querySelector('button.btn-secondary');
    if (checkBtn) checkBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));
  const schModalTitle = await page.$eval('#scholarship-modal-title', (el) => el.innerText);
  console.log(`Opened Scholarship Checklist: "${schModalTitle}"`);

  // Close modal
  await page.evaluate(() => {
    const closeBtn = document.querySelector('button[aria-label="Close"]');
    if (closeBtn) closeBtn.click();
  });
  await new Promise((r) => setTimeout(r, 300));

  // Test 6: Guided Career Assessment Journey
  console.log('\n--- 6. Testing Guided Career Assessment Journey ---');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const quizBtn = btns.find((b) => b.innerText.trim() === 'Career Quiz');
    if (quizBtn) quizBtn.click();
  });
  await new Promise((r) => setTimeout(r, 500));

  // Step through all 6 questions
  for (let s = 1; s <= 5; s++) {
    await page.evaluate(() => {
      const nextBtn = Array.from(document.querySelectorAll('button')).find((b) => b.innerText.includes('Next Step'));
      if (nextBtn) nextBtn.click();
    });
    await new Promise((r) => setTimeout(r, 300));
  }

  // Click Generate Recommendations
  await page.evaluate(() => {
    const genBtn = Array.from(document.querySelectorAll('button')).find((b) => b.innerText.includes('Generate Personalized Recommendations'));
    if (genBtn) genBtn.click();
  });
  await new Promise((r) => setTimeout(r, 600));
  console.log('Assessment Completed & Recommendations Generated');

  // Test 7: Personal Roadmap Checklist & Custom Milestone
  console.log('\n--- 7. Testing Personal Roadmap ---');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const roadBtn = btns.find((b) => b.innerText.trim() === 'My Roadmap');
    if (roadBtn) roadBtn.click();
  });
  await new Promise((r) => setTimeout(r, 500));

  const initialProgress = await page.$eval('strong, span', () => {
    const text = document.body.innerText;
    const match = text.match(/Roadmap Completion Progress:\s*(\d+)%/);
    return match ? match[1] : 'unknown';
  });
  console.log(`Initial Roadmap Progress: ${initialProgress}%`);

  // Toggle first step
  await page.evaluate(() => {
    const steps = Array.from(document.querySelectorAll('div')).filter((d) => d.innerText.includes('Income Certificate'));
    if (steps[0]) steps[0].click();
  });
  await new Promise((r) => setTimeout(r, 300));

  // Test 8: Mentor Directory, Session Booking & Minor Safeguarding
  console.log('\n--- 8. Testing Mentor Safeguarding & Q&A ---');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const mentorBtn = btns.find((b) => b.innerText.trim() === 'Mentors');
    if (mentorBtn) mentorBtn.click();
  });
  await new Promise((r) => setTimeout(r, 500));

  // Click Request Session on first mentor
  await page.evaluate(() => {
    const reqBtn = Array.from(document.querySelectorAll('button')).find((b) => b.innerText.includes('Request Moderated Guidance Session'));
    if (reqBtn) reqBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  // Close session modal
  await page.evaluate(() => {
    const cancelBtn = Array.from(document.querySelectorAll('button')).find((b) => b.innerText.includes('Cancel'));
    if (cancelBtn) cancelBtn.click();
  });
  await new Promise((r) => setTimeout(r, 300));

  // Test 9: Education Jargon Glossary
  console.log('\n--- 9. Testing Education Glossary ---');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const glossBtn = btns.find((b) => b.innerText.includes('Simple Terms'));
    if (glossBtn) glossBtn.click();
  });
  await new Promise((r) => setTimeout(r, 500));

  // Test 10: Role Switcher & Admin CMS Verification Controls
  console.log('\n--- 10. Testing Admin CMS & Role Switcher ---');
  await page.evaluate(() => {
    const roleBtn = document.querySelector('.navbar-role-btn');
    if (roleBtn) roleBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  // Select Admin
  await page.evaluate(() => {
    const adminPill = Array.from(document.querySelectorAll('div')).find((d) => d.innerText.includes('Portal Admin: Safety'));
    if (adminPill) adminPill.click();
  });
  await new Promise((r) => setTimeout(r, 500));
  console.log('Switched to Admin CMS Mode');

  // Test 11: Mobile Responsiveness (375x667)
  console.log('\n--- 11. Testing Mobile Responsiveness (iPhone SE / Budget Android) ---');
  await page.setViewport({ width: 375, height: 667, isMobile: true, hasTouch: true });
  await page.evaluate(() => {
    const homeBtn = Array.from(document.querySelectorAll('div')).find((d) => d.getAttribute('aria-label') === 'Udaan India Home');
    if (homeBtn) homeBtn.click();
  });
  await new Promise((r) => setTimeout(r, 500));

  // Open mobile drawer
  await page.evaluate(() => {
    const menuBtn = document.querySelector('.navbar-hamburger-btn');
    if (menuBtn) menuBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  // Final summary
  console.log('\n=== AUDIT RESULTS SUMMARY ===');
  console.log(`Total Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Console Errors:', consoleErrors);
  }
  console.log(`Total Network Failures: ${networkErrors.length}`);
  if (networkErrors.length > 0) {
    console.log('Network Failures:', networkErrors);
  }

  await browser.close();
}

runAudit().catch((err) => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
