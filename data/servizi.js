import { romaNoGolfCart } from "./servizi/romaNoGolfCart.js";
import { romaConGolfCart } from "./servizi/romaConGolfCart.js";
import { napoli } from "./servizi/napoli.js";
import { firenze } from "./servizi/firenze.js";
import { milano } from "./servizi/milano.js";
import { venezia } from "./servizi/venezia.js";
import { como } from "./servizi/como.js";

export const servizi = [
  ...romaNoGolfCart,
  ...romaConGolfCart,
  ...napoli,
  ...firenze,
  ...milano,
  ...venezia,
  ...como,
];
