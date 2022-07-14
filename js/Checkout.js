const cardno = document.getElementById('cardno')
const exdate = document.getElementById('exdate')
const cvv = document.getElementById('cvv')
const errorMessage = document.getElementById('error')

checkoutjs.addEventListener('submit', (e) => {

    let errorMessages = []

    if (cardno.value.length < 16) {
        errorMessages.push("Please enter a valid card number")
    }

    if (cardno.value.length > 16) {
        errorMessages.push("please enter a valid card number")
    } 

    if(exdate.value === '' || exdate.value == null){
        errorMessages.push("Please enter the expire date")
    }

    if (cvv.value.length > 3) {
        errorMessages.push("invalid CVV")
    } 

    if (cvv.value.length < 3) {
        errorMessages.push("invalid CVV")
    } 

    if (errorMessages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = errorMessages.join(', ')
    }
})