export function mostraServizi() {
  fetch("/servizi/lista")
    .then((res) => res.json())
    .then((data) => {
      const serviziList = data.servizi;

      document.querySelectorAll("table[data-tipo] tbody").forEach((tbody) => {
        tbody.innerHTML = "";

        const headerRow = document.createElement("tr");

        const headers = [
          "Service Name",
          "Vehicles",
          "Hours",
          "Adults",
          "Minors",
          "Total",
          "Select",
          "Actions",
        ];
        headers.forEach((headerText) => {
          const th = document.createElement("th");
          th.textContent = headerText;
          headerRow.appendChild(th);
        });

        tbody.appendChild(headerRow);
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

        row.id = servizio.id;
        if (row.id % 2 === 0) {
          row.classList.add("even");
        } else {
          row.classList.add("odd");
        }

        row.classList.add("row");

        const nomeServizioCell = document.createElement("td");
        nomeServizioCell.textContent = DOMPurify.sanitize(servizio.nome);
        nomeServizioCell.id = servizio.id;

        nomeServizioCell.addEventListener("mouseover", () => {
          const tariffe = Object.entries(
            servizio.tariffe || { "": servizio.prezzo }
          )
            .sort(([rangeA], [rangeB]) => {
              const numA =
                parseInt(rangeA.split("-")[0]) || parseInt(rangeA) || 0;
              const numB =
                parseInt(rangeB.split("-")[0]) || parseInt(rangeB) || 0;
              return numA - numB;
            })
            .map(([range, prezzo]) => {
              if (range === "prezzo") {
                return `Prezzo fisso: €${prezzo}`;
              }
              return `${range}: €${prezzo}`;
            })
            .join("\n");

          nomeServizioCell.setAttribute("title", tariffe); // Imposta il valore ordinato come title
        });

        if (nomeServizioCell.id % 2 === 0) {
          nomeServizioCell.classList.add("even");
        } else {
          nomeServizioCell.classList.add("odd");
        }

        row.appendChild(nomeServizioCell);

        const mezziInputCell = document.createElement("td");
        const mezziInput = document.createElement("input");
        mezziInput.type = "number";
        mezziInput.id = `mezzi-${servizio.id}`;
        mezziInput.value = 0;
        mezziInput.min = 0;
        mezziInput.max = 5;
        mezziInput.addEventListener("change", () => calcolaTotale(servizio.id));
        mezziInputCell.appendChild(mezziInput);
        row.appendChild(mezziInputCell);

        const oreInputCell = document.createElement("td");
        const oreInput = document.createElement("input");
        oreInput.type = "number";
        oreInput.id = `ore-${servizio.id}`;
        oreInput.value = 0;
        oreInput.min = 0;
        oreInput.max = 24;
        oreInput.addEventListener("change", () => calcolaTotale(servizio.id));
        oreInputCell.appendChild(oreInput);
        row.appendChild(oreInputCell);

        const adultiInputCell = document.createElement("td");
        const adultiInput = document.createElement("input");
        adultiInput.type = "number";
        adultiInput.id = `adulti-${servizio.id}`;
        adultiInput.value = 0;
        adultiInput.min = 0;
        adultiInput.max = 14;
        adultiInput.addEventListener("change", () => {
          const adulti = parseInt(adultiInput.value);
          const minori = parseInt(minoriInput.value);

          if (servizio.tipo === "venezia") {
            adultiInput.max = 15;
            if (adulti + minori > 15) {
              alert(
                "La somma tra Adulti e Minori non può superare 15 per i servizi di Venezia."
              );
              adultiInput.value = 15 - minori;
            }
          } else if (adulti + minori > 14) {
            alert("La somma tra Adulti e Minori non può superare 14.");
            adultiInput.value = 14 - minori;
          }

          calcolaTotale(servizio.id);
        });
        adultiInputCell.appendChild(adultiInput);
        row.appendChild(adultiInputCell);

        const minoriInputCell = document.createElement("td");
        const minoriInput = document.createElement("input");
        minoriInput.type = "number";
        minoriInput.id = `minori-${servizio.id}`;
        minoriInput.value = 0;
        minoriInput.min = 0;
        minoriInput.max = 14;
        minoriInput.addEventListener("change", () => {
          const adulti = parseInt(adultiInput.value);
          const minori = parseInt(minoriInput.value);

          if (servizio.tipo === "venezia") {
            if (adulti + minori > 15) {
              alert(
                "La somma tra Adulti e Minori non può superare 15 per i servizi di Venezia."
              );
              minoriInput.value = 15 - adulti;
            }
          } else if (adulti + minori > 14) {
            alert("La somma tra Adulti e Minori non può superare 14.");
            minoriInput.value = 14 - adulti;
          }

          calcolaTotale(servizio.id);
        });
        minoriInputCell.appendChild(minoriInput);
        row.appendChild(minoriInputCell);

        const totaleCell = document.createElement("td");
        const totaleSpan = document.createElement("span");
        totaleSpan.id = `totale-${servizio.id}`;
        totaleSpan.textContent = `€0.00`;
        totaleCell.appendChild(totaleSpan);
        row.appendChild(totaleCell);

        const selectCell = document.createElement("td");
        selectCell.classList.add("select-cell");
        const selectCheckbox = document.createElement("input");
        selectCheckbox.type = "checkbox";
        selectCheckbox.classList.add("checkbox");
        selectCheckbox.id = `select-${servizio.id}`;
        selectCell.appendChild(selectCheckbox);
        selectCheckbox.addEventListener("change", (event) => {
          if (!event.target.checked) {
            nomeServizioCell.classList.remove("selected");
            row.classList.remove("selected");
          } else {
            nomeServizioCell.classList.add("selected");
            row.classList.add("selected");
          }
        });

        row.appendChild(selectCell);

        const copyCell = document.createElement("td");
        copyCell.classList.add("clipboard");
        copyCell.id = `copy-${servizio.id}`;
        const iconCopy = document.createElement("i");
        iconCopy.classList.add("fa-solid", "fa-copy");
        copyCell.appendChild(iconCopy);
        copyCell.addEventListener("click", () => copyToClipboard(servizio.id));
        row.appendChild(copyCell);

        tbody.appendChild(row);
      });

      aggiornaTotaleGenerale();
    })
    .catch((error) => console.error("Error:", error));
}

