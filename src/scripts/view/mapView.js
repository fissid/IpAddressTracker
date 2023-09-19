class MapView {
  _data;
  _parentElement = document.querySelector("main");
  _mapElement = document.querySelector("#map");

  _clear() {
    this._mapElement.innerHTML = "";
  }
  render(map) {
    const coordinates = [map._lastCenter.lat, map._lastCenter.lng];
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    var myIcon = L.icon({
      iconUrl: "./src/img/finalLocIcon.svg",
      iconSize: [100, 150],
      iconAnchor: [50, 90],
    });
    L.marker(coordinates, { icon: myIcon }).addTo(map);
    var circle = L.circle(coordinates, {
      color: "#234d2980",
      fillColor: "#198754",
      fillOpacity: 0.45,
      radius: 7500,
    }).addTo(map);
  }

  clearMap() {
    const mapHtml = "<div class='map' id='map'></div>";
    this._mapElement.remove();
    this._parentElement.insertAdjacentHTML("afterend", mapHtml);
  }

  renderSpinner() {
    const spinnerHtml = `
    <div class="spinner spinner--map">
      <svg>
        <use href="./src/img/icons.svg#icon-loader"></use>
      </svg>
    </div>`;
    this._clear();
    this._mapElement.insertAdjacentHTML("afterbegin", spinnerHtml);
  }

  renderError() {
    const errorHtml = `
    <div class="error error--map text-center">
      <svg>
        <use href="./src/img/icons.svg#icon-alert-triangle"></use>
      </svg>
      <h2>Please try again</h2>
    </div>`;
    this._clear();
    this._mapElement.insertAdjacentHTML("afterbegin", errorHtml);
  }
}

export default new MapView();
