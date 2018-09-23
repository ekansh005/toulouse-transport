require('./../../config/config');
const expect = require('expect');
const rewire = require('rewire');

const tisseo = rewire('./../../tisseo/tisseo');
// const apiKey = process.env.TISSEO_API_KEY;
const searchString = 'cass';

describe('Function getUrlParamsForPlaces', () => {
  const getUrlParamsForPlaces = tisseo.__get__('getUrlParamsForPlaces');

  it('should return a string of URL parameters for STRING argument', (done) => {
    const expString = `term=${searchString}&simple=1&`;
    expect(typeof getUrlParamsForPlaces(searchString)).toBe('string');
    expect(getUrlParamsForPlaces(searchString)).toBe(expString);
    done();
  });

  it('should return a string of URL parameters for Object argument', (done) => {
    const expString = `term=${searchString}&number=5&simple=1&`;
    const reqObj = {
      searchString,
      maxResults: 5,
    };
    expect(typeof getUrlParamsForPlaces(reqObj)).toBe('string');
    expect(getUrlParamsForPlaces(reqObj)).toBe(expString);
    done();
  });

  it('should throw error for Invalid argument', (done) => {
    expect(getUrlParamsForPlaces).toThrow();
    done();
  });
});

describe('Function callPlaces', () => {
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
