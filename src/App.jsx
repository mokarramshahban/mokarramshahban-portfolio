import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import ProfileSidebar from './components/ProfileSidebar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Modals from './components/Modals';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div id="tmp-page-content-bento">
      {/* Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Body */}
      <div className="main-page-content">
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
                  <ServicesSection activeTab={activeTab} />
                  <ContactSection activeTab={activeTab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modals */}
      <Modals />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
