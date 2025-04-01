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
        row.setAttribute("data-nome", servizio.nome);

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
  const ore = Number(document.getElementById(`ore-${id}`).value);
  const adulti = Number(document.getElementById(`adulti-${id}`).value);
  const minori = Number(document.getElementById(`minori-${id}`).value);

  // Verifica se i dati sono numerici validi
  if (isNaN(ore) || isNaN(adulti) || isNaN(minori)) {
    console.error("❌ Dati non validi:", { ore, adulti, minori });
    alert("Errore: Assicurati che tutti i valori siano numerici.");
    return; // Evita di inviare la richiesta se i dati non sono validi
  }

  let persone = adulti + minori;

  const row = document.querySelector(`tr[data-id="${id}"]`);
  const nomeServizio = row?.dataset?.nome || "";
  const tipo = row?.dataset?.tipo || "";

  let mezzi = 0;

  if (["(mezzi)", "(mezzi e ore)"].some(str => nomeServizio.includes(str))){
    if (
      (tipo === "roma-con-golf-cart" && persone >= 1) ||
      (tipo === "roma-no-golf-cart" && persone >= 1) ||
      (tipo === "napoli" && persone >= 1) ||
      (tipo === "firenze" && persone >= 1)
    ) {
      mezzi = 1;
    }
    if (
      (tipo === "roma-con-golf-cart" && persone >= 8) ||
      (tipo === "roma-no-golf-cart" && persone >= 9) ||
      (tipo === "napoli" && persone >= 9) ||
      (tipo === "firenze" && persone >= 8)
    ) {
      mezzi = 2;
    }
  }

  const mezziInput = document.getElementById(`mezzi-${id}`);
  if (mezziInput) mezziInput.value = mezzi;

  const payload = { mezzi, ore, adulti, minori };

  // Log dei dati inviati
  console.log("Dati inviati al server:", payload);

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
      if (isNaN(totale)) {
        throw new Error("Errore nel calcolo del totale.");
      }
      document.getElementById(`totale-${id}`).textContent = `€${totale.toFixed(2)}`;
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

// exportPDF.js

export function exportPDF() {
  const container = document.querySelector("#contenuto-attivo .container.flex");
  if (!container) return;

  const nomeInput = container.querySelector('input[name="nome"]');
  const nomeClienteRaw = nomeInput?.value || "Cliente";
  const nomeCliente = nomeClienteRaw.replace(/[<>]/g, "").trim();
  const tipo = nomeInput?.dataset.tipo || "N/A";

  const pdfWrapper = document.createElement("div");
  pdfWrapper.classList.add("pdf-container");

  const header = document.createElement("div");
  header.className = "pdf-header";

  const headerWrapper = document.createElement("div");
  headerWrapper.classList.add("header-info");

  const societa = document.createElement("h2");
  societa.textContent = "Crazy4Rome";
  headerWrapper.appendChild(societa);

  const telefono = document.createElement("p");
  telefono.textContent = "+39 389 211 1013";
  headerWrapper.appendChild(telefono);

  const indirizzo1 = document.createElement("p");
  indirizzo1.textContent = "Via Camilla, 27 – 00181 Rome, Italy";
  headerWrapper.appendChild(indirizzo1);

  const indirizzo2 = document.createElement("p");
  indirizzo2.textContent = "Via Giuseppe Libetta, 15/C – 00154 Rome, Italy";
  headerWrapper.appendChild(indirizzo2);

  // Aggiungi l'intestazione in cima al contenuto PDF
  pdfWrapper.appendChild(headerWrapper);

  const title = document.createElement("h1");
  title.textContent = `Preventivo: ${nomeCliente} (${tipo})`;
  header.appendChild(title);

  const logo = document.createElement("img");
  logo.src = "/assets/img/logoC4R.png";
  logo.alt = "Logo";
  logo.className = "pdf-logo";
  header.appendChild(logo);

  pdfWrapper.appendChild(header);

  const table = document.createElement("table");
  table.className = "pdf-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Descrizione</th>
        <th>Mezzi</th>
        <th>Ore</th>
        <th>Adulti</th>
        <th>Minori</th>
        <th>Totale</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  const righeServizi = container.querySelectorAll("tr[data-id]");
  righeServizi.forEach((row) => {
    const nome = row.dataset.nome;
    const mezzi = row.querySelector(`#mezzi-${row.dataset.id}`)?.value || 0;
    const ore = row.querySelector(`#ore-${row.dataset.id}`)?.value || 0;
    const adulti = row.querySelector(`#adulti-${row.dataset.id}`)?.value || 0;
    const minori = row.querySelector(`#minori-${row.dataset.id}`)?.value || 0;
    const totale =
      row.querySelector(`#totale-${row.dataset.id}`)?.textContent || "€0.00";

    const personeTot = Number(adulti) + Number(minori);
    if (personeTot === 0 && Number(totale.replace(/[^\d.-]/g, "")) === 0)
      return;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${nome}</td>
      <td>${mezzi}</td>
      <td>${ore}</td>
      <td>${adulti}</td>
      <td>${minori}</td>
      <td>${totale}</td>
    `;
    tbody.appendChild(tr);
  });

  pdfWrapper.appendChild(table);

  const totaleFinaleSpan = container.querySelector(
    `.totale-generale[data-tipo="${tipo}"]`
  );
  const totaleFinale = totaleFinaleSpan?.textContent || "€0.00";

  const totaleEl = document.createElement("div");
  totaleEl.className = "pdf-total";
  totaleEl.textContent = `Totale preventivo: ${totaleFinale}`;
  pdfWrapper.appendChild(totaleEl);

  /*   const footer = document.createElement("div");
  footer.className = "pdf-footer";
  footer.innerHTML = `
    <p>Il pagamento è dovuto entro 15 giorni.</p>
    <div class="pdf-notes">
      IBAN: IT12 1234 5678 9012 34<br />
      SWIFT/BIC: ABCDITRXXXX
    </div>
  `;
  pdfWrapper.appendChild(footer); */

  const opzioni = {
    margin: 0.4,
    filename: `Preventivo_${nomeCliente}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf()
    .set(opzioni)
    .from(pdfWrapper)
    .outputPdf("blob")
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    });
}
