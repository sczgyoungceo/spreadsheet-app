import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax
} from "../../models/modelli.js"

export const firenze = [
    new ServizioTrasporto(59, "Da Porto Livorno a Firenze (mezzi)", "firenze", {
        "1-3": 230,
        "4-7": 250,
        "8-10": 250,
        "11-14": 250,
    }),
    new ServizioTrasporto(60, "Da Firenze a porto Livorno (mezzi)", "firenze", {
        "1-3": 230,
        "4-7": 250,
        "8-10": 250,
        "11-14": 250,
    }),
    new ServizioTrasporto(61, "Da Aeroporto a Firenze (mezzi)", "firenze", {
        "1-3": 65,
        "4-7": 70,
        "8-10": 70,
        "11-14": 70,
    }),
    new ServizioTrasporto(62, "Da Firenze ad Aeroporto (mezzi)", "firenze", {
        "1-3": 65,
        "4-7": 70,
        "8-10": 70,
        "11-14": 70,
    }),
    new ServizioTrasporto(63, "Shore Excursion Include Transfer e Dispo (Livorno>Firenze>Pisa>Livorno) (mezzi)", "firenze", {
        "1-3": 650,
        "4-7": 680,
        "8-10": 650,
        "11-14": 620,
    }),
    new ServizioAdOre(64, "Disposizione su Firenze (mezzi e ore)", "firenze", {
        "1-3": 50,
        "4-7": 55,
        "8-10": 55,
        "11-14": 55,
    }),
    new ServizioAdOre(65, "Disposizione su Firenze e Pisa (mezzi e ore)", "firenze", {
        "1-3": 55,
        "4-7": 60,
        "8-10": 60,
        "11-14": 60,
    }),
    new ServizioAdOre(66, "Disposizione su Altre Città in Toscana (mezzi e ore)", "firenze", {
        "1-3": 55,
        "4-7": 60,
        "8-10": 60,
        "11-14": 60,
    }),
    new ServizioGuidaOre(67, "Servizio Guida (ore)", "firenze", 70),
    new ServizioPax(68, "Uffizi (pax)", "firenze", {
        "adulti": 34,
        "minori": 10,
      }),
    new ServizioPax(69, "Accademia (pax)", "firenze", {
        "adulti": 25,
        "minori": 10,
      }),
    new ServizioPax(70, "Duomo (pax)", "firenze", {
        "adulti": 15,
        "minori": 10,
      }),
    new ServizioPax(71, "Santa Croce (pax)", "firenze", {
        "adulti": 10,
        "minori": 5,
      }),
    new ServizioPax(72, "Torre di Pisa (pax)", "firenze", {
        "adulti": 20,
        "minori": 10,
      }),
    new ServizioPax(73, "Headsets (pax)", "firenze", {
        "adulti": 2.5,
        "minori": 2.5,
      }),
]