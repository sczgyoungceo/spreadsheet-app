import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax,
    ServizioGolf
} from "../../models/modelli.js"

export const romaConGolfCart = [
    new ServizioTrasporto(22, "Transfer Su Roma Andata(mezzi)", "roma-con-golf-cart", {
        "1-3": 48,
        "4-7": 64,
        "8": 69,
        "9-11": 59,
        "12-14": 69,
      }),
      new ServizioTrasporto(23, "Transfer Su Roma Ritorno(mezzi)", "roma-con-golf-cart", {
        "1-3": 48,
        "4-7": 64,
        "8": 69,
        "9-11": 59,
        "12-14": 69,
      }),
      new ServizioTrasporto(24, "Da Porto a Roma(mezzi)", "roma-con-golf-cart", {
        "1-3": 157,
        "4-7": 185,
        "8": 200,
        "9-11": 180,
        "12-14": 200,
      }),
      new ServizioTrasporto(25, "Da Roma a Porto(mezzi)", "roma-con-golf-cart", {
        "1-3": 157,
        "4-7": 185,
        "8": 200,
        "9-11": 180,
        "12-14": 200,
      }),
      new ServizioTrasporto(26, "Da FCO Airport a Roma (mezzi)", "roma-con-golf-cart", {
        "1-3": 68,
        "4-7": 88,
        "8": 94,
        "9-11": 82,
        "12-14": 94,
      }),
      new ServizioTrasporto(27, "Da Roma a FCO Airport (mezzi)", "roma-con-golf-cart", {
        "1-3": 68,
        "4-7": 88,
        "8": 94,
        "9-11": 82,
        "12-14": 94,
      }),
      new ServizioAdOre(28, "Disposizione su Roma (mezzi e ore)", "roma-con-golf-cart", {
        "1-3": 40,
        "4-7": 50,
        "8": 55,
        "9-11": 48,
        "12-14": 55,
      }),
      new ServizioAdOre(29, "Disposizione su Tivoli (mezzi ore) (non si calcola il transfer, solo dispo)", "roma-con-golf-cart", {
        "1-3": 48,
        "4-7": 58,
        "8": 63,
        "9-11": 55,
        "12-14": 63,
      }),
      new ServizioGuidaOre(30, "Servizio guida (ore)", "roma-con-golf-cart", 
        80),
      new ServizioPax(31, "Vaticano(pax)", "roma-con-golf-cart", {
        "adulti": 47,
        "minori": 40,
      }),
      new ServizioPax(32, "Colosseo(pax)", "roma-con-golf-cart", {
        "adulti": 30,
        "minori": 15,
      }),
      new ServizioPax(33, "Pantheon(pax)", "roma-con-golf-cart", {
        "adulti": 5,
        "minori": 5,
      }),
      new ServizioPax(34, "Capitolini(pax)", "roma-con-golf-cart", {
        "adulti": 14,
        "minori": 11,
      }),
      new ServizioPax(35, "Borghese(pax)", "roma-con-golf-cart", {
        "adulti": 28,
        "minori": 4,
      }),
      new ServizioPax(36, "Ostia(pax)", "roma-con-golf-cart", {
        "adulti": 18,
        "minori": 5,
      }),
      new ServizioPax(37, "Castel Sant'Angelo(pax)", "roma-con-golf-cart", {
        "adulti": 16,
        "minori": 8,
      }),
      new ServizioPax(38, "Tivoli(pax)", "roma-con-golf-cart", {
        "adulti": 25,
        "minori": 10,
      }),
      new ServizioPax(39, "Catacombe(pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax(40, "San Clemente(pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax(41, "Food & Wine(pax)", "roma-con-golf-cart", {
        "adulti": 30,
        "minori": 25,
      }),
      new ServizioPax(42, "Headsets(pax)", "roma-con-golf-cart", {
        "adulti": 2.5,
        "minori": 2.5,
      }),
      new ServizioGolf(43, "Golf Cart 3h(mezzi)", "roma-con-golf-cart", {
        "1-3": 200,
        "4-7": 280,
        "8": 225,
        "9-11": 265,
        "12-14": 280,
      }),
]