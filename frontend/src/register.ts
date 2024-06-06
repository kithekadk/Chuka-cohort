let user_name = document.getElementById("name") as HTMLInputElement
let user_email = document.getElementById("email") as HTMLInputElement
let user_phone_number = document.getElementById("phone_number") as HTMLInputElement
let user_password = document.getElementById("password") as HTMLInputElement

let successMessage = document.querySelector('.success-msg') as HTMLParagraphElement
let errorMessage = document.querySelector('.error-msg') as HTMLParagraphElement

let registrationForm = document.getElementById("registrationForm") as HTMLFormElement

registrationForm.addEventListener("submit", (e)=>{

    e.preventDefault()

    let username = user_name.value.trim()
    let email = user_email.value.trim()
    let phone_number = user_phone_number.value.trim()
    let password = user_password.value.trim()

    let user = username != '' && email != '' && phone_number != '' && password !=''

    if(user){
        console.log("clicked");
        let promise = new Promise<{error?:string, message?:string}>((resolve, reject)=>{
            fetch('http://localhost:5203/users/create ', {
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    name:username, email, phone_number, password
                })
            }).then((res=>{
                return res.json() 
            })).then(res=>{
                console.log(res);
                if(res.error){
                    errorMessage.style.display = 'block'
                    errorMessage.textContent = res.error

                    setTimeout(() => {
                        errorMessage.textContent = ''
                        errorMessage.style.display = 'none'
                    }, 3000);
                }else{
                    successMessage.style.display = 'block'
                    successMessage.textContent = res.message

                    user_name.value = ''
                    user_email.value = ''
                    user_phone_number.value = ''
                    user_password.value = ''

                    setTimeout(() => {
                        successMessage.textContent=''
                        successMessage.style.display = 'none'

                        navigateToLogin()
                    }, 3000);
                }
            })
        })

        function navigateToLogin(){
            window.location.href = 'login.html'
        }
    }
})