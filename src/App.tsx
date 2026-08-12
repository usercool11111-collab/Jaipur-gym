import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DoctorDifference } from './components/DoctorDifference';
import { AboutDoctorSection } from './components/AboutDoctorSection';
import { ProgramsSection } from './components/ProgramsSection';
import { CommunitySection } from './components/CommunitySection';
import { FacilitySection } from './components/FacilitySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-600 selection:text-white antialiased">
      
      {/* Sticky Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Single Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* The Doctor + Trainer Difference */}
        <DoctorDifference onOpenConsultation={handleOpenConsultation} />

        {/* About Dr. Manish */}
        <AboutDoctorSection onOpenConsultation={handleOpenConsultation} />

        {/* Programs & Services */}
        <ProgramsSection onOpenConsultation={handleOpenConsultation} />

        {/* Community & Family */}
        <CommunitySection />

        {/* Facility & Equipment Showcase */}
        <FacilitySection onOpenConsultation={handleOpenConsultation} />

        {/* Proof - 4.8★ Google Reviews & Prescription Cards */}
        <ReviewsSection />

        {/* Visit Us Today / Contact & Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Persistent Bottom Action Bar */}
      <MobileBottomBar />

      {/* Doctor Consultation Popup Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={handleCloseConsultation}
      />

    </div>
  );
}
