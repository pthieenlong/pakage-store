const modal = document.querySelector('.modal');
// const userMethods = document.querySelector('.user-methods');
const loginBtn = document.querySelector('#login-btn');
const regBtn = document.querySelector('#reg-btn');
const modalClose = document.querySelector('.modal-close');
const userMethods = document.querySelector('.user-methods');
const loginTab = document.querySelector('#login-tab');
const regTab = document.querySelector('#reg-tab');
const loginHeadBtn = document.querySelector('.login-tab');
const regHeadBtn = document.querySelector('.reg-tab');
const activeTab = 'tab-active';

function reset() {
    modal.style.display = 'none';
    regTab.style.display = 'none';
    loginTab.style.display = 'none';
}
loginBtn.onclick = () => {
    modal.style.display = 'block';
    loginHeadBtn.classList.add(activeTab);
    regHeadBtn.classList.remove(activeTab);
    loginTab.style.display = 'block';
    regTab.style.display = 'none';
}

regBtn.onclick = () => {
    modal.style.display = 'block';
    regHeadBtn.classList.add(activeTab);
    loginHeadBtn.classList.remove(activeTab);
    regTab.style.display = 'block';
    loginTab.style.display = 'none';
}

loginHeadBtn.onclick = () => {
    loginHeadBtn.classList.add(activeTab);
    regHeadBtn.classList.remove(activeTab);
    loginTab.style.display = 'block';
    regTab.style.display = 'none';
}
regHeadBtn.onclick = () => {
    regHeadBtn.classList.add(activeTab);
    loginHeadBtn.classList.remove(activeTab);
    regTab.style.display = 'block';
    loginTab.style.display = 'none';
}

modalClose.onclick = () =>  {
    reset();
}
window.onclick = (event) => {
    if(event.target == modal) {
        reset();
    }
}


const cartItems = document.querySelectorAll('.cart-item');
const cartDetails = document.querySelector('.cart-details');
const productTitle = document.querySelector('#no-product');
const cartTable = document.querySelector('#on-stock');
function miniCartTab() {
    if (cartItems.length > 3) {
        for (let i = 3; i < cartItems.length; i++) {
            cartItems[i].style.display = "none";
        }
        cartDetails.style.display = "block";
    } else cartDetails.style.display = "none";

}
miniCartTab();
function deleteItem(item) {
    item.parentElement.remove();
}
function productShowTitle() {
    if(cartItems.length !== 0) {
        cartTable.style.display = "block";
        productTitle.style.display = "none";
    } else {
        cartTable.style.display = "none";
        productTitle.style.display = "block";
    }
}
productShowTitle();
var slideIndex = 0;
const slides = document.querySelectorAll('.adver-img');
console.log(slides);
if(slides.length > 0)
    showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "inline";
    setTimeout(showSlides, 3000);
}
function pushSlides(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "inline";
}