import { KEY, LOOKUP_API_URL } from "./config.js";
import { getJSON, getMap } from "./helper.js";

export let state = {};

const getAndSetState = async function (url) {
  try {
    const data = await getJSON(url);
    state = {
      ip: data.ip,
      city: data.city,
      isp: data.org,
      loc: data.loc.split(","),
    };
  } catch (err) {
    throw err;
  }
};

export const loadLocalIpInfo = async function () {
  try {
    await getAndSetState(`${LOOKUP_API_URL}${KEY}`);
  } catch (err) {
    throw err;
  }
};

export const loadInputIpInfo = async function (ip) {
  try {
    await getAndSetState(`${LOOKUP_API_URL}${ip}${KEY}`);
  } catch (err) {
    throw err;
  }
};

export const loadMap = async function (coordinates = state.loc) {
  try {
    const map = await getMap(coordinates);
    state.map = map;
  } catch (err) {
    throw err;
  }
};
