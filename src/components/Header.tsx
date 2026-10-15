import React, { useState } from 'react';
import { useApp, ActiveTab } from '../context/AppContext';
import {
  Compass,
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Bookmark,
  Volume2,
  VolumeX,
  Menu,
  X,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  FileCheck2,
  ChevronDown,
  Sparkles,
  UserCheck
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    t,
    activeTab,
    setActiveTab,
    userProfile,
    switchRole,
    bookmarkedIds,
    roadmapSteps,
    isSpeaking,
    speakText,
    stopSpeaking
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleModalOpen, setRoleModalOpen] = useState(false);

  // Clean, concise desktop navigation links that fit comfortably
  const desktopNavLinks: { id: ActiveTab; label: string }[] = [
    { id: 'careers', label: 'Careers' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'exams', label: 'Exams' },
    { id: 'pathways', label: 'Pathways' },
    { id: 'assessment', label: 'Career Quiz' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'roadmap', label: 'My Roadmap' }
  ];

  // Full rich links for mobile drawer with descriptions & icons
  const mobileNavLinks: { id: ActiveTab; label: string; desc: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t.navHome, desc: 'Return to homepage & quick-start', icon: <Compass size={18} /> },
    { id: 'careers', label: t.navCareers, desc: '9 domains, eligibility & salary benchmarks', icon: <GraduationCap size={18} /> },
    { id: 'scholarships', label: t.navScholarships, desc: 'MahaDBT (50% fee waiver), NSP & Central schemes', icon: <Award size={18} /> },
    { id: 'exams', label: t.navExams, desc: 'JEE, NEET, CUET, MHT-CET & fee exemptions', icon: <FileCheck2 size={18} /> },
    { id: 'pathways', label: t.navPathways, desc: 'Post-10th/12th, ITI & Polytechnic Lateral Entry', icon: <BookOpen size={18} /> },
    { id: 'assessment', label: 'Guided Career Assessment', desc: '6-question personalized affordability test', icon: <Sparkles size={18} /> },
    { id: 'mentors', label: t.navMentors, desc: 'Verified educators, officers & student Q&A', icon: <Users size={18} /> },
    { id: 'roadmap', label: t.navRoadmap, desc: 'Track certificates & print roadmap PDF', icon: <CheckCircle2 size={18} /> },
    { id: 'bookmarks', label: t.navBookmarks, desc: `${bookmarkedIds.length} shortlisted careers & schemes`, icon: <Bookmark size={18} /> },
    { id: 'glossary', label: t.navGlossary, desc: 'Simple decoder for DBT, EWS, CAP, NIOS', icon: <HelpCircle size={18} /> }
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAudioToggle = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const summaryText = `${t.brandName}. ${t.tagline}. ${t.heroDescription}`;
      speakText(summaryText);
    }
  };

  return (
    <>
      {/* Top Advisory Strip */}
      <div
        style={{
          backgroundColor: '#193628',
          color: '#E5EDE8',
          fontSize: '0.78rem',
          padding: '0.35rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}
        className="no-print"
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--muted-mustard)', flexShrink: 0 }}></span>
            <span style={{ fontWeight: 500, fontSize: '0.78rem' }}>
              National Public Guidance Portal • 100% Free
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            <button
              onClick={() => handleNavClick('glossary')}
              style={{
                color: 'var(--muted-mustard)',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                textDecoration: 'underline',
                fontWeight: 600
              }}
            >
              <HelpCircle size={13} />
              <span>{t.navGlossary}</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#B2C4B8', fontSize: '0.74rem' }} className="hide-on-mobile">
              <ShieldCheck size={13} style={{ color: 'var(--muted-mustard)' }} />
              <span>Verified AY 2024–2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        style={{
          backgroundColor: 'var(--paper-white)',
          borderBottom: '1px solid var(--border-sand)',
          position: 'sticky',
          top: 0,
          zIndex: 900,
          boxShadow: '0 2px 6px rgba(35, 75, 56, 0.04)'
        }}
        className="no-print"
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
            gap: '0.75rem'
          }}
        >
          {/* 1. Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              cursor: 'pointer',
              flexShrink: 0
            }}
            role="button"
            tabIndex={0}
            aria-label="Udaan India Home"
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'var(--forest-green)',
                color: 'var(--warm-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.2rem',
                border: '1.5px solid var(--muted-mustard)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
              }}
            >
              उ
            </div>
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--forest-green)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1
                }}
              >
                Udaan India
              </div>
              <span
                style={{
                  fontSize: '0.65rem',
                  color: 'var(--slate-muted)',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginTop: '2px'
                }}
              >
                Career Guidance
              </span>
            </div>
          </div>

          {/* 2. Desktop Navigation Links (>= 992px) */}
          <nav
            style={{ display: 'none', alignItems: 'center', gap: '0.2rem' }}
            aria-label="Desktop Navigation"
            className="navbar-desktop-nav"
          >
            {desktopNavLinks.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    padding: '0.45rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--forest-green)' : 'var(--charcoal)',
                    backgroundColor: isActive ? 'var(--forest-subtle)' : 'transparent',
                    border: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease'
                  }}
                  className="desktop-nav-link"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* 3. Action Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
            {/* Audio Read-Aloud Button (Icon on desktop/tablet) */}
            <button
              onClick={handleAudioToggle}
              title={isSpeaking ? t.audioStop : t.audioReadAloud}
              aria-label={isSpeaking ? t.audioStop : t.audioReadAloud}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: isSpeaking ? 'var(--terracotta)' : 'var(--ivory-alt)',
                color: isSpeaking ? '#FFFFFF' : 'var(--charcoal)',
                border: '1px solid var(--border-sand)'
              }}
              className="navbar-tool-btn"
            >
              {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* Language Selector */}
            <div style={{ position: 'relative' }}>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                aria-label="Select Language"
                style={{
                  height: '36px',
                  padding: '0 0.5rem',
                  fontSize: '0.82rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-sand)',
                  backgroundColor: 'var(--warm-ivory)',
                  color: 'var(--forest-green)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <option value="en">EN</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
              </select>
            </div>

            {/* Bookmarks Counter Button */}
            <button
              onClick={() => handleNavClick('bookmarks')}
              title={t.navBookmarks}
              aria-label={`${t.navBookmarks} (${bookmarkedIds.length})`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0 0.55rem',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeTab === 'bookmarks' ? 'var(--forest-subtle)' : 'var(--ivory-alt)',
                color: 'var(--forest-green)',
                border: '1px solid var(--border-sand)',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <Bookmark size={15} />
              <span
                style={{
                  backgroundColor: 'var(--terracotta)',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '0.05rem 0.35rem',
                  fontSize: '0.72rem',
                  fontWeight: 700
                }}
              >
                {bookmarkedIds.length}
              </span>
            </button>

            {/* Role Switcher Button */}
            <button
              onClick={() => setRoleModalOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0 0.6rem',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor:
                  userProfile.role === 'admin'
                    ? 'var(--mustard-soft)'
                    : 'var(--ivory-alt)',
                color: 'var(--charcoal)',
                border: '1px solid var(--border-sand)',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
              className="navbar-role-btn"
              title="Switch user perspective: Student, Mentor, or Admin"
            >
              <span style={{ textTransform: 'capitalize', color: 'var(--forest-green)' }}>
                {userProfile.role}
              </span>
              <ChevronDown size={13} style={{ color: 'var(--slate-muted)' }} />
            </button>

            {/* Mobile Hamburger Menu Toggle (< 992px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="navbar-hamburger-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              style={{
                height: '36px',
                width: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--charcoal)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-sand)',
                backgroundColor: 'var(--ivory-alt)'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: 'var(--paper-white)',
              borderTop: '1px solid var(--border-sand)',
              padding: '1.25rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              maxHeight: 'calc(100vh - 110px)',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-lg)'
            }}
            className="mobile-nav-drawer"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0.5rem 0.5rem 0.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--slate-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Navigation
              </span>
              <button
                onClick={handleAudioToggle}
                style={{
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: isSpeaking ? 'var(--terracotta)' : 'var(--forest-green)',
                  fontWeight: 600
                }}
              >
                {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                <span>{isSpeaking ? 'Stop Audio' : 'Listen Page'}</span>
              </button>
            </div>

            {mobileNavLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.7rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === item.id ? 'var(--forest-subtle)' : 'transparent',
                  color: activeTab === item.id ? 'var(--forest-green)' : 'var(--charcoal)',
                  textAlign: 'left',
                  border: activeTab === item.id ? '1px solid #BCDCC9' : '1px solid transparent'
                }}
              >
                <div style={{ marginTop: '2px', color: activeTab === item.id ? 'var(--forest-green)' : 'var(--slate-muted)' }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: activeTab === item.id ? 700 : 600, fontSize: '0.92rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--slate-muted)', marginTop: '1px' }}>
                    {item.desc}
                  </div>
                </div>
              </button>
            ))}

            {/* Admin CMS access if role is admin */}
            {userProfile.role === 'admin' && (
              <button
                onClick={() => handleNavClick('admin')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--mustard-soft)',
                  color: 'var(--mustard-dark)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textAlign: 'left',
                  marginTop: '0.5rem',
                  border: '1px solid var(--muted-mustard)'
                }}
              >
                <ShieldCheck size={18} />
                <span>Admin CMS Verification Panel</span>
              </button>
            )}

            {/* Role switch button inside mobile drawer */}
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--slate-muted)' }}>Current Profile:</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setRoleModalOpen(true);
                }}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem' }}
              >
                <UserCheck size={14} />
                <span style={{ textTransform: 'capitalize' }}>{userProfile.role} (Switch)</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Role Switcher Modal */}
      {roleModalOpen && (
        <div className="modal-overlay" onClick={() => setRoleModalOpen(false)}>
          <div
            className="modal-dialog"
            style={{ maxWidth: '480px' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="role-modal-title"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 id="role-modal-title" style={{ fontSize: '1.2rem', color: 'var(--forest-green)' }}>
                {t.switchRole}
              </h3>
              <button onClick={() => setRoleModalOpen(false)} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--slate-muted)', marginBottom: '1.25rem' }}>
              Select a persona to test the portal from different user perspectives:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div
                onClick={() => {
                  switchRole('student');
                  setRoleModalOpen(false);
                }}
                style={{
                  padding: '1rem',
                  border: userProfile.role === 'student' ? '2px solid var(--forest-green)' : '1px solid var(--border-sand)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: userProfile.role === 'student' ? 'var(--forest-subtle)' : 'var(--paper-white)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--forest-green)' }}>1. Student: Aarav Deshmukh</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--slate-muted)' }}>Class 12 Science, Maharashtra • OBC/EWS background</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--charcoal)', marginTop: '0.25rem' }}>
                  Accesses career assessment, MahaDBT fee concessions, and personal roadmaps.
                </div>
              </div>

              <div
                onClick={() => {
                  switchRole('mentor');
                  setRoleModalOpen(false);
                }}
                style={{
                  padding: '1rem',
                  border: userProfile.role === 'mentor' ? '2px solid var(--forest-green)' : '1px solid var(--border-sand)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: userProfile.role === 'mentor' ? 'var(--forest-subtle)' : 'var(--paper-white)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--forest-green)' }}>2. Verified Mentor: Dr. Sunita Patil</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--slate-muted)' }}>Govt College Faculty & Rural Career Counsellor</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--charcoal)', marginTop: '0.25rem' }}>
                  Can review student questions and schedule supervised career advisory sessions.
                </div>
              </div>

              <div
                onClick={() => {
                  switchRole('admin');
                  setRoleModalOpen(false);
                  setActiveTab('admin');
                }}
                style={{
                  padding: '1rem',
                  border: userProfile.role === 'admin' ? '2px solid var(--forest-green)' : '1px solid var(--border-sand)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: userProfile.role === 'admin' ? 'var(--mustard-soft)' : 'var(--paper-white)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--mustard-dark)' }}>3. Portal Admin: Safety & Verification Lead</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--slate-muted)' }}>CMS Verification & Moderation Authority</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--charcoal)', marginTop: '0.25rem' }}>
                  Can toggle "Sample Record" flags, verify official government URLs, and inspect safety reports.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive layout styles */}
      <style>{`
        /* Desktop links visible on screens >= 992px */
        @media (min-width: 992px) {
          .navbar-desktop-nav {
            display: flex !important;
          }
          .navbar-hamburger-btn {
            display: none !important;
          }
        }

        /* Desktop links hidden and hamburger shown on screens < 992px */
        @media (max-width: 991px) {
          .navbar-desktop-nav {
            display: none !important;
          }
          .navbar-hamburger-btn {
            display: flex !important;
          }
        }

        .desktop-nav-link:hover {
          color: var(--forest-green) !important;
          background-color: var(--warm-ivory) !important;
        }

        /* Responsive hiding of minor items on small mobile */
        @media (max-width: 540px) {
          .navbar-role-btn {
            display: none !important;
          }
          .navbar-tool-btn {
            display: none !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
