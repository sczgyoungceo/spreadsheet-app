import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax,
    ServizioGolf
} from "../../models/modelli.js"

export const romaConGolfCart = [
      new ServizioTrasporto("Transfer Su Roma Andata (mezzi)", "roma-con-golf-cart", {
        "1-2": 48,
        "3-5": 64,
        "6-7": 69,
        "8-10": 59,
        "11-14": 69,
      }),
      new ServizioTrasporto("Transfer Su Roma Ritorno (mezzi)", "roma-con-golf-cart", {
        "1-2": 48,
        "3-5": 64,
        "6-7": 69,
        "8-10": 59,
        "11-14": 69,
      }),
      new ServizioTrasporto("Da Porto a Roma (mezzi)", "roma-con-golf-cart", {
        "1-2": 157,
        "3-5": 185,
        "6-7": 200,
        "8-10": 180,
        "11-14": 200,
      }),
      new ServizioTrasporto("Da Roma a Porto (mezzi)", "roma-con-golf-cart", {
        "1-2": 157,
        "3-5": 185,
        "6-7": 200,
        "8-10": 180,
        "11-14": 200,
      }),
      new ServizioTrasporto("Da FCO Airport a Roma (mezzi)", "roma-con-golf-cart", {
        "1-2": 68,
        "3-5": 88,
        "6-7": 94,
        "8-10": 82,
        "11-14": 94,
      }),
      new ServizioTrasporto("Da Roma a FCO Airport (mezzi)", "roma-con-golf-cart", {
        "1-2": 68,
        "3-5": 88,
        "6-7": 94,
        "8-10": 82,
        "11-14": 94,
      }),
      new ServizioGolf("Golf Cart 3h (mezzi)", "roma-con-golf-cart", {
        "1-2": 200,
        "3-6": 280,
        "7": 225,
        "8-10": 265,
        "11-13": 280,
      }),
      new ServizioAdOre("Disposizione su Roma (mezzi e ore)", "roma-con-golf-cart", {
        "1-2": 40,
        "3-5": 50,
        "6-7": 55,
        "8-10": 48,
        "11-14": 55,
      }),
      new ServizioAdOre("Disposizione su Tivoli (non si calcola il transfer, solo dispo) (mezzi e ore)", "roma-con-golf-cart", {
        "1-2": 48,
        "3-5": 58,
        "6-7": 63,
        "8-10": 55,
        "11-14": 63,
      }),
      new ServizioGuidaOre("Servizio guida (ore)", "roma-con-golf-cart",{
        "prezzo": 80, 
       }),
      new ServizioPax("Vaticano (pax)", "roma-con-golf-cart", {
        "adulti": 47,
        "minori": 40,
      }),
      new ServizioPax("Basilica San Pietro", "roma-con-golf-cart", {
        "adulti": 6,
        "minori": 4,
      }),
      new ServizioPax("Musei Vaticani (tolleranza mezz'ora dopo dell'orario stampato) (pax)", "roma-con-golf-cart", {
        "adulti": 44,
        "minori": 35,
      }),
      new ServizioPax("Colosseo (pax)", "roma-con-golf-cart", {
        "adulti": 30,
        "minori": 15,
      }),
      new ServizioPax("Pantheon (pax)", "roma-con-golf-cart", {
        "adulti": 5,
        "minori": 5,
      }),
      new ServizioPax("Capitolini (pax)", "roma-con-golf-cart", {
        "adulti": 14,
        "minori": 11,
      }),
      new ServizioPax("Borghese (pax)", "roma-con-golf-cart", {
        "adulti": 28,
        "minori": 4,
      }),
      new ServizioPax("Ostia (pax)", "roma-con-golf-cart", {
        "adulti": 19,
        "minori": 5,
      }),
      new ServizioPax("Castel Sant'Angelo (pax)", "roma-con-golf-cart", {
        "adulti": 16,
        "minori": 8,
      }),
      new ServizioPax("Tivoli (pax)", "roma-con-golf-cart", {
        "adulti": 25,
        "minori": 10,
      }),
      new ServizioPax("Catacombe (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("San Clemente( pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("Palazzo Doria Pamphili (pax)", "roma-con-golf-cart", {
        "adulti": 17,
        "minori": 0,
      }),
      new ServizioPax("Carcere Mamertino (lun/dom 9-17) (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("Case Romane Celio (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 2,
      }),
      new ServizioPax("Terme di Caracalla (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 2,
      }),
      new ServizioPax("Terme di Diocleziano (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 2,
      }),
      new ServizioPax("Palazzo Massimo (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 2,
      }),
      new ServizioPax("Santa Cecilia (pax)", "roma-con-golf-cart", {
        "adulti": 8,
        "minori": 3,
      }),
      new ServizioPax("Stadio Domiziano prenotazione obbligatoria (pax)", "roma-con-golf-cart", {
        "adulti": 5,
        "minori": 3,
      }),
      new ServizioPax("Vicus Caprarius prenotazione obbligatoria si paga in cash sul momento (pax)", "roma-con-golf-cart", {
        "adulti": 8,
        "minori": 2.5,
      }),
      new ServizioPax("Sinagoga (paga anche la guida e non spiega) (pax)", "roma-con-golf-cart", {
        "adulti": 11,
        "minori": 8,
      }),
      new ServizioPax("Montemartini (pax)", "roma-con-golf-cart", {
        "adulti": 11,
        "minori": 10,
      }),
      new ServizioPax("Cripta Capuccini (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("Foro e Palatino SUPER (pax)", "roma-con-golf-cart", {
        "adulti": 23,
        "minori": 0,
      }),
      new ServizioPax("Colosseo + Arena + Underground - (Full Experience) solo in bassa stagione (pax)", "roma-con-golf-cart", {
        "adulti": 39,
        "minori": 20,
      }),
      new ServizioPax("Colosseo + Arena (Full Experience) (pax)", "roma-con-golf-cart", {
        "adulti": 30,
        "minori": 15,
      }),
      new ServizioPax( "Degustazioni Food Tour(pax)", "roma-con-golf-cart", {
        "adulti": 36.6,
        "minori": 20,
      }),
      new ServizioPax( "Degustazioni Food & Wine Tour(pax)", "roma-con-golf-cart", {
        "adulti": 40,
        "minori": 20,
      }),
      new ServizioPax( "Headsets (pax)", "roma-con-golf-cart", {
        "adulti": 2.5,
        "minori": 2.5,
      }),
]