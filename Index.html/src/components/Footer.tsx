import React from 'react';
import { DOCTOR_DATA } from '../data/translations';
import { Language } from '../types';
import { MapPin, Phone, Calendar } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-gradient-to-b from-[#0b2f42] via-[#092636] to-[#071c28] text-[#d7e7eb] pt-12 pb-8 border-t border-[#1d4356]">
      <div className="max-w-[1160px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          {/* Doctor Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0d7180] to-teal-400 grid place-items-center text-white font-bold text-sm">
                ✚
              </span>
              <strong className="text-white text-lg block">
                {lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.name}
              </strong>
            </div>
            <p className="text-[13px] text-[#a9c1c8] leading-relaxed mb-4">
              {lang === 'bn'
                ? 'শিশু রোগ বিশেষজ্ঞ (Pediatrician) · এমবিবিএস (কলি), এমডি, ডিএম (পেডিয়াট্রিক ইনটেনসিভ কেয়ার)। কলকাতা মেডিকেল কলেজ ও হাসপাতালে কর্মরত।'
                : 'Pediatrician · MBBS (Cal), MD (Pediatrics), DM (Pediatric Intensive Care). Attached to Kolkata Medical College & Hospital.'}
            </p>
            <div className="text-xs text-teal-300 flex items-center gap-2 font-mono">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{DOCTOR_DATA.phone}</span>
            </div>
          </div>

          {/* Chamber Location & Days */}
          <div className="md:col-span-4">
            <strong className="text-white text-sm font-bold block mb-2 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>{lang === 'bn' ? 'চেম্বারের ঠিকানা ও সময়' : 'Chamber Location & Schedule'}</span>
            </strong>
            <p className="text-[13px] text-[#a9c1c8] leading-relaxed mb-2">
              Mission Medical Centre, Laldighi, Baharampore, Murshidabad, West Bengal – 742101
            </p>
            <div className="text-xs text-teal-200 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              <span>{lang === 'bn' ? 'রবিবার থেকে বৃহস্পতিবার' : 'Sunday to Thursday (Regular)'}</span>
            </div>
          </div>

          {/* Important Medical Disclaimer */}
          <div className="md:col-span-3">
            <strong className="text-white text-sm font-bold block mb-2">
              {lang === 'bn' ? 'জরুরি বিজ্ঞপ্তি' : 'Important Notice'}
            </strong>
            <p className="text-[12px] text-[#8fa8b0] leading-relaxed m-0">
              {lang === 'bn'
                ? 'ওয়েবসাইটের তথ্য চিকিৎসকের সরাসরি পরামর্শের বিকল্প নয়। জরুরি পরিস্থিতিতে অবিলম্বে নিকটস্থ হাসপাতালের ইমার্জেন্সিতে যোগাযোগ করুন।'
                : 'Website content is for patient awareness and serial booking only. In an emergency, please visit the nearest hospital immediately.'}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-[11px] text-[#8aa3ab] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {DOCTOR_DATA.name} · Mission Medical Centre, Baharampore.
          </div>
          <div className="text-teal-400/80">
            MBBS (Cal) · MD (Pediatrics) · DM (PICU)
          </div>
        </div>
      </div>
    </footer>
  );
};
