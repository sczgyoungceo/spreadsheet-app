// app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import servizioRoutes from "./routes/servizioRoutes.js";

// Creazione dell'app Express
const app = express();

/* app.use((req, res, next) => {
  // Impostiamo l'intestazione CSP in modo corretto
  res.setHeader("Content-Security-Policy", 
    "default-src 'self'; " + 
    "script-src 'self' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net; " + 
    "style-src 'self' https://cdnjs.cloudflare.com; " + 
    "style-src 'self' https://cdnjs.cloudflare.com 'unsafe-inline'; " +
    "font-src 'self' https://cdnjs.cloudflare.com; " + 
    "object-src 'none'; " + 
    "base-uri 'self'; " + 
    "form-action 'self'; " + 
    "frame-ancestors 'none'; " + 
    "upgrade-insecure-requests;"
  );
  next();
}); */


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

export default app;
