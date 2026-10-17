
// Estimación salarial oficial HCDN (2026):
// Dieta bruta base: $6.650.000 (aprox. $5.300.000 neto de bolsillo)
// Adicional por Desarraigo (+100 km de CABA): +$1.250.000 bruto (+$950.000 neto aprox.)
export const SALARY_CONFIG = {
  baseGross: 6650000,
  baseNet: 5300000,
  desarraigoGross: 1250000,
  desarraigoNet: 950000,
  sources: "Honorable Cámara de Diputados de la Nación (HCDN) - Liquidación paritaria APL / Dietas legislativas 2026"
};

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
                socialMedia: {
          facebook: { handle: "estela.neder", url: "https://www.facebook.com/estela.neder" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/eneder/',
        cuit: '23-13702610-4',
        dni: '13.702.610'
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
                socialMedia: {
          instagram: { handle: "@titaagustin", url: "https://www.instagram.com/titaagustin" },
          facebook: { handle: "agustintitaok", url: "https://www.facebook.com/agustintitaok" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ptita/',
        cuit: '20-25081603-1',
        dni: '25.081.603'
      },
      {
        id: 'maria-florencia-de-sensi',
        name: 'María Florencia De Sensi',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'Lisandro de la Torre 550, Comuna 9, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Lisandro de la Torre 550, Comuna 9, CABA (CP 1408)',
        addressSource: 'https://w20argentina.com/empresa/de-sensi-maria-florencia-27332948895',
        status: 'ausente',
        imageUrl: '/deputies/maria-florencia-de-sensi.png',
                socialMedia: {
          x: { handle: "@flordesensi", url: "https://x.com/flordesensi" },
          instagram: { handle: "@flordesensi", url: "https://www.instagram.com/flordesensi" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mdesensi/',
        cuit: '27-33294889-5',
        dni: '33.294.889'
      },
      {
        id: 'alejandro-finocchiaro',
        name: 'Alejandro Finocchiaro',
        party: 'PRO',
        province: 'Buenos Aires',
        locationName: 'La Matanza, Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/alejandro-finocchiaro.png',
                socialMedia: {
          x: { handle: "@alefinocchiaro", url: "https://x.com/alefinocchiaro" },
          facebook: { handle: "AlejandroFinocchiaroOK", url: "https://www.facebook.com/AlejandroFinocchiaroOK" },
        },
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
                socialMedia: {
          x: { handle: "@cristianritondo", url: "https://x.com/cristianritondo" },
          instagram: { handle: "@cristianritondo", url: "https://www.instagram.com/cristianritondo" },
        },
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
                socialMedia: {
          x: { handle: "@jsanchezwrba", url: "https://x.com/jsanchezwrba" },
          instagram: { handle: "@javiersanchezwrba", url: "https://www.instagram.com/javiersanchezwrba" },
        },
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
                socialMedia: {
          x: { handle: "@martinyeza", url: "https://x.com/martinyeza" },
          instagram: { handle: "@martinyeza", url: "https://www.instagram.com/martinyeza" },
        },
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
                socialMedia: {
          x: { handle: "@deAndreis", url: "https://x.com/deAndreis" },
          instagram: { handle: "@fernandodeandreis", url: "https://www.instagram.com/fernandodeandreis" },
        },
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
                socialMedia: {
          x: { handle: "@daianafmolero", url: "https://x.com/daianafmolero" },
          instagram: { handle: "@daianafmolero", url: "https://www.instagram.com/daianafmolero" },
        },
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
                socialMedia: {
          instagram: { handle: "@antogiampieri", url: "https://www.instagram.com/antogiampieri" },
        },
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
        socialMedia: {
          instagram: { handle: "@alvarog.gonzalez", url: "https://www.instagram.com/alvarog.gonzalez/" },
        },
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
                socialMedia: {
          x: { handle: "@aliciafregonese", url: "https://x.com/aliciafregonese" },
          instagram: { handle: "@aliciafregonese", url: "https://www.instagram.com/aliciafregonese" },
        },
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
                socialMedia: {
          x: { handle: "@catoardohain", url: "https://x.com/catoardohain" },
          instagram: { handle: "@catoardohain", url: "https://www.instagram.com/catoardohain" },
        },
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
                socialMedia: {
          x: { handle: "@ebianchetti_", url: "https://x.com/ebianchetti_" },
          instagram: { handle: "@emmanuelbianchetti", url: "https://www.instagram.com/emmanuelbianchetti" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rbianchetti/'
      },
      {
        id: 'guillermo-cesar-aguero',
        name: 'Guillermo César Agüero',
        party: 'UCR',
        province: 'Chaco',
        locationName: 'Resistencia, Chaco, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/guillermo-cesar-aguero.png',
        socialMedia: {
          instagram: { handle: "@guilleaguero.chaco", url: "https://www.instagram.com/guilleaguero.chaco/" },
        },
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
                socialMedia: {
          instagram: { handle: "@gerardocipoliniok", url: "https://www.instagram.com/gerardocipoliniok/" },
          facebook: { handle: "gerardocipolini", url: "https://www.facebook.com/gerardocipolini" },
        },
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
                socialMedia: {
          x: { handle: "@DiogenesIG", url: "https://x.com/DiogenesIG" },
          instagram: { handle: "@diogenesigonzalez", url: "https://www.instagram.com/diogenesigonzalez" },
        },
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
                socialMedia: {
          x: { handle: "@DarioSchneider5", url: "https://x.com/DarioSchneider5" },
          instagram: { handle: "@darioschneiderok", url: "https://www.instagram.com/darioschneiderok" },
        },
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
                socialMedia: {
          x: { handle: "@LisandroNieri", url: "https://x.com/LisandroNieri" },
          instagram: { handle: "@lisandronieri", url: "https://www.instagram.com/lisandronieri" },
        },
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
        socialMedia: {
          x: { handle: "@PameVerasay", url: "https://x.com/PameVerasay" },
          instagram: { handle: "@pamela.verasay", url: "https://www.instagram.com/pamela.verasay/" },
        },
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
                socialMedia: {
          x: { handle: "@efalcone62", url: "https://x.com/efalcone62" },
          instagram: { handle: "@eduardofalconeok", url: "https://www.instagram.com/eduardofalconeok" },
        },
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
        socialMedia: {
          x: { handle: "@OscarZagoOK", url: "https://x.com/OscarZagoOK" },
          instagram: { handle: "@dipzago", url: "https://www.instagram.com/dipzago/" },
        },
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
                socialMedia: {
          x: { handle: "@KBanfi", url: "https://x.com/KBanfi" },
          instagram: { handle: "@karina_banfi", url: "https://www.instagram.com/karina_banfi" },
        },
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
        socialMedia: {
          instagram: { handle: "@garridojoseluisok", url: "https://www.instagram.com/garridojoseluisok/" },
          facebook: { handle: "gestiongarrido", url: "https://www.facebook.com/gestiongarrido" },
        },
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
        socialMedia: {
          facebook: { handle: "Jorge Ávila Diputado Nacional", url: "https://www.facebook.com/p/Jorge-%C3%81vila-Diputado-Nacional-61560928422265/" },
        },
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
        socialMedia: {
          x: { handle: "@Ale_Torres60", url: "https://x.com/Ale_Torres60" },
        },
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
        socialMedia: {
          instagram: { handle: "@colo.rizzotti", url: "https://www.instagram.com/colo.rizzotti/" },
          facebook: { handle: "ColoRizzotti", url: "https://www.facebook.com/ColoRizzotti/" },
        },
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
        socialMedia: {
          instagram: { handle: "@mariaineszigaranok", url: "https://www.instagram.com/mariaineszigaranok/" },
          facebook: { handle: "mariaineszigaranok", url: "https://www.facebook.com/mariaineszigaranok/" },
        },
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
        socialMedia: {
          x: { handle: "@lulumicart", url: "https://x.com/lulumicart" },
          instagram: { handle: "@diputadaarrieta", url: "https://www.instagram.com/diputadaarrieta/" },
        },
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
        socialMedia: {
          instagram: { handle: "@sergiocapozzi_", url: "https://www.instagram.com/sergiocapozzi_/" },
          facebook: { handle: "sergioecapozzi", url: "https://www.facebook.com/sergioecapozzi" },
        },
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
        socialMedia: {
          instagram: { handle: "@josenunezjurado", url: "https://www.instagram.com/josenunezjurado/" },
          facebook: { handle: "josenunezjurado", url: "https://www.facebook.com/josenunezjurado" },
        },
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
        socialMedia: {
          instagram: { handle: "@giselascaglia", url: "https://www.instagram.com/giselascaglia/" },
          facebook: { handle: "gisela.scaglia", url: "https://www.facebook.com/gisela.scaglia" },
        },
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
        socialMedia: {
          instagram: { handle: "@elmedicoenmicasa", url: "https://www.instagram.com/elmedicoenmicasa/" },
          facebook: { handle: "DrBernardoBiella", url: "https://www.facebook.com/DrBernardoBiella/" },
        },
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
                socialMedia: {
          x: { handle: "@PabloOutesOk", url: "https://x.com/PabloOutesOk" },
          instagram: { handle: "@pablooutesok", url: "https://www.instagram.com/pablooutesok" },
        },
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
                socialMedia: {
          x: { handle: "@YolandaVegaOK", url: "https://x.com/YolandaVegaOK" },
          instagram: { handle: "@yolandagvegadip", url: "https://www.instagram.com/yolandagvegadip" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/yvega/'
      },
      {
        id: 'claudio-ariel-alvarez',
        name: 'Claudio Ariel Álvarez',
        party: 'Argentina Federal',
        province: 'San Luis',
        locationName: 'San Luis, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/claudio-alvarez.png',
        socialMedia: {
          instagram: { handle: "@claudio_ariel_alvarez", url: "https://www.instagram.com/claudio_ariel_alvarez/" },
          facebook: { handle: "acuerdosanluis", url: "https://www.facebook.com/acuerdosanluis/" },
        },
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
                socialMedia: {
          x: { handle: "@GustavoGFormosa", url: "https://x.com/GustavoGFormosa" },
          instagram: { handle: "@gustavo_gonzalez_fsa", url: "https://www.instagram.com/gustavo_gonzalez_fsa" },
        },
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
                socialMedia: {
          instagram: { handle: "@eliamarinafernandez", url: "https://www.instagram.com/eliamarinafernandez" },
        },
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
                socialMedia: {
          x: { handle: "@gladysmedina_ok", url: "https://x.com/gladysmedina_ok" },
          instagram: { handle: "@gladysmedinaoficial", url: "https://www.instagram.com/gladysmedinaoficial" },
        },
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
        socialMedia: {
          x: { handle: "@javier_noguera", url: "https://x.com/javier_noguera" },
          instagram: { handle: "@javier_noguera", url: "https://www.instagram.com/javier_noguera/" },
          facebook: { handle: "javiernoguera", url: "https://www.facebook.com/javiernoguera" },
        },
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
                socialMedia: {
          facebook: { handle: "carlosgustavojaimequiroga", url: "https://www.facebook.com/carlosgustavojaimequiroga" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/cjaimeq/'
      },
      {
        id: 'nancy-viviana-picon-martinez',
        name: 'Nancy Viviana Picón Martínez',
        party: 'Producción y Trabajo',
        province: 'San Juan',
        locationName: 'Av. San Martín Este 478, San Juan, Argentina',
        address: 'Av. San Martín Este 478 PA, San Juan (CP 5400)',
        addressNotes: 'Domicilio y línea telefónica registrados a nombre de su cónyuge, Ricardo Moine.',
        addressSources: [
          {
            label: 'Declaración Jurada Patrimonial Integral (Indicadores.ar)',
            url: 'https://indicadores.ar/declaraciones-juradas/picon-martinez-nancy-viviana-27251183207'
          },
          {
            label: 'Guía telefónica comercial (ABC Teléfonos - Av. San Martín E 478 PA, Ricardo Moine)',
            url: 'https://www.abctelefonos.com/direccion_argentina/san_juan/san_juan/av_s_martin_e_478_pa'
          },
          {
            label: 'Vínculo conyugal público verificado (Publicación oficial en Instagram)',
            url: 'https://www.instagram.com/p/Db7BbcpDqY7/'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/nancy-viviana-picon-martinez.png',
        socialMedia: {
          x: { handle: "@NancyPiconSJ", url: "https://x.com/NancyPiconSJ" },
          instagram: { handle: "@nancypiconsj", url: "https://www.instagram.com/nancypiconsj" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/npiconm/',
        cuit: '27-25118320-7',
        dni: '25.118.320'
      },
      {
        id: 'karina-maureira',
        name: 'Karina Maureira',
        party: 'La Neuquinidad',
        province: 'Neuquén',
        locationName: 'Urquiza 1643, General Roca, Río Negro, Argentina',
        address: 'Urquiza 1643, General Roca, Río Negro',
        addressSources: [
          {
            label: 'Declaración Jurada Patrimonial - Inmueble casa habitación General Roca (Indicadores.ar)',
            url: 'https://indicadores.ar/declaraciones-juradas/maureira-karina-alejandra-23221392094'
          },
          {
            label: 'Guía telefónica comercial (ABC Teléfonos - Urquiza 1643, General Roca)',
            url: 'https://www.abctelefonos.com/direccion_argentina/rio_negro/general_roca_-_neuquen/urquiza_1643'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/karina-maureira.png',
        socialMedia: {
          x: { handle: "@Karytta29", url: "https://x.com/Karytta29" },
          instagram: { handle: "@karinamaureiraok", url: "https://www.instagram.com/karinamaureiraok/" },
          facebook: { handle: "karina.maureira.9", url: "https://www.facebook.com/karina.maureira.9" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/kmaureira/',
        cuit: '23-22139209-4',
        dni: '22.139.209'
      }
    ]
  }
];

export function getDeputySalary(deputy: { province: string; hasDesarraigo?: boolean; estimatedDietGross?: number; estimatedDietNet?: number }) {
  // If explicitly overridden on the deputy object:
  if (deputy.estimatedDietGross && deputy.estimatedDietNet) {
    return {
      gross: deputy.estimatedDietGross,
      net: deputy.estimatedDietNet,
      hasDesarraigo: !!deputy.hasDesarraigo
    };
  }

  // By default, CABA legislators do not receive the desarraigo allowance (+100km rule)
  const isCABA = deputy.province.toLowerCase().includes("ciudad autónoma") || deputy.province.toLowerCase().includes("caba");
  const hasDesarraigo = deputy.hasDesarraigo !== undefined ? deputy.hasDesarraigo : !isCABA;

  const gross = SALARY_CONFIG.baseGross + (hasDesarraigo ? SALARY_CONFIG.desarraigoGross : 0);
  const net = SALARY_CONFIG.baseNet + (hasDesarraigo ? SALARY_CONFIG.desarraigoNet : 0);

  return {
    gross,
    net,
    hasDesarraigo
  };
}

export function formatCurrencyARS(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(amount);
}
