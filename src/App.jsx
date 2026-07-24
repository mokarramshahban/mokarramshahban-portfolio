import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import ProfileSidebar from './components/ProfileSidebar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Modals from './components/Modals';
import ChatWidget from './components/ChatWidget';
import { PersonalizationProvider } from './context/PersonalizationContext';
import PersonalizationBadge from './components/PersonalizationBadge';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Scroll to top whenever activeTab changes
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const mainContainer = document.querySelector('.main-page-content');
    if (mainContainer) mainContainer.scrollTop = 0;
  }, [activeTab]);

  return (
    <PersonalizationProvider>
      <div id="tmp-page-content-bento">
        {/* Header Navigation */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Body */}
        <div className="main-page-content" style={{ paddingTop: '24px' }}>
          <div className="tab-content" id="myTabContent">
            <div className="main-demo-front">
              <div className="container">
                <div className="row">
                  {/* Left Profile Sidebar Card */}
                  <ProfileSidebar setActiveTab={setActiveTab} activeTab={activeTab} />

                  {/* Right Tab Content Container */}
                  <div className="col-xl-8 tab-content">
                    <HomeSection activeTab={activeTab} setActiveTab={setActiveTab} />
                    <AboutSection activeTab={activeTab} setActiveTab={setActiveTab} />
                    <ProjectsSection activeTab={activeTab} />
                    <ServicesSection activeTab={activeTab} />
                    <ContactSection activeTab={activeTab} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating AI Chat Assistant */}
        <ChatWidget />

        {/* Adaptive Persona Badge (appears after 2+ interactions) */}
        <PersonalizationBadge />

        {/* Popup Modals */}
        <Modals />

        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </PersonalizationProvider>
  );
}
