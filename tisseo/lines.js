const tisseo = require('./tisseo');

const get = (options) => {
  return tisseo.callLines(options);
};

const byShortName = (shortName) => {
  return tisseo.callLines(shortName);
};

const byId = (id) => {
  return tisseo.callLines({lineId: id});
};

module.exports = {
  get,
  byShortName,
  byId,
};
