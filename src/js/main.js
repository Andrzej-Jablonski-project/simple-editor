"use strict";

const textArea = document.querySelector('.editor__text');
const button = document.querySelectorAll('.editor__button--js');
const info = document.querySelector('.editor__status');


button[0].addEventListener('click', () => {
    const data = localStorage.getItem('editor');
    if (textArea.value) {
        info.textContent = `Data already exists in the text field.`;
        info.style.color = 'red';
    } else if (!data) {
        info.textContent = `There are no data to load.`;
        info.style.color = 'red';
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
        info.style.color = 'red';
    } else if (data) {
        info.textContent = `Data exists, delete data first.`;
        info.style.color = 'red';

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
        info.style.color = 'red';
    } else {
        localStorage.removeItem('editor');
        textArea.value = '';
        info.textContent = `Data cleared.`;
        info.style.color = 'green';
    }
});