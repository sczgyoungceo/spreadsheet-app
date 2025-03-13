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
  constructor(id, nome, tariffaBase) {
    super(id, nome); // Chiamata al costruttore della classe base
    this.tariffaBase = tariffaBase;
    this.mezzi = 0; // Numero di mezzi
    this.ore = 0; // Numero di ore
    this.adulti = 0;
    this.minori = 0;
  }

  // Getter per ottenere il numero di persone dinamicamente
  get persone() {
    return this.adulti + this.minori;
  }

  calcolaTotale() {
    const tariffaMezzi = 1.6;
    let mezzi = 0;
    let tariffaBase = 0;

    // Determiniamo il numero di mezzi e la tariffa base
    if (this.persone >= 1 && this.persone <= 3) {
      mezzi = 1;
      tariffaBase = 48;
    } else if (this.persone >= 4 && this.persone <= 6) {
      mezzi = 1;
      tariffaBase = 64;
    } else if (this.persone >= 7 && this.persone <= 8) {
      mezzi = 1;
      tariffaBase = 69;
    } else if (this.persone >= 10 && this.persone <= 11) {
      mezzi = 2;
      tariffaBase = 59;
    } else if (this.persone >= 13 && this.persone <= 14) {
      mezzi = 2;
      tariffaBase = 69;
    } else if (this.persone > 14) {
      return `
        <script>
            alert("⚠️ Attenzione! Il numero massimo di persone gestibili direttamente è 14.");
        </script>
    `;
    }

    /* GESTIRE LA NOTIFICA DELL ALERT PERCHE IN NODE NON ESISTE ALERT() COME IN JS */

    // Salviamo il numero di mezzi nel servizio
    this.mezzi = mezzi;
    this.tariffaBase = tariffaBase;

    // Calcoliamo il totale
    return this.mezzi * (this.tariffaBase * tariffaMezzi);
  }

  // Metodo per aggiornare i dettagli del servizio
  aggiornaDati(mezzi, ore, adulti, minori) {
    this.mezzi = mezzi; // Aggiorna il numero di mezzi
    this.ore = ore; // Aggiorna il numero di ore
    this.adulti = adulti;
    this.minori = minori;
  }

  // Metodo per descrivere il servizio
  descrizione() {
    return `Servizio: ${this.nome}, Mezzi: ${this.mezzi}, Ore: ${this.ore}, Adulti: ${this.adulti}, Minori: ${this.minori}, Totale Persone: ${this.persone}`;
  }
}

// Esporta le classi come default
export default { Servizio, ServizioTrasporto };
