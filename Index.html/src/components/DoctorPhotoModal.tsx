import React, { useRef } from 'react';
import { X, Upload, Camera, Check, RotateCcw, ImageIcon } from 'lucide-react';
import { Language } from '../types';
import { DOCTOR_GALLERY_IMAGES } from '../data/translations';

interface DoctorPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  customPhotoUrl: string | null;
  onSetPhotoUrl: (url: string | null) => void;
}

export const DoctorPhotoModal: React.FC<DoctorPhotoModalProps> = ({
  isOpen,
  onClose,
  lang,
  customPhotoUrl,
  onSetPhotoUrl,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        if (event.target?.result) {
          onSetPhotoUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-[24px] max-w-lg w-full p-6 shadow-2xl border border-[#dce8eb] space-y-4 my-8 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-[#dce8eb]">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#0d7180]" />
            <h3 className="font-bold text-[#103b52] text-base">
              {lang === 'bn' ? 'ডাক্তারবাবুর অফিসিয়াল ছবি ও পোস্টার' : 'Doctor Photos & Official Posters'}
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info notice */}
        <p className="text-xs text-[#55737d] leading-relaxed">
          {lang === 'bn'
            ? 'ওয়েবসাইটে ব্যবহারের জন্য যেকোনো অফিসিয়াল ছবি নির্বাচন করুন অথবা ডিভাইস থেকে নতুন ছবি আপলোড করুন।'
            : 'Select any official portrait poster below to set as the primary hero image, or upload a custom photo.'}
        </p>

        {/* Preset Gallery Grid */}
        <div>
          <span className="text-xs font-bold text-[#103b52] block mb-2.5">
            {lang === 'bn' ? 'উপলব্ধ ছবি সমূহ (ক্লিক করে সেট করুন):' : 'Available Official Photos (Click to set):'}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-h-[260px] overflow-y-auto p-1 border border-[#e2ecf0] rounded-xl bg-[#f9fcfe]">
            {DOCTOR_GALLERY_IMAGES.map(item => {
              const isSelected = customPhotoUrl === item.url || (!customPhotoUrl && item.id === 'pediatric-care-checkup');
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSetPhotoUrl(item.url)}
                  className={`relative rounded-xl overflow-hidden border-2 text-left cursor-pointer transition-all aspect-[3/4] group ${
                    isSelected ? 'border-[#0d7180] ring-2 ring-[#0d7180]/30' : 'border-transparent hover:border-slate-300'
                  }`}
                >
                  <img src={item.url} alt={item.titleEn} className="w-full h-full object-cover" />
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#0d7180] text-white grid place-items-center shadow-xs">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-black/70 p-1.5 text-[10px] text-white truncate">
                    {lang === 'bn' ? item.titleBn : item.titleEn}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hidden File input */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Action buttons */}
        <div className="space-y-2 pt-2 border-t border-[#dce8eb]">
          <button
            onClick={() => fileInputRef.current?.click()}
            type="button"
            className="w-full py-2.5 px-4 bg-[#0d7180] hover:bg-[#095d6b] text-white font-bold text-xs rounded-full shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>{lang === 'bn' ? 'ডিভাইস থেকে নিজস্ব ছবি আপলোড করুন' : 'Upload From Your Device'}</span>
          </button>

          {customPhotoUrl && (
            <button
              onClick={() => onSetPhotoUrl(null)}
              type="button"
              className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'ডিফল্ট ছবিতে ফেরত যান' : 'Reset to Default Doctor Portrait'}</span>
            </button>
          )}

          <button
            onClick={onClose}
            type="button"
            className="w-full py-2 px-4 text-xs font-semibold text-[#617582] hover:text-[#103b52] transition-colors cursor-pointer"
          >
            {lang === 'bn' ? 'সম্পন্ন / বন্ধ করুন' : 'Done / Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
