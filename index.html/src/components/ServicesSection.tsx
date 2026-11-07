import React from 'react';
import { CLINICAL_SERVICES } from '../data/translations';
import { Language } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="services" className="py-16 md:py-22 bg-white border-b border-[#dce8eb] scroll-mt-16">
      <div className="max-w-[1160px] mx-auto px-5">
        {/* Section Head */}
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-[#0d7180] font-extrabold text-xs tracking-[1.8px] uppercase mb-2">
            <span className="w-[20px] h-[2px] bg-gradient-to-r from-transparent to-[#0d7180]" />
            <span>{lang === 'bn' ? 'চিকিৎসা পরিষেবা' : 'Clinical Pediatric Services'}</span>
            <span className="w-[20px] h-[2px] bg-gradient-to-l from-transparent to-[#0d7180]" />
          </div>

          <h2 className="text-[28px] sm:text-[38px] font-extrabold leading-[1.15] text-[#103b52] tracking-[-1px] my-2">
            {lang === 'bn' ? 'শিশুদের বিশেষায়িত স্বাস্থ্যসেবা' : 'Specialized Child Healthcare Support'}
          </h2>

          <p className="text-[15px] text-[#617582] mt-2 mb-0">
            {lang === 'bn'
              ? 'নবজাতক থেকে কিশোর বয়স পর্যন্ত শিশুদের রোগ নির্ণয়, উন্নত চিকিৎসা ও নিয়মিত টিকাদান পরিষেবা।'
              : 'From newborns to adolescents: evidence-based treatment, growth tracking, and comprehensive immunization.'}
          </p>
        </div>

        {/* Cards Grid: 6 Services with real images, hover zoom, and gradient touches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINICAL_SERVICES.map(service => (
            <article
              key={service.id}
              onClick={onOpenBooking}
              className="border border-[#dce8eb] rounded-[22px] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(13,113,128,0.16)] hover:border-[#0d7180]/40 cursor-pointer group flex flex-col justify-between overflow-hidden relative"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0d7180] via-teal-400 to-[#103b52] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <div>
                {/* Service Visual Image with Hover Zoom & Gradient Vignette */}
                {service.imageUrl && (
                  <div className="h-44 sm:h-48 w-full bg-[#f2f7f8] overflow-hidden relative border-b border-[#dce8eb]">
                    <img
                      src={service.imageUrl}
                      alt={lang === 'bn' ? service.titleBn : service.titleEn}
                      className="w-full h-full object-cover object-top transition-transform duration-600 group-hover:scale-108"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#0d7180] to-[#128a99] text-white text-[11px] font-bold shadow-sm">
                      {service.tag}
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  <h3 className="text-[#103b52] text-lg font-bold group-hover:text-[#0d7180] transition-colors leading-snug">
                    {lang === 'bn' ? service.titleBn : service.titleEn}
                  </h3>

                  <p className="text-[14px] text-[#55737d] leading-relaxed mt-2 mb-4">
                    {lang === 'bn' ? service.descBn : service.descEn}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 text-xs text-[#526e7b] mb-2">
                    {(lang === 'bn' ? service.pointsBn : service.pointsEn).map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0d7180] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-gradient-to-r from-[#fafcfc] to-white border-t border-[#dce8eb] flex items-center justify-between text-xs font-bold text-[#0d7180] group-hover:bg-gradient-to-r group-hover:from-[#f0f8f8] group-hover:to-[#e8f5f6] transition-colors">
                <span className="flex items-center gap-1.5">
                  <span>{lang === 'bn' ? 'সিরিয়াল বুক করুন' : 'Book serial'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
                <span className="text-[11px] text-[#869da7] font-normal">Mission Medical Centre</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
