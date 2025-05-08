import { ServizioTrasportoBoat, ServizioPax, ServizioAdOreBoat } from "../../models/modelli.js";

export const venezia = [
    new ServizioTrasportoBoat("Transfer in città Piazzale Roma/Ferrovia (mezzi)", "venezia", {
        "1-3": 70,
        "4-7": 80,
        "8-9": 90,
        "10-15": 90, //*2
      }),
    new ServizioTrasportoBoat("Da e per Aeroporto (mezzi)", "venezia", {
        "1-3": 140,
        "4-7": 185,
        "8-9": 200,
        "10-15":200,//*2
      }),
    
    new ServizioAdOreBoat("Disposizione su Venezia/Murano/Burano (mezzi e ore)", "venezia", {
        "1-3": 140,
        "4-7": 180,
        "8-15": 180,
      }),
      
    new ServizioPax("Basilica San Marco (0 under 6 anni) (pax)", "venezia", {
        "adulti": 6,
        "minori": 9,
      }),
    new ServizioPax("Basilica San Marco + Pala d'Oro (0 under 6 anni) (pax)", "venezia", {
        "adulti": 12,
        "minori": 12,
      }),
    new ServizioPax("Loggia Cavalli e Terrazze San Marco (pax)", "venezia", {
        "adulti": 10,
        "minori": 6,
      }),
    new ServizioPax("Palazzo Ducale (pax)", "venezia", {
        "adulti": 30,
        "minori": 15,
      }),
    new ServizioPax("Guggenheim (pax)", "venezia", {
        "adulti": 16,
        "minori": 14,
      }),
    new ServizioPax("Gondola ride (30 minuti fino a 5 pax) (pax)", "venezia", {
        "adulti": 120,
        "minori": 120,
      }),
    //aggiungere un servizio boat, forse, oppure trova modo di dopo 5 pax 2 gondole!!!
]