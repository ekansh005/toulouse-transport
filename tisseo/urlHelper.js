const getUrlParamString = (mParam) => {
  let sParams = '';
  for (let key in mParam) {
    if (mParam.hasOwnProperty(key)) {
      sParams += `${key}=${mParam[key]}&`;
    }
  }
  return sParams;
};

const getUrlParamsForPlaces = (options) => {
  let param = {};
  if (typeof options === 'string') {
    param.term = options || null;
  } else if (typeof options === 'object' &&
  options.toString() === '[object Object]') {
    for (let key in options) {
      if (options.hasOwnProperty(key) && options[key]) {
        param[key] = options[key];
      }
    }
  } else {
    throw new Error('InvalidType');
  }
  param.simple = 1;
  return getUrlParamString(param);
};

const getUrlParamsForStopAreas = (options) => {
  let param = {};
  if (typeof options === 'string') {

  } else if (typeof options === 'object' &&
  options.toString() === '[object Object]') {
    for (let key in options) {
      if (options.hasOwnProperty(key) && options[key]) {
        param[key] = options[key];
      }
    }
  } else {
    throw new Error('InvalidType');
  }
  return getUrlParamString(param);
};

const getUrlParamsForStopPoints = (options) => {
  let param = {};
  if (typeof options === 'string') {

  } else if (typeof options === 'object' &&
  options.toString() === '[object Object]') {
    for (let key in options) {
      if (options.hasOwnProperty(key) && options[key]) {
        param[key] = options[key];
      }
    }
  } else {
    throw new Error('InvalidType');
  }
  return getUrlParamString(param);
};

module.exports = {
  getUrlParamsForPlaces,
  getUrlParamsForStopAreas,
  getUrlParamsForStopPoints,
};
