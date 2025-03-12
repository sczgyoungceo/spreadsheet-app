// Classe base Servizio
class Servizio {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
  }

  // Metodo da implementare nelle classi derivate
  calcolaTotale() {
    throw new Error("Metodo calcolaTotale non implementato");
  }
}

// Classe derivata ServizioTrasporto
class ServizioTrasporto extends Servizio {
  constructor(id, nome, mezzi, ore) {
    super(id, nome); // Chiamata al costruttore della classe base
    this.mezzi = mezzi; // Numero di mezzi
    this.ore = ore; // Numero di ore
  }

  // Metodo per calcolare il totale, specifico per i servizi di trasporto
  calcolaTotale() {
    const tariffaPerMezzo = 48 * 1.6; // Tariffa per mezzo (48 * 1.6)
    return this.mezzi * tariffaPerMezzo; // Solo il costo dei mezzi
  }

  aggiornaDati(mezzi, ore, adulti, minori) {
    this.mezzi = mezzi;
    this.ore = ore;
    this.adulti = adulti;  // Aggiorna adulti
    this.minori = minori;  // Aggiorna minori
  }

  // Metodo per descrivere il servizio
  descrizione() {
    return `Servizio: ${this.nome}, Mezzi: ${this.mezzi}, Ore: ${this.ore}, Adulti: ${this.adulti}, Minori: ${this.minori}`;
  }
}

// Esporta le classi come default
export default { Servizio, ServizioTrasporto };
