import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle, Info } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 9999,
        backgroundColor: 'var(--charcoal)',
        color: 'var(--paper-white)',
        padding: '0.75rem 1.25rem',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        fontSize: '0.9rem',
        fontWeight: 500,
        maxWidth: '420px',
        borderLeft: '4px solid var(--forest-green)',
        animation: 'slideUp 0.2s ease-out'
      }}
      role="status"
      aria-live="polite"
    >
      <CheckCircle size={18} style={{ color: 'var(--muted-mustard)', flexShrink: 0 }} />
      <span>{toastMessage}</span>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
