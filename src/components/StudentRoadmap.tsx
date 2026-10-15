import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileCheck2,
  CheckCircle2,
  Circle,
  Plus,
  Printer,
  RotateCcw,
  Sparkles,
  ExternalLink,
  ShieldAlert,
  Calendar
} from 'lucide-react';

export const StudentRoadmap: React.FC = () => {
  const {
    t,
    roadmapSteps,
    toggleRoadmapStep,
    addCustomRoadmapStep,
    resetRoadmap,
    userProfile
  } = useApp();

  const [newStepTitle, setNewStepTitle] = useState<string>('');
  const [newStepCategory, setNewStepCategory] = useState<'academic' | 'document' | 'entrance' | 'skill'>('document');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const completedCount = roadmapSteps.filter((s) => s.completed).length;
  const progressPercent =
    roadmapSteps.length > 0 ? Math.round((completedCount / roadmapSteps.length) * 100) : 0;

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStepTitle.trim()) return;
    addCustomRoadmapStep(newStepTitle.trim(), newStepCategory);
    setNewStepTitle('');
    setShowAddForm(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <FileCheck2 size={26} style={{ color: 'var(--forest-green)' }} />
                <h2 style={{ fontSize: '1.8rem', color: 'var(--forest-green)', fontWeight: 800 }}>
                  Personal Admission & Scholarship Roadmap
                </h2>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate-muted)' }}>
                Track required statutory certificates, entrance deadlines, and course milestones. Saved locally in your browser.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }} className="no-print">
              <button onClick={handlePrint} className="btn btn-secondary btn-sm" style={{ gap: '0.35rem' }}>
                <Printer size={15} />
                <span>Print / Save PDF</span>
              </button>
              <button onClick={resetRoadmap} className="btn btn-secondary btn-sm" style={{ gap: '0.35rem' }}>
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Student Profile Info Bar (Printable) */}
          <div
            style={{
              backgroundColor: 'var(--paper-white)',
              border: '1px solid var(--border-sand)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem 1.25rem',
              marginTop: '1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              fontSize: '0.88rem'
            }}
          >
            <div>
              <strong>Student: </strong>{userProfile.name} ({userProfile.educationStage})
            </div>
            <div>
              <strong>State: </strong>{userProfile.state} • <strong>Category: </strong>{userProfile.category}
            </div>
          </div>

          {/* Progress Bar */}
          <div
            style={{
              backgroundColor: 'var(--paper-white)',
              border: '1px solid var(--border-sand)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginTop: '1rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--charcoal)' }}>
                Roadmap Completion Progress:
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--forest-green)' }}>
                {progressPercent}% ({completedCount}/{roadmapSteps.length} Milestones)
              </span>
            </div>

            <div
              style={{
                width: '100%',
                height: '10px',
                backgroundColor: 'var(--border-subtle)',
                borderRadius: '5px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  backgroundColor: 'var(--forest-green)',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>
        </div>

        {/* Milestones Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
          {roadmapSteps.map((step, idx) => {
            const isDone = step.completed;

            return (
              <div
                key={step.id}
                onClick={() => toggleRoadmapStep(step.id)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.15rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isDone ? 'var(--forest-subtle)' : 'var(--paper-white)',
                  border: isDone ? '1px solid #BCDCC9' : '1px solid var(--border-sand)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ marginTop: '2px', color: isDone ? 'var(--forest-green)' : 'var(--slate-muted)' }}>
                  {isDone ? <CheckCircle2 size={22} /> : <Circle size={22} />}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: 700,
                        color: isDone ? 'var(--forest-green)' : 'var(--charcoal)',
                        textDecoration: isDone ? 'line-through' : 'none'
                      }}
                    >
                      {idx + 1}. {step.title}
                    </span>

                    <span className="badge badge-neutral" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>
                      {step.category}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--charcoal-light)', lineHeight: 1.5 }}>
                    {step.description}
                  </p>

                  {step.deadlineNotice && (
                    <div style={{ fontSize: '0.78rem', color: 'var(--terracotta)', fontWeight: 600, marginTop: '0.35rem' }}>
                      <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                      {step.deadlineNotice}
                    </div>
                  )}

                  {step.externalLink && (
                    <a
                      href={step.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.78rem',
                        color: 'var(--forest-green)',
                        fontWeight: 600,
                        marginTop: '0.35rem',
                        textDecoration: 'underline'
                      }}
                    >
                      <span>Verification Link</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Custom Milestone Form */}
        <div className="no-print">
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="btn btn-secondary"
              style={{ width: '100%', gap: '0.4rem', borderStyle: 'dashed' }}
            >
              <Plus size={16} />
              <span>Add Custom Milestone to Checklist</span>
            </button>
          ) : (
            <div
              className="card"
              style={{
                backgroundColor: 'var(--warm-ivory)',
                padding: '1.25rem',
                border: '1px solid var(--border-sand)'
              }}
            >
              <h4 style={{ fontSize: '1rem', color: 'var(--forest-green)', fontWeight: 700, marginBottom: '0.75rem' }}>
                Add New Preparation Milestone
              </h4>

              <form onSubmit={handleAddSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Milestone Title:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Collect Tahsildar Income Certificate by Friday"
                    value={newStepTitle}
                    onChange={(e) => setNewStepTitle(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-sand)',
                      fontSize: '0.88rem',
                      backgroundColor: 'var(--paper-white)'
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Milestone Type:
                  </label>
                  <select
                    value={newStepCategory}
                    onChange={(e) => setNewStepCategory(e.target.value as any)}
                    style={{
                      width: '100%',
                      padding: '0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-sand)',
                      fontSize: '0.88rem',
                      backgroundColor: 'var(--paper-white)'
                    }}
                  >
                    <option value="document">Statutory Document (Income/Domicile/Caste)</option>
                    <option value="entrance">Entrance Examination Form</option>
                    <option value="academic">Academic Prep / NCERT Revision</option>
                    <option value="skill">Skill Course / Free Online Module</option>
                  </select>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="btn btn-secondary btn-sm"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Save to Roadmap
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
