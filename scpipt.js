


const wrapper = document.querySelector('.container')

const loginLink = document.querySelector('.login-link')

const registerLink = document.querySelector('.register-link')

const btn = document.querySelector('.btnLogin-popup')

const btnClose = document.querySelector('.icon-close')

registerLink.onclick = () =>{
    wrapper.classList.add('active')
}
loginLink.onclick = () =>{
    wrapper.classList.remove('active')
}
btn.onclick = () =>{
    wrapper.classList.add('active-popup')
}
btnClose.onclick = () =>{
    wrapper.classList.remove('active-popup')
}