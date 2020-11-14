export default function Jupiter(earthYears) {
  this.earthYearsExpected = earthYears;
  this.jupiterYearsExpected = 0;
}

Jupiter.prototype.convertFromEarth = function() {
  this.jupiterYearsExpected = Math.round(this.earthYearsExpected * (1/11.86));
  return this.jupiterYearsExpected;
}