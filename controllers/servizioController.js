//Gestione del backend

import { servizi } from "../data/servizi.js";

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
