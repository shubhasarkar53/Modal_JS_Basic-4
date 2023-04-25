const openModalBtn = document.querySelector(".btn");

const closeBtn = document.querySelector(".fa-xmark");
const modalContainer = document.querySelector(".modal-container");
const openModalContainer = document.querySelector(".open-modal-container");
const overlay = document.querySelector(".overlay");

openModalBtn.addEventListener("click", function(){
    // modalContainer.classList.add("deactive");
    modalContainer.classList.remove("active");
    openModalContainer.classList.add("active");
    overlay.classList.add("active");

   
});

closeBtn.addEventListener("click",function(){
    openModalContainer.classList.remove("active");
    modalContainer.classList.add("active");
    overlay.classList.remove("active");
})