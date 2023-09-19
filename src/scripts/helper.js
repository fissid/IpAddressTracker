export const getJSON = async function (url) {
  try {
    const respons = await fetch(url);
    const data = await respons.json();
    if (!respons.ok) throw new Error(`Error to fetch data: ${respons.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getMap = async function (coordinates) {
  try {
    const map = L.map("map").setView(coordinates, 11);
    return map;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
