// Classe base Servizio
class Servizio {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
  }

  calcolaTotale() {
    throw new Error("Metodo calcolaTotale non implementato");
  }
}

// Classe derivata ServizioTrasporto
class ServizioTrasporto extends Servizio {
  constructor(id, nome, tariffe) {
    super(id, nome);
    this.tariffe = tariffe;
    this.mezzi = 0; 
    this.ore = 0;
    this.adulti = 0;
    this.minori = 0;
  }

  
  get persone() {
    return this.adulti + this.minori;
  }

  getTariffa() {
    if (this.persone >= 1 && this.persone <= 3) return this.tariffe["1-3"];
    if (this.persone >= 4 && this.persone <= 6) return this.tariffe["4-6"];
    if (this.persone >= 7 && this.persone <= 8) return this.tariffe["7-8"];
    if (this.persone >= 9 && this.persone <= 11) return this.tariffe["9-11"];
    if (this.persone >= 12 && this.persone <= 14) return this.tariffe["12-14"];
    return 0; // Se le persone superano 14, può essere gestito diversamente
  }

  calcolaTotale() {
    const tariffaMezzi = 1.6;
    let mezzi = 1;
    let tariffaBase = this.getTariffa(); // Ottieni la tariffa dinamica

    if (this.persone >= 9) {
      mezzi = 2;
    }
    
    if(this.persone >= 15) {
      console.log(`Numero persone superiore al limite: ${this.persone}`)
    }

    // Debugging
    console.log(`📊 Servizio: ${this.nome}`);
    console.log(`🔹 Tariffa Base: ${tariffaBase}`);
    console.log(`🔹 Mezzi assegnati: ${mezzi}`);

    // Calcoliamo il totale
    const totale = mezzi * (tariffaBase * tariffaMezzi);
    console.log(`💰 Totale calcolato: €${totale.toFixed(2)}`);

    // Salviamo il numero di mezzi assegnati
    this.mezzi = mezzi;
    return totale;
  }

  aggiornaDati(mezzi, ore, adulti, minori) {
    this.mezzi = mezzi;
    this.ore = ore;
    this.adulti = adulti;
    this.minori = minori;
  }

  descrizione() {
    return `Servizio: ${this.nome}, Mezzi: ${this.mezzi}, Ore: ${this.ore}, Adulti: ${this.adulti}, Minori: ${this.minori}, Totale Persone: ${this.persone}`;
  }
}

/* class ServizioAdOre extends Servizio {
  constructor(id, nome, tariffaBaseOre) {
    super(id, nome);
    this.tariffaBaseOre = tariffaBaseOre;
    this.mezzi = 0;
    this.ore = 0;
    this.adulti = 0;
    this.minori = 0;
  }

  get persone() {
    return this.adulti + this.minori;
  }

  calcolaTotale() {
    const tariffaOre = 1.6;
    let mezzi = 0;
    let tariffaBase = 0;
    let ore = 0;

    if (this.persone >= 1 && this.persone <= 3) {
      mezzi = 1;
      tariffaBase = 40;
    } else if (this.persone >= 4 && this.persone <= 6) {
      mezzi = 1;
      tariffaBase = 50;
      console.log(`Utilizzo di van per: ${this.persone}`);
    } else if (this.persone >= 7 && this.persone <= 8) {
      mezzi = 1;
      tariffaBase = 55;
      console.log(`Utilizzo di van per: ${this.persone}`);
    } else if (this.persone >= 9 && this.persone <= 11) {
      mezzi = 2;
      tariffaBase = 48;
    } else if (this.persone >= 12 && this.persone <= 14) {
      mezzi = 2;
      tariffaBase = 55;
    } else if (this.persone > 14) {
      console.log(`Le persone superano il limite ${this.persone}`);
    }

    const totale = this.ore * (tariffaBase * tariffaOre) * mezzi
    
    this.mezzi = mezzi;
    this.tariffaBase = tariffaBase;

    return totale;
  }


} */

// Esporta le classi come default
export default { Servizio, ServizioTrasporto };
