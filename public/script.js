
// Variabile globale per memorizzare il servizio attualmente aperto
let servizioCorrenteId = null;

// Funzione per mostrarare la lista dei servizi in modo sicuro
function mostraServizi() {
  fetch('/servizi/lista')
    .then((res) => res.json())
    .then((data) => {
      const serviziList = data.servizi;
      const listContainer = document.getElementById('lista-servizi');
      listContainer.innerHTML = ""; // Pulizia del container

      // Per ogni servizio, creiamo un bottone e aggiungiamo un listener
      serviziList.forEach((servizio) => {
        const btn = document.createElement('button');
        btn.textContent = servizio.nome;
        btn.addEventListener('click', () => selezionaServizio(servizio.id));
        listContainer.appendChild(btn);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

mostraServizi();

// Funzione per selezionare un servizio e visualizzare il form per i dettagli oppure chiuderlo se già aperto
function selezionaServizio(id) {
  const servizioSelezionato = document.getElementById('servizio-selezionato');

  // Se il servizio selezionato è già aperto, lo chiudiamo (toggle off)
  if (servizioCorrenteId === id && servizioSelezionato.style.display === "block") {
    servizioSelezionato.style.display = "none";
    servizioCorrenteId = null;
    return;
  }

  // Altrimenti, recuperiamo i dettagli del servizio dal server e lo apriamo
  fetch(`/servizi/seleziona/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const servizio = data.servizio;
      servizioSelezionato.innerHTML = ""; // Puliamo il container

      // Creiamo in modo sicuro gli elementi per mostrare il form
      const h2 = document.createElement('h2');
      h2.textContent = servizio.nome;

      const p = document.createElement('p');
      p.textContent = "Compila i dettagli del servizio:";

      const form = document.createElement('form');
      form.id = `form-${servizio.id}`;
      form.addEventListener('submit', (event) => aggiornaServizio(event, servizio.id));

      // Funzione per creare un campo input con etichetta
      function creaCampo(labelText, fieldId) {
        const label = document.createElement('label');
        label.htmlFor = fieldId;
        label.textContent = labelText + ":";

        const input = document.createElement('input');
        input.type = 'number';
        input.id = fieldId;
        input.name = fieldId;
        input.value = "0";

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
      }

      // Creazione dei campi richiesti
      creaCampo("Mezzi", "mezzi");
      creaCampo("Ore", "ore");
      creaCampo("Adulti", "adulti");
      creaCampo("Minori", "minori");

      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.textContent = "Aggiorna Servizio";
      form.appendChild(submitButton);

      // Aggiungiamo tutti gli elementi al container principale
      servizioSelezionato.appendChild(h2);
      servizioSelezionato.appendChild(p);
      servizioSelezionato.appendChild(form);

      // Rendiamo visibile il div
      servizioSelezionato.style.display = "block";
      // Aggiorniamo la variabile globale con l'ID del servizio attualmente aperto
      servizioCorrenteId = id;
    })
    .catch((error) => console.error("Error:", error));
}

// Funzione per aggiornare i dettagli del servizio in maniera sicura
function aggiornaServizio(event, id) {
  event.preventDefault();

  const mezzi = Number(document.getElementById("mezzi").value);
  const ore = Number(document.getElementById("ore").value);
  const adulti = Number(document.getElementById("adulti").value);
  const minori = Number(document.getElementById("minori").value);

  fetch(`/servizi/aggiorna/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mezzi, ore, adulti, minori }),
  })
    .then((response) => response.json())
    .then((data) => {
      const servizio = data.servizio;
      const servizioSelezionato = document.getElementById("servizio-selezionato");
      servizioSelezionato.innerHTML = ""; // Pulizia del container

      // Creazione sicura degli elementi per mostrare il risultato
      const h2 = document.createElement('h2');
      h2.textContent = servizio.nome;

      const pDescrizione = document.createElement('p');
      pDescrizione.textContent = data.descrizione;

      const pTotale = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = `Totale: €${data.totale}`;
      pTotale.appendChild(strong);

      servizioSelezionato.appendChild(h2);
      servizioSelezionato.appendChild(pDescrizione);
      servizioSelezionato.appendChild(pTotale);
    })
    .catch((error) => console.error("Error:", error));
}
