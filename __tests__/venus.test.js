import Venus from './../src/assets/js/venus.js';

describe('Venus', () => {
  let venusInstance;

  beforeEach(() => {
    venusInstance = new Venus(81);
  });

  test('should hold value of Earth years life expectancy on instance of Venus constructor', () => {
    expect(venusInstance.earthYearsExpected).toEqual(81);
  })
});