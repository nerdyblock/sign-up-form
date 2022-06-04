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

let validate = (el) => {
    if (undefined !== el.attributes['required'] && el.value.trim() == '')
     {
        el.nextElementSibling.textContent = `*PLEASE ENTER ${el.previousElementSibling.textContent}`
        // el.nextElementSibling.innerText = el.attributes['data-required-msg'] ? el.attributes['data-required-msg'].value : '*This field is required.';
        return false;
    }

    el.nextElementSibling.innerText = '';
    return true;
}

firstName.addEventListener('input', validateName);
lastName.addEventListener('input', validateName);

function validateName() {
    if(/^[a-zA-Z]+$/.test(this.value) === false) {
            this.nextElementSibling.textContent = 'please enter valid first name';
            this.setCustomValidity("Invalid field.");
        }
        else {
            this.nextElementSibling.textContent = '';
            this.setCustomValidity("");
        }
}

email.addEventListener('input', function() {
    
    if(email.validity.typeMismatch) {
        emailError.textContent = 'please enter valid email address';
    }
    else {
        emailError.textContent = '';
    }
});

phoneNumber.addEventListener('input', function() {
    if(phoneNumber.validity.patternMismatch) {
        phoneNumberError.textContent = 'please enter valid phone number';
    }
    else {
        phoneNumberError.textContent = '';
    }
});

password.addEventListener('input', function() {
    if(password.value.length < 8) {
        passwordError.textContent = 'password is not strong enough';
        password.setCustomValidity("Invalid field.");
    }
    else{
        passwordError.textContent = '';
        password.setCustomValidity("");
    }
})

confirmPassword.addEventListener('input', function() {
    if(password.value  !== confirmPassword.value) {
        confirmPasswordError.textContent = "passwords do not match";
        confirmPassword.setCustomValidity("Invalid field.");
    }
    else {
        confirmPasswordError.textContent = '';
        confirmPassword.setCustomValidity("");
    }
});

document.getElementById('signup-form').onsubmit = function (e) {
    e.preventDefault();

    var validated = true;
    document.querySelectorAll('input').forEach(function (el) {
        validated = !validated ? false : validate(el);
    });

    if (validated) {
        alert('REGISTRATION SUCCESSFUL!!');
        this.submit();
    }
}
