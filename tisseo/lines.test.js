const expect = require('expect');

const lines = require('./lines');
const testData = require('./testData.json');

describe('Lines get', () => {
  it('should list lines when passed with correct parameters', (done) => {
    lines.get({
      lineId: testData.lines[45],
      displayTerminus: 1,
    }).then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      expect(results.length).toBe(1);
      done();
    }).catch((e) => {
      done(e);
    });
  });
});

describe('Lines byShortName', () => {
  it('should return only one Line filterd on short name', (done) => {
    lines.byShortName('T2').then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      expect(results.length).toBe(1);
      done();
    }).catch((e) => {
      done(e);
    });
  });
});

describe('Lines byId', () => {
  it('should return only one line filterd on id', (done) => {
    lines.byId(testData.lines.T2).then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      expect(results.length).toBe(1);
      done();
    }).catch((e) => {
      done(e);
    });
  });
});
