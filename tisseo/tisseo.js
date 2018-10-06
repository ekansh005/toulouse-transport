const request = require('request');

const urlHelper = require('./urlHelper');

const baseUrl = process.env.TISSEO_URL;
const apiKey = process.env.TISSEO_API_KEY;

const _checkResponse = (error, response) => {
  if (error) {
    throw error;
  }
  if (response.statusCode !== 200) {
    throw new Error(response.statusCode);
  }
};

const callPlaces = (options) => {
  const sParams = urlHelper.getUrlParamsForPlaces(options);
  return new Promise((resolve, reject) => {
    request({
      baseUrl,
      url: `/places.json?${sParams}key=${apiKey}`,
    }, (error, response, body) => {
      try {
        _checkResponse(error, response);
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
  });
};

const callStopAreas = () => {
  return new Promise((resolve, reject) => {
    request({
      baseUrl,
      url: `/stop_areas.json?key=${apiKey}`,
    }, (error, response, body) => {
      try {
        _checkResponse(error, response);
        resolve(JSON.parse(body).stopAreas.stopArea);
      } catch (e) {
        reject(e);
      }
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
      try {
        _checkResponse(error, response);
        resolve(JSON.parse(body).physicalStops.physicalStop);
      } catch (e) {
        reject(e);
      }
    });
  });
};

const callNetworks = () => {
  return new Promise((resolve, reject) => {
    request({
      baseUrl,
      url: `/networks.json?key=${apiKey}`,
    }, (error, response, body) => {
      try {
        _checkResponse(error, response);
        resolve(JSON.parse(body).networks);
      } catch (e) {
        reject(e);
      }
    });
  });
};

const callLines = (options) => {
  return new Promise(function(resolve, reject) {
    const sParams = urlHelper.getUrlParamsForLines(options);
    request({
      baseUrl,
      url: `/lines.json?${sParams}key=${apiKey}`,
    }, (error, response, body) => {
      try {
        _checkResponse(error, response);
        resolve(JSON.parse(body).lines.line);
      } catch (e) {
        reject(e);
      }
    });
  });
};

module.exports = {
  callPlaces,
  callStopAreas,
  callStopPoints,
  callNetworks,
  callLines,
};
