const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const firstNameError = document.getElementById('fn-error');
const lastNameError = document.getElementById('ln-error');
const emailError = document.getElementById('email-error');
const phoneNumberError = document.getElementById('ph-error');
const passwordError = document.getElementById('pw-error');
const confirmPasswordError = document.getElementById('cpw-error');

firstName.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('Please tell us how we should address you.');
    }
  })
  
  input.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
  })