class InfoView {
  _data;
  _parentElement = document.querySelector(".info");
  _form = document.querySelector("form");

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const spinnerTag = `
    <div class="spinner">
        <svg>
            <use href="./src/img/icons.svg#icon-loader"></use>
        </svg>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", spinnerTag);
  }

  render(data) {
    if (!data) return this.renderErr();
    this._data = data;
    const infoTag = this._generateInfoTag();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", infoTag);
  }

  renderErr(text = undefined) {
    this._clear();
    const errTag = this._generateErrTag(text);
    this._parentElement.insertAdjacentHTML("afterbegin", errTag);
  }

  _generateErrTag(txt = "Please try again") {
    return `
    <div class="error text-center">
        <svg>
            <use href="./src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
        <h2>${txt}</h2>

    </div>`;
  }

  _generateInfoTag() {
    return `
        <div class="info--box">
          <small class="info--box__title">ip address</small>
          <h5 class="info--box__text">${this._data.ip}</h5>
        </div>
        <div class="info--box">
          <small class="info--box__title">location</small>
          <h5 class="info--box__text">${this._data.city}</h5>
        </div>
        <div class="info--box">
          <small class="info--box__title">isp</small>
          <h5 class="info--box__text">${this._data.isp}</h5>
        </div>`;
  }

  _checkEachInputChar(e) {
    //    Check if the pressed key is a number (0-9), a decimal point (.), the backspace key, or the Enter key
    if (/^\d$|\.$|Backspace|Enter/.test(e.key)) {
      //    Allow the keypress
      if (e.key === "Enter") {
        return e.key;
      } else {
        return e.key;
      }
    } else {
      //    Prevent the keypress if it's not
      e.preventDefault();
    }
  }

  _getInputUserIp(e) {
    try {
      //   start to check it is an IP address or not
      const inputTag = e.target.querySelector("input");
      const parts = inputTag.value.split(".");
      //   check whether input contains 4 parts
      if (parts.length !== 4) throw new Error("An ipv4 must contains 4 parts seperated by dot");

      parts.forEach((part) => {
        // check whether each part starts by 0
        if (part.startsWith("0")) throw new Error("Parts can not be started with 0");

        const each = Number(part);
        // check whether each part to be between 0-255
        if (isNaN(each) || each < 0 || each > 255) throw new Error("Each part must be between 0-255");
      });
      return parts.join(".");
    } catch (err) {
      this.renderErr(err.message);
    }
  }

  addHandlerUserInfo(initiaFunc) {
    initiaFunc();
  }

  addHandlerUserInput(initiaFunc) {
    const inputTag = this._form.querySelector("input");

    inputTag.addEventListener("keydown", (e) => {
      const inputChar = this._checkEachInputChar(e);
      //   if returned value is undefined
      if (!inputChar) return;
    });

    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ip = this._getInputUserIp(e);
      initiaFunc(ip);
    });
  }
}
export default new InfoView();
