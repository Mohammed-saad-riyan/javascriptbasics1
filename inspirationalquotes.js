// npm init
// npm i cowsay
// npm i inspirational-quotes


const Quote = require("inspirational-quotes");

const p = (Quote.getRandomQuote()); // return any random quote

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : p,
    e : "xx",
    T : "PP "
}));