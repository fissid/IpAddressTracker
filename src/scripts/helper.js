import { async } from "regenerator-runtime";

export const getJSON = async function (url) {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    // handle err here
    return data;
  } catch (err) {
    throw err;
  }
};

export const getMap = async function (coordinates) {
  try {
    const map = L.map("map").setView(coordinates, 12);
    return map;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
