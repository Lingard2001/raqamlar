const strNumber = '12354687994'

const natija = strNumber.split('').reverse().map((e,i)=>i%3===0 ? e+" " : e).reverse();

console.log(natija
