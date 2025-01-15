import { cart, removefromcart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatcurrency } from './utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOption} from '../data/deliveryoption.js'
const today=dayjs();
const dd=today.add(7,'days');
console.log(dd.format('dddd MMMM D'));

let cartsummary = '';
cart.forEach((item) => {
    const productId = item.productId;
    let matchingproduct;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingproduct = product;
        }
    });
    const deliveryoptionid=item.deliveryoptionid;
    let deliveryOption;
    deliveryOptions.forEach((option)=>{
        if(option.id===deliveryoptionid){
            deliveryOption=option;
        }
    });
    const today = dayjs();
    const deliverydate = today.add(
        delivery.deliverydays, 'days'
    );
    const datestring = deliverydate.format(
        'dddd, MMMM D'
    );
    if (matchingproduct) { // Add a check to ensure matchingproduct is defined
        cartsummary += `
        <div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
            <div class="delivery-date">
                Delivery date: ${datestring}
            </div>
            <div class="cart-item-details-grid">
                <img class="product-image" src="${matchingproduct.image}">
                <div class="cart-item-details">
                    <div class="product-name">${matchingproduct.name}</div>
                    <div class="product-price">$${formatcurrency(matchingproduct.priceCents)}</div>
                    <div class="product-quantity">
                        <span>
                            Quantity: <span class="quantity-label">${item.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary">Update</span>
                        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingproduct.id}">Delete</span>
                    </div>
                </div>
                <div class="delivery-options">
                    <div class="delivery-options-title">Choose a delivery option:</div>
                    ${deliveryoptionshtml(matchingproduct)}
                </div>
            </div>
        </div>
        `;
    }
});
function deliveryoptionshtml(matchingproduct) {
    let html = '';
    deliveryOptions.forEach((delivery) => { // Corrected variable name
        const today = dayjs();
        const deliverydate = today.add(
            delivery.deliverydays, 'days'
        );
        const datestring = deliverydate.format(
            'dddd, MMMM D'
        );
        const pricestring = delivery.priceCents === 0
            ? 'FREE'
            : `$${formatcurrency(delivery.priceCents)} -`;
        html += `
            <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${matchingproduct.id}">
                <div>
                    <div class="delivery-option-date">${datestring}</div>
                    <div class="delivery-option-price">${pricestring} Shipping
                    </div>
                </div>
            </div>
        `;
    });
    return html;
}

document.querySelector(".js-order-summary").innerHTML = cartsummary;
document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removefromcart(productId);
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
    });
});
