import React from 'react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA } from '../data/careersData';
import { SCHOLARSHIPS_DATA } from '../data/scholarshipsData';
import { EXAMS_DATA } from '../data/examsData';
import {
  Bookmark,
  Trash2,
  ArrowRight,
  GraduationCap,
  Award,
  FileCheck2,
  ExternalLink
} from 'lucide-react';

export const SavedBookmarks: React.FC = () => {
  const {
    t,
    bookmarkedIds,
    toggleBookmark,
    setSelectedCareer,
    setSelectedScholarship,
    setSelectedExam,
    setActiveTab
  } = useApp();

  const savedCareers = CAREERS_DATA.filter((c) => bookmarkedIds.includes(c.id));
  const savedScholarships = SCHOLARSHIPS_DATA.filter((s) =>
    bookmarkedIds.includes(s.id)
  );
  const savedExams = EXAMS_DATA.filter((e) => bookmarkedIds.includes(e.id));

  const totalSaved =
    savedCareers.length + savedScholarships.length + savedExams.length;

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <Bookmark size={26} style={{ color: 'var(--terracotta)' }} fill="var(--terracotta)" />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--forest-green)', fontWeight: 800 }}>
              {t.navBookmarks} ({totalSaved})
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)' }}>
            Your shortlisted career guides, verified scholarship deadlines, and entrance examinations stored securely in your browser.
          </p>
        </div>

        {totalSaved === 0 ? (
          <div
            className="card"
            style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              backgroundColor: 'var(--paper-white)'
            }}
          >
            <Bookmark size={36} style={{ color: 'var(--slate-muted)', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>No items shortlisted yet</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate-muted)', marginBottom: '1.5rem' }}>
              Click the bookmark icon on any career, scholarship, or entrance exam to save it here for quick reference.
            </p>
            <button onClick={() => setActiveTab('careers')} className="btn btn-primary btn-sm">
              Explore Career Directory
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Saved Careers */}
            {savedCareers.length > 0 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--forest-green)', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GraduationCap size={20} /> Shortlisted Careers ({savedCareers.length})
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {savedCareers.map((c) => (
                    <div
                      key={c.id}
                      className="card"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        padding: '1.2rem'
                      }}
                    >
                      <div style={{ flex: '1 1 300px' }}>
                        <span className="badge badge-neutral" style={{ fontSize: '0.72rem', marginBottom: '0.3rem' }}>
                          {c.categoryLabel}
                        </span>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--charcoal)', fontWeight: 700 }}>
                          {c.title}
                        </h4>
                        <p style={{ fontSize: '0.84rem', color: 'var(--slate-muted)' }}>
                          {c.qualifications[0]}
                        </p>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <button
                          onClick={() => setSelectedCareer(c)}
                          className="btn btn-secondary btn-sm"
                        >
                          View Guide
                        </button>
                        <button
                          onClick={() => toggleBookmark(c.id)}
                          className="btn btn-sm"
                          style={{ color: 'var(--terracotta)', border: '1px solid var(--border-sand)' }}
                          aria-label="Remove bookmark"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Saved Scholarships */}
            {savedScholarships.length > 0 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--terracotta)', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Award size={20} /> Shortlisted Scholarships ({savedScholarships.length})
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {savedScholarships.map((s) => (
                    <div
                      key={s.id}
                      className="card"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        padding: '1.2rem',
                        borderLeft: '4px solid var(--terracotta)'
                      }}
                    >
                      <div style={{ flex: '1 1 300px' }}>
                        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.25rem' }}>
                          <span className="badge badge-govt" style={{ fontSize: '0.7rem' }}>
                            {s.portalName}
                          </span>
                          <span style={{ fontSize: '0.78rem', color: 'var(--slate-muted)' }}>
                            {s.targetState}
                          </span>
                        </div>
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', fontWeight: 700 }}>
                          {s.title}
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--forest-green)', fontWeight: 700 }}>
                          {s.financialBenefit}
                        </p>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <button
                          onClick={() => setSelectedScholarship(s)}
                          className="btn btn-secondary btn-sm"
                        >
                          Checklist
                        </button>
                        {!s.isSampleRecord && (
                          <a
                            href={s.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                          >
                            <span>Apply</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                        <button
                          onClick={() => toggleBookmark(s.id)}
                          className="btn btn-sm"
                          style={{ color: 'var(--terracotta)', border: '1px solid var(--border-sand)' }}
                          aria-label="Remove bookmark"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Saved Exams */}
            {savedExams.length > 0 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--forest-green)', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FileCheck2 size={20} /> Shortlisted Examinations ({savedExams.length})
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {savedExams.map((e) => (
                    <div
                      key={e.id}
                      className="card"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        padding: '1.2rem'
                      }}
                    >
                      <div style={{ flex: '1 1 300px' }}>
                        <span className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
                          {e.level}
                        </span>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--forest-green)', fontWeight: 800 }}>
                          {e.name}: {e.fullName}
                        </h4>
                        <p style={{ fontSize: '0.82rem', color: 'var(--slate-muted)' }}>
                          Fee: {e.approxApplicationFee.reservedOrGirls} (Girls/Reserved)
                        </p>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <button
                          onClick={() => setSelectedExam(e)}
                          className="btn btn-secondary btn-sm"
                        >
                          Syllabus
                        </button>
                        <button
                          onClick={() => toggleBookmark(e.id)}
                          className="btn btn-sm"
                          style={{ color: 'var(--terracotta)', border: '1px solid var(--border-sand)' }}
                          aria-label="Remove bookmark"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
