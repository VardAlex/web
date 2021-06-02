import Tests from '../words/words.js';
import { loadTests } from '../models/LSTest.js';

loadTests(Tests);

document.querySelector('#testBox').addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('startTest')) {
        localStorage.setItem('pickedTest', JSON.stringify({ name: event.target.getAttribute('data-id') }));
        document.location.href = '/test.html';
    }
});