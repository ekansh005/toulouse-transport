const request = require('request');

const urlHelper = require('./urlHelper');

const baseUrl = process.env.TISSEO_URL;
const apiKey = process.env.TISSEO_API_KEY;

const callPlaces = (options) => {
  const sParams = urlHelper.getUrlParamsForPlaces(options);
  return new Promise((resolve, reject) => {
    request({
      baseUrl,
      url: `/places.json?${sParams}key=${apiKey}`,
    }, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(response.statusCode));
      }
      resolve(JSON.parse(body));
    });
  });
};

const callStopAreas = () => {
  return new Promise((resolve, reject) => {
    request({
      baseUrl,
      url: `/stop_areas.json?key=${apiKey}`,
    }, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(response.statusCode));
      }
      resolve(JSON.parse(body).stopAreas.stopArea);
    });
  });
};

const callStopPoints = (options) => {
  return new Promise((resolve, reject) => {
    const sParams = urlHelper.getUrlParamsForStopPoints(options);
    request({
      baseUrl,
      url: `/stop_points.json?${sParams}key=${apiKey}`,
    }, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(response.statusCode));
      }
      resolve(JSON.parse(body).physicalStops.physicalStop);
    });
  });
};

const callNetworks = () => {
  return new Promise((resolve, reject) => {
    request({
      baseUrl,
      url: `/networks.json?key=${apiKey}`,
    }, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(response.statusCode));
      }
      resolve(JSON.parse(body).networks);
    });
  });
};

module.exports = {
  callPlaces,
  callStopAreas,
  callStopPoints,
  callNetworks,
};
