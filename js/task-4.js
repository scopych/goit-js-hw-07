'use strict';

const form = document.querySelector('.login-form');
form.addEventListener('submit', validator);

function validator(event) {
  const result = {};
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    result.email = email;
    result.password = password;

    console.log(result);
    form.reset();
  }
}
