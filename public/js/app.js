//const { functions } = require("lodash");

const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');

// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
});

// close request modal
requestModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open');
  }
});

// say hello function call
const button = document.querySelector('.call');
button.addEventListener('click', () => {
  // get function reference
  const myCall = firebase.app().functions("europe-west1").httpsCallable('myCall');
  // call the function and pass data
  myCall().then(result => {
    console.log(result.data);
  });
});