export function mostraSezioniTransfer() {
  const select = document.getElementById("transfer-select");
  const content = document.getElementById("transfer-content");

  if (!select) {
    console.error("Elemento con id 'transfer-select' non trovato.");
    return;
  }

  fetch("/servizi/lista")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Errore nel recupero dei dati dei transfer.");
      }
      return res.json();
    })
    .then((data) => {
      const transferList = data.servizi.filter(
        (servizio) => servizio.tipo === "transfer"
      );

      select.addEventListener("change", () => {
        const selectedOption = select.value;

        const serviziFiltrati = transferList.filter((servizio) =>
          servizio.nome.toLowerCase().includes(selectedOption.toLowerCase())
        );

        content.innerHTML = "";

        const table = document.createElement("table");
        table.classList.add("transfer-table");
        table.setAttribute("data-tipo", "transfer");

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        const headers = [
          "Service Name",
          "Vehicles",
          "Hours",
          "Adults",
          "Minors",
          "Total",
          "Select",
          "Actions",
        ];
        headers.forEach((headerText) => {
          const th = document.createElement("th");
          th.textContent = headerText;
          headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");

        serviziFiltrati.forEach((servizio) => {
          const row = document.createElement("tr");
          row.setAttribute("data-id", servizio.id);
          row.setAttribute("data-tipo", servizio.tipo);
          row.setAttribute("data-nome", servizio.nome);

          row.id = servizio.id;
          if (row.id % 2 === 0) {
            row.classList.add("even");
          } else {
            row.classList.add("odd");
          }

          row.classList.add("row");

          const nomeServizioCell = document.createElement("td");
          nomeServizioCell.textContent = DOMPurify.sanitize(servizio.nome);
          nomeServizioCell.id = servizio.id;

          nomeServizioCell.addEventListener("mouseover", () => {
            const tariffe = Object.entries(
              servizio.tariffe || { "": servizio.prezzo }
            )
              .sort(([rangeA], [rangeB]) => {
                const numA =
                  parseInt(rangeA.split("-")[0]) || parseInt(rangeA) || 0;
                const numB =
                  parseInt(rangeB.split("-")[0]) || parseInt(rangeB) || 0;
                return numA - numB;
              })
              .map(([range, prezzo]) => {
                if (range === "prezzo") {
                  return `Prezzo fisso: €${prezzo}`;
                }
                return `${range}: €${prezzo}`;
              })
              .join("\n");

            nomeServizioCell.setAttribute("title", tariffe);
          });

          if (nomeServizioCell.id % 2 === 0) {
            nomeServizioCell.classList.add("even");
          } else {
            nomeServizioCell.classList.add("odd");
          }

          row.appendChild(nomeServizioCell);

          const mezziInputCell = document.createElement("td");
          const mezziInput = document.createElement("input");
          mezziInput.type = "number";
          mezziInput.id = `mezzi-${servizio.id}`;
          mezziInput.value = 0;
          mezziInput.min = 0;
          mezziInput.max = 5;
          mezziInput.addEventListener("change", () =>
            calcolaTotale(servizio.id)
          );
          mezziInputCell.appendChild(mezziInput);
          row.appendChild(mezziInputCell);

          const oreInputCell = document.createElement("td");
          const oreInput = document.createElement("input");
          oreInput.type = "number";
          oreInput.id = `ore-${servizio.id}`;
          oreInput.value = 0;
          oreInput.min = 0;
          oreInput.max = 24;
          oreInput.addEventListener("change", () => calcolaTotale(servizio.id));
          oreInputCell.appendChild(oreInput);
          row.appendChild(oreInputCell);

          const adultiInputCell = document.createElement("td");
          const adultiInput = document.createElement("input");
          adultiInput.type = "number";
          adultiInput.id = `adulti-${servizio.id}`;
          adultiInput.value = 0;
          adultiInput.min = 0;
          adultiInput.max = 24;
          adultiInput.addEventListener("change", () => {
            const adulti = parseInt(adultiInput.value);
            const minori = parseInt(
              document.getElementById(`minori-${servizio.id}`).value
            );

            if (adulti + minori > 24) {
              alert("La somma tra Adulti e Minori non può superare 24.");
              adultiInput.value = 24 - minori;
            }

            calcolaTotale(servizio.id);
          });
          adultiInputCell.appendChild(adultiInput);
          row.appendChild(adultiInputCell);

          const minoriInputCell = document.createElement("td");
          const minoriInput = document.createElement("input");
          minoriInput.type = "number";
          minoriInput.id = `minori-${servizio.id}`;
          minoriInput.value = 0;
          minoriInput.min = 0;
          minoriInput.max = 23;
          minoriInput.addEventListener("change", () => {
            const adulti = parseInt(
              document.getElementById(`adulti-${servizio.id}`).value
            );
            const minori = parseInt(minoriInput.value);

            if (adulti + minori > 24) {
              alert("La somma tra Adulti e Minori non può superare 24.");
              minoriInput.value = 24 - adulti;
            }
            calcolaTotale(servizio.id);
          });
          minoriInputCell.appendChild(minoriInput);
          row.appendChild(minoriInputCell);

          const totaleCell = document.createElement("td");
          const totaleSpan = document.createElement("span");
          totaleSpan.id = `totale-${servizio.id}`;
          totaleSpan.textContent = `€0.00`;
          totaleCell.appendChild(totaleSpan);
          row.appendChild(totaleCell);

          const selectCell = document.createElement("td");
          selectCell.classList.add("select-cell");
          const selectCheckbox = document.createElement("input");
          selectCheckbox.type = "checkbox";
          selectCheckbox.classList.add("checkbox");
          selectCheckbox.id = `select-${servizio.id}`;
          selectCell.appendChild(selectCheckbox);
          selectCheckbox.addEventListener("change", (event) => {
            if (!event.target.checked) {
              nomeServizioCell.classList.remove("selected");
              row.classList.remove("selected");
            } else {
              nomeServizioCell.classList.add("selected");
              row.classList.add("selected");
            }
          });

          row.appendChild(selectCell);

          const copyCell = document.createElement("td");
          copyCell.classList.add("clipboard");
          copyCell.id = `copy-${servizio.id}`;
          const iconCopy = document.createElement("i");
          iconCopy.classList.add("fa-solid", "fa-copy");
          copyCell.appendChild(iconCopy);
          copyCell.addEventListener("click", () =>
            copyToClipboard(servizio.id)
          );
          row.appendChild(copyCell);

          tbody.appendChild(row);
        });

        table.appendChild(tbody);
        content.appendChild(table);
      });
    })
    .catch((error) => {
      console.error("Errore durante il fetch dei dati dei transfer:", error);
      content.textContent = "Errore nel caricamento dei dati.";
    });
}

export function aggiornaTuttiServizi(tipo) {
  const adulti = document.querySelector(
    `.adulti-input[data-tipo="${tipo}"]`
  ).value;
  const minori = document.querySelector(
    `.minori-input[data-tipo="${tipo}"]`
  ).value;

  if (isNaN(adulti) || isNaN(minori)) {
    alert("Inserisci valori numerici validi per Adulti e Minori.");
    return;
  }

  document
    .querySelectorAll(
      `table[data-tipo="${tipo}"] input[type="checkbox"]:checked`
    )
    .forEach((checkbox) => {
      const id = checkbox.id.replace("select-", "");
      document.getElementById(`adulti-${id}`).value = adulti;
      document.getElementById(`minori-${id}`).value = minori;

      calcolaTotale(id);
    });
}

export function calcolaTotale(id) {
  const ore = Number(document.getElementById(`ore-${id}`).value);
  const adultiInput = document.getElementById(`adulti-${id}`);
  const minoriInput = document.getElementById(`minori-${id}`);
  const adulti = Number(adultiInput.value);
  const minori = Number(minoriInput.value);

  if (isNaN(ore) || isNaN(adulti) || isNaN(minori)) {
    alert("Errore: Assicurati che tutti i valori siano numerici.");
    return;
  }

  const persone = adulti + minori;

  const row = document.querySelector(`tr[data-id="${id}"]`);
  const nomeServizio = row?.dataset?.nome || "";
  const tipo = row?.dataset?.tipo || "";

  let mezzi = calcolaMezzi(tipo, nomeServizio, persone);

  if (nomeServizio.includes("Golf") && persone > 13) {
    alert(
      "La somma tra Adulti e Minori non può superare 13 per il servizio Golf."
    );
  }

  gestisciVibratoOre(id, nomeServizio, persone);

  aggiornaInputMezzi(id, mezzi);

  const payload = { mezzi, ore, adulti, minori };

  inviaAggiornamentoAlServer(id, payload);
}

function calcolaMezzi(tipo, nomeServizio, persone) {
  if (tipo === "venezia" && nomeServizio.includes("(mezzi)")) {
    return persone >= 10 ? 2 : 1;
  }

  if (["(mezzi)", "(mezzi e ore)"].some((str) => nomeServizio.includes(str))) {
    return persone >= 8 ? 2 : 1;
  }

  if (nomeServizio.toLowerCase().includes("gondola")) {
    return persone >= 11 ? 3 : persone >= 6 ? 2 : 1;
  }

  if (
    [
      "(mezzi florence)",
      "(mezzi rome)",
      "(mezzi e ore rome)",
      "(mezzi e ore florence)",
      "(mezzi e ore naples)",
    ].some((str) => nomeServizio.includes(str))
  ) {
    if (persone >= 17) return 3;
    if (persone >= 9) return 2;
    return 1;
  }

  return 0; // Default se nessuna condizione è soddisfatta
}

function gestisciVibratoOre(id, nomeServizio, persone) {
  if (
    [
      "(ore)",
      "(mezzi e ore)",
      "(mezzi e ore rome)",
      "(mezzi e ore florence)",
      "(mezzi e ore naples)",
      "(ore rome)",
    ].some((str) => nomeServizio.includes(str))
  ) {
    const oreInput = document.getElementById(`ore-${id}`);
    if (persone >= 1) {
      oreInput.classList.add("vibrato-border");
      setTimeout(() => oreInput.classList.remove("vibrato-border"), 1500);
    }
    if (oreInput.value >= 1) {
      oreInput.classList.remove("vibrato-border");
    }
  }
}

function aggiornaInputMezzi(id, mezzi) {
  const mezziInput = document.getElementById(`mezzi-${id}`);
  if (mezziInput) mezziInput.value = mezzi;
}

function inviaAggiornamentoAlServer(id, payload) {
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

  container
    .querySelectorAll("input[type='checkbox']")
    .forEach((checkbox) => (checkbox.checked = false));

  document.querySelectorAll(".selected").forEach((element) => {
    element.classList.remove("selected");
  });

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

  if (!container) {
    return;
  }

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
  title.textContent = `${nomeCliente} (${tipo})`;
  header.appendChild(title);

  const logo = document.createElement("img");
  logo.src = "/assets/img/logoC4R.png";
  logo.alt = "Logo";
  logo.className = "pdf-logo";
  header.appendChild(logo);

  pdfWrapper.appendChild(header);

  const table = document.createElement("table");
  table.className = "pdf-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = [
    "Description",
    "Vehicles",
    "Hours",
    "Adults",
    "Minors",
    "Total",
  ];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

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

    const tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tr.appendChild(tdNome);

    const tdMezzi = document.createElement("td");
    tdMezzi.textContent = mezzi;
    tr.appendChild(tdMezzi);

    const tdOre = document.createElement("td");
    tdOre.textContent = ore;
    tr.appendChild(tdOre);

    const tdAdulti = document.createElement("td");
    tdAdulti.textContent = adulti;
    tr.appendChild(tdAdulti);

    const tdMinori = document.createElement("td");
    tdMinori.textContent = minori;
    tr.appendChild(tdMinori);

    const tdTotale = document.createElement("td");
    tdTotale.textContent = totale;
    tr.appendChild(tdTotale);

    tbody.appendChild(tr);
  });

  pdfWrapper.appendChild(table);

  const totaleFinaleSpan = container.querySelector(
    `.totale-generale[data-tipo="${tipo}"]`
  );
  const totaleFinale = totaleFinaleSpan?.textContent || "€0.00";

  const totaleEl = document.createElement("div");
  totaleEl.className = "pdf-total";
  totaleEl.textContent = `Estimate Total: ${totaleFinale}`;
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
