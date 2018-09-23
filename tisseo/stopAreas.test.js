const expect = require('expect');

const stopAreas = require('./stopAreas');

describe('StopAreas', () => {
  it('should return all stop areas', (done) => {
    stopAreas.all().then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      expect(results.length).toBeGreaterThan(1000);
      done();
    }).catch((e) => {
      done(e);
    });
  }).timeout(3000);

  it('should return stop areas in proper format', (done) => {
    stopAreas.all().then((results) => {
      expect(results).toContainEqual({
        cityName: expect.any(String),
        id: expect.any(String),
        name: expect.any(String),
      });
      done();
    }).catch((e) => {
      done(e);
    });
  }).timeout(3000);
});
