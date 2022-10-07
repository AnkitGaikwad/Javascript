let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let order = (fruitSelected, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitSelected]} was selected.`);
        call_production();

        setTimeout(() => {
            console.log("The fruit has been chopped.");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected.`);

                setTimeout(() => {
                    console.log("The machine has been started.");

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected.`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[1]} was selected.`);

                            setTimeout(() => {
                                console.log("The ice cream is served.");
                            },2000);

                        },3000);

                    },2000);

                },1000);

            },1000);

        },2000);

    }, 2000);

};

let production = () => {
    setTimeout(() => {
        console.log('Production has started');
    }, 0000);
    
};

order(0, production);