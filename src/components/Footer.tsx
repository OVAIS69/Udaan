import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, ExternalLink, Phone, AlertCircle, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, setActiveTab } = useApp();

  return (
    <footer
      style={{
        backgroundColor: 'var(--charcoal)',
        color: '#E5E9E6',
        padding: '3.5rem 0 2rem 0',
        borderTop: '4px solid var(--forest-green)',
        marginTop: '4rem'
      }}
      className="no-print"
    >
      <div className="container">
        {/* Main Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand & Purpose */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--forest-green)',
                  color: 'var(--warm-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  border: '1px solid var(--muted-mustard)'
                }}
              >
                उ
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
                {t.brandName}
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#B5C0B9', lineHeight: 1.6, marginBottom: '1rem' }}>
              “{t.tagline}”
            </p>
            <p style={{ fontSize: '0.82rem', color: '#97A59C', lineHeight: 1.5 }}>
              Dedicated to first-generation learners, rural students, and families exploring affordable educational pathways across all Indian states.
            </p>
          </div>

          {/* Official Government Portals */}
          <div>
            <h4 style={{ color: 'var(--muted-mustard)', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Verified Official Portals
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li>
                <a
                  href="https://scholarships.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#E0E7E2', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>National Scholarship Portal (NSP)</span>
                  <ExternalLink size={13} style={{ color: 'var(--muted-mustard)' }} />
                </a>
              </li>
              <li>
                <a
                  href="https://mahadbt.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#E0E7E2', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>MahaDBT (Maharashtra Portal)</span>
                  <ExternalLink size={13} style={{ color: 'var(--muted-mustard)' }} />
                </a>
              </li>
              <li>
                <a
                  href="https://education.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#E0E7E2', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>Ministry of Education (Govt of India)</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aicte-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#E0E7E2', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>AICTE (Technical Scholarships)</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://ugc.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#E0E7E2', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>University Grants Commission (UGC)</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://ncert.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#E0E7E2', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>NCERT (Free Textbooks & Exemplars)</span>
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Student Helplines & Mental Health */}
          <div>
            <h4 style={{ color: 'var(--muted-mustard)', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Student Helplines & Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ color: 'var(--muted-mustard)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Phone size={14} /> Tele-MANAS (Govt Mental Health)
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.2rem' }}>
                  14416 (24x7 Toll-Free)
                </div>
                <div style={{ fontSize: '0.75rem', color: '#A2B0A6' }}>Confidential counseling for exam stress</div>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ color: 'var(--muted-mustard)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Phone size={14} /> National Scholarship Helpline
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.2rem' }}>
                  0120 - 6619540
                </div>
                <div style={{ fontSize: '0.75rem', color: '#A2B0A6' }}>helpdesk@nsp.gov.in</div>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ color: 'var(--muted-mustard)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Phone size={14} /> Childline & Youth Assistance
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.2rem' }}>
                  1098 (Toll-Free)
                </div>
              </div>
            </div>
          </div>

          {/* Student Safeguarding & Privacy Shield */}
          <div>
            <h4 style={{ color: 'var(--muted-mustard)', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Safeguarding & Ethics
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.82rem', color: '#B5C0B9' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <ShieldCheck size={18} style={{ color: 'var(--muted-mustard)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Student Privacy Shield:</strong> Phone numbers, exact addresses, and Aadhaar digits are never requested or published.
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <HeartHandshake size={18} style={{ color: 'var(--muted-mustard)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Minor Safeguarding:</strong> Interactions for students under 18 occur in moderated, group-supervised environments.
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <AlertCircle size={18} style={{ color: 'var(--terracotta)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Anti-Fraud Warning:</strong> Genuine government scholarships never ask for money or OTPs. Never pay brokers.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.5rem',
            fontSize: '0.78rem',
            color: '#8A998F',
            lineHeight: 1.55
          }}
        >
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Legal & Transparency Disclaimer:</strong> Udaan India is an independent public-interest educational guidance tool designed for career literacy and awareness. Udaan India does not conduct exams, issue degrees, charge fees, or guarantee admissions in competitive examinations or government appointments. Fee structures, dates, and eligibility criteria are sourced directly from official brochures of statutory authorities (AICTE, UGC, NTA, DGT, UPSC, State CET Cells) and are subject to state updates. Always verify details on official government web portals before submitting financial documents.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
            <span>© 2024-2026 Udaan India. Built for students across every state and union territory.</span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => setActiveTab('glossary')} style={{ color: 'var(--muted-mustard)', textDecoration: 'underline' }}>
                Education Glossary
              </button>
              <button onClick={() => setActiveTab('admin')} style={{ color: '#8A998F', textDecoration: 'underline' }}>
                Verification Log & CMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
