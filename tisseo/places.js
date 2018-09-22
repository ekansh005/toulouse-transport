const tisseo = require('./tisseo');

const bySearch = (searchString) => {
  return new Promise(function(resolve, reject) {
    tisseo.callPlacesService({searchString}).then((places) => {
      resolve(places);
    }).catch((e) => {
      reject(e);
    });
  });
};

module.exports = {bySearch};
