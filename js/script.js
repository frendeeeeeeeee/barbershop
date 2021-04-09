const modalLogin = document.querySelector('.modal-login');
const loginLink = document.querySelector('.login-link');
const closeLogin = document.querySelector('.close-login');
const inputLogin = modalLogin.querySelector('[name="login"]');
const inputPassword = modalLogin.querySelector('[name="password"]');
const formLogin = modalLogin.querySelector('form');
const modalMap = document.querySelector('.modal-map');
const buttonMap = document.querySelector('.button-map');
const closeMap = document.querySelector('.close-map');

let storage = '';
let isStorageSupport = true;

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}


const openModalLogin =() => {
  modalLogin.classList.add('modal-visible');
};
const closeModalLogin = () => {
  modalLogin.classList.remove('modal-visible');
  modalLogin.classList.remove('modal-error');
};

const openModalMap = () => {
  modalMap.classList.add('modal-visible');
};
const closeModalMap = () => {
  modalMap.classList.remove('modal-visible');
};



loginLink.addEventListener('click', event => {
  event.preventDefault();
  openModalLogin();
  if(storage) {
    inputLogin.value = storage;
    inputPassword.focus();
  } else {
    inputLogin.focus();
  }
  
});

closeLogin.addEventListener('click', () => {
  closeModalLogin();
});

window.addEventListener('keydown', (event) => {
  if(event.keyCode === 27) {

    if(modalLogin.classList.contains('modal-visible')) {
      event.preventDefault();
      closeModalLogin();
    }
    if(modalMap.classList.contains('modal-visible')) {
      event.preventDefault();
      closeModalMap();
    }
  }
});

formLogin.addEventListener('submit', event => {
  if(!inputLogin.value || !inputPassword.value) {
    event.preventDefault();
    modalLogin.classList.remove('modal-error');
    modalLogin.offsetWidth = modalLogin.offsetWidth;
    modalLogin.classList.add('modal-error');
  } else {
    if(isStorageSupport) {
      localStorage.setItem('login', inputLogin.value);
    }
    
  }
});

buttonMap.addEventListener('click', () => {
  openModalMap();
});

closeMap.addEventListener('click', () => {
  closeModalMap();
});
