// app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import servizioRoutes from "./routes/servizioRoutes.js";


// Creazione dell'app Express
const app = express();

// Ottieni il percorso assoluto del file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware per servire file statici
app.use(express.static(path.join(__dirname, "public")));

// Middleware per il parsing del body delle richieste (per i dati inviati in POST)
app.use(express.json());

// Route principale che serve il file index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Uso delle rotte dei servizi
app.use("/servizi", servizioRoutes);

// Middleware per la gestione degli errori
app.use((err, req, res, next) => {
  console.log("Errore catturato:", err.message); // Aggiungi un log qui
  logToFile(`Errore: ${err.message}`); // Logga l'errore nel file
  res.status(500).json({ message: "Qualcosa è andato storto. Riprova più tardi." });
});

export default app;
