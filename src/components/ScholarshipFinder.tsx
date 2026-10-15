import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ScholarshipItem, ScholarshipCategory } from '../types';
import {
  Award,
  Search,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Calendar,
  CheckCircle2,
  X,
  Building2,
  Bookmark,
  Info,
  Banknote,
  MapPin
} from 'lucide-react';

export const ScholarshipFinder: React.FC = () => {
  const {
    language,
    t,
    scholarshipsList,
    selectedScholarship,
    setSelectedScholarship,
    isBookmarked,
    toggleBookmark,
    userProfile
  } = useApp();

  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterState, setFilterState] = useState<string>('all');
  const [filterEducation, setFilterEducation] = useState<string>('all');
  const [scholarshipSearch, setScholarshipSearch] = useState<string>('');

  const filterTabs: { id: string; label: string }[] = [
    { id: 'all', label: t.filterAll },
    { id: 'state_mahadbt', label: 'Maharashtra (MahaDBT)' },
    { id: 'central', label: 'Central Govt (NSP)' },
    { id: 'need_based', label: 'Need-Based / Low Income' },
    { id: 'girls', label: 'Girls in Technical Education' },
    { id: 'pwd', label: 'Specially Abled (PwD)' },
    { id: 'loan_subsidy', label: 'Education Loans & Subsidies' },
    { id: 'private_trust', label: 'Private Foundations' },
    { id: 'sample', label: 'Sample / Demonstration Records' }
  ];

  const filteredScholarships = scholarshipsList.filter((item) => {
    // Category match
    let matchCat = true;
    if (filterCategory === 'sample') {
      matchCat = item.isSampleRecord;
    } else if (filterCategory !== 'all') {
      matchCat = item.category === filterCategory;
    }

    // State match
    const matchState =
      filterState === 'all' ||
      item.targetState === 'All India' ||
      item.targetState.toLowerCase().includes(filterState.toLowerCase());

    // Education match
    const matchEdu =
      filterEducation === 'all' ||
      item.educationLevel.toLowerCase().includes(filterEducation.toLowerCase());

    // Search query
    const query = scholarshipSearch.toLowerCase().trim();
    const matchSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.titleHindi.toLowerCase().includes(query) ||
      item.titleMarathi.toLowerCase().includes(query) ||
      item.provider.toLowerCase().includes(query) ||
      item.portalName.toLowerCase().includes(query) ||
      item.eligibilityCriteria.some((c) => c.toLowerCase().includes(query));

    return matchCat && matchState && matchEdu && matchSearch;
  });

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container">
        {/* Header & State Highlights */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <Award size={26} style={{ color: 'var(--terracotta)' }} />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--forest-green)', fontWeight: 800 }}>
              {t.navScholarships}
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)', maxWidth: '750px' }}>
            Discover central, state, and foundation financial assistance. All government schemes link directly to official state and national portals (scholarships.gov.in, mahadbt.maharashtra.gov.in).
          </p>

          {/* Maharashtra MahaDBT Special Spotlight Banner */}
          <div
            style={{
              backgroundColor: 'var(--forest-subtle)',
              border: '1.5px solid #BDD9CA',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.5rem',
              marginTop: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.3rem' }}>
                <span className="badge badge-govt" style={{ fontSize: '0.75rem' }}>
                  Maharashtra Dedicated Portal
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--forest-green)' }}>
                  MahaDBT (Aaple Sarkar DBT)
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', maxWidth: '640px', lineHeight: 1.5 }}>
                Maharashtra students from families with income up to ₹8 Lakhs can receive a <strong>50% to 100% tuition fee waiver</strong> (Rajarshi Shahu Maharaj EBC / Caste schemes) plus hostel maintenance allowances.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  setFilterCategory('state_mahadbt');
                  setFilterState('Maharashtra');
                }}
                className="btn btn-primary btn-sm"
              >
                Filter MahaDBT Schemes
              </button>
              <a
                href="https://mahadbt.maharashtra.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ gap: '0.35rem' }}
              >
                <span>mahadbt.maharashtra.gov.in</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Search & Dropdown Filter Bar */}
          <div
            style={{
              display: 'flex',
              gap: '0.85rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: '1.5rem'
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1 1 260px' }}>
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
                placeholder="Search scholarship name, portal, or criteria..."
                value={scholarshipSearch}
                onChange={(e) => setScholarshipSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.9rem 0.65rem 2.4rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--border-sand)',
                  backgroundColor: 'var(--paper-white)',
                  fontSize: '0.9rem'
                }}
                aria-label="Search scholarships"
              />
            </div>

            {/* State Filter */}
            <select
              value={filterState}
              onChange={(e) => setFilterState(e.target.value)}
              aria-label="Filter by Indian State"
              style={{
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--border-sand)',
                backgroundColor: 'var(--paper-white)',
                fontSize: '0.88rem',
                color: 'var(--charcoal)',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <option value="all">State: All India & States</option>
              <option value="Maharashtra">Maharashtra (MahaDBT)</option>
              <option value="Uttar Pradesh">Uttar Pradesh (SAMS)</option>
              <option value="Bihar">Bihar (PMS Online)</option>
              <option value="Rajasthan">Rajasthan (SJE)</option>
            </select>

            {/* Education Level Filter */}
            <select
              value={filterEducation}
              onChange={(e) => setFilterEducation(e.target.value)}
              aria-label="Filter by Education Level"
              style={{
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--border-sand)',
                backgroundColor: 'var(--paper-white)',
                fontSize: '0.88rem',
                color: 'var(--charcoal)',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <option value="all">Level: All Education Stages</option>
              <option value="Class 9-10">School: Class 9 to 12</option>
              <option value="Diploma">ITI & Polytechnic Diploma</option>
              <option value="Undergraduate">Undergraduate Degree (UG)</option>
              <option value="Postgraduate">Postgraduate (PG)</option>
            </select>
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.45rem',
              overflowX: 'auto',
              paddingBottom: '0.4rem',
              marginTop: '1.25rem'
            }}
            role="tablist"
          >
            {filterTabs.map((tab) => {
              const isActive = filterCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '20px',
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 700 : 500,
                    whiteSpace: 'nowrap',
                    backgroundColor: isActive ? 'var(--terracotta)' : 'var(--paper-white)',
                    color: isActive ? '#FFFFFF' : 'var(--charcoal)',
                    border: isActive ? '1px solid var(--terracotta)' : '1px solid var(--border-sand)'
                  }}
                  role="tab"
                  aria-selected={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scholarships List Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredScholarships.map((sch) => {
            const isBooked = isBookmarked(sch.id);

            const displayTitle =
              language === 'hi'
                ? sch.titleHindi
                : language === 'mr'
                ? sch.titleMarathi
                : sch.title;

            return (
              <div
                key={sch.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderLeft: sch.isSampleRecord
                    ? '4px solid #F39C12'
                    : sch.isVerifiedGovt
                    ? '4px solid var(--forest-green)'
                    : '4px solid var(--terracotta)'
                }}
              >
                <div>
                  {/* Badge & Bookmark Row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <div>
                      {sch.isSampleRecord ? (
                        <span className="badge badge-sample" style={{ fontSize: '0.72rem' }}>
                          <AlertTriangle size={12} /> Demonstration Sample Record
                        </span>
                      ) : sch.isVerifiedGovt ? (
                        <span className="badge badge-govt" style={{ fontSize: '0.72rem' }}>
                          <ShieldCheck size={12} /> Verified Official Govt Portal
                        </span>
                      ) : (
                        <span className="badge badge-state" style={{ fontSize: '0.72rem' }}>
                          Verified Private Foundation
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleBookmark(sch.id)}
                      aria-label={isBooked ? 'Remove Bookmark' : 'Save Scholarship'}
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

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.18rem',
                      color: 'var(--charcoal)',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      marginBottom: '0.5rem'
                    }}
                  >
                    {displayTitle}
                  </h3>

                  {/* Conducting Provider */}
                  <div style={{ fontSize: '0.82rem', color: 'var(--slate-muted)', marginBottom: '0.75rem' }}>
                    <strong>Department:</strong> {sch.provider}
                  </div>

                  {/* Financial Benefit Callout */}
                  <div
                    style={{
                      backgroundColor: 'var(--warm-ivory)',
                      border: '1px solid var(--border-sand)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--slate-muted)', fontWeight: 700 }}>
                      Financial Assistance:
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--forest-green)', marginTop: '0.2rem' }}>
                      {sch.financialBenefit}
                    </div>
                  </div>

                  {/* Key Metadata Table */}
                  <div style={{ fontSize: '0.82rem', color: 'var(--charcoal-light)', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--slate-muted)', minWidth: '110px' }}>Target State:</span>
                      <strong>{sch.targetState}</strong>
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--slate-muted)', minWidth: '110px' }}>Family Income Cap:</span>
                      <strong>{sch.familyIncomeLimit}</strong>
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--slate-muted)', minWidth: '110px' }}>Level:</span>
                      <span>{sch.educationLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                  <button
                    onClick={() => setSelectedScholarship(sch)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <FileText size={14} />
                    <span>View Document Checklist</span>
                  </button>

                  {!sch.isSampleRecord && (
                    <a
                      href={sch.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ gap: '0.35rem' }}
                      title="Open official portal in new tab"
                    >
                      <span>Apply on Portal</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Scholarship Modal */}
        {selectedScholarship && (
          <div className="modal-overlay" onClick={() => setSelectedScholarship(null)}>
            <div
              className="modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="scholarship-modal-title"
            >
              {/* Modal Header */}
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
                  <div style={{ display: 'flex', gap: '0.45rem', marginBottom: '0.4rem' }}>
                    {selectedScholarship.isSampleRecord ? (
                      <span className="badge badge-sample">Sample Testing Record</span>
                    ) : (
                      <span className="badge badge-govt">Verified Government Scheme</span>
                    )}
                    <span className="badge badge-neutral">{selectedScholarship.targetState}</span>
                  </div>
                  <h2
                    id="scholarship-modal-title"
                    style={{ fontSize: '1.45rem', color: 'var(--forest-green)', fontWeight: 800 }}
                  >
                    {language === 'hi'
                      ? selectedScholarship.titleHindi
                      : language === 'mr'
                      ? selectedScholarship.titleMarathi
                      : selectedScholarship.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedScholarship(null)}
                  style={{ padding: '0.5rem', color: 'var(--charcoal)' }}
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Notice for sample record */}
                {selectedScholarship.isSampleRecord && (
                  <div
                    style={{
                      padding: '1rem',
                      backgroundColor: 'var(--badge-sample-bg)',
                      border: '1px solid var(--badge-sample-border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.85rem',
                      color: 'var(--badge-sample-text)'
                    }}
                  >
                    <strong>Important Notice:</strong> This is a sample test opportunity intended to show how institutional and private awards look. Do not submit sensitive financial documents for demonstration records.
                  </div>
                )}

                {/* Financial Benefit Box */}
                <div style={{ backgroundColor: 'var(--warm-ivory)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-sand)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--slate-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Official Financial Benefit:
                  </div>
                  <div style={{ fontSize: '1.15rem', color: 'var(--forest-green)', fontWeight: 800, marginTop: '0.25rem' }}>
                    {selectedScholarship.financialBenefit}
                  </div>
                </div>

                {/* Eligibility Criteria */}
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.6rem', fontWeight: 700 }}>
                    Eligibility Criteria:
                  </h4>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--charcoal-light)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {selectedScholarship.eligibilityCriteria.map((crit, idx) => (
                      <li key={idx} style={{ lineHeight: 1.5 }}>{crit}</li>
                    ))}
                  </ul>
                </div>

                {/* Required Documents Checklist */}
                <div style={{ backgroundColor: 'var(--paper-white)', border: '1.5px solid var(--border-sand)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--terracotta)', marginBottom: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={18} /> Required Document Checklist for Application
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
                    {selectedScholarship.requiredDocuments.map((doc, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--charcoal)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--terracotta)' }}></span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.78rem', color: 'var(--slate-muted)' }}>
                    <strong>Tip:</strong> Always scan original documents in PDF format (usually under 250KB) and ensure your bank account is active with NPCI Aadhaar linking.
                  </div>
                </div>

                {/* Sourcing & Verification Metadata */}
                <div style={{ fontSize: '0.8rem', color: 'var(--slate-muted)', backgroundColor: 'var(--ivory-alt)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                  <div><strong>Official Verification Source:</strong> {selectedScholarship.verificationSource}</div>
                  <div style={{ marginTop: '0.2rem' }}><strong>Status:</strong> {selectedScholarship.lastVerifiedDate}</div>
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
                {!selectedScholarship.isSampleRecord && (
                  <a
                    href={selectedScholarship.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ gap: '0.4rem' }}
                  >
                    <span>{t.officialPortalLink}</span>
                    <ExternalLink size={16} />
                  </a>
                )}

                <button
                  onClick={() => setSelectedScholarship(null)}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
