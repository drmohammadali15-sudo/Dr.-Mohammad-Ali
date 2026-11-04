import React, { useState } from 'react';
import { DOCTOR_DATA } from '../data/translations';
import { Language, AppointmentData } from '../types';
import { MessageCircle, Printer, RotateCcw, MapPin, Calendar, Phone, Hospital, CheckCircle2, Send } from 'lucide-react';

interface BookingSectionProps {
  lang: Language;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ lang }) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    parent: '',
    phone: '',
    age: '',
    date: todayStr,
    shift: 'morning' as 'morning' | 'evening',
    reason: 'General pediatric consultation',
    note: '',
  });

  const [submittedBooking, setSubmittedBooking] = useState<AppointmentData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parentVal = formData.parent.trim();
    const phoneVal = formData.phone.trim();
    const ageVal = formData.age.trim();
    const dateVal = formData.date;
    const shiftText = formData.shift === 'morning' ? 'Morning (10:00 AM - 02:00 PM)' : 'Evening (05:30 PM - 09:00 PM)';
    const reasonVal = formData.reason;
    const noteVal = formData.note.trim() || 'None';

    const randomToken = Math.floor(Math.random() * 20) + 5;
    const newBooking: AppointmentData = {
      id: 'MMC-' + Math.random().toString(36).substring(2, 7).toUpperCase(),
      childName: parentVal + "'s Child",
      childAge: ageVal,
      gender: 'male',
      guardianName: parentVal,
      phone: phoneVal,
      address: 'Baharampur',
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
      `Days: Sunday to Thursday\n` +
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
    <section id="appointment" className="py-16 md:py-22 bg-[#f8fcfe] border-b border-[#dce8eb] scroll-mt-16">
      <div className="max-w-[1160px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Chamber Schedule with Rich Dark Gradient */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c3e52] via-[#103b52] to-[#0a2f40] text-white rounded-[26px] p-7 sm:p-9 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-teal-300 font-extrabold text-xs tracking-[1.8px] uppercase mb-2">
              {lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট বুকিং' : 'Appointment Booking'}
            </div>

            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-white leading-[1.2] tracking-tight my-2">
              {lang === 'bn' ? 'আপনার শিশুর দেখানোর সময় নিশ্চিত করুন।' : "Plan your child's visit."}
            </h2>

            <p className="text-[#d1e4e9] text-[14px] leading-relaxed mt-2 mb-6">
              {lang === 'bn'
                ? 'অনলাইনে ফর্ম পূরণ করে সিরিয়াল টোকেন সংগ্রহ করুন অথবা সরাসরি WhatsApp-এ যোগাযোগ করুন।'
                : 'Fill in the form to generate a clinic serial token and connect instantly via WhatsApp.'}
            </p>

            <div className="space-y-4 pt-4 border-t border-white/15 text-[14px] text-[#e8f4f5]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 grid place-items-center shrink-0 text-teal-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">Mission Medical Centre</strong>
                  <span className="text-xs text-[#d1e4e9]">Laldighi, Baharampore, Murshidabad<br />West Bengal – 742101</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 grid place-items-center shrink-0 text-teal-300">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">Sunday to Thursday</strong>
                  <span className="text-xs text-[#d1e4e9]">
                    Morning: 10:00 AM – 02:00 PM<br />
                    Evening: 05:30 PM – 09:00 PM
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 grid place-items-center shrink-0 text-teal-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">Phone & WhatsApp Booking</strong>
                  <a href={`tel:${DOCTOR_DATA.phone.replace(/\s+/g, '')}`} className="font-mono text-sm text-teal-300 hover:text-teal-200 transition-colors">
                    {DOCTOR_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/15 text-xs text-teal-200">
                <Hospital className="w-4 h-4 shrink-0 text-teal-300 mt-0.5" />
                <span>Faculty: Kolkata Medical College & Hospital</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Uncluttered Form or Issued Token */}
          <div className="lg:col-span-7 bg-white border border-[#dce8eb] rounded-[26px] p-6 sm:p-8 shadow-[0_16px_45px_rgba(18,59,78,0.08)]">
            {submittedBooking ? (
              /* Token Slip Card */
              <div id="printable-token" className="space-y-4">
                <div className="flex items-start justify-between pb-3 border-b border-[#dce8eb]">
                  <div>
                    <span className="text-[11px] font-bold text-[#0d7180] bg-[#eaf6f5] px-2.5 py-0.5 rounded-full">
                      Chamber Token Issued
                    </span>
                    <h3 className="text-xl font-bold text-[#103b52] mt-1.5">
                      {lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.name}
                    </h3>
                    <div className="text-xs text-[#617582]">
                      MBBS (Cal), MD (Pediatrics), DM (PICU) · Mission Medical Centre
                    </div>
                  </div>

                  <div className="text-center bg-gradient-to-br from-[#0d7180] to-[#128a99] text-white rounded-xl p-2.5 px-4 shadow-sm">
                    <div className="text-[10px] uppercase font-bold text-teal-100">Token</div>
                    <div className="text-2xl font-bold font-mono">#{submittedBooking.tokenNumber}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs py-1">
                  <div>
                    <span className="text-[#617582] block text-[11px]">Parent / Guardian:</span>
                    <span className="font-bold text-[#103b52] text-sm">{submittedBooking.guardianName}</span>
                  </div>
                  <div>
                    <span className="text-[#617582] block text-[11px]">Child's Age:</span>
                    <span className="font-semibold text-[#103b52]">{submittedBooking.childAge}</span>
                  </div>
                  <div>
                    <span className="text-[#617582] block text-[11px]">Date & Shift:</span>
                    <span className="font-bold text-[#0d7180]">
                      {submittedBooking.visitDate} ({submittedBooking.shift === 'morning' ? 'Morning' : 'Evening'})
                    </span>
                  </div>
                  <div>
                    <span className="text-[#617582] block text-[11px]">Phone:</span>
                    <span className="font-mono font-semibold text-[#103b52]">{submittedBooking.phone}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#617582] block text-[11px]">Reason:</span>
                    <span className="font-medium text-[#103b52]">{submittedBooking.reason}</span>
                  </div>
                </div>

                <div className="p-3 bg-[#eaf6f5] rounded-xl text-xs text-[#176342] border border-[#bce2d8] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#168b58] shrink-0" />
                  <span>
                    {lang === 'bn'
                      ? 'টোকেন প্রস্তুত হয়েছে! নিশ্চিতকরণের জন্য নিচের বাটনে ক্লিক করে WhatsApp-এ পাঠান।'
                      : 'Your token is generated! Click below to send your details directly via WhatsApp.'}
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap gap-2.5">
                  <a
                    href={getWaLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#168b58] hover:bg-[#126b44] text-white rounded-full text-xs font-bold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'WhatsApp-এ নিশ্চিত করুন' : 'Confirm via WhatsApp'}</span>
                  </a>

                  <button
                    onClick={() => window.print()}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#dce8eb] hover:bg-slate-50 text-[#103b52] rounded-full text-xs font-bold transition-all cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Slip</span>
                  </button>

                  <button
                    onClick={() => setSubmittedBooking(null)}
                    type="button"
                    className="p-2.5 text-[#617582] hover:text-[#103b52] rounded-full text-xs transition-colors cursor-pointer"
                    title="New Booking"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Clean Booking Form */
              <>
                <h3 className="text-[22px] font-bold text-[#103b52] m-0 leading-tight">
                  {lang === 'bn' ? 'অনলাইন অ্যাপয়েন্টমেন্টের অনুরোধ' : 'Online Appointment Request'}
                </h3>
                <p className="text-[#617582] text-[13px] mt-1 mb-5">
                  {lang === 'bn'
                    ? 'তথ্য পূরণ করুন। আপনার অনুরোধটি WhatsApp-এ পাঠানোর জন্য তাৎক্ষণিক তৈরি হবে।'
                    : 'Fill in the details. Your clinic request will be formatted for quick WhatsApp confirmation.'}
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Parent Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#4c6773]">
                        {lang === 'bn' ? 'অভিভাবকের নাম' : 'Parent / Guardian Name'}
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.parent}
                        onChange={e => setFormData({ ...formData, parent: e.target.value })}
                        placeholder={lang === 'bn' ? 'আপনার নাম' : 'Your name'}
                        className="w-full border border-[#d7e4e7] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-slate-300 transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#4c6773]">
                        {lang === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        pattern="[0-9+\-\s]{10,15}"
                        className="w-full border border-[#d7e4e7] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-slate-300 transition-all font-mono"
                      />
                    </div>

                    {/* Child's age */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#4c6773]">
                        {lang === 'bn' ? 'শিশুর বয়স' : "Child's Age"}
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.age}
                        onChange={e => setFormData({ ...formData, age: e.target.value })}
                        placeholder="e.g. 2 years / 8 months"
                        className="w-full border border-[#d7e4e7] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-slate-300 transition-all"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#4c6773]">
                        {lang === 'bn' ? 'পছন্দের তারিখ (রবি – বৃহঃ)' : 'Preferred Date (Sun – Thu)'}
                      </label>
                      <input
                        required
                        type="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        className="w-full border border-[#d7e4e7] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-slate-300 transition-all font-mono"
                      />
                    </div>

                    {/* Shift */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-[12px] font-bold text-[#4c6773]">
                        {lang === 'bn' ? 'চেম্বারের সময় শিফট' : 'Preferred Shift'}
                      </label>
                      <select
                        value={formData.shift}
                        onChange={e => setFormData({ ...formData, shift: e.target.value as any })}
                        className="w-full border border-[#d7e4e7] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-slate-300 transition-all cursor-pointer"
                      >
                        <option value="morning">Morning Shift (10:00 AM – 02:00 PM)</option>
                        <option value="evening">Evening Shift (05:30 PM – 09:00 PM)</option>
                      </select>
                    </div>

                    {/* Reason for visit */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-[12px] font-bold text-[#4c6773]">
                        {lang === 'bn' ? 'দেখানোর কারণ' : 'Reason for Visit'}
                      </label>
                      <select
                        value={formData.reason}
                        onChange={e => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full border border-[#d7e4e7] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-slate-300 transition-all cursor-pointer"
                      >
                        <option value="Fever, cough and cold">Fever, cough and cold (জ্বর, সর্দি-কাশি)</option>
                        <option value="Routine child vaccination">Routine child vaccination (নিয়মিত টিকাদান)</option>
                        <option value="Growth and development check-up">Growth and development check-up (শারীরিক বৃদ্ধি ও বিকাশ)</option>
                        <option value="Newborn / infant care">Newborn / infant care (নবজাতক ও শিশুর যত্ন)</option>
                        <option value="General pediatric consultation">General pediatric consultation (সাধারণ চিকিৎসা)</option>
                        <option value="Other">Other (অন্যান্য)</option>
                      </select>
                    </div>

                    {/* Additional note */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-[12px] font-bold text-[#4c6773]">
                        {lang === 'bn' ? 'অতিরিক্ত বিবরণ (ঐচ্ছিক)' : 'Additional Note (Optional)'}
                      </label>
                      <textarea
                        rows={2}
                        value={formData.note}
                        onChange={e => setFormData({ ...formData, note: e.target.value })}
                        placeholder={lang === 'bn' ? 'সংক্ষেপে শিশুর কোনো বিশেষ সমস্যা থাকলে লিখুন' : 'Any specific symptoms or questions'}
                        className="w-full border border-[#d7e4e7] rounded-[13px] p-3 text-[14px] text-[#183342] bg-[#fbfdfd] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 hover:border-slate-300 transition-all resize-y"
                      />
                    </div>

                    {/* Submit Button with Gradient and Hover Effect */}
                    <div className="sm:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 border-0 rounded-full p-3.5 bg-gradient-to-r from-[#0d7180] via-[#0f7e8f] to-[#138896] hover:from-[#095d6b] hover:to-[#0d7180] text-white font-bold text-sm cursor-pointer shadow-[0_8px_22px_rgba(13,113,128,0.22)] hover:shadow-[0_12px_28px_rgba(13,113,128,0.32)] transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <Send className="w-4 h-4" />
                        <span>{lang === 'bn' ? 'অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান →' : 'Submit Appointment Request →'}</span>
                      </button>
                    </div>
                  </div>
                </form>

                <div className="text-[11px] text-[#718894] mt-3">
                  {lang === 'bn'
                    ? 'এটি একটি অনলাইন অনুরোধ। চেম্বার থেকে ফোনের মাধ্যমে সময় নিশ্চিত করা হবে।'
                    : 'This generates your clinic request slip. Final timing will be confirmed by chamber staff.'}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
