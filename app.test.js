const App = require('./app.js')

describe('app', () => {
  it('should contain foo as 42', () => {
    const app = new App();

    expect(app.foo).toBe(42);
  });
});
