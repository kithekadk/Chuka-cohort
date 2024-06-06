"use strict";
let user_name = document.getElementById("name");
let user_email = document.getElementById("email");
let user_phone_number = document.getElementById("phone_number");
let user_password = document.getElementById("password");
let successMessage = document.querySelector('.success-msg');
let errorMessage = document.querySelector('.error-msg');
let registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = user_name.value.trim();
    let email = user_email.value.trim();
    let phone_number = user_phone_number.value.trim();
    let password = user_password.value.trim();
    let user = username != '' && email != '' && phone_number != '' && password != '';
    if (user) {
        console.log("clicked");
        let promise = new Promise((resolve, reject) => {
            fetch('http://localhost:5203/users/create ', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    name: username, email, phone_number, password
                })
            }).then((res => {
                return res.json();
            })).then(res => {
                console.log(res);
                if (res.error) {
                    errorMessage.style.display = 'block';
                    errorMessage.textContent = res.error;
                    setTimeout(() => {
                        errorMessage.textContent = '';
                        errorMessage.style.display = 'none';
                    }, 3000);
                }
                else {
                    successMessage.style.display = 'block';
                    successMessage.textContent = res.message;
                    user_name.value = '';
                    user_email.value = '';
                    user_phone_number.value = '';
                    user_password.value = '';
                    setTimeout(() => {
                        successMessage.textContent = '';
                        successMessage.style.display = 'none';
                        navigateToLogin();
                    }, 3000);
                }
            });
        });
        function navigateToLogin() {
            window.location.href = 'login.html';
        }
    }
});
