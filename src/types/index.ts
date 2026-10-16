export interface Deputy {
  id: string;
  name: string;
  party: string;
  province: string;
  locationName: string;
  status: 'ausente' | 'presente';
  role?: string;
  imageUrl?: string;
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
