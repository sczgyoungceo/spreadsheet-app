import { romaNoGolfCart } from "./servizi/romaNoGolfCart.js";
import { romaConGolfCart } from "./servizi/romaConGolfCart.js";
/* import { napoli } from "./servizi/napoli.js";
import { firenze } from "./servizi/firenze.js"; */

export const servizi = [
  ...romaNoGolfCart,
  ...romaConGolfCart,
  /* ...napoli,
  ...firenze, */
];
