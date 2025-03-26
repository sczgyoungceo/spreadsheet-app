// script.js (modularizzato)

export function mostraServizi() {
  fetch("/servizi/lista")
    .then((res) => res.json())
    .then((data) => {
      const serviziList = data.servizi;

      document.querySelectorAll("table[data-tipo] tbody").forEach((tbody) => {
        tbody.innerHTML = `
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
      });

      serviziList.forEach((servizio) => {
        const tabella = document.querySelector(
          `table[data-tipo="${servizio.tipo}"]`
        );
        if (!tabella) return;

        const tbody = tabella.querySelector("tbody");

        const row = document.createElement("tr");
        row.setAttribute("data-id", servizio.id);
        row.setAttribute("data-tipo", servizio.tipo);

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
        totaleSpan.textContent = `€0.00`;
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

        tbody.appendChild(row);
      });

      aggiornaTotaleGenerale();
    })
    .catch((error) => console.error("Error:", error));
}

export function calcolaTotale(id) {
  /*   let mezzi = Number(document.getElementById(`mezzi-${id}`).value);
   */ const ore = Number(document.getElementById(`ore-${id}`).value);
  const adulti = Number(document.getElementById(`adulti-${id}`).value);
  const minori = Number(document.getElementById(`minori-${id}`).value);
  let persone = adulti + minori;

  const row = document.querySelector(`tr[data-id="${id}"]`);
  const tipo = row?.dataset?.tipo || "";

  let mezzi = 1;
  if (
    (tipo === "roma-con-golf-cart" && persone >= 8) ||
    (tipo === "roma-no-golf-cart" && persone >= 9) ||
    (tipo === "napoli" && persone >= 9) ||
    (tipo === "firenze" && persone >= 8)
  ) {
    mezzi = 2;
  }

  const mezziInput = document.getElementById(`mezzi-${id}`);
  if (mezziInput) mezziInput.value = mezzi;

  //BUG aumentano in mezzi anche se aumento le ore o i servizi senza mezzi!

  const payload = { mezzi, ore, adulti, minori };

  fetch(`/servizi/aggiorna/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      if (!res.ok) {
        const err = await res.json();
        console.error("❌ Errore risposta server:", err);
        throw new Error(err.message || "Errore generico");
      }
      return res.json();
    })
    .then((data) => {
      const totale = parseFloat(data.totale);

      document.getElementById(`totale-${id}`).textContent = `€${totale.toFixed(
        2
      )}`;
      aggiornaTotaleGenerale();
    })
    .catch((error) => console.error("❗Errore:", error.message));
}

export function aggiornaTotaleGenerale() {
  const totaliPerSezione = {};
  document.querySelectorAll("[id^='totale-']").forEach((span) => {
    const id = span.id.replace("totale-", "");
    const input = document.getElementById(`adulti-${id}`);
    if (!input) return;
    const tabella = input.closest("table[data-tipo]");
    if (!tabella) return;
    const tipo = tabella.dataset.tipo;
    const valore = parseFloat(span.textContent.replace("€", "")) || 0;
    if (!totaliPerSezione[tipo]) totaliPerSezione[tipo] = 0;
    totaliPerSezione[tipo] += valore;
  });
  Object.entries(totaliPerSezione).forEach(([tipo, somma]) => {
    document
      .querySelectorAll(`.totale-generale[data-tipo="${tipo}"]`)
      .forEach((span) => {
        span.textContent = `€${somma.toFixed(2)}`;
      });
  });
  return totaliPerSezione;
}

export function cancellaTutto() {
  const container = document.querySelector("#contenuto-attivo .container.flex");
  if (!container) return;
  container
    .querySelectorAll("input[type='number']")
    .forEach((input) => (input.value = 0));
  container
    .querySelectorAll("[id^='totale-']")
    .forEach((el) => (el.textContent = "€0.00"));
  mostraPopup("🗑️Celle Svuotate");
  aggiornaTotaleGenerale();
}

export function copiaSommaTotale(event) {
  const container = event.target.closest(".container");
  const tipo = container.querySelector("table[data-tipo]").dataset.tipo;
  const textToCopy = container.querySelector(
    `.totale-generale[data-tipo="${tipo}"]`
  ).textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => mostraPopup(`📋 Copiato ${textToCopy}`))
    .catch((err) => console.error("Errore nella copia:", err));
}

export function copyToClipboard(id) {
  const text = document.getElementById(`totale-${id}`).textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => mostraPopup("📋Copiato"))
    .catch((err) => console.error("Errore nella copia:", err));
}

export function mostraPopup(message) {
  const container = document.querySelector("#contenuto-attivo");
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.textContent = message;
  popup.classList.add(message.includes("🗑️") ? "danger" : "success");
  container.appendChild(popup);
  setTimeout(() => popup.remove(), 2500);
}

export function mostraSezioni(clickedSection) {
  const contenitoreAttivo = document.getElementById("contenuto-attivo");
  const container = clickedSection.querySelector(".container");
  if (!contenitoreAttivo.contains(container)) {
    contenitoreAttivo.innerHTML = "";
    container.classList.remove("none");
    container.classList.add("flex");
    container.setAttribute("data-section", clickedSection.id);
    contenitoreAttivo.appendChild(container);
    contenitoreAttivo.classList.add("flex");
    contenitoreAttivo.classList.remove("none");
    contenitoreAttivo.style.zIndex = "10";
  }
}

export function closeSezioni() {
  const contenitoreAttivo = document.getElementById("contenuto-attivo");
  const container = contenitoreAttivo.querySelector(".container");
  if (container) {
    container.classList.add("none");
    container.classList.remove("flex");
    contenitoreAttivo.classList.remove("flex");
    contenitoreAttivo.classList.add("none");
    const originalSectionId = container.getAttribute("data-section");
    const originalSection = document.getElementById(originalSectionId);
    if (originalSection) originalSection.appendChild(container);
  }
}

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
