import React from 'react';
import { DOCTOR_DATA } from '../data/translations';
import { Language } from '../types';
import { Phone, ArrowRight, Calendar } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenBooking }) => {
  return (
    <>
      {/* Short & Clean Topbar with Sunday to Saturday Timing Notice */}
      <div className="bg-gradient-to-r from-[#0c3e52] via-[#103b52] to-[#0c3e52] text-[#e8f5f7] text-[12px] sm:text-[13px] py-2 border-b border-white/10">
        <div className="max-w-[1160px] mx-auto px-5 flex justify-between items-center gap-3 flex-wrap">
          <span className="font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {lang === 'bn'
                ? 'ডা. মহম্মদ আলি · শিশু বিশেষজ্ঞ (বহরমপুর)'
                : 'Dr. Mohammad Ali · Pediatrician, Baharampore'}
            </span>
            <span className="hidden sm:inline text-teal-300/40">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-teal-200">
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>{lang === 'bn' ? 'রবি–শনিবার খোলা' : 'Sun–Sat Open'}</span>
            </span>
          </span>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden md:inline text-teal-200">Mission Medical Centre, Laldighi</span>
            <span className="hidden md:inline text-teal-300/40">·</span>
            <a
              href={`tel:${DOCTOR_DATA.phone.replace(/\s+/g, '')}`}
              className="font-mono hover:text-white font-bold text-teal-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-teal-300" />
              <span>{DOCTOR_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#dce8eb] shadow-xs">
        <div className="max-w-[1160px] mx-auto px-5 h-[72px] sm:h-[76px] flex items-center justify-between gap-4">
          {/* Brand mark and short crisp title */}
          <a href="#home" className="flex items-center gap-3 font-extrabold text-[#103b52] tracking-tight group">
            <span className="w-[40px] h-[40px] rounded-[13px] bg-gradient-to-br from-[#0d7180] via-[#0f7e8f] to-[#128a99] grid place-items-center text-white text-[20px] shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
              ✚
            </span>
            <div>
              <span className="text-[16px] sm:text-[18px] font-extrabold block leading-tight text-[#103b52] group-hover:text-[#0d7180] transition-colors">
                {lang === 'bn' ? 'ডা. মহম্মদ আলি' : 'Dr. Mohammad Ali'}
              </span>
              <small className="block text-[10px] tracking-[1.4px] text-[#0d7180] font-bold uppercase mt-0.5">
                {lang === 'bn' ? 'শিশু বিশেষজ্ঞ' : 'PEDIATRICIAN'}
              </small>
            </div>
          </a>

          {/* Links with animated hover line */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-[14px] font-medium text-[#49616d]">
            <a
              href="#home"
              className="hover:text-[#0d7180] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#0d7180] after:to-teal-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {lang === 'bn' ? 'হোম' : 'Home'}
            </a>
            <a
              href="#about"
              className="hover:text-[#0d7180] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#0d7180] after:to-teal-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {lang === 'bn' ? 'পরিচিতি' : 'About'}
            </a>
            <a
              href="#services"
              className="hover:text-[#0d7180] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#0d7180] after:to-teal-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {lang === 'bn' ? 'পরিষেবা' : 'Services'}
            </a>
            <a
              href="#faq"
              className="hover:text-[#0d7180] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#0d7180] after:to-teal-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {lang === 'bn' ? 'প্রশ্নোত্তর' : 'FAQ'}
            </a>
            <a
              href="#appointment"
              className="hover:text-[#0d7180] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#0d7180] after:to-teal-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট' : 'Appointment'}
            </a>
            <a
              href="#contact"
              className="hover:text-[#0d7180] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#0d7180] after:to-teal-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {lang === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </a>
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onToggleLang}
              type="button"
              className="border border-[#dce8eb] bg-white rounded-full px-3 py-1.5 font-bold text-[#103b52] text-xs hover:bg-[#edf5fb] hover:border-[#0d7180]/30 transition-all cursor-pointer shadow-2xs"
            >
              {lang === 'en' ? 'বাংলা' : 'English'}
            </button>

            <button
              onClick={onOpenBooking}
              type="button"
              className="group inline-flex items-center justify-center gap-1.5 border-0 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#0d7180] via-[#0f7e8f] to-[#138896] hover:from-[#095d6b] hover:to-[#0d7180] text-white font-bold text-xs cursor-pointer shadow-[0_8px_20px_rgba(13,113,128,0.22)] hover:shadow-[0_10px_25px_rgba(13,113,128,0.30)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>{lang === 'bn' ? 'বুকিং' : 'Book Serial'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
