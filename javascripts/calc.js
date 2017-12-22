const dropdown    = document.getElementById('dropdownButton'),
      headerText  = document.getElementById('headerText'),
      numerator   = document.getElementById('numerator'),
      denominator = document.getElementById('denominator'),
      innerFirst  = document.getElementById('innerFirst'),
      innerSecond = document.getElementById('innerSecond'),
      form        = document.getElementById('mainForm'),
      result      = document.getElementById('result');

let option1 = {
    id: 1,
    name: 'What is Y% of X?',
    textFirst: ' is what % of ',
    textSecond: ' ? ',
    formula: (event) => {
        innerFirst.innerText = option1.textFirst;
        innerSecond.innerText = option1.textSecond;
        let x = parseFloat(numerator.value);
        let y = parseFloat(denominator.value);
        let percentResult = ((x/y) * 100).toFixed(2);
        result.innerText = `Result: ${percentResult}%`;
        event.preventDefault();
    }
};

let option2 = {
    id: 2,
    name: 'X is Y% of what?',
    textFirst: ' is what ',
    textSecond: ' % of what? ',
    formula: (event) => {
        let x = parseFloat(numerator.value);
        let y = parseFloat(denominator.value);
        let percentResult = ((x/y) * 100).toFixed(2);
        result.innerText = `Result: ${percentResult}%`;
        event.preventDefault();
    }
};

let option3 = {
    id: 3,
    name: 'What % of X is Y?',
    text: ' is ',
    formula: ""
};

let option4 = {
    id: 4,
    name: 'X% of what is Y?',
    formula: ""
};

let option5 = {
    id: 5,
    name: 'Y% of X is what?',
    textFirst: ' is what ',
    textSecond: ' ? ',
    formula: (event) => {
        innerFirst.innerText = option1.textFirst;
        innerSecond.innerText = option1.textSecond;
        let x = parseFloat(numerator.value);
        let y = parseFloat(denominator.value);
        let percentResult = ((y/x) * 100).toFixed(2);
        result.innerText = `Result: ${percentResult}%`;
        event.preventDefault();
    }
};

let options = {};
options.push(option1);
options.push(option2);
options.push(option3);
options.push(option4);
options.push(option5);


form.addEventListener('submit', option1.formula);
