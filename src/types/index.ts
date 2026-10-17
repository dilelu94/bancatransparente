export interface AddressSource {
  label: string;
  url: string;
}

export interface Deputy {
  id: string;
  name: string;
  party: string;
  province: string;
  locationName: string;
  address?: string;
  addressSource?: string;
  addressSources?: AddressSource[];
  addressNotes?: string;
  status: 'ausente' | 'presente';
  role?: string;
  imageUrl?: string;
  profileUrl?: string;
  cuit?: string;
  dni?: string;
  estimatedDietGross?: number;
  estimatedDietNet?: number;
  hasDesarraigo?: boolean;
  socialMedia?: {
    x?: { handle: string; url: string };
    instagram?: { handle: string; url: string };
    facebook?: { handle: string; url: string };
  };
}

export interface Session {
  id: string;
  date: string;
  displayDate: string;
  title: string;
  description: string;
  quorumRequired: number;
  quorumPresent: number;
  totalDeputies: number;
  outcome: 'Sin Quórum' | 'Con Quórum';
  deputies: Deputy[];
}
