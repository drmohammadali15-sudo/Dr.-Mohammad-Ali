import React from 'react';
import { DOCTOR_DATA } from '../data/translations';
import { Language } from '../types';
import { Award, Hospital, Calendar, Stethoscope, ArrowRight, ShieldCheck } from 'lucide-react';

interface AboutDoctorProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="about" className="py-16 md:py-22 bg-[#f8fcfe] border-b border-[#dce8eb] scroll-mt-16">
      <div className="max-w-[1160px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Official Poster of Dr. Mohammad Ali with Mission Medical Centre Branding */}
          <div className="lg:col-span-5">
            <div className="rounded-[26px] p-1.5 bg-gradient-to-b from-[#0d7180]/20 via-white to-[#0d7180]/10 shadow-[0_16px_45px_rgba(16,59,82,0.12)] hover:shadow-[0_22px_55px_rgba(13,113,128,0.20)] transition-all duration-300 group">
              <div className="rounded-[22px] overflow-hidden bg-white">
                <img
                  src="/assets/aistudio/Caring_Today__Healthy_Tomorrow_cda3382f.png"
                  alt="Dr. Mohammad Ali Official Chamber Poster - Mission Medical Centre"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-4 bg-gradient-to-r from-white to-[#f7fbfc] border-t border-[#dce8eb] flex items-center justify-between text-xs text-[#526e7b]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-[#103b52]">Mission Medical Centre Official Notice</span>
                  </div>
                  <span className="text-[11px] text-[#0d7180] font-extrabold bg-[#eaf6f5] px-2 py-0.5 rounded-md">Laldighi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Details, Qualifications & Chamber Timings */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[#0d7180] font-extrabold text-xs tracking-[1.8px] uppercase mb-2">
              <span className="w-[20px] h-[2px] bg-gradient-to-r from-[#d9a94b] to-[#0d7180]" />
              <span>{lang === 'bn' ? 'ডাক্তারের পরিচিতি ও যোগ্যতা' : 'Doctor Credentials & Care'}</span>
            </div>

            <h2 className="text-[28px] sm:text-[38px] font-extrabold leading-[1.15] text-[#103b52] tracking-[-1px] my-3">
              {lang === 'bn' ? 'ডা. মহম্মদ আলি — শিশু রোগ বিশেষজ্ঞ' : 'Dr. Mohammad Ali — Pediatrician'}
            </h2>

            {/* Doctor description */}
            <div className="text-[15px] sm:text-[16px] text-[#476373] leading-relaxed space-y-3.5 mb-6">
              <p>
                <strong>Dr. Mohammad Ali</strong> (ডা. মহম্মদ আলি) is a senior child specialist (Pediatrician) in Baharampore with <strong>20 years of clinical experience</strong>, attached to <strong>Kolkata Medical College and Hospital</strong>.
              </p>
              <p>
                বহরমপুরের শিশু বিশেষজ্ঞ ডা. মহম্মদ আলি MBBS (Cal), MD (Pediatrics) এবং DM (Pediatric Intensive Care) ডিগ্রিধারী। নবজাতক থেকে কিশোর বয়স পর্যন্ত শিশুদের জ্বর, সর্দি-কাশি, শ্বাসকষ্ট ও অন্যান্য সাধারণ রোগের চিকিৎসা, নিয়মিত টিকাদান এবং শারীরিক বৃদ্ধি ও বিকাশের সার্বিক পরীক্ষা তিনি করে থাকেন।
              </p>
            </div>

            {/* Qualifications 4-card grid with gradient icon badges & hover lift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-[16px] bg-white border border-[#dce8eb] hover:border-[#0d7180]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d7180] to-[#128a99] text-white grid place-items-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <b className="text-[14px] text-[#103b52] block font-bold">MBBS (Cal)</b>
                  <span className="text-xs text-[#55737d]">Calcutta Medical College</span>
                </div>
              </div>

              <div className="p-3.5 rounded-[16px] bg-white border border-[#dce8eb] hover:border-[#0d7180]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d7180] to-[#128a99] text-white grid place-items-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <b className="text-[14px] text-[#103b52] block font-bold">MD (Pediatrics)</b>
                  <span className="text-xs text-[#55737d]">Comprehensive Child Care</span>
                </div>
              </div>

              <div className="p-3.5 rounded-[16px] bg-white border border-[#dce8eb] hover:border-[#0d7180]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d7180] to-[#128a99] text-white grid place-items-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <b className="text-[14px] text-[#103b52] block font-bold">DM (Pediatric Intensive Care)</b>
                  <span className="text-xs text-[#55737d]">Critical PICU Super-Specialty</span>
                </div>
              </div>

              <div className="p-3.5 rounded-[16px] bg-white border border-[#dce8eb] hover:border-[#0d7180]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d7180] to-[#128a99] text-white grid place-items-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Hospital className="w-5 h-5" />
                </div>
                <div>
                  <b className="text-[14px] text-[#103b52] block font-bold">Kolkata Medical College</b>
                  <span className="text-xs text-[#55737d]">Premier Hospital Faculty</span>
                </div>
              </div>
            </div>

            {/* Chamber Days Banner with subtle gradient background */}
            <div className="p-4 rounded-[18px] bg-gradient-to-r from-white via-[#f4fafb] to-white border border-[#dce8eb] mb-6 flex flex-wrap items-center justify-between gap-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d7180]/15 to-teal-400/20 grid place-items-center text-[#0d7180]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm text-[#103b52] block">
                    {lang === 'bn' ? 'চেম্বারের দিন: প্রতি রবিবার থেকে শনিবার (সপ্তাহের ৭ দিন)' : 'Chamber Days: Sunday to Saturday (All 7 Days)'}
                  </strong>
                  <span className="text-xs text-[#617582]">
                    Mission Medical Centre, Laldighi, Baharampore · PIN 742101
                  </span>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                type="button"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-[#0d7180] to-[#138896] hover:from-[#095d6b] hover:to-[#0d7180] text-white font-bold text-xs cursor-pointer shadow-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{lang === 'bn' ? 'সিরিয়াল বুক করুন' : 'Book Serial'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
