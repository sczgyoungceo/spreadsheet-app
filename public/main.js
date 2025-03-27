import {
  mostraServizi,
  calcolaTotale,
  aggiornaTotaleGenerale,
  cancellaTutto,
  copiaSommaTotale,
  copyToClipboard,
  mostraPopup,
  mostraSezioni,
  closeSezioni,
  exportPDF,
} from "./script.js";

window.addEventListener("DOMContentLoaded", () => {
  mostraServizi();

  // Evento click su icona X per chiudere sezione
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-xmark")) {
      event.stopPropagation();
      closeSezioni();
    }

    // Evento copia sul totale sezione
    if (event.target.closest(".footer-totale .fa-copy")) {
      copiaSommaTotale(event);
    }

    // Evento copia su singolo servizio
    if (event.target.closest("td.clipboard")) {
      const id = event.target.closest("td.clipboard").id.split("-")[1];
      copyToClipboard(id);
    }
  });

  // Evento per aprire una sezione
  document.querySelectorAll(".section").forEach((section) => {
    section.addEventListener("click", () => mostraSezioni(section));
  });

  // Evento per pulsante cancella tutto
  document.addEventListener("click", (e) => {
    if (e.target.closest("#cancella-tutto")) {
      cancellaTutto();
    }
  });

  document.addEventListener("click", (e) => {
    // Bottone esporta PDF
    if (e.target.closest("#esporta-pdf")) {
      exportPDF();
    }
  });
});
