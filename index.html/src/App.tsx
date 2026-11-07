import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CallWhatsAppCards } from './components/CallWhatsAppCards';
import { StatsSection } from './components/StatsSection';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { FAQSection } from './components/FAQSection';
import { BookingSection } from './components/BookingSection';
import { ChamberLocation } from './components/ChamberLocation';
import { Footer } from './components/Footer';
import { DoctorPhotoModal } from './components/DoctorPhotoModal';
import { Language } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'bn' : 'en'));
  };

  const scrollToBooking = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#183342] flex flex-col font-sans antialiased selection:bg-[#d8efed] selection:text-[#0d7180]">
      {/* Topbar & Sticky Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        onOpenBooking={scrollToBooking}
      />

      <main className="flex-1">
        {/* Hero Section with Short Bilingual Text & Direct Action Buttons */}
        <Hero
          lang={lang}
          onOpenBooking={scrollToBooking}
          customPhotoUrl={customPhotoUrl}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        />

        {/* Dedicated Call & WhatsApp Gradient Sections */}
        <CallWhatsAppCards lang={lang} />

        {/* Clinical Qualifications & Metric Stats */}
        <StatsSection lang={lang} />

        {/* About Doctor Profile */}
        <AboutDoctor
          lang={lang}
          onOpenBooking={scrollToBooking}
        />

        {/* Clinical Services Section */}
        <ServicesSection
          lang={lang}
          onOpenBooking={scrollToBooking}
        />

        {/* FAQ Section */}
        <FAQSection
          lang={lang}
          onOpenBooking={scrollToBooking}
        />

        {/* Highlighted, Simple Booking Form with Dropdown Options */}
        <BookingSection
          lang={lang}
        />

        {/* Chamber Contact & Google Maps */}
        <ChamberLocation
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Doctor Photo Modal */}
      <DoctorPhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        lang={lang}
        customPhotoUrl={customPhotoUrl}
        onSetPhotoUrl={setCustomPhotoUrl}
      />

      {/* Signature Sticky WhatsApp Pill with Gradient and Hover Effect */}
      <a
        href="https://wa.me/919093964188"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-40 rounded-full bg-gradient-to-r from-[#17965f] via-[#158f5a] to-[#117649] hover:from-[#127a4d] hover:to-[#0d5e3a] active:scale-90 text-white py-3 px-4 sm:px-5 font-extrabold text-xs sm:text-sm shadow-[0_10px_28px_rgba(18,122,77,0.35)] hover:shadow-[0_14px_35px_rgba(18,122,77,0.50)] flex items-center gap-2 transition-all duration-200 hover:scale-105 cursor-pointer"
        title="WhatsApp +91 9093964188"
      >
        <MessageCircle className="w-4 h-4 fill-white text-white animate-pulse" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
