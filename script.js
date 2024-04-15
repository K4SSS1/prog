const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === 'C') {
            display.value = '';
        } else if (e.target.innerText === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += e.target.innerText;
        }
    });
});
