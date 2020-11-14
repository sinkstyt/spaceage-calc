import Mercury from './../src/assets/js/mercury.js';

describe('Mercury', () => {
  let mercuryInstance;

  beforeEach(() => {
    mercuryInstance = new Mercury(92);
  });

  test('should hold value of Earth years life expectancy on instance of Mars constructor', () => {
    expect(mercuryInstance.earthYearsExpected).toEqual(92);
  });


});