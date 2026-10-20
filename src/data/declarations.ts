import { DeputyAssetDeclaration } from '../types';

/**
 * Base de datos oficial de Declaraciones Juradas Patrimoniales Integrales (DDJJ)
 * Relevada de los datasets abiertos del Ministerio de Justicia / Oficina Anticorrupción (datos.jus.gob.ar).
 * Incluye detalle patrimonial (bienes al inicio y al cierre, deudas, ingresos anuales),
 * desglose de bienes inmuebles (tipo, destino, localidad e importe declarado) y automotores.
 */
export const DEPUTY_DECLARATIONS: Record<string, DeputyAssetDeclaration> = {
  "estela-mary-neder": {
    "anio": 2023,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 12897678.74,
    "totalBienesFinal": 33738853.75,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 33738853.75,
    "ingresosAnuales": 15641298.36,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SANTIAGO DEL ESTERO",
        "porcentaje": "100.00",
        "fechaIngreso": "03/12/2013",
        "importe": 870249.12,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SANTIAGO DEL ESTERO -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 03/12/2013"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "LORETO",
        "porcentaje": "100.00",
        "fechaIngreso": "03/12/2013",
        "importe": 1335770.12,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: LORETO -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 03/12/2013"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTAYARIS XLS PACK 1.5 CVTSEDAN 5 PUERTAS",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2021",
        "importe": 8230500
      }
    ],
    "localidadesInmuebles": [
      "Santiago Del Estero",
      "Loreto"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "paulo-agustin-tita": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 109421784.56,
    "totalBienesFinal": 207750161.34,
    "totalDeudasFinal": 4440092.05,
    "patrimonioNeto": 203310069.29,
    "ingresosAnuales": 56504861.53,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "RIO GRANDE",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2009",
        "importe": 19680352.67,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: RIO GRANDE -Fecha de ingreso al patrimonio: 01/01/2009"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "ALQUILER",
        "localidad": "RIO GRANDE",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2009",
        "importe": 31650876.46,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: ALQUILER -Localidad: RIO GRANDE -Fecha de ingreso al patrimonio: 01/01/2009"
      },
      {
        "tipo": "MEJORAS CONSTRUCCION",
        "destino": "ALQUILER",
        "localidad": "RIO GRANDE",
        "porcentaje": "100.00",
        "fechaIngreso": "30/06/2024",
        "importe": 24226608.62,
        "descripcionOriginal": "Tipo: MEJORAS CONSTRUCCION -Destino: ALQUILER -Localidad: RIO GRANDE -Fecha de ingreso al patrimonio: 30/06/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "RENAULT|CLIO 5 PTAS PACK|SEDAN 5 PUERTAS",
        "anioFabricacion": "2009",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2013",
        "importe": 3591800
      },
      {
        "descripcion": "CHEVROLET|MERIVA GLS 1.8 SOHC|SEDAN 5 PUERTAS",
        "anioFabricacion": "2008",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2017",
        "importe": 2343000
      },
      {
        "descripcion": "TOYOTA|RAV4 4X4 VX|TODO TERRENO",
        "anioFabricacion": "2014",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2018",
        "importe": 18850000
      },
      {
        "descripcion": "TOYOTA|RAV4 HV 2.5 AWD LIMITED CVT|TODO TERRENO",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2023",
        "importe": 48310000
      }
    ],
    "localidadesInmuebles": [
      "Rio Grande"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maria-florencia-de-sensi": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA DE LA NACION",
    "organismo": "nan",
    "totalBienesInicio": 62756281.26,
    "totalBienesFinal": 65475489.55,
    "totalDeudasFinal": 12975621.48,
    "patrimonioNeto": 52499868.06999999,
    "ingresosAnuales": 84776644.58,
    "inmuebles": [
      {
        "tipo": "LOCAL",
        "destino": "ALQUILER",
        "localidad": "CIUDAD AUTONOMA DE BUENO AIRES",
        "porcentaje": "1.52",
        "fechaIngreso": "21/04/2016",
        "importe": 208794.74,
        "descripcionOriginal": "Tipo: LOCAL -Destino: ALQUILER -Localidad: CIUDAD AUTONOMA DE BUENO AIRES -Fecha de ingreso al patrimonio: 21/04/2016"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "FRANCISCO ALVAREZ",
        "porcentaje": "100.00",
        "fechaIngreso": "15/11/2023",
        "importe": 47515000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: FRANCISCO ALVAREZ -Fecha de ingreso al patrimonio: 15/11/2023"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "JEEP|COMPASS LIMITED 1.3T AT6 4X2|RURAL 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2023",
        "importe": 12300000
      }
    ],
    "localidadesInmuebles": [
      "Ciudad Autonoma De Bueno Aires",
      "Francisco Alvarez"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "alejandro-finocchiaro": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 141267668.04,
    "totalBienesFinal": 277791960.4,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 277791960.4,
    "ingresosAnuales": 63073650.98,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "La Esmeralda",
        "porcentaje": "100.00",
        "fechaIngreso": "05/11/2012",
        "importe": 3000000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: La Esmeralda -Fecha de ingreso al patrimonio: 05/11/2012"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "15/04/2016",
        "importe": 71695594.63,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Capital Federal -Fecha de ingreso al patrimonio: 15/04/2016"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "10/05/2023",
        "importe": 24907702,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: Capital Federal -Fecha de ingreso al patrimonio: 10/05/2023"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "FORD|ECOSPORT TITANIUM 1.5L AT N|RURAL 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "50.00",
        "fechaIngreso": "11/2020",
        "importe": 7665050
      },
      {
        "descripcion": "CHEVROLET|ONIX PLUS 1.0T AT PREMIER|SEDAN 4 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "50.00",
        "fechaIngreso": "03/2022",
        "importe": 4660000
      },
      {
        "descripcion": "CHEVROLET|CRUZE 4P 1.4 TURBO PREMIER AT|SEDAN 4 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2024",
        "importe": 22430000
      }
    ],
    "localidadesInmuebles": [
      "La Esmeralda",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "cristian-a-ritondo": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPÙTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 1542093839.58,
    "totalBienesFinal": 6718159384.72,
    "totalDeudasFinal": 46245708.59,
    "patrimonioNeto": 6671913676.13,
    "ingresosAnuales": 337375137.66,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "PINAMAR",
        "porcentaje": "100.00",
        "fechaIngreso": "30/12/2012",
        "importe": 6634163,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: PINAMAR -Fecha de ingreso al patrimonio: 30/12/2012"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "FIAT",
        "anioFabricacion": "1973",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2017",
        "importe": 38400
      },
      {
        "descripcion": "FIAT",
        "anioFabricacion": "1977",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2021",
        "importe": 35000
      },
      {
        "descripcion": "Citroen Mehari",
        "anioFabricacion": "1977",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2019",
        "importe": 155000
      },
      {
        "descripcion": "FIAT 600",
        "anioFabricacion": "1967",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2010",
        "importe": 40000
      },
      {
        "descripcion": "Volkswagen Golft GTI DSG Sedan 5 Puertas",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2022",
        "importe": 29225300
      }
    ],
    "localidadesInmuebles": [
      "Pinamar"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "javier-sanchez-wrba": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Prosecretario Parlamentario de Bloque en el Senado",
    "organismo": "HONORABLE SENADO DE LA NACION",
    "totalBienesInicio": 57930626.09,
    "totalBienesFinal": 112480431.17,
    "totalDeudasFinal": 212889.22,
    "patrimonioNeto": 112267541.95,
    "ingresosAnuales": 57292712.13,
    "inmuebles": [
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "TRENQUE LAUQUEN",
        "porcentaje": "100.00",
        "fechaIngreso": "03/03/2009",
        "importe": 4415393.95,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: TRENQUE LAUQUEN -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 03/03/2009"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "TRENQUE LAUQUEN",
        "porcentaje": "100.00",
        "fechaIngreso": "07/09/2012",
        "importe": 9872906.44,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: TRENQUE LAUQUEN -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 07/09/2012"
      },
      {
        "tipo": "LOCAL",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "TRENQUE LAUQUEN",
        "porcentaje": "33.33",
        "fechaIngreso": "01/06/1982",
        "importe": 7323546.92,
        "descripcionOriginal": "Tipo: LOCAL -Destino: ALQUILER / CONTRAPRESTACION -Localidad: TRENQUE LAUQUEN -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 01/06/1982"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "TRENQUE LAUQUEN",
        "porcentaje": "100.00",
        "fechaIngreso": "17/08/2015",
        "importe": 8782020.47,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: TRENQUE LAUQUEN -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 17/08/2015"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "TRENQUE LAUQUEN",
        "porcentaje": "100.00",
        "fechaIngreso": "10/10/2015",
        "importe": 1821505.94,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: TRENQUE LAUQUEN -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 10/10/2015"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: FORDFOCUS 4P 2.0L N MT SESEDAN 4 PUERTAS",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2022",
        "importe": 8096000
      },
      {
        "descripcion": "Modelo: VOLKSWAGENNIVUS HIGHLINE 200 TSI ATSEDAN 5 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2024",
        "importe": 20900000
      }
    ],
    "localidadesInmuebles": [
      "Trenque Lauquen"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "martin-yeza": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 10656000.66,
    "totalBienesFinal": 24686094.2,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 24686094.2,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "PINAMAR",
        "porcentaje": "50.00",
        "fechaIngreso": "06/08/2020",
        "importe": 3921307.81,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: PINAMAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 06/08/2020"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HYUNDAITUCSON 2.0 4WD CRDITODO TERRENO",
        "anioFabricacion": "2010",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2017",
        "importe": 4990400
      },
      {
        "descripcion": "Modelo: VOLKSWAGENPASSAT CC 2.0 TSISEDAN 4 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2024",
        "importe": 10000000
      }
    ],
    "localidadesInmuebles": [
      "Pinamar"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "fernando-de-andreis": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputado nacional",
    "organismo": "nan",
    "totalBienesInicio": 304619259.65,
    "totalBienesFinal": 2144695973.8,
    "totalDeudasFinal": 42993338.48,
    "patrimonioNeto": 2101702635.32,
    "ingresosAnuales": 2737022.94,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "18/12/2018",
        "importe": 0,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 18/12/2018"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "OLIVOS",
        "porcentaje": "50.00",
        "fechaIngreso": "06/07/2023",
        "importe": 65312040,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: OLIVOS -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 06/07/2023"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: No informado",
        "anioFabricacion": "2005",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2009",
        "importe": 0
      },
      {
        "descripcion": "Modelo: PIAGGIOMP3 YOURBAN LT 300 IE (3 RUEDAS)SCOOTER",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2022",
        "importe": 1868800
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal",
      "Olivos"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "daiana-fernandez-molero": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL POR LA CIUDAD DE BUENOS AIRES",
    "organismo": "LEGISLATURA DE LA CIUDAD AUTONOMA DE BUENOS AIRES",
    "totalBienesInicio": 108928656.84,
    "totalBienesFinal": 146063942.45,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 146063942.45,
    "ingresosAnuales": 45741477.88,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "antonela-giampieri": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "nan",
    "organismo": "nan",
    "totalBienesInicio": 8643527,
    "totalBienesFinal": 11612007,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 11612007,
    "ingresosAnuales": 25981534.58,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "alvaro-gonzalez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 617478884.21,
    "totalBienesFinal": 1186847243.98,
    "totalDeudasFinal": 116908416.6,
    "patrimonioNeto": 1069938827.38,
    "ingresosAnuales": 47368161.41,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "SANTA FE",
        "porcentaje": "100.00",
        "fechaIngreso": "01/09/1996",
        "importe": 106061872.43,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: SANTA FE -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 01/09/1996"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "SANTA FE",
        "porcentaje": "50.00",
        "fechaIngreso": "01/10/1998",
        "importe": 21327375.6,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: SANTA FE -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 01/10/1998"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "03/03/2001",
        "importe": 135022500.35,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 03/03/2001"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "01/02/2015",
        "importe": 200922443.38,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 01/02/2015"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Santa Fe",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "martin-ardohain": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 28113151.46,
    "totalBienesFinal": 45978632.14,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 45978632.14,
    "ingresosAnuales": 69977854.16,
    "inmuebles": [
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "DOBLAS",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/2000",
        "importe": 9604719.2,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: DOBLAS -Provincia: LA PAMPA -Fecha de ingreso al patrimonio: 01/01/2000"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENAMAROK COMFORTLINE 4X2 2.0L TDI 180 CVPICK-UP",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2022",
        "importe": 25300000
      }
    ],
    "localidadesInmuebles": [
      "Doblas"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "emmanuel-bianchetti": {
    "anio": 2023,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputado Nacional",
    "organismo": "BIANCHETTI RAMON EMMANUEL",
    "totalBienesInicio": 1434532,
    "totalBienesFinal": 8384782,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 8384782,
    "ingresosAnuales": 200941,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gerardo-cipolini": {
    "anio": 2022,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 12723890,
    "totalBienesFinal": 17041642,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 17041642,
    "ingresosAnuales": 8700925,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "CHEVROLET VECTRA CD 2.4",
        "anioFabricacion": "2009",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2009",
        "importe": 1200000
      },
      {
        "descripcion": "TOYOTA HILUX 4X4 D C SRX 2.8 TDI 6 M T|PICK-UP",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2019",
        "importe": 6367000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2022 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "lisandro-nieri": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO",
    "organismo": "nan",
    "totalBienesInicio": 69098175.82,
    "totalBienesFinal": 144621608.36,
    "totalDeudasFinal": 5947823.82,
    "patrimonioNeto": 138673784.54000002,
    "ingresosAnuales": 47796099.67,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "LAS HERAS",
        "porcentaje": "100.00",
        "fechaIngreso": "06/09/2005",
        "importe": 70352034.01,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: LAS HERAS -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 06/09/2005"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "MALARGUE",
        "porcentaje": "50.00",
        "fechaIngreso": "19/07/2013",
        "importe": 10028518.3,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: MALARGUE -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 19/07/2013"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTAHILUX 4X4 CABINA DOBLE SRV 3.0 TDiPICK-UP",
        "anioFabricacion": "2009",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2015",
        "importe": 13847000
      }
    ],
    "localidadesInmuebles": [
      "Las Heras",
      "Malargue"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "pamela-fernanda-verasay": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 44990673.91,
    "totalBienesFinal": 83292260.44,
    "totalDeudasFinal": 96169190.22,
    "patrimonioNeto": -12876929.780000001,
    "ingresosAnuales": 37299956.34,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "CASA HABITACION",
        "localidad": "MENDOZA",
        "porcentaje": "100.00",
        "fechaIngreso": "18/05/2018",
        "importe": 41884928.73,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: CASA HABITACION -Localidad: MENDOZA -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 18/05/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: FORDRANGER DC 4X4 XLT MT 3.2L DPICK-UP",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2020",
        "importe": 28018800
      }
    ],
    "localidadesInmuebles": [
      "Mendoza"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "eduardo-falcone": {
    "anio": 2023,
    "tipoDeclaracion": "Inicial",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "SOCIEDAD ARGENTINA DE AUTORES Y COMPOSITORES DE MU",
    "totalBienesInicio": 0,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "oscar-zago": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 0,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "karina-banfi": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada Nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 28553593.25,
    "totalBienesFinal": 25886616,
    "totalDeudasFinal": 8000000,
    "patrimonioNeto": 17886616,
    "ingresosAnuales": 38534916.6,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "Modelo: PEUGEOT2008 FELINE 1.6 TIPTRONIC 6 115SEDAN 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "50.00",
        "fechaIngreso": "02/2019",
        "importe": 0
      },
      {
        "descripcion": "Modelo: TOYOTACOROLLA SEG HEV 1.8 ECVTSEDAN 4 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "50.00",
        "fechaIngreso": "12/2023",
        "importe": 10520500
      },
      {
        "descripcion": "TOYOTA|COROLLA SEG HEV 1.8 ECVT|SEDAN 4 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "50.00",
        "fechaIngreso": "12/2023",
        "importe": 5260250
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jose-luis-garrido": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 104006391.81,
    "totalBienesFinal": 152217676.54,
    "totalDeudasFinal": 2853401.75,
    "patrimonioNeto": 149364274.79,
    "ingresosAnuales": 46733445.86,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "RIO GALLEGOS",
        "porcentaje": "16.66",
        "fechaIngreso": "10/01/2005",
        "importe": 44469479.11,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: RIO GALLEGOS -Fecha de ingreso al patrimonio: 10/01/2005"
      },
      {
        "tipo": "LOCAL",
        "destino": "OTROS",
        "localidad": "RIO GALLEGOS",
        "porcentaje": "33.33",
        "fechaIngreso": "10/01/2005",
        "importe": 11976145.27,
        "descripcionOriginal": "Tipo: LOCAL -Destino: OTROS -Localidad: RIO GALLEGOS -Fecha de ingreso al patrimonio: 10/01/2005"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "RIO GALLEGOS",
        "porcentaje": "33.33",
        "fechaIngreso": "10/01/2005",
        "importe": 10265267.37,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: RIO GALLEGOS -Fecha de ingreso al patrimonio: 10/01/2005"
      },
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "RIO GALLEGOS",
        "porcentaje": "33.33",
        "fechaIngreso": "10/01/2005",
        "importe": 20530534.75,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: RIO GALLEGOS -Fecha de ingreso al patrimonio: 10/01/2005"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "CITROEN|C4 LOUNGE 1.6I THP 163 AT6 EXCLUSIVE PACK SELECT|SEDAN 4 PUERTAS",
        "anioFabricacion": "2015",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2019",
        "importe": 6610200
      }
    ],
    "localidadesInmuebles": [
      "Rio Gallegos"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jorge-antonio-avila": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "diputado nacional",
    "organismo": "nan",
    "totalBienesInicio": 207200907.76,
    "totalBienesFinal": 445894074.74,
    "totalDeudasFinal": 8214000,
    "patrimonioNeto": 437680074.74,
    "ingresosAnuales": 240566978.64,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "COMODORO RIVADAVIA",
        "porcentaje": "100.00",
        "fechaIngreso": "02/06/2022",
        "importe": 21000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: COMODORO RIVADAVIA -Provincia: CHUBUT -Fecha de ingreso al patrimonio: 02/06/2022"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "COMODORO RIVADAVIA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/12/2000",
        "importe": 3716977.85,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: COMODORO RIVADAVIA -Provincia: CHUBUT -Fecha de ingreso al patrimonio: 01/12/2000"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "COMODORO RIVADAVIA",
        "porcentaje": "100.00",
        "fechaIngreso": "06/01/2023",
        "importe": 20000000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: COMODORO RIVADAVIA -Provincia: CHUBUT -Fecha de ingreso al patrimonio: 06/01/2023"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "09/10/2023",
        "importe": 60000000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 09/10/2023"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDASDH125T 22SCOOTER",
        "anioFabricacion": "2011",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2011",
        "importe": 499000
      },
      {
        "descripcion": "Modelo: TOYOTACOROLLA SE-G 1.8 A TSEDAN 4 PUERTAS",
        "anioFabricacion": "2010",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2014",
        "importe": 7260400
      },
      {
        "descripcion": "Modelo: TOYOTASW4 4X4 SRX 2.8 TDI 6 A T 7ATODO TERRENO",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2018",
        "importe": 35534000
      },
      {
        "descripcion": "Modelo: TOYOTAHILUX 4X4 D C SRX 2.8 TDI 6 A TPICK-UP",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2021",
        "importe": 28839000
      },
      {
        "descripcion": "Modelo: TOYOTAYARIS S 1.5 CVTSEDAN 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2022",
        "importe": 12700000
      },
      {
        "descripcion": "Modelo: TOYOTAHILUX 4X4 DC SRX 2.8 TDI 6 ATPICK-UP",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2023",
        "importe": 42340000
      }
    ],
    "localidadesInmuebles": [
      "Comodoro Rivadavia",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "alejandra-torres": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada Nacional",
    "organismo": "nan",
    "totalBienesInicio": 141139280.82,
    "totalBienesFinal": 319307270.68,
    "totalDeudasFinal": 310194.39,
    "patrimonioNeto": 318997076.29,
    "ingresosAnuales": 70633472.65,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "CERRO DE LAS ROSAS",
        "porcentaje": "100.00",
        "fechaIngreso": "01/07/1997",
        "importe": 63518446.69,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: CERRO DE LAS ROSAS -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 01/07/1997"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "BARRIO GENERAL PAZ",
        "porcentaje": "100.00",
        "fechaIngreso": "23/12/2014",
        "importe": 15580822.74,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: BARRIO GENERAL PAZ -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 23/12/2014"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "CIUDAD DE CORDOBA NORTE",
        "porcentaje": "100.00",
        "fechaIngreso": "10/09/2020",
        "importe": 790000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: CIUDAD DE CORDOBA NORTE -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 10/09/2020"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "CORDOBA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/07/1997",
        "importe": 139415830.7,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: CORDOBA -Fecha de ingreso al patrimonio: 01/07/1997"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "Córdoba",
        "porcentaje": "100.00",
        "fechaIngreso": "10/09/2020",
        "importe": 17535784.58,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: Córdoba -Fecha de ingreso al patrimonio: 10/09/2020"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CORDOBA",
        "porcentaje": "100.00",
        "fechaIngreso": "23/12/2014",
        "importe": 54607671.94,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CORDOBA -Fecha de ingreso al patrimonio: 23/12/2014"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "JEEP|COMPASS LONGITUDE 2.4 AT9 AWD|TODO TERRENO",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2019",
        "importe": 26000000
      }
    ],
    "localidadesInmuebles": [
      "Cerro De Las Rosas",
      "Barrio General Paz",
      "Ciudad De Cordoba Norte",
      "Cordoba",
      "Córdoba"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jorge-rizzotti": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 60042502.99,
    "totalBienesFinal": 167528553.6,
    "totalDeudasFinal": 6093329.15,
    "patrimonioNeto": 161435224.45,
    "ingresosAnuales": 63889595.49,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN SALVADOR DE JUJUY",
        "porcentaje": "100.00",
        "fechaIngreso": "01/07/1998",
        "importe": 58826337.29,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN SALVADOR DE JUJUY -Provincia: JUJUY -Fecha de ingreso al patrimonio: 01/07/1998"
      },
      {
        "tipo": "RURALES CON VIVIENDA",
        "destino": "OTRO",
        "localidad": "SAN ANTONIO",
        "porcentaje": "100.00",
        "fechaIngreso": "01/08/2003",
        "importe": 5386056.81,
        "descripcionOriginal": "Tipo: RURALES CON VIVIENDA -Destino: OTRO -Localidad: SAN ANTONIO -Provincia: JUJUY -Fecha de ingreso al patrimonio: 01/08/2003"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "20/01/2020",
        "importe": 35347170.32,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 20/01/2020"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "San Salvador De Jujuy",
      "San Antonio",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "lourdes-micaela-arrieta": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "DIPUTADA DE LA NACION",
    "organismo": "nan",
    "totalBienesInicio": 278.27,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "sergio-eduardo-capozzi": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 52966280.96,
    "totalBienesFinal": 120465120.77,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 120465120.77,
    "ingresosAnuales": 48058085.06,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/1990",
        "importe": 13658152.53,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 01/01/1990"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN CARLOS DE BARILOCHE",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/2001",
        "importe": 9091465,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN CARLOS DE BARILOCHE -Provincia: RIO NEGRO -Fecha de ingreso al patrimonio: 01/01/2001"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "OTRO",
        "localidad": "SAN CARLOS DE BARILOCHE",
        "porcentaje": "50.00",
        "fechaIngreso": "01/09/2006",
        "importe": 6892730,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: OTRO -Localidad: SAN CARLOS DE BARILOCHE -Provincia: RIO NEGRO -Fecha de ingreso al patrimonio: 01/09/2006"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SAN CARLOS DE BARILOCHE",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/2011",
        "importe": 534097.77,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SAN CARLOS DE BARILOCHE -Provincia: RIO NEGRO -Fecha de ingreso al patrimonio: 01/01/2011"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SAN CARLOS DE BARILOCHE",
        "porcentaje": "50.00",
        "fechaIngreso": "01/02/2011",
        "importe": 6871680.5,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SAN CARLOS DE BARILOCHE -Provincia: RIO NEGRO -Fecha de ingreso al patrimonio: 01/02/2011"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "MAR DEL PLATA NORTE",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/2015",
        "importe": 2320061.5,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: MAR DEL PLATA NORTE -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 01/01/2015"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SAN CARLOS DE BARILOCHE",
        "porcentaje": "50.00",
        "fechaIngreso": "03/12/2018",
        "importe": 1237516,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SAN CARLOS DE BARILOCHE -Provincia: RIO NEGRO -Fecha de ingreso al patrimonio: 03/12/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: CHEVROLETCHEVROLET TRACKER AWD LTZ+TODO TERRENO",
        "anioFabricacion": "2018",
        "porcentaje": "50.00",
        "fechaIngreso": "03/2022",
        "importe": 10000000
      },
      {
        "descripcion": "Modelo: MERCEDES BENZML 350TODO TERRENO",
        "anioFabricacion": "2004",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2021",
        "importe": 6945000
      },
      {
        "descripcion": "Modelo: FORDFIESTA 1.6L TITANIUM POWERSHIFTSEDAN 5 PUERTAS",
        "anioFabricacion": "2014",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2021",
        "importe": 4987500
      },
      {
        "descripcion": "Modelo: MG B",
        "anioFabricacion": "1962",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2021",
        "importe": 20000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal",
      "San Carlos De Bariloche",
      "Mar Del Plata Norte"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jose-nunez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 76081506.84,
    "totalBienesFinal": 110473646.44,
    "totalDeudasFinal": 8132227.72,
    "patrimonioNeto": 102341418.72,
    "ingresosAnuales": 44975698.56,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "ROSARIO",
        "porcentaje": "100.00",
        "fechaIngreso": "14/12/2022",
        "importe": 36735300,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 14/12/2022"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "ROSARIO",
        "porcentaje": "100.00",
        "fechaIngreso": "24/09/2014",
        "importe": 3420254.89,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: ALQUILER / CONTRAPRESTACION -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 24/09/2014"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "ROSARIO",
        "porcentaje": "100.00",
        "fechaIngreso": "10/11/2015",
        "importe": 0,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 10/11/2015"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: JEEPCOMPASS LONGITUDE 2.4 AT9 AWDTODO TERRENO",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2022",
        "importe": 0
      },
      {
        "descripcion": "Modelo: JEEPCOMMANDER LIMITED GSE 1.3T AT6 4X2RURAL 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2023",
        "importe": 49400000
      }
    ],
    "localidadesInmuebles": [
      "Rosario"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gisela-scaglia": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 32885042.72,
    "totalBienesFinal": 58142090.72,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 58142090.72,
    "ingresosAnuales": 163313694,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "GÁLVEZ",
        "porcentaje": "100.00",
        "fechaIngreso": "10/06/2017",
        "importe": 4656653,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: GÁLVEZ -Fecha de ingreso al patrimonio: 10/06/2017"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "ALQUILER",
        "localidad": "GALVEZ",
        "porcentaje": "100.00",
        "fechaIngreso": "16/12/2020",
        "importe": 5233814.9,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: ALQUILER -Localidad: GALVEZ -Fecha de ingreso al patrimonio: 16/12/2020"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "FORD|NUEVA RANGER DC 4X4 LTD AT 3.2L D|PICK-UP",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2023",
        "importe": 35675100
      }
    ],
    "localidadesInmuebles": [
      "Gálvez",
      "Galvez"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "pablo-outes": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 77426149.81,
    "totalBienesFinal": 84623308.81,
    "totalDeudasFinal": 14293875.7,
    "patrimonioNeto": 70329433.11,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "SALTA CAPITAL",
        "porcentaje": "50.00",
        "fechaIngreso": "20/10/2007",
        "importe": 1302000,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: SALTA CAPITAL -Fecha de ingreso al patrimonio: 20/10/2007"
      },
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "SALTA CAPITAL",
        "porcentaje": "33.33",
        "fechaIngreso": "07/02/1979",
        "importe": 59886010.8,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: SALTA CAPITAL -Fecha de ingreso al patrimonio: 07/02/1979"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Salta Capital"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "yolanda-vega": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "diputada nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 12940674,
    "totalBienesFinal": 73054692.09,
    "totalDeudasFinal": 14921000,
    "patrimonioNeto": 58133692.09,
    "ingresosAnuales": 50462173.32,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTACOROLLA SE-G 1.8 CVTSEDAN 4 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2018",
        "importe": 10773200
      },
      {
        "descripcion": "SW4 4X4 SRX 2.8 TDI 6 AT 7A",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2024",
        "importe": 62024558
      },
      {
        "descripcion": "TOYOTA COROLLA SE-G 1.8 A/T",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2018",
        "importe": 541700
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gerardo-gustavo-gonzalez": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "nan",
    "organismo": "nan",
    "totalBienesInicio": 16853444.7,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "TOYOTA ETIOS X 1.5 6M/T SEDAN 4 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2019",
        "importe": 11076000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "elia-marina-fernandez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 56674030.91,
    "totalBienesFinal": 107477936.63,
    "totalDeudasFinal": 14220967.26,
    "patrimonioNeto": 93256969.36999999,
    "ingresosAnuales": 45913600.82,
    "inmuebles": [
      {
        "tipo": "RURALES CON VIVIENDA",
        "destino": "INVERSION",
        "localidad": "SAN ANTONIO DE PACLIN",
        "porcentaje": "100.00",
        "fechaIngreso": "11/04/2002",
        "importe": 1069288,
        "descripcionOriginal": "Tipo: RURALES CON VIVIENDA -Destino: INVERSION -Localidad: SAN ANTONIO DE PACLIN -Provincia: CATAMARCA -Fecha de ingreso al patrimonio: 11/04/2002"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "SAN ANTONIO DE PACLIN",
        "porcentaje": "100.00",
        "fechaIngreso": "09/09/2004",
        "importe": 1069288,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: SAN ANTONIO DE PACLIN -Provincia: CATAMARCA -Fecha de ingreso al patrimonio: 09/09/2004"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "SAN ANTONIO DE PACLIN",
        "porcentaje": "100.00",
        "fechaIngreso": "26/04/2007",
        "importe": 1069288,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: SAN ANTONIO DE PACLIN -Provincia: CATAMARCA -Fecha de ingreso al patrimonio: 26/04/2007"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "50.00",
        "fechaIngreso": "10/05/2006",
        "importe": 1045384,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 10/05/2006"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "RECREO O VERANEO / CESION GRATUITA",
        "localidad": "EL MOLLAR",
        "porcentaje": "100.00",
        "fechaIngreso": "01/10/2006",
        "importe": 13604564.76,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: RECREO O VERANEO / CESION GRATUITA -Localidad: EL MOLLAR -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 01/10/2006"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDA MOTOCICLETA XR 250",
        "anioFabricacion": "2008",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2008",
        "importe": 0
      }
    ],
    "localidadesInmuebles": [
      "San Antonio De Paclin",
      "San Miguel De Tucuman",
      "El Mollar"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gladys-medina": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA DE LA NACION",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 24154334.36,
    "totalBienesFinal": 54748623.7,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 54748623.7,
    "ingresosAnuales": 46205263.48,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "BANDA DEL RIO SALI",
        "porcentaje": "100.00",
        "fechaIngreso": "16/11/1989",
        "importe": 20565384.9,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: BANDA DEL RIO SALI -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 16/11/1989"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "RECREO O VERANEO / CESION GRATUITA",
        "localidad": "TAFI VIEJO",
        "porcentaje": "100.00",
        "fechaIngreso": "21/01/2011",
        "importe": 6108443.55,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: RECREO O VERANEO / CESION GRATUITA -Localidad: TAFI VIEJO -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 21/01/2011"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "BANDA DEL RIO SALI",
        "porcentaje": "50.00",
        "fechaIngreso": "02/01/2018",
        "importe": 4624890.42,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: BANDA DEL RIO SALI -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 02/01/2018"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "100.00",
        "fechaIngreso": "15/08/2018",
        "importe": 8506247.16,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 15/08/2018"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "50.00",
        "fechaIngreso": "06/12/2019",
        "importe": 4253123.58,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 06/12/2019"
      },
      {
        "tipo": "COCHERA",
        "destino": "INVERSION",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "50.00",
        "fechaIngreso": "06/12/2019",
        "importe": 192150,
        "descripcionOriginal": "Tipo: COCHERA -Destino: INVERSION -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 06/12/2019"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Banda Del Rio Sali",
      "Tafi Viejo",
      "San Miguel De Tucuman"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "nancy-viviana-picon-martinez": {
    "anio": 2023,
    "tipoDeclaracion": "Inicial",
    "cargo": "DIPUTADA NACIONAL TITULAR EN PRIMER TERMINO",
    "organismo": "nan",
    "totalBienesInicio": 8203500,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "RAWSON",
        "porcentaje": "50.00",
        "fechaIngreso": "05/06/2005",
        "importe": 4562500,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: RAWSON -Fecha de ingreso al patrimonio: 05/06/2005"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "TOYOTA COROLLA 2.0 XEI CVT SEDAN 4 PUERTA",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2022",
        "importe": 3641000
      }
    ],
    "localidadesInmuebles": [
      "Rawson"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "karina-maureira": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 9518664.49,
    "totalBienesFinal": 16303880.01,
    "totalDeudasFinal": 78860.53,
    "patrimonioNeto": 16225019.48,
    "ingresosAnuales": 18986073.34,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "GENERAL ROCA",
        "porcentaje": "100.00",
        "fechaIngreso": "13/06/2012",
        "importe": 920770.56,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: GENERAL ROCA -Fecha de ingreso al patrimonio: 13/06/2012"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "CITROEN|C4 CACTUS PURETECH 110 S&S AT6 SHINE|SEDAN 5 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2018",
        "importe": 13968100
      }
    ],
    "localidadesInmuebles": [
      "General Roca"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "hilda-aguirre": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA DE LA NACION ARGENTINA",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 24770480,
    "totalBienesFinal": 45977379,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 45977379,
    "ingresosAnuales": 39721883.77,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "VOLKSWAGEN|AMAROK DC 2.0L TDI 180CV HIGHLINE 4X2 AUT EU5|PICK-UP",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2022",
        "importe": 20786200
      },
      {
        "descripcion": "VOLKSWAGEN|TAOS HIGHLINE 250 TSI AT|RURAL 4/5 PUERTAS",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2024",
        "importe": 41260000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "sabrina-ajmechet": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 78432747.35,
    "totalBienesFinal": 150224669.49,
    "totalDeudasFinal": 8461698.36,
    "patrimonioNeto": 141762971.13,
    "ingresosAnuales": 88741868.53,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "10/07/2008",
        "importe": 26567032.72,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 10/07/2008"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "05/08/2021",
        "importe": 52074581.75,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 05/08/2021"
      },
      {
        "tipo": "BAULERA",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "05/08/2021",
        "importe": 935536.76,
        "descripcionOriginal": "Tipo: BAULERA -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 05/08/2021"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTACOROLLA XEI 1.8 CVTSEDAN 4 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2018",
        "importe": 14112800
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "ernesto-pipi-ali": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 102817513,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "SAN LUIS",
        "porcentaje": "100.00",
        "fechaIngreso": "08/06/2018",
        "importe": 80000000,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: SAN LUIS -Fecha de ingreso al patrimonio: 08/06/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "VOLKSWAGEN|AMAROK DC 2.0L TDI 180 CV 818|PICK-UP",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2019",
        "importe": 22230000
      }
    ],
    "localidadesInmuebles": [
      "San Luis"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "pablo-ansaloni": {
    "anio": 2023,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 31917309.09,
    "totalBienesFinal": 91632892.68,
    "totalDeudasFinal": 538000,
    "patrimonioNeto": 91094892.68,
    "ingresosAnuales": 3757519.34,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "COLON",
        "porcentaje": "50.00",
        "fechaIngreso": "19/02/2019",
        "importe": 1528838.98,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: COLON -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 19/02/2019"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "COLON",
        "porcentaje": "100.00",
        "fechaIngreso": "22/12/2005",
        "importe": 2310528.69,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: COLON -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 22/12/2005"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: PEUGEOT308 FELINE THPSEDAN 5 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2017",
        "importe": 0
      },
      {
        "descripcion": "Modelo: PEUGEOT3008 GT PACK THP TIPTRONIC AM22RURAL 5 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "50.00",
        "fechaIngreso": "06/2022",
        "importe": 10256950
      },
      {
        "descripcion": "Modelo: VOLKSWAGENVOLKSWAGEN VENTO COMFORTLINE 1.4TSI 150CV AQSEDAN 4 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2023",
        "importe": 12176700
      }
    ],
    "localidadesInmuebles": [
      "Colon"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "damian-arabia": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputado Nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 140577080,
    "totalBienesFinal": 206455482.86,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 206455482.86,
    "ingresosAnuales": 41583831.52,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "CIUDAD AUTONOMA DE BUENOS AIRES",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2015",
        "importe": 138000000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: CIUDAD AUTONOMA DE BUENOS AIRES -Fecha de ingreso al patrimonio: 01/01/2015"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "FIAT CRONOS PRECISION 1.8",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2022",
        "importe": 19500000
      }
    ],
    "localidadesInmuebles": [
      "Ciudad Autonoma De Buenos Aires"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jorge-neri-araujo-hernandez": {
    "anio": 2023,
    "tipoDeclaracion": "Inicial",
    "cargo": "DIPUTADO",
    "organismo": "nan",
    "totalBienesInicio": 55000000,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "RIOP GRANDE",
        "porcentaje": "100.00",
        "fechaIngreso": "10/07/2002",
        "importe": 55000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: RIOP GRANDE -Fecha de ingreso al patrimonio: 10/07/2002"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Riop Grande"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "alberto-arrua": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 1571939,
    "totalBienesFinal": 3251745,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 3251745,
    "ingresosAnuales": 44051118.59,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "martin-aveiro": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 70269998,
    "totalBienesFinal": 106868987.32,
    "totalDeudasFinal": 23390946,
    "patrimonioNeto": 83478041.32,
    "ingresosAnuales": 52551635.24,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "COLONIA DE LAS ROSAS TUNUYAN",
        "porcentaje": "100.00",
        "fechaIngreso": "20/12/2012",
        "importe": 8925000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: COLONIA DE LAS ROSAS TUNUYAN -Fecha de ingreso al patrimonio: 20/12/2012"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "LOS CHACAYES",
        "porcentaje": "100.00",
        "fechaIngreso": "24/04/2022",
        "importe": 800000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: LOS CHACAYES -TUNUYAN -Fecha de ingreso al patrimonio: 24/04/2022"
      },
      {
        "tipo": "LOCAL",
        "destino": "OTROS",
        "localidad": "VISTA FLORES TUNUYAN",
        "porcentaje": "33.33",
        "fechaIngreso": "01/12/2015",
        "importe": 3366386.32,
        "descripcionOriginal": "Tipo: LOCAL -Destino: OTROS -Localidad: VISTA FLORES TUNUYAN -Fecha de ingreso al patrimonio: 01/12/2015"
      },
      {
        "tipo": "MEJORAS CONSTRUCCION",
        "destino": "INVERSION",
        "localidad": "LOS CHACAYES",
        "porcentaje": "100.00",
        "fechaIngreso": "24/04/2022",
        "importe": 11800000,
        "descripcionOriginal": "Tipo: MEJORAS CONSTRUCCION -Destino: INVERSION -Localidad: LOS CHACAYES -TUNUYAN -Fecha de ingreso al patrimonio: 24/04/2022"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "FORD RANGER DC XLT AT 3.2L DSL PICK-UP",
        "anioFabricacion": "2015",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2020",
        "importe": 20720500
      },
      {
        "descripcion": "MOTOMEL 250CC",
        "anioFabricacion": "2012",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2016",
        "importe": 3078912
      },
      {
        "descripcion": "KAWASAKI 300CC",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2016",
        "importe": 3648000
      },
      {
        "descripcion": "FIAT 125",
        "anioFabricacion": "1976",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2003",
        "importe": 136800
      },
      {
        "descripcion": "RENAULT KANGOO PH3 CONFOR 1.6 1P FURGON",
        "anioFabricacion": "2015",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2024",
        "importe": 12200400
      }
    ],
    "localidadesInmuebles": [
      "Colonia De Las Rosas Tunuyan",
      "Los Chacayes",
      "Vista Flores Tunuyan"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "belen-avico": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL POR LA PROVINCIA DE CORDOBA",
    "organismo": "CULTIVATE LA BUENA VIDA S.A.",
    "totalBienesInicio": 20327882.97,
    "totalBienesFinal": 82908303.71,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 82908303.71,
    "ingresosAnuales": 51420916.05,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "RIO CUARTO",
        "porcentaje": "100.00",
        "fechaIngreso": "10/07/2015",
        "importe": 1987226,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: RIO CUARTO -Fecha de ingreso al patrimonio: 10/07/2015"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Rio Cuarto"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "fernanda-avila": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada Nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 30085320.58,
    "totalBienesFinal": 64588200.24,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 64588200.24,
    "ingresosAnuales": 39672286.08,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "CHEVROLET CRUZE 5P 1.4 TURBO LTZAT",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2020",
        "importe": 15279700
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "luis-eugenio-basterra": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 41338636.4,
    "totalBienesFinal": 80861718.35,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 80861718.35,
    "ingresosAnuales": 41006023.36,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "RESISTENCIA",
        "porcentaje": "33.00",
        "fechaIngreso": "01/04/2005",
        "importe": 7739244.92,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: RESISTENCIA -Provincia: CHACO -Fecha de ingreso al patrimonio: 01/04/2005"
      },
      {
        "tipo": "COCHERA",
        "destino": "OTRO",
        "localidad": "RESISTENCIA",
        "porcentaje": "33.00",
        "fechaIngreso": "01/04/2005",
        "importe": 256254.79,
        "descripcionOriginal": "Tipo: COCHERA -Destino: OTRO -Localidad: RESISTENCIA -Provincia: CHACO -Fecha de ingreso al patrimonio: 01/04/2005"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "FORMOSA",
        "porcentaje": "100.00",
        "fechaIngreso": "19/04/2010",
        "importe": 9122791.94,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: FORMOSA -Provincia: FORMOSA -Fecha de ingreso al patrimonio: 19/04/2010"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "HERRADURA",
        "porcentaje": "50.00",
        "fechaIngreso": "23/08/2021",
        "importe": 125000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: HERRADURA -Provincia: FORMOSA -Fecha de ingreso al patrimonio: 23/08/2021"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "HERRADURA",
        "porcentaje": "50.00",
        "fechaIngreso": "21/08/2021",
        "importe": 125000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: HERRADURA -Provincia: FORMOSA -Fecha de ingreso al patrimonio: 21/08/2021"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: RENAULTCLIO MIO 5P CONFORT PLUS ABS ABCPSEDAN 5 PUERTAS",
        "anioFabricacion": "2014",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2014",
        "importe": 5488900
      }
    ],
    "localidadesInmuebles": [
      "Resistencia",
      "Formosa",
      "Herradura"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "beltran-benedit": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 32609375,
    "totalBienesFinal": 43095152,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 43095152,
    "ingresosAnuales": 16516929.36,
    "inmuebles": [
      {
        "tipo": "RURALES CON VIVIENDA",
        "destino": "CASA HABITACION",
        "localidad": "DIAMANTE",
        "porcentaje": "50.00",
        "fechaIngreso": "08/04/2011",
        "importe": 38700000,
        "descripcionOriginal": "Tipo: RURALES CON VIVIENDA -Destino: CASA HABITACION -Localidad: DIAMANTE -Fecha de ingreso al patrimonio: 08/04/2011"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Diamante"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "rocio-bonacci": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 0,
    "totalBienesFinal": 124930099.42,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 124930099.42,
    "ingresosAnuales": 53914227.36,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "FUNES",
        "porcentaje": "50.00",
        "fechaIngreso": "01/02/2024",
        "importe": 30000000,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: FUNES -Fecha de ingreso al patrimonio: 01/02/2024"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "ALQUILER",
        "localidad": "FUNES",
        "porcentaje": "50.00",
        "fechaIngreso": "01/02/2024",
        "importe": 30000000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: ALQUILER -Localidad: FUNES -Fecha de ingreso al patrimonio: 01/02/2024"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "ROSARIO",
        "porcentaje": "100.00",
        "fechaIngreso": "01/06/2024",
        "importe": 12000000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: ROSARIO -Fecha de ingreso al patrimonio: 01/06/2024"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Funes",
      "Rosario"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "alejandro-bongiovanni": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "FUNDACION DEL ORDEN SOCIAL DE LA LIBERTAD",
    "totalBienesInicio": 1628606.59,
    "totalBienesFinal": 23895873.88,
    "totalDeudasFinal": 240031.48,
    "patrimonioNeto": 23655842.4,
    "ingresosAnuales": 51101540.44,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gustavo-bordet": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL POR ENTRE RIOS",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 202780443.21,
    "totalBienesFinal": 395809334.04,
    "totalDeudasFinal": 222387.78,
    "patrimonioNeto": 395586946.26000005,
    "ingresosAnuales": 45519347.12,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "CONCORDIA",
        "porcentaje": "100.00",
        "fechaIngreso": "12/12/2000",
        "importe": 19609439.81,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: CONCORDIA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 12/12/2000"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "CONCORDIA",
        "porcentaje": "100.00",
        "fechaIngreso": "28/02/2000",
        "importe": 2857269.26,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: CONCORDIA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 28/02/2000"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "CONCORDIA",
        "porcentaje": "100.00",
        "fechaIngreso": "10/12/2007",
        "importe": 35458052.4,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: ALQUILER / CONTRAPRESTACION -Localidad: CONCORDIA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 10/12/2007"
      },
      {
        "tipo": "COCHERA",
        "destino": "OTRO",
        "localidad": "CONCORDIA",
        "porcentaje": "100.00",
        "fechaIngreso": "08/07/2009",
        "importe": 343732.66,
        "descripcionOriginal": "Tipo: COCHERA -Destino: OTRO -Localidad: CONCORDIA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 08/07/2009"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "CONCORDIA",
        "porcentaje": "100.00",
        "fechaIngreso": "08/07/2009",
        "importe": 381930.93,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: CONCORDIA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 08/07/2009"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "CONCORDIA",
        "porcentaje": "100.00",
        "fechaIngreso": "08/07/2009",
        "importe": 4730640.51,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: ALQUILER / CONTRAPRESTACION -Localidad: CONCORDIA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 08/07/2009"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "CONCORDIA",
        "porcentaje": "100.00",
        "fechaIngreso": "02/12/2011",
        "importe": 12386084.17,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: CONCORDIA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 02/12/2011"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "PRONUNCIAMIENTO",
        "porcentaje": "100.00",
        "fechaIngreso": "05/05/2015",
        "importe": 1195248.87,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: PRONUNCIAMIENTO -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 05/05/2015"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "CONCORDIA",
        "porcentaje": "100.00",
        "fechaIngreso": "20/09/2016",
        "importe": 82296898.62,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: CONCORDIA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 20/09/2016"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "PARANA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/09/2009",
        "importe": 2814753.95,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: PARANA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 01/09/2009"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "CONCORDIA",
        "porcentaje": "100.00",
        "fechaIngreso": "23/12/2020",
        "importe": 3142743.59,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: CONCORDIA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 23/12/2020"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "SAN JUSTO",
        "porcentaje": "100.00",
        "fechaIngreso": "18/09/2022",
        "importe": 13974989.11,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: SAN JUSTO -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 18/09/2022"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "PRONUNCIAMIENTO",
        "porcentaje": "33.33",
        "fechaIngreso": "23/02/2023",
        "importe": 35560280.02,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: ALQUILER / CONTRAPRESTACION -Localidad: PRONUNCIAMIENTO -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 23/02/2023"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "PRONUNCIAMIENTO",
        "porcentaje": "16.66",
        "fechaIngreso": "19/05/2023",
        "importe": 1891842.57,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: PRONUNCIAMIENTO -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 19/05/2023"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTACOROLLA XEI 1.8 M TSEDAN 4 PUERTAS",
        "anioFabricacion": "2009",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2009",
        "importe": 5265800
      }
    ],
    "localidadesInmuebles": [
      "Concordia",
      "Pronunciamiento",
      "Parana",
      "San Justo"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "alejandrina-borgatta": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 8223519.73,
    "totalBienesFinal": 30309300,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 30309300,
    "ingresosAnuales": 22085780.27,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "ROSARIO",
        "porcentaje": "50.00",
        "fechaIngreso": "14/11/2024",
        "importe": 17823750,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: ROSARIO -Fecha de ingreso al patrimonio: 14/11/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "JEEP|COMPASS SPORT 2.4 MT6 FWD|RURAL 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "50.00",
        "fechaIngreso": "10/2024",
        "importe": 9878450
      }
    ],
    "localidadesInmuebles": [
      "Rosario"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gabriel-bornoroni": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 392809638.68,
    "totalBienesFinal": 504784358.67,
    "totalDeudasFinal": 65330311.83,
    "patrimonioNeto": 439454046.84000003,
    "ingresosAnuales": 59691254.85,
    "inmuebles": [
      {
        "tipo": "LOCAL",
        "destino": "INVERSION",
        "localidad": "BARRIO ALTO ALBERDI",
        "porcentaje": "50.00",
        "fechaIngreso": "01/09/1999",
        "importe": 25463439,
        "descripcionOriginal": "Tipo: LOCAL -Destino: INVERSION -Localidad: BARRIO ALTO ALBERDI -Fecha de ingreso al patrimonio: 01/09/1999"
      },
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "BARRIO ALTO ALBERDI",
        "porcentaje": "100.00",
        "fechaIngreso": "26/04/2006",
        "importe": 48306863,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: BARRIO ALTO ALBERDI -Fecha de ingreso al patrimonio: 26/04/2006"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTROS",
        "localidad": "BARRIO CENTRO SUR",
        "porcentaje": "50.00",
        "fechaIngreso": "02/10/2008",
        "importe": 15051347,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTROS -Localidad: BARRIO CENTRO SUR -Fecha de ingreso al patrimonio: 02/10/2008"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "BARRIO ALTO ALBERDI",
        "porcentaje": "100.00",
        "fechaIngreso": "02/06/2006",
        "importe": 31454680,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: BARRIO ALTO ALBERDI -Fecha de ingreso al patrimonio: 02/06/2006"
      },
      {
        "tipo": "LOCAL",
        "destino": "ALQUILER",
        "localidad": "BARIO ALTO ALBERDI",
        "porcentaje": "100.00",
        "fechaIngreso": "19/07/2012",
        "importe": 63138894,
        "descripcionOriginal": "Tipo: LOCAL -Destino: ALQUILER -Localidad: BARIO ALTO ALBERDI -Fecha de ingreso al patrimonio: 19/07/2012"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "CORDOBA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2015",
        "importe": 19885950,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: CORDOBA -Fecha de ingreso al patrimonio: 01/01/2015"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "CORDOBA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/11/2016",
        "importe": 25092227,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: CORDOBA -Fecha de ingreso al patrimonio: 01/11/2016"
      },
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "LA CALERA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/04/2016",
        "importe": 90778446,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: LA CALERA -Fecha de ingreso al patrimonio: 01/04/2016"
      },
      {
        "tipo": "LOCAL",
        "destino": "OTROS",
        "localidad": "CORDOBA",
        "porcentaje": "100.00",
        "fechaIngreso": "09/11/2018",
        "importe": 16060266,
        "descripcionOriginal": "Tipo: LOCAL -Destino: OTROS -Localidad: CORDOBA -Fecha de ingreso al patrimonio: 09/11/2018"
      },
      {
        "tipo": "LOCAL",
        "destino": "OTROS",
        "localidad": "CORDOBA",
        "porcentaje": "100.00",
        "fechaIngreso": "29/10/2020",
        "importe": 27731340,
        "descripcionOriginal": "Tipo: LOCAL -Destino: OTROS -Localidad: CORDOBA -Fecha de ingreso al patrimonio: 29/10/2020"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "NISSAN KICKS EXCLUSIVE CTV SEDAN 5 PUERTAS",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2021",
        "importe": 1437500
      },
      {
        "descripcion": "JEEP COMPASS LON GITUD 1.3 T",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2024",
        "importe": 39950000
      }
    ],
    "localidadesInmuebles": [
      "Barrio Alto Alberdi",
      "Barrio Centro Sur",
      "Bario Alto Alberdi",
      "Cordoba",
      "La Calera"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "myriam-bregman": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "CANDIDATA A DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 1664332.06,
    "totalBienesFinal": 3324896.81,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 3324896.81,
    "ingresosAnuales": 22302691.04,
    "inmuebles": [
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTROS",
        "localidad": "CIUDAD AUTONOMA DE BUENOS AIRES",
        "porcentaje": "25.00",
        "fechaIngreso": "26/11/2011",
        "importe": 31261.78,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTROS -Localidad: CIUDAD AUTONOMA DE BUENOS AIRES -Fecha de ingreso al patrimonio: 26/11/2011"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Ciudad Autonoma De Buenos Aires"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "eliana-bruno": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "JEFATURA OFICINA ORAN",
    "organismo": "ADMINISTRACION NACIONAL DE LA SEGURIDAD SOCIAL ANS",
    "totalBienesInicio": 88473155,
    "totalBienesFinal": 74261609,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 74261609,
    "ingresosAnuales": 25760836.52,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Oran",
        "porcentaje": "100.00",
        "fechaIngreso": "01/07/2011",
        "importe": 80000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Oran -Fecha de ingreso al patrimonio: 01/07/2011"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN RAMON DE LA NUEVA ORAN",
        "porcentaje": "100.00",
        "fechaIngreso": "01/07/2011",
        "importe": 62720000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN RAMON DE LA NUEVA ORAN -Provincia: SALTA -Fecha de ingreso al patrimonio: 01/07/2011"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "VOLKSWAGEN GOL TREND 1.6 |SEDAN 5 PUERTAS",
        "anioFabricacion": "2012",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2012",
        "importe": 3824300
      },
      {
        "descripcion": "VOLKSWAGEN GOL TREND 1.6 GP|SEDAN 5 PUERTAS",
        "anioFabricacion": "2014",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2014",
        "importe": 4230000
      },
      {
        "descripcion": "Modelo: VOLKSWAGENGOL TREND 1.6SEDAN 5 PUERTAS",
        "anioFabricacion": "2012",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2012",
        "importe": 3824300
      },
      {
        "descripcion": "Modelo: VOLKSWAGENGOL TREND 1.6 GPSEDAN 5 PUERTAS",
        "anioFabricacion": "2014",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2024",
        "importe": 4552800
      }
    ],
    "localidadesInmuebles": [
      "Oran",
      "San Ramon De La Nueva Oran"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "juan-fernando-brugge": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 56802358.11,
    "totalBienesFinal": 104030846.68,
    "totalDeudasFinal": 23724561,
    "patrimonioNeto": 80306285.68,
    "ingresosAnuales": 61692074.72,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "BARRIO CENTRO SUR",
        "porcentaje": "100.00",
        "fechaIngreso": "15/06/2018",
        "importe": 26571834.25,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: BARRIO CENTRO SUR -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 15/06/2018"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "CIUDAD DE CORDOBA SUR",
        "porcentaje": "100.00",
        "fechaIngreso": "15/09/2022",
        "importe": 7279396,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: CIUDAD DE CORDOBA SUR -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 15/09/2022"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "BARRIO GENERAL PAZ",
        "porcentaje": "100.00",
        "fechaIngreso": "22/05/2024",
        "importe": 22755172.39,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: BARRIO GENERAL PAZ -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 22/05/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENVOLKSWAGEN VENTO 2.5SEDAN 4 PUERTAS",
        "anioFabricacion": "2015",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2015",
        "importe": 12329300
      }
    ],
    "localidadesInmuebles": [
      "Barrio Centro Sur",
      "Ciudad De Cordoba Sur",
      "Barrio General Paz"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "santiago-cafiero": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL POR LA PROV DE BS AS",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 57675643.23,
    "totalBienesFinal": 110974631.12,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 110974631.12,
    "ingresosAnuales": 32141337.81,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "BOULOGNE",
        "porcentaje": "100.00",
        "fechaIngreso": "13/09/2013",
        "importe": 61181538.77,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: BOULOGNE -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 13/09/2013"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: CHEVROLETSONIC 1.6 LTZ M TSEDAN 5 PUERTAS",
        "anioFabricacion": "2016",
        "porcentaje": "50.00",
        "fechaIngreso": "08/2016",
        "importe": 0
      }
    ],
    "localidadesInmuebles": [
      "Boulogne"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "mariano-campero": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 21435414.59,
    "totalBienesFinal": 53890996,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 53890996,
    "ingresosAnuales": 50462173.45,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "Modelo: PEUGEOT2008 FELINE 1.6SEDAN 5 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2017",
        "importe": 10404300
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "celia-campitelli": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 23279932,
    "totalBienesFinal": 71771615.51,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 71771615.51,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "REAL SAYANA",
        "porcentaje": "100.00",
        "fechaIngreso": "16/10/1991",
        "importe": 0,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: REAL SAYANA -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 16/10/1991"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "REAL SAYANA",
        "porcentaje": "50.00",
        "fechaIngreso": "16/10/1991",
        "importe": 0,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: REAL SAYANA -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 16/10/1991"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "REAL SAYANA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/1991",
        "importe": 600000,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: REAL SAYANA -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 01/01/1991"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "REAL SAYANA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/1991",
        "importe": 6250000,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: REAL SAYANA -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 01/01/1991"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "REAL SAYANA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/1990",
        "importe": 0,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: REAL SAYANA -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 01/01/1990"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SANTIAGO DEL ESTERO",
        "porcentaje": "100.00",
        "fechaIngreso": "22/06/2012",
        "importe": 35600000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SANTIAGO DEL ESTERO -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 22/06/2012"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: CITROENC- ELYS?E VTI 115 AT6 SHINESEDAN 4 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2017",
        "importe": 7756100
      }
    ],
    "localidadesInmuebles": [
      "Real Sayana",
      "Santiago Del Estero"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "julieta-marisol-campo": {
    "anio": 2023,
    "tipoDeclaracion": "Baja",
    "cargo": "SUBSECRETARIA DE JUVENTUDES Y DIVERSIDADES",
    "organismo": "MINISTERIO DE DESARROLLO HUMANO",
    "totalBienesInicio": 756019,
    "totalBienesFinal": 9105759,
    "totalDeudasFinal": 247000,
    "patrimonioNeto": 8858759,
    "ingresosAnuales": 3214157.46,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "VOLKSWAGEN|GOL TREND 1.6 GP|SEDAN 3 PUERTAS",
        "anioFabricacion": "2014",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2017",
        "importe": 494500
      },
      {
        "descripcion": "TOYOTA|COROLLA 2.0 SEG CVT|SEDAN 4 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "50.00",
        "fechaIngreso": "03/2023",
        "importe": 8962000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "florencia-carignano": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada Nacional",
    "organismo": "nan",
    "totalBienesInicio": 88362002.69,
    "totalBienesFinal": 235979320.2,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 235979320.2,
    "ingresosAnuales": 54029296.34,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "29/07/2008",
        "importe": 23542137.99,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 29/07/2008"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "22/04/2015",
        "importe": 38260092.33,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 22/04/2015"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "25/06/2023",
        "importe": 92090053.68,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 25/06/2023"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTASW4 4X4 SRX 2.8 TDI 6 A T 7ATODO TERRENO",
        "anioFabricacion": "2020",
        "porcentaje": "65.00",
        "fechaIngreso": "06/2020",
        "importe": 14278550
      },
      {
        "descripcion": "Modelo: VOLKSWAGENTAOS HIGHLINE 250 TSI ATRURAL 4 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2023",
        "importe": 30630000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "sergio-guillermo-casas": {
    "anio": 2022,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 2989269.1,
    "totalBienesFinal": 4100749.1,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 4100749.1,
    "ingresosAnuales": 6903074.83,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "LA RIOJA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/02/1999",
        "importe": 1481357.96,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: LA RIOJA -Fecha de ingreso al patrimonio: 01/02/1999"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "SHAQUI",
        "porcentaje": "50.00",
        "fechaIngreso": "03/01/2005",
        "importe": 355634.88,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: SHAQUI -DEPTO SAN BLAS DE LOS SAUCES -Fecha de ingreso al patrimonio: 03/01/2005"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "RECREO O VERANEO",
        "localidad": "LA RIOJA",
        "porcentaje": "50.00",
        "fechaIngreso": "03/07/2012",
        "importe": 278436.26,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: RECREO O VERANEO -Localidad: LA RIOJA -Fecha de ingreso al patrimonio: 03/07/2012"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "RENAULT 12 1.6",
        "anioFabricacion": "1993",
        "porcentaje": "100.00",
        "fechaIngreso": "11/1993",
        "importe": 20000
      },
      {
        "descripcion": "HILUX 4X4D/C SRX 2.8 TDI  MT PICK-UP",
        "anioFabricacion": "2017",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2017",
        "importe": 530000
      }
    ],
    "localidadesInmuebles": [
      "La Rioja",
      "Shaqui"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2022 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "carlos-daniel-castagneto": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 298695593.04,
    "totalBienesFinal": 447882984.88,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 447882984.88,
    "ingresosAnuales": 90515212.8,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "LA PLATA SUDESTE CALLE 50 AMBAS VEREDAS",
        "porcentaje": "100.00",
        "fechaIngreso": "02/10/2009",
        "importe": 9524937.62,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: LA PLATA SUDESTE CALLE 50 AMBAS VEREDAS -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 02/10/2009"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "LA PLATA SUDESTE CALLE 50 AMBAS VEREDAS",
        "porcentaje": "100.00",
        "fechaIngreso": "16/02/1998",
        "importe": 8794536.01,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: LA PLATA SUDESTE CALLE 50 AMBAS VEREDAS -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 16/02/1998"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "LA PLATA",
        "porcentaje": "33.33",
        "fechaIngreso": "03/04/2024",
        "importe": 1532393.36,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: LA PLATA -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 03/04/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: BMW328 ISEDAN 4 PUERTAS",
        "anioFabricacion": "2013",
        "porcentaje": "50.00",
        "fechaIngreso": "10/2013",
        "importe": 12925000
      },
      {
        "descripcion": "Modelo: BMW320 ISEDAN 4 PUERTAS",
        "anioFabricacion": "2024",
        "porcentaje": "50.00",
        "fechaIngreso": "02/2024",
        "importe": 37160000
      }
    ],
    "localidadesInmuebles": [
      "La Plata Sudeste Calle 50 Ambas Veredas",
      "La Plata"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "giselle-castelnuovo": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "SUBSECRETARIA DE AUSNTOS POLITICOS",
    "organismo": "VICEJEFATURA DE GABINETE DEL INTERIOR",
    "totalBienesInicio": 60744316.32,
    "totalBienesFinal": 135501299.92,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 135501299.92,
    "ingresosAnuales": 27956850.47,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "23/09/2016",
        "importe": 41419894.7,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 23/09/2016"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "EZEIZA",
        "porcentaje": "50.00",
        "fechaIngreso": "30/03/2018",
        "importe": 6987428.59,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: EZEIZA -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 30/03/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENTAOS COMFORTLINE 250 TSI ATRURAL 4 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2023",
        "importe": 14725000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal",
      "Ezeiza"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jorge-chica": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 477135687.42,
    "totalBienesFinal": 384544756.12,
    "totalDeudasFinal": 40998652.46,
    "patrimonioNeto": 343546103.66,
    "ingresosAnuales": 46536976.74,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN JUAN",
        "porcentaje": "100.00",
        "fechaIngreso": "18/03/2010",
        "importe": 10807830.99,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN JUAN -Provincia: SAN JUAN -Fecha de ingreso al patrimonio: 18/03/2010"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "POCITO RINCONADA",
        "porcentaje": "100.00",
        "fechaIngreso": "26/05/2015",
        "importe": 5479180.4,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: POCITO RINCONADA -Provincia: SAN JUAN -Fecha de ingreso al patrimonio: 26/05/2015"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "SAN JUAN",
        "porcentaje": "50.00",
        "fechaIngreso": "02/05/2016",
        "importe": 3929674.72,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: SAN JUAN -Provincia: SAN JUAN -Fecha de ingreso al patrimonio: 02/05/2016"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: PIAGGIOVESPA GTS SUPER 300SCOOTER",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2020",
        "importe": 1093500
      }
    ],
    "localidadesInmuebles": [
      "San Juan",
      "Pocito Rinconada"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "abel-chiconi": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "Vicepresidente INV",
    "organismo": "INSTITUTO NACIONAL DE VITIVINICULTURA",
    "totalBienesInicio": 54112215.65,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Santa Lucia",
        "porcentaje": "50.00",
        "fechaIngreso": "10/08/2017",
        "importe": 33990108.86,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Santa Lucia -Fecha de ingreso al patrimonio: 10/08/2017"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "Angaco",
        "porcentaje": "50.00",
        "fechaIngreso": "03/06/2022",
        "importe": 8242341.02,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: Angaco -Fecha de ingreso al patrimonio: 03/06/2022"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "048-17-CJ - CRONOS DRIVE 1.3 MT",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2020",
        "importe": 10189489.64
      }
    ],
    "localidadesInmuebles": [
      "Santa Lucia",
      "Angaco"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "carlos-cisneros": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 176331397.48,
    "totalBienesFinal": 465711724.16,
    "totalDeudasFinal": 537968,
    "patrimonioNeto": 465173756.16,
    "ingresosAnuales": 100106672.22,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "RECREO O VERANEO / CESION GRATUITA",
        "localidad": "TAFI DEL VALLE",
        "porcentaje": "100.00",
        "fechaIngreso": "16/02/2021",
        "importe": 25785585.4,
        "descripcionOriginal": "Tipo: CASA -Destino: RECREO O VERANEO / CESION GRATUITA -Localidad: TAFI DEL VALLE -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 16/02/2021"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "YERBA BUENA",
        "porcentaje": "100.00",
        "fechaIngreso": "18/08/2017",
        "importe": 41282765.1,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: YERBA BUENA -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 18/08/2017"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "YERBA BUENA",
        "porcentaje": "100.00",
        "fechaIngreso": "19/05/2021",
        "importe": 32017786.15,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: YERBA BUENA -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 19/05/2021"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "YERBA BUENA",
        "porcentaje": "100.00",
        "fechaIngreso": "15/12/2021",
        "importe": 15886665.03,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: YERBA BUENA -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 15/12/2021"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "YERBA BUENA",
        "porcentaje": "100.00",
        "fechaIngreso": "15/04/2022",
        "importe": 14925931.7,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: YERBA BUENA -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 15/04/2022"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "100.00",
        "fechaIngreso": "01/03/2024",
        "importe": 4920000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 01/03/2024"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Tafi Del Valle",
      "Yerba Buena",
      "San Miguel De Tucuman"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "mariela-coletta": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 32119692,
    "totalBienesFinal": 251854202.42,
    "totalDeudasFinal": 55000000,
    "patrimonioNeto": 196854202.42,
    "ingresosAnuales": 36626721.36,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "30/09/2016",
        "importe": 20441485.6,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 30/09/2016"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "24/06/2024",
        "importe": 237120000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 24/06/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: NISSANKICKS EXCLUSIVE CVTSEDAN 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "50.00",
        "fechaIngreso": "09/2020",
        "importe": 7639450
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "facundo-correa-llano": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO DE LA NACION",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 42603734.3,
    "totalBienesFinal": 166580777.68,
    "totalDeudasFinal": 5628503.3,
    "patrimonioNeto": 160952274.38,
    "ingresosAnuales": 49075232.04,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "TOYOTA|COROLLA CROSS GR-SPORT 2.0 CVT|RURAL 5 PUERTA",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2023",
        "importe": 24300000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "ricardo-daives": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 46081387.5,
    "totalBienesFinal": 113925603.47,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 113925603.47,
    "ingresosAnuales": 46733622.86,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SANTIAGO DEL ESTERO",
        "porcentaje": "50.00",
        "fechaIngreso": "01/12/1988",
        "importe": 24284450.94,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SANTIAGO DEL ESTERO -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 01/12/1988"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "TERMAS DE RIO HONDO",
        "porcentaje": "33.33",
        "fechaIngreso": "01/03/2000",
        "importe": 2699714.87,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: TERMAS DE RIO HONDO -Provincia: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 01/03/2000"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: FORDKA SEL 1.5LSEDAN 5 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2017",
        "importe": 9815800
      }
    ],
    "localidadesInmuebles": [
      "Santiago Del Estero",
      "Termas De Rio Hondo"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "romina-del-pla": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada Nacional",
    "organismo": "nan",
    "totalBienesInicio": 28810000,
    "totalBienesFinal": 59962000,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 59962000,
    "ingresosAnuales": 22277800,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Moron",
        "porcentaje": "100.00",
        "fechaIngreso": "12/07/2016",
        "importe": 50462000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Moron -Fecha de ingreso al patrimonio: 12/07/2016"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "CLIO MIO 5P DYNAMIQUE",
        "anioFabricacion": "2015",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2016",
        "importe": 9500000
      }
    ],
    "localidadesInmuebles": [
      "Moron"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "romina-diez": {
    "anio": 2023,
    "tipoDeclaracion": "Inicial",
    "cargo": "Diputada Nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 8720400.14,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "LOCAL",
        "destino": "ALQUILER",
        "localidad": "Rosario",
        "porcentaje": "100.00",
        "fechaIngreso": "05/06/2003",
        "importe": 4600000,
        "descripcionOriginal": "Tipo: LOCAL -Destino: ALQUILER -Localidad: Rosario -Fecha de ingreso al patrimonio: 05/06/2003"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Rosario",
        "porcentaje": "62.00",
        "fechaIngreso": "27/06/2013",
        "importe": 1116000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Rosario -Fecha de ingreso al patrimonio: 27/06/2013"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Rosario"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "fernanda-diaz": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 6967367.19,
    "totalBienesFinal": 14883620.49,
    "totalDeudasFinal": 16213507.5,
    "patrimonioNeto": -1329887.0099999998,
    "ingresosAnuales": 47991140.18,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTAYARIS XS 1.5 6M TSEDAN 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "90.00",
        "fechaIngreso": "10/2019",
        "importe": 9405000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "nicolas-emma": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL POR LA CIUDAD DE BUENOS AIRES",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 4884281.92,
    "totalBienesFinal": 36333890.74,
    "totalDeudasFinal": 24500000,
    "patrimonioNeto": 11833890.740000002,
    "ingresosAnuales": 15896188.61,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "JEEP|COMPASS LIMITED 2.4 AT9 AWD|TODO TERRENO",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2024",
        "importe": 25000000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gabriela-beatriz-estevez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 31426230,
    "totalBienesFinal": 39842310,
    "totalDeudasFinal": 18476349.42,
    "patrimonioNeto": 21365960.58,
    "ingresosAnuales": 13882895.25,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "UNQUILLO",
        "porcentaje": "50.00",
        "fechaIngreso": "22/09/2014",
        "importe": 17397394,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: UNQUILLO -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 22/09/2014"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: JEEPRENEGADE 1.8L SPORTRURAL 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "50.00",
        "fechaIngreso": "10/2020",
        "importe": 7225000
      },
      {
        "descripcion": "Modelo: VOLKSWAGEN GOL TREND 1.6 GP",
        "anioFabricacion": "2013",
        "porcentaje": "50.00",
        "fechaIngreso": "04/2023",
        "importe": 2094250
      },
      {
        "descripcion": "Modelo: JEEPRENEGADE LONGITUDE T270 AT6 FWDRURAL 5 PUERTAS",
        "anioFabricacion": "2024",
        "porcentaje": "50.00",
        "fechaIngreso": "07/2024",
        "importe": 15870000
      }
    ],
    "localidadesInmuebles": [
      "Unquillo"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "alejandro-fargosi": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 244148690.96,
    "totalBienesFinal": 347467502.61,
    "totalDeudasFinal": 58171888.22,
    "patrimonioNeto": 289295614.39,
    "ingresosAnuales": 45048146.65,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "CABA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/07/1992",
        "importe": 20460136.4,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: CABA -Fecha de ingreso al patrimonio: 01/07/1992"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CABA",
        "porcentaje": "50.00",
        "fechaIngreso": "24/10/1997",
        "importe": 5478953.24,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CABA -Fecha de ingreso al patrimonio: 24/10/1997"
      },
      {
        "tipo": "COCHERA",
        "destino": "OTROS",
        "localidad": "CABA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/05/2006",
        "importe": 1248907.28,
        "descripcionOriginal": "Tipo: COCHERA -Destino: OTROS -Localidad: CABA -Fecha de ingreso al patrimonio: 01/05/2006"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "PILAR",
        "porcentaje": "100.00",
        "fechaIngreso": "01/08/1996",
        "importe": 9352.24,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: PILAR -Fecha de ingreso al patrimonio: 01/08/1996"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "VOLKSWAGEN QUANTUM",
        "anioFabricacion": "1994",
        "porcentaje": "100.00",
        "fechaIngreso": "06/1994",
        "importe": 1
      },
      {
        "descripcion": "JEEP TODO TERRENO - PATRIOT",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2013",
        "importe": 1
      }
    ],
    "localidadesInmuebles": [
      "Caba",
      "Pilar"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "pablo-farias": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 44089492.47,
    "totalBienesFinal": 68312135.72,
    "totalDeudasFinal": 8401000,
    "patrimonioNeto": 59911135.72,
    "ingresosAnuales": 132373694.25,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "COLASTINE NORTE",
        "porcentaje": "50.00",
        "fechaIngreso": "15/01/2018",
        "importe": 1549714.99,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: COLASTINE NORTE -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 15/01/2018"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "COLASTINE NORTE",
        "porcentaje": "50.00",
        "fechaIngreso": "23/09/2020",
        "importe": 5022500,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: COLASTINE NORTE -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 23/09/2020"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: JEEPRENEGADE LONGITUDE 1.8L AT6 AUTOMATICORURAL 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "50.00",
        "fechaIngreso": "11/2019",
        "importe": 11025000
      },
      {
        "descripcion": "Modelo: HONDAHR-V EXL CVTSEDAN 5 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "50.00",
        "fechaIngreso": "12/2020",
        "importe": 0
      },
      {
        "descripcion": "Modelo: HONDAHR-V EX CVTSEDAN 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "50.00",
        "fechaIngreso": "02/2023",
        "importe": 6674500
      }
    ],
    "localidadesInmuebles": [
      "Colastine Norte"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maximiliano-ferraro": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "diputado nacional",
    "organismo": "nan",
    "totalBienesInicio": 5942925.69,
    "totalBienesFinal": 12538985.92,
    "totalDeudasFinal": 2264584.62,
    "patrimonioNeto": 10274401.3,
    "ingresosAnuales": 41720304.96,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "alida-ferreyra": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "DIPUTADA DE LA NACION (CARGO ACTUAL)",
    "organismo": "FERREYRA ALIDA MONICA",
    "totalBienesInicio": 0,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "abelardo-ferran": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DECANO",
    "organismo": "UNIVERSIDAD NACIONAL DE LA PAMPA O. P.",
    "totalBienesInicio": 20073974.05,
    "totalBienesFinal": 41238202.93,
    "totalDeudasFinal": 3378776.61,
    "patrimonioNeto": 37859426.32,
    "ingresosAnuales": 25067662.3,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "RENAULT|ALASKAN CONFORT 2.3 DCI 160 2WD|PICK-UP",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2023",
        "importe": 27600000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "monica-frade": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACION",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 55556746.7,
    "totalBienesFinal": 87585548.96,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 87585548.96,
    "ingresosAnuales": 40579024.19,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "QUILMES",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2014",
        "importe": 6590692.34,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: QUILMES -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 01/01/2014"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "QUILMES",
        "porcentaje": "100.00",
        "fechaIngreso": "04/04/2018",
        "importe": 1452800,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: QUILMES -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 04/04/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: FORDFIESTA 1.6L SESEDAN 5 PUERTAS",
        "anioFabricacion": "2014",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2015",
        "importe": 0
      },
      {
        "descripcion": "Modelo: VOLKSWAGENGOL TREND 1.6SEDAN 5 PUERTAS",
        "anioFabricacion": "2010",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2010",
        "importe": 3278000
      },
      {
        "descripcion": "Modelo: PEUGEOT208 ACTIVE PACK 1.6L AM23.5SEDAN 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2023",
        "importe": 16650000
      }
    ],
    "localidadesInmuebles": [
      "Quilmes"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "andrea-freites": {
    "anio": 2023,
    "tipoDeclaracion": "Inicial",
    "cargo": "Diputado Nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 20370824.38,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "Tolhuin",
        "porcentaje": "100.00",
        "fechaIngreso": "27/01/2021",
        "importe": 545225.1,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: Tolhuin -Fecha de ingreso al patrimonio: 27/01/2021"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "Rio Grande",
        "porcentaje": "100.00",
        "fechaIngreso": "30/10/2007",
        "importe": 84000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: Rio Grande -Fecha de ingreso al patrimonio: 30/10/2007"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "TOYOTA|HILUX 4X4 DC SRV 2.8 TDI 6 AT|PICK-UP",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2023",
        "importe": 17300000
      },
      {
        "descripcion": "TOYOTA|ETIOS XLS 1.5 4A/T|SEDAN 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2020",
        "importe": 1064836
      }
    ],
    "localidadesInmuebles": [
      "Tolhuin",
      "Rio Grande"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maira-frias": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "jefa de oficina",
    "organismo": "ADMINISTRACION NACIONAL DE LA SEGURIDAD SOCIAL ANS",
    "totalBienesInicio": 7500000,
    "totalBienesFinal": 8112197,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 8112197,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "COMODORO RIVADAVIA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/06/2016",
        "importe": 7500000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: COMODORO RIVADAVIA -Fecha de ingreso al patrimonio: 01/06/2016"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Comodoro Rivadavia"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "emir-felix": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 185989616.41,
    "totalBienesFinal": 199816771.25,
    "totalDeudasFinal": 7369800,
    "patrimonioNeto": 192446971.25,
    "ingresosAnuales": 16487500,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SAN RAFAEL",
        "porcentaje": "50.00",
        "fechaIngreso": "03/08/2000",
        "importe": 6970319.92,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SAN RAFAEL -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 03/08/2000"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SAN RAFAEL",
        "porcentaje": "100.00",
        "fechaIngreso": "30/11/2009",
        "importe": 17514656.99,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SAN RAFAEL -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 30/11/2009"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN RAFAEL",
        "porcentaje": "100.00",
        "fechaIngreso": "01/07/2022",
        "importe": 7812880,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN RAFAEL -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 01/07/2022"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SAN RAFAEL",
        "porcentaje": "50.00",
        "fechaIngreso": "19/09/2024",
        "importe": 1321645.5,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SAN RAFAEL -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 19/09/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: CHEVROLETONIX 1.4 N LTZSEDAN 5 PUERTAS",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2013",
        "importe": 4848300
      },
      {
        "descripcion": "Modelo: VOLKSWAGENCROSSFOX 1.6SEDAN 5 PUERTAS",
        "anioFabricacion": "2012",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2017",
        "importe": 7500000
      }
    ],
    "localidadesInmuebles": [
      "San Rafael"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "sebastian-galmarini": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "BANCO DE LA PROVINCIA DE BUENOS AIRES",
    "totalBienesInicio": 232194032.94,
    "totalBienesFinal": 467294286.86,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 467294286.86,
    "ingresosAnuales": 254304134.83,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "BECCAR",
        "porcentaje": "90.00",
        "fechaIngreso": "18/03/2019",
        "importe": 36606548.66,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: BECCAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 18/03/2019"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "BECCAR",
        "porcentaje": "90.00",
        "fechaIngreso": "31/12/2020",
        "importe": 0,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: BECCAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 31/12/2020"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "PINAMAR",
        "porcentaje": "50.00",
        "fechaIngreso": "25/06/2021",
        "importe": 1653750,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: PINAMAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 25/06/2021"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "PINAMAR",
        "porcentaje": "100.00",
        "fechaIngreso": "31/12/2022",
        "importe": 34820000,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: PINAMAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 31/12/2022"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "PINAMAR",
        "porcentaje": "100.00",
        "fechaIngreso": "18/12/2024",
        "importe": 37000000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: PINAMAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 18/12/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HYUNDAISANTA FE 4WD CRDITODO TERRENO",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2017",
        "importe": 0
      },
      {
        "descripcion": "Modelo: VOLKSWAGENAMAROK EXTREME V6 3.0L 258 CVPICK-UP",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2022",
        "importe": 43240000
      }
    ],
    "localidadesInmuebles": [
      "Beccar",
      "Pinamar"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "ignacio-garcia-aresca": {
    "anio": 2023,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "GARCIA  ARESCA IGNACIO JOSE",
    "totalBienesInicio": 110817646.39,
    "totalBienesFinal": 355440581.61,
    "totalDeudasFinal": 2500000,
    "patrimonioNeto": 352940581.61,
    "ingresosAnuales": 97216254.33,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN FRANCISCO",
        "porcentaje": "100.00",
        "fechaIngreso": "09/11/2015",
        "importe": 1870704.37,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN FRANCISCO -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 09/11/2015"
      },
      {
        "tipo": "CASA",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "SAN FRANCISCO",
        "porcentaje": "100.00",
        "fechaIngreso": "01/06/2017",
        "importe": 13546306.11,
        "descripcionOriginal": "Tipo: CASA -Destino: ALQUILER / CONTRAPRESTACION -Localidad: SAN FRANCISCO -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 01/06/2017"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SAN FRANCISCO",
        "porcentaje": "40.50",
        "fechaIngreso": "02/01/2017",
        "importe": 4830588.45,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SAN FRANCISCO -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 02/01/2017"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "LUIS A. SAUCE",
        "porcentaje": "20.00",
        "fechaIngreso": "06/01/2018",
        "importe": 7629512.39,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: LUIS A. SAUCE -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 06/01/2018"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "SAN FRANCISCO",
        "porcentaje": "100.00",
        "fechaIngreso": "12/04/2022",
        "importe": 20496917.74,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: SAN FRANCISCO -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 12/04/2022"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: YAMAHAXTZ 250MOTOCICLETA",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2020",
        "importe": 3176300
      },
      {
        "descripcion": "Modelo: HONDACRF1000L MTMOTOCICLETA",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2021",
        "importe": 3075000
      },
      {
        "descripcion": "Modelo: TOYOTAHILUX 4X2 C S DX PACK 2.5 TDI - D3PICK-UP",
        "anioFabricacion": "2014",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2023",
        "importe": 7250600
      },
      {
        "descripcion": "Modelo: TOYOTAHILUX 4X2 D C SR 2.4 TDI 6 M TPICK-UP",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2023",
        "importe": 10177400
      }
    ],
    "localidadesInmuebles": [
      "San Francisco",
      "Luis A. Sauce"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maria-teresa-garcia": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "SENADORA POR LA PROVINCIA DE BUENOS AIRES",
    "organismo": "HONORABLE CAMARA DE SENADORES PCIA BS AS",
    "totalBienesInicio": 83415909.44,
    "totalBienesFinal": 157691105.34,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 157691105.34,
    "ingresosAnuales": 37436187.52,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "26/06/2006",
        "importe": 56249153.41,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 26/06/2006"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "RECREO O VERANEO / CESION GRATUITA",
        "localidad": "LAGO RIVADAVIA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/10/2012",
        "importe": 3247873.46,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: RECREO O VERANEO / CESION GRATUITA -Localidad: LAGO RIVADAVIA -Provincia: CHUBUT -Fecha de ingreso al patrimonio: 01/10/2012"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "TIGRE",
        "porcentaje": "100.00",
        "fechaIngreso": "18/07/2016",
        "importe": 45691068.97,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: TIGRE -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 18/07/2016"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: JEEPRENEGADE 1.8L SPORTRURAL 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2022",
        "importe": 13600000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal",
      "Lago Rivadavia",
      "Tigre"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "juan-carlos-giordano": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 12885464.64,
    "totalBienesFinal": 13321844.64,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 13321844.64,
    "ingresosAnuales": 21924731.48,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "CIUDAD AUTONOMA BUENOS AIRES",
        "porcentaje": "50.00",
        "fechaIngreso": "08/06/2016",
        "importe": 10329933.64,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 08/06/2016"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Ciudad Autonoma Buenos Aires"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "silvana-giudici": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 50158297.68,
    "totalBienesFinal": 101905165.53,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 101905165.53,
    "ingresosAnuales": 39145276.38,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2005",
        "importe": 66016388.88,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 01/01/2005"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: PEUGEOT208 FELINE 1.6 TIPTRONIC 6 115SEDAN 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2019",
        "importe": 0
      },
      {
        "descripcion": "Modelo: CITROENC3 VTI 115 EAT6 FEEL PACK LOOK AM22.5SEDAN 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2023",
        "importe": 14104400
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "diego-a-giuliano": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 403149423.67,
    "totalBienesFinal": 723409875.76,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 723409875.76,
    "ingresosAnuales": 65732760.15,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "AREQUITO",
        "porcentaje": "100.00",
        "fechaIngreso": "12/02/1996",
        "importe": 335398.42,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: AREQUITO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 12/02/1996"
      },
      {
        "tipo": "CASA",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "AREQUITO",
        "porcentaje": "100.00",
        "fechaIngreso": "07/06/2000",
        "importe": 2152116.91,
        "descripcionOriginal": "Tipo: CASA -Destino: ALQUILER / CONTRAPRESTACION -Localidad: AREQUITO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 07/06/2000"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "ROSARIO",
        "porcentaje": "100.00",
        "fechaIngreso": "13/09/2001",
        "importe": 2147037.94,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 13/09/2001"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "ROSARIO",
        "porcentaje": "50.00",
        "fechaIngreso": "21/01/2008",
        "importe": 1744731.36,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 21/01/2008"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "AREQUITO",
        "porcentaje": "100.00",
        "fechaIngreso": "17/05/2007",
        "importe": 21953.97,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: AREQUITO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 17/05/2007"
      },
      {
        "tipo": "COUNTRY",
        "destino": "OTRO",
        "localidad": "OLIVEROS",
        "porcentaje": "100.00",
        "fechaIngreso": "28/07/2005",
        "importe": 25700.62,
        "descripcionOriginal": "Tipo: COUNTRY-QUINTAS-ETC. -Destino: OTRO -Localidad: OLIVEROS -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 28/07/2005"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "AREQUITO",
        "porcentaje": "50.00",
        "fechaIngreso": "01/07/2000",
        "importe": 5608562.04,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: AREQUITO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 01/07/2000"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "AREQUITO",
        "porcentaje": "20.00",
        "fechaIngreso": "23/03/1984",
        "importe": 4222096.77,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: AREQUITO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 23/03/1984"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "INVERSION",
        "localidad": "ROSARIO",
        "porcentaje": "50.00",
        "fechaIngreso": "02/12/2013",
        "importe": 2486723.71,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: INVERSION -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 02/12/2013"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "CARCARAÑA",
        "porcentaje": "100.00",
        "fechaIngreso": "31/10/2016",
        "importe": 98000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: CARCARAÑA -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 31/10/2016"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "CARILO",
        "porcentaje": "100.00",
        "fechaIngreso": "21/01/2016",
        "importe": 331459727.9,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: CARILO -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 21/01/2016"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "CARCARAÑA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/05/2006",
        "importe": 4993112.83,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: CARCARAÑA -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 01/05/2006"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "ROSARIO",
        "porcentaje": "100.00",
        "fechaIngreso": "01/08/2020",
        "importe": 11000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 01/08/2020"
      },
      {
        "tipo": "LOCAL",
        "destino": "OTRO",
        "localidad": "AREQUITO",
        "porcentaje": "100.00",
        "fechaIngreso": "15/11/2023",
        "importe": 996000,
        "descripcionOriginal": "Tipo: LOCAL -Destino: OTRO -Localidad: AREQUITO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 15/11/2023"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Arequito",
      "Rosario",
      "Oliveros",
      "Carcaraña",
      "Carilo"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jose-glinski": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 15109176.51,
    "totalBienesFinal": 32949239.97,
    "totalDeudasFinal": 24364226.43,
    "patrimonioNeto": 8585013.54,
    "ingresosAnuales": 43753469.05,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "COMODORO RIVADAVIA",
        "porcentaje": "16.00",
        "fechaIngreso": "12/05/1984",
        "importe": 2312230.65,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: COMODORO RIVADAVIA -Fecha de ingreso al patrimonio: 12/05/1984"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "COMODORO RIVADAVIA",
        "porcentaje": "50.00",
        "fechaIngreso": "28/01/2017",
        "importe": 3845380.25,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: COMODORO RIVADAVIA -Fecha de ingreso al patrimonio: 28/01/2017"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "COMODORO RIVADAVIA",
        "porcentaje": "100.00",
        "fechaIngreso": "19/05/1995",
        "importe": 1845000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: COMODORO RIVADAVIA -Fecha de ingreso al patrimonio: 19/05/1995"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Comodoro Rivadavia"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jose-gomez": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "Diputado Nacional",
    "organismo": "EMPRESA DISTRIBUIDORA DE ELECTRICIDAD DESANTIAGO D",
    "totalBienesInicio": 104000000,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SANTIAGO DEL ESTERO",
        "porcentaje": "100.00",
        "fechaIngreso": "01/07/1990",
        "importe": 65000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 01/07/1990"
      },
      {
        "tipo": "COUNTRY",
        "destino": "RECREO O VERANEO",
        "localidad": "SANTIAGO DEL ESTERO",
        "porcentaje": "100.00",
        "fechaIngreso": "04/01/2023",
        "importe": 39000000,
        "descripcionOriginal": "Tipo: COUNTRY-QUINTAS-ETC. -Destino: RECREO O VERANEO -Localidad: SANTIAGO DEL ESTERO -Fecha de ingreso al patrimonio: 04/01/2023"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Santiago Del Estero"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "juan-grabois": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "nan",
    "organismo": "nan",
    "totalBienesInicio": 7814455.15,
    "totalBienesFinal": 11077784.62,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 11077784.62,
    "ingresosAnuales": 13255170,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Boulogne",
        "porcentaje": "50.00",
        "fechaIngreso": "29/04/2022",
        "importe": 4770000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Boulogne -san isidro -Fecha de ingreso al patrimonio: 29/04/2022"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "RENAULT SEDAN 4P R9 RL",
        "anioFabricacion": "1995",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2019",
        "importe": 0.01
      }
    ],
    "localidadesInmuebles": [
      "Boulogne"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maura-gruber": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 12050000,
    "totalBienesFinal": 6050000,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 6050000,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "ELDORADO",
        "porcentaje": "100.00",
        "fechaIngreso": "13/11/2014",
        "importe": 50000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: ELDORADO -Fecha de ingreso al patrimonio: 13/11/2014"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Eldorado"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "carlos-gutierrez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 133506952.09,
    "totalBienesFinal": 284096461.09,
    "totalDeudasFinal": 8898809.1,
    "patrimonioNeto": 275197651.98999995,
    "ingresosAnuales": 41514706.48,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "RIO CUARTO",
        "porcentaje": "100.00",
        "fechaIngreso": "09/02/2011",
        "importe": 46087805.22,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: RIO CUARTO -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 09/02/2011"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "CAÑADA DEL SAUCE",
        "porcentaje": "100.00",
        "fechaIngreso": "31/12/2024",
        "importe": 40902416.67,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: CAÑADA DEL SAUCE -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 31/12/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDAXR125LMOTOCICLETA",
        "anioFabricacion": "2010",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2011",
        "importe": 1250000
      },
      {
        "descripcion": "Modelo: YAMAHA MOTOCICLETA WR250R",
        "anioFabricacion": "2010",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2016",
        "importe": 0
      },
      {
        "descripcion": "Modelo: FORDF-100 DIESELPICK-UP",
        "anioFabricacion": "1997",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2019",
        "importe": 20000
      },
      {
        "descripcion": "Modelo: RAMRAM 1500 5.7 V8 LARAMIE 4X4PICK-UP CABINA DOBLE",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2020",
        "importe": 47350000
      },
      {
        "descripcion": "Modelo: FORDRANGER CS 4X2 XL 2.2L DPICK-UP",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2022",
        "importe": 14272800
      },
      {
        "descripcion": "Modelo: TOYOTASW4 4X4 SRX 2.8 TDI 6 AT 7ATODO TERRENO",
        "anioFabricacion": "2024",
        "porcentaje": "50.00",
        "fechaIngreso": "08/2024",
        "importe": 30340000
      }
    ],
    "localidadesInmuebles": [
      "Rio Cuarto",
      "Cañada Del Sauce"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "ramiro-gutierrez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 97810659.15,
    "totalBienesFinal": 329799635.38,
    "totalDeudasFinal": 74709.19,
    "patrimonioNeto": 329724926.19,
    "ingresosAnuales": 46100924.53,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "DOLORES",
        "porcentaje": "100.00",
        "fechaIngreso": "24/05/1988",
        "importe": 3571982.62,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: DOLORES -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 24/05/1988"
      },
      {
        "tipo": "RURALES CON VIVIENDA",
        "destino": "CASA HABITACION",
        "localidad": "DOLORES",
        "porcentaje": "100.00",
        "fechaIngreso": "15/11/2008",
        "importe": 33399951.81,
        "descripcionOriginal": "Tipo: RURALES CON VIVIENDA -Destino: CASA HABITACION -Localidad: DOLORES -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 15/11/2008"
      },
      {
        "tipo": "LOCAL",
        "destino": "INVERSION",
        "localidad": "DOLORES",
        "porcentaje": "100.00",
        "fechaIngreso": "28/11/2012",
        "importe": 3399169.61,
        "descripcionOriginal": "Tipo: LOCAL -Destino: INVERSION -Localidad: DOLORES -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 28/11/2012"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: toyota Hilux 4x4 D C S",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2016",
        "importe": 0
      },
      {
        "descripcion": "Modelo: SUZUKIJIMNY 1.3 JLXTODO TERRENO",
        "anioFabricacion": "2000",
        "porcentaje": "50.00",
        "fechaIngreso": "04/2016",
        "importe": 3100000
      },
      {
        "descripcion": "Modelo: HONDAHR-V EXL CVTSEDAN 5 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2017",
        "importe": 20000000
      }
    ],
    "localidadesInmuebles": [
      "Dolores"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jairo-guzman": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "Directo Ejecutivo de Pami",
    "organismo": "nan",
    "totalBienesInicio": 849000000,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "INVERSION",
        "localidad": "Guer Aike Rio  Gallegos",
        "porcentaje": "100.00",
        "fechaIngreso": "01/03/2011",
        "importe": 200000000,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: INVERSION -Localidad: Guer Aike Rio  Gallegos -Fecha de ingreso al patrimonio: 01/03/2011"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "INVERSION",
        "localidad": "Rio Gallegos Guer Aike",
        "porcentaje": "100.00",
        "fechaIngreso": "01/03/2018",
        "importe": 170000000,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: INVERSION -Localidad: Rio Gallegos Guer Aike -Fecha de ingreso al patrimonio: 01/03/2018"
      },
      {
        "tipo": "MEJORAS CONSTRUCCION",
        "destino": "INVERSION",
        "localidad": "Rio Gallegos Guer Aike",
        "porcentaje": "100.00",
        "fechaIngreso": "01/05/2018",
        "importe": 160000000,
        "descripcionOriginal": "Tipo: MEJORAS CONSTRUCCION -Destino: INVERSION -Localidad: Rio Gallegos Guer Aike -Fecha de ingreso al patrimonio: 01/05/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "TOYOTA HILUX 2015",
        "anioFabricacion": "2015",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2018",
        "importe": 25000000
      },
      {
        "descripcion": "FORD F 100 1994",
        "anioFabricacion": "1994",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2016",
        "importe": 24000000
      }
    ],
    "localidadesInmuebles": [
      "Guer Aike Rio  Gallegos",
      "Rio Gallegos Guer Aike"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "itai-hagman": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputado de la Nación",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 42647865.48,
    "totalBienesFinal": 149068010.95,
    "totalDeudasFinal": 63000000,
    "patrimonioNeto": 86068010.94999999,
    "ingresosAnuales": 39147076.62,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "07/11/2008",
        "importe": 38292620.39,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 07/11/2008"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "15.00",
        "fechaIngreso": "12/03/2021",
        "importe": 3891893.54,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 12/03/2021"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "03/12/2024",
        "importe": 95654480.4,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 03/12/2024"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "diego-hartfield": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO",
    "organismo": "nan",
    "totalBienesInicio": 87059001.3,
    "totalBienesFinal": 256694397.97,
    "totalDeudasFinal": 18563674.27,
    "patrimonioNeto": 238130723.7,
    "ingresosAnuales": 21564575.97,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "OBERA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2013",
        "importe": 23643877.56,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: OBERA -Provincia: MISIONES -Fecha de ingreso al patrimonio: 01/01/2013"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDACRV LXRURAL 5 PUERTAS",
        "anioFabricacion": "2012",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2018",
        "importe": 0
      },
      {
        "descripcion": "Modelo: ZANELLASTYLER 150 CRUISERMOTOCICLETA",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2020",
        "importe": 1487000
      },
      {
        "descripcion": "Modelo: VOLKSWAGENTAOS COMFORTLINE 250 TSI ATRURAL 4 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2023",
        "importe": 29450000
      }
    ],
    "localidadesInmuebles": [
      "Obera"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "oscar-a-herrera-ahuad": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 21874269.04,
    "totalBienesFinal": 65659847.77,
    "totalDeudasFinal": 972946.06,
    "patrimonioNeto": 64686901.71,
    "ingresosAnuales": 47625046.84,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "POSADAS",
        "porcentaje": "100.00",
        "fechaIngreso": "24/08/2015",
        "importe": 900031.48,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: POSADAS -Provincia: MISIONES -Fecha de ingreso al patrimonio: 24/08/2015"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "RECREO O VERANEO / CESION GRATUITA",
        "localidad": "ITUZAINGO",
        "porcentaje": "100.00",
        "fechaIngreso": "02/08/2013",
        "importe": 149760,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: RECREO O VERANEO / CESION GRATUITA -Localidad: ITUZAINGO -Provincia: CORRIENTES -Fecha de ingreso al patrimonio: 02/08/2013"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "POSADAS",
        "porcentaje": "100.00",
        "fechaIngreso": "22/12/2010",
        "importe": 900031.48,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: POSADAS -Provincia: MISIONES -Fecha de ingreso al patrimonio: 22/12/2010"
      },
      {
        "tipo": "COUNTRY",
        "destino": "OTRO",
        "localidad": "ITUZAINGO",
        "porcentaje": "100.00",
        "fechaIngreso": "09/05/2019",
        "importe": 5133744,
        "descripcionOriginal": "Tipo: COUNTRY-QUINTAS-ETC. -Destino: OTRO -Localidad: ITUZAINGO -Provincia: CORRIENTES -Fecha de ingreso al patrimonio: 09/05/2019"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Posadas",
      "Ituzaingo"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "patricia-holzman": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 194638834.07,
    "totalBienesFinal": 513190577.77,
    "totalDeudasFinal": 56706828.93,
    "patrimonioNeto": 456483748.84,
    "ingresosAnuales": 15325609.82,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "INVERSION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "28/08/2003",
        "importe": 135912352.32,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: INVERSION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 28/08/2003"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "INVERSION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "20/09/2010",
        "importe": 40612677.26,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: INVERSION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 20/09/2010"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "12/04/2021",
        "importe": 286317484.28,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 12/04/2021"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDA SEDAN 5 PUERTAS WR-V EXL CVT",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2019",
        "importe": 12982000
      },
      {
        "descripcion": "Modelo: TOYOTACOROLLA CROSS SEG HEV 1.8 ECVTRURAL 5 PUERTAS",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2024",
        "importe": 33580000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gerardo-huesen": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 3513471.93,
    "totalBienesFinal": 11081755.5,
    "totalDeudasFinal": 9666421.9,
    "patrimonioNeto": 1415333.5999999996,
    "ingresosAnuales": 47793607.01,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "ALDERETES",
        "porcentaje": "100.00",
        "fechaIngreso": "03/10/2017",
        "importe": 300000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: ALDERETES -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 03/10/2017"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Alderetes"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gladys-humenuk": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "Subsecr de Coord Adm de la Secret Gral Presidencia",
    "organismo": "SERVICIOS INTEGRALES AMERICA S.A",
    "totalBienesInicio": 42004369.15,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "VICENTE LOPEZ",
        "porcentaje": "50.00",
        "fechaIngreso": "27/10/2016",
        "importe": 3542295.54,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: VICENTE LOPEZ -Fecha de ingreso al patrimonio: 27/10/2016"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "TOYOTA COROLLA XEI 1.8 MT SEDAN 4 PTAS",
        "anioFabricacion": "2013",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2013",
        "importe": 330000
      }
    ],
    "localidadesInmuebles": [
      "Vicente Lopez"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "ana-maria-ianni": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 73007455.14,
    "totalBienesFinal": 159304673.65,
    "totalDeudasFinal": 13046933.33,
    "patrimonioNeto": 146257740.32,
    "ingresosAnuales": 41802863.97,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "RAMOS MEJIA",
        "porcentaje": "100.00",
        "fechaIngreso": "12/05/2008",
        "importe": 6163006.34,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: ALQUILER / CONTRAPRESTACION -Localidad: RAMOS MEJIA -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 12/05/2008"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "CALAFATE",
        "porcentaje": "100.00",
        "fechaIngreso": "14/07/2003",
        "importe": 19710670.75,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: CALAFATE -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 14/07/2003"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "CALAFATE",
        "porcentaje": "100.00",
        "fechaIngreso": "06/12/2012",
        "importe": 30614351.61,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: CALAFATE -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 06/12/2012"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "01/04/2014",
        "importe": 11208361.37,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 01/04/2014"
      },
      {
        "tipo": "COUNTRY",
        "destino": "OTRO",
        "localidad": "GENERAL RODRIGUEZ",
        "porcentaje": "50.00",
        "fechaIngreso": "11/08/2015",
        "importe": 3843039.49,
        "descripcionOriginal": "Tipo: COUNTRY-QUINTAS-ETC. -Destino: OTRO -Localidad: GENERAL RODRIGUEZ -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 11/08/2015"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "INVERSION",
        "localidad": "RAMOS MEJIA",
        "porcentaje": "100.00",
        "fechaIngreso": "12/11/2019",
        "importe": 11966514.77,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: INVERSION -Localidad: RAMOS MEJIA -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 12/11/2019"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENTAOS HIGHLINE 250 TSI ATRURAL 4 5 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2023",
        "importe": 28880000
      }
    ],
    "localidadesInmuebles": [
      "Ramos Mejia",
      "Calafate",
      "Capital Federal",
      "General Rodriguez"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maria-cecilia-ibanez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 28506600,
    "totalBienesFinal": 33557044,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 33557044,
    "ingresosAnuales": 38489895,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "CORDOBA",
        "porcentaje": "100.00",
        "fechaIngreso": "24/05/2012",
        "importe": 20000000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: CORDOBA -Fecha de ingreso al patrimonio: 24/05/2012"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "AFECTADO A LA EXPLOTACION",
        "localidad": "CORDOBA",
        "porcentaje": "100.00",
        "fechaIngreso": "27/08/1997",
        "importe": 6000000,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: AFECTADO A LA EXPLOTACION -Localidad: CORDOBA -Fecha de ingreso al patrimonio: 27/08/1997"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Cordoba"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "pablo-juliano": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputado Nacional",
    "organismo": "nan",
    "totalBienesInicio": 9012723,
    "totalBienesFinal": 39711093.5,
    "totalDeudasFinal": 16840000,
    "patrimonioNeto": 22871093.5,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "La Plata",
        "porcentaje": "50.00",
        "fechaIngreso": "07/03/2014",
        "importe": 5491452.5,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: La Plata -Fecha de ingreso al patrimonio: 07/03/2014"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "LA PLATA",
        "porcentaje": "50.00",
        "fechaIngreso": "18/10/2024",
        "importe": 15060000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: LA PLATA -Fecha de ingreso al patrimonio: 18/10/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "RENAULT|SYMBOL PACK 1.6 16V|SEDAN 4 PUERTAS",
        "anioFabricacion": "2012",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2012",
        "importe": 4474700
      },
      {
        "descripcion": "SPIN 1.8 N 7P LTZ A T Sedan 5 puertas",
        "anioFabricacion": "2015",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2019",
        "importe": 9300000
      }
    ],
    "localidadesInmuebles": [
      "La Plata"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maximo-carlos-kirchner": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 4719066772.97,
    "totalBienesFinal": 8311567011.23,
    "totalDeudasFinal": 86963957.66,
    "patrimonioNeto": 8224603053.57,
    "ingresosAnuales": 67018272.22,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "CALAFATE",
        "porcentaje": "100.00",
        "fechaIngreso": "08/02/2008",
        "importe": 228550906.8,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: CALAFATE -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 08/02/2008"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "RIO GALLEGOS",
        "porcentaje": "100.00",
        "fechaIngreso": "30/08/2010",
        "importe": 48051449.29,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: RIO GALLEGOS -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 30/08/2010"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "02/06/2011",
        "importe": 121062240.11,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 02/06/2011"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "RIO GALLEGOS",
        "porcentaje": "50.00",
        "fechaIngreso": "02/06/2011",
        "importe": 19812706.26,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: RIO GALLEGOS -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 02/06/2011"
      },
      {
        "tipo": "LOCAL",
        "destino": "OTRO",
        "localidad": "RIO GALLEGOS",
        "porcentaje": "50.00",
        "fechaIngreso": "02/06/2011",
        "importe": 17144523.96,
        "descripcionOriginal": "Tipo: LOCAL -Destino: OTRO -Localidad: RIO GALLEGOS -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 02/06/2011"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "RIO GALLEGOS",
        "porcentaje": "50.00",
        "fechaIngreso": "02/06/2011",
        "importe": 5263860.82,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: RIO GALLEGOS -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 02/06/2011"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "CALAFATE",
        "porcentaje": "50.00",
        "fechaIngreso": "02/06/2011",
        "importe": 84248653.69,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: CALAFATE -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 02/06/2011"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "CALAFATE",
        "porcentaje": "50.00",
        "fechaIngreso": "02/06/2011",
        "importe": 606516323.1,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: CALAFATE -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 02/06/2011"
      },
      {
        "tipo": "LOCAL",
        "destino": "OTRO",
        "localidad": "CALAFATE",
        "porcentaje": "50.00",
        "fechaIngreso": "02/06/2011",
        "importe": 618282466.03,
        "descripcionOriginal": "Tipo: LOCAL -Destino: OTRO -Localidad: CALAFATE -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 02/06/2011"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "CALAFATE",
        "porcentaje": "25.00",
        "fechaIngreso": "02/06/2011",
        "importe": 32199816.94,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: CALAFATE -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 02/06/2011"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDACR-V EXLTODO TERRENO",
        "anioFabricacion": "2008",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2009",
        "importe": 12191600
      },
      {
        "descripcion": "Modelo: HONDACR-V EXLTODO TERRENO",
        "anioFabricacion": "2009",
        "porcentaje": "50.00",
        "fechaIngreso": "06/2011",
        "importe": 6400600
      }
    ],
    "localidadesInmuebles": [
      "Calafate",
      "Rio Gallegos",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "aldo-leiva": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 35328651.9,
    "totalBienesFinal": 55582469,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 55582469,
    "ingresosAnuales": 31147883.46,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "GENERAL JOSE DE SAN MARTIN",
        "porcentaje": "50.00",
        "fechaIngreso": "03/03/2008",
        "importe": 3159432,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: GENERAL JOSE DE SAN MARTIN -Provincia: CHACO -Fecha de ingreso al patrimonio: 03/03/2008"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENVOLKSWAGEN VENTO 2.5SEDAN 4 PUERTAS",
        "anioFabricacion": "2012",
        "porcentaje": "50.00",
        "fechaIngreso": "08/2012",
        "importe": 5191300
      },
      {
        "descripcion": "Modelo: VOLKSWAGENAMAROK DC V6 3.0L 258 CV TDI 4X4 ATPICK-UP",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2021",
        "importe": 38100000
      }
    ],
    "localidadesInmuebles": [
      "General Jose De San Martin"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "andres-leone": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "SECRETARIA DE INDUSTRIA Y DESARROLLO PRODUCTIVO",
    "totalBienesInicio": 99000000,
    "totalBienesFinal": 99500000,
    "totalDeudasFinal": 67200,
    "patrimonioNeto": 99432800,
    "ingresosAnuales": 15196135,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAAVEDRA",
        "porcentaje": "100.00",
        "fechaIngreso": "04/03/2008",
        "importe": 90000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAAVEDRA -Fecha de ingreso al patrimonio: 04/03/2008"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "HONDA CRV",
        "anioFabricacion": "2005",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2023",
        "importe": 8000000
      }
    ],
    "localidadesInmuebles": [
      "Saavedra"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "mercedes-llano": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 25239995.6,
    "totalBienesFinal": 39529007.41,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 39529007.41,
    "ingresosAnuales": 48884865.12,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "LUJAN DE CUYO",
        "porcentaje": "100.00",
        "fechaIngreso": "03/01/2018",
        "importe": 11006901,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: LUJAN DE CUYO -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 03/01/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENSURAN 90BSEDAN 5 PUERTAS",
        "anioFabricacion": "2010",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2013",
        "importe": 3510100
      },
      {
        "descripcion": "Modelo: VOLKSWAGENT-CROSS 170TSI MTRURAL 5 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2023",
        "importe": 15200000
      }
    ],
    "localidadesInmuebles": [
      "Lujan De Cuyo"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "enrique-lluch": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "JEFE DE DISTRITO",
    "organismo": "DIRECCION NACIONAL DE VIALIDAD",
    "totalBienesInicio": 19125629,
    "totalBienesFinal": 22522155.73,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 22522155.73,
    "ingresosAnuales": 16616668.23,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "CAPITAL",
        "porcentaje": "100.00",
        "fechaIngreso": "28/12/2022",
        "importe": 1200000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: CAPITAL -Fecha de ingreso al patrimonio: 28/12/2022"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "BELLA VISTA",
        "porcentaje": "33.00",
        "fechaIngreso": "11/05/2016",
        "importe": 82500,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: BELLA VISTA -Fecha de ingreso al patrimonio: 11/05/2016"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "FIAT STRADA WORKING 1.4",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2013",
        "importe": 4949494
      }
    ],
    "localidadesInmuebles": [
      "Capital",
      "Bella Vista"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "johanna-sabrina-longo": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "CANDIDATA DIPUTADA NACIONAL",
    "organismo": "CORREO OFICIAL DE LA REPUBLICA ARGENTINA SOCIEDAD",
    "totalBienesInicio": 10360215.75,
    "totalBienesFinal": 18072031.27,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 18072031.27,
    "ingresosAnuales": 10527251,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "9 DE ABRIL (LA MATANZA)",
        "porcentaje": "50.00",
        "fechaIngreso": "01/09/2006",
        "importe": 1373084,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: 9 DE ABRIL (LA MATANZA) -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 01/09/2006"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "9 DE ABRIL (ESTEBAN ECHEVERRIA)",
        "porcentaje": "50.00",
        "fechaIngreso": "01/09/2006",
        "importe": 1373084,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: 9 DE ABRIL (ESTEBAN ECHEVERRIA) -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 01/09/2006"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "REMEDIOS DE ESCALADA",
        "porcentaje": "50.00",
        "fechaIngreso": "30/05/2008",
        "importe": 724256.5,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: REMEDIOS DE ESCALADA -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 30/05/2008"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "9 DE ABRIL (ESTEBAN ECHEVERRIA)",
        "porcentaje": "50.00",
        "fechaIngreso": "28/12/2006",
        "importe": 227281,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: 9 DE ABRIL (ESTEBAN ECHEVERRIA) -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 28/12/2006"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "LANUS",
        "porcentaje": "50.00",
        "fechaIngreso": "28/12/2006",
        "importe": 1134237,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: LANUS -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 28/12/2006"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "9 DE ABRIL (ESTEBAN ECHEVERRIA)",
        "porcentaje": "50.00",
        "fechaIngreso": "20/02/2008",
        "importe": 155717,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: 9 DE ABRIL (ESTEBAN ECHEVERRIA) -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 20/02/2008"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "MAR DEL TUYU",
        "porcentaje": "50.00",
        "fechaIngreso": "29/12/2006",
        "importe": 15620.5,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: MAR DEL TUYU -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 29/12/2006"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "MAR DEL TUYU",
        "porcentaje": "50.00",
        "fechaIngreso": "19/08/2011",
        "importe": 332927,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: MAR DEL TUYU -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 19/08/2011"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: RENAULTCAPTUR ZEN 2.0RURAL 5 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "50.00",
        "fechaIngreso": "12/2019",
        "importe": 6085000
      }
    ],
    "localidadesInmuebles": [
      "9 De Abril (La Matanza)",
      "9 De Abril (Esteban Echeverria)",
      "Remedios De Escalada",
      "Lanus",
      "Mar Del Tuyu"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "martin-lousteau": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "SENADOR NACIONAL",
    "organismo": "HONORABLE SENADO DE LA NACION",
    "totalBienesInicio": 1131566796.17,
    "totalBienesFinal": 1912577841.84,
    "totalDeudasFinal": 23149715.5,
    "patrimonioNeto": 1889428126.34,
    "ingresosAnuales": 195904766.16,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "ALQUILER",
        "localidad": "CABA",
        "porcentaje": "100.00",
        "fechaIngreso": "04/09/2003",
        "importe": 80638576.99,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: ALQUILER -Localidad: CABA -Fecha de ingreso al patrimonio: 04/09/2003"
      },
      {
        "tipo": "COCHERA",
        "destino": "OTROS",
        "localidad": "CABA",
        "porcentaje": "100.00",
        "fechaIngreso": "05/05/2008",
        "importe": 5936964.71,
        "descripcionOriginal": "Tipo: COCHERA -Destino: OTROS -Localidad: CABA -Fecha de ingreso al patrimonio: 05/05/2008"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "ALQUILER",
        "localidad": "CABA",
        "porcentaje": "100.00",
        "fechaIngreso": "15/06/2011",
        "importe": 84737471.32,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: ALQUILER -Localidad: CABA -Fecha de ingreso al patrimonio: 15/06/2011"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "CABA",
        "porcentaje": "50.00",
        "fechaIngreso": "05/06/2018",
        "importe": 308117616.5,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: CABA -Fecha de ingreso al patrimonio: 05/06/2018"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "SAGASTUME",
        "porcentaje": "100.00",
        "fechaIngreso": "14/01/2020",
        "importe": 1160000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: SAGASTUME -Fecha de ingreso al patrimonio: 14/01/2020"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTROS",
        "localidad": "ULLUM",
        "porcentaje": "100.00",
        "fechaIngreso": "30/10/2023",
        "importe": 25585000,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTROS -Localidad: ULLUM -Fecha de ingreso al patrimonio: 30/10/2023"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "KYMCO|LIKE 125|SCOOTER",
        "anioFabricacion": "2011",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2011",
        "importe": 0.01
      },
      {
        "descripcion": "TOYOTA|RAV4 HEV 2.5 AWD LIMITED CVT|TODO TERRENO",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2022",
        "importe": 50850000
      }
    ],
    "localidadesInmuebles": [
      "Caba",
      "Sagastume",
      "Ullum"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jimena-lopez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Cargo electivo nacional",
    "organismo": "nan",
    "totalBienesInicio": 7474109.5,
    "totalBienesFinal": 7474109.5,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 7474109.5,
    "ingresosAnuales": 29181001.89,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "Necochea",
        "porcentaje": "100.00",
        "fechaIngreso": "11/06/2022",
        "importe": 622326,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: Necochea -Fecha de ingreso al patrimonio: 11/06/2022"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Necochea",
        "porcentaje": "50.00",
        "fechaIngreso": "15/08/2013",
        "importe": 6851783.5,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Necochea -Fecha de ingreso al patrimonio: 15/08/2013"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Necochea"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "lorena-macyszyn": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 78192630.29,
    "totalBienesFinal": 124279459.63,
    "totalDeudasFinal": 1977022.72,
    "patrimonioNeto": 122302436.91,
    "ingresosAnuales": 44102959.18,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "BOULOGNE",
        "porcentaje": "100.00",
        "fechaIngreso": "06/12/2002",
        "importe": 23017792.62,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: BOULOGNE -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 06/12/2002"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Boulogne"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "marcelo-mango": {
    "anio": 2023,
    "tipoDeclaracion": "Baja",
    "cargo": "SECRETARIO GENERAL",
    "organismo": "MINISTERIO DE EDUCACION",
    "totalBienesInicio": 11242280.8,
    "totalBienesFinal": 22794994.61,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 22794994.61,
    "ingresosAnuales": 2550220.67,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "CIPOLLETTI",
        "porcentaje": "100.00",
        "fechaIngreso": "26/04/1996",
        "importe": 7591834.25,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: CIPOLLETTI -Fecha de ingreso al patrimonio: 26/04/1996"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "FERNADEZ ORO",
        "porcentaje": "100.00",
        "fechaIngreso": "10/08/2011",
        "importe": 2392767.19,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: FERNADEZ ORO -Fecha de ingreso al patrimonio: 10/08/2011"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CAPITAL FEDERAL",
        "porcentaje": "37.50",
        "fechaIngreso": "18/10/2007",
        "importe": 1168166.28,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CAPITAL FEDERAL -Fecha de ingreso al patrimonio: 18/10/2007"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CAPITAL FEDERAL",
        "porcentaje": "100.00",
        "fechaIngreso": "31/08/2021",
        "importe": 2352379.09,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CAPITAL FEDERAL -Fecha de ingreso al patrimonio: 31/08/2021"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "CHEVROLET ONIX JOY 5P 1.4 N LS MT + SEDAN 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2019",
        "importe": 1
      }
    ],
    "localidadesInmuebles": [
      "Cipolletti",
      "Fernadez Oro",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "mario-manrique": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "diputado nacional",
    "organismo": "SINDICATO DE MECANICOS Y AFINES DEL TRANSPORTE AUT",
    "totalBienesInicio": 87269906.52,
    "totalBienesFinal": 176175760.24,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 176175760.24,
    "ingresosAnuales": 141625846.72,
    "inmuebles": [
      {
        "tipo": "RURALES CON VIVIENDA",
        "destino": "RECREO O VERANEO / CESION GRATUITA",
        "localidad": "ISIDRO CASANOVA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/06/2015",
        "importe": 8364445.55,
        "descripcionOriginal": "Tipo: RURALES CON VIVIENDA -Destino: RECREO O VERANEO / CESION GRATUITA -Localidad: ISIDRO CASANOVA -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 01/06/2015"
      },
      {
        "tipo": "RURALES CON VIVIENDA",
        "destino": "OTRO",
        "localidad": "EL PALOMAR",
        "porcentaje": "33.33",
        "fechaIngreso": "31/05/2017",
        "importe": 4225840.85,
        "descripcionOriginal": "Tipo: RURALES CON VIVIENDA -Destino: OTRO -Localidad: EL PALOMAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 31/05/2017"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "EL PALOMAR",
        "porcentaje": "100.00",
        "fechaIngreso": "10/08/2021",
        "importe": 17663918.6,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: EL PALOMAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 10/08/2021"
      },
      {
        "tipo": "CASA",
        "destino": "RECREO O VERANEO / CESION GRATUITA",
        "localidad": "JUANA KOSLAY",
        "porcentaje": "100.00",
        "fechaIngreso": "22/03/2022",
        "importe": 3397015,
        "descripcionOriginal": "Tipo: CASA -Destino: RECREO O VERANEO / CESION GRATUITA -Localidad: JUANA KOSLAY -Provincia: SAN LUIS -Fecha de ingreso al patrimonio: 22/03/2022"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Isidro Casanova",
      "El Palomar",
      "Juana Koslay"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "marianela-marclay": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada Nacional",
    "organismo": "nan",
    "totalBienesInicio": 3806900,
    "totalBienesFinal": 5443900,
    "totalDeudasFinal": 1787233,
    "patrimonioNeto": 3656667,
    "ingresosAnuales": 17950630,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "CHEVROLET|COBALT 1.8 N LTZ|SEDAN 4 PUERTAS",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2016",
        "importe": 5443900
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "juan-marino": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 11932727.42,
    "totalBienesFinal": 6306905.52,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 6306905.52,
    "ingresosAnuales": 32881599.32,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "CABA",
        "porcentaje": "100.00",
        "fechaIngreso": "31/12/2021",
        "importe": 1485654,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: CABA -Fecha de ingreso al patrimonio: 31/12/2021"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CABA",
        "porcentaje": "50.00",
        "fechaIngreso": "31/12/2020",
        "importe": 408389,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CABA -Fecha de ingreso al patrimonio: 31/12/2020"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Caba"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "german-pedro-martinez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 23803907.24,
    "totalBienesFinal": 45719036.54,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 45719036.54,
    "ingresosAnuales": 45366866.67,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "ROSARIO",
        "porcentaje": "50.00",
        "fechaIngreso": "02/03/2012",
        "importe": 666540.95,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 02/03/2012"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "ROSARIO",
        "porcentaje": "50.00",
        "fechaIngreso": "27/10/2020",
        "importe": 1201117.31,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 27/10/2020"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: RENAULTNUEVO SANDERO STEPWAY EXPRESSIONSEDAN 5 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2019",
        "importe": 12734300
      }
    ],
    "localidadesInmuebles": [
      "Rosario"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "alvaro-martinez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO DE LA NACION",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 23236259.85,
    "totalBienesFinal": 88037911.6,
    "totalDeudasFinal": 4734000,
    "patrimonioNeto": 83303911.6,
    "ingresosAnuales": 45186741.01,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "LUJAN DE CUYO",
        "porcentaje": "100.00",
        "fechaIngreso": "12/07/2018",
        "importe": 12445594,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: LUJAN DE CUYO -Fecha de ingreso al patrimonio: 12/07/2018"
      },
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "LUJAN DE CUYO",
        "porcentaje": "100.00",
        "fechaIngreso": "25/03/2022",
        "importe": 1149112,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: LUJAN DE CUYO -Fecha de ingreso al patrimonio: 25/03/2022"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "HONDA FIT EXL SEDAN 5 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2017",
        "importe": 7891000
      },
      {
        "descripcion": "JEEP|COMPASS SERIE-S T270 AT6 FWD|RURAL 5 PUERTAS",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2024",
        "importe": 41230000
      }
    ],
    "localidadesInmuebles": [
      "Lujan De Cuyo"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "varinia-lis-marin": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada",
    "organismo": "nan",
    "totalBienesInicio": 82402680.66,
    "totalBienesFinal": 123639765.4,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 123639765.4,
    "ingresosAnuales": 54552427.8,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "SANTA ROSA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/12/1995",
        "importe": 31716495.4,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: SANTA ROSA -Provincia: LA PAMPA -Fecha de ingreso al patrimonio: 01/12/1995"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDA HR-V-EX",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2021",
        "importe": 21000000
      }
    ],
    "localidadesInmuebles": [
      "Santa Rosa"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "nicolas-massot": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 692029678.4,
    "totalBienesFinal": 1889124762.42,
    "totalDeudasFinal": 259863080.29,
    "patrimonioNeto": 1629261682.13,
    "ingresosAnuales": 196912877.09,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CIUDAD DE CORDOBA NORTE",
        "porcentaje": "100.00",
        "fechaIngreso": "22/07/2015",
        "importe": 11128134.33,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CIUDAD DE CORDOBA NORTE -Fecha de ingreso al patrimonio: 22/07/2015"
      },
      {
        "tipo": "COCHERA",
        "destino": "OTROS",
        "localidad": "CIUDAD DE CORDOBA NORTE",
        "porcentaje": "100.00",
        "fechaIngreso": "05/05/2016",
        "importe": 3970976.99,
        "descripcionOriginal": "Tipo: COCHERA -Destino: OTROS -Localidad: CIUDAD DE CORDOBA NORTE -Fecha de ingreso al patrimonio: 05/05/2016"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTROS",
        "localidad": "BAHIA BLANCA",
        "porcentaje": "20.00",
        "fechaIngreso": "01/10/2020",
        "importe": 2019643.3,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTROS -Localidad: BAHIA BLANCA -Fecha de ingreso al patrimonio: 01/10/2020"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "DON TORCUATO NORTE",
        "porcentaje": "100.00",
        "fechaIngreso": "03/07/2019",
        "importe": 53385902.45,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: DON TORCUATO NORTE -Fecha de ingreso al patrimonio: 03/07/2019"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "NISSAN|MARCH ADVANCE AT|SEDAN 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2020",
        "importe": 5791300
      },
      {
        "descripcion": "TOYOTA|SW4 4X4 SRX 2.8 TDI 6 A/T 7A|TODO TERRENO",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2022",
        "importe": 21967000
      },
      {
        "descripcion": "JEEP|RENEGADE LONGITUDE 1.8L AT6 AUTOMATICO|RURAL 5 PUERTAS",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2023",
        "importe": 15931100
      }
    ],
    "localidadesInmuebles": [
      "Ciudad De Cordoba Norte",
      "Bahia Blanca",
      "Don Torcuato Norte"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "martin-matzkin": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "REPRESENTANTE",
    "organismo": "PCIAS BS AS LA PAMPA Y RIO NEGRO ENTE EJECUTIVO PR",
    "totalBienesInicio": 166783311.82,
    "totalBienesFinal": 326473267.2,
    "totalDeudasFinal": 8758230,
    "patrimonioNeto": 317715037.2,
    "ingresosAnuales": 64979693.55,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SANTA ROSA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/07/2004",
        "importe": 48603920.7,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SANTA ROSA -Provincia: LA PAMPA -Fecha de ingreso al patrimonio: 01/07/2004"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SANTA ROSA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/12/2007",
        "importe": 20556763.98,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SANTA ROSA -Provincia: LA PAMPA -Fecha de ingreso al patrimonio: 01/12/2007"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "25.00",
        "fechaIngreso": "07/07/2012",
        "importe": 10407251.3,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 07/07/2012"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: CITROENC3 1.4 I SXSEDAN 5 PUERTAS",
        "anioFabricacion": "2010",
        "porcentaje": "50.00",
        "fechaIngreso": "06/2010",
        "importe": 1895850
      },
      {
        "descripcion": "Modelo: JEEPGRAND CHEROKEE OVERLANDTODO TERRENO",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2018",
        "importe": 26580000
      },
      {
        "descripcion": "Modelo: YAMAHATENERE ADVENTUREMOTOCICLETA",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2018",
        "importe": 3203000
      }
    ],
    "localidadesInmuebles": [
      "Santa Rosa",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "nicolas-mayoraz": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 92839410.7,
    "totalBienesFinal": 172517332.28,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 172517332.28,
    "ingresosAnuales": 99623054.66,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "FUNES",
        "porcentaje": "100.00",
        "fechaIngreso": "01/12/2004",
        "importe": 24572616.47,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: FUNES -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 01/12/2004"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "SAN CRISTOBAL",
        "porcentaje": "50.00",
        "fechaIngreso": "03/09/2007",
        "importe": 3545040.32,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: SAN CRISTOBAL -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 03/09/2007"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "22/11/2022",
        "importe": 14966578.2,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 22/11/2022"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "SAN CRISTOBAL",
        "porcentaje": "33.33",
        "fechaIngreso": "25/08/2006",
        "importe": 15938984.89,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: SAN CRISTOBAL -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 25/08/2006"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: KIASPORTAGE EX 2.0L A TTODO TERRENO",
        "anioFabricacion": "2014",
        "porcentaje": "50.00",
        "fechaIngreso": "12/2016",
        "importe": 6385400
      },
      {
        "descripcion": "Modelo: FORDTERRITORY 1.8L GAS AT TITANIUM EU5RURAL 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "75.00",
        "fechaIngreso": "10/2023",
        "importe": 23340000
      }
    ],
    "localidadesInmuebles": [
      "Funes",
      "San Cristobal",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "martin-menem": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "nan",
    "organismo": "nan",
    "totalBienesInicio": 605015973.67,
    "totalBienesFinal": 1524442619.27,
    "totalDeudasFinal": 131214876.26,
    "patrimonioNeto": 1393227743.01,
    "ingresosAnuales": -11165033.44,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "ALQUILER",
        "localidad": "CAPITAL FEDERAL",
        "porcentaje": "33.34",
        "fechaIngreso": "23/10/2022",
        "importe": 27547146.41,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: ALQUILER -Localidad: CAPITAL FEDERAL -Fecha de ingreso al patrimonio: 23/10/2022"
      },
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "LA RIOJA CAPITAL",
        "porcentaje": "50.00",
        "fechaIngreso": "14/07/2004",
        "importe": 2805205.82,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: LA RIOJA CAPITAL -Fecha de ingreso al patrimonio: 14/07/2004"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "OTROS",
        "localidad": "CAPITAL FEDERAL",
        "porcentaje": "33.34",
        "fechaIngreso": "23/10/2002",
        "importe": 49433921.91,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: OTROS -Localidad: CAPITAL FEDERAL -Fecha de ingreso al patrimonio: 23/10/2002"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "OTROS",
        "localidad": "CAPITAL FEDERAL",
        "porcentaje": "33.34",
        "fechaIngreso": "23/10/2022",
        "importe": 22700724.69,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: OTROS -Localidad: CAPITAL FEDERAL -Fecha de ingreso al patrimonio: 23/10/2022"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "CASA HABITACION",
        "localidad": "CAPITAL FEDERAL",
        "porcentaje": "100.00",
        "fechaIngreso": "23/12/2020",
        "importe": 22390463.87,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: CASA HABITACION -Localidad: CAPITAL FEDERAL -Fecha de ingreso al patrimonio: 23/12/2020"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "ALQUILER",
        "localidad": "CAPITAL FEDERAL",
        "porcentaje": "100.00",
        "fechaIngreso": "22/07/2016",
        "importe": 131294386.75,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: ALQUILER -Localidad: CAPITAL FEDERAL -Fecha de ingreso al patrimonio: 22/07/2016"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "NISSANKICKS EXCLUSIVE CVT BTSEDAN 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "10.00",
        "fechaIngreso": "01/2020",
        "importe": 1170690
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal",
      "La Rioja Capital"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "julieta-metral-asensio": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada nacional",
    "organismo": "nan",
    "totalBienesInicio": 9505789.4,
    "totalBienesFinal": 13621655.81,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 13621655.81,
    "ingresosAnuales": 9223131.64,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "PEUGEOT|208 FELINE 1.6|SEDAN 5 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2018",
        "importe": 7989200
      },
      {
        "descripcion": "MOTOCICLETA HONDA ST 70 K",
        "anioFabricacion": "1993",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2010",
        "importe": 2500000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "guillermo-michel": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 120617083.5,
    "totalBienesFinal": 420742158.42,
    "totalDeudasFinal": 8316166.02,
    "patrimonioNeto": 412425992.40000004,
    "ingresosAnuales": 311406178.29,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "83.00",
        "fechaIngreso": "29/11/2011",
        "importe": 225900027.6,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 29/11/2011"
      },
      {
        "tipo": "COUNTRY",
        "destino": "RECREO O VERANEO / CESION GRATUITA",
        "localidad": "GUALEGUAYCHU",
        "porcentaje": "50.00",
        "fechaIngreso": "02/01/2012",
        "importe": 33752389.39,
        "descripcionOriginal": "Tipo: COUNTRY-QUINTAS-ETC. -Destino: RECREO O VERANEO / CESION GRATUITA -Localidad: GUALEGUAYCHU -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 02/01/2012"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "ALDEA SAN ANTONIO",
        "porcentaje": "35.00",
        "fechaIngreso": "07/09/2021",
        "importe": 3000000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: ALDEA SAN ANTONIO -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 07/09/2021"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTAHILUX 4X4 DC SRX 2.8 TDI 6 ATPICK-UP",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2021",
        "importe": 36620000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal",
      "Gualeguaychu",
      "Aldea San Antonio"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "fernanda-mino": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada Nacional",
    "organismo": "nan",
    "totalBienesInicio": 6319672.9,
    "totalBienesFinal": 4500000,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 4500000,
    "ingresosAnuales": 7108764,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "DODGE JOURNEY",
        "anioFabricacion": "2012",
        "porcentaje": "50.00",
        "fechaIngreso": "11/2021",
        "importe": 4500000
      },
      {
        "descripcion": "Volkswagen Suran 1.6",
        "anioFabricacion": "2013",
        "porcentaje": "50.00",
        "fechaIngreso": "07/2024",
        "importe": 4500000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "soledad-molinuevo": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "ASESOR PRINCIPAL - RESPONSABLE",
    "organismo": "MINISTERIO DE TRABAJO -EMPLEO Y SEGURIDAD SOCIAL",
    "totalBienesInicio": 20133063,
    "totalBienesFinal": 27633134,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 27633134,
    "ingresosAnuales": 0,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "2021 -TOYOTA - COROLLA HV 1.8 XEI ECVT",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2021",
        "importe": 20000000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "matias-molle": {
    "anio": 2022,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 12449380,
    "totalBienesFinal": 12449380,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 12449380,
    "ingresosAnuales": 3991371.84,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "San Fernando",
        "porcentaje": "50.00",
        "fechaIngreso": "22/05/2014",
        "importe": 2154413,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: San Fernando -Fecha de ingreso al patrimonio: 22/05/2014"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "SAN FERNANDO",
        "porcentaje": "50.00",
        "fechaIngreso": "22/05/2014",
        "importe": 1800067,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: SAN FERNANDO -Fecha de ingreso al patrimonio: 22/05/2014"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "FCA AUTOMOBILES ARGENTINA S.A. FIAT CRONOS PRECISION 1.8 MT",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2021",
        "importe": 4930700
      },
      {
        "descripcion": "TOYOTA TOYOTA COROLLA XEI PACK 1.8 M/T",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2019",
        "importe": 2818500
      },
      {
        "descripcion": "CITROEN XSARA PICASSO 2.0 HDI",
        "anioFabricacion": "2008",
        "porcentaje": "50.00",
        "fechaIngreso": "05/2008",
        "importe": 745700
      }
    ],
    "localidadesInmuebles": [
      "San Fernando"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2022 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "soledad-mondaca": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 13555700,
    "totalBienesFinal": 21242346.68,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 21242346.68,
    "ingresosAnuales": 17558981.79,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "FORD|ECOSPORT TITANIUM 1.6L MT N|RURAL 5 PUERTAS",
        "anioFabricacion": "2014",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2014",
        "importe": 7802400
      },
      {
        "descripcion": "RENAULT|DUSTER PH2 EXPRESSION 1.6|RURAL 5 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2017",
        "importe": 13439400
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "juan-pablo-montenegro": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "jefe regional del litoral",
    "organismo": "ADMINISTRACION NACIONAL DE LA SEGURIDAD SOCIAL ANS",
    "totalBienesInicio": 190000000,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "ibarlucea",
        "porcentaje": "100.00",
        "fechaIngreso": "01/06/2006",
        "importe": 150000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: ibarlucea -Fecha de ingreso al patrimonio: 01/06/2006"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "ibarlucea",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2013",
        "importe": 25000000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: ibarlucea  -Fecha de ingreso al patrimonio: 01/01/2013"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "ford focus",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2017",
        "importe": 15000000
      }
    ],
    "localidadesInmuebles": [
      "Ibarlucea"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "roxana-monzon": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "diputada nacional de la provincia de buenos aires",
    "organismo": "MUNICIPALIDAD DE MERLO",
    "totalBienesInicio": 11528952.18,
    "totalBienesFinal": 26495101.14,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 26495101.14,
    "ingresosAnuales": 141409760.1,
    "inmuebles": [
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "APOSTOLES",
        "porcentaje": "100.00",
        "fechaIngreso": "04/05/2018",
        "importe": 1296159.22,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: APOSTOLES -Provincia: MISIONES -Fecha de ingreso al patrimonio: 04/05/2018"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "APOSTOLES",
        "porcentaje": "100.00",
        "fechaIngreso": "12/10/2018",
        "importe": 800000,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: APOSTOLES -Provincia: MISIONES -Fecha de ingreso al patrimonio: 12/10/2018"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "APOSTOLES",
        "porcentaje": "100.00",
        "fechaIngreso": "26/11/2020",
        "importe": 2752877.93,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: APOSTOLES -Provincia: MISIONES -Fecha de ingreso al patrimonio: 26/11/2020"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "APOSTOLES",
        "porcentaje": "100.00",
        "fechaIngreso": "22/10/2021",
        "importe": 3702403.11,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: APOSTOLES -Provincia: MISIONES -Fecha de ingreso al patrimonio: 22/10/2021"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "INVERSION",
        "localidad": "APOSTOLES",
        "porcentaje": "100.00",
        "fechaIngreso": "25/10/2021",
        "importe": 818981.38,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: INVERSION -Localidad: APOSTOLES -Provincia: MISIONES -Fecha de ingreso al patrimonio: 25/10/2021"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: PEUGEOT208 ALLURE 1.6 TIPTRONIC SMEGSEDAN 5 PUERTAS",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2016",
        "importe": 5979200
      }
    ],
    "localidadesInmuebles": [
      "Apostoles"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "francisco-morchio": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 212876974.42,
    "totalBienesFinal": 438291890.77,
    "totalDeudasFinal": 2417331.84,
    "patrimonioNeto": 435874558.93,
    "ingresosAnuales": 69431201.98,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "GUALEGUAY",
        "porcentaje": "100.00",
        "fechaIngreso": "27/05/2016",
        "importe": 29729919.54,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: GUALEGUAY -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 27/05/2016"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "MIRAMAR",
        "porcentaje": "22.22",
        "fechaIngreso": "25/11/2022",
        "importe": 1175671.25,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: MIRAMAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 25/11/2022"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDACR-V EXTODO TERRENO",
        "anioFabricacion": "2008",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2022",
        "importe": 10806200
      },
      {
        "descripcion": "Modelo: PANTHER QUADSWR 150CUATRICICLO",
        "anioFabricacion": "2009",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2016",
        "importe": 1550000
      }
    ],
    "localidadesInmuebles": [
      "Gualeguay",
      "Miramar"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "cecilia-moreau": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 30717719.38,
    "totalBienesFinal": 122022480.96,
    "totalDeudasFinal": 96830000,
    "patrimonioNeto": 25192480.959999993,
    "ingresosAnuales": 32712199.43,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "SAN ISIDRO",
        "porcentaje": "100.00",
        "fechaIngreso": "01/06/2010",
        "importe": 22587085.63,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: SAN ISIDRO -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 01/06/2010"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "05/09/2022",
        "importe": 10837354.88,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: ALQUILER / CONTRAPRESTACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 05/09/2022"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTAETIOS XLS 1.5 4A TSEDAN 5 PUERTAS",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2016",
        "importe": 9306600
      }
    ],
    "localidadesInmuebles": [
      "San Isidro",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "hugo-antonio-moyano": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "ESTUDIO JURIDICO DR. HUGO MOYANO & ASOCIADOS S.R.L",
    "totalBienesInicio": 160600731.14,
    "totalBienesFinal": 255760304.34,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 255760304.34,
    "ingresosAnuales": 55867606.59,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "01/06/2012",
        "importe": 24035938.06,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 01/06/2012"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENVENTO GLI 350TSI DSGSEDAN 4 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2023",
        "importe": 34000000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gabriela-luciana-munoz": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "JEFE DE OFICINA ANSES NEUQUEN",
    "organismo": "ADMINISTRACION NACIONAL DE LA SEGURIDAD SOCIAL ANS",
    "totalBienesInicio": 41100000,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "CHEVROLET|ONIX 1.4 N LT|SEDAN 5 PUERTAS",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2023",
        "importe": 15000000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "miriam-niveyro": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "DIRECTORA DE ACCESO AL SUELO URBANO",
    "organismo": "nan",
    "totalBienesInicio": 55598077.45,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "RECREO O VERANEO",
        "localidad": "USPALLATA",
        "porcentaje": "50.00",
        "fechaIngreso": "05/12/2020",
        "importe": 95000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: RECREO O VERANEO -Localidad: USPALLATA -Fecha de ingreso al patrimonio: 05/12/2020"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "AFECTADO A LA EXPLOTACION",
        "localidad": "CLAYPOLE",
        "porcentaje": "100.00",
        "fechaIngreso": "07/01/1994",
        "importe": 45000000,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: AFECTADO A LA EXPLOTACION -Localidad: CLAYPOLE -Fecha de ingreso al patrimonio: 07/01/1994"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "RENAULT MEGANE TRI 1.6L 16V SL EXCEPTION",
        "anioFabricacion": "2009",
        "porcentaje": "50.00",
        "fechaIngreso": "03/2009",
        "importe": 1250000
      },
      {
        "descripcion": "JEEP RENEGADE 1.8L SPORT RURAL 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "50.00",
        "fechaIngreso": "10/2019",
        "importe": 3896300
      }
    ],
    "localidadesInmuebles": [
      "Uspallata",
      "Claypole"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "sebastian-noblega": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 42224915,
    "totalBienesFinal": 120087162.72,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 120087162.72,
    "ingresosAnuales": 40643392,
    "inmuebles": [
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTROS",
        "localidad": "FRAY MAMERTO ESQUIU",
        "porcentaje": "50.00",
        "fechaIngreso": "26/12/2019",
        "importe": 1900000,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTROS -Localidad: FRAY MAMERTO ESQUIU -Fecha de ingreso al patrimonio: 26/12/2019"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "TINOGASTA",
        "porcentaje": "100.00",
        "fechaIngreso": "03/02/2024",
        "importe": 45000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: TINOGASTA -Fecha de ingreso al patrimonio: 03/02/2024"
      },
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "TINOGASTA",
        "porcentaje": "100.00",
        "fechaIngreso": "12/01/2024",
        "importe": 18000000,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: TINOGASTA -Fecha de ingreso al patrimonio: 12/01/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "TODO TERRENO CHEVROLET EQUINOX",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2021",
        "importe": 19700000
      },
      {
        "descripcion": "FORD K VIRAL 1.0",
        "anioFabricacion": "2011",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2011",
        "importe": 3150000
      },
      {
        "descripcion": "FORD ZG RANGER DC",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2017",
        "importe": 18800000
      },
      {
        "descripcion": "FORD RANCHER DC XLT PICK AP",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2024",
        "importe": 28000000
      }
    ],
    "localidadesInmuebles": [
      "Fray Mamerto Esquiu",
      "Tinogasta"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "blanca-ines-osuna": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada Nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 31399174.06,
    "totalBienesFinal": 36850116.31,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 36850116.31,
    "ingresosAnuales": 5016263673.01,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "PARANA",
        "porcentaje": "50.00",
        "fechaIngreso": "11/06/1990",
        "importe": 4055208.88,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: PARANA -Provincia: ENTRE RIOS -Fecha de ingreso al patrimonio: 11/06/1990"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "10/03/2009",
        "importe": 3132822.72,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 10/03/2009"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Paraná",
        "porcentaje": "50.00",
        "fechaIngreso": "11/06/1990",
        "importe": 14025241.89,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Paraná -Fecha de ingreso al patrimonio: 11/06/1990"
      },
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "Paraná",
        "porcentaje": "50.00",
        "fechaIngreso": "01/04/2024",
        "importe": 632315.92,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: Paraná -Fecha de ingreso al patrimonio: 01/04/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: FORDFOCUS 5P 2.0L N AT SE PLUSSEDAN 5 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "50.00",
        "fechaIngreso": "06/2018",
        "importe": 5319000
      },
      {
        "descripcion": "Volkswagen T-Cross 1.6 MSI 110 CV AT",
        "anioFabricacion": "2021",
        "porcentaje": "50.00",
        "fechaIngreso": "06/2023",
        "importe": 10500000
      }
    ],
    "localidadesInmuebles": [
      "Parana",
      "Capital Federal",
      "Paraná"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "marcela-marina-pagano": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "AMERICA T.V. SA",
    "totalBienesInicio": 88059990.97,
    "totalBienesFinal": 129001393.52,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 129001393.52,
    "ingresosAnuales": 52390160.2,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "05/12/2011",
        "importe": 0,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 05/12/2011"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "08/08/2023",
        "importe": 64357304.16,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 08/08/2023"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: PEUGEOT208 ACTIVE TIPTRONIC 1.6LSEDAN 5 PUERTAS",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2021",
        "importe": 15300000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "sergio-omar-palazzo": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 47867105.88,
    "totalBienesFinal": 130932342.31,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 130932342.31,
    "ingresosAnuales": 32835703.19,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "EL PALOMAR",
        "porcentaje": "29.68",
        "fechaIngreso": "13/12/2012",
        "importe": 53955621,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: EL PALOMAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 13/12/2012"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "Capital Federal",
        "porcentaje": "33.33",
        "fechaIngreso": "27/01/2017",
        "importe": 17435687.68,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 27/01/2017"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENNIVUS HIGHLINE HERO 200 TSI ATSEDAN 5 PUERTAS",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2021",
        "importe": 0
      },
      {
        "descripcion": "Modelo: TOYOTACOROLLA CROSS SEG 2.0 CVTRURAL 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2023",
        "importe": 24300000
      }
    ],
    "localidadesInmuebles": [
      "El Palomar",
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "sebastian-pareja": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "SUBSECRETARIO DE INTEGRACION SOCIO URBANA",
    "organismo": "HONORABLE SENADO DE LA NACION",
    "totalBienesInicio": 82753812.79,
    "totalBienesFinal": 130417981.54,
    "totalDeudasFinal": 89883.58,
    "patrimonioNeto": 130328097.96000001,
    "ingresosAnuales": 37017550.06,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "12/11/2002",
        "importe": 38597696.08,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 12/11/2002"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: CHEVROLETTRACKER AWD PREMIER +TODO TERRENO",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2022",
        "importe": 21000000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maria-graciela-parola": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 2478712.87,
    "totalBienesFinal": 5965603.73,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 5965603.73,
    "ingresosAnuales": 42777695.33,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "marcos-patino-brizuela": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Director Ejecutivo UGL III",
    "organismo": "INSTITUTO NACIONAL DE SERVICIOS SOCIALES PARA JUBI",
    "totalBienesInicio": 240000,
    "totalBienesFinal": 5609823,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 5609823,
    "ingresosAnuales": 37331351.96,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "córdoba",
        "porcentaje": "100.00",
        "fechaIngreso": "08/06/2023",
        "importe": 290000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: córdoba -Fecha de ingreso al patrimonio: 08/06/2023"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Córdoba"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "santiago-pauli": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 5185042.45,
    "totalBienesFinal": 9578878,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 9578878,
    "ingresosAnuales": 37865673.35,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "Modelo: PEUGEOT307 XS 1.6 5P 110CVSEDAN 5 PUERTAS",
        "anioFabricacion": "2010",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2021",
        "importe": 4992800
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "esteban-paulon": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 14895821.98,
    "totalBienesFinal": 22475211.28,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 22475211.28,
    "ingresosAnuales": 26505872.17,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "ROSARIO",
        "porcentaje": "50.00",
        "fechaIngreso": "01/11/2016",
        "importe": 11025,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: ROSARIO -Fecha de ingreso al patrimonio: 01/11/2016"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CIUDAD AUTONOMA DE BUENOS AIRES",
        "porcentaje": "100.00",
        "fechaIngreso": "28/12/2023",
        "importe": 9350750,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CIUDAD AUTONOMA DE BUENOS AIRES -Fecha de ingreso al patrimonio: 28/12/2023"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "CITROEN|C4 CACTUS VTI 115 FEEL PACK PLUS AM22|SEDAN 5 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "50.00",
        "fechaIngreso": "08/2022",
        "importe": 7650000
      }
    ],
    "localidadesInmuebles": [
      "Rosario",
      "Ciudad Autonoma De Buenos Aires"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "gabriela-pedrali": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "nan",
    "organismo": "nan",
    "totalBienesInicio": 34002863.79,
    "totalBienesFinal": 49165647.81,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 49165647.81,
    "ingresosAnuales": 54058020.23,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "RECREO O VERANEO",
        "localidad": "PUNTA DEL ESTE",
        "porcentaje": "100.00",
        "fechaIngreso": "01/02/2007",
        "importe": 1200000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: RECREO O VERANEO -Localidad: PUNTA DEL ESTE -Fecha de ingreso al patrimonio: 01/02/2007"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "CIUDAD AUTONOMA BUENOS AIRES",
        "porcentaje": "100.00",
        "fechaIngreso": "03/03/2010",
        "importe": 13867094.79,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 03/03/2010"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "VOLKSWAGEN|GOLF HIGHLINE 250TSI DSG|SEDAN 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2023",
        "importe": 22274600
      }
    ],
    "localidadesInmuebles": [
      "Punta Del Este",
      "Ciudad Autonoma Buenos Aires"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "federico-agustin-pelli": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "nan",
    "organismo": "nan",
    "totalBienesInicio": 179865310,
    "totalBienesFinal": 229048654,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 229048654,
    "ingresosAnuales": 26359141.96,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Cebil Redondo",
        "porcentaje": "50.00",
        "fechaIngreso": "12/04/2017",
        "importe": 125000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Cebil Redondo -Fecha de ingreso al patrimonio: 12/04/2017"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "San Miguel de Tucumán",
        "porcentaje": "100.00",
        "fechaIngreso": "01/11/2010",
        "importe": 60000000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: San Miguel de Tucumán -Fecha de ingreso al patrimonio: 01/11/2010"
      },
      {
        "tipo": "COCHERA",
        "destino": "OTROS",
        "localidad": "San Miguel de Tucumán",
        "porcentaje": "100.00",
        "fechaIngreso": "01/06/2012",
        "importe": 10000000,
        "descripcionOriginal": "Tipo: COCHERA -Destino: OTROS -Localidad: San Miguel de Tucumán -Fecha de ingreso al patrimonio: 01/06/2012"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "San Miguel de Tucuman",
        "porcentaje": "100.00",
        "fechaIngreso": "01/11/2010",
        "importe": 77000000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: San Miguel de Tucuman -Fecha de ingreso al patrimonio: 01/11/2010"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "HONDA|HR-V EXL CVT|SEDAN 5 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "50.00",
        "fechaIngreso": "09/2021",
        "importe": 11000000
      },
      {
        "descripcion": "CHEVROLET|ONIX 1.4 N LT|SEDAN 5 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "50.00",
        "fechaIngreso": "06/2018",
        "importe": 3465500
      }
    ],
    "localidadesInmuebles": [
      "Cebil Redondo",
      "San Miguel De Tucumán",
      "San Miguel De Tucuman"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jose-peluc": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 13817940,
    "totalBienesFinal": 20598307.8,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 20598307.8,
    "ingresosAnuales": 50462173.45,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENSAVEIRO CROSS 1.6PICK-UP CABINA DOBLE",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2017",
        "importe": 14066400
      },
      {
        "descripcion": "Modelo: FIATPALIO (326) ATTRACTIVE 5P 1.4 8VSEDAN 5 PUERTAS",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2019",
        "importe": 4169200
      },
      {
        "descripcion": "Modelo: No informado",
        "anioFabricacion": "1980",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2023",
        "importe": 50000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "paula-andrea-penacca": {
    "anio": 2023,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputada",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 8030244.37,
    "totalBienesFinal": 22043239.63,
    "totalDeudasFinal": 490800,
    "patrimonioNeto": 21552439.63,
    "ingresosAnuales": 8899845.43,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "50.00",
        "fechaIngreso": "25/02/2018",
        "importe": 7948239.65,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 25/02/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENT-CROSS TRENDLINE 1.6 MSI 110CVRURAL 5 PUERTAS",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2019",
        "importe": 9307100
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "luis-petri": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 38788089.12,
    "totalBienesFinal": 79622037.65,
    "totalDeudasFinal": 17700000,
    "patrimonioNeto": 61922037.650000006,
    "ingresosAnuales": 41826726.44,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "MENDOZA (CAPITAL)",
        "porcentaje": "50.00",
        "fechaIngreso": "10/08/2024",
        "importe": 35619000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: MENDOZA (CAPITAL) -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 10/08/2024"
      },
      {
        "tipo": "COCHERA",
        "destino": "INVERSION",
        "localidad": "MENDOZA",
        "porcentaje": "50.00",
        "fechaIngreso": "10/08/2024",
        "importe": 2374600,
        "descripcionOriginal": "Tipo: COCHERA -Destino: INVERSION -Localidad: MENDOZA -Provincia: MENDOZA -Fecha de ingreso al patrimonio: 10/08/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: No informado",
        "anioFabricacion": "1973",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2014",
        "importe": 0
      },
      {
        "descripcion": "Modelo: CHEVROLETS10 2.8TD 4X2 LTZPICK-UP CABINA DOBLE",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2018",
        "importe": 25044800
      }
    ],
    "localidadesInmuebles": [
      "Mendoza (Capital)",
      "Mendoza"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maria-lorena-petrovich": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Directora Nacional de Bienestar",
    "organismo": "MINISTERIO DE SEGURIDAD",
    "totalBienesInicio": 0,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "luis-albino-picat": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputado Nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 367479478.04,
    "totalBienesFinal": 611168731.62,
    "totalDeudasFinal": 19518306.24,
    "patrimonioNeto": 591650425.38,
    "ingresosAnuales": 71264643.75,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SINSACATE",
        "porcentaje": "100.00",
        "fechaIngreso": "31/12/2008",
        "importe": 139669162.86,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SINSACATE -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 31/12/2008"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "JESUS MARIA",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/2017",
        "importe": 4508375,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: JESUS MARIA -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 01/01/2017"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "INVERSION",
        "localidad": "JESUS MARIA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2018",
        "importe": 31477676.82,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: INVERSION -Localidad: JESUS MARIA -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 01/01/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: TOYOTARAV4 HEV 2.5 AWD LIMITED CVTTODO TERRENO",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2023",
        "importe": 50850000
      }
    ],
    "localidadesInmuebles": [
      "Sinsacate",
      "Jesus Maria"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "miguel-angel-pichetto": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 183671395.22,
    "totalBienesFinal": 366447371.27,
    "totalDeudasFinal": 2447920.15,
    "patrimonioNeto": 363999451.12,
    "ingresosAnuales": 41309347.44,
    "inmuebles": [
      {
        "tipo": "LOCAL",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "VIEDMA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/03/1989",
        "importe": 73570868.96,
        "descripcionOriginal": "Tipo: LOCAL -Destino: ALQUILER / CONTRAPRESTACION -Localidad: VIEDMA -Provincia: RIO NEGRO -Fecha de ingreso al patrimonio: 01/03/1989"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "10/10/2000",
        "importe": 53152837.51,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 10/10/2000"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "INVERSION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "01/10/2000",
        "importe": 65870387.88,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: INVERSION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 01/10/2000"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "VICENTE LOPEZ",
        "porcentaje": "50.00",
        "fechaIngreso": "17/01/2017",
        "importe": 47758444,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: VICENTE LOPEZ -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 17/01/2017"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "INVERSION",
        "localidad": "VIEDMA",
        "porcentaje": "100.00",
        "fechaIngreso": "07/03/2018",
        "importe": 16793812.96,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: INVERSION -Localidad: VIEDMA -Provincia: RIO NEGRO -Fecha de ingreso al patrimonio: 07/03/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENVOLKSWAGEN VENTO 1.4TSI BM TECHSEDAN 4 PUERTAS",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2018",
        "importe": 15365800
      },
      {
        "descripcion": "Modelo: PEUGEOT208 FELINE 1.6 115SEDAN 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "50.00",
        "fechaIngreso": "04/2020",
        "importe": 5382900
      },
      {
        "descripcion": "Modelo: VOLKSWAGENAMAROK TRENDLINE 4X4 2.0L TDI 140 CVPICK-UP",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2022",
        "importe": 25850000
      }
    ],
    "localidadesInmuebles": [
      "Viedma",
      "Capital Federal",
      "Vicente Lopez"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "horacio-pietragalla-corti": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 39488709.01,
    "totalBienesFinal": 72587293.1,
    "totalDeudasFinal": 24544000,
    "patrimonioNeto": 48043293.099999994,
    "ingresosAnuales": 30003451.02,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "EZEIZA",
        "porcentaje": "100.00",
        "fechaIngreso": "07/03/2019",
        "importe": 5424000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: EZEIZA -Fecha de ingreso al patrimonio: 07/03/2019"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CABA",
        "porcentaje": "40.00",
        "fechaIngreso": "21/08/2024",
        "importe": 37152000,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CABA -Fecha de ingreso al patrimonio: 21/08/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "CHEVROLET CAPTIVA LT 2.4 M/T TODO TERRENO",
        "anioFabricacion": "2018",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2023",
        "importe": 16000000
      }
    ],
    "localidadesInmuebles": [
      "Ezeiza",
      "Caba"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "lorena-pokoik": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 34700806.42,
    "totalBienesFinal": 80976662.48,
    "totalDeudasFinal": 2255853.56,
    "patrimonioNeto": 78720808.92,
    "ingresosAnuales": 36947741.65,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CABA",
        "porcentaje": "25.00",
        "fechaIngreso": "06/05/2017",
        "importe": 30096606.05,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CABA -Fecha de ingreso al patrimonio: 06/05/2017"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "CABA",
        "porcentaje": "100.00",
        "fechaIngreso": "08/08/2018",
        "importe": 40519986.7,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: CABA -Fecha de ingreso al patrimonio: 08/08/2018"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Caba"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "maria-celeste-ponce": {
    "anio": 2023,
    "tipoDeclaracion": "Inicial",
    "cargo": "Diputada Nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 6600000,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [],
    "vehiculos": [],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "luciana-potenza": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 14165489.46,
    "totalBienesFinal": 29709842.01,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 29709842.01,
    "ingresosAnuales": 41513581.54,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTROS",
        "localidad": "ALEJANDRO PETION",
        "porcentaje": "50.00",
        "fechaIngreso": "20/10/2021",
        "importe": 722400,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTROS -Localidad: ALEJANDRO PETION -CAÑUELAS -Fecha de ingreso al patrimonio: 20/10/2021"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "04817BN - FIAT PALIO (326) ESSENCE 5P 1.616V",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2016",
        "importe": 5505000
      }
    ],
    "localidadesInmuebles": [
      "Alejandro Petion"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "agustina-lucrecia-propato": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 86196311.13,
    "totalBienesFinal": 171308394.68,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 171308394.68,
    "ingresosAnuales": 43356946.69,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "09/01/2014",
        "importe": 39577799.23,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: ALQUILER / CONTRAPRESTACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 09/01/2014"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "10/11/2014",
        "importe": 63725785.23,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 10/11/2014"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "CALAFATE",
        "porcentaje": "100.00",
        "fechaIngreso": "23/05/2014",
        "importe": 8000000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: CALAFATE -Provincia: SANTA CRUZ -Fecha de ingreso al patrimonio: 23/05/2014"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: YAMAHATTR125LWEMOTOCICLETA",
        "anioFabricacion": "2007",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2015",
        "importe": 1913200
      },
      {
        "descripcion": "Modelo: TOYOTARAV4 4X2 A TRURAL 5 PUERTAS",
        "anioFabricacion": "2012",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2022",
        "importe": 12992600
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal",
      "Calafate"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "manuel-quintar": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 511396861.98,
    "totalBienesFinal": 231635753.22,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 231635753.22,
    "ingresosAnuales": 72905777.9,
    "inmuebles": [
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "SALTA",
        "porcentaje": "25.00",
        "fechaIngreso": "13/06/2017",
        "importe": 263905.13,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: SALTA -Provincia: SALTA -Fecha de ingreso al patrimonio: 13/06/2017"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "SALTA",
        "porcentaje": "50.00",
        "fechaIngreso": "13/06/2017",
        "importe": 1001859.22,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: SALTA -Provincia: SALTA -Fecha de ingreso al patrimonio: 13/06/2017"
      },
      {
        "tipo": "LOCAL",
        "destino": "OTRO",
        "localidad": "SAN SALVADOR DE JUJUY",
        "porcentaje": "33.00",
        "fechaIngreso": "14/12/2017",
        "importe": 5086362.19,
        "descripcionOriginal": "Tipo: LOCAL -Destino: OTRO -Localidad: SAN SALVADOR DE JUJUY -Provincia: JUJUY -Fecha de ingreso al patrimonio: 14/12/2017"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "SAN SALVADOR DE JUJUY",
        "porcentaje": "50.00",
        "fechaIngreso": "14/12/2017",
        "importe": 7706609.38,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: SAN SALVADOR DE JUJUY -Provincia: JUJUY -Fecha de ingreso al patrimonio: 14/12/2017"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTRO",
        "localidad": "SAN SALVADOR DE JUJUY",
        "porcentaje": "33.00",
        "fechaIngreso": "14/12/2017",
        "importe": 5086362.19,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTRO -Localidad: SAN SALVADOR DE JUJUY -Provincia: JUJUY -Fecha de ingreso al patrimonio: 14/12/2017"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN SALVADOR DE JUJUY",
        "porcentaje": "50.00",
        "fechaIngreso": "14/12/2017",
        "importe": 3538979.13,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN SALVADOR DE JUJUY -Provincia: JUJUY -Fecha de ingreso al patrimonio: 14/12/2017"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "SAN SALVADOR DE JUJUY",
        "porcentaje": "100.00",
        "fechaIngreso": "13/09/2018",
        "importe": 15413218.75,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: SAN SALVADOR DE JUJUY -Provincia: JUJUY -Fecha de ingreso al patrimonio: 13/09/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENAMAROK DC V6 EXTREME 3.0L TDI 4X4 APICK-UP",
        "anioFabricacion": "2018",
        "porcentaje": "99.00",
        "fechaIngreso": "01/2019",
        "importe": 24124914
      },
      {
        "descripcion": "Modelo: KTM990 ADVENTUREMOTOCICLETA",
        "anioFabricacion": "2011",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2019",
        "importe": 10630000
      },
      {
        "descripcion": "Modelo: MERCEDES BENZML 320 CDI 4MATICTODO TERRENO",
        "anioFabricacion": "2009",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2019",
        "importe": 24440000
      },
      {
        "descripcion": "Modelo: No informado",
        "anioFabricacion": "2019",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2019",
        "importe": 0
      },
      {
        "descripcion": "Modelo: HUSQVARNATE 300IMOTOCICLETA",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2023",
        "importe": 19878000
      },
      {
        "descripcion": "Modelo: TOYOTA TRANS.DE PASAJEROS HIACE WAGON 2.8 TDI 6AT 10A",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "11/2024",
        "importe": 34000000
      }
    ],
    "localidadesInmuebles": [
      "Salta",
      "San Salvador De Jujuy"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "ariel-rauschenberger": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputado Nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 127433783.01,
    "totalBienesFinal": 252990623.92,
    "totalDeudasFinal": 454509.06,
    "patrimonioNeto": 252536114.85999998,
    "ingresosAnuales": 18857861.45,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SANTA ROSA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/12/1998",
        "importe": 37626632.47,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SANTA ROSA -Provincia: LA PAMPA -Fecha de ingreso al patrimonio: 01/12/1998"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "BERNASCONI",
        "porcentaje": "50.00",
        "fechaIngreso": "02/02/2004",
        "importe": 23805895.16,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: BERNASCONI -Provincia: LA PAMPA -Fecha de ingreso al patrimonio: 02/02/2004"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "BERNASCONI",
        "porcentaje": "50.00",
        "fechaIngreso": "07/08/2012",
        "importe": 1395025.77,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: BERNASCONI -Provincia: LA PAMPA -Fecha de ingreso al patrimonio: 07/08/2012"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "BERNASCONI",
        "porcentaje": "50.00",
        "fechaIngreso": "11/08/2012",
        "importe": 1071555.95,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: BERNASCONI -Provincia: LA PAMPA -Fecha de ingreso al patrimonio: 11/08/2012"
      },
      {
        "tipo": "RURALES SIN VIVIENDA",
        "destino": "OTRO",
        "localidad": "BERNASCONI",
        "porcentaje": "50.00",
        "fechaIngreso": "12/12/2023",
        "importe": 6384683.22,
        "descripcionOriginal": "Tipo: RURALES SIN VIVIENDA -Destino: OTRO -Localidad: BERNASCONI -Provincia: LA PAMPA -Fecha de ingreso al patrimonio: 12/12/2023"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Santa Rosa",
      "Bernasconi"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "veronica-razzini": {
    "anio": 2023,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 8266212.49,
    "totalBienesFinal": 40107949.77,
    "totalDeudasFinal": 25786876.9,
    "patrimonioNeto": 14321072.870000005,
    "ingresosAnuales": 27256728.28,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTROS",
        "localidad": "ROSARIO",
        "porcentaje": "33.34",
        "fechaIngreso": "30/11/2023",
        "importe": 2733880,
        "descripcionOriginal": "Tipo: CASA -Destino: OTROS -Localidad: ROSARIO -Fecha de ingreso al patrimonio: 30/11/2023"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Rosario"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "laura-elena-rodriguez-machado": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA  NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 103968574.62,
    "totalBienesFinal": 219362859.35,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 219362859.35,
    "ingresosAnuales": 46847295.82,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "BARRIO GENERAL PAZ",
        "porcentaje": "100.00",
        "fechaIngreso": "22/12/2014",
        "importe": 49651464.7,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: BARRIO GENERAL PAZ -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 22/12/2014"
      },
      {
        "tipo": "COCHERA",
        "destino": "OTRO",
        "localidad": "BARRIO GENERAL PAZ",
        "porcentaje": "100.00",
        "fechaIngreso": "22/12/2014",
        "importe": 4699120.48,
        "descripcionOriginal": "Tipo: COCHERA -Destino: OTRO -Localidad: BARRIO GENERAL PAZ -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 22/12/2014"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "BARRIO CENTRO",
        "porcentaje": "100.00",
        "fechaIngreso": "25/04/2017",
        "importe": 57014605.91,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: BARRIO CENTRO -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 25/04/2017"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "BARRIO GENERAL PAZ",
        "porcentaje": "100.00",
        "fechaIngreso": "10/03/2021",
        "importe": 59301804.26,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: BARRIO GENERAL PAZ -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 10/03/2021"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: NISSANKICKS 1.6 ADVANCE CVT PLUSSEDAN 5 PUERTAS",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2022",
        "importe": 21940000
      }
    ],
    "localidadesInmuebles": [
      "Barrio General Paz",
      "Barrio Centro"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "agustin-oscar-rossi": {
    "anio": 2023,
    "tipoDeclaracion": "Baja",
    "cargo": "JEFE DE GABINETE DE MINISTROS DE LA NACIÓN",
    "organismo": "JEFATURA DE GABINETE DE MINISTROS",
    "totalBienesInicio": 16108223.86,
    "totalBienesFinal": 26142227.78,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 26142227.78,
    "ingresosAnuales": 18935125.21,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "ROSARIO",
        "porcentaje": "50.00",
        "fechaIngreso": "01/11/2000",
        "importe": 451777.66,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: ROSARIO -Fecha de ingreso al patrimonio: 01/11/2000"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "COSTA DEL ESTE",
        "porcentaje": "50.00",
        "fechaIngreso": "31/12/2015",
        "importe": 445828.51,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: COSTA DEL ESTE -Fecha de ingreso al patrimonio: 31/12/2015"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "FIAT CRONOS PRECISION 1.8 AT SEDAN 4 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2022",
        "importe": 3678800
      }
    ],
    "localidadesInmuebles": [
      "Rosario",
      "Costa Del Este"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "yamila-ruiz": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 9806488,
    "totalBienesFinal": 37283817,
    "totalDeudasFinal": 14463864,
    "patrimonioNeto": 22819953,
    "ingresosAnuales": 36942770,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "TOYOTA ETIOS SEDAN 5 PUERTAS",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2017",
        "importe": 8562350
      },
      {
        "descripcion": "NISSAN FRONTIER 4X2 AT CD",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2024",
        "importe": 32880000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "marina-dorotea-salzmann": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "CONCEJAL MUNICIPALIDAD MARCOS PAZ",
    "organismo": "MUNICIPALIDAD DE MARCOS PAZ",
    "totalBienesInicio": 62210917,
    "totalBienesFinal": 90827441.62,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 90827441.62,
    "ingresosAnuales": 27286941.28,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "09/02/2024",
        "importe": 35930151.27,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 09/02/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: CHEVROLETCRUZE 5P 1.4T LT ATSEDAN 5 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2022",
        "importe": 13600000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "nancy-sand": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA  NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 74956866.29,
    "totalBienesFinal": 107596145.74,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 107596145.74,
    "ingresosAnuales": 44269705.57,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "BELLA VISTA",
        "porcentaje": "100.00",
        "fechaIngreso": "10/01/2012",
        "importe": 53168082.74,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: BELLA VISTA -Provincia: CORRIENTES -Fecha de ingreso al patrimonio: 10/01/2012"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: FORDKUGA TITANIUM 2.0L ECOBOOST AWD 6ATTODO TERRENO",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2017",
        "importe": 20433900
      }
    ],
    "localidadesInmuebles": [
      "Bella Vista"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "juliana-santillan-juarez-brahim": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 14496325.5,
    "totalBienesFinal": 21551146,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 21551146,
    "ingresosAnuales": 43551949.83,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "MAR DEL PLATA NORTE",
        "porcentaje": "50.00",
        "fechaIngreso": "18/05/2005",
        "importe": 7000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: MAR DEL PLATA NORTE -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 18/05/2005"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: CHEVROLETZAFIRA GLSSEDAN 5 PUERTAS",
        "anioFabricacion": "2009",
        "porcentaje": "50.00",
        "fechaIngreso": "07/2009",
        "importe": 2719200
      }
    ],
    "localidadesInmuebles": [
      "Mar Del Plata Norte"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "santiago-santurio": {
    "anio": 2022,
    "tipoDeclaracion": "Anual",
    "cargo": "diputado nacional",
    "organismo": "nan",
    "totalBienesInicio": 5576600,
    "totalBienesFinal": 6573600,
    "totalDeudasFinal": 160000,
    "patrimonioNeto": 6413600,
    "ingresosAnuales": 223000,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "FIAT|CRONOS DRIVE 1.3 MT|SEDAN 4 PUERTAS",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "02/2020",
        "importe": 2573600
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2022 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "juan-schiaretti": {
    "anio": 2022,
    "tipoDeclaracion": "Anual",
    "cargo": "PRESIDENTE DE LA NACION",
    "organismo": "nan",
    "totalBienesInicio": 46203867.67,
    "totalBienesFinal": 80193602.91,
    "totalDeudasFinal": 23320.38,
    "patrimonioNeto": 80170282.53,
    "ingresosAnuales": 5633638.45,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "BARRIO CHATEAU CARRERAS",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2013",
        "importe": 44221896.9,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: BARRIO CHATEAU CARRERAS -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 01/01/2013"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGEN TIGUAN 2.0 TDI TODO TERRENO",
        "anioFabricacion": "2010",
        "porcentaje": "50.00",
        "fechaIngreso": "08/2010",
        "importe": 737500
      },
      {
        "descripcion": "Modelo: VOLKSWAGENTIGUAN 2.0 TDITODO TERRENO",
        "anioFabricacion": "2010",
        "porcentaje": "50.00",
        "fechaIngreso": "08/2010",
        "importe": 0
      }
    ],
    "localidadesInmuebles": [
      "Barrio Chateau Carreras"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2022 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "sabrina-selva": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 9361410.07,
    "totalBienesFinal": 16840973.08,
    "totalDeudasFinal": 3263791.16,
    "patrimonioNeto": 13577181.919999998,
    "ingresosAnuales": 14959126.02,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "FORD FIESTA 1.6L SE",
        "anioFabricacion": "2015",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2022",
        "importe": 12000000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "adriana-cristina-serquis": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "Directora UE INN CONICET-CNEA",
    "organismo": "CONSEJO NACIONAL DE INVESTIGACIONES CIENTIFICAS Y",
    "totalBienesInicio": 93030980.81,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "San Carlos de Bariloche",
        "porcentaje": "100.00",
        "fechaIngreso": "01/12/2014",
        "importe": 62333681.98,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: San Carlos de Bariloche -Fecha de ingreso al patrimonio: 01/12/2014"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Renault Stepway",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2024",
        "importe": 14567400
      }
    ],
    "localidadesInmuebles": [
      "San Carlos De Bariloche"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "vanesa-raquel-siley": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL DISTRITO OCIA BS AS",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 13388542.56,
    "totalBienesFinal": 24511237.23,
    "totalDeudasFinal": 3249706.57,
    "patrimonioNeto": 21261530.66,
    "ingresosAnuales": 37744405.59,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "MERCEDES",
        "porcentaje": "100.00",
        "fechaIngreso": "25/07/2014",
        "importe": 16535780.83,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: MERCEDES -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 25/07/2014"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Mercedes"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "guillermo-snopek": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 59842438,
    "totalBienesFinal": 81509268,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 81509268,
    "ingresosAnuales": 40780887.09,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN SALVADOR DE JUJUY",
        "porcentaje": "100.00",
        "fechaIngreso": "01/10/2001",
        "importe": 29132216,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN SALVADOR DE JUJUY -Provincia: JUJUY -Fecha de ingreso al patrimonio: 01/10/2001"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "S.S.DE JUJUY",
        "porcentaje": "100.00",
        "fechaIngreso": "01/10/2001",
        "importe": 29132216,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: S.S.DE JUJUY -Fecha de ingreso al patrimonio: 01/10/2001"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENAMAROK DC 2.0L TDI 180 CV 4X4 298PICK-UP",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2021",
        "importe": 0
      },
      {
        "descripcion": "Modelo: ZANELLASTYLER 150 EXCLUSIVEMOTOCICLETA",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2021",
        "importe": 502200
      },
      {
        "descripcion": "Modelo: VOLKSWAGENAMAROK DC V6 3.0L 258 CV TDI 4X4 ATPICK-UP",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2023",
        "importe": 25738200
      },
      {
        "descripcion": "VOLKSWAGEN|AMAROK DC V6 3.0L 258 CV TDI 4X4 AT|PICK-UP",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2023",
        "importe": 38100000
      }
    ],
    "localidadesInmuebles": [
      "San Salvador De Jujuy",
      "S.S.De Jujuy"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "julia-strada": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 26979780.99,
    "totalBienesFinal": 50115664.05,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 50115664.05,
    "ingresosAnuales": 42388892.13,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "25.00",
        "fechaIngreso": "03/05/2017",
        "importe": 20304332.18,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 03/05/2017"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "ROSARIO",
        "porcentaje": "50.00",
        "fechaIngreso": "02/05/2016",
        "importe": 568765.65,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: ROSARIO -Provincia: SANTA FE -Fecha de ingreso al patrimonio: 02/05/2016"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: NISSANSENTRA ACENTA 6MTSEDAN 4 PUERTAS",
        "anioFabricacion": "2011",
        "porcentaje": "25.00",
        "fechaIngreso": "10/2017",
        "importe": 687725
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal",
      "Rosario"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jorge-taiana": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "CANDIDATO A DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 132036439.82,
    "totalBienesFinal": 214858726.03,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 214858726.03,
    "ingresosAnuales": 19766921.62,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "CABA",
        "porcentaje": "100.00",
        "fechaIngreso": "30/11/1990",
        "importe": 34556075.72,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: CABA -Fecha de ingreso al patrimonio: 30/11/1990"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "CABA",
        "porcentaje": "100.00",
        "fechaIngreso": "03/07/1996",
        "importe": 68108998.64,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: CABA -Fecha de ingreso al patrimonio: 03/07/1996"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "VOLKSWAGEN|BORA 2.0|SEDAN 4 PUERTAS",
        "anioFabricacion": "2009",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2015",
        "importe": 6590800
      }
    ],
    "localidadesInmuebles": [
      "Caba"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "rodolfo-tailhade": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO DE LA NACION",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 20374123.08,
    "totalBienesFinal": 34487450.02,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 34487450.02,
    "ingresosAnuales": 39205614.48,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "MALVINAS ARGENTINAS (ALTE BROWN)",
        "porcentaje": "50.00",
        "fechaIngreso": "12/06/2009",
        "importe": 14360835,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: MALVINAS ARGENTINAS (ALTE BROWN) -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 12/06/2009"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Malvinas Argentinas (Alte Brown)"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "caren-tepp": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputados/as Nacionales- Distrito Santa Fe",
    "organismo": "nan",
    "totalBienesInicio": 7702330,
    "totalBienesFinal": 11373748.33,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 11373748.33,
    "ingresosAnuales": 34363954.62,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SANTO TOME",
        "porcentaje": "20.00",
        "fechaIngreso": "12/08/2024",
        "importe": 9833.3,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SANTO TOME -Fecha de ingreso al patrimonio: 12/08/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "CITROEN 3 CV SEDAN 4 PUERTAS 1985",
        "anioFabricacion": "1985",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2009",
        "importe": 1500000
      },
      {
        "descripcion": "CHEVROLET|AGILE LS 5P 1.4N|SEDAN 5 PUERTAS",
        "anioFabricacion": "2014",
        "porcentaje": "50.00",
        "fechaIngreso": "01/2014",
        "importe": 4000000
      }
    ],
    "localidadesInmuebles": [
      "Santo Tome"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "pablo-todero": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 99286396.55,
    "totalBienesFinal": 214429303.69,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 214429303.69,
    "ingresosAnuales": 41877025.26,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "CENTENARIO",
        "porcentaje": "100.00",
        "fechaIngreso": "01/11/2013",
        "importe": 4660957.35,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: CENTENARIO -Provincia: NEUQUEN -Fecha de ingreso al patrimonio: 01/11/2013"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "NEUQUEN",
        "porcentaje": "100.00",
        "fechaIngreso": "05/09/2013",
        "importe": 62650000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: NEUQUEN -Provincia: NEUQUEN -Fecha de ingreso al patrimonio: 05/09/2013"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "NEUQUEN",
        "porcentaje": "100.00",
        "fechaIngreso": "01/07/2015",
        "importe": 1540509.91,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: NEUQUEN -Provincia: NEUQUEN -Fecha de ingreso al patrimonio: 01/07/2015"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "NEUQUEN",
        "porcentaje": "100.00",
        "fechaIngreso": "01/02/2017",
        "importe": 0,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: NEUQUEN -Provincia: NEUQUEN -Fecha de ingreso al patrimonio: 01/02/2017"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "NEUQUEN",
        "porcentaje": "100.00",
        "fechaIngreso": "12/09/2019",
        "importe": 2354449.97,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: NEUQUEN -Provincia: NEUQUEN -Fecha de ingreso al patrimonio: 12/09/2019"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: DUCATIMONSTER 821MOTOCICLETA",
        "anioFabricacion": "2015",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2019",
        "importe": 13420000
      },
      {
        "descripcion": "Modelo: NISSANFRONTIER CD LE 2.3 D 4X4 ATPICK-UP",
        "anioFabricacion": "2021",
        "porcentaje": "100.00",
        "fechaIngreso": "01/2021",
        "importe": 37910000
      },
      {
        "descripcion": "Modelo: RAM RAMPAGE",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2024",
        "importe": 50300000
      }
    ],
    "localidadesInmuebles": [
      "Centenario",
      "Neuquen"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "victoria-tolosa-paz": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "diputada nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 158961404.55,
    "totalBienesFinal": 370992549.92,
    "totalDeudasFinal": 19865.08,
    "patrimonioNeto": 370972684.84000003,
    "ingresosAnuales": 36578188.31,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "CITY BELL",
        "porcentaje": "100.00",
        "fechaIngreso": "20/07/2006",
        "importe": 11069712.05,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: CITY BELL -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 20/07/2006"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "CITY BELL",
        "porcentaje": "50.00",
        "fechaIngreso": "21/01/2007",
        "importe": 82345182.83,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: CITY BELL -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 21/01/2007"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "City Bell"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "yamile-tomassoni": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Jefe de Oficina",
    "organismo": "ADMINISTRACION NACIONAL DE LA SEGURIDAD SOCIAL ANS",
    "totalBienesInicio": 20379000,
    "totalBienesFinal": 25000000,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 25000000,
    "ingresosAnuales": 16243811.92,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Cañada de Gómez",
        "porcentaje": "50.00",
        "fechaIngreso": "25/08/1998",
        "importe": 15000000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Cañada de Gómez -Fecha de ingreso al patrimonio: 25/08/1998"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Peugeot 207",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2019",
        "importe": 10000000
      }
    ],
    "localidadesInmuebles": [
      "Cañada De Gómez"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "anibal-tortoriello": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 406521759.36,
    "totalBienesFinal": 878610061.12,
    "totalDeudasFinal": 2049866.87,
    "patrimonioNeto": 876560194.25,
    "ingresosAnuales": 257042216.84,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "CIPOLLETI",
        "porcentaje": "100.00",
        "fechaIngreso": "06/06/1994",
        "importe": 42363102.43,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: CIPOLLETI -Fecha de ingreso al patrimonio: 06/06/1994"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "ALQUILER",
        "localidad": "NEUQUEN",
        "porcentaje": "100.00",
        "fechaIngreso": "11/11/2003",
        "importe": 14943417.06,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: ALQUILER -Localidad: NEUQUEN -Fecha de ingreso al patrimonio: 11/11/2003"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "CIPOLLETTI",
        "porcentaje": "44.50",
        "fechaIngreso": "12/12/2006",
        "importe": 69441992.95,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: CIPOLLETTI -Fecha de ingreso al patrimonio: 12/12/2006"
      },
      {
        "tipo": "DEPARTAMENTO CON COCHERA",
        "destino": "ALQUILER",
        "localidad": "CIPOLLETTI",
        "porcentaje": "100.00",
        "fechaIngreso": "07/07/2008",
        "importe": 38849618.97,
        "descripcionOriginal": "Tipo: DEPARTAMENTO CON COCHERA -Destino: ALQUILER -Localidad: CIPOLLETTI -Fecha de ingreso al patrimonio: 07/07/2008"
      },
      {
        "tipo": "COUNTRY",
        "destino": "OTROS",
        "localidad": "CIPOLLETTI",
        "porcentaje": "44.50",
        "fechaIngreso": "12/12/2006",
        "importe": 48203991.91,
        "descripcionOriginal": "Tipo: COUNTRY-QUINTAS-ETC. -Destino: OTROS -Localidad: CIPOLLETTI -Fecha de ingreso al patrimonio: 12/12/2006"
      },
      {
        "tipo": "COUNTRY",
        "destino": "OTROS",
        "localidad": "CIPOLLETTI",
        "porcentaje": "44.50",
        "fechaIngreso": "12/12/2000",
        "importe": 12378060.62,
        "descripcionOriginal": "Tipo: COUNTRY-QUINTAS-ETC. -Destino: OTROS -Localidad: CIPOLLETTI -Fecha de ingreso al patrimonio: 12/12/2000"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "OTROS",
        "localidad": "CIPOLLETTI",
        "porcentaje": "44.50",
        "fechaIngreso": "01/01/2010",
        "importe": 64525,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: OTROS -Localidad: CIPOLLETTI -Fecha de ingreso al patrimonio: 01/01/2010"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "CIPOLLETTI",
        "porcentaje": "44.50",
        "fechaIngreso": "02/02/2009",
        "importe": 3581539.45,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: CIPOLLETTI -Fecha de ingreso al patrimonio: 02/02/2009"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "CIPOLLETTI",
        "porcentaje": "100.00",
        "fechaIngreso": "01/11/2012",
        "importe": 5388968.57,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: CIPOLLETTI -Fecha de ingreso al patrimonio: 01/11/2012"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "SAN PATRICIO DEL CHAÑAR",
        "porcentaje": "100.00",
        "fechaIngreso": "01/12/2014",
        "importe": 3699172.5,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: SAN PATRICIO DEL CHAÑAR -Fecha de ingreso al patrimonio: 01/12/2014"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "NEUQUEN",
        "porcentaje": "33.33",
        "fechaIngreso": "01/08/2023",
        "importe": 2674732.5,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: NEUQUEN -Fecha de ingreso al patrimonio: 01/08/2023"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "cipolletti",
        "porcentaje": "100.00",
        "fechaIngreso": "01/02/2024",
        "importe": 47272500,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: cipolletti -Fecha de ingreso al patrimonio: 01/02/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "TOYOTA|COROLLA CROSS SEG HEV 1.8 ECVT|RURAL 5 PUERTAS",
        "anioFabricacion": "2023",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2023",
        "importe": 25200000
      },
      {
        "descripcion": "AUDI|Q3 40 TFSI STRONIC QUATTRO|TODO TERRENO",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "09/2024",
        "importe": 67670000
      },
      {
        "descripcion": "TOYOTA|YARIS XS 1.5 6M/T|SEDAN 5 PUERTAS",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "06/2024",
        "importe": 17250000
      }
    ],
    "localidadesInmuebles": [
      "Cipolleti",
      "Neuquen",
      "Cipolletti",
      "San Patricio Del Chañar"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "jose-federico-tournier": {
    "anio": 2023,
    "tipoDeclaracion": "Inicial",
    "cargo": "CONSEJAL MUNICIPAL",
    "organismo": "MUNICIPALIDAD DE GOYA",
    "totalBienesInicio": 7088692.31,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "GOYA",
        "porcentaje": "50.00",
        "fechaIngreso": "18/09/2017",
        "importe": 2164196.5,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: GOYA -Fecha de ingreso al patrimonio: 18/09/2017"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "Mercedes Cossio 3ra sección",
        "porcentaje": "50.00",
        "fechaIngreso": "08/07/2020",
        "importe": 250000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: Mercedes Cossio 3ra sección -Fecha de ingreso al patrimonio: 08/07/2020"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "VOLKWAGEN TAKE UP 1.0 MOI SEDAN 4 P",
        "anioFabricacion": "",
        "porcentaje": "50.00",
        "fechaIngreso": "",
        "importe": 1175800
      },
      {
        "descripcion": "Toyota Corolla xei pack 1.8",
        "anioFabricacion": "2017",
        "porcentaje": "50.00",
        "fechaIngreso": "12/2022",
        "importe": 2687500
      },
      {
        "descripcion": "Casco y motor Mariner 55 hp od - 267358",
        "anioFabricacion": "1995",
        "porcentaje": "50.00",
        "fechaIngreso": "03/2023",
        "importe": 600000
      }
    ],
    "localidadesInmuebles": [
      "Goya",
      "Mercedes Cossio 3Ra Sección"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2023 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "cesar-treffinger": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 114008123.05,
    "totalBienesFinal": 195014633.23,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 195014633.23,
    "ingresosAnuales": 76298455.77,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "COMODORO RIVADAVIA",
        "porcentaje": "50.00",
        "fechaIngreso": "31/08/2014",
        "importe": 24250987.3,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: COMODORO RIVADAVIA -Provincia: CHUBUT -Fecha de ingreso al patrimonio: 31/08/2014"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "COMODORO RIVADAVIA",
        "porcentaje": "50.00",
        "fechaIngreso": "26/10/2016",
        "importe": 14458465.41,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: COMODORO RIVADAVIA -Provincia: CHUBUT -Fecha de ingreso al patrimonio: 26/10/2016"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "RADA TILLY",
        "porcentaje": "50.00",
        "fechaIngreso": "09/10/2017",
        "importe": 630000,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: RADA TILLY -Provincia: CHUBUT -Fecha de ingreso al patrimonio: 09/10/2017"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "BAHIA BLANCA",
        "porcentaje": "50.00",
        "fechaIngreso": "08/05/2019",
        "importe": 7706609.38,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: BAHIA BLANCA -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 08/05/2019"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "RADA TILLY",
        "porcentaje": "50.00",
        "fechaIngreso": "22/10/2020",
        "importe": 23908336.21,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: RADA TILLY -Provincia: CHUBUT -Fecha de ingreso al patrimonio: 22/10/2020"
      },
      {
        "tipo": "OTROS INMUEBLES",
        "destino": "INVERSION",
        "localidad": "RADA TILLY",
        "porcentaje": "100.00",
        "fechaIngreso": "31/12/2020",
        "importe": 12539216.8,
        "descripcionOriginal": "Tipo: OTROS INMUEBLES -Destino: INVERSION -Localidad: RADA TILLY -Provincia: CHUBUT -Fecha de ingreso al patrimonio: 31/12/2020"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: CHEVROLETCLASSIC 4P LT SPIRIT PACK 1.4NSEDAN 4 PUERTAS",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2013",
        "importe": 0
      }
    ],
    "localidadesInmuebles": [
      "Comodoro Rivadavia",
      "Rada Tilly",
      "Bahia Blanca"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "nicolas-alfredo-trotta": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Candidato Diputado Nacional",
    "organismo": "nan",
    "totalBienesInicio": 127661406.74,
    "totalBienesFinal": 251845328.13,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 251845328.13,
    "ingresosAnuales": 102044213.74,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "VICENTE LOPEZ",
        "porcentaje": "50.00",
        "fechaIngreso": "01/09/2009",
        "importe": 26396647.61,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: VICENTE LOPEZ -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 01/09/2009"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: No informado",
        "anioFabricacion": "2014",
        "porcentaje": "50.00",
        "fechaIngreso": "03/2014",
        "importe": 0
      },
      {
        "descripcion": "Modelo: PEUGEOT5008 ALLURE PLUS 7 PLAZASRURAL 5 PUERTAS",
        "anioFabricacion": "2013",
        "porcentaje": "50.00",
        "fechaIngreso": "10/2013",
        "importe": 3482500
      },
      {
        "descripcion": "Modelo: TOYOTASW4 4X4 SRX 2.8 TDI 6 A T 7ATODO TERRENO",
        "anioFabricacion": "2018",
        "porcentaje": "50.00",
        "fechaIngreso": "12/2022",
        "importe": 18757400
      },
      {
        "descripcion": "Modelo: TOYOTACOROLLA CROSS GR-SPORT 2.0 CVTRURAL 5 PUERTAS",
        "anioFabricacion": "2024",
        "porcentaje": "50.00",
        "fechaIngreso": "05/2024",
        "importe": 16805000
      }
    ],
    "localidadesInmuebles": [
      "Vicente Lopez"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "hernan-urien": {
    "anio": 2024,
    "tipoDeclaracion": "Inicial",
    "cargo": "Director General de Programas de Gobierno",
    "organismo": "SECRETARIA GENERAL DE LA PRESIDENCIA DE LA NACION",
    "totalBienesInicio": 47500000,
    "totalBienesFinal": 0,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 0,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "San Fernando",
        "porcentaje": "50.00",
        "fechaIngreso": "04/05/2018",
        "importe": 47500000,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: San Fernando -Fecha de ingreso al patrimonio: 04/05/2018"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "San Fernando"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "eduardo-felix-valdes": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 153235424.83,
    "totalBienesFinal": 235946274.31,
    "totalDeudasFinal": 6790000,
    "patrimonioNeto": 229156274.31,
    "ingresosAnuales": 43008593.65,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "22/09/1989",
        "importe": 178256410.01,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 22/09/1989"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "daniel-vancsik": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 13400000,
    "totalBienesFinal": 18626908,
    "totalDeudasFinal": 6002000,
    "patrimonioNeto": 12624908,
    "ingresosAnuales": 46827513.71,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "CHEVROLET|CRUZE 4P 1.4T LT MT|SEDAN 4 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "50.00",
        "fechaIngreso": "02/2022",
        "importe": 13400000
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "m-elena-velazquez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Candidata a Diputada Nacional",
    "organismo": "nan",
    "totalBienesInicio": 25077514,
    "totalBienesFinal": 24811810,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 24811810,
    "ingresosAnuales": 5224745.25,
    "inmuebles": [
      {
        "tipo": "COUNTRY",
        "destino": "RECREO O VERANEO",
        "localidad": "monte grande",
        "porcentaje": "100.00",
        "fechaIngreso": "30/09/2018",
        "importe": 2675702,
        "descripcionOriginal": "Tipo: COUNTRY-QUINTAS-ETC. -Destino: RECREO O VERANEO -Localidad: monte grande -Fecha de ingreso al patrimonio: 30/09/2018"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "RENAULT|KANGOO PH3 CONFORT 1.6 5ASIENTOS 2P|FURGON",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2023",
        "importe": 6532909
      },
      {
        "descripcion": "VOLKSWAGEN|GOL TREND TRENDLINE 1.6 GAS 101CV",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2022",
        "importe": 15200014
      }
    ],
    "localidadesInmuebles": [
      "Monte Grande"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "lorena-villaverde": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 112634481.87,
    "totalBienesFinal": 225288313.07,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 225288313.07,
    "ingresosAnuales": 43822329.73,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "ESCOBAR",
        "porcentaje": "100.00",
        "fechaIngreso": "01/05/2008",
        "importe": 23637404.01,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: ESCOBAR -Provincia: BUENOS AIRES -Fecha de ingreso al patrimonio: 01/05/2008"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "LAS GRUTAS",
        "porcentaje": "50.00",
        "fechaIngreso": "23/07/1998",
        "importe": 12160651.36,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: LAS GRUTAS -Provincia: RIO NEGRO -Fecha de ingreso al patrimonio: 23/07/1998"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: BMWX3 28ITODO TERRENO",
        "anioFabricacion": "2017",
        "porcentaje": "100.00",
        "fechaIngreso": "08/2021",
        "importe": 54120000
      },
      {
        "descripcion": "Modelo: VOLKSWAGENAMAROK 2.0L TDI 4X2 1H2PICK-UP",
        "anioFabricacion": "2011",
        "porcentaje": "100.00",
        "fechaIngreso": "03/2022",
        "importe": 0
      },
      {
        "descripcion": "Modelo: RAMRAM 1500 5.7 V8 LARAMIE 4X4PICK-UP CABINA DOBLE",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "12/2022",
        "importe": 31110000
      }
    ],
    "localidadesInmuebles": [
      "Escobar",
      "Las Grutas"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "luana-volnovich": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 48018075.09,
    "totalBienesFinal": 85737709.25,
    "totalDeudasFinal": 3538523.57,
    "patrimonioNeto": 82199185.68,
    "ingresosAnuales": 14816435.6,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "25.00",
        "fechaIngreso": "15/03/2007",
        "importe": 21924746.95,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 15/03/2007"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "30/04/2013",
        "importe": 30928717.15,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 30/04/2013"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "patricia-vasquez": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL POR LA PROVINCIA DE BUENOS AIRES",
    "organismo": "nan",
    "totalBienesInicio": 33786521.76,
    "totalBienesFinal": 312586191.47,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 312586191.47,
    "ingresosAnuales": 51744296.34,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTRO",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "23/12/2013",
        "importe": 245167638.99,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTRO -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 23/12/2013"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDAACCORD EXLSEDAN 4 PUERTAS",
        "anioFabricacion": "2014",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2015",
        "importe": 17542600
      },
      {
        "descripcion": "Modelo: FORDTERRITORY TITANIUM 1.5L GTDI 4X2 ATRURAL 5 PUERTAS",
        "anioFabricacion": "2022",
        "porcentaje": "100.00",
        "fechaIngreso": "07/2022",
        "importe": 30250000
      }
    ],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "hugo-yasky": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO",
    "organismo": "nan",
    "totalBienesInicio": 18696631.5,
    "totalBienesFinal": 37780588.52,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 37780588.52,
    "ingresosAnuales": 17033639.55,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "CASA HABITACION",
        "localidad": "Capital Federal",
        "porcentaje": "100.00",
        "fechaIngreso": "26/01/1998",
        "importe": 25879500,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: CASA HABITACION -Localidad: Capital Federal -Provincia: CIUDAD AUTONOMA BUENOS AIRES -Fecha de ingreso al patrimonio: 26/01/1998"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Capital Federal"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "pablo-raul-yedlin": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "Diputado Nacional",
    "organismo": "nan",
    "totalBienesInicio": 149807110.93,
    "totalBienesFinal": 480242582.41,
    "totalDeudasFinal": 220253.91,
    "patrimonioNeto": 480022328.5,
    "ingresosAnuales": 45926079.49,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "100.00",
        "fechaIngreso": "01/01/2000",
        "importe": 67326831.01,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 01/01/2000"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "33.33",
        "fechaIngreso": "01/01/2008",
        "importe": 49521062.06,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 01/01/2008"
      },
      {
        "tipo": "CASA",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "YERBA BUENA",
        "porcentaje": "100.00",
        "fechaIngreso": "31/12/2013",
        "importe": 8327621.52,
        "descripcionOriginal": "Tipo: CASA -Destino: ALQUILER / CONTRAPRESTACION -Localidad: YERBA BUENA -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 31/12/2013"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "YERBA BUENA",
        "porcentaje": "100.00",
        "fechaIngreso": "16/06/2011",
        "importe": 9888079.22,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: YERBA BUENA -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 16/06/2011"
      },
      {
        "tipo": "CASA",
        "destino": "ALQUILER / CONTRAPRESTACION",
        "localidad": "YERBA BUENA",
        "porcentaje": "100.00",
        "fechaIngreso": "01/10/2009",
        "importe": 34423618.88,
        "descripcionOriginal": "Tipo: CASA -Destino: ALQUILER / CONTRAPRESTACION -Localidad: YERBA BUENA -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 01/10/2009"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "100.00",
        "fechaIngreso": "30/09/2015",
        "importe": 20559183.24,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 30/09/2015"
      },
      {
        "tipo": "CASA",
        "destino": "OTRO",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "33.33",
        "fechaIngreso": "08/02/2019",
        "importe": 4265245.64,
        "descripcionOriginal": "Tipo: CASA -Destino: OTRO -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 08/02/2019"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "33.33",
        "fechaIngreso": "08/02/2019",
        "importe": 12704747.59,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 08/02/2019"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "INVERSION",
        "localidad": "SAN MIGUEL DE TUCUMAN",
        "porcentaje": "33.33",
        "fechaIngreso": "08/02/2019",
        "importe": 3639503.79,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: INVERSION -Localidad: SAN MIGUEL DE TUCUMAN -Provincia: TUCUMAN -Fecha de ingreso al patrimonio: 08/02/2019"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: HONDACRV LXRURAL 5 PUERTAS",
        "anioFabricacion": "2016",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2021",
        "importe": 24742700
      }
    ],
    "localidadesInmuebles": [
      "San Miguel De Tucuman",
      "Yerba Buena"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "carlos-raul-zapata": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "diputado nacional",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 11337043.17,
    "totalBienesFinal": 24280306.17,
    "totalDeudasFinal": 1956311.88,
    "patrimonioNeto": 22323994.290000003,
    "ingresosAnuales": 0,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "OTROS",
        "localidad": "salta",
        "porcentaje": "50.00",
        "fechaIngreso": "01/01/2007",
        "importe": 11192.78,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: OTROS -Localidad: salta -Fecha de ingreso al patrimonio: 01/01/2007"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "Salta"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "natalia-zaracho": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 4803968,
    "totalBienesFinal": 8366208,
    "totalDeudasFinal": 1149771.69,
    "patrimonioNeto": 7216436.3100000005,
    "ingresosAnuales": 11391656.01,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "FIAT|PALIO (326) ATTRACTIVE 5P 1.4 8V|SEDAN 5 PUERTAS",
        "anioFabricacion": "2013",
        "porcentaje": "100.00",
        "fechaIngreso": "04/2022",
        "importe": 4169200
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "christian-alejandro-zulli": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "HONORABLE CAMARA DE DIPUTADOS DE LA NACION",
    "totalBienesInicio": 9388740,
    "totalBienesFinal": 28855791,
    "totalDeudasFinal": 28674380,
    "patrimonioNeto": 181411,
    "ingresosAnuales": 50012350.37,
    "inmuebles": [],
    "vehiculos": [
      {
        "descripcion": "JDD708 - CHEVROLET|AVEO LT 1.6N MT|SEDAN 4 PUERTAS",
        "anioFabricacion": "2010",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2020",
        "importe": 2674400
      },
      {
        "descripcion": "FIAT|CRONOS DRIVE 1.3 GSE BZ|SEDAN 4 PUERTAS",
        "anioFabricacion": "2024",
        "porcentaje": "100.00",
        "fechaIngreso": "05/2024",
        "importe": 21465703
      }
    ],
    "localidadesInmuebles": [],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "natalia-de-la-sota": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADA",
    "organismo": "nan",
    "totalBienesInicio": 535151479.71,
    "totalBienesFinal": 716427375.69,
    "totalDeudasFinal": 7923319.5,
    "patrimonioNeto": 708504056.19,
    "ingresosAnuales": 46099482.27,
    "inmuebles": [
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "BARRIO CENTRO SUR",
        "porcentaje": "100.00",
        "fechaIngreso": "24/12/2021",
        "importe": 25739212.17,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: BARRIO CENTRO SUR -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 24/12/2021"
      },
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "CIUDAD DE CORDOBA SUR",
        "porcentaje": "100.00",
        "fechaIngreso": "24/02/2022",
        "importe": 250174173.03,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: CIUDAD DE CORDOBA SUR -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 24/02/2022"
      },
      {
        "tipo": "LOTE DE TERRENO",
        "destino": "OTRO",
        "localidad": "YACANTO (SAN JAVIER)",
        "porcentaje": "50.00",
        "fechaIngreso": "14/12/2022",
        "importe": 349510.15,
        "descripcionOriginal": "Tipo: LOTE DE TERRENO -Destino: OTRO -Localidad: YACANTO (SAN JAVIER) -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 14/12/2022"
      },
      {
        "tipo": "DEPARTAMENTO",
        "destino": "INVERSION",
        "localidad": "SAN CARLOS DE BARILOCHE",
        "porcentaje": "100.00",
        "fechaIngreso": "25/04/2023",
        "importe": 18770682.04,
        "descripcionOriginal": "Tipo: DEPARTAMENTO -Destino: INVERSION -Localidad: SAN CARLOS DE BARILOCHE -Provincia: RIO NEGRO -Fecha de ingreso al patrimonio: 25/04/2023"
      },
      {
        "tipo": "CASA",
        "destino": "INVERSION",
        "localidad": "BARRIO ROGELIO MARTINEZ",
        "porcentaje": "50.00",
        "fechaIngreso": "01/08/2024",
        "importe": 30132256.96,
        "descripcionOriginal": "Tipo: CASA -Destino: INVERSION -Localidad: BARRIO ROGELIO MARTINEZ -Provincia: CORDOBA -Fecha de ingreso al patrimonio: 01/08/2024"
      }
    ],
    "vehiculos": [
      {
        "descripcion": "Modelo: VOLKSWAGENT-CROSS HIGHLINE 1.6 MSI 110CV ATRURAL 5 PUERTAS",
        "anioFabricacion": "2020",
        "porcentaje": "100.00",
        "fechaIngreso": "10/2020",
        "importe": 20000000
      }
    ],
    "localidadesInmuebles": [
      "Barrio Centro Sur",
      "Ciudad De Cordoba Sur",
      "Yacanto (San Javier)",
      "San Carlos De Bariloche",
      "Barrio Rogelio Martinez"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  },
  "nicolas-del-cano": {
    "anio": 2024,
    "tipoDeclaracion": "Anual",
    "cargo": "DIPUTADO NACIONAL",
    "organismo": "nan",
    "totalBienesInicio": 5525909.75,
    "totalBienesFinal": 5874188.09,
    "totalDeudasFinal": 0,
    "patrimonioNeto": 5874188.09,
    "ingresosAnuales": 28145212.09,
    "inmuebles": [
      {
        "tipo": "CASA",
        "destino": "CASA HABITACION",
        "localidad": "SAN MARTIN",
        "porcentaje": "50.00",
        "fechaIngreso": "11/12/2007",
        "importe": 1388204.29,
        "descripcionOriginal": "Tipo: CASA -Destino: CASA HABITACION -Localidad: SAN MARTIN -Fecha de ingreso al patrimonio: 11/12/2007"
      }
    ],
    "vehiculos": [],
    "localidadesInmuebles": [
      "San Martin"
    ],
    "fuente": "Oficina Anticorrupción - Declaración Jurada Patrimonial Integral 2024 (datos.jus.gob.ar)",
    "linkFuente": "https://datos.jus.gob.ar/dataset/declaraciones-juradas-patrimoniales-integrales"
  }
};
