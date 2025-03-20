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
  new ServizioTrasporto(1, "Transfer Su Roma Andata(mezzi)", {
    "1-3": 48,
    "4-6": 64,
    "7-8": 69,
    "9-11": 59,
    "12-14": 69,
  }),
  new ServizioTrasporto(2, "Transfer Su Roma Ritorno(mezzi)", {
    "1-3": 48,
    "4-6": 64,
    "7-8": 69,
    "9-11": 59,
    "12-14": 69,
  }),
  new ServizioTrasporto(3, "Da Porto a Roma(mezzi)", {
    "1-3": 157,
    "4-6": 185,
    "7-8": 200,
    "9-11": 180,
    "12-14": 200,
  }),
  new ServizioTrasporto(4, "Da Roma a Porto(mezzi)", {
    "1-3": 157,
    "4-6": 185,
    "7-8": 200,
    "9-11": 180,
    "12-14": 200,
  }),
  new ServizioTrasporto(5, "Da FCO Airport a Roma (mezzi)", {
    "1-3": 68,
    "4-6": 88,
    "7-8": 94,
    "9-11": 82,
    "12-14": 94,
  }),
  new ServizioTrasporto(6, "Da Roma a FCO Airport (mezzi)", {
    "1-3": 68,
    "4-6": 88,
    "7-8": 94,
    "9-11": 82,
    "12-14": 94,
  }),
  new ServizioAdOre(7, "Disposizione su Roma (mezzi e ore)", {
    "1-3": 40,
    "4-6": 50,
    "7-8": 55,
    "9-11": 48 /* anche mezzi */,
    "12-14": 55 /* anche mezzi */,
  }),
  new ServizioAdOre(
    8,
    "Disposizione su Tivoli (mezzi ore) (non si calcola il transfer, solo dispo)",
    {
      "1-3": 48,
      "4-6": 58,
      "7-8": 63,
      "9-11": 55 /* anche mezzi */,
      "12-14": 63 /* anche mezzi */,
    }
  ),
  new ServizioGuidaOre(9, "Servizio guida (ore)", 80),

  new ServizioPax(10, "Vaticano(pax)", 10, {
    adulti: 47,
    minori: 40,
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
