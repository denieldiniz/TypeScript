// 1 - Number
let x: number = 10;
let y: number = Math.PI;

console.log(x);
console.log(y.toPrecision(5));

// 2 - String
const nome: string = 'Deniel';
const sobrenome: string = 'Rocha Diniz';

console.log(nome.toUpperCase());
console.log(nome + " " + sobrenome);

// 3 - Boolean
let cadastrado: boolean = false;

console.log(cadastrado);
console.log(typeof(cadastrado));

// 4 - inference e annotation

let ann: string = 'Deniel';
let inf = 'Rocha Diniz';

inf = 'DenieEU';