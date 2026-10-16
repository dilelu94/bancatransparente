export interface Deputy {
  id: string;
  name: string;
  party: string;
  province: string;
  locationName: string;
  address?: string;
  addressSource?: string;
  status: 'ausente' | 'presente';
  role?: string;
  imageUrl?: string;
  profileUrl?: string;
  cuit?: string;
  dni?: string;
  estimatedDietGross?: number;
  estimatedDietNet?: number;
  hasDesarraigo?: boolean;
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
