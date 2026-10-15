import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA } from '../data/careersData';
import { CareerCategory, CareerItem } from '../types';
import {
  Search,
  Bookmark,
  Scale,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Banknote,
  BookOpen,
  ArrowRight,
  X,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Building,
  Volume2
} from 'lucide-react';

export const CareerExplorer: React.FC = () => {
  const {
    language,
    t,
    isBookmarked,
    toggleBookmark,
    selectedCareer,
    setSelectedCareer,
    compareCareerIds,
    toggleCompareCareer,
    clearComparison,
    loadPresetRoadmap,
    speakText,
    searchQuery,
    setSearchQuery
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showCompareModal, setShowCompareModal] = useState<boolean>(false);

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: t.filterAll },
    { id: 'technology', label: 'Technology' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'government', label: 'Government Careers' },
    { id: 'vocational', label: 'Vocational & Skilled Trades' },
    { id: 'commerce', label: 'Commerce & Finance' },
    { id: 'education', label: 'Education' },
    { id: 'creative', label: 'Creative & Design' },
    { id: 'emerging', label: 'Emerging & Green Energy' }
  ];

  const filteredCareers = CAREERS_DATA.filter((career) => {
    const matchesCategory =
      selectedCategory === 'all' || career.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      career.title.toLowerCase().includes(query) ||
      career.titleHindi.toLowerCase().includes(query) ||
      career.titleMarathi.toLowerCase().includes(query) ||
      career.brief.toLowerCase().includes(query) ||
      career.categoryLabel.toLowerCase().includes(query) ||
      career.qualifications.some((q) => q.toLowerCase().includes(query)) ||
      career.entranceExams.some((e) => e.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const comparedCareers = CAREERS_DATA.filter((c) =>
    compareCareerIds.includes(c.id)
  );

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container">
        {/* Header & Search */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <GraduationCap size={24} style={{ color: 'var(--forest-green)' }} />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--forest-green)', fontWeight: 800 }}>
              {t.navCareers}
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)', maxWidth: '720px' }}>
            Explore verified Indian educational pathways, required subjects after 10th and 12th, affordable government colleges, and realistic salary brackets.
          </p>

          {/* Search Bar & Active Filters */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: '1.25rem'
            }}
          >
            <div
              style={{
                position: 'relative',
                flex: '1 1 300px',
                maxWidth: '520px'
              }}
            >
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--slate-muted)'
                }}
              />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.6rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--border-sand)',
                  backgroundColor: 'var(--paper-white)',
                  fontSize: '0.92rem',
                  color: 'var(--charcoal)'
                }}
                aria-label="Search Careers"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--slate-muted)'
                  }}
                  aria-label="Clear Search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Comparison Pill Banner */}
            {compareCareerIds.length > 0 && (
              <button
                onClick={() => setShowCompareModal(true)}
                className="btn btn-accent btn-sm"
                style={{ gap: '0.4rem' }}
              >
                <Scale size={16} />
                <span>
                  Compare ({compareCareerIds.length}/2)
                </span>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem',
              marginTop: '1.25rem'
            }}
            role="tablist"
            aria-label="Career Categories"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.45rem 0.9rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: isSelected ? 700 : 500,
                    whiteSpace: 'nowrap',
                    backgroundColor: isSelected ? 'var(--forest-green)' : 'var(--paper-white)',
                    color: isSelected ? '#FFFFFF' : 'var(--charcoal)',
                    border: isSelected ? '1px solid var(--forest-green)' : '1px solid var(--border-sand)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  role="tab"
                  aria-selected={isSelected}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredCareers.length === 0 && (
          <div
            className="card"
            style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              backgroundColor: 'var(--paper-white)'
            }}
          >
            <AlertTriangle size={36} style={{ color: 'var(--terracotta)', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>No careers found matching your criteria</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate-muted)', marginBottom: '1.25rem' }}>
              Try searching for a different keyword like "software", "nurse", "electrician", or "teacher".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn btn-secondary btn-sm"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Career Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredCareers.map((career) => {
            const isBooked = isBookmarked(career.id);
            const isCompared = compareCareerIds.includes(career.id);

            const displayTitle =
              language === 'hi'
                ? career.titleHindi
                : language === 'mr'
                ? career.titleMarathi
                : career.title;

            const displayBrief =
              language === 'hi'
                ? career.briefHindi
                : language === 'mr'
                ? career.briefMarathi
                : career.brief;

            return (
              <div
                key={career.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  {/* Top Meta Row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <span className="badge badge-neutral" style={{ textTransform: 'uppercase', fontSize: '0.72rem' }}>
                      {career.categoryLabel}
                    </span>

                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      <button
                        onClick={() => toggleBookmark(career.id)}
                        aria-label={isBooked ? 'Remove Bookmark' : 'Save to Bookmarks'}
                        title={isBooked ? 'Saved to Bookmarks' : 'Save Career'}
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

                      <button
                        onClick={() => toggleCompareCareer(career.id)}
                        aria-label="Compare career"
                        title={isCompared ? 'Remove from Comparison' : 'Compare with another career'}
                        style={{
                          padding: '0.35rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: isCompared ? 'var(--forest-subtle)' : 'var(--ivory-alt)',
                          color: isCompared ? 'var(--forest-green)' : 'var(--slate-muted)',
                          border: '1px solid var(--border-sand)'
                        }}
                      >
                        <Scale size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--forest-green)',
                      marginBottom: '0.5rem',
                      fontWeight: 700
                    }}
                  >
                    {displayTitle}
                  </h3>

                  {/* Brief */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--charcoal-light)',
                      lineHeight: 1.5,
                      marginBottom: '1rem'
                    }}
                  >
                    {displayBrief}
                  </p>

                  {/* Key Highlights Table Box */}
                  <div
                    style={{
                      backgroundColor: 'var(--warm-ivory)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem',
                      fontSize: '0.82rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginBottom: '1.25rem',
                      border: '1px solid var(--border-sand)'
                    }}
                  >
                    <div>
                      <span style={{ color: 'var(--slate-muted)', display: 'block', fontSize: '0.75rem' }}>
                        Typical Qualification:
                      </span>
                      <strong style={{ color: 'var(--charcoal)' }}>
                        {career.qualifications[0]}
                      </strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.4rem' }}>
                      <div>
                        <span style={{ color: 'var(--slate-muted)', display: 'block', fontSize: '0.72rem' }}>
                          Govt College Cost:
                        </span>
                        <strong style={{ color: 'var(--forest-green)' }}>
                          {career.courseFeesGovt.split('(')[0]}
                        </strong>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ color: 'var(--slate-muted)', display: 'block', fontSize: '0.72rem' }}>
                          Starting Pay (Tier 2/3):
                        </span>
                        <strong style={{ color: 'var(--charcoal)' }}>
                          {career.indicativeSalary.startingTier2OrRural}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <button
                    onClick={() => setSelectedCareer(career)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => loadPresetRoadmap(career)}
                    className="btn btn-secondary btn-sm"
                    title="Build Step-by-Step Roadmap"
                    style={{ color: 'var(--forest-green)' }}
                  >
                    <span>Roadmap</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Career Modal */}
        {selectedCareer && (
          <div className="modal-overlay" onClick={() => setSelectedCareer(null)}>
            <div
              className="modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="career-modal-title"
            >
              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  borderBottom: '1px solid var(--border-sand)',
                  paddingBottom: '1rem',
                  marginBottom: '1.5rem',
                  gap: '1rem'
                }}
              >
                <div>
                  <span className="badge badge-neutral" style={{ marginBottom: '0.4rem' }}>
                    {selectedCareer.categoryLabel}
                  </span>
                  <h2
                    id="career-modal-title"
                    style={{ fontSize: '1.6rem', color: 'var(--forest-green)', fontWeight: 800 }}
                  >
                    {language === 'hi'
                      ? selectedCareer.titleHindi
                      : language === 'mr'
                      ? selectedCareer.titleMarathi
                      : selectedCareer.title}
                  </h2>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <button
                    onClick={() => speakText(`${selectedCareer.title}. ${selectedCareer.overview}`)}
                    className="btn btn-secondary btn-sm"
                    title="Read Aloud"
                  >
                    <Volume2 size={16} />
                  </button>
                  <button
                    onClick={() => toggleBookmark(selectedCareer.id)}
                    className="btn btn-secondary btn-sm"
                    title="Save"
                  >
                    <Bookmark size={16} fill={isBookmarked(selectedCareer.id) ? 'var(--terracotta)' : 'none'} />
                  </button>
                  <button
                    onClick={() => setSelectedCareer(null)}
                    style={{ padding: '0.5rem', color: 'var(--charcoal)' }}
                    aria-label="Close details"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Modal Content Sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {/* 1. Job Role Overview */}
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Lightbulb size={18} style={{ color: 'var(--terracotta)' }} />
                    What does this career involve?
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--charcoal-light)', lineHeight: 1.6 }}>
                    {selectedCareer.overview}
                  </p>
                </div>

                {/* 2. Educational Pathways & Qualifications in India */}
                <div style={{ backgroundColor: 'var(--warm-ivory)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-sand)' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--forest-green)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <GraduationCap size={18} />
                    Required Qualifications in India (Step-by-Step)
                  </h4>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--charcoal)' }}>
                    {selectedCareer.qualifications.map((q, idx) => (
                      <li key={idx} style={{ lineHeight: 1.5 }}>{q}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.85rem' }}>
                    <div>
                      <strong style={{ color: 'var(--charcoal)', display: 'block' }}>After Class 10:</strong>
                      <span style={{ color: 'var(--slate-muted)' }}>{selectedCareer.subjectsAfter10th}</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--charcoal)', display: 'block' }}>After Class 12:</strong>
                      <span style={{ color: 'var(--slate-muted)' }}>{selectedCareer.subjectsAfter12th}</span>
                    </div>
                  </div>
                </div>

                {/* 3. Entrance Exams & Government College Routes */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ border: '1px solid var(--border-sand)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                    <h5 style={{ fontSize: '0.95rem', color: 'var(--charcoal)', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Entrance Examinations
                    </h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {selectedCareer.entranceExams.map((e, idx) => (
                        <span key={idx} className="badge badge-neutral" style={{ fontSize: '0.8rem' }}>
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ border: '1px solid var(--border-sand)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                    <h5 style={{ fontSize: '0.95rem', color: 'var(--forest-green)', marginBottom: '0.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Building size={16} /> Affordable Govt College Pathways
                    </h5>
                    <ul style={{ paddingLeft: '1rem', fontSize: '0.84rem', color: 'var(--charcoal-light)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {selectedCareer.govtColleges.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4. Course Fees (Govt vs Private Benchmark) */}
                <div style={{ backgroundColor: 'var(--paper-white)', border: '1px solid var(--border-sand)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                    <Banknote size={18} style={{ color: 'var(--forest-green)' }} />
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', fontWeight: 700 }}>
                      Course Costs & Fee Benchmarks (Government vs Private)
                    </h4>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.88rem' }}>
                    <div style={{ backgroundColor: 'var(--badge-govt-bg)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--badge-govt-border)' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--badge-govt-text)', textTransform: 'uppercase' }}>
                        Government / Subsidized Route
                      </span>
                      <p style={{ fontWeight: 700, color: 'var(--badge-govt-text)', marginTop: '0.3rem', fontSize: '0.95rem' }}>
                        {selectedCareer.courseFeesGovt}
                      </p>
                    </div>

                    <div style={{ backgroundColor: 'var(--ivory-alt)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-sand)' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--slate-muted)', textTransform: 'uppercase' }}>
                        Private College Comparison
                      </span>
                      <p style={{ fontWeight: 700, color: 'var(--charcoal)', marginTop: '0.3rem', fontSize: '0.95rem' }}>
                        {selectedCareer.courseFeesPrivate}
                      </p>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.75rem', color: 'var(--slate-muted)', marginTop: '0.65rem' }}>
                    <strong>Fee Source & Date:</strong> {selectedCareer.feesSourceDate}
                  </p>
                </div>

                {/* 5. Indicative Salaries with Location Context */}
                <div style={{ border: '1px solid var(--border-sand)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.75rem', fontWeight: 700 }}>
                    Indicative Salaries (With Location & Experience Context)
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', fontSize: '0.88rem' }}>
                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--warm-ivory)', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--slate-muted)' }}>Starting (Tier-2/3 & Rural):</span>
                      <div style={{ fontWeight: 700, color: 'var(--charcoal)', marginTop: '0.2rem' }}>
                        {selectedCareer.indicativeSalary.startingTier2OrRural}
                      </div>
                    </div>
                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--warm-ivory)', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--slate-muted)' }}>Starting (Metro):</span>
                      <div style={{ fontWeight: 700, color: 'var(--forest-green)', marginTop: '0.2rem' }}>
                        {selectedCareer.indicativeSalary.startingMetro}
                      </div>
                    </div>
                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--warm-ivory)', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--slate-muted)' }}>Experienced (5-8+ Years):</span>
                      <div style={{ fontWeight: 700, color: 'var(--terracotta)', marginTop: '0.2rem' }}>
                        {selectedCareer.indicativeSalary.experienced}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Free Learning Resources */}
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BookOpen size={18} style={{ color: 'var(--forest-green)' }} />
                    100% Free Learning Resources & Government Study Portals
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {selectedCareer.freeResources.map((res, idx) => (
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
                          backgroundColor: 'var(--warm-ivory)',
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
                        <span className="badge badge-govt" style={{ fontSize: '0.72rem' }}>
                          Free Portal <ExternalLink size={12} />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 7. Immediate Next Steps */}
                <div style={{ backgroundColor: 'var(--mustard-soft)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--muted-mustard)' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--mustard-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    What You Should Do Next:
                  </h4>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--charcoal)' }}>
                    {selectedCareer.immediateNextSteps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>

                {/* Honest Disclaimer */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', padding: '0.85rem', backgroundColor: 'var(--ivory-alt)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-sand)', fontSize: '0.8rem', color: 'var(--slate-muted)' }}>
                  <AlertTriangle size={16} style={{ color: 'var(--terracotta)', flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    <strong>Statutory Advisory:</strong> {selectedCareer.disclaimer} Udaan India does not guarantee selection in competitive examinations or corporate placements.
                  </span>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '2rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-sand)',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}
              >
                <button
                  onClick={() => {
                    loadPresetRoadmap(selectedCareer);
                    setSelectedCareer(null);
                  }}
                  className="btn btn-accent"
                >
                  <Sparkles size={16} />
                  <span>Generate Personal Roadmap for this Career</span>
                </button>

                <button
                  onClick={() => setSelectedCareer(null)}
                  className="btn btn-secondary"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Side-by-Side Comparison Modal */}
        {showCompareModal && (
          <div className="modal-overlay" onClick={() => setShowCompareModal(false)}>
            <div
              className="modal-dialog"
              style={{ maxWidth: '900px' }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="compare-modal-title"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-sand)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Scale size={22} style={{ color: 'var(--forest-green)' }} />
                  <h3 id="compare-modal-title" style={{ fontSize: '1.4rem', color: 'var(--forest-green)' }}>
                    Career Comparison
                  </h3>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={clearComparison} className="btn btn-secondary btn-sm">
                    Clear Comparison
                  </button>
                  <button onClick={() => setShowCompareModal(false)} aria-label="Close Comparison">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {comparedCareers.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--slate-muted)' }}>
                  No careers selected for comparison. Click the scale icon on any 2 career cards.
                </p>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid var(--border-sand)', color: 'var(--slate-muted)', width: '25%' }}>
                          Feature
                        </th>
                        {comparedCareers.map((c) => (
                          <th key={c.id} style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid var(--border-sand)', color: 'var(--forest-green)', fontSize: '1.05rem' }}>
                            {c.title}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-sand)' }}>Domain</td>
                        {comparedCareers.map((c) => (
                          <td key={c.id} style={{ padding: '0.75rem', borderBottom: '1px solid var(--border-sand)' }}>
                            <span className="badge badge-neutral">{c.categoryLabel}</span>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-sand)' }}>Primary Qualification</td>
                        {comparedCareers.map((c) => (
                          <td key={c.id} style={{ padding: '0.75rem', borderBottom: '1px solid var(--border-sand)' }}>
                            {c.qualifications[0]}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-sand)' }}>Govt Course Cost</td>
                        {comparedCareers.map((c) => (
                          <td key={c.id} style={{ padding: '0.75rem', borderBottom: '1px solid var(--border-sand)', color: 'var(--forest-green)', fontWeight: 700 }}>
                            {c.courseFeesGovt}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-sand)' }}>Private Course Cost</td>
                        {comparedCareers.map((c) => (
                          <td key={c.id} style={{ padding: '0.75rem', borderBottom: '1px solid var(--border-sand)' }}>
                            {c.courseFeesPrivate}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-sand)' }}>Starting Pay (Tier 2/3)</td>
                        {comparedCareers.map((c) => (
                          <td key={c.id} style={{ padding: '0.75rem', borderBottom: '1px solid var(--border-sand)', fontWeight: 700 }}>
                            {c.indicativeSalary.startingTier2OrRural}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-sand)' }}>Starting Pay (Metro)</td>
                        {comparedCareers.map((c) => (
                          <td key={c.id} style={{ padding: '0.75rem', borderBottom: '1px solid var(--border-sand)', fontWeight: 700, color: 'var(--forest-green)' }}>
                            {c.indicativeSalary.startingMetro}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-sand)' }}>Entrance Exams</td>
                        {comparedCareers.map((c) => (
                          <td key={c.id} style={{ padding: '0.75rem', borderBottom: '1px solid var(--border-sand)' }}>
                            {c.entranceExams.join(', ')}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
