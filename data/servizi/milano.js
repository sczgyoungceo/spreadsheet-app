import {ServizioTrasporto, ServizioPax, ServizioAdOre, ServizioGuidaOre } from "../../models/modelli.js";

export const milano = [
    new ServizioTrasporto("Transfer Su Milano Andata (mezzi)", "milano", {
        "1-2": 60,
        "3-5": 70,
        "6-7": 75,
        "8-10": 65,
        "11-14": 75,
      }),
    new ServizioTrasporto("Transfer Su Milano Ritorno (mezzi)", "milano", {
        "1-2": 60,
        "3-5": 70,
        "6-7": 75,
        "8-10": 65,
        "11-14": 75,
      }),
      new ServizioTrasporto("Da LNT Airport a Milano (mezzi)", "milano", {
        "1-2": 75,
        "3-5": 85,
        "6-7": 90,
        "8-10": 80,
        "11-14": 90,
      }),
      new ServizioTrasporto("Da MLP Airport a Milano (mezzi)", "milano", {
        "1-2": 120,
        "3-5": 140,
        "6-7": 145,
        "8-10": 130,
        "11-14": 145,
      }),
      new ServizioTrasporto("Da BGY Airport a Milano (mezzi)", "milano", {
        "1-2": 130,
        "3-5": 150,
        "6-7": 155,
        "8-10": 140,
        "11-14": 155,
      }),
      new ServizioTrasporto("Da Milano a LNT Airport (mezzi)", "milano", {
        "1-2": 75,
        "3-5": 85,
        "6-7": 90,
        "8-10": 80,
        "11-14": 90,
      }),
      new ServizioTrasporto("Da Milano a MLP Airport (mezzi)", "milano", {
        "1-2": 120,
        "3-5": 140,
        "6-7": 145,
        "8-10": 130,
        "11-14": 145,
      }),
      new ServizioTrasporto("Da Milano a BGY Airport (mezzi)", "milano", {
        "1-2": 130,
        "3-5": 150,
        "6-7": 155,
        "8-10": 140,
        "11-14": 155,
      }),
      new ServizioAdOre("Disposizione su Milano (mezzi e ore)", "milano", {
          "1-2": 60,
          "3-5": 70,
          "6-7": 75,
          "8-10": 65,
          "11-14": 70,
      }),
      new ServizioAdOre("Disposizione su Milano Provincia (mezzi e ore)", "milano", {
          "1-2": 75,
          "3-5": 85,
          "6-7": 90,
          "8-10": 80,
          "11-14": 85,
      }),
      new ServizioGuidaOre("Servizio guida (ore)", "milano",{
        "prezzo": 65, 
       }),
      new ServizioPax("CENACOLO (Last Supper Leonardo aggiungere auricolari obbligatori) (pax)", "milano", {
          "adulti": 23,
          "minori": 8,
        }),
      new ServizioPax("Duomo + Museo (pax)", "milano", {
          "adulti": 10,
          "minori": 4,
        }),
      new ServizioPax("Duomo + Museo + Terrazze con scale + Museo + area archeo (usiamo sempre biglietti con ascensore) (pax)", "milano", {
          "adulti": 20,
          "minori": 10,
        }),
      new ServizioPax("Duomo + Museo + Terrazze con ascensore + Museo+ area archeo - i biglietti del Duomo valgono 72 ore e sono scomponibili (pax)", "milano", {
          "adulti": 25,
          "minori": 12.5,
        }),
      new ServizioPax("Castello sforzesco (pax)", "milano", {
          "adulti": 5,
          "minori": 3,
        }),
      new ServizioPax("Teatro alla Scala - Museo della Scala (pax)", "milano", {
          "adulti": 15,
          "minori": 8,
        }),
      new ServizioPax("Pinacoteca Ambrosiana, sopra 10 pax va prenotato (pax)", "milano", {
          "adulti": 17,
          "minori": 12,
        }),
      new ServizioPax("Pinacoteca Brera (pax)", "milano", {
          "adulti": 15,
          "minori": 10,
        }),
      new ServizioPax("Museo Leonardo (pax)", "milano", {
          "adulti": 10,
          "minori": 5,
        }),
      new ServizioPax("Cimitero (pax)", "milano", {
          "adulti": 0,
          "minori": 0,
        }),
      new ServizioPax("Food tour (pax)", "milano", {
          "adulti": 31.25,
          "minori": 20,
        }),
]
