const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phonenumber');

const firstNameError = document.querySelector('#first-name-error')
const lastNameError = document.querySelector('#last-name-error')
const emailError = document.querySelector('#email-error')
const phoneNumberError = document.querySelector('#tel-error')
const passwordError = document.querySelector('#pw-error')
const confirmPasswordError = document.querySelector('#confirm-pw-error')

firstName.addEventListener('input', (e) => {
    if (firstName.value === '') {
        firstNameError.textContent = 'Please type in your first name';
    } else {
        firstNameError.textContent = '';
    }
})

lastName.addEventListener('input', (e) => {
    if (lastName.value === '') {
        lastNameError.textContent = 'Please type in your last name';
    } else {
        lastNameError.textContent = '';
    }
})

email.addEventListener('input', (e) => {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
})

phoneNumber.addEventListener('input', (e) => {
    if (phoneNumber.validity.patternMismatch) {
        phoneNumberError.textContent = 'Please enter a valid phone number';
    } else {
        phoneNumberError.textContent = '';
    }
})


password.addEventListener('input', function(e) {
    const passwordValue = password.value;
    const capitalPattern = /[A-Z]/g;
    const numberPattern = /[0-9]/g;
    const lowercasePattern = /[a-z]/g;
    const specialSymbolPattern = /[!@#$%^&*_=+-]/g;
    let capitalErrorMessage = '';
    let numberErrorMessage = '';
    let lowercaseErrorMessage = '';
    let symbolErrorMessage = '';
    let lengthErrorMessage = '';

    const capitalError = document.querySelector('#capital-error');
    const numberError = document.querySelector('#number-error');
    const lowercaseError = document.querySelector('#lowercase-error');
    const symbolError = document.querySelector('#symbol-error');
    const lengthError = document.querySelector('#length-error');

    if (capitalPattern.test(passwordValue)){
        capitalErrorMessage += '';
        capitalError.classList.remove('hidden');
        capitalError.classList.add('hidden');
    } else {
        capitalErrorMessage += 'Password needs to have at least 1 capital letter.';
        capitalErrorMessage += `\n`;
        capitalError.classList.remove('hidden');
    }

    if (numberPattern.test(passwordValue)){
        numberErrorMessage += '';
        numberError.classList.remove('hidden');
        numberError.classList.add('hidden');
    } else {
        numberErrorMessage += 'Password needs to have at least 1 number.';
        numberErrorMessage += `\n`;
        numberError.classList.remove('hidden');
    }

    if (lowercasePattern.test(passwordValue)){
        lowercaseErrorMessage += '';
        lowercaseError.classList.remove('hidden');
        lowercaseError.classList.add('hidden');
    } else {
        lowercaseErrorMessage += 'Password needs to have at least 1 lowercase character.\n';
        lowercaseErrorMessage += `\n`;
        lowercaseError.classList.remove('hidden');
    }

    if (specialSymbolPattern.test(passwordValue)){
        symbolErrorMessage += '';
        symbolError.classList.remove('hidden');
        symbolError.classList.add('hidden');
    } else {
        symbolErrorMessage += 'Password needs to have at least 1 special symbol (!@#$%^&*_=+-).';
        symbolErrorMessage += `\n`;
        symbolError.classList.remove('hidden');
    }

    if (passwordValue.length < 8 || passwordValue.length > 16) {
        lengthErrorMessage += 'Password need to be at least 8 characters.'
        lengthErrorMessage += `\n`;
        lengthError.classList.remove('hidden');
    } else {
        lengthErrorMessage += '';
        lengthError.classList.remove('hidden');
        lengthError.classList.add('hidden');
    }
    capitalError.textContent = capitalErrorMessage;
    numberError.textContent = numberErrorMessage;
    lowercaseError.textContent = lowercaseErrorMessage;
    symbolError.textContent = symbolErrorMessage;
    lengthError.textContent = lengthErrorMessage;
});

confirmPassword.addEventListener('input', (e) => {
    if (confirmPassword.value != password.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
    } else {
        confirmPasswordError.textContent = '';
    }
})