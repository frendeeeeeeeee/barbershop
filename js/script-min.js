const modalLogin=document.querySelector(".modal-login"),loginLink=document.querySelector(".login-link"),closeLogin=document.querySelector(".close-login"),inputLogin=modalLogin.querySelector('[name="login"]'),inputPassword=modalLogin.querySelector('[name="password"]'),formLogin=modalLogin.querySelector("form"),modalMap=document.querySelector(".modal-map"),buttonMap=document.querySelector(".button-map"),closeMap=document.querySelector(".close-map");let storage="",isStorageSupport=!0;try{storage=localStorage.getItem("login")}catch(o){isStorageSupport=!1}const openModalLogin=()=>{modalLogin.classList.add("modal-visible")},closeModalLogin=()=>{modalLogin.classList.remove("modal-visible"),modalLogin.classList.remove("modal-error")},openModalMap=()=>{modalMap.classList.add("modal-visible")},closeModalMap=()=>{modalMap.classList.remove("modal-visible")};loginLink.addEventListener("click",o=>{o.preventDefault(),openModalLogin(),storage?(inputLogin.value=storage,inputPassword.focus()):inputLogin.focus()}),closeLogin.addEventListener("click",()=>{closeModalLogin()}),window.addEventListener("keydown",o=>{27===o.keyCode&&(modalLogin.classList.contains("modal-visible")&&(o.preventDefault(),closeModalLogin()),modalMap.classList.contains("modal-visible")&&(o.preventDefault(),closeModalMap()))}),formLogin.addEventListener("submit",o=>{inputLogin.value&&inputPassword.value?isStorageSupport&&localStorage.setItem("login",inputLogin.value):(o.preventDefault(),modalLogin.classList.remove("modal-error"),modalLogin.offsetWidth=modalLogin.offsetWidth,modalLogin.classList.add("modal-error"))}),buttonMap.addEventListener("click",()=>{openModalMap()}),closeMap.addEventListener("click",()=>{closeModalMap()});