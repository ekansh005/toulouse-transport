const _ = require('lodash');

const tisseo = require('./tisseo');

const bySearch = (searchString) => {
  return new Promise(function(resolve, reject) {
    tisseo.callPlaces(searchString).then((places) => {
      let grouped = _.groupBy(places, 'className') || {};
      grouped.top5 = _.take(places, 5);
      // grouped.raw = places;
      resolve(grouped);
    }).catch((e) => {
      reject(e);
    });
  });
};

module.exports = {bySearch};
