require('./config');
const expect = require('expect');

describe('Enviornment Variable Configs', () => {
  it('should set NODE_ENV to test', (done) => {
    expect(process.env.NODE_ENV).toBe('test');
    done();
  });

  it('should have PORT as 3000', (done) => {
    expect(Number(process.env.PORT)).toBe(3000);
    done();
  });

  it('should have API key', (done) => {
    expect(process.env.TISSEO_API_KEY).toBeTruthy();
    done();
  });

  it('should have Base URL', (done) => {
    expect(process.env.TISSEO_URL).toBeTruthy();
    done();
  });
});
