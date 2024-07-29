export const cart = [];

export function addToCart(productId){
    let matchingcartItem;
        cart.forEach((cartItem) => {
            if (productId === cartItem.productId){
                matchingcartItem = cartItem;

                }
        });
        
        const selectedQuantity = document.querySelector(`.js-quantity-selected-${productId}`).value;
        const quantity = Number(selectedQuantity);


        if(matchingcartItem){
            matchingcartItem.quantity += quantity;
        }else{
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }
}
