import React from 'react';
import { DOCTOR_DATA } from '../data/translations';
import { Language } from '../types';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Building } from 'lucide-react';

interface ChamberLocationProps {
  lang: Language;
}

export const ChamberLocation: React.FC<ChamberLocationProps> = ({ lang }) => {
  return (
    <section id="contact" className="py-16 md:py-22 bg-gradient-to-b from-white via-[#f7fbfc] to-white border-b border-[#dce8eb] scroll-mt-16">
      <div className="max-w-[1160px] mx-auto px-5">
        {/* Section Head */}
        <div className="text-center max-w-[690px] mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-[#0d7180] font-extrabold text-xs tracking-[1.8px] uppercase mb-2">
            <span className="w-[20px] h-[2px] bg-gradient-to-r from-transparent to-[#0d7180]" />
            <span>{lang === 'bn' ? 'চেম্বারের অবস্থান ও ছবি' : 'Chamber Location & Street View'}</span>
            <span className="w-[20px] h-[2px] bg-gradient-to-l from-transparent to-[#0d7180]" />
          </div>

          <h2 className="text-[28px] sm:text-[38px] font-extrabold leading-[1.15] text-[#103b52] tracking-[-1px] my-2">
            {lang === 'bn' ? 'মিশন মেডিকেল সেন্টার, লালদিঘি' : 'Mission Medical Centre, Laldighi'}
          </h2>

          <p className="text-[15px] text-[#617582] mt-2 mb-0">
            {lang === 'bn'
              ? 'ডা. মহম্মদ আলির বহরমপুর চেম্বার। আসার আগে ফোনে বা হোয়াটসঅ্যাপে সিরিয়াল নিশ্চিত করুন।'
              : 'Dr. Mohammad Ali’s Baharampore chamber. Contact via phone or WhatsApp for appointment confirmation.'}
          </p>
        </div>

        {/* 4 Contact Info Cards: Address, Schedule, Call, WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {/* Card 1: Address */}
          <div className="group p-5 sm:p-6 border border-[#dce8eb] rounded-[22px] bg-white hover:border-[#0d7180]/50 hover:shadow-[0_12px_30px_rgba(13,113,128,0.12)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d7180] to-[#149cae] grid place-items-center text-white mb-3.5 shadow-xs group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <b className="block text-[#103b52] text-sm mb-1 font-bold">
              {lang === 'bn' ? 'চেম্বারের ঠিকানা' : 'Chamber Address'}
            </b>
            <span className="text-[12px] sm:text-[13px] text-[#55737d] leading-relaxed block">
              Mission Medical Centre, Laldighi, Baharampore, Murshidabad – 742101
            </span>
            <span className="inline-block mt-2.5 text-[10px] font-bold text-[#0d7180] bg-[#eaf6f5] px-2 py-0.5 rounded-md">
              Laldighi Landmark
            </span>
          </div>

          {/* Card 2: Schedule */}
          <div className="group p-5 sm:p-6 border border-[#dce8eb] rounded-[22px] bg-white hover:border-[#0d7180]/50 hover:shadow-[0_12px_30px_rgba(13,113,128,0.12)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d7180] to-[#149cae] grid place-items-center text-white mb-3.5 shadow-xs group-hover:scale-105 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <b className="block text-[#103b52] text-sm mb-1 font-bold">
              {lang === 'bn' ? 'রোগী দেখার সময়' : 'Visiting Schedule'}
            </b>
            <span className="text-[12px] sm:text-[13px] text-[#55737d] leading-relaxed block">
              <strong className="text-[#103b52] font-bold">Sunday to Saturday</strong><br />
              Morning: 10:00 AM – 02:00 PM<br />
              Evening: 05:30 PM – 09:00 PM
            </span>
            <span className="inline-block mt-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              Open 7 Days
            </span>
          </div>

          {/* Card 3: Direct Phone Call (Blue Gradient) */}
          <a
            href={`tel:${DOCTOR_DATA.phone.replace(/\s+/g, '')}`}
            className="group p-5 sm:p-6 rounded-[22px] bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#0c4a6e] text-white shadow-[0_10px_25px_rgba(3,105,161,0.22)] hover:shadow-[0_16px_35px_rgba(3,105,161,0.35)] transition-all duration-300 hover:-translate-y-1 block active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md grid place-items-center text-white mb-3.5 shadow-xs group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <b className="block text-white text-sm mb-1 font-bold">
              {lang === 'bn' ? 'সরাসরি ফোন কল' : 'Direct Phone Call'}
            </b>
            <span className="font-mono font-extrabold text-white text-base block mb-1">
              {DOCTOR_DATA.phone}
            </span>
            <span className="text-[11px] text-sky-100 block">
              {lang === 'bn' ? 'ক্লিনিকে সরাসরি কথা বলুন →' : 'Click to call directly →'}
            </span>
          </a>

          {/* Card 4: WhatsApp Booking (Green Gradient) */}
          <a
            href="https://wa.me/919093964188"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 sm:p-6 rounded-[22px] bg-gradient-to-br from-[#15803d] via-[#16a34a] to-[#047857] text-white shadow-[0_10px_25px_rgba(22,163,74,0.22)] hover:shadow-[0_16px_35px_rgba(22,163,74,0.35)] transition-all duration-300 hover:-translate-y-1 block active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md grid place-items-center text-white mb-3.5 shadow-xs group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 fill-white" />
            </div>
            <b className="block text-white text-sm mb-1 font-bold">
              {lang === 'bn' ? 'WhatsApp এ সিরিয়াল' : 'WhatsApp Serial'}
            </b>
            <span className="font-mono font-extrabold text-white text-base block mb-1">
              {DOCTOR_DATA.phone}
            </span>
            <span className="text-[11px] text-emerald-100 block">
              {lang === 'bn' ? 'মেসেজ পাঠিয়ে টোকেন নিন →' : 'Chat & get token →'}
            </span>
          </a>
        </div>

        {/* 2-Column: Real Building Photo + Google Map Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Real Chamber Exterior Photo with Hover Zoom */}
          <div className="border border-[#dce8eb] rounded-[24px] overflow-hidden bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="p-4 sm:p-5 border-b border-[#dce8eb] flex items-center justify-between bg-gradient-to-r from-[#fafcfc] to-[#f4fafb]">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#0d7180]" />
                <h3 className="font-bold text-[#103b52] text-sm sm:text-base">
                  {lang === 'bn' ? 'মিশন মেডিকেল সেন্টার ভবন (লালদিঘি)' : 'Mission Medical Centre Building'}
                </h3>
              </div>
              <span className="text-[11px] font-bold text-[#0d7180] bg-[#eaf6f5] px-2.5 py-0.5 rounded-full shadow-xs">
                Exterior Photo
              </span>
            </div>

            <div className="relative flex-1 min-h-[300px] bg-slate-100 overflow-hidden">
              <img
                src="/assets/aistudio/Vibrant_Kolkata_Medical_Centre_Alleyway_6774023e.png"
                alt="Mission Medical Centre Building Exterior - Laldighi, Baharampore"
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                <span className="text-xs font-bold block text-emerald-300">
                  মিশন মেডিকেল সেন্টার (Mission Medical Centre)
                </span>
                <span className="text-[11px] text-slate-200 mt-0.5 block">
                  Laldighi, Baharampore — Signboard visible from street
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-gradient-to-r from-white to-[#fafcfc] border-t border-[#dce8eb] text-xs text-[#617582] flex items-center justify-between">
              <span>{lang === 'bn' ? 'লালদিঘির কাছে ক্লিনিক ভবনটি অবস্থিত' : 'Located near Laldighi waterbody'}</span>
              <span className="font-mono text-[#0d7180] font-bold">PIN 742101</span>
            </div>
          </div>

          {/* Interactive Google Map with Direction Link */}
          <div className="border border-[#dce8eb] rounded-[24px] overflow-hidden bg-[#edf4f5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="p-4 sm:p-5 border-b border-[#dce8eb] flex items-center justify-between bg-gradient-to-r from-[#fafcfc] to-[#f4fafb]">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#0d7180]" />
                <h3 className="font-bold text-[#103b52] text-sm sm:text-base">
                  {lang === 'bn' ? 'Google Maps নেভিগেশন' : 'Live Google Map Location'}
                </h3>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/search/?api=1&query=Mission+Medical+Centre+Laldighi+Baharampur+Murshidabad+742101"
                className="text-xs font-bold text-[#0d7180] hover:text-[#095d6b] flex items-center gap-1 transition-colors"
              >
                <span>{lang === 'bn' ? 'বড় ম্যাপে খুলুন' : 'Open in Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative flex-1 min-h-[300px]">
              <iframe
                title="Google Maps Location - Mission Medical Centre Laldighi Baharampur"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Mission%20Medical%20Centre,%20Laldighi,%20Baharampur,%20Murshidabad,%20West%20Bengal%20742101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              />
            </div>

            <div className="p-3.5 bg-gradient-to-r from-white to-[#fafcfc] border-t border-[#dce8eb] text-xs text-[#617582] flex items-center justify-between">
              <span>Mission Medical Centre, Laldighi, Baharampore</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir/?api=1&destination=Mission+Medical+Centre+Laldighi+Baharampur"
                className="font-bold text-[#0d7180] hover:text-[#095d6b] flex items-center gap-1 transition-colors"
              >
                <span>{lang === 'bn' ? 'দিকনির্দেশ নিন (Directions) →' : 'Get Directions →'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
