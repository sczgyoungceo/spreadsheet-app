import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax,
} from "../../models/modelli.js"

export const romaNoGolfCart = [
    new ServizioTrasporto(1, "Transfer Su Roma Andata(mezzi)", "roma-no-golf-cart", {
      "1-3": 48,
      "4-6": 64,
      "7-8": 69,
      "9-11": 59,
      "12-14": 69,
    }),
    new ServizioTrasporto(2, "Transfer Su Roma Ritorno(mezzi)", "roma-no-golf-cart", {
      "1-3": 48,
      "4-6": 64,
      "7-8": 69,
      "9-11": 59,
      "12-14": 69,
    }),
    new ServizioTrasporto(3, "Da Porto a Roma(mezzi)", "roma-no-golf-cart", {
      "1-3": 157,
      "4-6": 185,
      "7-8": 200,
      "9-11": 180,
      "12-14": 200,
    }),
    new ServizioTrasporto(4, "Da Roma a Porto(mezzi)", "roma-no-golf-cart", {
      "1-3": 157,
      "4-6": 185,
      "7-8": 200,
      "9-11": 180,
      "12-14": 200,
    }),
    new ServizioTrasporto(5, "Da FCO Airport a Roma (mezzi)", "roma-no-golf-cart", {
      "1-3": 68,
      "4-6": 88,
      "7-8": 94,
      "9-11": 82,
      "12-14": 94,
    }),
    new ServizioTrasporto(6, "Da Roma a FCO Airport (mezzi)", "roma-no-golf-cart", {
      "1-3": 68,
      "4-6": 88,
      "7-8": 94,
      "9-11": 82,
      "12-14": 94,
    }),
    new ServizioAdOre(7, "Disposizione su Roma (mezzi e ore)", "roma-no-golf-cart", {
      "1-3": 40,
      "4-6": 50,
      "7-8": 55,
      "9-11": 48,
      "12-14": 55,
    }),
    new ServizioAdOre(8, "Disposizione su Tivoli (mezzi ore) (non si calcola il transfer, solo dispo)", "roma-no-golf-cart", {
      "1-3": 48,
      "4-6": 58,
      "7-8": 63,
      "9-11": 55,
      "12-14": 63,
    }),
    new ServizioGuidaOre(9, "Servizio guida (ore)", "roma-no-golf-cart", 
      80),
    new ServizioPax(10, "Vaticano(pax)", "roma-no-golf-cart", {
      "adulti": 47,
      "minori": 40,
    }),
    new ServizioPax(11, "Colosseo(pax)", "roma-no-golf-cart", {
      "adulti": 30,
      "minori": 15,
    }),
    new ServizioPax(12, "Pantheon(pax)", "roma-no-golf-cart", {
      "adulti": 5,
      "minori": 5,
    }),
    new ServizioPax(13, "Capitolini(pax)", "roma-no-golf-cart", {
      "adulti": 14,
      "minori": 11,
    }),
    new ServizioPax(14, "Borghese(pax)", "roma-no-golf-cart", {
      "adulti": 28,
      "minori": 4,
    }),
    new ServizioPax(15, "Ostia(pax)", "roma-no-golf-cart", {
      "adulti": 18,
      "minori": 5,
    }),
    new ServizioPax(16, "Castel Sant'Angelo(pax)", "roma-no-golf-cart", {
      "adulti": 16,
      "minori": 8,
    }),
    new ServizioPax(17, "Tivoli(pax)", "roma-no-golf-cart", {
      "adulti": 25,
      "minori": 10,
    }),
    new ServizioPax(18, "Catacombe(pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 5,
    }),
    new ServizioPax(19, "San Clemente(pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 5,
    }),
    new ServizioPax(20, "Food & Wine(pax)", "roma-no-golf-cart", {
      "adulti": 30,
      "minori": 25,
    }),
    new ServizioPax(21, "Headsets(pax)", "roma-no-golf-cart", {
      "adulti": 2.5,
      "minori": 2.5,
    }),
];
