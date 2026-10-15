import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/glossaryData';
import {
  HelpCircle,
  Search,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const GlossaryModal: React.FC = () => {
  const { language, t, setActiveTab } = useApp();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const query = searchTerm.toLowerCase().trim();
    if (!query) return true;
    return (
      item.term.toLowerCase().includes(query) ||
      item.hindiTerm.toLowerCase().includes(query) ||
      item.marathiTerm.toLowerCase().includes(query) ||
      item.meaning.toLowerCase().includes(query)
    );
  });

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <HelpCircle size={26} style={{ color: 'var(--forest-green)' }} />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--forest-green)', fontWeight: 800 }}>
              {t.navGlossary} — Education Terms Explained Simply
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)', maxWidth: '750px' }}>
            Government admission forms, scholarship portals, and college notices are full of confusing acronyms. Here is what they actually mean in simple everyday language.
          </p>

          {/* Search Bar */}
          <div style={{ position: 'relative', marginTop: '1.5rem', maxWidth: '480px' }}>
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
              placeholder="Search terms like DBT, EWS, CAP Round, Domicile, Lateral Entry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.9rem 0.65rem 2.4rem',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--border-sand)',
                backgroundColor: 'var(--paper-white)',
                fontSize: '0.9rem'
              }}
              aria-label="Search education glossary"
            />
          </div>
        </div>

        {/* Terms Accordion / Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredTerms.map((term, idx) => {
            const displayTerm =
              language === 'hi'
                ? term.hindiTerm
                : language === 'mr'
                ? term.marathiTerm
                : term.term;

            return (
              <div
                key={idx}
                className="card"
                style={{
                  backgroundColor: 'var(--paper-white)',
                  borderLeft: '4px solid var(--forest-green)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--forest-green)', fontWeight: 700 }}>
                    {displayTerm}
                  </h3>
                  <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                    {term.term.split('(')[0].trim()}
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--charcoal)', lineHeight: 1.55, marginBottom: '0.85rem' }}>
                  {term.meaning}
                </p>

                <div
                  style={{
                    backgroundColor: 'var(--warm-ivory)',
                    border: '1px solid var(--border-sand)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    fontSize: '0.84rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div>
                    <strong style={{ color: 'var(--terracotta)' }}>Why It Matters for You: </strong>
                    <span style={{ color: 'var(--charcoal-light)' }}>{term.whyItMatters}</span>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.4rem' }}>
                    <strong style={{ color: 'var(--forest-green)' }}>What You Need to Do: </strong>
                    <span style={{ color: 'var(--charcoal-light)' }}>{term.howToGetOrDo}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button
            onClick={() => setActiveTab('scholarships')}
            className="btn btn-primary"
            style={{ gap: '0.4rem' }}
          >
            <span>Ready? Explore Verified Scholarships</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
