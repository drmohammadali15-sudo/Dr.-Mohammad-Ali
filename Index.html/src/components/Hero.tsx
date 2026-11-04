import React, { useState } from 'react';
import { DOCTOR_DATA } from '../data/translations';
import { Language } from '../types';
import { Phone, Camera, CheckCircle2, MapPin, Calendar, Award, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  customPhotoUrl: string | null;
  onOpenPhotoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenBooking,
  customPhotoUrl,
  onOpenPhotoModal,
}) => {
  const [langTab, setLangTab] = useState<'both' | 'en' | 'bn'>('both');

  // Use the uploaded portrait poster as default photo
  const defaultPhotoUrl = '/assets/aistudio/Essential_Pediatric_Care_Poster_8c4fc669.png';
  const activePhoto = customPhotoUrl || defaultPhotoUrl;

  return (
    <section
      id="home"
      className="relative overflow-hidden py-12 md:py-18"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(13, 113, 128, 0.12), transparent 70%), linear-gradient(135deg, #f7fbfc 0%, #edf6f8 50%, #e6f1f5 100%)',
      }}
    >
      {/* Decorative ambient gradient blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-80 h-80 bg-gradient-to-tr from-sky-200/30 to-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1160px] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Clean, Uncluttered, Bilingual Presentation */}
          <div className="lg:col-span-7">
            {/* Top eyebrow badge with gradient accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#0d7180]/10 via-[#0d7180]/5 to-transparent border border-[#0d7180]/20 text-[#0d7180] font-extrabold text-xs tracking-wider uppercase mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0d7180]" />
              <span>
                {lang === 'bn' ? 'বিশ্বস্ত শিশু চিকিৎসা পরিষেবা' : 'Trusted Pediatric Healthcare'}
              </span>
            </div>

            {/* Doctor Name & Headline with subtle gradient text */}
            <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold leading-[1.12] tracking-[-1.2px] text-[#103b52] mb-3">
              {lang === 'bn' ? (
                <>
                  ডা. মহম্মদ আলি
                  <span className="block mt-1 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0d7180] via-[#0b5f6b] to-[#103b52] bg-clip-text text-transparent">
                    বহরমপুরের অভিজ্ঞ শিশু বিশেষজ্ঞ
                  </span>
                </>
              ) : (
                <>
                  Dr. Mohammad Ali
                  <span className="block mt-1 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0d7180] via-[#0b5f6b] to-[#103b52] bg-clip-text text-transparent">
                    Pediatrician in Baharampore
                  </span>
                </>
              )}
            </h1>

            {/* FIRST PARAGRAPH: BOTH ENGLISH & BANGLA - CLEAN, SPACIOUS & NEAT */}
            <div className="bg-gradient-to-b from-white/95 to-[#f9fcfe]/90 border border-[#dce8eb] rounded-[22px] p-5 sm:p-6 mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Language Switcher Tabs for custom view preference */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#e6eff2] flex-wrap gap-2">
                <span className="text-[11px] font-bold text-[#627d89] uppercase tracking-wider">
                  {lang === 'bn' ? 'চিকিৎসক বিবরণ (Languages):' : 'Doctor Summary:'}
                </span>

                <div className="inline-flex p-1 rounded-xl bg-[#edf4f6] text-xs font-semibold gap-1">
                  <button
                    type="button"
                    onClick={() => setLangTab('both')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      langTab === 'both'
                        ? 'bg-gradient-to-r from-[#0d7180] to-[#138896] text-white shadow-xs font-bold'
                        : 'text-[#506874] hover:text-[#103b52]'
                    }`}
                  >
                    Both (উভয় ভাষা)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLangTab('en')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      langTab === 'en'
                        ? 'bg-gradient-to-r from-[#0d7180] to-[#138896] text-white shadow-xs font-bold'
                        : 'text-[#506874] hover:text-[#103b52]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLangTab('bn')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      langTab === 'bn'
                        ? 'bg-gradient-to-r from-[#0d7180] to-[#138896] text-white shadow-xs font-bold'
                        : 'text-[#506874] hover:text-[#103b52]'
                    }`}
                  >
                    বাংলা
                  </button>
                </div>
              </div>

              {/* English Paragraph */}
              {(langTab === 'both' || langTab === 'en') && (
                <div className="text-[14px] sm:text-[15px] text-[#334d5c] leading-relaxed">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d7180] mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d7180]" />
                    <span>English</span>
                  </div>
                  <p className="mt-0.5">
                    <strong>Dr. Mohammad Ali</strong> is a Pediatrician in Baharampore with an <strong>MBBS (Cal)</strong>, <strong>MD (Pediatrics)</strong> and <strong>DM (Pediatric Intensive Care)</strong>. He is attached to <strong>Kolkata Medical College and Hospital</strong>. He provides care for newborns, infants, children and adolescents, including treatment for fever, cough and cold, routine vaccination, and growth and development check-ups.
                  </p>
                </div>
              )}

              {/* Subtle divider if both are shown */}
              {langTab === 'both' && (
                <div className="my-3.5 h-[1px] bg-gradient-to-r from-transparent via-[#d8e6eb] to-transparent" />
              )}

              {/* Bangla Paragraph */}
              {(langTab === 'both' || langTab === 'bn') && (
                <div className="text-[14px] sm:text-[15px] text-[#334d5c] leading-relaxed">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d7180] mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d7180]" />
                    <span>বাংলা</span>
                  </div>
                  <p className="mt-0.5">
                    বহরমপুরের শিশু বিশেষজ্ঞ <strong>ডা. মহম্মদ আলি</strong> <strong>MBBS (Cal)</strong>, <strong>MD (Pediatrics)</strong> এবং <strong>DM (Pediatric Intensive Care)</strong> ডিগ্রিধারী। তিনি <strong>কলকাতা মেডিকেল কলেজ ও হাসপাতালে</strong> কর্মরত। নবজাতক থেকে কিশোর বয়স পর্যন্ত শিশুদের জ্বর, সর্দি-কাশি ও অন্যান্য সাধারণ রোগের চিকিৎসা, নিয়মিত টিকাদান এবং শারীরিক বৃদ্ধি ও বিকাশের পরীক্ষা তিনি করে থাকেন।
                  </p>
                </div>
              )}

              {/* Chamber Highlight Strip with soft gradient */}
              <div className="mt-4 pt-3.5 border-t border-[#e6eff2] flex flex-wrap items-center justify-between gap-2.5 text-xs text-[#0d7180] font-semibold bg-gradient-to-r from-[#edf7f8] via-[#e5f3f5] to-[#edf7f8] p-3 rounded-xl">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0d7180] shrink-0" />
                  <span><strong>চেম্বার:</strong> মিশন মেডিকেল সেন্টার, লালদিঘি, বহরমপুর</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#103b52]">
                  <Calendar className="w-4 h-4 text-[#0d7180] shrink-0" />
                  <span><strong>প্রতি রবিবার থেকে বৃহস্পতিবার</strong> (Sun–Thu)</span>
                </span>
              </div>
            </div>

            {/* Action Buttons: Clean, elevated with gradient and hover shine */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#appointment"
                onClick={e => {
                  e.preventDefault();
                  onOpenBooking();
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[#0d7180] via-[#0f7e8f] to-[#138896] hover:from-[#0a5d6a] hover:to-[#0d7180] text-white font-bold text-sm shadow-[0_10px_25px_rgba(13,113,128,0.25)] hover:shadow-[0_14px_30px_rgba(13,113,128,0.35)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Request Appointment'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-white text-[#103b52] border border-[#dce8eb] hover:border-[#0d7180]/40 hover:bg-gradient-to-b hover:from-white hover:to-[#f0f8fa] font-bold text-sm shadow-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{lang === 'bn' ? 'ডাক্তারের বিস্তারিত' : 'Doctor Details'}</span>
              </a>

              <a
                href={`tel:${DOCTOR_DATA.phone.replace(/\s+/g, '')}`}
                className="group inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/90 border border-[#dce8eb] text-[#103b52] hover:text-[#0d7180] hover:border-[#0d7180]/40 font-mono font-bold text-xs transition-all duration-200 hover:shadow-xs"
                title="Call Chamber"
              >
                <div className="w-6 h-6 rounded-full bg-[#0d7180]/10 grid place-items-center group-hover:bg-[#0d7180] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#0d7180] group-hover:text-white transition-colors" />
                </div>
                <span>{DOCTOR_DATA.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-5 mt-6 text-[#607984] text-xs sm:text-[13px] flex-wrap">
              <span className="flex items-center gap-1.5 hover:text-[#103b52] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#0d7180]" />
                <span>{lang === 'bn' ? '২০ বছরের ক্লিনিকাল অভিজ্ঞতা' : "20 Years' Experience"}</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#103b52] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#0d7180]" />
                <span>{lang === 'bn' ? 'কলকাতা মেডিকেল কলেজ' : 'Kolkata Medical College'}</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#103b52] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#0d7180]" />
                <span>{lang === 'bn' ? 'রবি-বৃহস্পতি চেম্বার' : 'Sun–Thu Regular Chamber'}</span>
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Arched Doctor Photo Portrait with Gradient Glow & Hover */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0d7180]/20 to-teal-300/30 rounded-full blur-2xl transform scale-95 pointer-events-none" />

            {/* Arched Portrait Container with Doctor Photo */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] p-1.5 rounded-[170px_170px_28px_28px] bg-gradient-to-b from-[#0d7180]/30 via-white to-[#0d7180]/15 shadow-[0_20px_50px_rgba(16,59,82,0.14)] hover:shadow-[0_28px_60px_rgba(13,113,128,0.22)] transition-all duration-300 group">
              <div className="w-full rounded-[162px_162px_22px_22px] overflow-hidden relative bg-white">
                <img
                  src={activePhoto}
                  alt="Dr. Mohammad Ali - Pediatrician in Baharampore"
                  className="w-full h-[440px] sm:h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay at bottom of photo for text clarity */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#103b52] via-[#103b52]/80 to-transparent p-5 text-white pt-12">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#d9a94b] to-[#f3cf7a] text-[#103b52] text-[10px] font-extrabold uppercase tracking-wider mb-1.5 shadow-xs">
                    <Award className="w-3 h-3" />
                    <span>20 Years Experience</span>
                  </div>
                  <strong className="text-lg font-bold block leading-tight">
                    {lang === 'bn' ? 'ডা. মহম্মদ আলি' : 'Dr. Mohammad Ali'}
                  </strong>
                  <span className="text-xs text-teal-200 block mt-0.5 font-medium">
                    MBBS (Cal), MD (Pediatrics), DM (PICU)
                  </span>
                  <span className="text-[11px] text-slate-300 block">
                    Kolkata Medical College & Hospital
                  </span>
                </div>

                {/* Change photo button */}
                <button
                  onClick={onOpenPhotoModal}
                  type="button"
                  className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full text-xs flex items-center gap-1.5 cursor-pointer backdrop-blur-md transition-all hover:scale-105 shadow-sm"
                  title="View / Change Photos"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'পোস্টার গ্যালারি' : 'Gallery'}</span>
                </button>
              </div>
            </div>

            {/* Floating Badge 1 (Top Left) with hover transition */}
            <div className="hidden sm:block absolute -left-4 top-16 bg-white/95 backdrop-blur-md py-3 px-4 rounded-[18px] shadow-[0_14px_35px_rgba(18,59,78,0.12)] text-xs font-bold text-[#103b52] border border-[#dce8eb] pointer-events-none hover:shadow-lg transition-shadow">
              <span className="text-[#0d7180] font-black">✚</span>{' '}
              <span>{lang === 'bn' ? 'শিশু রোগ বিশেষজ্ঞ' : 'Pediatric Care'}</span>
              <em className="block text-[#617582] not-italic font-normal text-[11px] mt-0.5">
                {lang === 'bn' ? 'নবজাতক থেকে কিশোর' : 'Newborn to Adolescent'}
              </em>
            </div>

            {/* Floating Badge 2 (Bottom Right) with hover transition */}
            <div className="hidden sm:block absolute -right-2 bottom-12 bg-white/95 backdrop-blur-md py-3 px-4 rounded-[18px] shadow-[0_14px_35px_rgba(18,59,78,0.12)] text-xs font-bold text-[#103b52] border border-[#dce8eb] pointer-events-none hover:shadow-lg transition-shadow">
              <span className="text-[#0d7180] font-black">♡</span>{' '}
              <span>{lang === 'bn' ? 'মিশন মেডিকেল সেন্টার' : 'Mission Medical Centre'}</span>
              <em className="block text-[#617582] not-italic font-normal text-[11px] mt-0.5">
                {lang === 'bn' ? 'রবি থেকে বৃহস্পতি' : 'Sunday to Thursday'}
              </em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
