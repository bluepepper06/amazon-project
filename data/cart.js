export let cart=JSON.parse(localStorage.getItem('cart'));
if (cart.length===0){
    cart=[{
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2,
        deliveryoptionid:'1'
    },{
        productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1,
        deliveryoptionid:'2'
    }];
}

function savetostorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addtocart(productId,q){
    let matchingitem;
    cart.forEach((item)=>{
        if(productId===item.productId){
            matchingitem=item
        }
    });
    
    if(matchingitem){
        matchingitem.quantity+=q;
    }
    else{
        cart.push({
            productId:productId,
            quantity:q,
            deliveryoptionid:'1'
        });
    }
    savetostorage();
}

export function removefromcart(productId){
    const newcart=[];
    cart.forEach((item)=>{
        if(item.productId !== productId){
            newcart.push(item);
        }
    });
    cart=newcart;
    savetostorage();
}