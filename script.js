/*e-commerce checkout page */
//variables to conatain the value of the total in the cart and status of the user
let cartTotal = 91;
let userStatus = 'premium';

/*variable to contain the value that is the result of shipping cost and premiumMin */
const shippingCost = 10;
const premiumMin = 100;

/*shipping cost is free for users in premium or for users with a cartTotal of over 100
we set the values inside a boolean variable isShippingCost*/
isShippingCost = userStatus==='premium' || cartTotal > premiumMin;
console.log(isShippingCost);
/*a new variable to finalTotal  and use of conditional logic*/
if (isShippingCost === 'true') {
    //this is the block of code that should run and shipping is free
    finalTotal = cartTotal;
}
else{
    //this block of code runs and the shipping is not free so i add the shipping costs
    finalTotal = cartTotal + shippingCost;
}

console.log(finalTotal)


/*a user add an item so we use a assingment operator to add and assing cartTotal */
cartTotal += 30;
console.log(cartTotal);

/*final checkif the userStatus is set to premuim */
let isUserPremium = userStatus === 'premium';
console.log('is the user premium ?' + isUserPremium);