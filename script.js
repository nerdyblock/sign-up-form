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


// firstName.addEventListener('invalid', function (event) {
//     if (event.target.validity.valueMissing) {
//       event.target.setCustomValidity('Please tell us how we should address you.');
//     }
//   })
  
//   firstName.addEventListener('change', function (event) {
//     event.target.setCustomValidity('');
//   })

let validate = (el) => {
    console.log(el);
    if (undefined !== el.attributes['required'] && el.value.trim() == '') {
        el.nextElementSibling.innerHTML = el.attributes['data-required-msg'] ? el.attributes['data-required-msg'].value : 'This field is required.';
        return false;
    }

    el.nextElementSibling.innerHTML = '';
    return true;
}

document.querySelectorAll('input').forEach(function (el) {
    el.addEventListener('keydown', function(e) {
        validate(this);
    });
});

document.getElementById('signup-form').onsubmit = function (e) {
    e.preventDefault();

    var validated = true;
    document.querySelectorAll('input').forEach(function (el) {
        validated = !validated ? false : validate(el);
    });

    if (validated) this.submit();
}
