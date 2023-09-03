import icons from "../../img/icons.svg";

class InfoView {
  _data;
  _parentElement = document.querySelector(".box");
  _inputElement = document.querySelector(".input-group");
  _errorMsg = "Oops, Something happened, Please try again.";

  render(data) {
    this._parentElement.classList.remove("d-none");
    if (!data) return this.renderError();
    this._data = data;
    // console.log(this._data);
    const infoTag = this._generateHtml();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", infoTag);
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

  _renderInputError() {
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
  renderError() {
    this._parentElement.classList.add("d-none");
    this._clear();
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateHtml() {
    return `
        <div class="box__each">
          <small class="text-uppercase">ip address</small>
          <h5 class="box__each--ip">${this._data.ip}</h5>
        </div>
        <div class="box__each">
          <small class="text-uppercase">location</small>
          <h5 class="box__each--loc">${this._data.location.city}, ${this._data.location.region}</h5>
        </div>
        <div class="box__each">
          <small class="text-uppercase">timezone</small>
          <h5 class="box__each--time">${this._data.location.timeZone}</h5>
        </div>
        <div class="box__each border-0">
          <small class="text-uppercase">isp</small>
          <h5 class="box__each--isp">${this._data.isp}</h5>
        </div>`;
  }
  _inputUserFunction(e) {
    e.preventDefault();
    const inputValue = e.target.querySelector(".form-control").value;
    // check and pass to array if each octet has just 3 digits and is number
    const ipCheckArr = inputValue.split(".").filter((each) => {
      return each.length <= 3 && Number.isFinite(Number(each));
    });
    if (ipCheckArr.length !== 4) {
      this._renderInputError();
      return;
    }
    return ipCheckArr.join(".");
  }
  addHandleruser(handler) {
    handler();
  }
  addHandlerUserInput(handler) {
    this._inputElement.addEventListener("submit", (e) => {
      const ip = this._inputUserFunction(e);
      handler(ip);
    });
  }
}
export default new InfoView();
