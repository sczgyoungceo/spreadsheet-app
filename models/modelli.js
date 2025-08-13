//Definisce le classi

export class Servizio {
  static currentId = 1;

  constructor(id = Servizio.generateId(), nome, tipo) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
  }

  static generateId() {
    return this.currentId++;
  }

  calcolaTotale() {
    throw new Error("Metodo calcolaTotale non implementato");
  }
}

export class ServizioTrasporto extends Servizio {
  constructor(nome, tipo, tariffe) {
    super(undefined, nome, tipo);
    this.tariffe = tariffe;
    this.mezzi = 0;
    this.ore = 0;
    this.adulti = 0;
    this.minori = 0;
  }

  get persone() {
    return this.adulti + this.minori;
  }

  // Funzione per ottenere la tariffa per il tipo "roma-no-golf-cart"
  getTariffaRomaNoGolf() {
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 5) return this.tariffe["3-5"];
    if (this.persone >= 6 && this.persone <= 7) return this.tariffe["6-7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 14) return this.tariffe["11-14"];
    return 0;
  }

  // Funzione per ottenere la tariffa per il tipo "roma-con-golf-cart"
  getTariffaRomaConGolf() {
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 5) return this.tariffe["3-5"];
    if (this.persone >= 6 && this.persone <= 7) return this.tariffe["6-7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 14) return this.tariffe["11-14"];
    return 0;
  }

  // Funzione per ottenere la tariffa per il tipo "napoli"
  getTariffaNapoli() {
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 5) return this.tariffe["3-5"];
    if (this.persone >= 6 && this.persone <= 7) return this.tariffe["6-7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 14) return this.tariffe["11-14"];
    return 0;
  }

  // Funzione per ottenere la tariffa per il tipo "firenze"
  getTariffaFirenze() {
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 5) return this.tariffe["3-5"];
    if (this.persone >= 6 && this.persone <= 7) return this.tariffe["6-7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 14) return this.tariffe["11-14"];
    return 0;
  }

  // Funzione per ottenere la tariffa per il tipo "milano"
  getTariffaMilano() {
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 5) return this.tariffe["3-5"];
    if (this.persone >= 6 && this.persone <= 7) return this.tariffe["6-7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 14) return this.tariffe["11-14"];
    return 0;
  }

  getTariffaTransfer() {
    if (this.persone >= 1 && this.persone <= 3) return this.tariffe["1-3"];
    if (this.persone >= 4 && this.persone <= 6) return this.tariffe["4-6"];
    if (this.persone >= 7 && this.persone <= 8) return this.tariffe["7-8"];
    if (this.persone >= 9 && this.persone <= 11) return this.tariffe["9-11"];
    if (this.persone >= 12 && this.persone <= 16) return this.tariffe["12-16"];
    if (this.persone >= 17 && this.persone <= 24) return this.tariffe["17-24"];
    return 0;
  }

  //getTariffaVenezia

  getTariffa() {
    switch (this.tipo) {
      case "roma-no-golf-cart":
        return this.getTariffaRomaNoGolf();
      case "roma-con-golf-cart":
        return this.getTariffaRomaConGolf();
      case "napoli":
        return this.getTariffaNapoli();
      case "firenze":
        return this.getTariffaFirenze();
      case "milano"
        return this.getTariffaMilano();
      case "transfer":
        return this.getTariffaTransfer();
      default:
        return 0;
    }
  }

