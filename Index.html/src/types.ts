export type Language = 'en' | 'bn';

export interface DoctorProfile {
  name: string;
  nameBn: string;
  specialization: string;
  specializationBn: string;
  experienceYears: number;
  phone: string;
  chamber: string;
  district: string;
  state: string;
  pinCode: string;
  rating: number;
  reviewCount: number;
  qualifications: string[];
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  tag: string;
  pointsEn: string[];
  pointsBn: string[];
  iconName: string;
  imageUrl?: string;
}

export interface AppointmentData {
  id: string;
  childName: string;
  childAge: string;
  gender: 'male' | 'female' | 'other';
  guardianName: string;
  phone: string;
  address: string;
  visitDate: string;
  shift: 'morning' | 'evening';
  reason: string;
  tokenNumber: number;
  createdAt: string;
}

export interface ChamberTiming {
  daysEn: string;
  daysBn: string;
  morning: string;
  evening: string;
}
