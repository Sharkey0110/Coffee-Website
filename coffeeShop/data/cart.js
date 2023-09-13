export let cart = [{
    id: "1",
    quantity: 2
},{
    id: "3",
    quantity: 3
}]

export function addToCart (productId){
    let match;
    cart.forEach((item) => {
        if(productId == item.productId){
            match = item;
        }
    })

    if(match){
        match.quantity ++;
    } else{
        cart.push({
            productId: productId,
            quantity: 1
        })
    }
}

export function updateCart(){
    let cartTotal = 0;
    cart.forEach((item) => {
        cartTotal += item.quantity;
    })
    document.querySelector(".cartAmount").innerHTML = cartTotal;
}