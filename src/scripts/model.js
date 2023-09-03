import { async } from "regenerator-runtime";
import { IPFY_URL } from "./config";
import { getJSON, getMap } from "./helper";

export let state = {
  // ip: "",
  // region: "",
  // timeZone: "",
  // lat: 0,
  // lng: 0,
  // isp: ""
};

export const loadIpInfo = async function (ip = "") {
  try {
    const data = await getJSON(`${IPFY_URL}${ip}`);
    state = {
      ip: data.ip,
      isp: data.isp,
      domain: data.as.domain,
      location: {
        city: data.location.region,
        country: data.location.country,
        region: data.location.city,
        timeZone: data.location.timezone,
        lat: data.location.lat,
        lng: data.location.lng,
      },
      map: "",
    };
  } catch (err) {
    throw err;
  }
};

export const loadMap = async function (coordinates = [state.location.lat, state.location.lng]) {
  try {
    const map = await getMap(coordinates);
    // console.log(map);
    state.map = map;
  } catch (err) {
    throw err;
  }
};
