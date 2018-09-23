require('./../config/config');
const expect = require('expect');
const rewire = require('rewire');

const tisseo = rewire('./tisseo');
// const apiKey = process.env.TISSEO_API_KEY;
const searchString = 'cass';

describe('Tisseo callPlaces', () => {
  it('should return array of 6 places', (done) => {
    tisseo.callPlaces('casselardit').then((results) => {
      expect(results).toBeTruthy();
      expect(Array.isArray(results)).toBeTruthy();
      expect(results).toHaveLength(6);
      done();
    }).catch((e) => {
      done(e);
    });
  });

  it('should NOT return any results for invalid place', (done) => {
    tisseo.callPlaces('asdfasdfasdf').then((results) => {
      expect(results).toHaveLength(0);
      done();
    }).catch((e) => {
      done(e);
    });
  });

  it('should return 500 when called with searchString & lat/long', (done) => {
    expect(tisseo.callPlaces({
      searchString,
      lat: 1.1,
      long: 1.2,
    })).rejects.toThrow('500');
    done();
  });
});
