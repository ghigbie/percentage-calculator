const dropdown    = document.getElementById('dropdownButton'),
      headerText  = document.getElementById('headerText'),
      numerator   = document.getElementById('numerator'),
      denominator = document.getElementById('denominator'),
      form        = document.getElementById('mainForm'),
      result      = document.getElementById('result');

let option1 = {
    id: 1,
    name: 'What is Y% of X?',
    formula: ""
}

let option2 = {
    id: 2,
    name: 'X is Y% of what?',
    formula: ""
}

let option3 = {
    id: 3,
    name: 'What % of X is Y?',
    formula: ""
}

let option4 = {
    id: 4,
    name: 'X% of what is Y?',
    formula: ""
}

let option5 = {
    id: 5,
    name: 'Y% of X is what?',
    formula: ""
}


form.addEventListener('submit', (event) => {
    let x = parseFloat(numerator.value);
    let y = parseFloat(denominator.value);
    let percentResult = ((x/y) * 100).toFixed(2);
    result.innerText = `Result: ${percentResult}%`;
    event.preventDefault();
});
