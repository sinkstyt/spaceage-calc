export default function Mercury(earthYears) {
  this.earthYearsExpected = earthYears;
  this.mercuryYearsExpected = 0;
}

Mercury.prototype.convertFromEarth = function() {
  this.mercuryYearsExpected = Math.round(this.earthYearsExpected * (1/.24));
  return this.mercuryYearsExpected;
}