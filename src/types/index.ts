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
  officePhone?: string;
  office?: string;
  officialEmail?: string;
  mandate?: string;
  declaration?: DeputyAssetDeclaration;
}

export interface DeputyProperty {
  tipo: string;
  destino: string;
  localidad: string;
  porcentaje?: string;
  fechaIngreso?: string;
  importe: number;
  descripcionOriginal?: string;
}

export interface DeputyVehicle {
  descripcion: string;
  anioFabricacion?: string;
  porcentaje?: string;
  fechaIngreso?: string;
  importe: number;
}

export interface DeputyAssetDeclaration {
  anio: number;
  tipoDeclaracion: string;
  cargo?: string;
  organismo?: string;
  totalBienesInicio: number;
  totalBienesFinal: number;
  totalDeudasFinal: number;
  patrimonioNeto: number;
  ingresosAnuales?: number;
  inmuebles: DeputyProperty[];
  vehiculos: DeputyVehicle[];
  localidadesInmuebles: string[];
  fuente: string;
  linkFuente: string;
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
