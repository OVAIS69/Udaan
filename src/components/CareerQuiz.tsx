import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA } from '../data/careersData';
import { SCHOLARSHIPS_DATA } from '../data/scholarshipsData';
import { CareerItem, ScholarshipItem } from '../types';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Award,
  AlertCircle,
  Banknote,
  RotateCcw,
  BookOpen
} from 'lucide-react';

export const CareerQuiz: React.FC = () => {
  const { t, setActiveTab, setSelectedCareer, loadPresetRoadmap, userProfile, setUserProfile } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stage, setStage] = useState<string>('Class 12');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Mathematics', 'Computer Science']);
  const [selectedActivities, setSelectedActivities] = useState<string[]>(['Working with computers/software']);
  const [goalType, setGoalType] = useState<string>('private');
  const [budget, setBudget] = useState<string>('15k-50k');
  const [state, setState] = useState<string>('Maharashtra');
  const [studyMode, setStudyMode] = useState<string>('nearby_govt');
  const [category, setCategory] = useState<string>('OBC / EWS');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Recommendations calculated on submission
  const [results, setResults] = useState<{
    careers: CareerItem[];
    affordableAdvice: string;
    alternativeBudgetOption: string;
    scholarships: ScholarshipItem[];
  } | null>(null);

  const toggleSubject = (s: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(s) ? prev.filter((i) => i !== s) : [...prev, s]
    );
  };

  const toggleActivity = (a: string) => {
    setSelectedActivities((prev) =>
      prev.includes(a) ? prev.filter((i) => i !== a) : [...prev, a]
    );
  };

  const handleCalculate = () => {
    // Recommendation logic matching Indian career options
    let matchedCareers: CareerItem[] = [];

    if (selectedActivities.includes('Working with computers/software') || selectedSubjects.includes('Computer Science') || selectedSubjects.includes('Mathematics')) {
      const sw = CAREERS_DATA.find((c) => c.id === 'software-developer');
      const da = CAREERS_DATA.find((c) => c.id === 'data-analyst');
      if (sw) matchedCareers.push(sw);
      if (da) matchedCareers.push(da);
    }

    if (selectedActivities.includes('Helping sick people') || selectedSubjects.includes('Biology / Life Sciences')) {
      const nurse = CAREERS_DATA.find((c) => c.id === 'registered-nurse');
      const mlt = CAREERS_DATA.find((c) => c.id === 'paramedical-lab-tech');
      if (nurse) matchedCareers.push(nurse);
      if (mlt) matchedCareers.push(mlt);
    }

    if (goalType === 'govt' || selectedActivities.includes('Leading teams/Public speaking') || selectedSubjects.includes('Social Sciences / History / Polity')) {
      const cs = CAREERS_DATA.find((c) => c.id === 'civil-services-upsc');
      const teach = CAREERS_DATA.find((c) => c.id === 'primary-school-teacher');
      if (cs) matchedCareers.push(cs);
      if (teach) matchedCareers.push(teach);
    }

    if (goalType === 'vocational' || selectedActivities.includes('Repairing machinery/Wiring') || budget === '<15k') {
      const elec = CAREERS_DATA.find((c) => c.id === 'industrial-electrician');
      const solar = CAREERS_DATA.find((c) => c.id === 'solar-renewable-technician');
      if (elec) matchedCareers.push(elec);
      if (solar) matchedCareers.push(solar);
    }

    if (selectedSubjects.includes('Accountancy / Commerce / Economics')) {
      const ca = CAREERS_DATA.find((c) => c.id === 'chartered-accountant');
      if (ca) matchedCareers.push(ca);
    }

    if (selectedActivities.includes('Creative sketching / Visual craft')) {
      const ui = CAREERS_DATA.find((c) => c.id === 'ui-ux-designer');
      if (ui) matchedCareers.push(ui);
    }

    // Fallback if none matched
    if (matchedCareers.length === 0) {
      matchedCareers = CAREERS_DATA.slice(0, 3);
    }

    // Affordable pathway advice
    let advice = 'Prioritize state and central government colleges over private coaching institutes. All government degree colleges qualify for statutory fee reimbursements.';
    let altOption = 'If you cannot afford private engineering or medical college fees, pursue a 3-year Government Polytechnic Diploma or B.Sc from a state university, followed by lateral entry or competitive examinations.';

    if (budget === '<15k') {
      advice = 'Your best return-on-investment pathways are Government ITI trade certifications (Electrician / Wireman) or Government Polytechnic Diplomas. These cost under ₹5,000 total and lead directly to paid apprenticeships under NAPS.';
      altOption = 'Distance graduation via IGNOU or State Open University costs under ₹4,000/year, allowing you to work daytime jobs while earning a degree valid for all UPSC and State PSC exams.';
    } else if (state === 'Maharashtra') {
      advice = 'In Maharashtra, ensure you apply through the official CAP round to claim the Rajarshi Chhatrapati Shahu Maharaj 50% tuition fee waiver (EBC Scheme) for family income under ₹8 Lakhs.';
    }

    // Matching scholarships
    const matchedSch = SCHOLARSHIPS_DATA.filter((s) => {
      if (s.isSampleRecord) return false;
      if (state === 'Maharashtra' && s.targetState === 'Maharashtra') return true;
      if (s.targetState === 'All India') return true;
      return false;
    }).slice(0, 3);

    setResults({
      careers: matchedCareers.slice(0, 3),
      affordableAdvice: advice,
      alternativeBudgetOption: altOption,
      scholarships: matchedSch
    });

    setIsCompleted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setIsCompleted(false);
    setCurrentStep(1);
    setResults(null);
  };

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-govt" style={{ fontSize: '0.8rem', padding: '0.25rem 0.65rem' }}>
              <Compass size={14} /> Guided Assessment Tool
            </span>
          </div>
          <h2 style={{ fontSize: '2rem', color: 'var(--forest-green)', fontWeight: 800 }}>
            Find Your Affordable Career Route
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)', maxWidth: '640px', margin: '0.5rem auto 0 auto' }}>
            Answer 6 simple questions to receive personalized career recommendations, government college options, and matching scholarships.
          </p>
        </div>

        {!isCompleted ? (
          <div
            className="card"
            style={{
              padding: '2rem',
              backgroundColor: 'var(--paper-white)',
              border: '1.5px solid var(--border-sand)'
            }}
          >
            {/* Step Progress Indicator */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', borderBottom: '1px solid var(--border-sand)', paddingBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--forest-green)' }}>
                Step {currentStep} of 6
              </span>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {[1, 2, 3, 4, 5, 6].map((s) => (
                  <span
                    key={s}
                    style={{
                      width: '28px',
                      height: '6px',
                      borderRadius: '3px',
                      backgroundColor: s <= currentStep ? 'var(--forest-green)' : 'var(--border-sand)'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Step 1: Qualification Stage */}
            {currentStep === 1 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  1. Which educational stage have you completed or are currently in?
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginBottom: '1.25rem' }}>
                  This helps us filter eligible entrance exams and immediate prerequisites.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  {[
                    'Class 9 or 10',
                    'Class 11 or 12',
                    'Polytechnic Diploma / ITI',
                    'Undergraduate Degree Student',
                    'Completed Graduation'
                  ].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStage(s)}
                      style={{
                        padding: '1rem',
                        textAlign: 'left',
                        borderRadius: 'var(--radius-sm)',
                        border: stage === s ? '2px solid var(--forest-green)' : '1px solid var(--border-sand)',
                        backgroundColor: stage === s ? 'var(--forest-subtle)' : 'var(--warm-ivory)',
                        fontWeight: stage === s ? 700 : 500,
                        color: stage === s ? 'var(--forest-green)' : 'var(--charcoal)'
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Subjects of Interest */}
            {currentStep === 2 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  2. Which subjects do you enjoy studying most? (Select 1 or more)
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginBottom: '1.25rem' }}>
                  Choose subjects where you find satisfaction solving problems or reading.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {[
                    'Mathematics',
                    'Biology / Life Sciences',
                    'Physics & Chemistry',
                    'Computer Science / Coding',
                    'Accountancy / Commerce / Economics',
                    'Social Sciences / History / Polity',
                    'Languages & Writing',
                    'Hands-on Mechanical & Electrical Craft'
                  ].map((subj) => {
                    const isSel = selectedSubjects.includes(subj);
                    return (
                      <button
                        key={subj}
                        onClick={() => toggleSubject(subj)}
                        style={{
                          padding: '0.85rem',
                          textAlign: 'left',
                          borderRadius: 'var(--radius-sm)',
                          border: isSel ? '2px solid var(--forest-green)' : '1px solid var(--border-sand)',
                          backgroundColor: isSel ? 'var(--forest-subtle)' : 'var(--warm-ivory)',
                          fontWeight: isSel ? 700 : 500,
                          color: isSel ? 'var(--forest-green)' : 'var(--charcoal)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <CheckCircle2 size={16} style={{ color: isSel ? 'var(--forest-green)' : '#CCC' }} />
                        <span>{subj}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Activities of Interest */}
            {currentStep === 3 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  3. Which daily activities sound most fulfilling to you?
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginBottom: '1.25rem' }}>
                  Helps identify whether you prefer laboratory, desk, clinical, or field work.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  {[
                    'Working with computers/software',
                    'Helping sick people / Clinical care',
                    'Repairing machinery/Wiring/Tools',
                    'Managing accounts and finances',
                    'Leading teams/Public speaking/Administration',
                    'Teaching and explaining to others',
                    'Creative sketching / Visual craft'
                  ].map((act) => {
                    const isSel = selectedActivities.includes(act);
                    return (
                      <button
                        key={act}
                        onClick={() => toggleActivity(act)}
                        style={{
                          padding: '0.85rem',
                          textAlign: 'left',
                          borderRadius: 'var(--radius-sm)',
                          border: isSel ? '2px solid var(--forest-green)' : '1px solid var(--border-sand)',
                          backgroundColor: isSel ? 'var(--forest-subtle)' : 'var(--warm-ivory)',
                          fontWeight: isSel ? 700 : 500,
                          color: isSel ? 'var(--forest-green)' : 'var(--charcoal)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <CheckCircle2 size={16} style={{ color: isSel ? 'var(--forest-green)' : '#CCC' }} />
                        <span>{act}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Career Orientation */}
            {currentStep === 4 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  4. What kind of career environment do you prefer?
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginBottom: '1.25rem' }}>
                  Every path is valid — choose what aligns with your family priorities.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { id: 'govt', title: 'Government Job / Civil Services / Railways / Public Sector', desc: 'Job security, social respect, pension/allowances, fixed hours.' },
                    { id: 'private', title: 'Private Sector / Technology / Corporate', desc: 'Faster salary growth based on skills, remote work options.' },
                    { id: 'vocational', title: 'Vocational Skill / Fast Direct Earning (ITI/Polytechnic)', desc: 'Quick 1-2 year technical training leading immediately to jobs or self-employment.' },
                    { id: 'entrepreneur', title: 'Self-Employment / Business / Consultancy', desc: 'Independent practice (e.g. Electrical contractor, CA, Diagnostic lab).' }
                  ].map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => setGoalType(goal.id)}
                      style={{
                        padding: '1rem',
                        textAlign: 'left',
                        borderRadius: 'var(--radius-sm)',
                        border: goalType === goal.id ? '2px solid var(--forest-green)' : '1px solid var(--border-sand)',
                        backgroundColor: goalType === goal.id ? 'var(--forest-subtle)' : 'var(--warm-ivory)'
                      }}
                    >
                      <div style={{ fontWeight: 700, color: 'var(--forest-green)' }}>{goal.title}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--slate-muted)', marginTop: '0.2rem' }}>{goal.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Education Budget */}
            {currentStep === 5 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  5. What is your family’s approximate annual education budget?
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginBottom: '1rem' }}>
                  <ShieldCheck size={14} style={{ display: 'inline', color: 'var(--forest-green)' }} /> <strong>Privacy Notice:</strong> This question is strictly used to recommend government colleges with fee waivers and interest subsidies. We will never sell or store financial data.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {[
                    { id: '<15k', label: 'Under ₹15,000 / year', desc: 'Govt ITI, DIET, State Open University, or 100% Free scholarship route' },
                    { id: '15k-50k', label: '₹15,000 - ₹50,000 / year', desc: 'Govt Polytechnic, State Govt Colleges with EBC fee waivers' },
                    { id: '50k-1.5L', label: '₹50,000 - ₹1.5 Lakhs / year', desc: 'State Engineering & Pharmacy colleges with DBT subsidies' },
                    { id: '>1.5L', label: 'Above ₹1.5 Lakhs / year', desc: 'Standard private institutions & professional universities' }
                  ].map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBudget(b.id)}
                      style={{
                        padding: '1rem',
                        textAlign: 'left',
                        borderRadius: 'var(--radius-sm)',
                        border: budget === b.id ? '2px solid var(--forest-green)' : '1px solid var(--border-sand)',
                        backgroundColor: budget === b.id ? 'var(--forest-subtle)' : 'var(--warm-ivory)'
                      }}
                    >
                      <div style={{ fontWeight: 700, color: 'var(--forest-green)' }}>{b.label}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--slate-muted)', marginTop: '0.2rem' }}>{b.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: State & Welfare Category (Optional) */}
            {currentStep === 6 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  6. Which state do you live in? (For state-specific fee waiver calculations)
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginBottom: '1.25rem' }}>
                  State domicile grants access to 85% home state quota and specific state portals like MahaDBT.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--charcoal)' }}>
                      Select State of Domicile:
                    </label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-sand)',
                        backgroundColor: 'var(--warm-ivory)',
                        fontSize: '0.92rem'
                      }}
                    >
                      <option value="Maharashtra">Maharashtra (MahaDBT Available)</option>
                      <option value="Uttar Pradesh">Uttar Pradesh (UP SAMS)</option>
                      <option value="Bihar">Bihar (PMS Online)</option>
                      <option value="Rajasthan">Rajasthan (SJE)</option>
                      <option value="Madhya Pradesh">Madhya Pradesh (Tribal / Higher Ed)</option>
                      <option value="Gujarat">Gujarat (Digital Gujarat)</option>
                      <option value="Delhi">Delhi (e-District)</option>
                      <option value="Other">Other Indian State / Union Territory</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--charcoal)' }}>
                      Category for Statutory Fee Concessions (Optional):
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-sand)',
                        backgroundColor: 'var(--warm-ivory)',
                        fontSize: '0.92rem'
                      }}
                    >
                      <option value="OBC / EWS">OBC / EWS (Income up to ₹8 Lakhs)</option>
                      <option value="SC / ST">SC / ST (Central & State 100% Fee Waiver)</option>
                      <option value="VJNT / SBC">VJNT / SBC (Special Backward Classes)</option>
                      <option value="General">General / Open</option>
                      <option value="Minority">Religious Minority (Jain, Muslim, Christian, Sikh, Buddhist, Parsi)</option>
                      <option value="PwD">Person with Disability (PwD 40%+)</option>
                    </select>
                    <span style={{ fontSize: '0.75rem', color: 'var(--slate-muted)', marginTop: '0.35rem', display: 'block' }}>
                      Used strictly to check if you are eligible for 50%-100% government tuition refunds under state law.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-sand)' }}>
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="btn btn-secondary"
                  style={{ gap: '0.4rem' }}
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 6 ? (
                <button
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className="btn btn-primary"
                  style={{ gap: '0.4rem' }}
                >
                  <span>Next Step</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleCalculate}
                  className="btn btn-accent"
                  style={{ gap: '0.4rem' }}
                >
                  <Sparkles size={16} />
                  <span>Generate Personalized Recommendations</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Assessment Results Page */
          results && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Results Top Banner */}
              <div
                style={{
                  backgroundColor: 'var(--forest-subtle)',
                  border: '1.5px solid #BDD9CA',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <span className="badge badge-govt" style={{ marginBottom: '0.5rem' }}>
                      Assessment Analysis Complete
                    </span>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--forest-green)', fontWeight: 800 }}>
                      Recommended Career Pathways for You
                    </h3>
                  </div>

                  <button onClick={resetQuiz} className="btn btn-secondary btn-sm" style={{ gap: '0.35rem' }}>
                    <RotateCcw size={14} />
                    <span>Retake Quiz</span>
                  </button>
                </div>

                <div style={{ backgroundColor: 'var(--paper-white)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-sand)', marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--forest-green)', display: 'block', marginBottom: '0.25rem' }}>
                    Affordable Pathway Strategy:
                  </strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: 1.5 }}>
                    {results.affordableAdvice}
                  </p>
                </div>

                {results.alternativeBudgetOption && (
                  <div style={{ backgroundColor: 'var(--mustard-soft)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--muted-mustard)' }}>
                    <strong style={{ color: 'var(--mustard-dark)', display: 'block', marginBottom: '0.25rem' }}>
                      Low-Cost Alternative Route (Zero/Low Debt):
                    </strong>
                    <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: 1.5 }}>
                      {results.alternativeBudgetOption}
                    </p>
                  </div>
                )}
              </div>

              {/* Recommended Career Cards */}
              <div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', fontWeight: 700, marginBottom: '1rem' }}>
                  Top Career Matches:
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {results.careers.map((career) => (
                    <div key={career.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <span className="badge badge-neutral" style={{ fontSize: '0.72rem', marginBottom: '0.5rem' }}>
                          {career.categoryLabel}
                        </span>
                        <h5 style={{ fontSize: '1.15rem', color: 'var(--forest-green)', fontWeight: 700, marginBottom: '0.4rem' }}>
                          {career.title}
                        </h5>
                        <p style={{ fontSize: '0.82rem', color: 'var(--slate-muted)', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                          {career.brief}
                        </p>
                        <div style={{ fontSize: '0.78rem', color: 'var(--charcoal)', backgroundColor: 'var(--warm-ivory)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
                          <strong>Govt Fee: </strong>{career.courseFeesGovt.split('(')[0]}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          onClick={() => setSelectedCareer(career)}
                          className="btn btn-secondary btn-sm"
                          style={{ flex: 1 }}
                        >
                          View Guide
                        </button>
                        <button
                          onClick={() => loadPresetRoadmap(career)}
                          className="btn btn-primary btn-sm"
                          style={{ flex: 1 }}
                        >
                          Build Roadmap
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Matching Scholarships */}
              <div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', fontWeight: 700, marginBottom: '1rem' }}>
                  Financial Aid You May Qualify For:
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {results.scholarships.map((sch) => (
                    <div
                      key={sch.id}
                      style={{
                        padding: '1rem 1.25rem',
                        backgroundColor: 'var(--paper-white)',
                        border: '1px solid var(--border-sand)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.75rem'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span className="badge badge-govt" style={{ fontSize: '0.72rem' }}>
                            {sch.portalName}
                          </span>
                          <span style={{ fontSize: '0.82rem', color: 'var(--slate-muted)' }}>
                            {sch.targetState}
                          </span>
                        </div>
                        <h5 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', fontWeight: 700, marginTop: '0.25rem' }}>
                          {sch.title}
                        </h5>
                        <p style={{ fontSize: '0.85rem', color: 'var(--forest-green)', fontWeight: 700, marginTop: '0.15rem' }}>
                          Benefit: {sch.financialBenefit}
                        </p>
                      </div>

                      <a
                        href={sch.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        Apply on Official Portal
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner to Roadmap */}
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className="btn btn-accent"
                  style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}
                >
                  <Sparkles size={18} />
                  <span>View Step-by-Step Personal Roadmap</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