  calcolaTotale() {
    const tariffaMezzi = 1.6;
    let mezzi = 1;
    const tariffaBase = this.getTariffa();

    if(this.persone === 0) {
      this.mezzi = 0;
      return 0;
    }

    if (this.tipo === "transfer") {
      if (this.persone >= 17) {
        mezzi = 3;
      } else if (this.persone >= 9) {
        mezzi = 2;
      } else {
        mezzi = 1;
      }
    } else if (this.persone >= 8) {
      mezzi = 2;
    } else {
      mezzi = 1;
    }

    const totale = mezzi * (tariffaBase * tariffaMezzi);
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

export class ServizioAdOre extends Servizio {
  constructor(nome, tipo, tariffe) {
    super(undefined, nome, tipo);
    this.tariffe = tariffe;
    this.mezzi = 0;
    this.ore = 0;
    this.adulti = 0;
    this.minori = 0;
  }

  get persone() {
    return this.adulti + this.minori;
  }

  getTariffaRomaNoGolf() {
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 5) return this.tariffe["3-5"];
    if (this.persone >= 6 && this.persone <= 7) return this.tariffe["6-7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 14) return this.tariffe["11-14"];
    return 0;
  }

  getTariffaRomaConGolf() {
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 5) return this.tariffe["3-5"];
    if (this.persone >= 6 && this.persone <= 7) return this.tariffe["6-7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 14) return this.tariffe["11-14"];
    return 0;
  }

  getTariffaNapoli() {
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 5) return this.tariffe["3-5"];
    if (this.persone >= 6 && this.persone <= 7) return this.tariffe["6-7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 14) return this.tariffe["11-14"];
    return 0;
  }

  getTariffaFirenze() {
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 5) return this.tariffe["3-5"];
    if (this.persone >= 6 && this.persone <= 7) return this.tariffe["6-7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 14) return this.tariffe["11-14"];
    return 0;
  }

  getTariffaTransfer() {
    if (this.persone >= 1 && this.persone <= 3) return this.tariffe["1-3"];
    if (this.persone >= 4 && this.persone <= 6) return this.tariffe["4-6"];
    if (this.persone >= 7 && this.persone <= 8) return this.tariffe["7-8"];
    if (this.persone >= 9 && this.persone <= 11) return this.tariffe["9-11"];
    if (this.persone >= 12 && this.persone <= 16) return this.tariffe["12-16"];
    if (this.persone >= 17 && this.persone <= 24) return this.tariffe["17-24"];
    return 0;
  }

  // Funzione per ottenere la tariffa in base al tipo di servizio
  getTariffa() {
    switch (this.tipo) {
      case "roma-con-golf-cart":
        return this.getTariffaRomaConGolf();
      case "roma-no-golf-cart":
        return this.getTariffaRomaNoGolf();
      case "napoli":
        return this.getTariffaNapoli();
      case "firenze":
        return this.getTariffaFirenze();
      case "transfer":
        return this.getTariffaTransfer();
      default:
        return 0;
    }
  }

  calcolaTotale() {
    const tariffaOre = 1.6;
    let mezzi = 1;
    let ore = this.ore;
    let tariffaBase = this.getTariffa();

    if(this.persone === 0) {
      this.mezzi = 0;
      return 0;
    }

    if (this.tipo === "transfer") {
      if (this.persone >= 17) {
        mezzi = 3;
      } else if (this.persone >= 9) {
        mezzi = 2;
      } else {
        mezzi = 1;
      }
    } else if (this.persone >= 8) {
      mezzi = 2;
    } else {
      mezzi = 1;
    }

    const totale = ore * (tariffaBase * tariffaOre) * mezzi;
    this.mezzi = mezzi;
    this.ore = ore;
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

export class ServizioGuidaOre extends Servizio {
  constructor(nome, tipo, tariffe) {
    super(undefined, nome, tipo);
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
    if (this.tariffe && this.tariffe["prezzo"]) {
      return this.tariffe["prezzo"];
    }

    return 0;
  }

  calcolaTotale() {
    const tariffaGuide = 1.75;
    const ore = this.ore || 0;
    const tariffaBase = this.getTariffa();

    if (tariffaBase === 0) {
      return 0;
    }

    const totale = ore * (tariffaBase * tariffaGuide);
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

export class ServizioPax extends Servizio {
  constructor(nome, tipo, tariffe) {
    super(undefined, nome, tipo);
    this.tariffe = tariffe;
    this.mezzi = 0;
    this.ore = 0;
    this.adulti = 0;
    this.minori = 0;
  }

  get persone() {
    return this.adulti + this.minori;
  }

  getTariffa(tipo) {
    return this.tariffe[tipo] || 0;
  }

  calcolaTotale() {
    const tariffaPersone = 1.6;
    const totaleAdulti =
      this.adulti * (this.getTariffa("adulti") * tariffaPersone);
    const totaleMinori =
      this.minori * (this.getTariffa("minori") * tariffaPersone);
    return totaleAdulti + totaleMinori;
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

export class ServizioGolf extends Servizio {
  constructor(nome, tipo, tariffe) {
    super(undefined, nome, tipo);
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
    if (this.persone >= 1 && this.persone <= 2) return this.tariffe["1-2"];
    if (this.persone >= 3 && this.persone <= 6) return this.tariffe["3-6"];
    if (this.persone === 7) return this.tariffe["7"];
    if (this.persone >= 8 && this.persone <= 10) return this.tariffe["8-10"];
    if (this.persone >= 11 && this.persone <= 13) return this.tariffe["11-13"];
    /* return 0; */
  }

  calcolaTotale() {
    const tariffaGolfCart = 1.6;
    let mezzi = 1;
    let tariffaBase = this.getTariffa();

    if(this.persone === 0) {
      this.mezzi = 0;
      return 0;
    }

    if (this.persone >= 7) {
      mezzi = 2;
    }
    if (this.persone >= 14) {
      console.log(`Numero persone superiore al limite: ${this.persone}`);
    }

    const totale = mezzi * (tariffaBase * tariffaGolfCart);
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
    return `Servizio: ${this.nome}, Mezzi: ${this.mezzi}, Ore: ${this.ore}, Adulti: ${this.adulti}, Minori: ${this.minori}, Totale Persone: ${this.persone}, ID: ${this.id}`;
  }
}

export class ServizioTrasportoBoat extends Servizio {
  constructor(nome, tipo, tariffe) {
    super(undefined, nome, tipo);
    this.tariffe = tariffe;
    this.mezzi = 0;
    this.ore = 0;
    this.adulti = 0;
    this.minori = 0;
  }

  get persone() {
    return this.adulti + this.minori;
  }

  getTariffaVenezia() {
    if (this.persone >= 1 && this.persone <= 3) return this.tariffe["1-3"];
    if (this.persone >= 4 && this.persone <= 7) return this.tariffe["4-7"];
    if (this.persone >= 8 && this.persone <= 9) return this.tariffe["8-9"];
    if (this.persone >= 10 && this.persone <= 15) return this.tariffe["10-15"]; //2mezzi
    return 0;
  }

  getTariffaGondole() {
    if (this.persone >= 1 && this.persone <= 5) return this.tariffe["1-5"]; //1 mezzo guida inclusa
    if (this.persone >= 6 && this.persone <= 10) return this.tariffe["6-10"]; //2 mezzi
    if (this.persone >= 11 && this.persone <= 15) return this.tariffe["11-15"]; //3 mezzi
    return 0;
  }

  getTariffa() {
    if (this.nome.toLowerCase().includes("gondola")) {
      return this.getTariffaGondole();
    }
    return this.getTariffaVenezia();
  }

  calcolaTotale() {
    const tariffaMezzi = 1.6;
    let mezzi = 1;
    const tariffaBase = this.getTariffa();

    if(this.persone === 0) {
      this.mezzi = 0;
      return 0;
    }

    if (this.nome.toLowerCase().includes("gondola")) {
      if (this.persone >= 11) {
        mezzi = 3;
      } else if (this.persone >= 6) {
        mezzi = 2;
      } else {
        mezzi = 1;
      }
    } else {
      if (this.persone >= 10) {
        mezzi = 2;
      } else {
        mezzi = 1;
      }
    }

    const totale = mezzi * (tariffaBase * tariffaMezzi);
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

export class ServizioAdOreBoat extends Servizio {
  constructor(nome, tipo, tariffe) {
    super(undefined, nome, tipo);
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
    if (this.persone >= 4 && this.persone <= 7) return this.tariffe["4-7"]; //1mezzo
    if (this.persone >= 8 && this.persone <= 15) return this.tariffe["8-15"]; //2mezzi
    return 0;
  }

  calcolaTotale() {
    const tariffaOre = 1.6;
    let mezzi = 1;
    let ore = this.ore;
    let tariffaBase = this.getTariffa();

    if(this.persone === 0) {
      this.mezzi = 0;
      return 0;
    }

    if (this.persone >= 8) {
      mezzi = 2;
    }

    const totale = ore * (tariffaBase * tariffaOre) * mezzi;
    this.mezzi = mezzi;
    this.ore = ore;
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


