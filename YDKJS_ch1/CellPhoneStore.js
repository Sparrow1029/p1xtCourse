/*jslint es6 */

const SPEND_THRESHHOLD = 200.00;
const TAX_RATE = 0.065;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91,
    amount = 0;

function calculateTax(amt) {
    return amt * TAX_RATE;
}

function formatTotal(amount) {
    return '$' + amount.toFixed(2)
}

while (true) {
    // buy phones!
    if ((amount + PHONE_PRICE) < bank_balance) {
        amount += PHONE_PRICE;
    } else {
        break;
    }
    // can we afford accessory?
    if (amount < SPEND_THRESHHOLD) {
        amount += ACCESSORY_PRICE;
    }
}

// don't forget to pay gov't!
amount += calculateTax(amount);

console.log("Your purchase: " + formatTotal(amount));
// Your purchase: $330.11

// Can we afford this purchase?
if (amount > bank_balance) {
    console.log("You can't afford this purchase! :(");
} else {
    console.log("Enjoy your new phone! Have a nice day.");
}
// NOPE SORRY
