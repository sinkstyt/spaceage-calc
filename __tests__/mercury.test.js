import Mercury from './../src/assets/js/mercury.js';

describe('Mercury', () => {
  let mercuryInstance;

  beforeEach(() => {
    mercuryInstance = new Mercury(92);
  });

  test('should hold value of Earth years life expectancy on instance of Mars constructor', () => {
    expect(mercuryInstance.earthYearsExpected).toEqual(92);
  });

  test('should convert from Earth years life expectancy to Mercury years, rounded to the nearest integer', () => {
    const mercuryYears = mercuryInstance.convertFromEarth();
    expect(mercuryYears).toEqual(383);
  });
});