
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
import { DEPUTY_DECLARATIONS } from './declarations';

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
          x: { handle: "@desensiflor", url: "https://x.com/desensiflor" },
          instagram: { handle: "@florenciadesensi", url: "https://www.instagram.com/florenciadesensi/" },
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
          instagram: { handle: "@alejandro_finocchiaro", url: "https://www.instagram.com/alejandro_finocchiaro/" },
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
        locationName: 'Ortiz de Ocampo 3160 Dpto. B, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Ortiz de Ocampo 3160 Dpto. B, CABA (CP 1425)',
        addressSource: 'https://w20argentina.com/empresa/de-andreis-fernando-20249775461',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/de-andreis-fernando-20249775461'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/fernando-de-andreis.png',
                socialMedia: {
          x: { handle: "@deAndreis", url: "https://x.com/deAndreis" },
          instagram: { handle: "@fernandodeandreis", url: "https://www.instagram.com/fernandodeandreis" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/fdeandreis/',
        cuit: '20-24977546-1',
        dni: '24.977.546'
      },
      {
        id: 'daiana-fernandez-molero',
        name: 'Daiana Fernández Molero',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Ciudad Autónoma de Buenos Aires, Argentina',
        status: 'ausente',
        imageUrl: '/deputies/daiana-fernandez-molero.png',
                socialMedia: {},
        profileUrl: 'https://www.hcdn.gob.ar/diputados/dfernandezm/'
      },
      {
        id: 'antonela-giampieri',
        name: 'Antonela Giampieri',
        party: 'PRO',
        province: 'Ciudad Autónoma de Buenos Aires',
        locationName: 'Doblas 830 Piso 2 Dpto. B, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Doblas 830 Piso 2 Dpto. B, CABA (CP 1424)',
        addressSource: 'https://w20argentina.com/empresa/giampieri-antonela-27339516524',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/giampieri-antonela-27339516524'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/antonela-giampieri.png',
                socialMedia: {
          instagram: { handle: "@antogiampieri", url: "https://www.instagram.com/antogiampieri" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/agiampieri/',
        cuit: '27-33951652-4',
        dni: '33.951.652'
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
        locationName: 'Enriqueta Schmidt 425, Santa Rosa, La Pampa, Argentina',
        address: 'Enriqueta Schmidt 425, Santa Rosa, La Pampa (CP 6300)',
        addressSource: 'https://w20argentina.com/empresa/ardohain-martin-miguel-23202055869',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/ardohain-martin-miguel-23202055869'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/martin-ardohain.png',
                socialMedia: {
          x: { handle: "@catoardohain", url: "https://x.com/catoardohain" },
          instagram: { handle: "@martinardohain", url: "https://www.instagram.com/martinardohain/" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mardohain/',
        cuit: '23-20205586-9',
        dni: '20.205.586'
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
          x: { handle: "@Bianchetti_E", url: "https://x.com/Bianchetti_E" },
          instagram: { handle: "@emmanuel.bianchetti", url: "https://www.instagram.com/emmanuel.bianchetti/" },
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
        locationName: 'Gibraltar 5365, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Gibraltar 5365, CABA (CP 1408)',
        addressSource: 'https://w20argentina.com/empresa/zago-oscar-roberto-23165838009',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/zago-oscar-roberto-23165838009'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/oscar-zago.png',
        socialMedia: {
          x: { handle: "@OscarZagoOK", url: "https://x.com/OscarZagoOK" },
          instagram: { handle: "@dipzago", url: "https://www.instagram.com/dipzago/" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ozago/',
        cuit: '23-16583800-9',
        dni: '16.583.800'
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
          instagram: { handle: "@kbanfi", url: "https://www.instagram.com/kbanfi/" },
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
        locationName: 'Jose Roque Funes 1695 - Barrio : Cerro de las Rosas, Cerro De Las Rosas, Córdoba, Argentina',
        address: 'Jose Roque Funes 1695 - Barrio : Cerro de las Rosas, Cerro De Las Rosas, Córdoba (CP 5009)',
        addressSource: 'https://w20argentina.com/empresa/torres-liliana-alejandra-27142911502',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/torres-liliana-alejandra-27142911502'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/alejandra-torres.png',
        socialMedia: {
          x: { handle: "@Ale_Torres60", url: "https://x.com/Ale_Torres60" },
          instagram: { handle: "@aletorres60", url: "https://www.instagram.com/aletorres60/" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ltorres/',
        cuit: '27-14291150-2',
        dni: '14.291.150'
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
        locationName: 'Las Heras Gral AV. 3777 Piso 6 Dpto. C, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Las Heras Gral AV. 3777 Piso 6 Dpto. C, CABA (CP 1425)',
        addressSource: 'https://w20argentina.com/empresa/nunez-jose-carlos-20242920644',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/nunez-jose-carlos-20242920644'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/jose-nunez.png',
        socialMedia: {
          instagram: { handle: "@josenunezjurado", url: "https://www.instagram.com/josenunezjurado/" },
          facebook: { handle: "josenunezjurado", url: "https://www.facebook.com/josenunezjurado" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jnunez/',
        cuit: '20-24292064-4',
        dni: '24.292.064'
      },
      {
        id: 'gisela-scaglia',
        name: 'Gisela Scaglia',
        party: 'Provincias Unidas',
        province: 'Santa Fe',
        locationName: 'España 1039, Santa Fe, Argentina',
        address: 'España 1039, Santa Fe (CP 2252)',
        addressSource: 'https://w20argentina.com/empresa/scaglia-gisela-27254532164',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/scaglia-gisela-27254532164'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/gisela-scaglia.png',
        socialMedia: {
          instagram: { handle: "@giselascaglia", url: "https://www.instagram.com/giselascaglia/" },
          facebook: { handle: "gisela.scaglia", url: "https://www.facebook.com/gisela.scaglia" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gscaglia/',
        cuit: '27-25453216-4',
        dni: '25.453.216'
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
        locationName: 'Ruta 26 KM 3 1/2 3 - Paraje : Bella Vista, Salta, Argentina',
        address: 'Ruta 26 KM 3 1/2 3 - Paraje : Bella Vista, Salta (CP 4403)',
        addressSource: 'https://w20argentina.com/empresa/vega-yolanda-graciela-27182307349',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/vega-yolanda-graciela-27182307349'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/yolanda-vega.png',
                socialMedia: {
          x: { handle: "@YolandaVegaOK", url: "https://x.com/YolandaVegaOK" },
          instagram: { handle: "@yolandagvegadip", url: "https://www.instagram.com/yolandagvegadip" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/yvega/',
        cuit: '27-18230734-9',
        dni: '18.230.734'
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
          x: { handle: "@uthgrasanluis", url: "https://x.com/uthgrasanluis" },
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
        locationName: 'Suipacha 528, San Miguel De Tucuman, Tucumán, Argentina',
        address: 'Suipacha 528, San Miguel De Tucuman, Tucumán (CP 4000)',
        addressSource: 'https://w20argentina.com/empresa/fernandez-elia-marina-27167354918',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/fernandez-elia-marina-27167354918'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/elia-marina-fernandez.png',
                socialMedia: {
          instagram: { handle: "@eliamarinafernandez", url: "https://www.instagram.com/eliamarinafernandez" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/emfernandez/',
        cuit: '27-16735491-8',
        dni: '16.735.491'
      },
      {
        id: 'gladys-medina',
        name: 'Gladys del Valle Medina',
        party: 'Independencia',
        province: 'Tucumán',
        locationName: 'Reyes Católicos 298, Banda del Río Salí, Tucumán, Argentina',
        address: 'Reyes Católicos 298, Banda del Río Salí, Tucumán (CP 4109)',
        addressSource: 'https://w20argentina.com/empresa/medina-gladys-del-valle-27233105193',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/medina-gladys-del-valle-27233105193'
          }
        ],
        status: 'ausente',
        imageUrl: '/deputies/gladys-medina.png',
        socialMedia: {
          x: { handle: "@GladysMedinaOK", url: "https://x.com/GladysMedinaOK" },
          instagram: { handle: "@gladysmedinaoficial", url: "https://www.instagram.com/gladysmedinaoficial" },
        },
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gmedina/',
        cuit: '27-23310519-3',
        dni: '23.310.519'
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
      },
      {
        id: 'hilda-aguirre',
        name: "Hilda Aguirre",
        party: "Unión por la Patria",
        province: "La Rioja",
        locationName: "La Rioja, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/haguirre/',
        dni: '13.918.624',
        cuit: '27-13918624-4',
        officialEmail: 'haguirre@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@bebasoria', url: 'https://x.com/bebasoria' },
          instagram: { handle: '@bebadesoria', url: 'https://www.instagram.com/bebadesoria/' },
        }
      },
      {
        id: 'sabrina-ajmechet',
        name: "Sabrina Ajmechet",
        party: "La Libertad Avanza",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: 'Gallardo Angel AV. 854 Piso 1 Dpto. 4, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Gallardo Angel AV. 854 Piso 1 Dpto. 4, CABA (CP 1405)',
        addressSource: 'https://w20argentina.com/empresa/ajmechet-sabrina-carlota-27290423894',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/ajmechet-sabrina-carlota-27290423894'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/sajmechet/',
        dni: '29.042.389',
        cuit: '27-29042389-4',
        officialEmail: 'sajmechet@hcdn.gob.ar',
        mandate: '2025-2029',
        officePhone: '6075-2913',
        office: '813/913',
        socialMedia: {
          x: { handle: '@ajmechet', url: 'https://x.com/ajmechet' },
          instagram: { handle: '@ajmechet', url: 'https://www.instagram.com/ajmechet/' },
        }
      },
      {
        id: 'carlos-alberto-almena',
        name: "Carlos Alberto Almena",
        party: "La Libertad Avanza",
        province: "San Luis",
        locationName: "San Luis, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/calmena/',
        officialEmail: 'calmena@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@carlosalmenasl', url: 'https://x.com/carlosalmenasl' },
          instagram: { handle: '@carlosalmena', url: 'https://www.instagram.com/carlosalmena/' },
        }
      },
      {
        id: 'lisandro-almiron',
        name: "Lisandro Almirón",
        party: "La Libertad Avanza",
        province: "Corrientes",
        locationName: "Corrientes, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/calmiron/',
        officialEmail: 'calmiron@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@lisandroalm', url: 'https://x.com/lisandroalm' },
          instagram: { handle: '@lisandroalm', url: 'https://www.instagram.com/lisandroalm/' },
        }
      },
      {
        id: 'ernesto-pipi-ali',
        name: "Ernesto \"Pipi\" Alí",
        party: "Primero San Luis",
        province: "San Luis",
        locationName: "San Luis, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/enali/',
        dni: '22.379.928',
        cuit: '20-22379928-1',
        officialEmail: 'enali@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@ernestonaderali', url: 'https://x.com/ernestonaderali' },
          instagram: { handle: '@pipialiok', url: 'https://www.instagram.com/pipialiok/' },
        }
      },
      {
        id: 'cristian-andino',
        name: "Cristian Andino",
        party: "Unión por la Patria",
        province: "San Juan",
        locationName: "San Juan, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/candino/',
        officialEmail: 'candino@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@andinocristian', url: 'https://x.com/andinocristian' },
          instagram: { handle: '@cristianandinook', url: 'https://www.instagram.com/cristianandinook/' },
        }
      },
      {
        id: 'javier-andrade',
        name: "Javier Andrade",
        party: "Unión por la Patria",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jandrade/',
        officialEmail: 'jandrade@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@javieroandrade', url: 'https://x.com/javieroandrade' },
          instagram: { handle: '@javierandradeok', url: 'https://www.instagram.com/javierandradeok/' },
        }
      },
      {
        id: 'barbara-andreussi',
        name: "Barbara Andreussi",
        party: "La Libertad Avanza",
        province: "Jujuy",
        locationName: "Jujuy, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/bandreussi/',
        officialEmail: 'bandreussi@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@b_andreussi', url: 'https://x.com/b_andreussi' },
          instagram: { handle: '@barbara.andreussi', url: 'https://www.instagram.com/barbara.andreussi/' },
        }
      },
      {
        id: 'pablo-ansaloni',
        name: "Pablo Ansaloni",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/pansaloni/',
        dni: '22.077.679',
        cuit: '20-22077679-5',
        officialEmail: 'pansaloni@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          instagram: { handle: '@pabloansaloni', url: 'https://www.instagram.com/pabloansaloni/' },
        }
      },
      {
        id: 'damian-arabia',
        name: "Damián Arabia",
        party: "La Libertad Avanza",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/darabia/',
        dni: '35.731.815',
        cuit: '20-35731815-8',
        officialEmail: 'darabia@hcdn.gob.ar',
        mandate: '2023-2027',
        officePhone: '2281510151',
        office: '712',
        socialMedia: {
          x: { handle: '@damianarabia', url: 'https://x.com/damianarabia' },
          instagram: { handle: '@damianarabia', url: 'https://www.instagram.com/damianarabia/' },
        }
      },
      {
        id: 'jorge-neri-araujo-hernandez',
        name: "Jorge Neri Araujo Hernández",
        party: "Unión por la Patria",
        province: "Tierra del Fuego",
        locationName: "Tierra del Fuego, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jaraujoh/',
        dni: '22.956.148',
        cuit: '20-22956148-1',
        officialEmail: 'jaraujoh@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'alberto-arrua',
        name: "Alberto Arrúa",
        party: "Argentina Federal",
        province: "Misiones",
        locationName: "Misiones, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/aarrua/',
        dni: '24.573.872',
        cuit: '20-24573872-3',
        officialEmail: 'aarrua@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@albertoarruaok', url: 'https://x.com/albertoarruaok' },
          instagram: { handle: '@albertoarruaok', url: 'https://www.instagram.com/albertoarruaok/' },
        }
      },
      {
        id: 'martin-aveiro',
        name: "Martín Aveiro",
        party: "Unión por la Patria",
        province: "Mendoza",
        locationName: 'Sarmiento 10 Manzana a, Mendoza, Argentina',
        address: 'Sarmiento 10 Manzana a, Mendoza (CP 5565)',
        addressSource: 'https://w20argentina.com/empresa/aveiro-martin-guillermo-20241811612',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/aveiro-martin-guillermo-20241811612'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/maveiro/',
        dni: '24.181.161',
        cuit: '20-24181161-2',
        officialEmail: 'maveiro@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@MartinAveir2011', url: 'https://x.com/MartinAveir2011' },
          instagram: { handle: '@martinguillermoaveiro', url: 'https://www.instagram.com/martinguillermoaveiro/' },
        }
      },
      {
        id: 'belen-avico',
        name: "Belén Avico",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/bavico/',
        dni: '27.598.887',
        cuit: '27-27598887-7',
        officialEmail: 'bavico@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          instagram: { handle: '@belen_avico', url: 'https://www.instagram.com/belen_avico/' },
        }
      },
      {
        id: 'fernanda-avila',
        name: "Fernanda Avila",
        party: "Elijo Catamarca",
        province: "Catamarca",
        locationName: 'Pedro Segura 0, Catamarca, Argentina',
        address: 'Pedro Segura 0, Catamarca (CP 4705)',
        addressSource: 'https://w20argentina.com/empresa/avila-maria-fernanda-27324151031',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/avila-maria-fernanda-27324151031'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mavila/',
        dni: '32.415.103',
        cuit: '27-32415103-1',
        officialEmail: 'mavila@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@AvilaFernandaOk', url: 'https://x.com/AvilaFernandaOk' },
          instagram: { handle: '@avilafernandaok', url: 'https://www.instagram.com/avilafernandaok/' },
        }
      },
      {
        id: 'marcelo-barbur',
        name: "Marcelo Barbur",
        party: "Unión por la Patria",
        province: "Santiago del Estero",
        locationName: "Santiago del Estero, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mbarbur/',
        officialEmail: 'mbarbur@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@MBarburSDE', url: 'https://x.com/MBarburSDE' },
          instagram: { handle: '@marcelo.barbur', url: 'https://www.instagram.com/marcelo.barbur/' },
        }
      },
      {
        id: 'luis-eugenio-basterra',
        name: "Luis Eugenio Basterra",
        party: "Unión por la Patria",
        province: "Formosa",
        locationName: "Formosa, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lbasterra/',
        dni: '12.477.384',
        cuit: '23-12477384-9',
        officialEmail: 'lbasterra@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@LuisBasterra1', url: 'https://x.com/LuisBasterra1' },
          instagram: { handle: '@basterraluis', url: 'https://www.instagram.com/basterraluis/' },
        }
      },
      {
        id: 'atilio-basualdo',
        name: "Atilio Basualdo",
        party: "La Libertad Avanza",
        province: "Formosa",
        locationName: "Formosa, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/abasualdo/',
        dni: '14.655.529',
        cuit: '20-14655529-3',
        officialEmail: 'abasualdo@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          instagram: { handle: '@atiliobasualdoar', url: 'https://www.instagram.com/atiliobasualdoar/' },
        }
      },
      {
        id: 'carolina-basualdo',
        name: "Carolina Basualdo",
        party: "Provincias Unidas",
        province: "Córdoba",
        locationName: 'Sarmiento 417, Despeñaderos, Córdoba, Argentina',
        address: 'Sarmiento 417, Despeñaderos, Córdoba (CP 5121)',
        addressSource: 'https://w20argentina.com/empresa/basualdo-carolina-del-valle-27264849638',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/basualdo-carolina-del-valle-27264849638'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/cbasualdo/',
        dni: '26.484.963',
        cuit: '27-26484963-8',
        officialEmail: 'cbasualdo@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@caritobasualdo', url: 'https://x.com/caritobasualdo' },
          instagram: { handle: '@carolinabasualdook', url: 'https://www.instagram.com/carolinabasualdook/' },
        }
      },
      {
        id: 'monica-becerra',
        name: "Mónica Becerra",
        party: "La Libertad Avanza",
        province: "San Luis",
        locationName: "San Luis, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mbecerra/',
        officialEmail: 'mbecerra@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@monicabecerraok', url: 'https://x.com/monicabecerraok' },
          instagram: { handle: '@monicabecerraok', url: 'https://www.instagram.com/monicabecerraok/' },
        }
      },
      {
        id: 'beltran-benedit',
        name: "Beltrán Benedit",
        party: "La Libertad Avanza",
        province: "Entre Ríos",
        locationName: "Entre Ríos, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/bbenedit/',
        dni: '13.182.366',
        cuit: '20-13182366-6',
        officialEmail: 'bbenedit@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@BeltranBenedit', url: 'https://x.com/BeltranBenedit' },
          instagram: { handle: '@beneditbeltran', url: 'https://www.instagram.com/beneditbeltran/' },
        }
      },
      {
        id: 'bertie-benegas-lynch',
        name: "Bertie Benegas Lynch",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/abenegasl/',
        officialEmail: 'abenegasl@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@NYGBertie', url: 'https://x.com/NYGBertie' },
          instagram: { handle: '@nygbertie', url: 'https://www.instagram.com/nygbertie/' },
        }
      },
      {
        id: 'rocio-bonacci',
        name: "Rocío Bonacci",
        party: "La Libertad Avanza",
        province: "Santa Fe",
        locationName: 'Saenz Peña 1447, Santa Fe, Argentina',
        address: 'Saenz Peña 1447, Santa Fe (CP 2132)',
        addressSource: 'https://w20argentina.com/empresa/bonacci-rocio-belen-27396592881',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/bonacci-rocio-belen-27396592881'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rbonacci/',
        dni: '39.659.288',
        cuit: '27-39659288-1',
        officialEmail: 'rbonacci@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@RocioBonacci', url: 'https://x.com/RocioBonacci' },
          instagram: { handle: '@rociobonacci', url: 'https://www.instagram.com/rociobonacci/' },
        }
      },
      {
        id: 'alejandro-bongiovanni',
        name: "Alejandro Bongiovanni",
        party: "La Libertad Avanza",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/abongiovanni/',
        dni: '30.112.399',
        cuit: '20-30112399-0',
        officialEmail: 'abongiovanni@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@alejobongio', url: 'https://x.com/alejobongio' },
          instagram: { handle: '@alejobongio2', url: 'https://www.instagram.com/alejobongio2/' },
        }
      },
      {
        id: 'gustavo-bordet',
        name: "Gustavo Bordet",
        party: "Unión por la Patria",
        province: "Entre Ríos",
        locationName: "Entre Ríos, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gbordet/',
        dni: '14.998.054',
        cuit: '20-14998054-8',
        officialEmail: 'gbordet@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@bordet', url: 'https://x.com/bordet' },
          instagram: { handle: '@bordetgustavo', url: 'https://www.instagram.com/bordetgustavo/' },
        }
      },
      {
        id: 'alejandrina-borgatta',
        name: "Alejandrina Borgatta",
        party: "Unión por la Patria",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/aborgatta/',
        dni: '30.701.749',
        cuit: '27-30701749-6',
        officialEmail: 'aborgatta@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@AleBorgattaVC', url: 'https://x.com/AleBorgattaVC' },
          instagram: { handle: '@alejandrinaborgatta', url: 'https://www.instagram.com/alejandrinaborgatta/' },
        }
      },
      {
        id: 'gabriel-bornoroni',
        name: "Gabriel Bornoroni",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: 'Caseros 670, Barrio Centro Sur, Córdoba, Argentina',
        address: 'Caseros 670, Barrio Centro Sur, Córdoba (CP 5000)',
        addressSource: 'https://w20argentina.com/empresa/bornoroni-gabriel-marcos-20266723181',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/bornoroni-gabriel-marcos-20266723181'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gbornoroni/',
        dni: '26.672.318',
        cuit: '20-26672318-1',
        officialEmail: 'gbornoroni@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@BornoroniG', url: 'https://x.com/BornoroniG' },
          instagram: { handle: '@gabrielbornoroni', url: 'https://www.instagram.com/gabrielbornoroni/' },
        }
      },
      {
        id: 'myriam-bregman',
        name: "Myriam Bregman",
        party: "PTS - Frente de Izquierda",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: 'Alsina Adolfo 1360 Piso 3 Dpto. 304, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Alsina Adolfo 1360 Piso 3 Dpto. 304, CABA (CP 1088)',
        addressSource: 'https://w20argentina.com/empresa/bregman-myriam-teresa-27226005531',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/bregman-myriam-teresa-27226005531'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mbregman/',
        dni: '22.600.553',
        cuit: '27-22600553-1',
        officialEmail: 'mbregman@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@myriambregman', url: 'https://x.com/myriambregman' },
          instagram: { handle: '@myriambregman', url: 'https://www.instagram.com/myriambregman/' },
        }
      },
      {
        id: 'adrian-brizuela',
        name: "Adrián Brizuela",
        party: "La Libertad Avanza",
        province: "Catamarca",
        locationName: "Catamarca, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/cabrizuela/',
        officialEmail: 'cabrizuela@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@Brizuela2Adrian', url: 'https://x.com/Brizuela2Adrian' },
          instagram: { handle: '@brizuelaadriaan', url: 'https://www.instagram.com/brizuelaadriaan/' },
        }
      },
      {
        id: 'eliana-bruno',
        name: "Eliana Bruno",
        party: "La Libertad Avanza",
        province: "Salta",
        locationName: 'Segundo Sombra 4 Manzana 102 - Barrio : 266 Viv, Salta, Argentina',
        address: 'Segundo Sombra 4 Manzana 102 - Barrio : 266 Viv, Salta (CP 4530)',
        addressSource: 'https://w20argentina.com/empresa/bruno-eliana-lorena-27337541599',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/bruno-eliana-lorena-27337541599'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ebruno/',
        dni: '33.754.159',
        cuit: '27-33754159-9',
        officialEmail: 'ebruno@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          instagram: { handle: '@brunoeliana.ok', url: 'https://www.instagram.com/brunoeliana.ok/' },
        }
      },
      {
        id: 'juan-fernando-brugge',
        name: "Juan Fernando Brügge",
        party: "Provincias Unidas",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jbrugge/',
        dni: '16.157.274',
        cuit: '20-16157274-9',
        officialEmail: 'jbrugge@hcdn.gob.ar',
        mandate: '2023-2027',
        officePhone: '1164751590',
        office: '906',
        socialMedia: {
          x: { handle: '@JUANFBRUGGE', url: 'https://x.com/JUANFBRUGGE' },
          instagram: { handle: '@juanfbrugge', url: 'https://www.instagram.com/juanfbrugge/' },
        }
      },
      {
        id: 'santiago-cafiero',
        name: "Santiago Cafiero",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: 'Martin y Omar 230 Piso 3 Dpto. D, San Isidro, Buenos Aires, Argentina',
        address: 'Martin y Omar 230 Piso 3 Dpto. D, San Isidro, Buenos Aires (CP 1642)',
        addressSource: 'https://w20argentina.com/empresa/cafiero-santiago-andres-20273754041',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/cafiero-santiago-andres-20273754041'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/scafiero/',
        dni: '27.375.404',
        cuit: '20-27375404-1',
        officialEmail: 'scafiero@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@SantiagoCafiero', url: 'https://x.com/SantiagoCafiero' },
          instagram: { handle: '@santiagocafiero', url: 'https://www.instagram.com/santiagocafiero/' },
        }
      },
      {
        id: 'mariano-campero',
        name: "Mariano Campero",
        party: "La Libertad Avanza",
        province: "Tucumán",
        locationName: "Tucumán, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mcampero/',
        dni: '30.117.731',
        cuit: '20-30117731-4',
        officialEmail: 'mcampero@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@mariano_campero', url: 'https://x.com/mariano_campero' },
          instagram: { handle: '@marianocamperook', url: 'https://www.instagram.com/marianocamperook/' },
        }
      },
      {
        id: 'celia-campitelli',
        name: "Celia Campitelli",
        party: "Unión por la Patria",
        province: "Santiago del Estero",
        locationName: "Santiago del Estero, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ccampitelli/',
        dni: '5.135.480',
        cuit: '27-05135480-5',
        officialEmail: 'ccampitelli@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'julieta-marisol-campo',
        name: "Julieta Marisol Campo",
        party: "Unión por la Patria",
        province: "Chaco",
        locationName: "Chaco, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jmcampo/',
        dni: '36.018.786',
        cuit: '27-36018786-7',
        officialEmail: 'jmcampo@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@_julietacampo', url: 'https://x.com/_julietacampo' },
          instagram: { handle: '@_julietacampo', url: 'https://www.instagram.com/_julietacampo/' },
        }
      },
      {
        id: 'florencia-carignano',
        name: "Florencia Carignano",
        party: "Unión por la Patria",
        province: "Santa Fe",
        locationName: 'San Geronimo 3743 Piso 3 Dpto. B - Barrio : Santa Fe, Santa Fe, Argentina',
        address: 'San Geronimo 3743 Piso 3 Dpto. B - Barrio : Santa Fe, Santa Fe (CP 3000)',
        addressSource: 'https://w20argentina.com/empresa/carignano-maria-florencia-27266811425',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/carignano-maria-florencia-27266811425'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mcarignano/',
        dni: '26.681.142',
        cuit: '27-26681142-5',
        officialEmail: 'mcarignano@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@florcarignanook', url: 'https://x.com/florcarignanook' },
          instagram: { handle: '@florcarignanook', url: 'https://www.instagram.com/florcarignanook/' },
        }
      },
      {
        id: 'alejandro-carrancio',
        name: "Alejandro Carrancio",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/acarrancio/',
        officialEmail: 'acarrancio@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@alecarrancio', url: 'https://x.com/alecarrancio' },
          instagram: { handle: '@alecarrancio', url: 'https://www.instagram.com/alecarrancio/' },
        }
      },
      {
        id: 'sergio-guillermo-casas',
        name: "Sergio Guillermo Casas",
        party: "Unión por la Patria",
        province: "La Rioja",
        locationName: "La Rioja, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/scasas/',
        dni: '17.249.337',
        cuit: '20-17249337-9',
        officialEmail: 'scasas@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@SergioGCasas', url: 'https://x.com/SergioGCasas' },
          instagram: { handle: '@SergioGCasas', url: 'https://www.instagram.com/SergioGCasas/' },
        }
      },
      {
        id: 'carlos-daniel-castagneto',
        name: "Carlos Daniel Castagneto",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: '4 2047, La Plata Sudeste Calle 50 Ambas Veredas, Buenos Aires, Argentina',
        address: '4 2047, La Plata Sudeste Calle 50 Ambas Veredas, Buenos Aires (CP 1900)',
        addressSource: 'https://w20argentina.com/empresa/castagneto-carlos-daniel-20139425163',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/castagneto-carlos-daniel-20139425163'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ccastagneto/',
        dni: '13.942.516',
        cuit: '20-13942516-3',
        officialEmail: 'ccastagneto@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@CastagnetoC', url: 'https://x.com/CastagnetoC' },
          instagram: { handle: '@carloscastagnetook', url: 'https://www.instagram.com/carloscastagnetook/' },
        }
      },
      {
        id: 'giselle-castelnuovo',
        name: "Giselle Castelnuovo",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gcastelnuovo/',
        dni: '27.767.071',
        cuit: '27-27767071-8',
        officialEmail: 'gcastelnuovo@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@GiseCastelnuovo', url: 'https://x.com/GiseCastelnuovo' },
          instagram: { handle: '@gisecastelnuovo', url: 'https://www.instagram.com/gisecastelnuovo/' },
        }
      },
      {
        id: 'jorge-chica',
        name: "Jorge Chica",
        party: "Unión por la Patria",
        province: "San Juan",
        locationName: "San Juan, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jchicam/',
        dni: '27.574.225',
        cuit: '20-27574225-3',
        officialEmail: 'jchicam@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@jorgechica80', url: 'https://x.com/jorgechica80' },
          instagram: { handle: '@jorgechica', url: 'https://www.instagram.com/jorgechica/' },
        }
      },
      {
        id: 'abel-chiconi',
        name: "Abel Chiconi",
        party: "La Libertad Avanza",
        province: "San Juan",
        locationName: "San Juan, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rchiconi/',
        dni: '32.033.681',
        cuit: '23-32033681-3',
        officialEmail: 'rchiconi@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@abelchiconiok', url: 'https://x.com/abelchiconiok' },
          instagram: { handle: '@abelchiconi.ok', url: 'https://www.instagram.com/abelchiconi.ok/' },
        }
      },
      {
        id: 'carlos-cisneros',
        name: "Carlos Cisneros",
        party: "Unión por la Patria",
        province: "Tucumán",
        locationName: "Tucumán, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ccisneros/',
        dni: '16.216.404',
        cuit: '20-16216404-0',
        officialEmail: 'ccisneros@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'mariela-coletta',
        name: "Mariela Coletta",
        party: "Provincias Unidas",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mgcoletta/',
        dni: '34.512.539',
        cuit: '27-34512539-1',
        officialEmail: 'mgcoletta@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@marielacoletta', url: 'https://x.com/marielacoletta' },
          instagram: { handle: '@marielacoletta', url: 'https://www.instagram.com/marielacoletta/' },
        }
      },
      {
        id: 'facundo-correa-llano',
        name: "Facundo Correa Llano",
        party: "La Libertad Avanza",
        province: "Mendoza",
        locationName: 'Viamonte 3889, Lujan De Cuyo, Mendoza, Argentina',
        address: 'Viamonte 3889, Lujan De Cuyo, Mendoza (CP 5507)',
        addressSource: 'https://w20argentina.com/empresa/correa-llano-facundo-20268386131',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/correa-llano-facundo-20268386131'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/fcorreal/',
        dni: '26.838.613',
        cuit: '20-26838613-1',
        officialEmail: 'fcorreal@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'lucia-campora',
        name: "Lucía Cámpora",
        party: "Unión por la Patria",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lcampora/',
        officialEmail: 'lcampora@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@lucampora', url: 'https://x.com/lucampora' },
          instagram: { handle: '@lu_campora_', url: 'https://www.instagram.com/lu_campora_/' },
        }
      },
      {
        id: 'ricardo-daives',
        name: "Ricardo Daives",
        party: "Unión por la Patria",
        province: "Santiago del Estero",
        locationName: "Santiago del Estero, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rdaives/',
        dni: '8.047.684',
        cuit: '20-08047684-2',
        officialEmail: 'rdaives@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'romina-del-pla',
        name: "Romina Del Plá",
        party: "Partido Obrero - FIT-U",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rdelpla/',
        dni: '22.668.056',
        cuit: '27-22668056-5',
        officialEmail: 'rdelpla@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@rominadelpla', url: 'https://x.com/rominadelpla' },
          instagram: { handle: '@rominadelpla', url: 'https://www.instagram.com/rominadelpla/' },
        }
      },
      {
        id: 'romina-diez',
        name: "Romina Diez",
        party: "La Libertad Avanza",
        province: "Santa Fe",
        locationName: 'San Martin 370 Piso 5 Dpto. 3, Santa Fe, Argentina',
        address: 'San Martin 370 Piso 5 Dpto. 3, Santa Fe (CP 2000)',
        addressSource: 'https://w20argentina.com/empresa/diez-villagra-romina-andrea-27280582536',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/diez-villagra-romina-andrea-27280582536'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rdiezv/',
        dni: '28.058.253',
        cuit: '27-28058253-6',
        officialEmail: 'rdiezv@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'sergio-dolce',
        name: "Sergio Dolce",
        party: "Unión por la Patria",
        province: "Chaco",
        locationName: "Chaco, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/sdolce/',
        officialEmail: 'sdolce@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'fernanda-diaz',
        name: "Fernanda Díaz",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/fdiaz/',
        dni: '34.991.029',
        cuit: '27-34991029-8',
        officialEmail: 'fdiaz@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'nicolas-emma',
        name: "Nicolás Emma",
        party: "La Libertad Avanza",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/nemma/',
        dni: '29.151.501',
        cuit: '20-29151501-1',
        officialEmail: 'nemma@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          instagram: { handle: '@nicolasemmaok', url: 'https://www.instagram.com/nicolasemmaok/' },
        }
      },
      {
        id: 'gabriela-beatriz-estevez',
        name: "Gabriela Beatriz Estévez",
        party: "Unión por la Patria",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gestevez/',
        dni: '26.122.523',
        cuit: '27-26122523-4',
        officialEmail: 'gestevez@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@gabiestevezok', url: 'https://x.com/gabiestevezok' },
          instagram: { handle: '@gabiestevezok', url: 'https://www.instagram.com/gabiestevezok/' },
        }
      },
      {
        id: 'alejandro-fargosi',
        name: "Alejandro Fargosi",
        party: "La Libertad Avanza",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/afargosi/',
        dni: '11.371.750',
        cuit: '20-11371750-6',
        officialEmail: 'afargosi@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@fargosi', url: 'https://x.com/fargosi' },
          instagram: { handle: '@alejandrofargosi', url: 'https://www.instagram.com/alejandrofargosi/' },
        }
      },
      {
        id: 'pablo-farias',
        name: "Pablo Farías",
        party: "Provincias Unidas",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/pfarias/',
        dni: '21.003.185',
        cuit: '20-21003185-6',
        officialEmail: 'pfarias@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'jorge-fernandez',
        name: "Jorge Fernández",
        party: "Primero San Luis",
        province: "San Luis",
        locationName: "San Luis, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jofernandez/',
        officialEmail: 'jofernandez@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'maximiliano-ferraro',
        name: "Maximiliano Ferraro",
        party: "Coalición Cívica",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: 'Yrigoyen Hipolito 3150 Piso PB Dpto. 8, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Yrigoyen Hipolito 3150 Piso PB Dpto. 8, CABA (CP 1207)',
        addressSource: 'https://w20argentina.com/empresa/ferraro-maximiliano-20250442433',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/ferraro-maximiliano-20250442433'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mferraro/',
        dni: '25.044.243',
        cuit: '20-25044243-3',
        officialEmail: 'mferraro@hcdn.gob.ar',
        mandate: '2023-2027',
        officePhone: '1160757100',
        office: 'Avenida Rivadavia 1841, Anexo A, Piso 9, Despacho 945 C.P: C1089',
        socialMedia: {
          x: { handle: '@Maxiferraro', url: 'https://x.com/Maxiferraro' },
          instagram: { handle: '@maxiferraro', url: 'https://www.instagram.com/maxiferraro/' },
        }
      },
      {
        id: 'alida-ferreyra',
        name: "Alida Ferreyra",
        party: "La Libertad Avanza",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: 'Talcahuano 1071 Piso 1 Dpto. H - Barrio : Recoleta, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Talcahuano 1071 Piso 1 Dpto. H - Barrio : Recoleta, CABA (CP 1013)',
        addressSource: 'https://w20argentina.com/empresa/ferreyra-alida-monica-27262351195',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/ferreyra-alida-monica-27262351195'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/aferreyra/',
        dni: '26.235.119',
        cuit: '27-26235119-5',
        officialEmail: 'aferreyra@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'abelardo-ferran',
        name: "Abelardo Ferrán",
        party: "Unión por la Patria",
        province: "La Pampa",
        locationName: "La Pampa, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/aferran/',
        dni: '13.367.758',
        cuit: '20-13367758-6',
        officialEmail: 'aferran@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'sergio-figliuolo',
        name: "Sergio Figliuolo",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/sfigliuolo/',
        officialEmail: 'sfigliuolo@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'maria-gabriela-flores',
        name: "Maria Gabriela Flores",
        party: "La Libertad Avanza",
        province: "Salta",
        locationName: "Salta, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mflores/',
        officialEmail: 'mflores@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'monica-frade',
        name: "Mónica Frade",
        party: "Coalición Cívica",
        province: "Buenos Aires",
        locationName: 'Bron 559 Piso 1 Dpto. A, Quilmes, Buenos Aires, Argentina',
        address: 'Bron 559 Piso 1 Dpto. A, Quilmes, Buenos Aires (CP 1878)',
        addressSource: 'https://w20argentina.com/empresa/frade-monica-edith-23127596824',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/frade-monica-edith-23127596824'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mfrade/',
        dni: '12.759.682',
        cuit: '23-12759682-4',
        officialEmail: 'mfrade@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@monicafradeok', url: 'https://x.com/monicafradeok' },
          instagram: { handle: '@MonicaFradeok', url: 'https://www.instagram.com/MonicaFradeok/' },
        }
      },
      {
        id: 'andrea-freites',
        name: "Andrea Freites",
        party: "Unión por la Patria",
        province: "Tierra del Fuego",
        locationName: "Tierra del Fuego, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/afreites/',
        dni: '25.632.568',
        cuit: '27-25632568-9',
        officialEmail: 'afreites@hcdn.gob.ar',
        mandate: '2023-2027',
        officePhone: '1160753303',
        office: 'Av. Rivadavia 184, Anexo A. Piso 13, Oficina 1303',
        socialMedia: {
          instagram: { handle: '@andreafreitestdf', url: 'https://www.instagram.com/andreafreitestdf/' },
        }
      },
      {
        id: 'maira-frias',
        name: "Maira Frias",
        party: "La Libertad Avanza",
        province: "Chubut",
        locationName: 'La Nueva Provincia 2263, Chubut, Argentina',
        address: 'La Nueva Provincia 2263, Chubut (CP 9000)',
        addressSource: 'https://w20argentina.com/empresa/frias-maira-raquel-27330723578',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/frias-maira-raquel-27330723578'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mrfrias/',
        dni: '33.072.357',
        cuit: '27-33072357-8',
        officialEmail: 'mrfrias@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'emir-felix',
        name: "Emir Félix",
        party: "Unión por la Patria",
        province: "Mendoza",
        locationName: "Mendoza, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/efelix/',
        dni: '16.836.837',
        cuit: '20-16836837-3',
        officialEmail: 'efelix@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'maria-virginia-gallardo',
        name: "María Virginia Gallardo",
        party: "La Libertad Avanza",
        province: "Corrientes",
        locationName: "Corrientes, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mgallardo/',
        officialEmail: 'mgallardo@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'sebastian-galmarini',
        name: "Sebastián Galmarini",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: 'Doctor Wells 3183, Beccar, Buenos Aires, Argentina',
        address: 'Doctor Wells 3183, Beccar, Buenos Aires (CP 1643)',
        addressSource: 'https://w20argentina.com/empresa/galmarini-sebastian-20266508329',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/galmarini-sebastian-20266508329'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/sgalmarini/',
        dni: '26.650.832',
        cuit: '20-26650832-9',
        officialEmail: 'sgalmarini@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'ignacio-garcia-aresca',
        name: "Ignacio García Aresca",
        party: "Provincias Unidas",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/igarciaa/',
        dni: '20.873.633',
        cuit: '20-20873633-8',
        officialEmail: 'igarciaa@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'carlos-garcia',
        name: "Carlos García",
        party: "La Libertad Avanza",
        province: "Chaco",
        locationName: "Chaco, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/cadgarcia/',
        officialEmail: 'cadgarcia@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'maria-teresa-garcia',
        name: "María Teresa García",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mtgarcia/',
        dni: '12.285.771',
        cuit: '27-12285771-4',
        officialEmail: 'mtgarcia@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'alvaro-garcia',
        name: "Álvaro García",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/algarcia/',
        officialEmail: 'algarcia@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'juan-carlos-giordano',
        name: "Juan Carlos Giordano",
        party: "Izquierda Socialista - FIT-U",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jgiordano/',
        dni: '14.907.638',
        cuit: '20-14907638-8',
        officialEmail: 'jgiordano@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'silvana-giudici',
        name: "Silvana Giudici",
        party: "La Libertad Avanza",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/sgiudici/',
        dni: '14.540.890',
        cuit: '27-14540890-9',
        officialEmail: 'sgiudici@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'diego-a-giuliano',
        name: "Diego A. Giuliano",
        party: "Unión por la Patria",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/dgiuliano/',
        dni: '17.288.418',
        cuit: '20-17288418-1',
        officialEmail: 'dgiuliano@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@DiegoGiuliano', url: 'https://x.com/DiegoGiuliano' },
          instagram: { handle: '@diego.giuliano', url: 'https://www.instagram.com/diego.giuliano/' },
        }
      },
      {
        id: 'jose-glinski',
        name: "José Glinski",
        party: "Unión por la Patria",
        province: "Chubut",
        locationName: "Chubut, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jglinski/',
        dni: '28.075.988',
        cuit: '20-28075988-1',
        officialEmail: 'jglinski@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'rosario-goitia',
        name: "Rosario Goitia",
        party: "La Libertad Avanza",
        province: "Chaco",
        locationName: "Chaco, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mgoitia/',
        officialEmail: 'mgoitia@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'jose-gomez',
        name: "José Gomez",
        party: "Unión por la Patria",
        province: "Santiago del Estero",
        locationName: "Santiago del Estero, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jegomez/',
        dni: '16.191.207',
        cuit: '20-16191207-8',
        officialEmail: 'jegomez@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'alfredo-gonzales',
        name: "Alfredo Gonzales",
        party: "La Libertad Avanza",
        province: "Jujuy",
        locationName: "Jujuy, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/agonzales/',
        officialEmail: 'agonzales@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'maria-luisa-gonzalez-estevarena',
        name: "María Luisa González Estevarena",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mgestevarena/',
        officialEmail: 'mgestevarena@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'juan-grabois',
        name: "Juan Grabois",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jgrabois/',
        dni: '30.334.765',
        cuit: '20-30334765-9',
        officialEmail: 'jgrabois@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@JuanGrabois', url: 'https://x.com/JuanGrabois' },
          instagram: { handle: '@juangrabois', url: 'https://www.instagram.com/juangrabois/' },
        }
      },
      {
        id: 'maura-gruber',
        name: "Maura Gruber",
        party: "La Libertad Avanza",
        province: "Misiones",
        locationName: "Misiones, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mgruber/',
        dni: '30.457.677',
        cuit: '23-30457677-4',
        officialEmail: 'mgruber@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'carlos-gutierrez',
        name: "Carlos Gutiérrez",
        party: "Provincias Unidas",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/cgutierrez/',
        dni: '10.821.747',
        cuit: '20-10821747-3',
        officialEmail: 'cgutierrez@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@Dip_Gutierrez', url: 'https://x.com/Dip_Gutierrez' },
        }
      },
      {
        id: 'ramiro-gutierrez',
        name: "Ramiro Gutiérrez",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/crgutierrez/',
        dni: '17.888.287',
        cuit: '20-17888287-3',
        officialEmail: 'crgutierrez@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@Ramir_Gutierrez', url: 'https://x.com/Ramir_Gutierrez' },
          instagram: { handle: '@ramirogutierrezok', url: 'https://www.instagram.com/ramirogutierrezok/' },
        }
      },
      {
        id: 'jairo-guzman',
        name: "Jairo Guzmán",
        party: "La Libertad Avanza",
        province: "Santa Cruz",
        locationName: "Santa Cruz, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jguzman/',
        dni: '30.355.968',
        cuit: '20-30355968-0',
        officialEmail: 'jguzman@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@Jairo_Henoch', url: 'https://x.com/Jairo_Henoch' },
          instagram: { handle: '@jairohenoch', url: 'https://www.instagram.com/jairohenoch/' },
        }
      },
      {
        id: 'raul-hadad',
        name: "Raúl Hadad",
        party: "Unión por la Patria",
        province: "Corrientes",
        locationName: "Corrientes, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rhadad/',
        officialEmail: 'rhadad@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          instagram: { handle: '@rulo_hadad', url: 'https://www.instagram.com/rulo_hadad/' },
        }
      },
      {
        id: 'itai-hagman',
        name: "Itai Hagman",
        party: "Unión por la Patria",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ihagman/',
        dni: '19.010.320',
        cuit: '20-19010320-0',
        officialEmail: 'ihagman@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@ItaiHagman', url: 'https://x.com/ItaiHagman' },
          instagram: { handle: '@itai_hagman', url: 'https://www.instagram.com/itai_hagman/' },
        }
      },
      {
        id: 'diego-hartfield',
        name: "Diego Hartfield",
        party: "La Libertad Avanza",
        province: "Misiones",
        locationName: "Misiones, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/dhartfield/',
        dni: '28.466.344',
        cuit: '20-28466344-7',
        officialEmail: 'dhartfield@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@Diego_Hartfield', url: 'https://x.com/Diego_Hartfield' },
          instagram: { handle: '@diego_hartfield', url: 'https://www.instagram.com/diego_hartfield/' },
        }
      },
      {
        id: 'oscar-a-herrera-ahuad',
        name: "Oscar A. Herrera Ahuad",
        party: "Argentina Federal",
        province: "Misiones",
        locationName: "Misiones, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/oherreraa/',
        dni: '22.352.251',
        cuit: '20-22352251-4',
        officialEmail: 'oherreraa@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@herrerayflia', url: 'https://x.com/herrerayflia' },
        }
      },
      {
        id: 'patricia-holzman',
        name: "Patricia Holzman",
        party: "La Libertad Avanza",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: 'Elcano AV. 3525 Piso 1 Dpto. D, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Elcano AV. 3525 Piso 1 Dpto. D, CABA (CP 1426)',
        addressSource: 'https://w20argentina.com/empresa/holzman-patricia-noemi-27176050034',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/holzman-patricia-noemi-27176050034'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/pholzman/',
        dni: '17.605.003',
        cuit: '27-17605003-4',
        officialEmail: 'pholzman@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'gerardo-huesen',
        name: "Gerardo Huesen",
        party: "La Libertad Avanza",
        province: "Tucumán",
        locationName: "Tucumán, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mhuesen/',
        dni: '27.961.141',
        cuit: '20-27961141-2',
        officialEmail: 'mhuesen@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@gerardohuesenok', url: 'https://x.com/gerardohuesenok' },
        }
      },
      {
        id: 'gladys-humenuk',
        name: "Gladys Humenuk",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ghumenuk/',
        dni: '23.138.577',
        cuit: '27-23138577-6',
        officialEmail: 'ghumenuk@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'ana-maria-ianni',
        name: "Ana María Ianni",
        party: "Unión por la Patria",
        province: "Santa Cruz",
        locationName: "Santa Cruz, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/aianni/',
        dni: '20.964.890',
        cuit: '27-20964890-9',
        officialEmail: 'aianni@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@anamariaianni', url: 'https://x.com/anamariaianni' },
          instagram: { handle: '@anamariaianniok', url: 'https://www.instagram.com/anamariaianniok/' },
        }
      },
      {
        id: 'maria-cecilia-ibanez',
        name: "María Cecilia Ibañez",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: 'Chacabuco 360 Piso 5 Dpto. A, Barrio Centro Sur, Córdoba, Argentina',
        address: 'Chacabuco 360 Piso 5 Dpto. A, Barrio Centro Sur, Córdoba (CP 5000)',
        addressSource: 'https://w20argentina.com/empresa/ibanez-maria-cecilia-23171578434',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/ibanez-maria-cecilia-23171578434'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mibanez/',
        dni: '17.157.843',
        cuit: '23-17157843-4',
        officialEmail: 'mibanez@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@MidCecilia', url: 'https://x.com/MidCecilia' },
        }
      },
      {
        id: 'pablo-juliano',
        name: "Pablo Juliano",
        party: "Provincias Unidas",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/pjuliano/',
        dni: '33.799.758',
        cuit: '23-33799758-9',
        officialEmail: 'pjuliano@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@PabloJulianoLP', url: 'https://x.com/PabloJulianoLP' },
          instagram: { handle: '@pablojulianolp', url: 'https://www.instagram.com/pablojulianolp/' },
        }
      },
      {
        id: 'maximo-carlos-kirchner',
        name: "Máximo Carlos Kirchner",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: 'Mascarello 441, Rio Gallegos, Santa Cruz, Argentina',
        address: 'Mascarello 441, Rio Gallegos, Santa Cruz (CP 9400)',
        addressSource: 'https://w20argentina.com/empresa/kirchner-maximo-carlos-20258693109',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/kirchner-maximo-carlos-20258693109'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mkirchner/',
        dni: '25.869.310',
        cuit: '20-25869310-9',
        officialEmail: 'mkirchner@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@mkirchner19', url: 'https://x.com/mkirchner19' },
        }
      },
      {
        id: 'moira-lanesan-sancho',
        name: "Moira Lanesan Sancho",
        party: "Unión por la Patria",
        province: "Santa Cruz",
        locationName: "Santa Cruz, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mlanesan/',
        officialEmail: 'mlanesan@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@LanesanMoira', url: 'https://x.com/LanesanMoira' },
        }
      },
      {
        id: 'andres-ariel-laumann',
        name: "Andrés Ariel Laumann",
        party: "La Libertad Avanza",
        province: "Entre Ríos",
        locationName: "Entre Ríos, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/alaumann/',
        officialEmail: 'alaumann@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@lamaquinavialok', url: 'https://x.com/lamaquinavialok' },
          instagram: { handle: '@andres_laum', url: 'https://www.instagram.com/andres_laum/' },
        }
      },
      {
        id: 'aldo-leiva',
        name: "Aldo Leiva",
        party: "Unión por la Patria",
        province: "Chaco",
        locationName: "Chaco, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/aleiva/',
        dni: '16.503.039',
        cuit: '20-16503039-8',
        officialEmail: 'aleiva@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@AldoAdolfoLeiva', url: 'https://x.com/AldoAdolfoLeiva' },
        }
      },
      {
        id: 'lilia-lemoine',
        name: "Lilia Lemoine",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: 'Llavallol 1755 Piso PB Dpto. B, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Llavallol 1755 Piso PB Dpto. B, CABA (CP 1407)',
        addressSource: 'https://w20argentina.com/empresa/bolukalo-lemoine-lilia-adela-27282985263',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/bolukalo-lemoine-lilia-adela-27282985263'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lbolukalol/',
        officialEmail: 'lbolukalol@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@lilialemoine', url: 'https://x.com/lilialemoine' },
          instagram: { handle: '@lilialemoine', url: 'https://www.instagram.com/lilialemoine/' },
        },
        cuit: '27-28298526-3',
        dni: '28.298.526'
      },
      {
        id: 'andres-leone',
        name: "Andrés Leone",
        party: "La Libertad Avanza",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/aleone/',
        dni: '21.731.867',
        cuit: '20-21731867-0',
        officialEmail: 'aleone@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@leoneandres', url: 'https://x.com/leoneandres' },
          instagram: { handle: '@andresleoneok', url: 'https://www.instagram.com/andresleoneok/' },
        }
      },
      {
        id: 'mercedes-llano',
        name: "Mercedes Llano",
        party: "La Libertad Avanza",
        province: "Mendoza",
        locationName: 'Alvarez Thomas 333 Dpto. 3, Godoy Cruz, Mendoza, Argentina',
        address: 'Alvarez Thomas 333 Dpto. 3, Godoy Cruz, Mendoza (CP 5501)',
        addressSource: 'https://w20argentina.com/empresa/llano-maria-mercedes-27267928539',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/llano-maria-mercedes-27267928539'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mllano/',
        dni: '26.792.853',
        cuit: '27-26792853-9',
        officialEmail: 'mllano@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@LlanoMechi', url: 'https://x.com/LlanoMechi' },
          instagram: { handle: '@llanomercedes', url: 'https://www.instagram.com/llanomercedes/' },
        }
      },
      {
        id: 'enrique-lluch',
        name: "Enrique Lluch",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/elluch/',
        dni: '29.662.959',
        cuit: '20-29662959-7',
        officialEmail: 'elluch@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'johanna-sabrina-longo',
        name: "Johanna Sabrina Longo",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: 'Miistro Brin 3613, Buenos Aires, Argentina',
        address: 'Miistro Brin 3613, Buenos Aires (CP 1824)',
        addressSource: 'https://w20argentina.com/empresa/longo-johanna-sabrina-27296966075',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/longo-johanna-sabrina-27296966075'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jslongo/',
        dni: '29.696.607',
        cuit: '27-29696607-5',
        officialEmail: 'jslongo@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@joha_longo', url: 'https://x.com/joha_longo' },
        }
      },
      {
        id: 'martin-lousteau',
        name: "Martín Lousteau",
        party: "Provincias Unidas",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mlousteau/',
        dni: '21.954.012',
        cuit: '20-21954012-5',
        officialEmail: 'mlousteau@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@GugaLusto', url: 'https://x.com/GugaLusto' },
          instagram: { handle: '@gugalusto', url: 'https://www.instagram.com/gugalusto/' },
        }
      },
      {
        id: 'juan-pablo-luque',
        name: "Juan Pablo Luque",
        party: "Unión por la Patria",
        province: "Chubut",
        locationName: "Chubut, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jluque/',
        officialEmail: 'jluque@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@luquejuanpablo', url: 'https://x.com/luquejuanpablo' },
        }
      },
      {
        id: 'cecilia-lopez-pasquali',
        name: "Cecilia López Pasquali",
        party: "Unión por la Patria",
        province: "Santiago del Estero",
        locationName: "Santiago del Estero, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/clopezp/',
        officialEmail: 'clopezp@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'jimena-lopez',
        name: "Jimena López",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mjlopez/',
        dni: '27.708.356',
        cuit: '27-27708356-1',
        officialEmail: 'mjlopez@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@MaJimenaLopezOk', url: 'https://x.com/MaJimenaLopezOk' },
        }
      },
      {
        id: 'lorena-macyszyn',
        name: "Lorena Macyszyn",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: 'Don Bosco 1371, Buenos Aires, Argentina',
        address: 'Don Bosco 1371, Buenos Aires (CP 1642)',
        addressSource: 'https://w20argentina.com/empresa/macyszyn-maria-lorena-27267660633',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/macyszyn-maria-lorena-27267660633'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mmacyszyn/',
        dni: '26.766.063',
        cuit: '27-26766063-3',
        officialEmail: 'mmacyszyn@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@LorenaMacyszyn', url: 'https://x.com/LorenaMacyszyn' },
          instagram: { handle: '@lorena.macyszyn', url: 'https://www.instagram.com/lorena.macyszyn/' },
        }
      },
      {
        id: 'marcelo-mango',
        name: "Marcelo Mango",
        party: "Unión por la Patria",
        province: "Río Negro",
        locationName: "Río Negro, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/hmango/',
        dni: '17.388.217',
        cuit: '20-17388217-4',
        officialEmail: 'hmango@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@MangoLegislador', url: 'https://x.com/MangoLegislador' },
        }
      },
      {
        id: 'mario-manrique',
        name: "Mario Manrique",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mrmanrique/',
        dni: '14.675.706',
        cuit: '20-14675706-6',
        officialEmail: 'mrmanrique@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'marianela-marclay',
        name: "Marianela Marclay",
        party: "Unión por la Patria",
        province: "Entre Ríos",
        locationName: "Entre Ríos, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lmarclay/',
        dni: '30.549.910',
        cuit: '27-30549910-8',
        officialEmail: 'lmarclay@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@MarianMarclay', url: 'https://x.com/MarianMarclay' },
          instagram: { handle: '@marianelamarclay_', url: 'https://www.instagram.com/marianelamarclay_/' },
        }
      },
      {
        id: 'juan-marino',
        name: "Juan Marino",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jmarino/',
        dni: '33.886.824',
        cuit: '20-33886824-4',
        officialEmail: 'jmarino@hcdn.gob.ar',
        mandate: '2023-2027',
        officePhone: '11 3143-5434',
        office: 'Rivadavia 1841 - Anexo "A"',
        socialMedia: {
          x: { handle: '@juanmarinotpr', url: 'https://x.com/juanmarinotpr' },
          instagram: { handle: '@juanmarinotpr1', url: 'https://www.instagram.com/juanmarinotpr1/' },
        }
      },
      {
        id: 'german-pedro-martinez',
        name: "Germán Pedro Martínez",
        party: "Unión por la Patria",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gpmartinez/',
        dni: '24.239.575',
        cuit: '20-24239575-2',
        officialEmail: 'gpmartinez@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@gerpmartinez', url: 'https://x.com/gerpmartinez' },
          instagram: { handle: '@germanpmartinez', url: 'https://www.instagram.com/germanpmartinez/' },
        }
      },
      {
        id: 'alvaro-martinez',
        name: "Álvaro Martínez",
        party: "La Libertad Avanza",
        province: "Mendoza",
        locationName: "Mendoza, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/amartinez/',
        dni: '32.627.628',
        cuit: '20-32627628-7',
        officialEmail: 'amartinez@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@lMartinezAlvaro', url: 'https://x.com/lMartinezAlvaro' },
        }
      },
      {
        id: 'varinia-lis-marin',
        name: "Varinia Lis Marín",
        party: "Unión por la Patria",
        province: "La Pampa",
        locationName: 'Juan XXIII 266, Santa Rosa, La Pampa, Argentina',
        address: 'Juan XXIII 266, Santa Rosa, La Pampa (CP 6300)',
        addressSource: 'https://w20argentina.com/empresa/marin-varinia-lis-27201070746',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/marin-varinia-lis-27201070746'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/vmarin/',
        dni: '20.107.074',
        cuit: '27-20107074-6',
        officialEmail: 'vmarin@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@variniamarin', url: 'https://x.com/variniamarin' },
        }
      },
      {
        id: 'nicolas-massot',
        name: "Nicolás Massot",
        party: "Encuentro Federal",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/nmassot/',
        dni: '31.089.595',
        cuit: '20-31089595-5',
        officialEmail: 'nmassot@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@Nicolas_Massot', url: 'https://x.com/Nicolas_Massot' },
          instagram: { handle: '@nico.massot', url: 'https://www.instagram.com/nico.massot/' },
        }
      },
      {
        id: 'martin-matzkin',
        name: "Martín Matzkin",
        party: "La Libertad Avanza",
        province: "La Pampa",
        locationName: '25 de Mayo 26, Santa Rosa, La Pampa, Argentina',
        address: '25 de Mayo 26, Santa Rosa, La Pampa (CP 6300)',
        addressSource: 'https://w20argentina.com/empresa/matzkin-martin-20237375263',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/matzkin-martin-20237375263'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mmatzkin/',
        dni: '23.737.526',
        cuit: '20-23737526-3',
        officialEmail: 'mmatzkin@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@MartinMatzkinLP', url: 'https://x.com/MartinMatzkinLP' },
          instagram: { handle: '@martin.matzkin', url: 'https://www.instagram.com/martin.matzkin/' },
        }
      },
      {
        id: 'nicolas-mayoraz',
        name: "Nicolás Mayoraz",
        party: "La Libertad Avanza",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/nmayoraz/',
        dni: '20.298.021',
        cuit: '20-20298021-0',
        officialEmail: 'nmayoraz@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@NicolasMayoraz', url: 'https://x.com/NicolasMayoraz' },
        }
      },
      {
        id: 'martin-menem',
        name: "Martín Menem",
        party: "La Libertad Avanza",
        province: "La Rioja",
        locationName: 'Rivadavia 358 - Barrio : Centro, La Rioja, Argentina',
        address: 'Rivadavia 358 - Barrio : Centro, La Rioja (CP 5300)',
        addressSource: 'https://w20argentina.com/empresa/menem-martin-alexis-20245792906',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/menem-martin-alexis-20245792906'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mmenem/',
        dni: '24.579.290',
        cuit: '20-24579290-6',
        officialEmail: 'mmenem@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@MenemMartin', url: 'https://x.com/MenemMartin' },
          instagram: { handle: '@martinmenemok', url: 'https://www.instagram.com/martinmenemok/' },
        }
      },
      {
        id: 'julieta-metral-asensio',
        name: "Julieta Metral Asensio",
        party: "La Libertad Avanza",
        province: "Mendoza",
        locationName: "Mendoza, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mmetrala/',
        dni: '34.746.633',
        cuit: '27-34746633-1',
        officialEmail: 'mmetrala@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@JulietaMetral', url: 'https://x.com/JulietaMetral' },
        }
      },
      {
        id: 'guillermo-michel',
        name: "Guillermo Michel",
        party: "Unión por la Patria",
        province: "Entre Ríos",
        locationName: 'Pringles 778, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Pringles 778, CABA (CP 1183)',
        addressSource: 'https://w20argentina.com/empresa/michel-guillermo-20256611210',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/michel-guillermo-20256611210'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gmichel/',
        dni: '25.661.121',
        cuit: '20-25661121-0',
        officialEmail: 'gmichel@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@MichelGuilleOK', url: 'https://x.com/MichelGuilleOK' },
        }
      },
      {
        id: 'fernanda-mino',
        name: "Fernanda Miño",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rmino/',
        dni: '24.100.107',
        cuit: '27-24100107-0',
        officialEmail: 'rmino@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@ferminook', url: 'https://x.com/ferminook' },
          instagram: { handle: '@mino.fernanda', url: 'https://www.instagram.com/mino.fernanda/' },
        }
      },
      {
        id: 'juan-carlos-molina',
        name: "Juan Carlos Molina",
        party: "Unión por la Patria",
        province: "Santa Cruz",
        locationName: "Santa Cruz, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jucmolina/',
        officialEmail: 'jucmolina@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@juanKa_molina', url: 'https://x.com/juanKa_molina' },
        }
      },
      {
        id: 'soledad-molinuevo',
        name: "Soledad Molinuevo",
        party: "La Libertad Avanza",
        province: "Tucumán",
        locationName: 'Muñecas 1216, Tucumán, Argentina',
        address: 'Muñecas 1216, Tucumán (CP 4000)',
        addressSource: 'https://w20argentina.com/empresa/molinuevo-maria-soledad-27225573641',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/molinuevo-maria-soledad-27225573641'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mmolinuevo/',
        dni: '22.557.364',
        cuit: '27-22557364-1',
        officialEmail: 'mmolinuevo@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@SoleMolinuevo', url: 'https://x.com/SoleMolinuevo' },
          instagram: { handle: '@soledadmolinuevo', url: 'https://www.instagram.com/soledadmolinuevo/' },
        }
      },
      {
        id: 'matias-molle',
        name: "Matías Molle",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mmolle/',
        dni: '25.348.547',
        cuit: '20-25348547-8',
        officialEmail: 'mmolle@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@matimolle', url: 'https://x.com/matimolle' },
        }
      },
      {
        id: 'soledad-mondaca',
        name: "Soledad Mondaca",
        party: "La Libertad Avanza",
        province: "Neuquén",
        locationName: 'Maipo 1179 - Barrio : Meopp, Neuquén, Argentina',
        address: 'Maipo 1179 - Barrio : Meopp, Neuquén (CP 8319)',
        addressSource: 'https://w20argentina.com/empresa/mondaca-margarita-soledad-27340841366',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/mondaca-margarita-soledad-27340841366'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mmondaca/',
        dni: '34.084.136',
        cuit: '27-34084136-6',
        officialEmail: 'mmondaca@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@SoleMondacaDip', url: 'https://x.com/SoleMondacaDip' },
        }
      },
      {
        id: 'fernando-monguillot',
        name: "Fernando Monguillot",
        party: "Elijo Catamarca",
        province: "Catamarca",
        locationName: "Catamarca, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/fmonguillot/',
        officialEmail: 'fmonguillot@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          instagram: { handle: '@fermonguillot', url: 'https://www.instagram.com/fermonguillot/' },
        }
      },
      {
        id: 'guillermo-montenegro',
        name: "Guillermo Montenegro",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gmontenegro/',
        officialEmail: 'gmontenegro@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@gmontenegro_ok', url: 'https://x.com/gmontenegro_ok' },
          instagram: { handle: '@montenegrogm', url: 'https://www.instagram.com/montenegrogm/' },
        }
      },
      {
        id: 'juan-pablo-montenegro',
        name: "Juan Pablo Montenegro",
        party: "La Libertad Avanza",
        province: "Santa Fe",
        locationName: 'Suipacha 605, Santa Fe, Argentina',
        address: 'Suipacha 605, Santa Fe (CP 2142)',
        addressSource: 'https://w20argentina.com/empresa/montenegro-juan-pablo-20266676531',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/montenegro-juan-pablo-20266676531'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jpmontenegro/',
        dni: '26.667.653',
        cuit: '20-26667653-1',
        officialEmail: 'jpmontenegro@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'roxana-monzon',
        name: "Roxana Monzón",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: 'Lote Agricola 282, Misiones, Argentina',
        address: 'Lote Agricola 282, Misiones (CP 3350)',
        addressSource: 'https://w20argentina.com/empresa/monzon-roxana-elizabeth-27239191288',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/monzon-roxana-elizabeth-27239191288'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rmonzon/',
        dni: '23.919.128',
        cuit: '27-23919128-8',
        officialEmail: 'rmonzon@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@Roxy_Monzon', url: 'https://x.com/Roxy_Monzon' },
          instagram: { handle: '@roxanamonzon', url: 'https://www.instagram.com/roxanamonzon/' },
        }
      },
      {
        id: 'francisco-morchio',
        name: "Francisco Morchio",
        party: "La Libertad Avanza",
        province: "Entre Ríos",
        locationName: 'Estacion Lazo 0, Lazo, Entre Ríos, Argentina',
        address: 'Estacion Lazo 0, Lazo, Entre Ríos (CP 2841)',
        addressSource: 'https://w20argentina.com/empresa/morchio-francisco-alejandro-20245607068',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/morchio-francisco-alejandro-20245607068'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/fmorchio/',
        dni: '24.560.706',
        cuit: '20-24560706-8',
        officialEmail: 'fmorchio@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@FranMorchio', url: 'https://x.com/FranMorchio' },
          instagram: { handle: '@morchiofrancisco', url: 'https://www.instagram.com/morchiofrancisco/' },
        }
      },
      {
        id: 'cecilia-moreau',
        name: "Cecilia Moreau",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/cmoreau/',
        dni: '25.615.152',
        cuit: '27-25615152-4',
        officialEmail: 'cmoreau@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@ceciliamoreau', url: 'https://x.com/ceciliamoreau' },
          instagram: { handle: '@ceciliamoreau82', url: 'https://www.instagram.com/ceciliamoreau82/' },
        }
      },
      {
        id: 'julio-moreno-ovalle',
        name: "Julio Moreno Ovalle",
        party: "La Libertad Avanza",
        province: "Salta",
        locationName: "Salta, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jumoreno/',
        officialEmail: 'jumoreno@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@jamosalta', url: 'https://x.com/jamosalta' },
          instagram: { handle: '@juliomoreno_ok', url: 'https://www.instagram.com/juliomoreno_ok/' },
        }
      },
      {
        id: 'hugo-antonio-moyano',
        name: "Hugo Antonio Moyano",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/hmoyano/',
        dni: '30.506.329',
        cuit: '20-30506329-1',
        officialEmail: 'hmoyano@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@hugoamoyano', url: 'https://x.com/hugoamoyano' },
          instagram: { handle: '@hugoamoyano', url: 'https://www.instagram.com/hugoamoyano/' },
        }
      },
      {
        id: 'jorge-mukdise',
        name: "Jorge Mukdise",
        party: "Unión por la Patria",
        province: "Santiago del Estero",
        locationName: "Santiago del Estero, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jmukdise/',
        officialEmail: 'jmukdise@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@jmukdise', url: 'https://x.com/jmukdise' },
          instagram: { handle: '@jorgemuk', url: 'https://www.instagram.com/jorgemuk/' },
        }
      },
      {
        id: 'gabriela-luciana-munoz',
        name: "Gabriela Luciana Muñoz",
        party: "La Libertad Avanza",
        province: "Neuquén",
        locationName: "Neuquén, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gmunoz/',
        dni: '34.860.668',
        cuit: '27-34860668-4',
        officialEmail: 'gmunoz@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@gaby_ladiputada', url: 'https://x.com/gaby_ladiputada' },
        }
      },
      {
        id: 'miriam-niveyro',
        name: "Miriam Niveyro",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: 'Alsina 3100, Claypole, Buenos Aires, Argentina',
        address: 'Alsina 3100, Claypole, Buenos Aires (CP 1849)',
        addressSource: 'https://w20argentina.com/empresa/niveyro-miriam-del-carmen-27200012513',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/niveyro-miriam-del-carmen-27200012513'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mniveyro/',
        dni: '20.001.251',
        cuit: '27-20001251-3',
        officialEmail: 'mniveyro@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@MiriamNiveyro', url: 'https://x.com/MiriamNiveyro' },
          instagram: { handle: '@miriamniveyro', url: 'https://www.instagram.com/miriamniveyro/' },
        }
      },
      {
        id: 'sebastian-noblega',
        name: "Sebastián Nóblega",
        party: "Elijo Catamarca",
        province: "Catamarca",
        locationName: "Catamarca, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/dnoblega/',
        dni: '30.364.636',
        cuit: '20-30364636-2',
        officialEmail: 'dnoblega@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@dipnoblegasebas', url: 'https://x.com/dipnoblegasebas' },
          instagram: { handle: '@sebastiannoblega', url: 'https://www.instagram.com/sebastiannoblega/' },
        }
      },
      {
        id: 'joaquin-ojeda',
        name: "Joaquín Ojeda",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jojeda/',
        officialEmail: 'jojeda@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@joaqojeda', url: 'https://x.com/joaqojeda' },
        }
      },
      {
        id: 'kelly-olmos',
        name: "Kelly Olmos",
        party: "Unión por la Patria",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/kolmos/',
        officialEmail: 'kolmos@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@kellyolmos', url: 'https://x.com/kellyolmos' },
          instagram: { handle: '@kellyolmosok', url: 'https://www.instagram.com/kellyolmosok/' },
        }
      },
      {
        id: 'blanca-ines-osuna',
        name: "Blanca Inés Osuna",
        party: "Unión por la Patria",
        province: "Entre Ríos",
        locationName: "Entre Ríos, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/bosuna/',
        dni: '6.501.325',
        cuit: '27-06501325-3',
        officialEmail: 'bosuna@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@BlancaOsunaOK', url: 'https://x.com/BlancaOsunaOK' },
          instagram: { handle: '@blancaosunaok', url: 'https://www.instagram.com/blancaosunaok/' },
        }
      },
      {
        id: 'marcela-marina-pagano',
        name: "Marcela Marina Pagano",
        party: "Coherencia",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mpagano/',
        dni: '31.928.162',
        cuit: '27-31928162-8',
        officialEmail: 'mpagano@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@Marcelampagano', url: 'https://x.com/Marcelampagano' },
        }
      },
      {
        id: 'sergio-omar-palazzo',
        name: "Sergio Omar Palazzo",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/spalazzo/',
        dni: '16.011.600',
        cuit: '20-16011600-6',
        officialEmail: 'spalazzo@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@SergioOPalazzo', url: 'https://x.com/SergioOPalazzo' },
          instagram: { handle: '@sergiopalazzobancaria', url: 'https://www.instagram.com/sergiopalazzobancaria/' },
        }
      },
      {
        id: 'claudia-maria-palladino',
        name: "Claudia María Palladino",
        party: "Unión por la Patria",
        province: "Catamarca",
        locationName: "Catamarca, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/cpalladino/',
        officialEmail: 'cpalladino@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@Palladinodip', url: 'https://x.com/Palladinodip' },
          instagram: { handle: '@claudiapalladinook', url: 'https://www.instagram.com/claudiapalladinook/' },
        }
      },
      {
        id: 'sebastian-pareja',
        name: "Sebastián Pareja",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: 'Mitre Bartolome 1371 Piso 2 Dpto. D, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Mitre Bartolome 1371 Piso 2 Dpto. D, CABA (CP 1036)',
        addressSource: 'https://w20argentina.com/empresa/pareja-sebastian-miguel-20249630161',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/pareja-sebastian-miguel-20249630161'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/spareja/',
        dni: '24.963.016',
        cuit: '20-24963016-1',
        officialEmail: 'spareja@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@SPareja_', url: 'https://x.com/SPareja_' },
          instagram: { handle: '@sebastianpareja_', url: 'https://www.instagram.com/sebastianpareja_/' },
        }
      },
      {
        id: 'maria-graciela-parola',
        name: "María Graciela Parola",
        party: "Unión por la Patria",
        province: "Formosa",
        locationName: 'Salta 57, Formosa, Argentina',
        address: 'Salta 57, Formosa (CP 3600)',
        addressSource: 'https://w20argentina.com/empresa/parola-maria-graciela-27267107721',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/parola-maria-graciela-27267107721'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mgparola/',
        dni: '26.710.772',
        cuit: '27-26710772-1',
        officialEmail: 'mgparola@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'marcos-patino-brizuela',
        name: "Marcos Patiño Brizuela",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mpatinob/',
        dni: '18.794.774',
        cuit: '20-18794774-0',
        officialEmail: 'mpatinob@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'santiago-pauli',
        name: "Santiago Pauli",
        party: "La Libertad Avanza",
        province: "Tierra del Fuego",
        locationName: "Tierra del Fuego, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jpauli/',
        dni: '33.084.202',
        cuit: '20-33084202-5',
        officialEmail: 'jpauli@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@santipauli', url: 'https://x.com/santipauli' },
          instagram: { handle: '@santipauli', url: 'https://www.instagram.com/santipauli/' },
        }
      },
      {
        id: 'esteban-paulon',
        name: "Esteban Paulón",
        party: "Provincias Unidas",
        province: "Santa Fe",
        locationName: '9 de Julio 1785 Piso 5 Dpto. B, Santa Fe, Argentina',
        address: '9 de Julio 1785 Piso 5 Dpto. B, Santa Fe (CP 2000)',
        addressSource: 'https://w20argentina.com/empresa/paulon-esteban-20265696725',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/paulon-esteban-20265696725'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/epaulon/',
        dni: '26.569.672',
        cuit: '20-26569672-5',
        officialEmail: 'epaulon@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@EstebanPaulon', url: 'https://x.com/EstebanPaulon' },
          instagram: { handle: '@e.paulon', url: 'https://www.instagram.com/e.paulon/' },
        }
      },
      {
        id: 'gabriela-pedrali',
        name: "Gabriela Pedrali",
        party: "Unión por la Patria",
        province: "La Rioja",
        locationName: "La Rioja, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gpedrali/',
        dni: '16.755.874',
        cuit: '27-16755874-2',
        officialEmail: 'gpedrali@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'agustin-pellegrini',
        name: "Agustín Pellegrini",
        party: "La Libertad Avanza",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/apellegrini/',
        officialEmail: 'apellegrini@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'federico-agustin-pelli',
        name: "Federico Agustín Pelli",
        party: "La Libertad Avanza",
        province: "Tucumán",
        locationName: "Tucumán, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/fpelli/',
        dni: '31.812.803',
        cuit: '20-31812803-1',
        officialEmail: 'fpelli@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@pellifederico', url: 'https://x.com/pellifederico' },
        }
      },
      {
        id: 'jose-peluc',
        name: "José Peluc",
        party: "La Libertad Avanza",
        province: "San Juan",
        locationName: "San Juan, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jpeluc/',
        dni: '22.903.068',
        cuit: '20-22903068-0',
        officialEmail: 'jpeluc@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'paula-andrea-penacca',
        name: "Paula Andrea Penacca",
        party: "Unión por la Patria",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ppenacca/',
        dni: '28.860.599',
        cuit: '27-28860599-3',
        officialEmail: 'ppenacca@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'luis-petri',
        name: "Luis Petri",
        party: "La Libertad Avanza",
        province: "Mendoza",
        locationName: "Mendoza, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lpetri/',
        dni: '25.887.111',
        cuit: '20-25887111-2',
        officialEmail: 'lpetri@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@luispetri', url: 'https://x.com/luispetri' },
          instagram: { handle: '@luispetriok', url: 'https://www.instagram.com/luispetriok/' },
        }
      },
      {
        id: 'maria-lorena-petrovich',
        name: "María Lorena Petrovich",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mpetrovich/',
        dni: '27.601.732',
        cuit: '27-27601732-8',
        officialEmail: 'mpetrovich@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'luis-albino-picat',
        name: "Luis Albino Picat",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lpicat/',
        dni: '24.012.455',
        cuit: '24-24012455-2',
        officialEmail: 'lpicat@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'miguel-angel-pichetto',
        name: "Miguel Ángel Pichetto",
        party: "Encuentro Federal",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mpichetto/',
        dni: '8.482.440',
        cuit: '20-08482440-3',
        officialEmail: 'mpichetto@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'horacio-pietragalla-corti',
        name: "Horacio Pietragalla Corti",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/hpietragallac/',
        dni: '26.019.195',
        cuit: '20-26019195-1',
        officialEmail: 'hpietragallac@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@pietragallahora', url: 'https://x.com/pietragallahora' },
          instagram: { handle: '@horacio_pietragalla', url: 'https://www.instagram.com/horacio_pietragalla/' },
        }
      },
      {
        id: 'lorena-pokoik',
        name: "Lorena Pokoik",
        party: "Unión por la Patria",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lpokoikg/',
        dni: '23.205.010',
        cuit: '27-23205010-7',
        officialEmail: 'lpokoikg@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@lorepokoik', url: 'https://x.com/lorepokoik' },
          instagram: { handle: '@l.pokoik', url: 'https://www.instagram.com/l.pokoik/' },
        }
      },
      {
        id: 'maria-celeste-ponce',
        name: "María Celeste Ponce",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: 'Juan B. Justo 526, Huinca Renanco, Córdoba, Argentina',
        address: 'Juan B. Justo 526, Huinca Renanco, Córdoba (CP 6270)',
        addressSource: 'https://w20argentina.com/empresa/ponce-maria-celeste-27329016817',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/ponce-maria-celeste-27329016817'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mponce/',
        dni: '32.901.681',
        cuit: '27-32901681-7',
        officialEmail: 'mponce@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@mcelestep', url: 'https://x.com/mcelestep' },
          instagram: { handle: '@mariacelesteponce_', url: 'https://www.instagram.com/mariacelesteponce_/' },
        }
      },
      {
        id: 'luciana-potenza',
        name: "Luciana Potenza",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lpotenza/',
        dni: '38.319.356',
        cuit: '27-38319356-2',
        officialEmail: 'lpotenza@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'agustina-lucrecia-propato',
        name: "Agustina Lucrecia Propato",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: 'Sucre Antonio Mcal. 2980 Piso PB Dpto. A, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Sucre Antonio Mcal. 2980 Piso PB Dpto. A, CABA (CP 1428)',
        addressSource: 'https://w20argentina.com/empresa/propato-agustina-lucrecia-27295495540',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/propato-agustina-lucrecia-27295495540'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/apropato/',
        dni: '29.549.554',
        cuit: '27-29549554-0',
        officialEmail: 'apropato@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@aguspropatoarg', url: 'https://x.com/aguspropatoarg' },
          instagram: { handle: '@aguspropato', url: 'https://www.instagram.com/aguspropato/' },
        }
      },
      {
        id: 'manuel-quintar',
        name: "Manuel Quintar",
        party: "La Libertad Avanza",
        province: "Jujuy",
        locationName: "Jujuy, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mquintar/',
        dni: '28.647.029',
        cuit: '20-28647029-8',
        officialEmail: 'mquintar@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@manuelquintar', url: 'https://x.com/manuelquintar' },
          instagram: { handle: '@manuelquintar', url: 'https://www.instagram.com/manuelquintar/' },
        }
      },
      {
        id: 'ariel-rauschenberger',
        name: "Ariel Rauschenberger",
        party: "Unión por la Patria",
        province: "La Pampa",
        locationName: "La Pampa, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/arauschenberger/',
        dni: '17.348.895',
        cuit: '20-17348895-6',
        officialEmail: 'arauschenberger@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'valentina-ravera',
        name: "Valentina Ravera",
        party: "La Libertad Avanza",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/vravera/',
        officialEmail: 'vravera@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'veronica-razzini',
        name: "Verónica Razzini",
        party: "La Libertad Avanza",
        province: "Santa Fe",
        locationName: 'AV. Arijon 2542, Rosario Sud, Santa Fe, Argentina',
        address: 'AV. Arijon 2542, Rosario Sud, Santa Fe (CP 2000)',
        addressSource: 'https://w20argentina.com/empresa/razzini-veronica-gabriela-27280877188',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/razzini-veronica-gabriela-27280877188'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/vrazzini/',
        dni: '28.087.718',
        cuit: '27-28087718-8',
        officialEmail: 'vrazzini@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'karen-reichardt',
        name: "Karen Reichardt",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/kreichardt/',
        officialEmail: 'kreichardt@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'gaston-riesco',
        name: "Gastón Riesco",
        party: "La Libertad Avanza",
        province: "Neuquén",
        locationName: "Neuquén, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/griesco/',
        officialEmail: 'griesco@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'santiago-luis-roberto',
        name: "Santiago Luis Roberto",
        party: "Unión por la Patria",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/sroberto/',
        officialEmail: 'sroberto@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'gonzalo-roca',
        name: "Gonzalo Roca",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/groca/',
        officialEmail: 'groca@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'laura-elena-rodriguez-machado',
        name: "Laura Elena Rodríguez Machado",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: 'Jacinto Rios 321 Piso 6 Dpto. C - Barrio : General Paz, Barrio General Paz Norte, Córdoba, Argentina',
        address: 'Jacinto Rios 321 Piso 6 Dpto. C - Barrio : General Paz, Barrio General Paz Norte, Córdoba (CP 5000)',
        addressSource: 'https://w20argentina.com/empresa/rodriguez-machado-laura-elena-27148917987',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/rodriguez-machado-laura-elena-27148917987'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lrodriguezm/',
        dni: '14.891.798',
        cuit: '27-14891798-7',
        officialEmail: 'lrodriguezm@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@laurmachado', url: 'https://x.com/laurmachado' },
          instagram: { handle: '@laurarmachado', url: 'https://www.instagram.com/laurarmachado/' },
        }
      },
      {
        id: 'miguel-rodriguez',
        name: "Miguel Rodríguez",
        party: "La Libertad Avanza",
        province: "Tierra del Fuego",
        locationName: "Tierra del Fuego, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lurodriguez/',
        officialEmail: 'lurodriguez@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'agustin-oscar-rossi',
        name: "Agustín Oscar Rossi",
        party: "Unión por la Patria",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/arossi/',
        dni: '13.651.877',
        cuit: '20-13651877-2',
        officialEmail: 'arossi@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@RossiAgustinOk', url: 'https://x.com/RossiAgustinOk' },
          instagram: { handle: '@rossiagustinok', url: 'https://www.instagram.com/rossiagustinok/' },
        }
      },
      {
        id: 'yamila-ruiz',
        name: "Yamila Ruíz",
        party: "Argentina Federal",
        province: "Misiones",
        locationName: 'Tomas Guido 2940, Misiones, Argentina',
        address: 'Tomas Guido 2940, Misiones (CP 3300)',
        addressSource: 'https://w20argentina.com/empresa/ruiz-yamila-lisette-27364093786',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/ruiz-yamila-lisette-27364093786'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/yruiz/',
        dni: '36.409.378',
        cuit: '27-36409378-6',
        officialEmail: 'yruiz@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'marina-dorotea-salzmann',
        name: "Marina Dorotea Salzmann",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: 'Ugarteche 3296 Piso 2 Dpto. B, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Ugarteche 3296 Piso 2 Dpto. B, CABA (CP 1425)',
        addressSource: 'https://w20argentina.com/empresa/salzmann-marina-dorotea-27352538626',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/salzmann-marina-dorotea-27352538626'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/msalzmann/',
        dni: '35.253.862',
        cuit: '27-35253862-6',
        officialEmail: 'msalzmann@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@marinadorotea', url: 'https://x.com/marinadorotea' },
        }
      },
      {
        id: 'nancy-sand',
        name: "Nancy Sand",
        party: "Unión por la Patria",
        province: "Corrientes",
        locationName: "Corrientes, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/nsandg/',
        dni: '16.549.523',
        cuit: '27-16549523-9',
        officialEmail: 'nsandg@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@sandnancy', url: 'https://x.com/sandnancy' },
        }
      },
      {
        id: 'juliana-santillan-juarez-brahim',
        name: "Juliana Santillán Juárez Brahim",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/csantillanj/',
        dni: '27.379.622',
        cuit: '27-27379622-9',
        officialEmail: 'csantillanj@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@SantilanJuli223', url: 'https://x.com/SantilanJuli223' },
          instagram: { handle: '@juliana_santillan_juarezbrahim', url: 'https://www.instagram.com/juliana_santillan_juarezbrahim/' },
        }
      },
      {
        id: 'santiago-santurio',
        name: "Santiago Santurio",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ssanturior/',
        dni: '33.434.066',
        cuit: '20-33434066-0',
        officialEmail: 'ssanturior@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@Turios', url: 'https://x.com/Turios' },
          instagram: { handle: '@santiagosanturio', url: 'https://www.instagram.com/santiagosanturio/' },
        }
      },
      {
        id: 'juan-schiaretti',
        name: "Juan Schiaretti",
        party: "Provincias Unidas",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jschiaretti/',
        dni: '7.799.841',
        cuit: '20-07799841-2',
        officialEmail: 'jschiaretti@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@JSchiaretti', url: 'https://x.com/JSchiaretti' },
        }
      },
      {
        id: 'sabrina-selva',
        name: "Sabrina Selva",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/sselva/',
        dni: '32.686.747',
        cuit: '27-32686747-6',
        officialEmail: 'sselva@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@SabriSelva', url: 'https://x.com/SabriSelva' },
          instagram: { handle: '@sabriselva', url: 'https://www.instagram.com/sabriselva/' },
        }
      },
      {
        id: 'adriana-cristina-serquis',
        name: "Adriana Cristina Serquis",
        party: "Unión por la Patria",
        province: "Río Negro",
        locationName: "Río Negro, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/aserquis/',
        dni: '18.414.011',
        cuit: '27-18414011-5',
        officialEmail: 'aserquis@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@aserquis', url: 'https://x.com/aserquis' },
        }
      },
      {
        id: 'vanesa-raquel-siley',
        name: "Vanesa Raquel Siley",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/vsiley/',
        dni: '31.114.069',
        cuit: '27-31114069-3',
        officialEmail: 'vsiley@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@Vsiley', url: 'https://x.com/Vsiley' },
        }
      },
      {
        id: 'guillermo-snopek',
        name: "Guillermo Snopek",
        party: "Unión por la Patria",
        province: "Jujuy",
        locationName: 'Otero 153, San Salvador De Jujuy, Jujuy, Argentina',
        address: 'Otero 153, San Salvador De Jujuy, Jujuy (CP 4600)',
        addressSource: 'https://w20argentina.com/empresa/snopek-guillermo-eugenio-ma-20243992371',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/snopek-guillermo-eugenio-ma-20243992371'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gsnopek/',
        dni: '24.399.237',
        cuit: '20-24399237-1',
        officialEmail: 'gsnopek@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'laura-soldano',
        name: "Laura Soldano",
        party: "La Libertad Avanza",
        province: "Córdoba",
        locationName: "Córdoba, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lsoldano/',
        officialEmail: 'lsoldano@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'julia-strada',
        name: "Julia Strada",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: 'Ayacucho 236 Piso 2 Dpto. A - Entre las Calles : Sarmiento y Peron, Ciudad Autónoma de Buenos Aires, Argentina',
        address: 'Ayacucho 236 Piso 2 Dpto. A - Entre las Calles : Sarmiento y Peron, CABA (CP 1025)',
        addressSource: 'https://w20argentina.com/empresa/strada-rodriguez-julia-27344084039',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/strada-rodriguez-julia-27344084039'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jstrada/',
        dni: '34.408.403',
        cuit: '27-34408403-9',
        officialEmail: 'jstrada@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@Juli_Strada', url: 'https://x.com/Juli_Strada' },
          instagram: { handle: '@julia.strada', url: 'https://www.instagram.com/julia.strada/' },
        }
      },
      {
        id: 'jorge-taiana',
        name: "Jorge Taiana",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jtaiana/',
        dni: '8.362.673',
        cuit: '23-08362673-9',
        officialEmail: 'jtaiana@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@JorgeTaiana', url: 'https://x.com/JorgeTaiana' },
          instagram: { handle: '@taianajorgeok', url: 'https://www.instagram.com/taianajorgeok/' },
        }
      },
      {
        id: 'rodolfo-tailhade',
        name: "Rodolfo Tailhade",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ltailhade/',
        dni: '21.386.299',
        cuit: '20-21386299-6',
        officialEmail: 'ltailhade@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@rodotailhade', url: 'https://x.com/rodotailhade' },
          instagram: { handle: '@rodotailhade', url: 'https://www.instagram.com/rodotailhade/' },
        }
      },
      {
        id: 'caren-tepp',
        name: "Caren Tepp",
        party: "Unión por la Patria",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ctepp/',
        dni: '32.702.553',
        cuit: '27-32702553-3',
        officialEmail: 'ctepp@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'pablo-todero',
        name: "Pablo Todero",
        party: "Unión por la Patria",
        province: "Neuquén",
        locationName: "Neuquén, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ptodero/',
        dni: '22.525.332',
        cuit: '20-22525332-4',
        officialEmail: 'ptodero@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'victoria-tolosa-paz',
        name: "Victoria Tolosa Paz",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/vtolosap/',
        dni: '23.485.066',
        cuit: '27-23485066-6',
        officialEmail: 'vtolosap@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@vtolosapaz', url: 'https://x.com/vtolosapaz' },
          instagram: { handle: '@vtolosapaz', url: 'https://www.instagram.com/vtolosapaz/' },
        }
      },
      {
        id: 'yamile-tomassoni',
        name: "Yamile Tomassoni",
        party: "La Libertad Avanza",
        province: "Santa Fe",
        locationName: "Santa Fe, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ytomassoni/',
        dni: '26.719.904',
        cuit: '27-26719904-9',
        officialEmail: 'ytomassoni@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'ruben-dario-torres',
        name: "Rubén Darío Torres",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/rdtorres/',
        officialEmail: 'rdtorres@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'anibal-tortoriello',
        name: "Aníbal Tortoriello",
        party: "La Libertad Avanza",
        province: "Río Negro",
        locationName: "Río Negro, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/atortoriello/',
        dni: '12.979.035',
        cuit: '20-12979035-1',
        officialEmail: 'atortoriello@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@atortoriellook', url: 'https://x.com/atortoriellook' },
          instagram: { handle: '@atortoriellook', url: 'https://www.instagram.com/atortoriellook/' },
        }
      },
      {
        id: 'jose-federico-tournier',
        name: "José Federico Tournier",
        party: "La Libertad Avanza",
        province: "Corrientes",
        locationName: "Corrientes, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/jtournier/',
        dni: '24.416.624',
        cuit: '20-24416624-6',
        officialEmail: 'jtournier@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@fede_tournier', url: 'https://x.com/fede_tournier' },
          instagram: { handle: '@federico_tournier', url: 'https://www.instagram.com/federico_tournier/' },
        }
      },
      {
        id: 'cesar-treffinger',
        name: "César Treffinger",
        party: "La Libertad Avanza",
        province: "Chubut",
        locationName: 'Sarmiento 797, Bahia Blanca, Buenos Aires, Argentina',
        address: 'Sarmiento 797, Bahia Blanca, Buenos Aires (CP 8000)',
        addressSource: 'https://w20argentina.com/empresa/treffinger-cesar-hernan-20242671652',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/treffinger-cesar-hernan-20242671652'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ctreffinger/',
        dni: '24.267.165',
        cuit: '20-24267165-2',
        officialEmail: 'ctreffinger@hcdn.gob.ar',
        mandate: '2023-2027',
        officePhone: '60753114',
        socialMedia: {
          x: { handle: '@CesarTreffinger', url: 'https://x.com/CesarTreffinger' },
          instagram: { handle: '@cesartreffinger', url: 'https://www.instagram.com/cesartreffinger/' },
        }
      },
      {
        id: 'nicolas-alfredo-trotta',
        name: "Nicolás Alfredo Trotta",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ntrotta/',
        dni: '24.957.716',
        cuit: '20-24957716-3',
        officialEmail: 'ntrotta@hcdn.gob.ar',
        mandate: '2025-2029',
        officePhone: '60750000',
        office: '2397',
        socialMedia: {
          x: { handle: '@trottanico', url: 'https://x.com/trottanico' },
          instagram: { handle: '@trottanico', url: 'https://www.instagram.com/trottanico/' },
        }
      },
      {
        id: 'hernan-urien',
        name: "Hernán Urien",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/hurien/',
        dni: '34.155.625',
        cuit: '20-34155625-3',
        officialEmail: 'hurien@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'eduardo-felix-valdes',
        name: "Eduardo Félix Valdés",
        party: "Unión por la Patria",
        province: "Ciudad Autónoma de Buenos Aires",
        locationName: "Ciudad Autónoma de Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/evaldes/',
        dni: '11.640.899',
        cuit: '20-11640899-7',
        officialEmail: 'evaldes@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@eduardofvaldes', url: 'https://x.com/eduardofvaldes' },
        }
      },
      {
        id: 'daniel-vancsik',
        name: "Daniel Vancsik",
        party: "Argentina Federal",
        province: "Misiones",
        locationName: "Misiones, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/dvancsik/',
        dni: '24.509.615',
        cuit: '20-24509615-2',
        officialEmail: 'dvancsik@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'm-elena-velazquez',
        name: "M. Elena Velázquez",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mevelazquez/',
        dni: '20.477.570',
        cuit: '27-20477570-8',
        officialEmail: 'mevelazquez@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'andrea-fernanda-vera',
        name: "Andrea Fernanda Vera",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/avera/',
        officialEmail: 'avera@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'lorena-villaverde',
        name: "Lorena Villaverde",
        party: "La Libertad Avanza",
        province: "Río Negro",
        locationName: '9 de Julio 122, San Antonio Oeste, Río Negro, Argentina',
        address: '9 de Julio 122, San Antonio Oeste, Río Negro (CP 8520)',
        addressSource: 'https://w20argentina.com/empresa/villaverde-maria-lorena-23238322464',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/villaverde-maria-lorena-23238322464'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lvillaverde/',
        dni: '23.832.246',
        cuit: '23-23832246-4',
        officialEmail: 'lvillaverde@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          instagram: { handle: '@lorevillaverdediputada', url: 'https://www.instagram.com/lorevillaverdediputada/' },
        }
      },
      {
        id: 'gino-visconti',
        name: "Gino Visconti",
        party: "La Libertad Avanza",
        province: "La Rioja",
        locationName: "La Rioja, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/gvisconti/',
        officialEmail: 'gvisconti@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'luana-volnovich',
        name: "Luana Volnovich",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/lvolnovich/',
        dni: '18.887.355',
        cuit: '27-18887355-9',
        officialEmail: 'lvolnovich@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'patricia-vasquez',
        name: "Patricia Vásquez",
        party: "La Libertad Avanza",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/pvasquez/',
        dni: '12.046.648',
        cuit: '27-12046648-3',
        officialEmail: 'pvasquez@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@PatoVasquezOk', url: 'https://x.com/PatoVasquezOk' },
          instagram: { handle: '@patovasquezok', url: 'https://www.instagram.com/patovasquezok/' },
        }
      },
      {
        id: 'hugo-yasky',
        name: "Hugo Yasky",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/hyasky/',
        dni: '8.207.069',
        cuit: '23-08207069-9',
        officialEmail: 'hyasky@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'pablo-raul-yedlin',
        name: "Pablo Raúl Yedlin",
        party: "Unión por la Patria",
        province: "Tucumán",
        locationName: "Tucumán, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/pyedlin/',
        dni: '17.614.992',
        cuit: '20-17614992-3',
        officialEmail: 'pyedlin@hcdn.gob.ar',
        mandate: '2023-2027',
      },
      {
        id: 'carlos-raul-zapata',
        name: "Carlos Raúl Zapata",
        party: "La Libertad Avanza",
        province: "Salta",
        locationName: "Salta, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/czapata/',
        dni: '12.790.162',
        cuit: '20-12790162-8',
        officialEmail: 'czapata@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'natalia-zaracho',
        name: "Natalia Zaracho",
        party: "Unión por la Patria",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/nzaracho/',
        dni: '35.461.328',
        cuit: '27-35461328-5',
        officialEmail: 'nzaracho@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@Naty_Zaracho', url: 'https://x.com/Naty_Zaracho' },
          instagram: { handle: '@natalia_zaracho', url: 'https://www.instagram.com/natalia_zaracho/' },
        }
      },
      {
        id: 'christian-alejandro-zulli',
        name: "Christian Alejandro Zulli",
        party: "Unión por la Patria",
        province: "Corrientes",
        locationName: "Corrientes, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/czulli/',
        dni: '33.203.015',
        cuit: '23-33203015-9',
        officialEmail: 'czulli@hcdn.gob.ar',
        mandate: '2023-2027',
        socialMedia: {
          x: { handle: '@tanozulli', url: 'https://x.com/tanozulli' },
          instagram: { handle: '@christian.a.zulli', url: 'https://www.instagram.com/christian.a.zulli/' },
        }
      },
      {
        id: 'maria-graciela-de-la-rosa',
        name: "María Graciela de la Rosa",
        party: "Unión por la Patria",
        province: "Formosa",
        locationName: "Formosa, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/mdelarosa/',
        officialEmail: 'mdelarosa@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'natalia-de-la-sota',
        name: "Natalia de la Sota",
        party: "Defendamos Córdoba",
        province: "Córdoba",
        locationName: 'Tucuman 26 Piso 7 - Esquina : Dean Funes y Tucuman, Barrio Centro Sur, Córdoba, Argentina',
        address: 'Tucuman 26 Piso 7 - Esquina : Dean Funes y Tucuman, Barrio Centro Sur, Córdoba (CP 5000)',
        addressSource: 'https://w20argentina.com/empresa/de-la-sota-natalia-27248854265',
        addressSources: [
          {
            label: 'Registro comercial / fiscal AFIP (W20)',
            url: 'https://w20argentina.com/empresa/de-la-sota-natalia-27248854265'
          }
        ],
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ndelasota/',
        dni: '24.885.426',
        cuit: '27-24885426-5',
        officialEmail: 'ndelasota@hcdn.gob.ar',
        mandate: '2025-2029',
      },
      {
        id: 'nicolas-del-cano',
        name: "Nicolás del Caño",
        party: "PTS - Frente de Izquierda",
        province: "Buenos Aires",
        locationName: "Buenos Aires, Argentina",
        status: 'presente',
        profileUrl: 'https://www.hcdn.gob.ar/diputados/ndelcano/',
        dni: '27.921.771',
        cuit: '20-27921771-4',
        officialEmail: 'ndelcano@hcdn.gob.ar',
        mandate: '2025-2029',
        socialMedia: {
          x: { handle: '@NicolasdelCano', url: 'https://x.com/NicolasdelCano' },
          instagram: { handle: '@nico_del_cano', url: 'https://www.instagram.com/nico_del_cano/' },
        }
      }
    ]
  }
];

// Vincular automáticamente las Declaraciones Juradas Patrimoniales Integrales (DDJJ) oficiales
SESSIONS_DATA.forEach((session) => {
  session.deputies.forEach((deputy) => {
    const decl = DEPUTY_DECLARATIONS[deputy.id];
    if (decl) {
      deputy.declaration = decl;
    }
  });
});

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
