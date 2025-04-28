import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax
} from "../../models/modelli.js"

export const firenze = [
    new ServizioTrasporto("Da Porto Livorno a Firenze (mezzi)", "firenze", {
        "1-2": 230,
        "3-7": 250,
        "8-10": 250,
        "11-14": 250,
    }),
    new ServizioTrasporto("Da Firenze a porto Livorno (mezzi)", "firenze", {
        "1-2": 230,
        "3-7": 250,
        "8-10": 250,
        "11-14": 250,
    }),
    new ServizioTrasporto("Da Aeroporto a Firenze (mezzi)", "firenze", {
        "1-2": 65,
        "3-7": 70,
        "8-10": 70,
        "11-14": 70,
    }),
    new ServizioTrasporto("Da Firenze ad Aeroporto (mezzi)", "firenze", {
        "1-2": 65,
        "3-7": 70,
        "8-10": 70,
        "11-14": 70,
    }),
    new ServizioTrasporto("Shore Excursion Include Transfer e Dispo (Livorno>Firenze>Pisa>Livorno) (mezzi)", "firenze", {
        "1-2": 650,
        "3-7": 680,
        "8-10": 650,
        "11-14": 620,
    }),
    new ServizioAdOre("Disposizione su Firenze (mezzi e ore)", "firenze", {
        "1-2": 50,
        "3-7": 55,
        "8-10": 55,
        "11-14": 55,
    }),
    new ServizioAdOre("Disposizione su Firenze e Pisa (mezzi e ore)", "firenze", {
        "1-2": 55,
        "3-7": 60,
        "8-10": 60,
        "11-14": 60,
    }),
    new ServizioAdOre("Disposizione su Altre Città in Toscana (mezzi e ore)", "firenze", {
        "1-2": 55,
        "3-7": 60,
        "8-10": 60,
        "11-14": 60,
    }),
    new ServizioGuidaOre("Servizio Guida (ore)", "firenze", 70),
    new ServizioPax("Uffizi (pax)", "firenze", {
        "adulti": 34,
        "minori": 10,
      }),
    new ServizioPax("Accademia (pax)", "firenze", {
        "adulti": 25,
        "minori": 10,
      }),
    new ServizioPax("Duomo (pax)", "firenze", {
        "adulti": 15,
        "minori": 10,
      }),
    new ServizioPax("Duomo e Battistero (pax)", "firenze", {
        "adulti": 15,
        "minori": 5,
      }),
    new ServizioPax("Duomo, Campanile e Battistero (pax)", "firenze", {
        "adulti": 20,
        "minori": 7,
      }),
    new ServizioPax("Duomo, Cupola, Campanile e Battistero (x cupola prendere biglietto anche per guida) (pax)", "firenze", {
        "adulti": 30,
        "minori": 12,
      }),
    new ServizioPax("Santa Croce (pax)", "firenze", {
        "adulti": 10,
        "minori": 5,
      }),
    new ServizioPax("Torre di Pisa (pax)", "firenze", {
        "adulti": 20,
        "minori": 10,
      }),
    new ServizioPax("Vasari Corridor (pax)", "firenze", {
        "adulti": 47,
        "minori": 0,
      }),
    new ServizioPax("Firenze Card 72 ore (https://www.firenzecard.it/en) (pax)", "firenze", {
        "adulti": 85,
        "minori": 0,
      }),
    new ServizioPax("Bargello (pax)", "firenze", {
        "adulti": 13,
        "minori": 3,
      }),
    new ServizioPax("Santa Maria Novella (pax)", "firenze", {
        "adulti": 8,
        "minori": 0,
      }),
    new ServizioPax("Palazzo Vecchio (pax)", "firenze", {
        "adulti": 14,
        "minori": 0,
      }),
    new ServizioPax("Medici Chapels (pax)", "firenze", {
        "adulti": 12,
        "minori": 5,
      }),
    new ServizioPax("San Lorenzo (pax)", "firenze", {
        "adulti": 7,
        "minori": 4,
      }),
    new ServizioPax("Palazzo Medici Riccardi (pax)", "firenze", {
        "adulti": 10,
        "minori": 7,
      }),
    new ServizioPax("Palazzo Pitti (galleria palatina) (pax)", "firenze", {
        "adulti": 19,
        "minori": 5,
      }),
    new ServizioPax("Boboli gardens (pax)", "firenze", {
        "adulti": 13,
        "minori": 5,
      }),
    new ServizioPax("Headsets (pax)", "firenze", {
        "adulti": 2.5,
        "minori": 2.5,
      }),
    new ServizioPax("Food Tour (pax)", "firenze", {
        "adulti": 31.25,
        "minori": 20, 
      }),
]