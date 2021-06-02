(() => {
    if (!localStorage.hasOwnProperty('sessionUser')) {
        document.location.href = 'signin.html';
    }
})();