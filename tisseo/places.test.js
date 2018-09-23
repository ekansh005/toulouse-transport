const expect = require('expect');

const places = require('./places');

const searchString = 'cass';

describe('Places search', () => {
  it('should return results for test string', (done) => {
    places.search(searchString).then((result) => {
      expect(result.toString()).toBe('[object Object]');
      expect(result).toBeTruthy();
      done();
    }).catch((e) => {
      done(e);
    });
  });

  it('should return results in groups', (done) => {
    places.search(searchString).then((result) => {
      expect(result).toMatchObject({
        stop: expect.any(Array),
        road: expect.any(Array),
        // place: expect.any(Array),
        top5: expect.any(Array),
      });
      done();
    }).catch((e) => {
      done(e);
    });
  });

  it('should match exactly', (done) => {
    places.search('casselardit').then((result) => {
      expect(result).toEqual({
        stop: expect.any(Array),
        public_place: expect.any(Array),
        road: expect.any(Array),
        top5: expect.any(Array),
      });
      done();
    }).catch((e) => {
      done(e);
    });
  });

  it('should have only 1 stop for casselardit', (done) => {
    places.search('casselardit').then((result) => {
      expect(result.stop).toHaveLength(1);
      done();
    }).catch((e) => {
      done(e);
    });
  });

  it('should have only stop & top5', (done) => {
    places.search({
      searchString: 'casselardit',
      stopAreas: true,
    }).then((result) => {
      expect(result).toEqual({
        stop: expect.any(Array),
        top5: expect.any(Array),
      });
      done();
    }).catch((e) => {
      done(e);
    });
  });
});
