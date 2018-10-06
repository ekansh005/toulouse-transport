/* eslint max-len: ["error", { "code": 100 }]*/
const expect = require('expect');

const urlHelper = require('./urlHelper');
const testData = require('./testData.json');

describe('UrlHelper _getUrlParamString', () => {
  it('should return formatted string for object', (done) => {
    const expString = `key1=value1&key2=value2&`;
    const testObj = {
      key1: 'value1',
      key2: 'value2',
    };
    expect(urlHelper._getUrlParamString(testObj)).toBe(expString);
    done();
  });
});

describe('UrlHelper _parseInputParameter', () => {
  it('should throw invalidTypeOfAllowedTypes if allowedTypes is not array', (done) => {
    /**
    * wrapper for actual function call to test exception
    */
    function callFn() {
      urlHelper._parseInputParameter('someString', 'string');
    }
    expect(callFn).toThrow('invalidTypeOfAllowedTypes');
    done();
  });

  it('should throw invalidTypeOfiParam if string is not allowed', (done) => {
    /**
    * wrapper for actual function call to test exception
    */
    function callFn() {
      urlHelper._parseInputParameter('someString', ['object']);
    }
    expect(callFn).toThrow('invalidTypeOfiParam');
    done();
  });

  it('should throw invalidTypeOfiParam if object is not allowed', (done) => {
    /**
    * wrapper for actual function call to test exception
    */
    function callFn() {
      urlHelper._parseInputParameter({test: 'test'}, ['string']);
    }
    expect(callFn).toThrow('invalidTypeOfiParam');
    done();
  });

  it('should throw InvalidType if input parameter is not string or object', (done) => {
    /**
    * wrapper for actual function call to test exception
    */
    function callFn() {
      urlHelper._parseInputParameter(123, ['number']);
    }
    expect(callFn).toThrow('InvalidType');
    done();
  });

  it('should return same object as input object', (done) => {
    const testObj = {
      test: 'test',
    };
    expect(urlHelper._parseInputParameter(testObj, ['object'])).toMatchObject(testObj);
    done();
  });

  it('should return object with input string value as property value of object', (done) => {
    const testObj = {
      test: 'test',
    };
    expect(urlHelper._parseInputParameter('test', ['string'], 'test')).toMatchObject(testObj);
    done();
  });
});

describe('UrlHelper getUrlParamsForPlaces', () => {
  it('should return a string of URL parameters for STRING argument', (done) => {
    const expString = `term=${testData.places.searchString}&simple=1&`;
    expect(typeof urlHelper.getUrlParamsForPlaces(testData.places.searchString)).toBe('string');
    expect(urlHelper.getUrlParamsForPlaces(testData.places.searchString)).toBe(expString);
    done();
  });

  it('should return a string of URL parameters for Object argument', (done) => {
    const expString = `term=${testData.places.searchString}&number=5&simple=1&`;
    const reqObj = {
      term: testData.places.searchString,
      number: 5,
    };
    expect(typeof urlHelper.getUrlParamsForPlaces(reqObj)).toBe('string');
    expect(urlHelper.getUrlParamsForPlaces(reqObj)).toBe(expString);
    done();
  });

  it('should throw error for Invalid argument', (done) => {
    /**
    * this function is to wrap the function call to test exception
    */
    function callFn() {
      urlHelper.getUrlParamsForPlaces();
    }
    expect(callFn).toThrow();
    done();
  });
});

describe('UrlHelper getUrlParamsForStopAreas', () => {
  it('should return a string of URL parameters for Object argument', (done) => {
    // this test currently does not add much value
    const expString = `term=${testData.places.searchString}&number=5&`;
    const reqObj = {
      term: testData.places.searchString,
      number: 5,
    };
    expect(typeof urlHelper.getUrlParamsForStopAreas(reqObj)).toBe('string');
    expect(urlHelper.getUrlParamsForStopAreas(reqObj)).toBe(expString);
    done();
  });

  it('should throw error for String argument', (done) => {
    const testString = testData.places.searchString;
    /**
    * this function is to wrap the function call to test exception
    */
    function callFn() {
      urlHelper.getUrlParamsForStopAreas(testString);
    }
    expect(callFn).toThrowError(Error);
    done();
  });
});

describe('UrlHelper getUrlParamsForStopPoints', () => {
  it('should return a string of URL parameters for Object argument', (done) => {
    // this test currently does not add much value
    const expString = `stopAreaId=${testData.stopAreas.casselardit}&`;
    const reqObj = {
      stopAreaId: testData.stopAreas.casselardit,
    };
    expect(typeof urlHelper.getUrlParamsForStopPoints(reqObj)).toBe('string');
    expect(urlHelper.getUrlParamsForStopPoints(reqObj)).toBe(expString);
    done();
  });

  it('should throw error for String argument', (done) => {
    const testString = testData.places.searchString;
    /**
    * this function is to wrap the function call to test exception
    */
    function callFn() {
      urlHelper.getUrlParamsForStopPoints(testString);
    }
    expect(callFn).toThrowError(Error);
    done();
  });
});

describe('UrlHelper getUrlParamsForLines', () => {
  it('should return a string of URL parameters for STRING argument', (done) => {
    const expString = `shortName=T2&`;
    expect(typeof urlHelper.getUrlParamsForLines('T2')).toBe('string');
    expect(urlHelper.getUrlParamsForLines('T2')).toBe(expString);
    done();
  });

  it('should return a string of URL parameters for Object argument', (done) => {
    const expString = `lineId=${testData.lines.T2}&displayTerminus=1&`;
    const reqObj = {
      lineId: testData.lines.T2,
      displayTerminus: 1,
    };
    expect(typeof urlHelper.getUrlParamsForLines(reqObj)).toBe('string');
    expect(urlHelper.getUrlParamsForLines(reqObj)).toBe(expString);
    done();
  });

  it('should return an empty string if no input is passed', (done) => {
    expect(urlHelper.getUrlParamsForLines()).toBe('');
    done();
  });

  it('should throw error for Invalid argument', (done) => {
    /**
    * this function is to wrap the function call to test exception
    */
    function callFn() {
      urlHelper.getUrlParamsForLines(5);
    }
    expect(callFn).toThrow();
    done();
  });
});
