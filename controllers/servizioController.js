// Importa le classi tramite l'export default
import Servizi from "../models/servizio.js";

// Ora puoi accedere alle classi come proprietà dell'oggetto importato
const {
  Servizio,
  ServizioTrasporto,
  ServizioAdOre,
  ServizioGuidaOre,
  ServizioPax,
} = Servizi;

// Lista di servizi predefiniti (solo il nome iniziale)
let servizi = [
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
  new ServizioTrasporto(22, "test", "roma-con-golf-cart", {
    "1-3": 48,
    "4-6": 64,
    "7-8": 69,
    "9-11": 59,
    "12-14": 69,
  }),
];


// Funzione per ottenere la lista di tutti i servizi
export const listaServizi = (req, res) => {
  res.status(200).json({ servizi });
};

// Funzione per selezionare un servizio tramite ID
export const selezionaServizio = (req, res) => {
  const { id } = req.params;
  const servizio = servizi.find((serv) => serv.id === parseInt(id));

  if (!servizio) {
    return res.status(404).json({ message: "Servizio non trovato" });
  }

  res.status(200).json({ servizio });
};

// Funzione per aggiornare i dettagli di un servizio
export const aggiornaServizio = (req, res) => {
  const { id } = req.params;
  const { mezzi, ore, adulti, minori } = req.body;

  const servizio = servizi.find((serv) => serv.id === parseInt(id));

  if (!servizio) {
    return res.status(404).json({ message: "Servizio non trovato" });
  }

  // Aggiorna i dettagli del servizio
  servizio.aggiornaDati(mezzi, ore, adulti, minori); // Metodo che aggiorna i dati

  // Calcola il totale
  const totale = servizio.calcolaTotale();

  if (isNaN(totale)) {
    return res
      .status(400)
      .json({ message: "Errore nel calcolo del totale", totale: 0 });
  }

  // Arrotonda il totale a 2 decimali
  const totaleArrotondato = totale.toFixed(2);

  res.status(200).json({
    message: "Servizio aggiornato con successo!",
    servizio,
    /*     descrizione: servizio.descrizione(),
     */ totale: totaleArrotondato, // Passa il totale arrotondato
  });
  /* console.log(servizio.descrizione());
  console.log(`Totale: €${totaleArrotondato}`); */
};
