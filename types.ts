
export interface GrainRate {
  id: string;
  cropName: string;
  quality: string;
  todayRate: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface BusinessInfo {
  shopName: string;
  proprietorName: string;
  address: string;
  contactNumbers: string[];
}
