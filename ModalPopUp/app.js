const openBtn = document.querySelector(".open-btn")
const closeBnt = document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal-container")

openBtn.addEventListener("click",()=>{
    modalContainer.classList.add("show")

})
closeBnt.addEventListener("click",()=>{
    modalContainer.classList.remove("show")

})