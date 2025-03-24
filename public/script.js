let totaleClipboard = 0;
let totaleGenerale = 0;

// Funzione per mostrare la lista dei servizi
function mostraServizi() {
  fetch("/servizi/lista")
    .then((res) => res.json())
    .then((data) => {
      const serviziList = data.servizi;
      const listContainer = document.getElementById("lista-servizi");
      listContainer.innerHTML = "";

      listContainer.innerHTML = `
        <tr>
          <th>Nome Servizio</th>
          <th>Mezzi</th>
          <th>Ore</th>
          <th>Adulti</th>
          <th>Minori</th>
          <th>Totale</th>
          <th>Azioni</th>
        </tr>
      `;

      totaleGenerale = 0;

      serviziList.forEach((servizio) => {
        const persone = servizio.adulti + servizio.minori;
        let tariffa = 0;

        if (persone >= 1 && persone <= 3) {
          tariffa = servizio.tariffe["1-3"];
        } else if (persone >= 4 && persone <= 6) {
          tariffa = servizio.tariffe["4-6"];
        } else if (persone >= 7 && persone <= 8) {
          tariffa = servizio.tariffe["7-8"];
        } else if (persone >= 9 && persone <= 11) {
          tariffa = servizio.tariffe["9-11"];
        } else if (persone >= 12 && persone <= 14) {
          tariffa = servizio.tariffe["12-14"];
        }

        // Calcola il totale del servizio
        const totale = 0;

        // Aggiorna il totale generale
        totaleGenerale += totale;

        const row = document.createElement("tr");

        const nomeServizioCell = document.createElement("td");
        nomeServizioCell.textContent = servizio.nome;

        const mezziInputCell = document.createElement("td");
        const mezziInput = document.createElement("input");
        mezziInput.type = "number";
        mezziInput.id = `mezzi-${servizio.id}`;
        mezziInput.value = 0;
        mezziInput.min = 0;
        mezziInput.max = 5;
        mezziInput.addEventListener("change", () => calcolaTotale(servizio.id));
        mezziInputCell.appendChild(mezziInput);

        const oreInputCell = document.createElement("td");
        const oreInput = document.createElement("input");
        oreInput.type = "number";
        oreInput.id = `ore-${servizio.id}`;
        oreInput.value = 0;
        oreInput.min = 0;
        oreInput.max = 24;
        oreInput.addEventListener("change", () => calcolaTotale(servizio.id));
        oreInputCell.appendChild(oreInput);

        const adultiInputCell = document.createElement("td");
        const adultiInput = document.createElement("input");
        adultiInput.type = "number";
        adultiInput.id = `adulti-${servizio.id}`;
        adultiInput.value = 0;
        adultiInput.min = 0;
        adultiInput.max = 14;
        adultiInput.addEventListener("change", () =>
          calcolaTotale(servizio.id)
        );
        adultiInputCell.appendChild(adultiInput);

        const minoriInputCell = document.createElement("td");
        const minoriInput = document.createElement("input");
        minoriInput.type = "number";
        minoriInput.id = `minori-${servizio.id}`;
        minoriInput.value = 0;
        minoriInput.min = 0;
        minoriInput.max = 14;
        minoriInput.addEventListener("change", () =>
          calcolaTotale(servizio.id)
        );
        minoriInputCell.appendChild(minoriInput);

        const totaleCell = document.createElement("td");
        const totaleSpan = document.createElement("span");
        totaleSpan.id = `totale-${servizio.id}`;
        totaleSpan.textContent = `€${totale.toFixed(2)}`;

        totaleCell.appendChild(totaleSpan);

        const copy = document.createElement("td");
        copy.classList.add("clipboard");
        copy.id = `copy-${servizio.id}`;
        const iconCopy = document.createElement("i");
        iconCopy.classList.add("fa-solid", "fa-copy");
        copy.appendChild(iconCopy);

        copy.addEventListener("click", () => copyToClipboard(servizio.id));

        row.appendChild(nomeServizioCell);
        row.appendChild(mezziInputCell);
        row.appendChild(oreInputCell);
        row.appendChild(adultiInputCell);
        row.appendChild(minoriInputCell);
        row.appendChild(totaleCell);
        row.appendChild(copy);

        listContainer.appendChild(row);
      });

      aggiornaTotaleGenerale(); // Dopo aver mostrato tutti i servizi, aggiorna il totale generale
    })
    .catch((error) => console.error("Error:", error));
}

