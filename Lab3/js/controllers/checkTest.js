import FormReader from '../utils/FormReader.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = FormReader.getData(form);

    if (!Object.keys(data).length) {
        alert('Empty test');
    } else {
        let errors = 0;

        for (const key in data) {
            if (data[key].split('-')[1] === 'false') {
                errors++;
            }
        }

        switch (errors) {
            case 0: {
                alert('0 errors, very good result!');
                break;
            }
            case 1: {
                alert('1 error, good result!');
                break;
            }
            case 2: {
                alert('2 errors, bad result!');
                break;
            }
            case 3: {
                alert('3 errors, very bad result!');
                break;
            }
            default: {
                break;
            }
        }

        form.reset();
        document.location.href = '/';
    }
});