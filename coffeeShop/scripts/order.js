import{products} from "../data/products.js";
import{addToCart, updateCart} from "../data/cart.js";


const page = document.querySelector(".storeGrid");
updateCart();
let productsHtml = "";

products.forEach((product) => {
    productsHtml += `
    <div class="product">
        <div class="preview">
            <p class="productName">${product.name}</p>
            <img class="previewImage" src="${product.image}">
        </div>
        <p class="price">$${(product.priceCents/100).toFixed(2)}</p>            <p class="description">${product.description}</p>
        <button class="orderButton"
        data-product-id = ${product.id}>
        Add to order
        </button>
    </div>
    `
})
page.innerHTML = productsHtml;

document.querySelectorAll(".orderButton").forEach((button) => {
    button.addEventListener("click", () => {
        let productId = button.dataset.productId;
        addToCart(productId)
        updateCart()

    })
})