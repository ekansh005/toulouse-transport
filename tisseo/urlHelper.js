// object as input and returns string as output with
// key1=value1&key2=value2 kind of pattern
const _getUrlParamString = (mParam) => {
  let sParams = '';
  // loop on object properties and append the key and value in the string
  for (let key in mParam) {
    if (mParam.hasOwnProperty(key)) {
      sParams += `${key}=${mParam[key]}&`;
    }
  }
  return sParams;
};

const _parseInputParameter = (iParam, allowedTypes, defaultKeyForString) => {
  // // FIXME: for array handling
  // allowedTypes must be array
  if (!Array.isArray(allowedTypes)) {
    throw new Error('invalidTypeOfAllowedTypes');
  }
  // type of input must be allowed
  if (allowedTypes.indexOf((typeof iParam)) === -1) {
    throw new Error('invalidTypeOfiParam');
  };
  let oParam = {};
  // if input is string, add it to the output object with property cityName
  // as the value in defaultKeyForString parameter
  if (typeof iParam === 'string') {
    oParam[defaultKeyForString] = iParam || null;
  } else if (typeof iParam === 'object' &&
  iParam.toString() === '[object Object]') {
    // this ensures the input type is real object
    for (let key in iParam) {
      if (iParam.hasOwnProperty(key) && iParam[key]) {
        oParam[key] = iParam[key];
      }
    }
  } else if (typeof iParam === 'undefined') {
    return oParam;
  } else {
    throw new Error('InvalidType');
  }
  return oParam;
};

const getUrlParamsForPlaces = (options) => {
  let param = _parseInputParameter(options, ['string', 'object'], 'term');
  param.simple = 1;
  return _getUrlParamString(param);
};

// FIXME: single function for all these

const getUrlParamsForStopAreas = (options) => {
  let param = _parseInputParameter(options, ['object']);
  return _getUrlParamString(param);
};

const getUrlParamsForStopPoints = (options) => {
  let param = _parseInputParameter(options, ['object']);
  return _getUrlParamString(param);
};

const getUrlParamsForLines = (options) => {
  let param = _parseInputParameter(options, [
    'undefined',
    'string',
    'object',
  ], 'shortName');
  return _getUrlParamString(param);
};

module.exports = {
  _getUrlParamString,
  _parseInputParameter,
  getUrlParamsForPlaces,
  getUrlParamsForStopAreas,
  getUrlParamsForStopPoints,
  getUrlParamsForLines,
};
