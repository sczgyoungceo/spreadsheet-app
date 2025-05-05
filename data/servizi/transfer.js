import { ServizioTrasporto } from "../../models/modelli.js";

export const transfer = [
  new ServizioTrasporto("Transfer Su Roma Andata (mezzi rome)", "transfer", {
    "1-3": 48,
    "4-6": 64,
    "7-8": 69,
    "9-11": 59,
    "12-16": 69,
    "17-24": 69,
  }),
  new ServizioTrasporto("Transfer Su Roma Ritorno (mezzi rome)", "transfer", {
    "1-3": 48,
    "4-6": 64,
    "7-8": 69,
    "9-11": 59,
    "12-16": 69,
    "17-24": 69,
  }),
  new ServizioTrasporto("Da Porto a Roma (mezzi rome)", "transfer", {
    "1-3": 48,
    "4-6": 64,
    "7-8": 69,
    "9-11": 59,
    "12-16": 69,
    "17-24": 69,
  }),
];
