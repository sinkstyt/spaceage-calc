import Earth from './../src/assets/js/earth.js';

describe('Earth', () => {
  let earthling;

  beforeEach(() => {
    earthling = new Earth(35, "male", "not active");
  });

  test("should hold the age in years of person's input", () => {
    expect(earthling.currentYears).toEqual(35);
  })
});