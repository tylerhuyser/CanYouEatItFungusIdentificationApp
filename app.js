import validateForm from './functions/form-validation-functions/validateForm.js'

const submitButton = document.querySelector("#submit-button")
submitButton.addEventListener('click', validateForm)