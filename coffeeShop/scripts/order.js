import{products} from "../data/products.js";
import{cart} from "../data/cart.js";


const page = document.querySelector(".storeGrid");
let productsHtml = "";

products.forEach((product) => {
    productsHtml += `
    <div class="product">
        <div class="preview">
            <p class="productName">${product.name}</p>
            <img class="previewImage" src="${product.image}">
        </div>
        <div class="infomation">
            <p class="price">$${(product.priceCents/100).toFixed(2)}</p>
            <p class="description">${product.description}</p>
            <button class="orderButton"
            data-product-id = ${product.id}>
            Add to order
            </button>
        </div>
    </div>
    `
})
page.innerHTML = productsHtml;

document.querySelectorAll(".orderButton").forEach((button) => {
    button.addEventListener("click", () => {
        let productId = button.dataset.productId;
        cart.push({
            productId: productId,
            quantity: 1
        })
        console.log(cart);
    })
})