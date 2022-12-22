export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
     // constructor(c: string, d: string, a: number) { // first way
         constructor(readonly client: string,private details: string,public amount: number) { //second way
         // this.client = c;
         // this.details = d;
         // this.amount = a;
     }
     format() {
         return `${this.client} owes €${this.amount} for ${this.details}`;
     }
 }