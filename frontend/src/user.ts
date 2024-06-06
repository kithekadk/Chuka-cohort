let logoutbtn = document.getElementById('logout') as HTMLAnchorElement

logoutbtn.addEventListener('click', ()=>{
    localStorage.clear()

    window.location.href='login.html'

})