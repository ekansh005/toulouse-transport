const tisseo = require('./tisseo');

const get = () => {
  return new Promise((resolve, reject) => {
    tisseo.callNetworks().then((results) => {
      resolve(results);
    }).catch((e) => {
      reject(e);
    });
  });
};

module.exports = {
  get,
};
