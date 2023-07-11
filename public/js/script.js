const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}


const addToCart_btn = document.querySelector("#addToCart_btn");
const cartBtn = document.querySelector(".action_btn");

let cartNumItm = 0;



addToCart_btn.onclick = () => {
    cartNumItm++;
    let cartNewBtn = `Cart (${cartNumItm})`
    cartBtn.innerHTML = cartNewBtn;

}