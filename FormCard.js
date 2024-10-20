const btn = document.querySelector("[submitButton]");
const check_container = document.querySelector("[checkmark]");
const checkmark = document.querySelector("[viewBox]");

// var path = document.querySelector('path');
// var length = path.getTotalLength();


btn.addEventListener("click", () => {
    btn.classList.add("animating")
    check_container.classList.add("animating") 
    checkmark.classList.add("animating")
});