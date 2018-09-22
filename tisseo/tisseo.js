const request = require('request');

const baseUrl = process.env.TISSEO_URL;
const apiKey = process.env.TISSEO_API_KEY;

const getUrlParamsForPlaces = (options) => {
  let param = {
    term: options.searchString || null,
    coordinatesXY: options.latitude && options.longitude ?
    `${options.latitude},${options.longitude}` : null,
    maxDistance: options.maxDistance || null,
    srid: options.srid || null,
    bbox: options.bbox || null,
    number: options.maxResults || null,
    displayBestPlace: options.bestResultsOnly ? 1 : null,
    displayOnlyStopAreas: options.stopAreas ? 1 : null,
    displayOnlyRoads: options.roads ? 1 : null,
    displayOnlyAddresses: options.addresses ? 1 : null,
    displayOnlyPublicPlaces: options.pulicPlaces ? 1 : null,
    displayOnlyCities: options.cities ? 1 : null,
    lang: options.lang || null,
    simple: options.metadata || 1,
    publicPlaceFilter: options.publicPlaceFilter || null,
  };
  let sParams = '';
  for (let key in param) {
    if (param.hasOwnProperty(key) && param[key]) {
      sParams += `${key}=${param[key]}&`;
    }
  }
  return sParams;
};

const callPlacesService = (options) => {
  const sParams = getUrlParamsForPlaces(options);
  return new Promise((resolve, reject) => {
    request({
      baseUrl,
      url: `/places.json?${sParams}key=${apiKey}`,
    }, (error, response, body) => {
      if (error) {
        reject(error);
      }
      resolve(body);
    });
  });
};

module.exports = {callPlacesService};
