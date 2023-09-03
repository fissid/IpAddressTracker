import { async } from "regenerator-runtime";
import * as model from "./model";
import infoView from "./view/infoView";
import mapView from "./view/mapView";

// if(module.hot){
//   module.hot.accept()
// }

const controlUserLocalIP = async function () {
  try {
    infoView.renderSpinner();
    // empty input will return user info
    await model.loadIpInfo();
    infoView.render(model.state);

    mapView.renderSpinner();
    await model.loadMap();
    mapView.render(model.state.map);
  } catch (err) {
    infoView.renderError();
    mapView.renderError();
  }
};

const controlUserInputIP = async function (ip) {
  try {
    infoView.renderSpinner();

    await model.loadIpInfo(ip);
    infoView.render(model.state);

    mapView.renderSpinner();
    mapView.clearMap();
    await model.loadMap();
    mapView.render(model.state.map);
  } catch (err) {
    infoView.renderError();
    mapView.renderError();
  }
};

const init = function () {
  // pass initializer function to view to when an specific happened fire the function.
  infoView.addHandleruser(controlUserLocalIP);
  infoView.addHandlerUserInput(controlUserInputIP);
};
init();
