export default function Venus(earthYears) {
  this.earthYearsExpected = earthYears;
  this.venusYearsExpected = 0;
}

Venus.prototype.convertFromEarth = function() {
  this.venusYearsExpected = Math.round(this.earthYearsExpected * (1/.62));
  return this.venusYearsExpected;
}