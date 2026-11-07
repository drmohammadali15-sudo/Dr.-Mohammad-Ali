import React, { useState } from 'react';
import { Star, MapPin, Phone, MessageCircle, Navigation, ShieldCheck, Bookmark, Clock } from 'lucide-react';
import { DOCTOR_DATA } from '../data/translations';
import { Language } from '../types';

interface GoogleKnowledgeCardProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const GoogleKnowledgeCard: React.FC<GoogleKnowledgeCardProps> = ({ lang }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Google Verified Info */}
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Google Verified Paediatrician</span>
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500">Mission Medical Centre, Laldighi, Baharampur</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-slate-900">
              {lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.name}
            </span>
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
              <span className="text-xs font-bold text-amber-900 font-mono">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-amber-800">({DOCTOR_DATA.reviewCount} Google reviews)</span>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              <Clock className="w-3 h-3 text-emerald-600" />
              <span>Sunday to Thursday (রবি-বৃহঃ)</span>
            </span>
          </div>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Mission+Medical+Centre+Laldighi+Baharampur+Murshidabad+742101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-xs font-medium transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === 'bn' ? 'দিকনির্দেশনা' : 'Directions'}</span>
          </a>

          <a
            href={`tel:${DOCTOR_DATA.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-xs font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'bn' ? 'কল' : 'Call'}</span>
          </a>

          <a
            href="https://wa.me/919093964188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-green-200 bg-green-50 hover:bg-green-100 text-green-800 text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setSaved(!saved)}
            type="button"
            className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            title="Save location"
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-blue-600 text-blue-600' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
