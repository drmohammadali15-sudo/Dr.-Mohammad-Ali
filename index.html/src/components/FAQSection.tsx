import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Calendar, ShieldCheck, Stethoscope, Baby, MessageCircle } from 'lucide-react';
import { PARENT_FAQS, DOCTOR_DATA } from '../data/translations';
import { Language } from '../types';

interface FAQSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang, onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'timing':
        return <Calendar className="w-4 h-4 text-[#0d7180]" />;
      case 'vaccination':
        return <ShieldCheck className="w-4 h-4 text-[#0d7180]" />;
      case 'visit':
        return <Stethoscope className="w-4 h-4 text-[#0d7180]" />;
      case 'newborn':
        return <Baby className="w-4 h-4 text-[#0d7180]" />;
      default:
        return <HelpCircle className="w-4 h-4 text-[#0d7180]" />;
    }
  };

  return (
    <section id="faq" className="py-16 md:py-22 bg-gradient-to-b from-white via-[#f7fbfc] to-white border-b border-[#dce8eb] scroll-mt-16">
      <div className="max-w-[880px] mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center max-w-[620px] mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-[#0d7180] font-extrabold text-xs tracking-[1.8px] uppercase mb-2">
            <span className="w-[20px] h-[2px] bg-gradient-to-r from-transparent to-[#0d7180]" />
            <span>{lang === 'bn' ? 'সাধারণ প্রশ্নাবলি' : 'Frequently Asked Questions'}</span>
            <span className="w-[20px] h-[2px] bg-gradient-to-l from-transparent to-[#0d7180]" />
          </div>

          <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.15] text-[#103b52] tracking-[-1px] my-2">
            {lang === 'bn' ? 'অভিভাবকদের প্রয়োজনীয় প্রশ্নোত্তর' : 'Pediatric Care & Visit FAQs'}
          </h2>

          <p className="text-[14px] sm:text-[15px] text-[#617582] mt-2 mb-0 leading-relaxed">
            {lang === 'bn'
              ? 'চেম্বারের সময়সূচি, নিয়মিত টিকাদান ও শিশুর স্বাস্থ্য সংক্রান্ত সাধারণ প্রশ্নের সহজ সমাধান।'
              : 'Clear answers on consultation timings (Sunday to Saturday), vaccination schedules, and clinic appointments.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {PARENT_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-[20px] border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-[#0d7180]/40 shadow-[0_12px_30px_rgba(13,113,128,0.10)] ring-1 ring-[#0d7180]/15'
                    : 'border-[#dce8eb] hover:border-[#0d7180]/30 hover:shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl grid place-items-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#0d7180] text-white' : 'bg-[#eaf6f7] text-[#0d7180] group-hover:bg-[#d8eef0]'
                      }`}
                    >
                      {getCategoryIcon(faq.category)}
                    </div>
                    <span
                      className={`font-bold text-[14px] sm:text-[15px] leading-snug transition-colors ${
                        isOpen ? 'text-[#0d7180]' : 'text-[#103b52] group-hover:text-[#0d7180]'
                      }`}
                    >
                      {lang === 'bn' ? faq.qBn : faq.qEn}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full grid place-items-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#eaf6f7] text-[#0d7180]' : 'text-[#879ea9] group-hover:text-[#103b52]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[14px] text-[#486370] leading-relaxed border-t border-[#f0f6f8] pl-16">
                    <p className="m-0">{lang === 'bn' ? faq.aBn : faq.aEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Banner */}
        <div className="mt-10 p-5 rounded-[22px] bg-gradient-to-r from-[#edf7f8] via-[#e5f4f6] to-[#edf7f8] border border-[#d2ebe9] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <h4 className="text-sm font-bold text-[#103b52] m-0">
              {lang === 'bn' ? 'অন্য কোনো প্রশ্ন বা জরুরি সিরিয়াল প্রয়োজন?' : 'Have specific questions or urgent queries?'}
            </h4>
            <p className="text-xs text-[#52707b] mt-1 mb-0">
              {lang === 'bn'
                ? 'সরাসরি WhatsApp বা ফোনে যোগাযোগ করে তাৎক্ষণিক পরামর্শ নিন।'
                : 'Directly WhatsApp or call the clinic desk for real-time serial updates.'}
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/919093964188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#168b58] hover:bg-[#126b44] text-white rounded-full text-xs font-bold shadow-xs transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center gap-1 px-4 py-2 bg-[#0d7180] hover:bg-[#095d6b] text-white rounded-full text-xs font-bold shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{lang === 'bn' ? 'সিরিয়াল নিন →' : 'Book Serial →'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
