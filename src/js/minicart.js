
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