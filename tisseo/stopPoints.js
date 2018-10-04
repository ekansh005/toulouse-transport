const tisseo = require('./tisseo');

const get = (options) => {
  return new Promise(function(resolve, reject) {
    tisseo.callStopPoints(options).then((results) => {
      resolve(results);
    }).catch((e) => {
      reject(e);
    });
  });
};

const byLineId = (lineId) => {
  return get({lineId});
};

const byStopAreaId = (stopAreaId) => {
  return get({stopAreaId});
};

module.exports = {
  get,
  byLineId,
  byStopAreaId,
};
