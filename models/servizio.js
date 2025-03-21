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

    if (this.persone >= 15) {
      console.log(`Numero persone superiore al limite: ${this.persone}`);
    }

    // Debugging
    /* console.log(`📊 Servizio: ${this.nome}`);
    console.log(`🔹 Tariffa Base: ${tariffaBase}`);
    console.log(`🔹 Mezzi assegnati: ${mezzi}`); */

    // Calcoliamo il totale
    const totale = mezzi * (tariffaBase * tariffaMezzi);
    /* console.log(`💰 Totale calcolato: €${totale.toFixed(2)}`); */

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

class ServizioAdOre extends Servizio {
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
    const tariffaOre = 1.6;
    let mezzi = 1;
    let tariffaBase = this.getTariffa();
    let ore = this.ore;

    if (this.persone >= 9) {
      mezzi = 2;
    }

    if (this.persone >= 15) {
      console.log(`Numero persone superiore al limite: ${this.persone}`);
    }

    const totale = ore * (tariffaBase * tariffaOre) * mezzi;

    this.mezzi = mezzi;
    this.ore = ore;
    this.tariffaBase = tariffaBase;

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

class ServizioGuidaOre extends Servizio {
  constructor(id, nome, tariffe) {
    super(id, nome);
    this.tariffe = tariffe;
    this.mezzi = 0;
    this.ore = 0;
    this.adulti = 0;
    this.minori = 0;
  }

  getTariffa() {
    if (this.persone >= 1 && this.persone <= 14) return (this.tariffe = 80);

    return 0; // Se le persone superano 14, può essere gestito diversamente
  }

  get persone() {
    return this.adulti + this.minori;
  }

  calcolaTotale() {
    const tariffaGuide = 1.75;
    const ore = this.ore;
    let tariffaBase = this.getTariffa();

    const totale = ore * (tariffaBase * tariffaGuide);

    this.ore = ore;
    this.tariffaGuide = tariffaGuide;

    return totale;
  }

  aggiornaDati(mezzi, ore, adulti, minori) {
    this.mezzi = mezzi;
    this.ore = ore;
    this.adulti = adulti;
    this.minori = minori;
  }
}

class ServizioPax extends Servizio {
  constructor(id, nome, tariffe) {
    super(id, nome);
    this.tariffe = tariffe;
    this.mezzi = 0;
    this.ore = 0;
    this.adulti = 0;
    this.minori = 0;
  }

  getTariffa(tipo) {
    if (tipo === "adulti") {
      return this.tariffe.adulti;
    } else if (tipo === "minori") {
      return this.tariffe.minori;
    }
    return 0;
  }

  get persone() {
    const totalePersone = this.adulti + this.minori;
    return totalePersone;
  }

  calcolaTotale() {
    const tariffaPersone = 1.6;

    const tariffaAdulti = this.getTariffa("adulti");
    const tariffaMinori = this.getTariffa("minori");

    const totaleAdulti = this.adulti * (tariffaAdulti * tariffaPersone);

    const totaleMinori = this.minori * (tariffaMinori * tariffaPersone);
    const totale = totaleAdulti + totaleMinori;

    return totale;
  }

  aggiornaDati(mezzi, ore, adulti, minori) {
    this.mezzi = mezzi;
    this.ore = ore;
    this.adulti = adulti;
    this.minori = minori;
  }
}

//aggiungere variabile NOME CLIENTE
// Esporta le classi come default
export default {
  Servizio,
  ServizioTrasporto,
  ServizioAdOre,
  ServizioGuidaOre,
  ServizioPax,
};
