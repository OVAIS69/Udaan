import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  FileCheck2,
  Users,
  Settings,
  Database,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

export const AdminPortal: React.FC = () => {
  const {
    userProfile,
    scholarshipsList,
    toggleSampleFlag,
    toggleVerifiedFlag,
    qaQuestions,
    switchRole
  } = useApp();

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <ShieldCheck size={28} style={{ color: 'var(--mustard-dark)' }} />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--charcoal)', fontWeight: 800 }}>
              Portal Administration & Verification CMS
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)' }}>
            Administrative management tools to ensure compliance with Indian student safeguarding guidelines, verify government scholarship links, and mark sample records.
          </p>
        </div>

        {/* Admin Warning Banner */}
        <div
          style={{
            backgroundColor: 'var(--mustard-soft)',
            border: '1.5px solid var(--muted-mustard)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <strong style={{ color: 'var(--mustard-dark)', fontSize: '0.95rem', display: 'block' }}>
              Active CMS Persona: {userProfile.name}
            </strong>
            <span style={{ fontSize: '0.82rem', color: 'var(--charcoal)' }}>
              Permissions: Content Verification, Scheme Flagging, Q&A Moderation, Minor Safeguarding Audit.
            </span>
          </div>

          <button onClick={() => switchRole('student')} className="btn btn-secondary btn-sm">
            Switch Back to Student View
          </button>
        </div>

        {/* Section 1: Scholarship Verification & Sample Flag Control */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--forest-green)', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Database size={18} /> Manage Scholarship Verification & Sample Indicators
          </h3>

          <div style={{ overflowX: 'auto', backgroundColor: 'var(--paper-white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-sand)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--warm-ivory)', borderBottom: '1px solid var(--border-sand)' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Opportunity Title</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Portal</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center' }}>Official Govt Status</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center' }}>Sample Flag</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Last Verified</th>
                </tr>
              </thead>
              <tbody>
                {scholarshipsList.map((sch) => (
                  <tr key={sch.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 600, color: 'var(--charcoal)' }}>
                      {sch.title}
                    </td>
                    <td style={{ padding: '0.75rem', color: 'var(--slate-muted)' }}>
                      {sch.portalName}
                    </td>
                    <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                      <button
                        onClick={() => toggleVerifiedFlag(sch.id)}
                        className={`badge ${sch.isVerifiedGovt ? 'badge-govt' : 'badge-neutral'}`}
                        style={{ cursor: 'pointer' }}
                        title="Click to toggle verified status"
                      >
                        {sch.isVerifiedGovt ? 'Verified Govt' : 'Unverified'}
                      </button>
                    </td>
                    <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                      <button
                        onClick={() => toggleSampleFlag(sch.id)}
                        className={`badge ${sch.isSampleRecord ? 'badge-sample' : 'badge-neutral'}`}
                        style={{ cursor: 'pointer' }}
                        title="Click to toggle demonstration sample status"
                      >
                        {sch.isSampleRecord ? 'Sample Record' : 'Real Opportunity'}
                      </button>
                    </td>
                    <td style={{ padding: '0.75rem', fontSize: '0.78rem', color: 'var(--slate-muted)' }}>
                      {sch.lastVerifiedDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Safeguarding & Q&A Moderation Queue */}
        <div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <FileCheck2 size={18} /> Moderated Student Q&A Submissions ({qaQuestions.length})
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {qaQuestions.map((qa) => (
              <div
                key={qa.id}
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--paper-white)',
                  border: '1px solid var(--border-sand)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--slate-muted)' }}>
                    From: {qa.studentName} • Date: {qa.date}
                  </span>
                  <div style={{ fontWeight: 600, color: 'var(--charcoal)', marginTop: '0.2rem' }}>
                    "{qa.question}"
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <span className="badge badge-govt" style={{ fontSize: '0.72rem' }}>
                    Approved by Moderator
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
