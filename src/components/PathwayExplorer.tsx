import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PATHWAYS_DATA, EducationPathwayStage } from '../data/pathwaysData';
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle,
  GraduationCap,
  Banknote,
  Clock,
  Award,
  Layers
} from 'lucide-react';

export const PathwayExplorer: React.FC = () => {
  const { language, t, setActiveTab, setQuickStageFilter, quickStageFilter } = useApp();
  const [activeStageId, setActiveStageId] = useState<string>(
    quickStageFilter.includes('10') ? 'after-10th' : quickStageFilter.includes('12') ? 'after-12th' : 'after-10th'
  );

  const activeStage =
    PATHWAYS_DATA.find((p) => p.id === activeStageId) || PATHWAYS_DATA[0];

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <Layers size={26} style={{ color: 'var(--forest-green)' }} />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--forest-green)', fontWeight: 800 }}>
              {t.navPathways}
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)', maxWidth: '780px' }}>
            Understand the complete structure of the Indian education system. Learn how students can achieve professional degrees through affordable government colleges, polytechnics, and lateral entry without spending lakhs on private coaching.
          </p>

          {/* Stage Selector Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {PATHWAYS_DATA.map((stage) => {
              const isSelected = stage.id === activeStageId;
              const displayName =
                language === 'hi'
                  ? stage.stageNameHindi
                  : language === 'mr'
                  ? stage.stageNameMarathi
                  : stage.stageName;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.95rem',
                    fontWeight: isSelected ? 700 : 500,
                    backgroundColor: isSelected ? 'var(--forest-green)' : 'var(--paper-white)',
                    color: isSelected ? '#FFFFFF' : 'var(--charcoal)',
                    border: isSelected ? '1px solid var(--forest-green)' : '1px solid var(--border-sand)',
                    boxShadow: isSelected ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  {displayName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage Overview Banner */}
        <div
          style={{
            backgroundColor: 'var(--paper-white)',
            border: '1px solid var(--border-sand)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="badge badge-govt" style={{ fontSize: '0.75rem' }}>
              Target: {activeStage.targetGroup}
            </span>
          </div>
          <p style={{ fontSize: '0.92rem', color: 'var(--charcoal-light)', lineHeight: 1.55 }}>
            {activeStage.summary}
          </p>
        </div>

        {/* Pathways Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {activeStage.options.map((opt, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: opt.isAffordableHighlight ? '4px solid var(--forest-green)' : '1px solid var(--border-sand)'
              }}
            >
              <div>
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                  {opt.isAffordableHighlight ? (
                    <span className="badge badge-govt" style={{ fontSize: '0.72rem' }}>
                      <Sparkles size={12} /> {t.affordableHighlight}
                    </span>
                  ) : (
                    <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                      Standard Track
                    </span>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--slate-muted)' }}>
                    <Clock size={13} />
                    <span>{opt.duration}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--charcoal)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {opt.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'var(--charcoal-light)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {opt.description}
                </p>

                {/* Prerequisites */}
                <div style={{ fontSize: '0.8rem', color: 'var(--slate-muted)', marginBottom: '1rem', backgroundColor: 'var(--warm-ivory)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                  <strong>Prerequisites:</strong> {opt.keyPrerequisites}
                </div>

                {/* Cost Comparison */}
                <div style={{ border: '1px solid var(--border-sand)', borderRadius: 'var(--radius-sm)', padding: '0.85rem', fontSize: '0.82rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--forest-green)', fontWeight: 700 }}>Govt Subsidized Cost:</span>
                    <strong style={{ color: 'var(--forest-green)' }}>{opt.avgGovtCost}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-muted)' }}>Private Institute Cost:</span>
                    <span style={{ color: 'var(--charcoal)' }}>{opt.avgPrivateCost}</span>
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--slate-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    Career & Higher Study Outcomes:
                  </span>
                  <ul style={{ paddingLeft: '1.1rem', fontSize: '0.82rem', color: 'var(--charcoal)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {opt.futureOutcomes.map((out, oIdx) => (
                      <li key={oIdx}>{out}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{ marginTop: '1.5rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setActiveTab('careers')}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Explore Careers in this Pathway</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Lateral Entry & Alternative Education Callout Box */}
        <div
          style={{
            marginTop: '3rem',
            backgroundColor: 'var(--mustard-soft)',
            border: '1.5px solid var(--muted-mustard)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Sparkles size={20} style={{ color: 'var(--mustard-dark)' }} />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--mustard-dark)', fontWeight: 800 }}>
              The Low-Cost "Polytechnic to B.Tech" Route Explained
            </h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: 1.6, maxWidth: '850px' }}>
            Many families mistakenly believe that private coaching for JEE (costing ₹1.5L - ₹3L) is the only way to become a software or mechanical engineer. In reality, a student can join a <strong>Government Polytechnic after Class 10 (annual fee ₹8,000 to ₹10,000, 100% reimbursed on MahaDBT for reserved & EWS students)</strong>. After 3 years, the student takes <strong>Direct Second Year Engineering (DSE)</strong> admission into B.Tech without JEE. You graduate with the exact same B.Tech degree, spend 70% less money, and gain superior laboratory skills.
          </p>
        </div>
      </div>
    </section>
  );
};
