import Jupiter from './../src/assets/js/jupiter.js';

describe('Jupiter', () => {
  let jupiterInstance;

  beforeEach(() => {
    jupiterInstance = new Jupiter(64);
  });

  test('should hold value of Earth years life expectancy on instance of Jupiter constructor', () => {
    expect(jupiterInstance.earthYearsExpected).toEqual(64);
  });


});