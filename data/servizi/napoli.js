import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax,
} from "../../models/modelli.js"

export const napoli = [
    new ServizioTrasporto(44, "Da Porto o Napoli/Sorrento a Pompei(mezzi)", "napoli",{
        "1-3": 90,
        "4-6": 120,
        "7-8": 140,
        "9-14": 140,
    }),
    new ServizioTrasporto(45, "Da Pompei a Porto o Napoli/Sorrento(mezzi)", "napoli",{
        "1-3": 90,
        "4-6": 120,
        "7-8": 140,
        "9-14": 140,
    }),
    new ServizioTrasporto(46, "Da Porto o Napoli/Sorrento a Ercolano(mezzi)", "napoli",{
        "1-3": 70,
        "4-6": 100,
        "7-8": 120,
        "9-14": 120,
    }),
    new ServizioTrasporto(47, "da Ercolano a Porto o Napoli/Sorrento(mezzi)", "napoli",{
        "1-3": 70,
        "4-6": 100,
        "7-8": 120,
        "9-14": 120,
    }),
    new ServizioTrasporto(48, "da Napoli o Pompei ad Amalfi/Positano(mezzi)", "napoli",{
        "1-3": 200,
        "4-6": 230,
        "7-8": 250,
        "9-14": 250,
    }),
    new ServizioTrasporto(49, "da Amalfi/Positano a Napoli o Pompei(mezzi)", "napoli",{
        "1-3": 200,
        "4-6": 165,
        "7-8": 160,
        "9-14": 110,
    }),
    new ServizioAdOre(50, "Disposizione su Napoli, Ercolano, Pompei, Vesuvio(mezzi e ore)", "napoli",{
        "1-3": 50,
        "4-6": 60,
        "7-8": 70,
        "9-14": 70,
    }),
    new ServizioAdOre(51, "Disposizione su Sorrento e Costiera(mezzi e ore)", "napoli",{
        "1-3": 60,
        "4-6": 80,
        "7-8": 90,
        "9-14": 90,
    }),
    new ServizioAdOre(52, "Disposizione su altre città in Campania(mezzi e ore)", "napoli",{
        "1-3": 60,
        "4-6": 80,
        "7-8": 90,
        "9-14": 90,
    }),
    new ServizioGuidaOre(53, "Servizio Guida(ore)", "napoli", 70),
    new ServizioPax(54, "Pompei(pax)", "napoli",{
        "adulti": 22,
        "minori": 10,
    }),
    new ServizioPax(55, "Ercolano(pax)", "napoli",{
        "adulti": 18,
        "minori": 9,
    }),
    new ServizioPax(56, "Vesuvio(pax)", "napoli",{
        "adulti": 15,
        "minori": 10,
    }),
    new ServizioPax(57, "Food and Wine(pax)", "napoli",{
        "adulti": 30,
        "minori": 25,
    }),
    new ServizioPax(58, "Headsets(pax)", "napoli",{
        "adulti": 2.5,
        "minori": 2.5,
    }),
]