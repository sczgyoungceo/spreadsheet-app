import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax,
} from "../../models/modelli.js"

export const romaNoGolfCart = [
    new ServizioTrasporto("Transfer Su Roma Andata (mezzi)", "roma-no-golf-cart", {
      "1-2": 48,
      "3-6": 64,
      "7-8": 69,
      "9-11": 59,
      "12-14": 69,
    }),
    new ServizioTrasporto( "Transfer Su Roma Ritorno (mezzi)", "roma-no-golf-cart", {
      "1-2": 48,
      "3-6": 64,
      "7-8": 69,
      "9-11": 59,
      "12-14": 69,
    }),
    new ServizioTrasporto( "Da Porto a Roma (mezzi)", "roma-no-golf-cart", {
      "1-2": 157,
      "3-6": 185,
      "7-8": 200,
      "9-11": 180,
      "12-14": 200,
    }),
    new ServizioTrasporto( "Da Roma a Porto (mezzi)", "roma-no-golf-cart", {
      "1-2": 157,
      "3-6": 185,
      "7-8": 200,
      "9-11": 180,
      "12-14": 200,
    }),
    new ServizioTrasporto( "Da FCO Airport a Roma (mezzi)", "roma-no-golf-cart", {
      "1-2": 68,
      "3-6": 88,
      "7-8": 94,
      "9-11": 82,
      "12-14": 94,
    }),
    new ServizioTrasporto( "Da Roma a FCO Airport (mezzi)", "roma-no-golf-cart", {
      "1-2": 68,
      "3-6": 88,
      "7-8": 94,
      "9-11": 82,
      "12-14": 94,
    }),
    new ServizioAdOre( "Disposizione su Roma (mezzi e ore)", "roma-no-golf-cart", {
      "1-2": 40,
      "3-6": 50,
      "7-8": 55,
      "9-11": 48,
      "12-14": 55,
    }),
    new ServizioAdOre( "Disposizione su Tivoli (ore) (non si calcola il transfer, solo dispo)", "roma-no-golf-cart", {
      "1-2": 48,
      "3-6": 58,
      "7-8": 63,
      "9-11": 55,
      "12-14": 63,
    }),
    new ServizioGuidaOre( "Servizio guida (ore)", "roma-no-golf-cart", 
      80),
    new ServizioPax( "Vaticano (pax)", "roma-no-golf-cart", {
      "adulti": 47,
      "minori": 40,
    }),
    new ServizioPax( "Colosseo (pax)", "roma-no-golf-cart", {
      "adulti": 30,
      "minori": 15,
    }),
    new ServizioPax( "Pantheon (pax)", "roma-no-golf-cart", {
      "adulti": 5,
      "minori": 5,
    }),
    new ServizioPax( "Capitolini (pax)", "roma-no-golf-cart", {
      "adulti": 14,
      "minori": 11,
    }),
    new ServizioPax( "Borghese (pax)", "roma-no-golf-cart", {
      "adulti": 28,
      "minori": 4,
    }),
    new ServizioPax( "Ostia (pax)", "roma-no-golf-cart", {
      "adulti": 19,
      "minori": 5,
    }),
    new ServizioPax( "Castel Sant'Angelo (pax)", "roma-no-golf-cart", {
      "adulti": 16,
      "minori": 8,
    }),
    new ServizioPax( "Tivoli (pax)", "roma-no-golf-cart", {
      "adulti": 25,
      "minori": 10,
    }),
    new ServizioPax( "Catacombe (pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 5,
    }),
    new ServizioPax( "San Clemente (pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 5,
    }),
    new ServizioPax("Palazzo Doria Pamphili (pax)", "roma-no-golf-cart", {
      "adulti": 17,
      "minori": 0,
    }),
    new ServizioPax("Carcere Mamertino (lun/dom 9-17) (pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 5,
    }),
    new ServizioPax("Case Romane Celio (pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 2,
    }),
    new ServizioPax("Terme di Caracalla (pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 2,
    }),
    new ServizioPax("Terme di Diocleziano (pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 2,
    }),
    new ServizioPax("Palazzo Massimo (pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 2,
    }),
    new ServizioPax("Santa Cecilia (pax)", "roma-no-golf-cart", {
      "adulti": 8,
      "minori": 3,
    }),
    new ServizioPax("Stadio Domiziano prenotazione obbligatoria (pax)", "roma-no-golf-cart", {
      "adulti": 5,
      "minori": 3,
    }),
    new ServizioPax("Vicus Caprarius prenotazione obbligatoria si paga in cash sul momento (pax)", "roma-no-golf-cart", {
      "adulti": 8,
      "minori": 2.5,
    }),
    new ServizioPax("Sinagoga (paga anche la guida e non spiega) (pax)", "roma-no-golf-cart", {
      "adulti": 11,
      "minori": 8,
    }),
    new ServizioPax("Montemartini (pax)", "roma-no-golf-cart", {
      "adulti": 11,
      "minori": 10,
    }),
    new ServizioPax("Cripta Capuccini (pax)", "roma-no-golf-cart", {
      "adulti": 10,
      "minori": 5,
    }),
    new ServizioPax("Foro e Palatino SUPER (pax)", "roma-no-golf-cart", {
      "adulti": 23,
      "minori": 0,
    }),
    new ServizioPax("Colosseo + Arena + Underground - (Full Experience) solo in bassa stagione (pax)", "roma-no-golf-cart", {
      "adulti": 39,
      "minori": 20,
    }),
    new ServizioPax("Colosseo + Arena (Full Experience) (pax)", "roma-no-golf-cart", {
      "adulti": 29,
      "minori": 15,
    }),
    new ServizioPax( "Degustazioni Food Tour (pax)", "roma-no-golf-cart", {
      "adulti": 36.6,
      "minori": 20,
    }),
    new ServizioPax( "Degustazioni Food & Wine Tour (pax)", "roma-no-golf-cart", {
      "adulti": 40,
      "minori": 20,
    }),
    new ServizioPax( "Headsets (pax)", "roma-no-golf-cart", {
      "adulti": 2.5,
      "minori": 2.5,
    }),
];
