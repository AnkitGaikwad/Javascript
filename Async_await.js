let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let isShopOpen = true;

// async function order(){
//     try {
//         await abc;
//     }
//     catch(err){
//         console.log("error: " + err.message);
//     }
//     finally {
//         console.log("code runs anyways");
//     }
// }

// order();
// order.then( () => {
//     console.log("order .then() called");
// });

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( console.log("which topping would you like to order?") );
            
        }, 3000);
    });
};

async function kitchen () {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");
    
    await toppings_choice();
    
    console.log(" D ");
    console.log(" E ");

}

kitchen();
console.log(" F ");
console.log(" G ");

