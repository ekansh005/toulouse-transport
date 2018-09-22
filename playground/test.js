require('./../config/config');
const _ = require('lodash');

const tisseo = require('./../tisseo/tisseo');


tisseo.callPlaces('cass').then((places) => {
  let grouped = _.groupBy(places, 'className') || {};
  grouped.top5 = _.take(places, 5);
  grouped.raw = places;
  console.log(JSON.parse(places));
}).catch((e) => {
  console.error(e);
});
