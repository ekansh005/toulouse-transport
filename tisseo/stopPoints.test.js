const expect = require('expect');

const stopPoints = require('./stopPoints');
const testData = require('./testData.json');

describe('StopPoints byLineId', () => {
  it('should list all stop points of selected line', (done) => {
    stopPoints.byLineId(testData.lines.T2).then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      done();
    }).catch((e) => {
      done(e);
    });
  }).timeout(10000);

  it('should list always 30 stop points for T2', (done) => {
    stopPoints.byLineId(testData.lines.T2).then((results) => {
      expect(results.length).toBe(30);
      done();
    }).catch((e) => {
      done(e);
    });
  }).timeout(10000);
});

describe('StopPoints byStopAreaId', () => {
  it('should list always 6 stop points for casselardit stop area', (done) => {
    stopPoints.byStopAreaId(testData.stopAreas.casselardit).then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      expect(results.length).toBe(6);
      done();
    }).catch((e) => {
      done(e);
    });
  });
});

describe('StopPoints get', () => {
  it('should list stop points when passed with correct parameters', (done) => {
    stopPoints.get({
      stopAreaId: testData.stopAreas.casselardit,
    }).then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      expect(results.length).toBeGreaterThan(0);
      done();
    }).catch((e) => {
      done(e);
    });
  });

  it('should return stop points with Line details when required', (done) => {
    stopPoints.get({
      stopAreaId: testData.stopAreas.casselardit,
      displayLines: 1,
    }).then((results) => {
      expect(Array.isArray(results[0].destinations)).toBeTruthy();
      expect(Array.isArray(results[0].destinations[0].line)).toBeTruthy();
      done();
    }).catch((e) => {
      done(e);
    });
  });
});
