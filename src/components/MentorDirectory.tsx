import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MENTORS_DATA } from '../data/mentorsData';
import { MentorItem, QAQuestion } from '../types';
import {
  Users,
  ShieldCheck,
  Calendar,
  MessageSquare,
  HelpCircle,
  AlertTriangle,
  HeartHandshake,
  CheckCircle2,
  X,
  Send,
  Lock,
  Search
} from 'lucide-react';

export const MentorDirectory: React.FC = () => {
  const { t, qaQuestions, addQAQuestion, userProfile, showToast } = useApp();

  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [languageFilter, setLanguageFilter] = useState<string>('all');
  const [selectedMentorForSession, setSelectedMentorForSession] = useState<MentorItem | null>(null);

  // Ask Question Form State
  const [newQuestionText, setNewQuestionText] = useState<string>('');
  const [newQuestionGrade, setNewQuestionGrade] = useState<string>('Class 12');

  // Session Request Form State
  const [sessionTopic, setSessionTopic] = useState<string>('Affordable College Options');
  const [isMinorUnder18, setIsMinorUnder18] = useState<boolean>(true);
  const [parentConsentChecked, setParentConsentChecked] = useState<boolean>(false);
  const [sessionSubmitted, setSessionSubmitted] = useState<boolean>(false);

  const filteredMentors = MENTORS_DATA.filter((mentor) => {
    const matchDomain =
      domainFilter === 'all' || mentor.domain.includes(domainFilter);
    const matchLang =
      languageFilter === 'all' || mentor.languages.includes(languageFilter);
    return matchDomain && matchLang;
  });

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;
    addQAQuestion(newQuestionText.trim(), newQuestionGrade);
    setNewQuestionText('');
  };

  const handleSessionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isMinorUnder18 && !parentConsentChecked) {
      showToast('Parent / Guardian consent is required for students under 18 years.');
      return;
    }
    setSessionSubmitted(true);
    setTimeout(() => {
      setSessionSubmitted(false);
      setSelectedMentorForSession(null);
      setParentConsentChecked(false);
      showToast('Session request submitted! You will be assigned to a moderated group session.');
    }, 2000);
  };

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <Users size={26} style={{ color: 'var(--forest-green)' }} />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--forest-green)', fontWeight: 800 }}>
              {t.navMentors} & Community Q&A
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)', maxWidth: '780px' }}>
            Connect with verified volunteer career counsellors, government officers, and first-generation graduate professionals. Ask questions safely without revealing your phone number or email address.
          </p>

          {/* Safeguarding & Child Protection Callout */}
          <div
            style={{
              backgroundColor: 'var(--forest-subtle)',
              border: '1.5px solid #BDD9CA',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.5rem',
              marginTop: '1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}
          >
            <ShieldCheck size={26} style={{ color: 'var(--forest-green)', flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: 1.55 }}>
              <strong>Zero-Contact Exposure & Child Safeguarding Policy:</strong>
              <p style={{ color: 'var(--charcoal-light)', marginTop: '0.2rem' }}>
                To protect minor students, personal phone numbers, home addresses, and private messaging channels are strictly prohibited on this platform. All interactions are conducted in scheduled, moderated group webinars or public Q&A threads reviewed by portal educators.
              </p>
            </div>
          </div>

          {/* Filters Bar */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1.5rem' }}>
            {/* Domain Filter */}
            <select
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
              style={{
                padding: '0.6rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--border-sand)',
                backgroundColor: 'var(--paper-white)',
                fontSize: '0.88rem'
              }}
              aria-label="Filter by Domain"
            >
              <option value="all">Domain: All Career Domains</option>
              <option value="Education">Education & Teaching</option>
              <option value="Engineering">Engineering & Vocational</option>
              <option value="Technology">Technology & Software</option>
              <option value="Healthcare">Healthcare & Nursing</option>
              <option value="Commerce">Commerce & CA</option>
            </select>

            {/* Language Filter */}
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              style={{
                padding: '0.6rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--border-sand)',
                backgroundColor: 'var(--paper-white)',
                fontSize: '0.88rem'
              }}
              aria-label="Filter by Language"
            >
              <option value="all">Language: All Languages</option>
              <option value="Hindi">Hindi (हिंदी)</option>
              <option value="Marathi">Marathi (मराठी)</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>

        {/* Mentors Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Verification badge row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span className="badge badge-govt" style={{ fontSize: '0.72rem' }}>
                    <ShieldCheck size={12} /> Verified Volunteer Educator
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--slate-muted)' }}>
                    {mentor.experienceYears} Years Exp
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', fontWeight: 700, marginBottom: '0.2rem' }}>
                  {mentor.name}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--forest-green)', fontWeight: 600 }}>
                  {mentor.role}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--slate-muted)', marginBottom: '0.75rem' }}>
                  {mentor.organization} • {mentor.location}
                </div>

                {/* Background Tag */}
                <div style={{ backgroundColor: 'var(--warm-ivory)', padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', color: 'var(--charcoal)', marginBottom: '0.75rem', border: '1px solid var(--border-sand)' }}>
                  <strong>Background:</strong> {mentor.backgroundTag}
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--charcoal-light)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {mentor.bio}
                </p>

                {/* Languages spoken */}
                <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {mentor.languages.map((l, lIdx) => (
                    <span key={lIdx} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedMentorForSession(mentor)}
                className="btn btn-primary btn-sm"
                style={{ width: '100%', gap: '0.4rem' }}
              >
                <Calendar size={14} />
                <span>Request Moderated Guidance Session</span>
              </button>
            </div>
          ))}
        </div>

        {/* Section 2: Student Q&A Forum */}
        <div style={{ borderTop: '2px solid var(--border-sand)', paddingTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <MessageSquare size={24} style={{ color: 'var(--terracotta)' }} />
            <h3 style={{ fontSize: '1.6rem', color: 'var(--charcoal)', fontWeight: 800 }}>
              Student Career Questions & Mentor Answers
            </h3>
          </div>
          <p style={{ fontSize: '0.92rem', color: 'var(--slate-muted)', marginBottom: '1.5rem', maxWidth: '750px' }}>
            Read real questions asked by students across India regarding polytechnics, fee waivers, UPSC preparation, and government colleges.
          </p>

          {/* Ask a Question Box */}
          <div
            className="card"
            style={{
              backgroundColor: 'var(--warm-ivory)',
              border: '1.5px solid var(--border-sand)',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            <h4 style={{ fontSize: '1.1rem', color: 'var(--forest-green)', fontWeight: 700, marginBottom: '0.5rem' }}>
              Have a question about your career, fees, or stream choice?
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--slate-muted)', marginBottom: '1rem' }}>
              <Lock size={12} style={{ display: 'inline' }} /> Your privacy is protected: Only your first name and grade are shown. Mentors will review and publish answers here.
            </p>

            <form onSubmit={handleQuestionSubmit}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--charcoal)' }}>
                    Your Grade / Stage:
                  </label>
                  <select
                    value={newQuestionGrade}
                    onChange={(e) => setNewQuestionGrade(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-sand)',
                      backgroundColor: 'var(--paper-white)',
                      fontSize: '0.88rem'
                    }}
                  >
                    <option value="Class 10 Student">Class 10 Student</option>
                    <option value="Class 12 Science">Class 12 Science</option>
                    <option value="Class 12 Commerce">Class 12 Commerce</option>
                    <option value="Class 12 Arts">Class 12 Arts</option>
                    <option value="Diploma / ITI Student">Diploma / ITI Student</option>
                    <option value="Undergraduate Student">Undergraduate Student</option>
                  </select>
                </div>
              </div>

              <textarea
                placeholder="Ask about college eligibility, low-cost courses, how to apply for scholarships, etc..."
                value={newQuestionText}
                onChange={(e) => setNewQuestionText(e.target.value)}
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--border-sand)',
                  backgroundColor: 'var(--paper-white)',
                  fontSize: '0.9rem',
                  marginBottom: '1rem'
                }}
                required
              />

              <button type="submit" className="btn btn-accent btn-sm" style={{ gap: '0.4rem' }}>
                <Send size={14} />
                <span>Submit Question to Mentors</span>
              </button>
            </form>
          </div>

          {/* Q&A Thread List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {qaQuestions.map((qa) => (
              <div
                key={qa.id}
                className="card"
                style={{
                  borderLeft: '4px solid var(--forest-green)',
                  backgroundColor: 'var(--paper-white)'
                }}
              >
                {/* Question */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--slate-muted)' }}>
                      {qa.studentName}
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--slate-muted)' }}>{qa.date}</span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', fontWeight: 700, lineHeight: 1.4 }}>
                    "{qa.question}"
                  </h4>
                </div>

                {/* Mentor Answer */}
                {qa.mentorAnswer && (
                  <div
                    style={{
                      backgroundColor: 'var(--warm-ivory)',
                      border: '1px solid var(--border-sand)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '1rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                      <span className="badge badge-govt" style={{ fontSize: '0.7rem' }}>
                        Answered by Mentor
                      </span>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--forest-green)' }}>
                        {qa.mentorAnswer.mentorName}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--slate-muted)' }}>
                        ({qa.mentorAnswer.mentorRole})
                      </span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--charcoal-light)', lineHeight: 1.55 }}>
                      {qa.mentorAnswer.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Request Guidance Session Modal */}
        {selectedMentorForSession && (
          <div className="modal-overlay" onClick={() => setSelectedMentorForSession(null)}>
            <div
              className="modal-dialog"
              style={{ maxWidth: '540px' }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="session-modal-title"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-sand)', paddingBottom: '0.75rem' }}>
                <h3 id="session-modal-title" style={{ fontSize: '1.25rem', color: 'var(--forest-green)' }}>
                  Request Group Mentorship Session
                </h3>
                <button onClick={() => setSelectedMentorForSession(null)} aria-label="Close">
                  <X size={20} />
                </button>
              </div>

              {sessionSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={42} style={{ color: 'var(--forest-green)', margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Session Request Recorded</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--slate-muted)' }}>
                    You will receive joining instructions for the next supervised weekend career circle with {selectedMentorForSession.name}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSessionSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--slate-muted)' }}>Requested Mentor:</span>
                    <div style={{ fontWeight: 700, color: 'var(--charcoal)' }}>
                      {selectedMentorForSession.name} ({selectedMentorForSession.role})
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                      Topic of Guidance:
                    </label>
                    <select
                      value={sessionTopic}
                      onChange={(e) => setSessionTopic(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-sand)',
                        backgroundColor: 'var(--warm-ivory)',
                        fontSize: '0.88rem'
                      }}
                    >
                      <option value="Affordable College Options">Affordable Government College Options</option>
                      <option value="MahaDBT & State Scholarships">MahaDBT & State Scholarship Navigation</option>
                      <option value="Polytechnic vs Class 11-12">Polytechnic Diploma vs Class 11-12 Decision</option>
                      <option value="Government Exam Preparation">UPSC / SSC / Banking Exam Strategy</option>
                      <option value="Self-Study Resources">Finding Free Self-Study Materials</option>
                    </select>
                  </div>

                  {/* Minor Safeguarding Checkbox */}
                  <div style={{ backgroundColor: 'var(--ivory-alt)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-sand)', fontSize: '0.82rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <input
                        type="checkbox"
                        id="under18"
                        checked={isMinorUnder18}
                        onChange={(e) => setIsMinorUnder18(e.target.checked)}
                      />
                      <label htmlFor="under18" style={{ fontWeight: 600 }}>
                        I am a student under 18 years of age
                      </label>
                    </div>

                    {isMinorUnder18 && (
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.4rem', color: 'var(--charcoal)' }}>
                        <input
                          type="checkbox"
                          id="consent"
                          checked={parentConsentChecked}
                          onChange={(e) => setParentConsentChecked(e.target.checked)}
                          required
                        />
                        <label htmlFor="consent" style={{ fontSize: '0.78rem', lineHeight: 1.4 }}>
                          I confirm that my parent, guardian, or school teacher is aware of this guidance session. All sessions are conducted in supervised group settings.
                        </label>
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => setSelectedMentorForSession(null)}
                      className="btn btn-secondary btn-sm"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary btn-sm">
                      Confirm Session Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
