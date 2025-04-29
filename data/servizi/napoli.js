import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax,
} from "../../models/modelli.js"

export const napoli = [
    new ServizioTrasporto("Da Porto o Napoli/Sorrento a Pompei (mezzi)", "napoli", {
        "1-2":  90,
        "3-5": 120,
        "6-7": 140,
        "8-10": 140,
        "11-14": 140,
      }),
    new ServizioTrasporto("Da Pompei a Porto o Napoli/Sorrento (mezzi)", "napoli", {
        "1-2":  90,
        "3-5": 120,
        "6-7": 140,
        "8-10": 140,
        "11-14": 140,
      }),
    new ServizioTrasporto("Da Porto o Napoli/Sorrento a Ercolano (mezzi)", "napoli", {
        "1-2":  70,
        "3-5": 100,
        "6-7": 120,
        "8-10": 120,
        "11-14": 120,
      }),
    new ServizioTrasporto("Da Ercolano a Porto o Napoli/Sorrento (mezzi)", "napoli", {
        "1-2":  70,
        "3-5": 100,
        "6-7": 120,
        "8-10": 120,
        "11-14": 120,
      }),
    new ServizioTrasporto("Da Napoli o Pompei ad Amalfi/Positano (mezzi)", "napoli", {
        "1-2":  200,
        "3-5": 230,
        "6-7": 250,
        "8-10": 250,
        "11-14": 250,
      }),
    new ServizioTrasporto("Da Amalfi/Positano a Napoli o Pompei (mezzi)", "napoli", {
        "1-2":  200,
        "3-5": 165,
        "6-7": 160,
        "8-10": 110,
        "11-14": 110,
      }),
    new ServizioAdOre("Disposizione su Napoli, Ercolano, Pompei, Vesuvio (mezzi e ore)", "napoli", {
        "1-2":  50,
        "3-5":  60,
        "6-7":  70,
        "8-10": 70,
        "11-14": 70,
      }),
    new ServizioAdOre("Disposizione su Sorrento e Costiera (mezzi e ore)", "napoli", {
        "1-2":  60,
        "3-5":  80,
        "6-7":  90,
        "8-10": 90,
        "11-14": 90,
      }),
    new ServizioAdOre("Disposizione su altre città in Campania (mezzi e ore)", "napoli", {
        "1-2":  60,
        "3-5":  80,
        "6-7":  90,
        "8-10": 90,
        "11-14": 90,
      }),      
    new ServizioGuidaOre("Servizio Guida (ore)", "napoli", {
        "prezzo": 70, 
       }),
    new ServizioPax("Pompei (pax)", "napoli",{
        "adulti": 22,
        "minori": 10,
    }),
    new ServizioPax("Ercolano (pax)", "napoli",{
        "adulti": 18,
        "minori": 9,
    }),
    new ServizioPax("Vesuvio (pax)", "napoli",{
        "adulti": 15,
        "minori": 10,
    }),
    new ServizioPax("Galleria Borbonica (pax)", "napoli",{
        "adulti": 10,
        "minori": 0,
    }),
    new ServizioPax("Reggia Caserta (pax)", "napoli",{
        "adulti": 10,
        "minori": 0,
    }),
    new ServizioPax("Museo Archeologico Napoli (pax)", "napoli",{
        "adulti": 22,
        "minori": 2,
    }),
    new ServizioPax("Certosa San Martino (pax)", "napoli",{
        "adulti": 6,
        "minori": 5,
    }),
    new ServizioPax("Palazzo Reale (pax)", "napoli",{
        "adulti": 6,
        "minori": 5,
    }),
    new ServizioPax("San Severo (https://sales.azzurroservice.it) (pax)", "napoli",{
        "adulti": 8,
        "minori": 5,
    }),
    new ServizioPax("Parco del Vesuvio (https://vesuviopark.vivaticket.it/) (pax)", "napoli",{
        "adulti": 12,
        "minori": 10,
    }),
    new ServizioPax("Headsets (pax)", "napoli",{
        "adulti": 2.5,
        "minori": 2.5,
    }),
    new ServizioPax("Food and Wine (pax)", "napoli",{
        "adulti": 30,
        "minori": 25,
    }),
]