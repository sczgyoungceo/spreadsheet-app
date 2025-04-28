import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax,
} from "../../models/modelli.js"

export const napoli = [
    new ServizioTrasporto("Da Porto o Napoli/Sorrento a Pompei (mezzi)", "napoli",{
        "1-2": 90,
        "3-6": 120,
        "7-8": 140,
        "9-14": 140,
    }),
    new ServizioTrasporto("Da Pompei a Porto o Napoli/Sorrento (mezzi)", "napoli",{
        "1-2": 90,
        "3-6": 120,
        "7-8": 140,
        "9-14": 140,
    }),
    new ServizioTrasporto("Da Porto o Napoli/Sorrento a Ercolano (mezzi)", "napoli",{
        "1-2": 70,
        "3-6": 100,
        "7-8": 120,
        "9-14": 120,
    }),
    new ServizioTrasporto("da Ercolano a Porto o Napoli/Sorrento (mezzi)", "napoli",{
        "1-2": 70,
        "3-6": 100,
        "7-8": 120,
        "9-14": 120,
    }),
    new ServizioTrasporto("da Napoli o Pompei ad Amalfi/Positano (mezzi)", "napoli",{
        "1-2": 200,
        "3-6": 230,
        "7-8": 250,
        "9-14": 250,
    }),
    new ServizioTrasporto("da Amalfi/Positano a Napoli o Pompei (mezzi)", "napoli",{
        "1-2": 200,
        "3-6": 165,
        "7-8": 160,
        "9-14": 110,
    }),
    new ServizioAdOre("Disposizione su Napoli, Ercolano, Pompei, Vesuvio (mezzi e ore)", "napoli",{
        "1-2": 50,
        "3-6": 60,
        "7-8": 70,
        "9-14": 70,
    }),
    new ServizioAdOre("Disposizione su Sorrento e Costiera (mezzi e ore)", "napoli",{
        "1-2": 60,
        "3-6": 80,
        "7-8": 90,
        "9-14": 90,
    }),
    new ServizioAdOre("Disposizione su altre città in Campania (mezzi e ore)", "napoli",{
        "1-2": 60,
        "3-6": 80,
        "7-8": 90,
        "9-14": 90,
    }),
    new ServizioGuidaOre("Servizio Guida (ore)", "napoli", 70),
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