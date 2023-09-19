import * as model from "./model.js";
import InfoView from "./view/infoView.js";
import mapView from "./view/mapView.js";
import MapView from "./view/mapView.js";

const controlUserLocalIP = async function () {
  try {
    // load info of origin location
    InfoView.renderSpinner();
    await model.loadLocalIpInfo();
    InfoView.render(model.state);

    // load map of origin location
    MapView.renderSpinner();
    await model.loadMap();
    MapView.render(model.state.map);
  } catch (err) {
    InfoView.renderErr();
    MapView.renderError();
    console.error(err);
  }
};

const controlUserInputIP = async function (ip) {
  try {
    if (!ip) return;
    // load info of input location
    InfoView.renderSpinner();
    await model.loadInputIpInfo(ip);
    InfoView.render(model.state);

    // load map of origin location
    MapView.renderSpinner();
    mapView.clearMap();
    await model.loadMap();
    MapView.render(model.state.map);
  } catch (err) {
    InfoView.renderErr(`Private IP`);
    MapView.renderError();
    console.error(err);
  }
};

const init = function () {
  InfoView.addHandlerUserInfo(controlUserLocalIP);
  InfoView.addHandlerUserInput(controlUserInputIP);
};
init();
