import React, { useState } from 'react';
import { DOCTOR_DATA } from '../data/translations';
import { Language, AppointmentData } from '../types';
import { MessageCircle, Printer, RotateCcw, MapPin, Calendar, Phone, Hospital, CheckCircle2, Send, Clock, Sparkles } from 'lucide-react';

interface BookingSectionProps {
  lang: Language;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ lang }) => {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    parent: '',
    phone: '',
    ageGroup: '1 – 3 years (Toddler / ১-৩ বছর)',
    date: todayStr,
    shift: 'morning' as 'morning' | 'evening',
    reason: 'Fever, Cold & Cough (জ্বর ও সর্দি-কাশি)',
    note: '',
  });

  const [submittedBooking, setSubmittedBooking] = useState<AppointmentData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parentVal = formData.parent.trim();
    const phoneVal = formData.phone.trim();
    const ageVal = formData.ageGroup;
    const dateVal = formData.date;
    const reasonVal = formData.reason;

    const randomToken = Math.floor(Math.random() * 20) + 5;
    const newBooking: AppointmentData = {
      id: 'MMC-' + Math.random().toString(36).substring(2, 7).toUpperCase(),
      childName: parentVal + "'s Child",
      childAge: ageVal,
      gender: 'male',
      guardianName: parentVal,
      phone: phoneVal,
      address: 'Baharampore',
      visitDate: dateVal,
      shift: formData.shift,
      reason: reasonVal,
      tokenNumber: randomToken,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setSubmittedBooking(newBooking);
  };

  const getWaLink = () => {
    if (!submittedBooking) return '';
    const shiftText = submittedBooking.shift === 'morning' ? 'Morning (10:00 AM - 02:00 PM)' : 'Evening (05:30 PM - 09:00 PM)';
    const msg =
      `Appointment Request for Dr. Mohammad Ali\n` +
      `Chamber: Mission Medical Centre, Laldighi, Baharampore\n` +
      `Days: Sunday to Saturday (Open Every Day)\n` +
      `Token Number: #${submittedBooking.tokenNumber}\n` +
      `Parent / Guardian: ${submittedBooking.guardianName}\n` +
      `Phone: ${submittedBooking.phone}\n` +
      `Child Age: ${submittedBooking.childAge}\n` +
      `Preferred Date: ${submittedBooking.visitDate} (${shiftText})\n` +
      `Reason: ${submittedBooking.reason}\n` +
      `Please confirm token availability.`;
    return `https://wa.me/919093964188?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section
      id="appointment"
      className="py-14 sm:py-20 bg-gradient-to-b from-[#f0f8fa] via-white to-[#f4f9fb] border-b border-[#dce8eb] scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5">
        {/* Section Header with Highlighting */}
        <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#0d7180]/15 via-teal-100 to-transparent border border-[#0d7180]/20 text-[#0d7180] font-extrabold text-xs uppercase tracking-wider mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0d7180]" />
            <span>{lang === 'bn' ? 'অফিসিয়াল চেম্বার সিরিয়াল পোর্টাল' : 'Official Serial & Token Booking'}</span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#103b52] tracking-tight leading-tight">
            {lang === 'bn' ? 'সহজে চেম্বার সিরিয়াল বুক করুন' : "Easy Online Appointment Booking"}
          </h2>

          <p className="text-[14px] sm:text-[15px] text-[#526e7b] mt-2">
            {lang === 'bn'
              ? 'নিচের সহজ ড্রপডাউন অপশনগুলো থেকে তথ্য নির্বাচন করুন। সাথে সাথে আপনার সিরিয়াল টোকেন তৈরি হবে।'
              : 'Select options from the quick dropdowns below to instantly generate your clinic serial token.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Chamber Schedule with Rich Dark Gradient */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c3e52] via-[#103b52] to-[#0a2f40] text-white rounded-[26px] p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-teal-300">
                {lang === 'bn' ? 'চেম্বার সময়সূচি' : 'Visiting Hours'}
              </span>
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{lang === 'bn' ? 'রবি–শনি খোলা' : 'Open Sun–Sat'}</span>
              </span>
            </div>

            <h3 className="text-[22px] sm:text-[26px] font-extrabold text-white leading-tight mb-3">
              {lang === 'bn' ? 'মিশন মেডিকেল সেন্টার' : 'Mission Medical Centre'}
            </h3>

            <p className="text-[#d1e4e9] text-[13px] leading-relaxed mb-6">
              {lang === 'bn'
                ? 'ডা. মহম্মদ আলির বহরমপুর চেম্বারে প্রতিদিন সকাল ও সন্ধ্যায় রোগী দেখা হয়।'
                : 'Dr. Mohammad Ali attends child patients daily in morning & evening shifts.'}
            </p>

            <div className="space-y-4 pt-4 border-t border-white/15 text-[13px] text-[#e8f4f5]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 grid place-items-center shrink-0 text-teal-300 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">Laldighi, Baharampore</strong>
                  <span className="text-xs text-[#d1e4e9]">Murshidabad, West Bengal – 742101</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 grid place-items-center shrink-0 text-teal-300 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">Sunday to Saturday (7 Days)</strong>
                  <span className="text-xs text-[#d1e4e9] block mt-0.5">
                    ☀️ Morning: 10:00 AM – 02:00 PM<br />
                    🌙 Evening: 05:30 PM – 09:00 PM
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 grid place-items-center shrink-0 text-teal-300 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">Chamber Helpline</strong>
                  <a href={`tel:${DOCTOR_DATA.phone.replace(/\s+/g, '')}`} className="font-mono text-sm text-teal-300 hover:text-teal-200 transition-colors">
                    {DOCTOR_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/15 text-xs text-teal-200">
                <Hospital className="w-4 h-4 shrink-0 text-teal-300 mt-0.5" />
                <span>Kolkata Medical College & Hospital Faculty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Highlighted Booking Form with Dropdown Options */}
          <div className="lg:col-span-7 bg-white border-2 border-[#0d7180]/25 rounded-[26px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(18,59,78,0.10)] relative">
            {submittedBooking ? (
              /* Token Slip Card */
              <div id="printable-token" className="space-y-4">
                <div className="flex items-start justify-between pb-3 border-b border-[#dce8eb]">
                  <div>
                    <span className="text-[11px] font-bold text-[#0d7180] bg-[#eaf6f5] px-2.5 py-0.5 rounded-full">
                      ✓ Serial Token Confirmed
                    </span>
                    <h3 className="text-xl font-bold text-[#103b52] mt-1.5">
                      {lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.name}
                    </h3>
                    <div className="text-xs text-[#617582]">
                      MBBS (Cal), MD (Pediatrics), DM (PICU) · Mission Medical Centre
                    </div>
                  </div>

                  <div className="text-center bg-gradient-to-br from-[#0d7180] to-[#128a99] text-white rounded-2xl p-3 px-5 shadow-md">
                    <div className="text-[10px] uppercase font-bold text-teal-100">Token</div>
                    <div className="text-3xl font-extrabold font-mono">#{submittedBooking.tokenNumber}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs py-2 bg-[#f8fcfe] p-4 rounded-xl border border-[#dce8eb]">
                  <div>
                    <span className="text-[#617582] block text-[11px]">Guardian Name:</span>
                    <span className="font-bold text-[#103b52] text-sm">{submittedBooking.guardianName}</span>
                  </div>
                  <div>
                    <span className="text-[#617582] block text-[11px]">Child's Age Group:</span>
                    <span className="font-semibold text-[#103b52]">{submittedBooking.childAge}</span>
                  </div>
                  <div>
                    <span className="text-[#617582] block text-[11px]">Visit Date & Shift:</span>
                    <span className="font-bold text-[#0d7180]">
                      {submittedBooking.visitDate} ({submittedBooking.shift === 'morning' ? 'Morning Shift' : 'Evening Shift'})
                    </span>
                  </div>
                  <div>
                    <span className="text-[#617582] block text-[11px]">Contact Phone:</span>
                    <span className="font-mono font-semibold text-[#103b52]">{submittedBooking.phone}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-[#617582] block text-[11px]">Reason for Consultation:</span>
                    <span className="font-medium text-[#103b52]">{submittedBooking.reason}</span>
                  </div>
                </div>

                <div className="p-3 bg-[#eaf6f5] rounded-xl text-xs text-[#176342] border border-[#bce2d8] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#168b58] shrink-0" />
                  <span>
                    {lang === 'bn'
                      ? 'টোকেন প্রস্তুত হয়েছে! নিশ্চিতকরণের জন্য নিচের বাটনে ক্লিক করে WhatsApp-এ পাঠান।'
                      : 'Your token slip is ready! Click the WhatsApp button below to confirm with clinic staff.'}
                  </span>
                </div>

                {/* Separate Action Buttons */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={getWaLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#16a34a] to-[#15803d] hover:from-[#15803d] hover:to-[#166534] active:scale-95 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{lang === 'bn' ? 'WhatsApp এ পাঠান' : 'Send via WhatsApp'}</span>
                  </a>

                  <a
                    href={`tel:${DOCTOR_DATA.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0c4a6e] active:scale-95 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>{lang === 'bn' ? 'কল করুন' : 'Call'}</span>
                  </a>

                  <button
                    onClick={() => window.print()}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-3 bg-white border border-[#dce8eb] hover:bg-slate-50 text-[#103b52] rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print</span>
                  </button>

                  <button
                    onClick={() => setSubmittedBooking(null)}
                    type="button"
                    className="p-3 text-[#617582] hover:text-[#103b52] rounded-xl text-xs transition-colors cursor-pointer"
                    title="New Booking"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Simple, High-Conversion Form with Dropdowns */
              <>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#eef4f6]">
                  <div>
                    <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#103b52] m-0 leading-tight">
                      {lang === 'bn' ? 'অনলাইন সিরিয়াল বুকিং ফর্ম' : 'Patient Appointment Form'}
                    </h3>
                    <p className="text-[#617582] text-[13px] mt-1 mb-0">
                      {lang === 'bn' ? 'সহজ ড্রপডাউন থেকে নির্বাচন করুন' : 'Easy dropdown selection for fast booking'}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#0d7180] bg-[#eaf6f7] px-2.5 py-1 rounded-full">
                    {lang === 'bn' ? 'সহজ ফর্ম' : 'Fast Entry'}
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Guardian Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-bold text-[#35525f]">
                        {lang === 'bn' ? 'অভিভাবকের নাম *' : 'Parent / Guardian Name *'}
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.parent}
                        onChange={e => setFormData({ ...formData, parent: e.target.value })}
                        placeholder={lang === 'bn' ? 'আপনার নাম লিখুন' : 'e.g. Ramesh Ghosh'}
                        className="w-full border border-[#d2e0e4] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-[#0d7180]/40 transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-bold text-[#35525f]">
                        {lang === 'bn' ? 'মোবাইল নম্বর (WhatsApp) *' : 'Mobile Number (WhatsApp) *'}
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit phone number"
                        pattern="[0-9+\-\s]{10,15}"
                        className="w-full border border-[#d2e0e4] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-[#0d7180]/40 transition-all font-mono"
                      />
                    </div>

                    {/* DROPDOWN 1: Child Age Category */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-[13px] font-bold text-[#35525f]">
                        {lang === 'bn' ? 'শিশুর বয়স শ্রেণি (ড্রপডাউন) *' : "Child's Age Group (Dropdown) *"}
                      </label>
                      <select
                        value={formData.ageGroup}
                        onChange={e => setFormData({ ...formData, ageGroup: e.target.value })}
                        className="w-full border border-[#d2e0e4] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-[#0d7180]/40 transition-all cursor-pointer font-medium"
                      >
                        <option value="0 – 1 month (Newborn / নবজাতক)">👶 0 – 1 month (Newborn / নবজাতক)</option>
                        <option value="1 – 6 months (Infant / দুধের শিশু)">🍼 1 – 6 months (Infant / দুধের শিশু)</option>
                        <option value="6 – 12 months (Infant / ৬-১২ মাস)">🧸 6 – 12 months (Infant / ৬-১২ মাস)</option>
                        <option value="1 – 3 years (Toddler / ১-৩ বছর)">🧒 1 – 3 years (Toddler / ১-৩ বছর)</option>
                        <option value="4 – 7 years (Child / ৪-৭ বছর)">👦 4 – 7 years (Child / ৪-৭ বছর)</option>
                        <option value="8 – 12 years (School child / ৮-১২ বছর)">🎒 8 – 12 years (School child / ৮-১২ বছর)</option>
                        <option value="13 – 18 years (Adolescent / কিশোর)">🧑 13 – 18 years (Adolescent / কিশোর)</option>
                      </select>
                    </div>

                    {/* DROPDOWN 2: Reason for Visit */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-[13px] font-bold text-[#35525f]">
                        {lang === 'bn' ? 'দেখানোর কারণ (ড্রপডাউন) *' : 'Reason for Consultation (Dropdown) *'}
                      </label>
                      <select
                        value={formData.reason}
                        onChange={e => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full border border-[#d2e0e4] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-[#0d7180]/40 transition-all cursor-pointer font-medium"
                      >
                        <option value="Fever, Cold & Cough (জ্বর ও সর্দি-কাশি)">🌡️ Fever, Cold & Cough (জ্বর ও সর্দি-কাশি)</option>
                        <option value="Routine / Painless Vaccination (নিয়মিত ও ব্যথাহীন টিকাদান)">💉 Routine / Painless Vaccination (নিয়মিত ও ব্যথাহীন টিকাদান)</option>
                        <option value="Growth & Development Check-up (শারীরিক বৃদ্ধি ও বিকাশ)">📈 Growth & Development Check-up (শারীরিক বৃদ্ধি ও বিকাশ)</option>
                        <option value="Newborn Care & Jaundice (নবজাতকের যত্ন ও জন্ডিস)">🍼 Newborn Care & Jaundice (নবজাতকের যত্ন ও জন্ডিস)</option>
                        <option value="Breathing Issue / Wheezing (শ্বাসকষ্ট ও হাঁপানি)">🫁 Breathing Issue / Wheezing (শ্বাসকষ্ট ও হাঁপানি)</option>
                        <option value="Stomach Pain / Diarrhea (পেটের সমস্যা ও ডায়রিয়া)">🩹 Stomach Pain / Diarrhea (পেটের সমস্যা ও ডায়রিয়া)</option>
                        <option value="General Child Consultation (সাধারণ শিশু রোগ)">🩺 General Child Consultation (সাধারণ শিশু রোগ)</option>
                        <option value="Second Opinion / Follow-up (ফলোআপ বা অন্যান্য)">🏥 Second Opinion / Follow-up (ফলোআপ বা অন্যান্য)</option>
                      </select>
                    </div>

                    {/* Preferred Date with Quick Chips */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <div className="flex items-center justify-between">
                        <label className="text-[13px] font-bold text-[#35525f]">
                          {lang === 'bn' ? 'ভিজিটের তারিখ (রবি–শনি) *' : 'Preferred Visit Date (Sun–Sat) *'}
                        </label>
                        <div className="flex items-center gap-1.5 text-xs">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, date: todayStr })}
                            className={`px-2.5 py-0.5 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                              formData.date === todayStr ? 'bg-[#0d7180] text-white border-[#0d7180]' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            {lang === 'bn' ? 'আজ' : 'Today'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, date: tomorrowStr })}
                            className={`px-2.5 py-0.5 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                              formData.date === tomorrowStr ? 'bg-[#0d7180] text-white border-[#0d7180]' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            {lang === 'bn' ? 'কাল' : 'Tomorrow'}
                          </button>
                        </div>
                      </div>
                      <input
                        required
                        type="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        className="w-full border border-[#d2e0e4] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-[#0d7180]/40 transition-all font-mono"
                      />
                    </div>

                    {/* DROPDOWN 3: Preferred Shift */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-[13px] font-bold text-[#35525f]">
                        {lang === 'bn' ? 'চেম্বারের সময় শিফট (ড্রপডাউন) *' : 'Consultation Shift (Dropdown) *'}
                      </label>
                      <select
                        value={formData.shift}
                        onChange={e => setFormData({ ...formData, shift: e.target.value as any })}
                        className="w-full border border-[#d2e0e4] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-[#0d7180]/40 transition-all cursor-pointer font-medium"
                      >
                        <option value="morning">☀️ Morning Shift: 10:00 AM – 02:00 PM (সকালের শিফট)</option>
                        <option value="evening">🌙 Evening Shift: 05:30 PM – 09:00 PM (সন্ধ্যার শিফট)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button with Gradient and Mobile Active State */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 border-0 rounded-2xl p-4 bg-gradient-to-r from-[#0d7180] via-[#0f7e8f] to-[#138896] hover:from-[#095d6b] hover:to-[#0d7180] active:scale-[0.98] text-white font-bold text-base cursor-pointer shadow-[0_10px_25px_rgba(13,113,128,0.25)] hover:shadow-[0_14px_30px_rgba(13,113,128,0.35)] transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5" />
                      <span>{lang === 'bn' ? 'সিরিয়াল টোকেন তৈরি করুন →' : 'Generate Serial Token →'}</span>
                    </button>
                  </div>
                </form>

                <div className="mt-3 text-center text-xs text-[#718894]">
                  {lang === 'bn'
                    ? '✓ কোনো আগাম ফি নেই · তাৎক্ষণিক সিরিয়াল নম্বর পাওয়া যায়'
                    : '✓ No upfront fee · Instant token number generated'}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
