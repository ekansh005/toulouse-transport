const expect = require('expect');

const networks = require('./networks');
const testData = require('./testData.json');

describe('Networks', () => {
  it('should list only one network i.e. Tisseo', (done) => {
    networks.get().then((results) => {
      expect(Array.isArray(results)).toBeTruthy();
      expect(results.length).toBe(1);
      expect(results[0].id).toBe(testData.networks.tisseo);
      done();
    }).catch((e) => {
      done(e);
    });
  });
});
