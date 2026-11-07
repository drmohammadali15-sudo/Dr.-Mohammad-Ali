import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { DOCTOR_DATA } from '../data/translations';
import { Language } from '../types';

interface CallWhatsAppCardsProps {
  lang: Language;
}

export const CallWhatsAppCards: React.FC<CallWhatsAppCardsProps> = ({ lang }) => {
  const cleanPhone = DOCTOR_DATA.phone.replace(/\s+/g, '');

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-[#eef7f9] via-white to-[#f7fbfc]">
      <div className="max-w-[1160px] mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center max-w-[650px] mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-[#0d7180] font-extrabold text-xs tracking-[1.8px] uppercase mb-2">
            <span className="w-[20px] h-[2px] bg-gradient-to-r from-transparent to-[#0d7180]" />
            <span>{lang === 'bn' ? 'তাৎক্ষণিক যোগাযোগ মাধ্যম' : 'Instant Contact Channels'}</span>
            <span className="w-[20px] h-[2px] bg-gradient-to-l from-transparent to-[#0d7180]" />
          </div>
          <h2 className="text-[24px] sm:text-[34px] font-extrabold text-[#103b52] tracking-tight">
            {lang === 'bn' ? 'সরাসরি ফোন অথবা WhatsApp বুকিং' : 'Direct Call or WhatsApp Serial'}
          </h2>
          <p className="text-[14px] text-[#55737d] mt-1.5">
            {lang === 'bn'
              ? 'আপনার সুবিধাজনক মাধ্যমে যেকোনো সময় যোগাযোগ করুন — রবিবার থেকে শনিবার খোলা।'
              : 'Choose your preferred channel for instant serial confirmation — Sunday to Saturday.'}
          </p>
        </div>

        {/* 2 Distinct Gradient Cards for Call & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Section 1: DIRECT PHONE CALL (Ocean Blue / Cyan Gradient) */}
          <div className="relative overflow-hidden rounded-[26px] p-6 sm:p-8 bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#0c4a6e] text-white shadow-[0_16px_40px_rgba(3,105,161,0.25)] hover:shadow-[0_22px_50px_rgba(3,105,161,0.38)] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] group">
            {/* Ambient background blur elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-300/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md grid place-items-center text-white shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-sky-200 animate-pulse" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-sky-100 border border-white/20">
                    {lang === 'bn' ? 'সরাসরি কল' : 'Voice Call'}
                  </span>
                </div>

                <div className="text-xs font-semibold text-sky-200 uppercase tracking-wider mb-1">
                  {lang === 'bn' ? 'চেম্বারে সরাসরি কথা বলুন' : 'Direct Doctor Chamber Helpline'}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {lang === 'bn' ? 'সরাসরি ফোন কল' : 'Direct Phone Call'}
                </h3>

                <p className="text-sky-100/90 text-[14px] leading-relaxed mb-6">
                  {lang === 'bn'
                    ? 'জরুরি পরামর্শ, সিরিয়ালের অগ্রগতি ও ক্লিনিকের তথ্য জানতে সরাসরি ফোন করুন।'
                    : 'Call directly for immediate serial inquiry, child health advice, and chamber timings.'}
                </p>

                {/* Info Pills */}
                <div className="space-y-2 mb-6 text-xs text-sky-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-300 shrink-0" />
                    <span>{lang === 'bn' ? 'প্রতিদিন: ১০:০০ AM – ০২:০০ PM ও ০৫:৩০ PM – ০৯:০০ PM' : 'Daily: 10:00 AM – 02:00 PM & 05:30 PM – 09:00 PM'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-300 shrink-0" />
                    <span>{lang === 'bn' ? 'মিশন মেডিকেল সেন্টার, লালদিঘি, বহরমপুর' : 'Mission Medical Centre, Laldighi, Baharampore'}</span>
                  </div>
                </div>
              </div>

              {/* Call Action Button */}
              <a
                href={`tel:${cleanPhone}`}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-white text-[#0369a1] hover:bg-sky-50 active:bg-sky-100 font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span className="font-mono">{DOCTOR_DATA.phone}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" />
              </a>
            </div>
          </div>

          {/* Section 2: WHATSAPP BOOKING (Official Emerald WhatsApp Gradient) */}
          <div className="relative overflow-hidden rounded-[26px] p-6 sm:p-8 bg-gradient-to-br from-[#15803d] via-[#16a34a] to-[#047857] text-white shadow-[0_16px_40px_rgba(22,163,74,0.25)] hover:shadow-[0_22px_50px_rgba(22,163,74,0.38)] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] group">
            {/* Ambient background blur elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-300/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-teal-300/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md grid place-items-center text-white shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-7 h-7 text-emerald-200 animate-pulse fill-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-emerald-100 border border-white/20">
                    {lang === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}
                  </span>
                </div>

                <div className="text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-1">
                  {lang === 'bn' ? 'সহজ অনলাইন চ্যাট ও বুকিং' : 'Fast Chat & Token Booking'}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {lang === 'bn' ? 'WhatsApp এ সিরিয়াল' : 'WhatsApp Serial Booking'}
                </h3>

                <p className="text-emerald-100/90 text-[14px] leading-relaxed mb-6">
                  {lang === 'bn'
                    ? 'মেসেজ পাঠিয়ে দ্রুত সিরিয়াল নম্বর, ভিজিটের তারিখ ও প্রেসক্রিপশন সংক্রান্ত তথ্য নিশ্চিত করুন।'
                    : 'Send a message for fast serial confirmation, token updates, and clinic details via WhatsApp.'}
                </p>

                {/* Info Pills */}
                <div className="space-y-2 mb-6 text-xs text-emerald-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>{lang === 'bn' ? 'রবিবার থেকে শনিবার তাৎক্ষণিক মেসেজ সাপোর্ট' : 'Sunday to Saturday Instant Chat Support'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>{lang === 'bn' ? 'অফিসিয়াল চেম্বার টোকেন ব্যবস্থা' : 'Official Chamber Token Support'}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={`https://wa.me/919093964188?text=${encodeURIComponent(
                  'Hello Dr. Mohammad Ali Chamber (Mission Medical Centre), I want to book an appointment serial for my child.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-white text-[#15803d] hover:bg-emerald-50 active:bg-emerald-100 font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{lang === 'bn' ? 'WhatsApp এ বার্তা পাঠান' : 'Chat on WhatsApp'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
