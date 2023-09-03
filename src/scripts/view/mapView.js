import icons from "../../img/icons.svg";

class MapView {
  _data;
  _parentElement = document.querySelector(".map");
  _backElement = document.querySelector(".back");
  _errorMsg = "Oops, Something happened, Please try again.";

  render(map) {
    const coordinates = [map._lastCenter.lat - 0.005, map._lastCenter.lng];
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coordinates).addTo(map);
    var circle = L.circle(coordinates, {
      color: "#aaa",
      fillColor: "#777",
      fillOpacity: 0.3,
      radius: 3500,
    }).addTo(map);
  }
  clearMap() {
    const mapHtml = "<div class='map' id='map'></div>";
    this._parentElement.remove();
    this._backElement.insertAdjacentHTML("afterend", mapHtml);
  }

  renderSpinner() {
    const spinnerHtml = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", spinnerHtml);
  }

  renderError() {
    const errorHtml = `
    <div class="error text-center">
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
      <h2>Oops, Something went wrong, Please try again.</h2>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", errorHtml);
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
export default new MapView();
