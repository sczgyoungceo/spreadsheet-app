// Importare dipendenze necessarie

const express = require("express"); //per il server web
const app = express();
const multer = require("multer"); //Gestione del caricamento dei file
const xlsx = require("xlsx"); //leggere e manipolare i file excel
const path = require("path"); //per la gestione dei percorsi
const { workerData } = require("worker_threads");

//configurazione multer per la gestione del caricamento dei file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

//endpoint per servire il file html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

//endpoin per caricare file excel

app.post("/uploads", upload.single("excelfile"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Nessun file caricato");
  }

  //leggere il file excel caricato

  const workbook = xlsx.readFile(req.file.path);
  const sheet_name_list = workbook.SheetNames;
  const sheet = workbook.Sheet[sheet_name_list[0]];
  const data = xlsx.utils.sheet_add_json(sheet);

  res.json(data);
});


module.exports = app;


//modulare tutte le richieste