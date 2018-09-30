const expect = require('expect');

const urlHelper = require('./urlHelper');

const searchString = 'cass';

describe('UrlHelper getUrlParamsForPlaces', () => {
  it('should return a string of URL parameters for STRING argument', (done) => {
    const expString = `term=${searchString}&simple=1&`;
    expect(typeof urlHelper.getUrlParamsForPlaces(searchString)).toBe('string');
    expect(urlHelper.getUrlParamsForPlaces(searchString)).toBe(expString);
    done();
  });

  it('should return a string of URL parameters for Object argument', (done) => {
    const expString = `term=${searchString}&number=5&simple=1&`;
    const reqObj = {
      term: searchString,
      number: 5,
    };
    expect(typeof urlHelper.getUrlParamsForPlaces(reqObj)).toBe('string');
    expect(urlHelper.getUrlParamsForPlaces(reqObj)).toBe(expString);
    done();
  });

  it('should throw error for Invalid argument', (done) => {
    expect(urlHelper.getUrlParamsForPlaces).toThrow();
    done();
  });
});
