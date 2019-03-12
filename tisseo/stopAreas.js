const tisseo = require('./tisseo');

const all = () => {
  return new Promise((resolve, reject) => {
    tisseo.callStopAreas().then((results) => {
      resolve(results);
    }).catch((e) => {
      reject(e);
    });
  });
};

module.exports = {
  all,
};
