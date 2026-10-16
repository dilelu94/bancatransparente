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
        status: 'ausente',
        imageUrl: '/deputies/estela-mary-neder.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/eneder/'
      },
      {
        id: 'paulo-agustin-tita',
        name: 'Paulo Agustín Tita',
        party: 'Unión por la Patria',
        province: 'Tierra del Fuego',
        locationName: 'Los Calafates 981, Río Grande, Tierra del Fuego, Argentina',
        address: 'Los Calafates 981, Río Grande, Tierra del Fuego (CP 9420)',
        addressSource: 'https://w20argentina.com/empresa/tita-paulo-agustin-20250816031',
        status: 'ausente',
        imageUrl: '/deputies/paulo-agustin-tita.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ptita/'
      },
      {
        id: 'maria-florencia-de-sensi',
        name: 'María Florencia De Sensi',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'La Plata, Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/maria-florencia-de-sensi.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mdesensi/'
      },
      {
        id: 'alejandro-finocchiaro',
        name: 'Alejandro Finocchiaro',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'La Matanza, Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/alejandro-finocchiaro.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/afinocchiaro/'
      },
      {
        id: 'cristian-a-ritondo',
        name: 'Cristian A. Ritondo',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'Avellaneda, Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/cristian-a-ritondo.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/critondo/'
      },
      {
        id: 'javier-sanchez-wrba',
        name: 'Javier Sánchez Wrba',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/javier-sanchez-wrba.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jsanchezw/'
      },
      {
        id: 'martin-yeza',
        name: 'Martín Yeza',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'Pinamar, Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/martin-yeza.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/myeza/'
      },
      {
        id: 'fernando-de-andreis',
        name: 'Fernando de Andreis',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/fernando-de-andreis.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/fdeandreis/'
      },
      {
        id: 'daiana-fernandez-molero',
        name: 'Daiana Fernández Molero',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/daiana-fernandez-molero.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/dfernandezm/'
      },
      {
        id: 'antonela-giampieri',
        name: 'Antonela Giampieri',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/antonela-giampieri.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/agiampieri/'
      },
      {
        id: 'alvaro-gonzalez',
        name: 'Álvaro González',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/alvaro-gonzalez.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/agonzalez/'
      },
      {
        id: 'alicia-fregonese',
        name: 'Alicia Fregonese',
        party: 'PRO',
        province: 'Entre Ríos',
        locationName: 'Paraná, Entre Ríos, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/alicia-fregonese.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/afregonese/'
      },
      {
        id: 'martin-ardohain',
        name: 'Martín Ardohain',
        party: 'PRO',
        province: 'La Pampa',
        locationName: 'Santa Rosa, La Pampa, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/martin-ardohain.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mardohain/'
      },
      {
        id: 'emmanuel-bianchetti',
        name: 'Emmanuel Bianchetti',
        party: 'PRO',
        province: 'Misiones',
        locationName: 'Posadas, Misiones, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/emmanuel-bianchetti.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rbianchetti/'
      },
      {
        id: 'guillermo-cesar-aguero',
        name: 'Guillermo César Agüero',
        party: 'UCR',
        province: 'Córdoba',
        locationName: 'Córdoba, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/guillermo-cesar-aguero.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gcaguero/'
      },
      {
        id: 'gerardo-cipolini',
        name: 'Gerardo Cipolini',
        party: 'UCR',
        province: 'Chaco',
        locationName: 'Resistencia, Chaco, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/gerardo-cipolini.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gcipolini/'
      },
      {
        id: 'diogenes-ignacio-gonzalez',
        name: 'Diógenes Ignacio González',
        party: 'UCR',
        province: 'Corrientes',
        locationName: 'Corrientes, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/diogenes-ignacio-gonzalez.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/digonzalez/'
      },
      {
        id: 'dario-schneider',
        name: 'Darío Schneider',
        party: 'UCR',
        province: 'Entre Ríos',
        locationName: 'Crespo, Entre Ríos, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/dario-schneider.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/aschneider/'
      },
      {
        id: 'lisandro-nieri',
        name: 'Lisandro Nieri',
        party: 'UCR',
        province: 'Mendoza',
        locationName: 'Mendoza, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/lisandro-nieri.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lnieri/'
      },
      {
        id: 'pamela-fernanda-verasay',
        name: 'Pamela Fernanda Verasay',
        party: 'UCR',
        province: 'Mendoza',
        locationName: 'Mendoza, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/pamela-fernanda-verasay.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/pverasay/'
      },
      {
        id: 'eduardo-falcone',
        name: 'Eduardo Falcone',
        party: 'MID',
        province: 'Buenos Aires',
        locationName: 'Chivilcoy, Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/eduardo-falcone.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/efalcone/'
      },
      {
        id: 'oscar-zago',
        name: 'Oscar Zago',
        party: 'MID',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/oscar-zago.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ozago/'
      },
      {
        id: 'karina-banfi',
        name: 'Karina Banfi',
        party: 'Adelante Buenos Aires',
        province: 'Buenos Aires',
        locationName: 'Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/karina-banfi.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/kbanfi/'
      },
      {
        id: 'jose-luis-garrido',
        name: 'José Luis Garrido',
        party: 'Por Santa Cruz',
        province: 'Santa Cruz',
        locationName: 'Río Gallegos, Santa Cruz, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/jose-luis-garrido.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jgarrido/'
      },
      {
        id: 'jorge-antonio-avila',
        name: 'Jorge Antonio Avila',
        party: 'Provincias Unidas',
        province: 'Chubut',
        locationName: 'Comodoro Rivadavia, Chubut, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/jorge-antonio-avila.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jaavila/'
      },
      {
        id: 'alejandra-torres',
        name: 'Alejandra Torres',
        party: 'Provincias Unidas',
        province: 'Córdoba',
        locationName: 'Córdoba, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/alejandra-torres.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ltorres/'
      },
      {
        id: 'jorge-rizzotti',
        name: 'Jorge Rizzotti',
        party: 'Provincias Unidas',
        province: 'Jujuy',
        locationName: 'San Salvador de Jujuy, Jujuy, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/jorge-rizzotti.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jrizzotti/'
      },
      {
        id: 'maria-ines-zigaran',
        name: 'María Inés Zigarán',
        party: 'Provincias Unidas',
        province: 'Jujuy',
        locationName: 'San Salvador de Jujuy, Jujuy, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/maria-ines-zigaran.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mzigaran/'
      },
      {
        id: 'lourdes-micaela-arrieta',
        name: 'Lourdes Micaela Arrieta',
        party: 'Provincias Unidas',
        province: 'Mendoza',
        locationName: 'Mendoza, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/lourdes-micaela-arrieta.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/larrieta/'
      },
      {
        id: 'sergio-eduardo-capozzi',
        name: 'Sergio Eduardo Capozzi',
        party: 'Provincias Unidas',
        province: 'Río Negro',
        locationName: 'Bariloche, Río Negro, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/sergio-eduardo-capozzi.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/scapozzi/'
      },
      {
        id: 'jose-nunez',
        name: 'José Nuñez',
        party: 'Provincias Unidas',
        province: 'Santa Fe',
        locationName: 'Rosario, Santa Fe, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/jose-nunez.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jnunez/'
      },
      {
        id: 'gisela-scaglia',
        name: 'Gisela Scaglia',
        party: 'Provincias Unidas',
        province: 'Santa Fe',
        locationName: 'Gálvez, Santa Fe, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/gisela-scaglia.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gscaglia/'
      },
      {
        id: 'bernardo-biella',
        name: 'Bernardo Biella',
        party: 'Innovación Federal',
        province: 'Salta',
        locationName: 'Salta, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/bernardo-biella.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/bbiellac/'
      },
      {
        id: 'pablo-outes',
        name: 'Pablo Outes',
        party: 'Innovación Federal',
        province: 'Salta',
        locationName: 'Salta, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/pablo-outes.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/poutes/'
      },
      {
        id: 'yolanda-vega',
        name: 'Yolanda Vega',
        party: 'Innovación Federal',
        province: 'Salta',
        locationName: 'Cerrillos, Salta, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/yolanda-vega.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/yvega/'
      },
      {
        id: 'claudio-alvarez',
        name: 'Claudio Álvarez',
        party: 'Innovación Federal',
        province: 'Misiones',
        locationName: 'Posadas, Misiones, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/claudio-alvarez.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/caalvarez/'
      },
      {
        id: 'gerardo-gustavo-gonzalez',
        name: 'Gerardo Gustavo González',
        party: 'Innovación Federal',
        province: 'Misiones',
        locationName: 'Posadas, Misiones, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/gerardo-gustavo-gonzalez.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gggonzalez/'
      },
      {
        id: 'elia-marina-fernandez',
        name: 'Elia Marina Fernández',
        party: 'Independencia',
        province: 'Tucumán',
        locationName: 'Aguilares, Tucumán, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/elia-marina-fernandez.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/emfernandez/'
      },
      {
        id: 'gladys-medina',
        name: 'Gladys Medina',
        party: 'Independencia',
        province: 'Tucumán',
        locationName: 'Banda del Río Salí, Tucumán, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/gladys-medina.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gmedina/'
      },
      {
        id: 'javier-noguera',
        name: 'Javier Noguera',
        party: 'Independencia',
        province: 'Tucumán',
        locationName: 'Tafí Viejo, Tucumán, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/javier-noguera.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mnoguera/'
      },
      {
        id: 'carlos-gustavo-jaime-quiroga',
        name: 'Carlos Gustavo Jaime Quiroga',
        party: 'Producción y Trabajo',
        province: 'San Juan',
        locationName: 'San Juan, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/carlos-gustavo-jaime-quiroga.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/cjaimeq/'
      },
      {
        id: 'nancy-viviana-picon-martinez',
        name: 'Nancy Viviana Picón Martínez',
        party: 'Producción y Trabajo',
        province: 'San Juan',
        locationName: 'Rivadavia, San Juan, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/nancy-viviana-picon-martinez.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/npiconm/'
      },
      {
        id: 'karina-maureira',
        name: 'Karina Maureira',
        party: 'La Neuquinidad',
        province: 'Neuquén',
        locationName: 'Neuquén, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/karina-maureira.png',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/kmaureira/'
      }
    ]
  }
];
