export default function Mars(earthYears) {
  this.earthYearsExpected = earthYears;
  this.marsYearsExpected = 0;
}

Mars.prototype.convertFromEarth = function() {
  this.marsYearsExpected = Math.round(this.earthYearsExpected * (1/1.88));
  return this.marsYearsExpected;
}