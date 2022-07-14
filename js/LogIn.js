const email = document.getElementById('email')
const password = document.getElementById('password')
const errorMessage = document.getElementById('loginError')

login.addEventListener('submit', (e) => {

    let errorMessages = []

    if (email.value === '' || email.value == null) {
        errorMessages.push('Email is required')
    }

    if (password.value.length <= 7) {
        errorMessages.push("Password must be longer than 7 characters")
    }

    if (password.value.length >= 18) {
        errorMessages.push("Password cannot be longer than 18 characters")
    }

    if (errorMessages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = errorMessages.join(', ')
    }
})