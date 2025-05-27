import { ServizioPax, ServizioGuidaOre } from "../../models/modelli.js";

export const como = [
    new ServizioPax("Villa Carlotta Como (pax)", "como", {
        "adulti": 15,
        "minori": 10,
      }),
    new ServizioPax("Biglietto free navigation giornaliero (pax)", "como", {
        "adulti": 33,
        "minori": 25,
      }),
    new ServizioGuidaOre("Servizio guida (ore)", "como",{
        "prezzo": 65, 
       }),
]