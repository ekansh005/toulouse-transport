require('./../config/config');
const expect = require('expect');
const rewire = require('rewire');

// // FIXME: probably used rewire to set api key earlier
const tisseo = rewire('./tisseo');
const testData = require('./testData.json');

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
      term: testData.places.searchString,
      coordinatesXY: '1.1,1.2',
    })).rejects.toThrow('500');
    done();
  });
});

describe('Tisseo callStopAreas', () => {
  it('should return ALL stop areas', (done) => {
    tisseo.callStopAreas().then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      expect(results.length).toBeGreaterThan(1000);
      done();
    }).catch((e) => {
      done(e);
    });
  }).timeout(3000);
});

describe('Tisseo callStopPoints', () => {
  it('should return 403 forbidden when called without parameters', (done) => {
    expect(tisseo.callStopPoints({})).rejects.toThrow('403');
    done();
  });

  it('should return records when passed with correct parameter', (done) => {
    tisseo.callStopPoints({
      stopAreaId: testData.stopAreas.casselardit,
    }).then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      done();
    }).catch((e) => {
      done(e);
    });
  });
});
