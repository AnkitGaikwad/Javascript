let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let isShopOpen = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed"));
        }
    })
};

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected.`);
        await time(0000);
        console.log("The production has started.");
        await time(2000);
        console.log("Cuttting the fruit...");
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected.`);
        await time(0000);
        console.log("The machine has been started.");
        await time(2000);
        console.log(`${stocks.holder[0]} was selected.`);
        await time(3000);
        console.log(`${stocks.toppings[0]} was selected.`);
        await time(2000);
        console.log("Ice cream is served!");
    }
    catch (err) {
        console.log("Error is: ", err);
    }
    finally {
        console.log("Day ended, shop is closed");
    }
}

kitchen();