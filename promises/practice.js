// const getUser = ()=>{
//     setTimeout(() => {
//         return {
//             name: 'Duncan'
//         }
//     }, 2000);
// }

// const user = getUser()
// console.log(user.name);

const getUser = (callback) =>{
    setTimeout(() => {
        const user = {
            name: "Duncan"
        }
        callback(user)
    }, 2000);
}

getUser((user)=>{
    console.log(user.name);
})


// function greet(){
//     console.log('Hi');
// }

// const showAlert = ()=>{
//     alert ('Danger')
// }

// setTimeout(() => {
//     showAlert()
// }, 2000);

// greet()