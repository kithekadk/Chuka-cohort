"use strict";
let logoutbtn = document.getElementById('logout');
logoutbtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'login.html';
});
