let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let isShopOpen = false;

 let order = (time, work) => {

    return new Promise((resolve, reject) => {

        if (isShopOpen) {

            setTimeout(() => {
                resolve(work());
            }, time);

        } else {
            reject(console.log("The shop is closed"))
        }

    } );
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`) )

.then( () => {
    return order(0000, () => console.log("The production has started."));
})

.then(  () => {
    return order(2000, () => console.log("Cuttting the fruit..."));
})

.then( () => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected.`));
})

.then( () => {
    return order(0000, () => console.log("The machine has been started."));
})

.then( () => {
    return order(2000, () => console.log(`${stocks.holder[0]} was selected.`));
})

.then( () => {
    return order(3000, () => console.log(`${stocks.toppings[1]} was selected.`));
})

.then( () => {
    return order(2000, () => console.log("Ice cream is served!"));
})

.catch( () => {
    console.log("Customer left");
})

.finally( () => {
    console.log("Day ended shop is closed");
});



