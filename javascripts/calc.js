const numerator = document.getElementById('numerator'),
      denominator = document.getElementById('denominator'),
      form = document.getElementById('mainForm'),
      result = document.getElementById('result');
  
let calculatePercent = (numerator, denominator, targetElement) => {
    this.numerator = parseFloat(numerator.value);
    this.denominator = parseFloat(denominator.value);
    let percentResult = (this.numerator/this.denominator) * 100;
    targetElement.innerHTML = percentResult;
};

form.addEventListener('submit', calculatePercent(numerator, denominator, result));