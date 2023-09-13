import{cart, updateCart} from "../data/cart.js";
import {products} from "../data/products.js";

const page = document.querySelector(".checkoutGrid");
updateCart();
let pageHtml = "";

cart.forEach((item) => {
    let productId = item.id;
    let match;

    products.forEach((product)=> {
        if(product.id == productId){
            match = product;
        }
    })
    pageHtml += `
        <div class="product">
            <div class="preview">
                <img class="productImage" src="${match.image}">
            </div>

            <div class="infomationContainer">
                <div class="infomation">
                    <p class="name">${match.name}</p>
                    <p class="quantity">Quantity: ${item.quantity}</p>
                    <p class="price">Price: $${(Math.floor(match.priceCents  * item.quantity)/100).toFixed(2)}</p>
                    <div class="remove">
                        <button class="removeButton">Remove from Cart</button>
                    </div>
                </div>
            </div>
        </div>
    `;
})

page.innerHTML = pageHtml;