// Funzione per calcolare il totale
function calcolaTotale(id) {
  const mezzi = Number(document.getElementById(`mezzi-${id}`).value);
  const ore = Number(document.getElementById(`ore-${id}`).value);
  const adulti = Number(document.getElementById(`adulti-${id}`).value);
  const minori = Number(document.getElementById(`minori-${id}`).value);

  fetch(`/servizi/aggiorna/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mezzi, ore, adulti, minori }),
  })
    .then((response) => response.json())
    .then((data) => {
      let totale = parseFloat(data.totale);
      document.getElementById(`totale-${id}`).textContent = `€${totale.toFixed(
        2
      )}`;

      // Aggiorna il totale generale
      aggiornaTotaleGenerale();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function aggiornaTotaleGenerale() {
  const totali = document.querySelectorAll("[id^='totale-']");
  let totaleGenerale = 0;

  totali.forEach((totale) => {
    const totaleValue = parseFloat(totale.textContent.replace("€", ""));
    if (!isNaN(totaleValue)) {
      totaleGenerale += totaleValue;
    }
  });

  const totaleGeneraleCell = document.querySelector("#totale-generale");
  if (totaleGeneraleCell) {
    totaleGeneraleCell.textContent = `Totale: €${totaleGenerale.toFixed(2)}`;
  }

  return totaleGenerale;
}

function copiaSommaTotale() {
  // Chiamiamo la funzione aggiornaTotaleGenerale per ottenere il totale generale
  const totaleDaCopiare = aggiornaTotaleGenerale();

  // Copiamo il totale generale negli appunti
  const textToCopy = `€${totaleDaCopiare.toFixed(2)}`;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      mostraPopup(`📋Copiato`);
    })
    .catch((err) => console.error("Errore nella copia:", err));
}

function copyToClipboard(id) {
  const totale = document.getElementById(`totale-${id}`).textContent;

  navigator.clipboard
    .writeText(totale)
    .then(() => {
      mostraPopup(`📋Copiato`);
    })
    .catch((err) => console.error("Errore nella copia:", err));
}

function mostraPopup(message) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.textContent = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 2500);
}

function cancellaTutto() {
  const inputs = document.querySelectorAll("input[type='number']");
  inputs.forEach((input) => {
    input.value = 0;
  });

  const totali = document.querySelectorAll("[id^='totale-']");
  totali.forEach((totale) => {
    totale.textContent = "€0.00";
  });
  mostraPopup(`🗑️Celle Svuotate`);
  aggiornaTotaleGenerale(); // Reset del totale generale
}

window.onload = mostraServizi;

const contenitoreAttivo = document.getElementById("contenuto-attivo");

// Funzione per mostrare la sezione cliccata
function mostraSezioni(clickedSection) {
  const container = clickedSection.querySelector(".container");

  if (!contenitoreAttivo.contains(container)) {
    contenitoreAttivo.innerHTML = '';
    container.classList.remove("none");
    container.classList.add("flex");

    // salva l'id della sezione originale per poterla ripristinare
    container.setAttribute('data-section', clickedSection.id);

    contenitoreAttivo.appendChild(container);
    contenitoreAttivo.classList.add("flex");
    contenitoreAttivo.classList.remove("none");
    contenitoreAttivo.style.zIndex = "10";
  }
}

// Funzione per chiudere la sezione attualmente aperta
function closeSezioni() {
  const container = contenitoreAttivo.querySelector(".container");

  if (container) {
    container.classList.add("none");
    container.classList.remove("flex");
    
    contenitoreAttivo.classList.remove("flex");
    contenitoreAttivo.classList.add("none");

    // recupera l'id salvato della sezione originale
    const originalSectionId = container.getAttribute('data-section');
    const originalSection = document.getElementById(originalSectionId);

    if (originalSection) {
      originalSection.appendChild(container);
    }
  }
}

// Gestione evento click su "X"
document.addEventListener('click', (event) => {
  if(event.target.classList.contains('fa-xmark')) {
    event.stopPropagation(); // impedisce che si propaghi l'evento
    closeSezioni();
  }
});




/* function aggiornaServizio(event, id) {
  event.preventDefault(); // Previeni il comportamento di invio del form

  // Ottieni i valori dinamici dai campi input
  const mezzi = Number(document.getElementById("mezzi").value); // Input per mezzi
  const ore = Number(document.getElementById("ore").value); // Input per ore
  const adulti = Number(document.getElementById("adulti").value); // Input per adulti
  const minori = Number(document.getElementById("minori").value); // Input per minori

  // Invia i dati aggiornati al server
  fetch(`/servizi/aggiorna/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mezzi, ore, adulti, minori }), // Passaggio dei dati dinamici
  })
    .then((response) => response.json())
    .then((data) => {
      const servizio = data.servizio;
      const servizioSelezionato = document.getElementById(
        "servizio-selezionato"
      );
      servizioSelezionato.innerHTML = ""; // Pulizia del container

      const h2 = document.createElement("h2");
      h2.textContent = servizio.nome;
      servizioSelezionato.appendChild(h2);

      // Mostra il totale
      const pTotale = document.createElement("p");
      pTotale.innerHTML = `<strong>Totale:</strong> €${data.totale}`;
      pTotale.style.fontSize = "18px";
      pTotale.style.fontWeight = "bold";
      pTotale.style.color = "green";
      servizioSelezionato.appendChild(pTotale);

      // Wrapper per il PDF e Copia
      const wrapperPdf = document.createElement("div");
      wrapperPdf.classList.add("wrapper-pdf");

      const copy = document.createElement("p");
      copy.textContent = "Copia il totale";
      copy.classList.add("copyToClipboard");

      copy.addEventListener("click", () => {
        const textToCopy = String(data.totale);

        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            alert(`📋 Copiato: €${textToCopy}`);
          })
          .catch((err) => console.error("Errore nella copia:", err));
      });

      // Bottone per esportare in PDF
      const exportButton = document.createElement("button");
      exportButton.textContent = "Esporta PDF";
      exportButton.classList.add("export-pdf-btn");
      exportButton.addEventListener("click", exportPDF);

      // Funzione per esportare il contenuto in PDF
      function exportPDF() {
        html2pdf(servizioSelezionato);
      }

      wrapperPdf.appendChild(copy);
      wrapperPdf.appendChild(exportButton);
      servizioSelezionato.appendChild(wrapperPdf);
    })
    .catch((error) => console.error("Error:", error));
} */
