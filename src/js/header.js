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