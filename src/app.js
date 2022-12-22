var anchor = document.querySelector('a');
// console.log('====================================');
// console.log(anchor?.href);
// console.log('====================================');
// if (anchor) {
//     console.log(anchor?.href);
// }
// console.log(anchor?.href);
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) { // first way
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u20AC").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', "work on the mari website", 250);
var invTwo = new Invoice('luigi', "work on the mari website", 300);
// console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    // inv.client="something else"
    console.log(inv.client, inv.amount, inv.format());
});
// invOne.client='yoshi'
// invTwo.client='yoshi'
// const form=document.querySelector('form');
var form = document.querySelector('.new-item-form');
// console.log(form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
