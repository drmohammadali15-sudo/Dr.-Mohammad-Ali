import React, { useState } from 'react';
import { DOCTOR_DATA } from '../data/translations';
import { Language } from '../types';
import { Phone, MessageCircle, Camera, CheckCircle2, MapPin, Calendar, Award, Sparkles, ArrowRight } from 'lucide-react';

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

  // Primary doctor portrait image
  const defaultPhotoUrl = '/assets/aistudio/Essential_Pediatric_Care_Poster_8c4fc669.png';
  const activePhoto = customPhotoUrl || defaultPhotoUrl;
  const cleanPhone = DOCTOR_DATA.phone.replace(/\s+/g, '');

  return (
    <section
      id="home"
      className="relative overflow-hidden py-8 sm:py-14"
      style={{
        background:
          'radial-gradient(ellipse 65% 55% at 80% 20%, rgba(13, 113, 128, 0.12), transparent 70%), linear-gradient(135deg, #f7fbfc 0%, #edf6f8 50%, #e6f1f5 100%)',
      }}
    >
      {/* Decorative ambient gradient blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-80 h-80 bg-gradient-to-tr from-sky-200/30 to-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1160px] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols): Short, Crisp Top Titles & Bilingual Introduction */}
          <div className="lg:col-span-7">
            {/* Short top eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#0d7180]/10 via-[#0d7180]/5 to-transparent border border-[#0d7180]/20 text-[#0d7180] font-extrabold text-xs tracking-wider uppercase mb-2.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0d7180]" />
              <span>
                {lang === 'bn' ? 'শিশু বিশেষজ্ঞ · বহরমপুর' : 'Pediatrician · Baharampore'}
              </span>
            </div>

            {/* Short & Punchy Doctor Name & Headline */}
            <h1 className="text-[30px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.12] tracking-[-1.2px] text-[#103b52] mb-3">
              {lang === 'bn' ? (
                <>
                  ডা. মহম্মদ আলি
                  <span className="block mt-1 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0d7180] via-[#0b5f6b] to-[#103b52] bg-clip-text text-transparent">
                    শিশুর সুস্থতায় অভিজ্ঞ চিকিৎসা
                  </span>
                </>
              ) : (
                <>
                  Dr. Mohammad Ali
                  <span className="block mt-1 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0d7180] via-[#0b5f6b] to-[#103b52] bg-clip-text text-transparent">
                    Expert Pediatric Care for Children
                  </span>
                </>
              )}
            </h1>

            {/* SHORT & CRISP PARAGRAPHS (ENGLISH & BANGLA AS REQUESTED) */}
            <div className="bg-gradient-to-b from-white/95 to-[#f9fcfe]/90 border border-[#dce8eb] rounded-[22px] p-4 sm:p-5 mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Language Switcher Tabs */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#e6eff2] flex-wrap gap-2">
                <span className="text-[11px] font-bold text-[#627d89] uppercase tracking-wider">
                  {lang === 'bn' ? 'সংক্ষিপ্ত পরিচিতি:' : 'Quick Summary:'}
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

              {/* Short English Paragraph */}
              {(langTab === 'both' || langTab === 'en') && (
                <div className="text-[13px] sm:text-[14px] text-[#334d5c] leading-relaxed">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0d7180] mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d7180]" />
                    <span>English</span>
                  </div>
                  <p className="m-0">
                    <strong>Dr. Mohammad Ali</strong> — Child Specialist in Baharampore. <strong>MBBS (Cal), MD (Pediatrics), DM (Pediatric Intensive Care)</strong>. Faculty at <strong>Kolkata Medical College & Hospital</strong>. Care for newborns to teens, fevers, vaccinations & growth check-ups.
                  </p>
                </div>
              )}

              {/* Subtle divider if both are shown */}
              {langTab === 'both' && (
                <div className="my-2.5 h-[1px] bg-gradient-to-r from-transparent via-[#d8e6eb] to-transparent" />
              )}

              {/* Short Bangla Paragraph */}
              {(langTab === 'both' || langTab === 'bn') && (
                <div className="text-[13px] sm:text-[14px] text-[#334d5c] leading-relaxed">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0d7180] mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d7180]" />
                    <span>বাংলা</span>
                  </div>
                  <p className="m-0">
                    বহরমপুরের শিশু বিশেষজ্ঞ <strong>ডা. মহম্মদ আলি</strong>। <strong>MBBS (Cal), MD (Pediatrics), DM (PICU)</strong>। <strong>কলকাতা মেডিকেল কলেজ ও হাসপাতালে</strong> কর্মরত। নবজাতক ও শিশুদের জ্বর, সর্দি-কাশি, টিকাদান ও সার্বিক শারীরিক বৃদ্ধি পরীক্ষা।
                  </p>
                </div>
              )}

              {/* Chamber Highlight Strip with Sunday to Saturday Timings */}
              <div className="mt-3 pt-2.5 border-t border-[#e6eff2] flex flex-wrap items-center justify-between gap-2 text-xs text-[#0d7180] font-semibold bg-gradient-to-r from-[#edf7f8] via-[#e5f3f5] to-[#edf7f8] p-2.5 rounded-xl">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0d7180] shrink-0" />
                  <span><strong>মিশন মেডিকেল সেন্টার</strong>, লালদিঘি, বহরমপুর</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#103b52]">
                  <Calendar className="w-4 h-4 text-[#0d7180] shrink-0" />
                  <span><strong>প্রতি রবিবার থেকে শনিবার</strong> (Sunday to Saturday)</span>
                </span>
              </div>
            </div>

            {/* SEPARATE GRADIENT ACTION BUTTONS: BOOKING + CALL + WHATSAPP */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Primary Booking Button */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-3 bg-gradient-to-r from-[#0d7180] via-[#0f7e8f] to-[#138896] hover:from-[#0a5d6a] hover:to-[#0d7180] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-[0_8px_20px_rgba(13,113,128,0.25)] hover:shadow-[0_12px_25px_rgba(13,113,128,0.35)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{lang === 'bn' ? 'অনলাইন বুকিং' : 'Book Serial'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Dedicated Call Button (Ocean Blue Gradient) */}
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0c4a6e] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-[0_8px_20px_rgba(2,132,199,0.25)] transition-all duration-200 hover:-translate-y-0.5"
                title="Direct Phone Call"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{lang === 'bn' ? 'সরাসরি কল' : 'Call'}</span>
              </a>

              {/* Dedicated WhatsApp Button (Emerald WhatsApp Gradient) */}
              <a
                href={`https://wa.me/919093964188?text=${encodeURIComponent(
                  'Hello Dr. Mohammad Ali Chamber, I would like to book an appointment serial.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-[#16a34a] to-[#15803d] hover:from-[#15803d] hover:to-[#166534] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-[0_8px_20px_rgba(22,163,74,0.25)] transition-all duration-200 hover:-translate-y-0.5"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 sm:gap-5 mt-5 text-[#607984] text-xs sm:text-[13px] flex-wrap">
              <span className="flex items-center gap-1.5 hover:text-[#103b52] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#0d7180]" />
                <span>{lang === 'bn' ? '২০ বছরের অভিজ্ঞতা' : "20 Years' Experience"}</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#103b52] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#0d7180]" />
                <span>{lang === 'bn' ? 'কলকাতা মেডিকেল কলেজ' : 'Kolkata Medical College'}</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#103b52] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#0d7180]" />
                <span>{lang === 'bn' ? 'রবি–শনিবার খোলা' : 'Sunday to Saturday Open'}</span>
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Arched Doctor Photo Portrait with High Resolution Proper Fit */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0d7180]/20 to-teal-300/30 rounded-full blur-2xl transform scale-95 pointer-events-none" />

            {/* Arched Portrait Container with Doctor Photo */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] p-1.5 rounded-[170px_170px_28px_28px] bg-gradient-to-b from-[#0d7180]/30 via-white to-[#0d7180]/15 shadow-[0_20px_50px_rgba(16,59,82,0.14)] hover:shadow-[0_28px_60px_rgba(13,113,128,0.22)] transition-all duration-300 group">
              <div className="w-full rounded-[162px_162px_22px_22px] overflow-hidden relative bg-slate-100 aspect-[3/4] max-h-[460px]">
                <img
                  src={activePhoto}
                  alt="Dr. Mohammad Ali - Pediatrician in Baharampore"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
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
                  className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 hover:bg-black/80 active:scale-95 text-white rounded-full text-xs flex items-center gap-1.5 cursor-pointer backdrop-blur-md transition-all hover:scale-105 shadow-sm"
                  title="View / Change Photos"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'পোস্টার' : 'Photos'}</span>
                </button>
              </div>
            </div>

            {/* Floating Badge 1 (Top Left) */}
            <div className="hidden sm:block absolute -left-4 top-16 bg-white/95 backdrop-blur-md py-2.5 px-3.5 rounded-[18px] shadow-[0_14px_35px_rgba(18,59,78,0.12)] text-xs font-bold text-[#103b52] border border-[#dce8eb] pointer-events-none hover:shadow-lg transition-shadow">
              <span className="text-[#0d7180] font-black">✚</span>{' '}
              <span>{lang === 'bn' ? 'শিশু রোগ বিশেষজ্ঞ' : 'Pediatric Care'}</span>
              <em className="block text-[#617582] not-italic font-normal text-[11px] mt-0.5">
                {lang === 'bn' ? 'নবজাতক ও শিশু' : 'Newborn to Adolescent'}
              </em>
            </div>

            {/* Floating Badge 2 (Bottom Right) */}
            <div className="hidden sm:block absolute -right-2 bottom-12 bg-white/95 backdrop-blur-md py-2.5 px-3.5 rounded-[18px] shadow-[0_14px_35px_rgba(18,59,78,0.12)] text-xs font-bold text-[#103b52] border border-[#dce8eb] pointer-events-none hover:shadow-lg transition-shadow">
              <span className="text-[#0d7180] font-black">♡</span>{' '}
              <span>{lang === 'bn' ? 'মিশন মেডিকেল সেন্টার' : 'Mission Medical Centre'}</span>
              <em className="block text-[#617582] not-italic font-normal text-[11px] mt-0.5">
                {lang === 'bn' ? 'রবি থেকে শনিবার' : 'Sunday to Saturday'}
              </em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
