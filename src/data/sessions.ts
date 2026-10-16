import { Session } from '../types';

export const SESSIONS_DATA: Session[] = [
  {
    id: '2026-10-15',
    date: '2026-10-15',
    displayDate: '15 de Octubre de 2026',
    title: 'Sesión Especial: Derogación DNU 70/2023 y Presupuesto Universitario',
    description: 'Sesión frustrada por falta de quórum en coincidencia con la masiva 5° Marcha Federal Universitaria y la movilización de centrales obreras al Congreso de la Nación.',
    quorumRequired: 129,
    quorumPresent: 121,
    totalDeputies: 257,
    outcome: 'Sin Quórum',
    deputies: [
      {
        id: 'estela-mary-neder',
        name: 'Estela Mary Neder',
        party: 'Unión por la Patria',
        province: 'Santiago del Estero',
        locationName: 'Santiago del Estero, Argentina',
        status: 'ausente'
      },
      {
        id: 'paulo-agustin-tita',
        name: 'Paulo Agustín Tita',
        party: 'Unión por la Patria',
        province: 'Tierra del Fuego',
        locationName: 'Ushuaia, Tierra del Fuego, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/paulo-agustin-tita.png'
      },
      {
        id: 'maria-florencia-de-sensi',
        name: 'María Florencia De Sensi',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'La Plata, Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'alejandro-finocchiaro',
        name: 'Alejandro Finocchiaro',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'La Matanza, Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'cristian-a-ritondo',
        name: 'Cristian A. Ritondo',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'Avellaneda, Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'javier-sanchez-wrba',
        name: 'Javier Sánchez Wrba',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'martin-yeza',
        name: 'Martín Yeza',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'Pinamar, Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'fernando-de-andreis',
        name: 'Fernando de Andreis',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'daiana-fernandez-molero',
        name: 'Daiana Fernández Molero',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'antonela-giampieri',
        name: 'Antonela Giampieri',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'alvaro-gonzalez',
        name: 'Álvaro González',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'alicia-fregonese',
        name: 'Alicia Fregonese',
        party: 'PRO',
        province: 'Entre Ríos',
        locationName: 'Paraná, Entre Ríos, Argentina',
        status: 'ausente'
      },
      {
        id: 'martin-ardohain',
        name: 'Martín Ardohain',
        party: 'PRO',
        province: 'La Pampa',
        locationName: 'Santa Rosa, La Pampa, Argentina',
        status: 'ausente'
      },
      {
        id: 'emmanuel-bianchetti',
        name: 'Emmanuel Bianchetti',
        party: 'PRO',
        province: 'Misiones',
        locationName: 'Posadas, Misiones, Argentina',
        status: 'ausente'
      },
      {
        id: 'guillermo-cesar-aguero',
        name: 'Guillermo César Agüero',
        party: 'UCR',
        province: 'Córdoba',
        locationName: 'Córdoba, Argentina',
        status: 'ausente'
      },
      {
        id: 'gerardo-cipolini',
        name: 'Gerardo Cipolini',
        party: 'UCR',
        province: 'Chaco',
        locationName: 'Resistencia, Chaco, Argentina',
        status: 'ausente'
      },
      {
        id: 'diogenes-ignacio-gonzalez',
        name: 'Diógenes Ignacio González',
        party: 'UCR',
        province: 'Corrientes',
        locationName: 'Corrientes, Argentina',
        status: 'ausente'
      },
      {
        id: 'dario-schneider',
        name: 'Darío Schneider',
        party: 'UCR',
        province: 'Entre Ríos',
        locationName: 'Crespo, Entre Ríos, Argentina',
        status: 'ausente'
      },
      {
        id: 'lisandro-nieri',
        name: 'Lisandro Nieri',
        party: 'UCR',
        province: 'Mendoza',
        locationName: 'Mendoza, Argentina',
        status: 'ausente'
      },
      {
        id: 'pamela-fernanda-verasay',
        name: 'Pamela Fernanda Verasay',
        party: 'UCR',
        province: 'Mendoza',
        locationName: 'Mendoza, Argentina',
        status: 'ausente'
      },
      {
        id: 'eduardo-falcone',
        name: 'Eduardo Falcone',
        party: 'MID',
        province: 'Buenos Aires',
        locationName: 'Chivilcoy, Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'oscar-zago',
        name: 'Oscar Zago',
        party: 'MID',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'karina-banfi',
        name: 'Karina Banfi',
        party: 'Adelante Buenos Aires',
        province: 'Buenos Aires',
        locationName: 'Buenos Aires, Argentina',
        status: 'ausente'
      },
      {
        id: 'jose-luis-garrido',
        name: 'José Luis Garrido',
        party: 'Por Santa Cruz',
        province: 'Santa Cruz',
        locationName: 'Río Gallegos, Santa Cruz, Argentina',
        status: 'ausente'
      },
      {
        id: 'jorge-antonio-avila',
        name: 'Jorge Antonio Avila',
        party: 'Provincias Unidas',
        province: 'Chubut',
        locationName: 'Comodoro Rivadavia, Chubut, Argentina',
        status: 'ausente'
      },
      {
        id: 'alejandra-torres',
        name: 'Alejandra Torres',
        party: 'Provincias Unidas',
        province: 'Córdoba',
        locationName: 'Córdoba, Argentina',
        status: 'ausente'
      },
      {
        id: 'jorge-rizzotti',
        name: 'Jorge Rizzotti',
        party: 'Provincias Unidas',
        province: 'Jujuy',
        locationName: 'San Salvador de Jujuy, Jujuy, Argentina',
        status: 'ausente'
      },
      {
        id: 'maria-ines-zigaran',
        name: 'María Inés Zigarán',
        party: 'Provincias Unidas',
        province: 'Jujuy',
        locationName: 'San Salvador de Jujuy, Jujuy, Argentina',
        status: 'ausente'
      },
      {
        id: 'lourdes-micaela-arrieta',
        name: 'Lourdes Micaela Arrieta',
        party: 'Provincias Unidas',
        province: 'Mendoza',
        locationName: 'Mendoza, Argentina',
        status: 'ausente'
      },
      {
        id: 'sergio-eduardo-capozzi',
        name: 'Sergio Eduardo Capozzi',
        party: 'Provincias Unidas',
        province: 'Río Negro',
        locationName: 'Bariloche, Río Negro, Argentina',
        status: 'ausente'
      },
      {
        id: 'jose-nunez',
        name: 'José Nuñez',
        party: 'Provincias Unidas',
        province: 'Santa Fe',
        locationName: 'Rosario, Santa Fe, Argentina',
        status: 'ausente'
      },
      {
        id: 'gisela-scaglia',
        name: 'Gisela Scaglia',
        party: 'Provincias Unidas',
        province: 'Santa Fe',
        locationName: 'Gálvez, Santa Fe, Argentina',
        status: 'ausente'
      },
      {
        id: 'bernardo-biella',
        name: 'Bernardo Biella',
        party: 'Innovación Federal',
        province: 'Salta',
        locationName: 'Salta, Argentina',
        status: 'ausente'
      },
      {
        id: 'pablo-outes',
        name: 'Pablo Outes',
        party: 'Innovación Federal',
        province: 'Salta',
        locationName: 'Salta, Argentina',
        status: 'ausente'
      },
      {
        id: 'yolanda-vega',
        name: 'Yolanda Vega',
        party: 'Innovación Federal',
        province: 'Salta',
        locationName: 'Cerrillos, Salta, Argentina',
        status: 'ausente'
      },
      {
        id: 'claudio-alvarez',
        name: 'Claudio Álvarez',
        party: 'Innovación Federal',
        province: 'Misiones',
        locationName: 'Posadas, Misiones, Argentina',
        status: 'ausente'
      },
      {
        id: 'gerardo-gustavo-gonzalez',
        name: 'Gerardo Gustavo González',
        party: 'Innovación Federal',
        province: 'Misiones',
        locationName: 'Posadas, Misiones, Argentina',
        status: 'ausente'
      },
      {
        id: 'elia-marina-fernandez',
        name: 'Elia Marina Fernández',
        party: 'Independencia',
        province: 'Tucumán',
        locationName: 'Aguilares, Tucumán, Argentina',
        status: 'ausente'
      },
      {
        id: 'gladys-medina',
        name: 'Gladys Medina',
        party: 'Independencia',
        province: 'Tucumán',
        locationName: 'Banda del Río Salí, Tucumán, Argentina',
        status: 'ausente'
      },
      {
        id: 'javier-noguera',
        name: 'Javier Noguera',
        party: 'Independencia',
        province: 'Tucumán',
        locationName: 'Tafí Viejo, Tucumán, Argentina',
        status: 'ausente'
      },
      {
        id: 'carlos-gustavo-jaime-quiroga',
        name: 'Carlos Gustavo Jaime Quiroga',
        party: 'Producción y Trabajo',
        province: 'San Juan',
        locationName: 'San Juan, Argentina',
        status: 'ausente'
      },
      {
        id: 'nancy-viviana-picon-martinez',
        name: 'Nancy Viviana Picón Martínez',
        party: 'Producción y Trabajo',
        province: 'San Juan',
        locationName: 'Rivadavia, San Juan, Argentina',
        status: 'ausente'
      },
      {
        id: 'karina-maureira',
        name: 'Karina Maureira',
        party: 'La Neuquinidad',
        province: 'Neuquén',
        locationName: 'Neuquén, Argentina',
        status: 'ausente'
      }
    ]
  }
];
