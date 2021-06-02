import { Test } from '../views/Test.js';

const { name } = JSON.parse(localStorage.getItem('pickedTest'));
const tests = JSON.parse(localStorage.getItem('tests'));
const { test } = tests[tests.findIndex(item => item.title === name)];

test.forEach(item => new Test({ ...item }).render(document.querySelector('.testBox')));