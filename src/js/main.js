"use strict";

const textArea = document.querySelector('.editor__text');
const button = document.querySelectorAll('.editor__button--js');
const info = document.querySelector('.editor__status');
const yellow = '#F9C802';

button[0].addEventListener('click', () => {
    const data = localStorage.getItem('editor');
    if (textArea.value) {
        info.textContent = `Data already exists in the text field.`;
        info.style.color = yellow;
    } else if (!data) {
        info.textContent = `There are no data to load.`;
        info.style.color = yellow;
    } else {
        textArea.value = localStorage.getItem('editor');
        info.textContent = 'Loaded data.';
        info.style.color = 'green';
    }
});
button[1].addEventListener('click', () => {
    const data = localStorage.getItem('editor');
    if (!textArea.value) {
        info.textContent = `There is no data to write.`;
        info.style.color = yellow;
    } else if (data) {
        info.textContent = `Data exists, delete data first.`;
        info.style.color = yellow;

    } else {
        localStorage.setItem('editor', textArea.value);
        info.textContent = `Data saved.`;
        info.style.color = 'green';
    }
});
button[2].addEventListener('click', () => {
    const data = localStorage.getItem('editor');
    if (!data) {
        info.textContent = `No data to clean.`;
        info.style.color = yellow;
    } else {
        localStorage.removeItem('editor');
        textArea.value = '';
        info.textContent = `Data cleared.`;
        info.style.color = 'green';
    }
});
// button svg filter
const turbVal = {
    val: 0.000001
};
const turb = document.querySelectorAll('#filter feTurbulence')[0];
const btTl = new TimelineLite({
    paused: true,
    onUpdate: () => {
        turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
    }
});

btTl.to(turbVal, 0.2, {
    val: 0.3
});
btTl.to(turbVal, 0.2, {
    val: 0.000001
});

button[2].addEventListener('click', () => {
    btTl.restart();
});