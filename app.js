// app.js
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import servizioRoutes from "./routes/servizioRoutes.js";

function logToFile(message) {
  const data = new Date();
  const dataLog = `[${data.toISOString()}] - ${message}\n`;

  fs.appendFile("app.log", dataLog, (err) => {
    if (err) {
      console.error("Errore nella scrittura del file di log:", err);
    }
  });
}

function printAsciiLogo() {
  console.log(" __   __                                     ");
  console.log(" \\ \\ / /__  _   _ _ __   __ _  ___ ___  ___  ");
  console.log("  \\ V / _ \\| | | | '_ \\ / _` |/ __/ _ \\/ _ \\ ");
  console.log("   | | (_) | |_| | | | | (_| | (_|  __/ (_) |");
  console.log("   |_|\\___/ \\__,_|_| |_|\\__, |\\___\\___|\\___/ ");
  console.log("                        |___/               ");
}

// Esempio di utilizzo:
printAsciiLogo();
logToFile("Applicazione avviata con successo!");

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
