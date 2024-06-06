"use strict";
let userlogin_email = document.getElementById("email");
let userlogin_pass = document.getElementById("password");
let emailError = document.getElementById('email-error');
let loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = userlogin_email.value.trim();
    let password = userlogin_pass.value.trim();
    if (email == '') {
        userlogin_email.style.border = 'red solid 1px';
        emailError.textContent = 'Email is required';
    }
    let login_details = email != '' && password != '';
    if (login_details) {
        let promise2 = new Promise((resolve, reject) => {
            fetch('http://localhost:5203/auth/login', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    email, password
                })
            }).then(res => res.json()).then(data => {
                console.log(data);
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    redirect();
                }
                resolve(data);
            }).catch(error => {
                reject(error);
            });
        });
        function redirect() {
            const token = localStorage.getItem('token');
            new Promise((resolve, rej) => {
                fetch('http://localhost:5203/auth/check-details', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                        'token': token
                    },
                    method: "GET"
                }).then(res => res.json()).then(data => {
                    console.log(data);
                    if (data.info.role === 'user') {
                        localStorage.setItem('user_id', data.info.id);
                        setTimeout(() => {
                            window.location.href = 'user-dashboard.html';
                        }, 2000);
                    }
                    else if (data.info.role === 'admin') {
                        localStorage.setItem('user_id', data.info.id);
                        setTimeout(() => {
                            window.location.href = 'admin-dashboard.html';
                        }, 2000);
                    }
                    resolve(data);
                });
            });
        }
    }
});
