let buttons = document.querySelectorAll('.btn');
let result = document.querySelector('.result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;
        let currentResult = result.textContent;

        if (buttonText === '=') {
            try {
                result.textContent = eval(currentResult);
            } catch (error) {
                result.textContent = 'Pen Copy se krlo';
            }
        } else if (buttonText === 'A/C') {
            result.textContent = '';
        } else if (buttonText === 'del') {
            result.textContent = currentResult.slice(0, -1);
        } else {
            if (currentResult === 'Pen Copy se krlo') {
                result.textContent = buttonText;
            } else {
                result.textContent += buttonText;
            }
        }
    });
});



