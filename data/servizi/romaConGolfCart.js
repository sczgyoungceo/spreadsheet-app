import {
    ServizioTrasporto,
    ServizioAdOre,
    ServizioGuidaOre,
    ServizioPax,
    ServizioGolf
} from "../../models/modelli.js"

export const romaConGolfCart = [
    new ServizioTrasporto("Transfer Su Roma Andata(mezzi)", "roma-con-golf-cart", {
        "1-3": 48,
        "4-7": 64,
        "8": 69,
        "9-11": 59,
        "12-14": 69,
      }),
      new ServizioTrasporto("Transfer Su Roma Ritorno(mezzi)", "roma-con-golf-cart", {
        "1-3": 48,
        "4-7": 64,
        "8": 69,
        "9-11": 59,
        "12-14": 69,
      }),
      new ServizioTrasporto("Da Porto a Roma(mezzi)", "roma-con-golf-cart", {
        "1-3": 157,
        "4-7": 185,
        "8": 200,
        "9-11": 180,
        "12-14": 200,
      }),
      new ServizioTrasporto("Da Roma a Porto(mezzi)", "roma-con-golf-cart", {
        "1-3": 157,
        "4-7": 185,
        "8": 200,
        "9-11": 180,
        "12-14": 200,
      }),
      new ServizioTrasporto("Da FCO Airport a Roma (mezzi)", "roma-con-golf-cart", {
        "1-3": 68,
        "4-7": 88,
        "8": 94,
        "9-11": 82,
        "12-14": 94,
      }),
      new ServizioTrasporto("Da Roma a FCO Airport (mezzi)", "roma-con-golf-cart", {
        "1-3": 68,
        "4-7": 88,
        "8": 94,
        "9-11": 82,
        "12-14": 94,
      }),
      new ServizioGolf("Golf Cart 3h (mezzi)", "roma-con-golf-cart", {
        "1-3": 200,
        "4-7": 280,
        "8": 225,
        "9-11": 265,
        "12-14": 280,
      }),
      new ServizioAdOre("Disposizione su Roma (mezzi e ore)", "roma-con-golf-cart", {
        "1-3": 40,
        "4-7": 50,
        "8": 55,
        "9-11": 48,
        "12-14": 55,
      }),
      new ServizioAdOre("Disposizione su Tivoli (ore) (non si calcola il transfer, solo dispo)", "roma-con-golf-cart", {
        "1-3": 48,
        "4-7": 58,
        "8": 63,
        "9-11": 55,
        "12-14": 63,
      }),
      new ServizioGuidaOre("Servizio guida (ore)", "roma-con-golf-cart", 
        80),
      new ServizioPax("Vaticano(pax)", "roma-con-golf-cart", {
        "adulti": 47,
        "minori": 40,
      }),
      new ServizioPax("Musei Vaticani (tolleranza mezz'ora dopo dell'orario stampato) (pax)", "roma-con-golf-cart", {
        "adulti": 44,
        "minori": 35,
      }),
      new ServizioPax("Colosseo(pax)", "roma-con-golf-cart", {
        "adulti": 30,
        "minori": 15,
      }),
      new ServizioPax("Pantheon(pax)", "roma-con-golf-cart", {
        "adulti": 5,
        "minori": 5,
      }),
      new ServizioPax("Capitolini(pax)", "roma-con-golf-cart", {
        "adulti": 14,
        "minori": 11,
      }),
      new ServizioPax("Borghese(pax)", "roma-con-golf-cart", {
        "adulti": 28,
        "minori": 4,
      }),
      new ServizioPax("Ostia(pax)", "roma-con-golf-cart", {
        "adulti": 19,
        "minori": 5,
      }),
      new ServizioPax("Castel Sant'Angelo(pax)", "roma-con-golf-cart", {
        "adulti": 16,
        "minori": 8,
      }),
      new ServizioPax("Tivoli(pax)", "roma-con-golf-cart", {
        "adulti": 25,
        "minori": 10,
      }),
      new ServizioPax("Catacombe(pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("San Clemente(pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("Headsets(pax)", "roma-con-golf-cart", {
        "adulti": 2.5,
        "minori": 2.5,
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
      new ServizioPax("Villa Adriana e Villa D'Este (pax)", "roma-con-golf-cart", {
        "adulti": 25,
        "minori": 0,
      }),
      new ServizioPax("Sinagoga (paga anche la guida e non spiega) (pax)", "roma-con-golf-cart", {
        "adulti": 11,
        "minori": 8,
      }),
      new ServizioPax("Walking Ghetto e Trastevere (pax)", "roma-con-golf-cart", {
        "adulti": 0,
        "minori": 0,
      }),
      new ServizioPax("Walking piazza e fontane (pax)", "roma-con-golf-cart", {
        "adulti": 0,
        "minori": 0,
      }),
      new ServizioPax("Caravaggio (pax)", "roma-con-golf-cart", {
        "adulti": 0,
        "minori": 0,
      }),
      new ServizioPax("Pantheon (pax)", "roma-con-golf-cart", {
        "adulti": 5,
        "minori": 0,
      }),
      new ServizioPax("Montemartini (pax)", "roma-con-golf-cart", {
        "adulti": 11,
        "minori": 10,
      }),
      new ServizioPax("Catacombe Domitilla (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("Catacombe San Callisto dura 40' (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("Cripta Capuccini (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("Palazzo Colonna + Appartamenti + Giardini (pax)", "roma-con-golf-cart", {
        "adulti": 25,
        "minori": 25,
      }),
      new ServizioPax("Palazzo Colonna + Giardini (pax)", "roma-con-golf-cart", {
        "adulti": 15,
        "minori": 15,
      }),
      new ServizioPax("DOMUS AUREA (pax)", "roma-con-golf-cart", {
        "adulti": 16,
        "minori": 0,
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
        "adulti": 29,
        "minori": 15,
      }),
      new ServizioPax("Colosseo Foro e Palatino (pax)", "roma-con-golf-cart", {
        "adulti": 23,
        "minori": 10,
      }),
      new ServizioPax("Cupola ascensore (pax)", "roma-con-golf-cart", {
        "adulti": 10,
        "minori": 5,
      }),
      new ServizioPax("Vaticano notturno (solo il venerdì e sabato) no basilica (pax)", "roma-con-golf-cart", {
        "adulti": 25,
        "minori": 15,
      }),
      new ServizioPax("Giardini (piccolo bus elettrico) solo in gruppo, dura 45min e sotto i 6 anni non possono fare il tour (pax)", "roma-con-golf-cart", {
        "adulti": 50,
        "minori": 40,
      }),
      new ServizioPax("Basilica San Pietro: Scavi, Necropoli e Tomba San Pietro (si deve compilare questo form http://www.scavi.va/content/scavi/it/form-prenotazioni-visite.html) (pax)", "roma-con-golf-cart", {
        "adulti": 20,
        "minori": 0,
      }),
      new ServizioPax("Colazione ai Musei (nel prezzo compreso già biglietto guida che paga) non lo facciamo tbl (pax)", "roma-con-golf-cart", {
        "adulti": 58,
        "minori": 38,
      }),
      new ServizioPax( "Food & Wine(pax)", "roma-con-golf-cart", {
        "adulti": 30,
        "minori": 25,
      }),
      new ServizioPax( "Trastevere Cooking Class (Pasta, Pizza and Tiramisu Making) (pax)", "roma-con-golf-cart", {
        "adulti": 85,
        "minori": 75,
      }),
      new ServizioPax( "Appia Cooking Class (Pasta&Pizza Making, Tiramisu, & Limoncello Tasting) (pax)", "roma-con-golf-cart", {
        "adulti": 70,
        "minori": 60,
      }),
]