import React from 'react';
import { Language } from '../types';
import { Award, GraduationCap, HeartPulse, Building2 } from 'lucide-react';

interface StatsSectionProps {
  lang: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ lang }) => {
  return (
    <section className="py-14 bg-gradient-to-b from-white via-[#f8fcfe] to-white border-b border-[#dce8eb]">
      <div className="max-w-[1160px] mx-auto px-5">
        {/* 4 Clean Metric Cards with Hover Lift and Gradient Accents */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {/* Card 1 */}
          <div className="group relative p-6 border border-[#dce8eb] rounded-[22px] bg-gradient-to-b from-white to-[#f8fcfe] text-center hover:border-[#0d7180]/50 hover:shadow-[0_12px_30px_rgba(13,113,128,0.12)] transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#0d7180] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 mx-auto mb-2.5 rounded-xl bg-gradient-to-br from-[#0d7180]/10 to-teal-500/10 grid place-items-center text-[#0d7180] group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <strong className="text-[28px] sm:text-[32px] text-[#0d7180] font-extrabold block leading-tight font-mono">
              20+
            </strong>
            <span className="text-[13px] text-[#4b6674] block mt-1 font-bold">
              {lang === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Years Experience'}
            </span>
            <span className="text-[11px] text-[#7d97a3] block mt-0.5">
              {lang === 'bn' ? 'শিশু চিকিৎসা ও যত্ন' : 'Pediatric Healthcare'}
            </span>
          </div>

          {/* Card 2 */}
          <div className="group relative p-6 border border-[#dce8eb] rounded-[22px] bg-gradient-to-b from-white to-[#f8fcfe] text-center hover:border-[#0d7180]/50 hover:shadow-[0_12px_30px_rgba(13,113,128,0.12)] transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#0d7180] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 mx-auto mb-2.5 rounded-xl bg-gradient-to-br from-[#0d7180]/10 to-teal-500/10 grid place-items-center text-[#0d7180] group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <strong className="text-[22px] sm:text-[24px] text-[#0d7180] font-extrabold block leading-tight">
              MBBS (Cal)
            </strong>
            <span className="text-[13px] text-[#4b6674] block mt-1 font-bold">
              {lang === 'bn' ? 'কলকাতা বিশ্ববিদ্যালয়' : 'Calcutta University'}
            </span>
            <span className="text-[11px] text-[#7d97a3] block mt-0.5">
              {lang === 'bn' ? 'মেডিকেল ডিগ্রি' : 'Medical Degree'}
            </span>
          </div>

          {/* Card 3 */}
          <div className="group relative p-6 border border-[#dce8eb] rounded-[22px] bg-gradient-to-b from-white to-[#f8fcfe] text-center hover:border-[#0d7180]/50 hover:shadow-[0_12px_30px_rgba(13,113,128,0.12)] transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#0d7180] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 mx-auto mb-2.5 rounded-xl bg-gradient-to-br from-[#0d7180]/10 to-teal-500/10 grid place-items-center text-[#0d7180] group-hover:scale-110 transition-transform">
              <HeartPulse className="w-5 h-5" />
            </div>
            <strong className="text-[22px] sm:text-[24px] text-[#0d7180] font-extrabold block leading-tight">
              MD & DM
            </strong>
            <span className="text-[13px] text-[#4b6674] block mt-1 font-bold">
              {lang === 'bn' ? 'শিশু নিবিড় পরিচর্যা' : 'Pediatric Intensive Care'}
            </span>
            <span className="text-[11px] text-[#7d97a3] block mt-0.5">
              {lang === 'bn' ? 'সুপার স্পেশালিটি (PICU)' : 'Super-Specialty PICU'}
            </span>
          </div>

          {/* Card 4 */}
          <div className="group relative p-6 border border-[#dce8eb] rounded-[22px] bg-gradient-to-b from-white to-[#f8fcfe] text-center hover:border-[#0d7180]/50 hover:shadow-[0_12px_30px_rgba(13,113,128,0.12)] transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#0d7180] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 mx-auto mb-2.5 rounded-xl bg-gradient-to-br from-[#0d7180]/10 to-teal-500/10 grid place-items-center text-[#0d7180] group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <strong className="text-[20px] sm:text-[22px] text-[#0d7180] font-extrabold block leading-tight">
              Kolkata Medical
            </strong>
            <span className="text-[13px] text-[#4b6674] block mt-1 font-bold">
              {lang === 'bn' ? 'কলেজ ও হাসপাতাল' : 'College & Hospital'}
            </span>
            <span className="text-[11px] text-[#7d97a3] block mt-0.5">
              {lang === 'bn' ? 'হাসপাতালে সংযুক্ত' : 'Hospital Attachment'}
            </span>
          </div>
        </div>

        {/* Doctor's Credentials Landscape Banner with Smooth Hover Lift */}
        <div className="relative group rounded-[22px] overflow-hidden p-1 bg-gradient-to-r from-[#0d7180]/20 via-teal-200/40 to-[#0d7180]/20 shadow-sm hover:shadow-[0_16px_35px_rgba(13,113,128,0.18)] transition-all duration-300">
          <div className="rounded-[18px] overflow-hidden bg-white">
            <img
              src="/assets/aistudio/pediatrician_variant_3_c49ec288.png"
              alt="Dr. Mohammad Ali - Pediatrician Credentials Banner: MBBS (Cal), MD Pediatric, DM Pediatric Intensive Care, Experience 20 Years"
              className="w-full h-auto object-cover max-h-[300px] transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
