let modalLogin = document.querySelector('.modal-login');
let loginLink = document.querySelector('.login-link');
let closeLogin = document.querySelector('.close-login');

let modalMap = document.querySelector('.modal-map');
let buttonMap = document.querySelector('.button-map');
let closeMap = document.querySelector('.close-map');



let openModalLogin =() => {
  modalLogin.classList.add('visible');
}
let closeModalLogin = () => {
  modalLogin.classList.remove('visible');
};
loginLink.addEventListener('click', () => {
  openModalLogin();
});
closeLogin.addEventListener('click', () => {
  closeModalLogin();
});



let openModalMap = () => {
  modalMap.classList.add('visible');
};
let closeModalMap = () => {
  modalMap.classList.remove('visible');
};

buttonMap.addEventListener('click', () => {
  openModalMap();
});
closeMap.addEventListener('click', () => {
  closeModalMap();
});



