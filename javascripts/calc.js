const numerator = document.getElementById('numerator'),
      denominator = document.getElementById('denominator'),
      form = document.getElementById('mainForm'),
      result = document.getElementById('result');
  
form.addEventListener('submit', (event) => {
  let x = parseFloat(numerator.value);
  let y = parseFloat(denominator.value);
  let percentResult = ((x/y) * 100).toFixed(2);
  result.innerText = `Result: ${percentResult}%`;
  event.preventDefault();
});