export type PageId = 'home' | 'services' | 'gallery' | 'contact';

export type VehicleCategory = 'sedan' | 'suv' | 'luxury';

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  estimatedDuration: string;
  features: string[];
  recommendedFor: string;
  tag: string;
  image: string;
  idealInterval: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'exterior' | 'polish' | 'interior' | 'doorstep';
  categoryLabel: string;
  image: string;
  description: string;
  vehicle: string;
  location: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  vehicleCategory: VehicleCategory;
  vehicleDetails: string;
  serviceId: string;
  preferredDate: string;
  preferredTimeSlot: string;
  locationArea: string;
  governorate: string;
  notes: string;
  targetNumber: '66978531' | '39888566';
}
