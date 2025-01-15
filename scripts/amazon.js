import {cart,addtocart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatcurrency} from './utils/money.js';
document.addEventListener('DOMContentLoaded', function () {
    const savedCartQuantity = localStorage.getItem('cartq');
    if (savedCartQuantity) {
        document.querySelector('.js-cart-q').innerHTML = savedCartQuantity;
    } else {
        updatecartquantity(); 
    }
});
let productshtml='';
products.forEach((product)=>{
    productshtml+=`
    <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars *10}.png">
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
        $${formatcurrency(product.priceCents)}
        </div>

        <div class="product-quantity-container">
        <select class="product-quantity-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart added-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
        Add to Cart
        </button>
    </div>`;
});

function saveCartQuantityToLocalStorage(cartq) {
    localStorage.setItem('cartq', cartq);
}
function updatecartquantity() {
    let cartq = 0;
    cart.forEach((item) => {
        cartq += item.quantity;
    });
    document.querySelector('.js-cart-q').innerHTML = cartq;
    saveCartQuantityToLocalStorage(cartq);
}

document.querySelector('.js-products-grid').innerHTML = productshtml;
document.querySelectorAll('.button-primary').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const quantitySelector = document.querySelector(
            `.product-quantity-${productId}`);
        const q = Number(quantitySelector.value);
        const add=document.getElementsByClassName(`added-${productId}`).value;
        console.log(add);
        addtocart(productId,q);
        updatecartquantity();
    });
});

function updateCartQuantityOnDelete() {
    let cartq = 0;
    cart.forEach((item) => {
        cartq += item.quantity;
    });
    document.querySelector('.js-cart-q').innerHTML = cartq;
    saveCartQuantityToLocalStorage(cartq);
}
updateCartQuantityOnDelete();