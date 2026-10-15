import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CareerExplorer } from './components/CareerExplorer';
import { ScholarshipFinder } from './components/ScholarshipFinder';
import { ExamGuide } from './components/ExamGuide';
import { PathwayExplorer } from './components/PathwayExplorer';
import { CareerQuiz } from './components/CareerQuiz';
import { MentorDirectory } from './components/MentorDirectory';
import { StudentRoadmap } from './components/StudentRoadmap';
import { SavedBookmarks } from './components/SavedBookmarks';
import { GlossaryModal } from './components/GlossaryModal';
import { AdminPortal } from './components/AdminPortal';
import { Toast } from './components/Toast';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <main id="main-content" tabIndex={-1}>
      {activeTab === 'home' && (
        <>
          <Hero />
          <CareerExplorer />
          <ScholarshipFinder />
          <PathwayExplorer />
        </>
      )}
      {activeTab === 'careers' && <CareerExplorer />}
      {activeTab === 'scholarships' && <ScholarshipFinder />}
      {activeTab === 'exams' && <ExamGuide />}
      {activeTab === 'pathways' && <PathwayExplorer />}
      {activeTab === 'assessment' && <CareerQuiz />}
      {activeTab === 'mentors' && <MentorDirectory />}
      {activeTab === 'roadmap' && <StudentRoadmap />}
      {activeTab === 'bookmarks' && <SavedBookmarks />}
      {activeTab === 'glossary' && <GlossaryModal />}
      {activeTab === 'admin' && <AdminPortal />}
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      {/* Skip to Content for Keyboard / Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only"
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 9999,
          backgroundColor: 'var(--terracotta)',
          color: '#FFFFFF',
          padding: '0.6rem 1rem',
          borderRadius: '4px',
          fontWeight: 700
        }}
        onFocus={(e) => {
          e.currentTarget.classList.remove('sr-only');
        }}
        onBlur={(e) => {
          e.currentTarget.classList.add('sr-only');
        }}
      >
        Skip to main content
      </a>

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flex: 1 }}>
          <MainContent />
        </div>
        <Footer />
        <Toast />
      </div>
    </AppProvider>
  );
};

export default App;
