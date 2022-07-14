const Fname = document.getElementById('Fname')
const Lname = document.getElementById('Lname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const RePassword = document.getElementById('RePassword')
const errorMessage = document.getElementById('error')

login.addEventListener('submit', (e) => {

    let errorMessages = []

    if (password.value.length <= 7) {
        errorMessages.push("Password must be longer than 7 characters")
    }

    if (password.value.length >= 18) {
        errorMessages.push("Password cannot be longer than 18 characters")
    } 

    if (password === RePassword) {

    }else {
        e.preventDefault()
        errorMessages.push("Make sure your password match")
    }

    if (errorMessages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = errorMessages.join(', ')
    }
})