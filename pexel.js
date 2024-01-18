const myUrl = "https:api.pexels.com/v1/search?query=";
const secondUrl = "https:api.pexels.com/v1/search?query=tiger";
const firstUrl = "https:api.pexels.com/v1/search?query=nature";
const myKey = "H8zBbTy9dbVAv0UpIBfkN32Rskugaityi3uU0qjRucFrcUBV5g58Mkv8";

//  seleziono i load buttons
const loadButton = document.getElementById("first-load");
const secondLoadButton = document.getElementById("second-load");

const row = document.getElementById("row");
const card = function (elements) {
  row.innerHTML = ""; // svuoto la row
  elements.forEach((element) => {
    const col = document.createElement("div");
    col.classList.add("col-md-4");
    col.innerHTML = `
  <div class="card mb-4 shadow-sm">
    <img
      src="https://www.pexels.com/photo/trees-during-day-3573351/"
      class="bd-placeholder-img card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title">Lorem Ipsum</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
      <div
        class="d-flex justify-content-between align-items-center"
      >
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            View
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Edit
          </button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>

`;
    row.appendChild(col);
  });
};

// REQUEST
const getImages = function (query) {
  fetch(myUrl + query, {
    headers: {
      Authorization: myKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        // se la risposta é ok, ci torna una Promise, per cui altro then() alla riga 26
        return response.json();
      } else {
        throw new Error("Errore nella richiesta!"); // se no, scivoliamo nel catch() riga 29
      }
    })
    .then((data) => {
      console.log("DATI", data);
      card(data.photos);
    })
    .catch((err) => {
      console.log(err);
    });
};
// getImages();
