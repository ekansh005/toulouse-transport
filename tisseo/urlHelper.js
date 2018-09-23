const getUrlParamsForPlaces = (options) => {
  let param = {};
  if (typeof options === 'string') {
    param.term = options || null;
    param.simple = 1;
  } else if (typeof options === 'object' &&
  options.toString() === '[object Object]') {
    param = {
      term: options.searchString || null,
      coordinatesXY: options.lat && options.long ?
      `${options.lat},${options.long}` : null,
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
  } else {
    throw new Error('InvalidType');
  }
  let sParams = '';
  for (let key in param) {
    if (param.hasOwnProperty(key) && param[key]) {
      sParams += `${key}=${param[key]}&`;
    }
  }
  return sParams;
};

module.exports = {getUrlParamsForPlaces};
