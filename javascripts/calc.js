const dropdown     = document.getElementById('dropdownButton'),
      headerText   = document.getElementById('headerText'),
      xNumerator   = document.getElementById('xNumerator'),
      yDenominator = document.getElementById('yDenominator'),
      innerFirst   = document.getElementById('innerFirst'),
      innerSecond  = document.getElementById('innerSecond'),
      form         = document.getElementById('mainForm'),
      result       = document.getElementById('result');
      
let changeText = () => {
    
}
      
let options = [];

let option1 = {
    id: 1,
    name: 'What is Y% of X?',
    textFirst: ' is what % of ',
    textSecond: ' ? ',
    formula: (event) => {
        innerFirst.innerText = option1.textFirst;
        innerSecond.innerText = option1.textSecond;
        let x = parseFloat(xNumerator.value);
        let y = parseFloat(yDenominator.value);
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
        let x = parseFloat(xNumerator.value);
        let y = parseFloat(yDenominator.value);
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
    textFirst: ' % of ',
    textSecond: ' is what? ',
    formula: (event) => {
        innerFirst.innerText = option1.textFirst;
        innerSecond.innerText = option1.textSecond;
        let x = parseFloat(xNumerator.value);
        let y = parseFloat(yDenominator.value);
        let percentResult = ((y/x) * 100).toFixed(2);
        result.innerText = `Result: ${percentResult}%`;
        event.preventDefault();
    }
};

let option5 = {
    id: 5,
    name: 'Y% of X is what?',
    textFirst: ' % of ',
    textSecond: ' is what? ',
    formula: (event) => {
        innerFirst.innerText = option5.textFirst;
        innerSecond.innerText = option5.textSecond;
        let x = parseFloat(xNumerator.value);
        let y = parseFloat(yDenominator.value);
        let percentResult = ((y/x) * 100).toFixed(2);
        result.innerText = `Result: ${percentResult}%`;
        event.preventDefault();
    }
};

options.push(option1);
options.push(option2);
options.push(option3);
options.push(option4);
options.push(option5);


form.addEventListener('submit', option5.formula);
