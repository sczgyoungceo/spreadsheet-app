import express from "express";
import { listaServizi, selezionaServizio, aggiornaServizio } from "../api/servizioController.js";

const router = express.Router();

// Rotte per i vari servizi
router.get("/lista", listaServizi);  // Ottieni la lista dei servizi
router.get("/seleziona/:id", selezionaServizio);  // Seleziona un servizio tramite ID
router.put("/aggiorna/:id", aggiornaServizio);  // Aggiorna i dettagli di un servizio

export default router;
