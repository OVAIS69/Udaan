import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Compass,
  Award,
  ArrowRight,
  BookOpen,
  Wrench,
  Building2,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, setActiveTab, setQuickStageFilter } = useApp();

  const quickStartOptions = [
    {
      id: 'class-10',
      label: 'I am in Class 10',
      desc: 'Choose streams (Science, Commerce, Arts) or explore Polytechnic & ITI diplomas.',
      icon: <BookOpen size={20} style={{ color: 'var(--terracotta)' }} />,
      tab: 'pathways' as const,
      filter: 'After Class 10'
    },
    {
      id: 'class-12',
      label: 'I am in Class 12',
      desc: 'Find undergraduate degrees, national/state entrance exams, and fee concessions.',
      icon: <GraduationCap size={20} style={{ color: 'var(--forest-green)' }} />,
      tab: 'pathways' as const,
      filter: 'After Class 12'
    },
    {
      id: 'ug-student',
      label: 'I am pursuing graduation',
      desc: 'Discover internships, post-matric scholarships, entrance exams (UPSC, SSC, Banking).',
      icon: <Compass size={20} style={{ color: 'var(--forest-green)' }} />,
      tab: 'careers' as const,
      filter: 'Graduation'
    },
    {
      id: 'grad-passed',
      label: 'I have completed graduation',
      desc: 'Explore competitive government recruitment, master’s degrees, and tech careers.',
      icon: <Building2 size={20} style={{ color: 'var(--charcoal)' }} />,
      tab: 'careers' as const,
      filter: 'Graduate Careers'
    },
    {
      id: 'govt-aspirant',
      label: 'I am looking for government jobs',
      desc: 'Civil Services, Staff Selection Commission, Railways, Defence, and State PSCs.',
      icon: <ShieldCheck size={20} style={{ color: 'var(--forest-green)' }} />,
      tab: 'careers' as const,
      filter: 'Government Careers'
    },
    {
      id: 'skill-earning',
      label: 'I want to learn a skill & start earning',
      desc: 'ITI technical trades, Solar energy, Electrical wireman, and paid apprenticeships.',
      icon: <Wrench size={20} style={{ color: 'var(--terracotta)' }} />,
      tab: 'careers' as const,
      filter: 'Vocational & Skilled Trades'
    }
  ];

  const handleQuickSelect = (tab: any, filter: string) => {
    setQuickStageFilter(filter);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      style={{
        backgroundColor: 'var(--warm-ivory)',
        padding: '3.5rem 0 2rem 0',
        borderBottom: '1px solid var(--border-sand)'
      }}
    >
      <div className="container">
        {/* Editorial Hero Layout */}
        <div
          style={{
            maxWidth: '860px',
            marginBottom: '2.5rem'
          }}
        >
          {/* Eyebrow badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', marginBottom: '1.25rem' }}>
            <span
              className="badge"
              style={{
                backgroundColor: 'var(--forest-subtle)',
                color: 'var(--forest-green)',
                border: '1px solid #C2D7CB',
                fontSize: '0.82rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '20px'
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--terracotta)' }} />
              National Public Career Guidance Initiative
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--slate-muted)' }}>
              • Zero tuition bias • Free for every student
            </span>
          </div>

          {/* Hero Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)',
              color: 'var(--forest-green)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem'
            }}
          >
            {t.tagline}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--charcoal-light)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '740px'
            }}
          >
            {t.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={() => setActiveTab('assessment')}
              className="btn btn-accent"
              style={{ fontSize: '1rem', padding: '0.75rem 1.6rem' }}
            >
              <Compass size={18} />
              <span>{t.findCareerPath}</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => setActiveTab('scholarships')}
              className="btn btn-primary"
              style={{ fontSize: '1rem', padding: '0.75rem 1.6rem' }}
            >
              <Award size={18} />
              <span>{t.exploreScholarships}</span>
            </button>

            <button
              onClick={() => setActiveTab('pathways')}
              className="btn btn-secondary"
              style={{ fontSize: '0.95rem', padding: '0.75rem 1.3rem' }}
            >
              <BookOpen size={16} />
              <span>{t.navPathways}</span>
            </button>
          </div>
        </div>

        {/* Quick-Start Selector Box */}
        <div
          style={{
            backgroundColor: 'var(--paper-white)',
            border: '1.5px solid var(--border-sand)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 1.5rem',
            boxShadow: 'var(--shadow-sm)',
            marginTop: '1.5rem'
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span style={{ width: '10px', height: '10px', backgroundColor: 'var(--terracotta)', borderRadius: '2px' }}></span>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--charcoal)', fontWeight: 700 }}>
                {t.quickStartTitle}
              </h2>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate-muted)' }}>
              {t.quickStartSubtitle}
            </p>
          </div>

          {/* 6 Selector Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem'
            }}
          >
            {quickStartOptions.map((opt) => (
              <div
                key={opt.id}
                onClick={() => handleQuickSelect(opt.tab, opt.filter)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleQuickSelect(opt.tab, opt.filter)}
                style={{
                  padding: '1.2rem',
                  border: '1px solid var(--border-sand)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--warm-ivory)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                className="quick-card"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.6rem' }}>
                    <div
                      style={{
                        padding: '0.45rem',
                        backgroundColor: 'var(--paper-white)',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        border: '1px solid var(--border-sand)'
                      }}
                    >
                      {opt.icon}
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--forest-green)' }}>
                      {opt.label}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--slate-muted)', lineHeight: 1.45 }}>
                    {opt.desc}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--terracotta)',
                    marginTop: '1rem'
                  }}
                >
                  <span>Explore Pathways</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Core Capabilities Follow-Through */}
        <div style={{ marginTop: '3.5rem', marginBottom: '1.5rem' }}>
          <h3
            style={{
              fontSize: '1.25rem',
              color: 'var(--charcoal)',
              fontWeight: 700,
              marginBottom: '1.25rem',
              borderLeft: '4px solid var(--forest-green)',
              paddingLeft: '0.75rem'
            }}
          >
            How Udaan India guides your educational journey:
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}
          >
            <div className="card" onClick={() => setActiveTab('careers')} style={{ cursor: 'pointer' }}>
              <div style={{ color: 'var(--forest-green)', marginBottom: '0.5rem', fontWeight: 700 }}>
                1. Explore Career Paths
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-muted)' }}>
                Detailed qualification steps, subject combinations, and realistic starting salaries without false hype.
              </p>
            </div>

            <div className="card" onClick={() => setActiveTab('scholarships')} style={{ cursor: 'pointer' }}>
              <div style={{ color: 'var(--terracotta)', marginBottom: '0.5rem', fontWeight: 700 }}>
                2. Find Scholarships
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-muted)' }}>
                MahaDBT (Maharashtra 50% waiver), National Scholarship Portal, state post-matric schemes, and private trusts.
              </p>
            </div>

            <div className="card" onClick={() => setActiveTab('exams')} style={{ cursor: 'pointer' }}>
              <div style={{ color: 'var(--forest-green)', marginBottom: '0.5rem', fontWeight: 700 }}>
                3. Prepare Entrance Exams
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-muted)' }}>
                JEE, NEET, CUET, MHT-CET, SSC, Defence NDA — fee waivers, timelines, and free government mock tests.
              </p>
            </div>

            <div className="card" onClick={() => setActiveTab('pathways')} style={{ cursor: 'pointer' }}>
              <div style={{ color: 'var(--forest-green)', marginBottom: '0.5rem', fontWeight: 700 }}>
                4. Affordable Colleges & ITIs
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-muted)' }}>
                Government Polytechnics, DIETs, central universities, and low-cost alternative diplomas with lateral entry.
              </p>
            </div>

            <div className="card" onClick={() => setActiveTab('mentors')} style={{ cursor: 'pointer' }}>
              <div style={{ color: 'var(--terracotta)', marginBottom: '0.5rem', fontWeight: 700 }}>
                5. Connect with Mentors
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-muted)' }}>
                Ask questions to verified government officers, university professors, and first-generation graduate volunteers.
              </p>
            </div>

            <div className="card" onClick={() => setActiveTab('roadmap')} style={{ cursor: 'pointer' }}>
              <div style={{ color: 'var(--forest-green)', marginBottom: '0.5rem', fontWeight: 700 }}>
                6. Build Personal Roadmap
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-muted)' }}>
                Track document deadlines (Aadhaar DBT, Domicile, Income certificates) with printable personal checklists.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quick-card:hover {
          border-color: var(--forest-green) !important;
          background-color: #FFFFFF !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </section>
  );
};
