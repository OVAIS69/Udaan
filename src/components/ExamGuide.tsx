import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA } from '../data/examsData';
import { EntranceExamItem } from '../types';
import {
  FileCheck2,
  Search,
  ExternalLink,
  BookOpen,
  Calendar,
  Sparkles,
  Bookmark,
  CheckCircle,
  X,
  CreditCard,
  Building
} from 'lucide-react';

export const ExamGuide: React.FC = () => {
  const { t, selectedExam, setSelectedExam, isBookmarked, toggleBookmark } = useApp();
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [examSearch, setExamSearch] = useState<string>('');

  const filteredExams = EXAMS_DATA.filter((exam) => {
    const matchLevel =
      levelFilter === 'all' ||
      exam.level.toLowerCase().includes(levelFilter.toLowerCase());

    const query = examSearch.toLowerCase().trim();
    const matchQuery =
      !query ||
      exam.name.toLowerCase().includes(query) ||
      exam.fullName.toLowerCase().includes(query) ||
      exam.conductingAuthority.toLowerCase().includes(query) ||
      exam.subjectsTested.some((s) => s.toLowerCase().includes(query)) ||
      exam.suitableForCareers.some((c) => c.toLowerCase().includes(query));

    return matchLevel && matchQuery;
  });

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <FileCheck2 size={26} style={{ color: 'var(--forest-green)' }} />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--forest-green)', fontWeight: 800 }}>
              {t.navExams}
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)', maxWidth: '750px' }}>
            National and state-level admission tests, defense recruitment, and competitive exams. View conducting authorities, fee exemptions for female/reserved candidates, and free official study materials.
          </p>

          {/* Search and Filters */}
          <div
            style={{
              display: 'flex',
              gap: '0.85rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: '1.5rem'
            }}
          >
            <div style={{ position: 'relative', flex: '1 1 280px', maxWidth: '480px' }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '0.9rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--slate-muted)'
                }}
              />
              <input
                type="text"
                placeholder="Search JEE, NEET, CUET, MHT-CET, SSC, NDA..."
                value={examSearch}
                onChange={(e) => setExamSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.9rem 0.65rem 2.4rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--border-sand)',
                  backgroundColor: 'var(--paper-white)',
                  fontSize: '0.9rem'
                }}
                aria-label="Search Entrance Exams"
              />
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Exams' },
                { id: 'national', label: 'National (NTA / Central)' },
                { id: 'state', label: 'State Level (MHT-CET)' },
                { id: 'defence', label: 'Defence (NDA)' }
              ].map((lvl) => {
                const isActive = levelFilter === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => setLevelFilter(lvl.id)}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: '20px',
                      fontSize: '0.84rem',
                      fontWeight: isActive ? 700 : 500,
                      backgroundColor: isActive ? 'var(--forest-green)' : 'var(--paper-white)',
                      color: isActive ? '#FFFFFF' : 'var(--charcoal)',
                      border: isActive ? '1px solid var(--forest-green)' : '1px solid var(--border-sand)'
                    }}
                  >
                    {lvl.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Exams Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredExams.map((exam) => {
            const isBooked = isBookmarked(exam.id);

            return (
              <div
                key={exam.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  {/* Top Bar */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <span className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>
                      {exam.level}
                    </span>

                    <button
                      onClick={() => toggleBookmark(exam.id)}
                      aria-label="Bookmark exam"
                      style={{
                        padding: '0.35rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: isBooked ? 'var(--terracotta-soft)' : 'var(--ivory-alt)',
                        color: isBooked ? 'var(--terracotta)' : 'var(--slate-muted)',
                        border: '1px solid var(--border-sand)'
                      }}
                    >
                      <Bookmark size={16} fill={isBooked ? 'var(--terracotta)' : 'none'} />
                    </button>
                  </div>

                  {/* Exam Name */}
                  <div style={{ marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--forest-green)' }}>
                      {exam.name}
                    </span>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--charcoal-light)', marginTop: '0.15rem' }}>
                      {exam.fullName}
                    </h3>
                  </div>

                  <div style={{ fontSize: '0.8rem', color: 'var(--slate-muted)', marginBottom: '1rem' }}>
                    <strong>Conducting Authority:</strong> {exam.conductingAuthority}
                  </div>

                  {/* Highlights Box */}
                  <div
                    style={{
                      backgroundColor: 'var(--warm-ivory)',
                      border: '1px solid var(--border-sand)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem',
                      fontSize: '0.82rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div>
                      <span style={{ color: 'var(--slate-muted)' }}>Eligibility: </span>
                      <strong style={{ color: 'var(--charcoal)' }}>{exam.eligibility}</strong>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.4rem' }}>
                      <span style={{ color: 'var(--slate-muted)' }}>Application Fee Concessions: </span>
                      <div style={{ color: 'var(--forest-green)', fontWeight: 700, marginTop: '0.15rem' }}>
                        {exam.approxApplicationFee.reservedOrGirls}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                  <button
                    onClick={() => setSelectedExam(exam)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <span>View Exam Syllabus & Free Resources</span>
                  </button>

                  <a
                    href={exam.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ gap: '0.35rem' }}
                  >
                    <span>Official Portal</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exam Detail Modal */}
        {selectedExam && (
          <div className="modal-overlay" onClick={() => setSelectedExam(null)}>
            <div
              className="modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="exam-modal-title"
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  borderBottom: '1px solid var(--border-sand)',
                  paddingBottom: '1rem',
                  marginBottom: '1.25rem',
                  gap: '1rem'
                }}
              >
                <div>
                  <span className="badge badge-neutral" style={{ marginBottom: '0.35rem' }}>
                    {selectedExam.level}
                  </span>
                  <h2 id="exam-modal-title" style={{ fontSize: '1.5rem', color: 'var(--forest-green)', fontWeight: 800 }}>
                    {selectedExam.name}: {selectedExam.fullName}
                  </h2>
                  <div style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginTop: '0.2rem' }}>
                    Conducted by: {selectedExam.conductingAuthority}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedExam(null)}
                  style={{ padding: '0.5rem', color: 'var(--charcoal)' }}
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Subjects & Format */}
                <div style={{ backgroundColor: 'var(--warm-ivory)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-sand)' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--forest-green)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Examination Format & Subjects Tested
                  </h4>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--charcoal)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {selectedExam.subjectsTested.map((subj, idx) => (
                      <li key={idx}>{subj}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: 'var(--slate-muted)' }}>
                    <strong>Exam Cycle:</strong> {selectedExam.frequency} • {selectedExam.keyDatesInfo}
                  </div>
                </div>

                {/* Application Fee Details */}
                <div style={{ border: '1px solid var(--border-sand)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CreditCard size={18} style={{ color: 'var(--terracotta)' }} />
                    Application Fees & Exemptions
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.88rem' }}>
                    <div style={{ backgroundColor: 'var(--ivory-alt)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--slate-muted)' }}>General Category:</span>
                      <div style={{ fontWeight: 700, color: 'var(--charcoal)', marginTop: '0.2rem' }}>
                        {selectedExam.approxApplicationFee.general}
                      </div>
                    </div>
                    <div style={{ backgroundColor: 'var(--forest-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #C2D7CB' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--forest-green)', fontWeight: 700 }}>
                        Reserved Categories / Female Candidates:
                      </span>
                      <div style={{ fontWeight: 800, color: 'var(--forest-green)', marginTop: '0.2rem' }}>
                        {selectedExam.approxApplicationFee.reservedOrGirls}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Free Preparation Resources */}
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.65rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BookOpen size={18} style={{ color: 'var(--forest-green)' }} />
                    Free Government Mock Tests & Preparation Resources
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {selectedExam.prepResources.map((res, idx) => (
                      <a
                        key={idx}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.75rem 1rem',
                          backgroundColor: 'var(--paper-white)',
                          border: '1px solid var(--border-sand)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.88rem'
                        }}
                      >
                        <div>
                          <strong style={{ color: 'var(--forest-green)' }}>{res.title}</strong>
                          <span style={{ color: 'var(--slate-muted)', display: 'block', fontSize: '0.78rem' }}>
                            Provided by: {res.provider}
                          </span>
                        </div>
                        <ExternalLink size={14} style={{ color: 'var(--forest-green)' }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-sand)'
                }}
              >
                <a
                  href={selectedExam.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ gap: '0.4rem' }}
                >
                  <span>Visit {selectedExam.name} Official Portal</span>
                  <ExternalLink size={16} />
                </a>

                <button onClick={() => setSelectedExam(null)} className="btn btn-secondary">
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
