const expect = require('expect');

const stopPoints = require('./stopPoints');
const testData = require('./testData.json');

describe('StopPoints', () => {
  it('should list all stop points of selected line', (done) => {
    stopPoints.byLineId(testData.lines.T2).then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      done();
    }).catch((e) => {
      done(e);
    });
  }).timeout(7000);

  it('should list always Fixed number of stop points for T2', (done) => {
    stopPoints.byLineId(testData.lines.T2).then((results) => {
      expect(results.length).toBe(30);
      done();
    }).catch((e) => {
      done(e);
    });
  }).timeout(7000);
});
