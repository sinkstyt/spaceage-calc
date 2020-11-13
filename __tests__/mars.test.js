import Mars from './../src/assets/js/mars.js';

describe('Mars', () => {
  let marsInstance;

  beforeEach(() => {
    marsInstance = new Mars(77);
  });

  test('should hold value of Earth years life expectancy on instance of Mars constructor', () => {
    expect(marsInstance.earthYearsExpected).toEqual(77);
  })

  test('should correctly convert life expectency in Earth years to Mars years, rounded to nearest integer', () => {
    const earthYears = new Mars(77);
    expect(Mars.convertFromEarth(marsInstance.earthYearsExpected)).toEqual(41);
  });
});