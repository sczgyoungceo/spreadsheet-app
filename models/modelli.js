//Definisce le classi

export class Servizio {
  constructor(id, nome, tipo) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
  }

  calcolaTotale() {
    throw new Error("Metodo calcolaTotale non implementato");
  }
}

export class ServizioTrasporto extends Servizio {
  constructor(id, nome, tipo, tariffe) {
    super(id, nome, tipo);
    this.tariffe = tariffe;
    this.mezzi = 0;
    this.ore = 0;
    this.adulti = 0;
    this.minori = 0;
  }

  get persone() {
    return this.adulti + this.minori;
  }

  getTariffaNoGolf() {
    if (this.persone >= 1 && this.persone <= 3) return this.tariffe["1-3"];
    if (this.persone >= 4 && this.persone <= 6) return this.tariffe["4-6"];
    if (this.persone >= 7 && this.persone <= 8) return this.tariffe["7-8"];
    if (this.persone >= 9 && this.persone <= 11) return this.tariffe["9-11"];
    if (this.persone >= 12 && this.persone <= 14) return this.tariffe["12-14"];
    return 0;
  }

  getTariffaConGolf() {
    if (this.persone >= 1 && this.persone <= 3) return this.tariffe["1-3"];
    if (this.persone >= 4 && this.persone <= 7) return this.tariffe["4-7"];
    if (this.persone === 8) return this.tariffe["8"];
    if (this.persone >= 9 && this.persone <= 11) return this.tariffe["9-11"];
    if (this.persone >= 12 && this.persone <= 14) return this.tariffe["12-14"];
    return 0;
  }

  getTariffa() {
    if (this.tipo === "roma-no-golf-cart") return this.getTariffaNoGolf();
    if (this.tipo === "roma-con-golf-cart") return this.getTariffaConGolf();
    return 0;
  }

  calcolaTotale() {
    const tariffaMezzi = 1.6;
    let mezzi = 1;
    let tariffaBase = this.getTariffa();

    const dueMezzi = this.tipo === "roma-con-golf-cart" ? 8 : 9;

    if (this.persone >= dueMezzi) mezzi = 2;

    if (this.persone >= 15)
      console.log(`Numero persone superiore al limite: ${this.persone}`);

    const totale = mezzi * (tariffaBase * tariffaMezzi);
    this.mezzi = mezzi;
    return totale;
  }
/* Aggiornamento dei mezzi */
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
  constructor(id, nome, tipo, tariffe) {
    super(id, nome, tipo);
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
    return 0;
  }

  calcolaTotale() {
    const tariffaOre = 1.6;
    let mezzi = 1;
    let ore = this.ore;
    let tariffaBase = this.getTariffa();

    if (this.persone >= 9) mezzi = 2;
    if (this.persone >= 15)
      console.log(`Numero persone superiore al limite: ${this.persone}`);

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

export class ServizioGuidaOre extends Servizio {
  constructor(id, nome, tipo, tariffe) {
    super(id, nome, tipo);
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
    if (this.persone >= 1 && this.persone <= 14) return this.tariffe;
    return 0;
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

export class ServizioPax extends Servizio {
  constructor(id, nome, tipo, tariffe) {
    super(id, nome, tipo);
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
}

export class ServizioGolf extends Servizio {
  constructor(id, nome, tipo, tariffe) {
    super(id, nome, tipo);
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
    if (this.persone >= 4 && this.persone <= 7) return this.tariffe["4-7"];
    if (this.persone === 8) return this.tariffe["8"];
    if (this.persone >= 9 && this.persone <= 11) return this.tariffe["9-11"];
    if (this.persone >= 12 && this.persone <= 14) return this.tariffe["12-14"];
    return 0;
  }

  calcolaTotale() {
    const tariffaGolfCart = 1.6;
    let mezzi = 1;
    let tariffaBase = this.getTariffa();

    if (this.persone >= 8) {
      mezzi = 2;
    }
    if (this.persone >= 15) {
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
}

/* export let nomeCliente = ""; */
