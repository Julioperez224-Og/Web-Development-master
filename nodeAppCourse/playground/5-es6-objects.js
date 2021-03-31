// ------------------------------ Object property shorthand
const name = "Julio"
const age = 29

// does not have to put name: name if the variable that is stored is the same variable name in the object.
const user = {
    // name will represent name: name
    name,
    age,
    location:"Annandale, NJ"
}

console.log(user)

// ---------------------------Object Destructuring
const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salesPrice: undefined
}

// const label = product.label
// const price = product.price

// A variable can be set to a key name in an object

// Also able to set a default value
const {label:productLabel, price,stock,salesPrice, rating = 5} = product;
let forSale
if(salesPrice === undefined){
    forSale = "not for sale"
}
else{
    forSale = "for sale"
}
console.log(`The ${productLabel} cost us ${price} and we have ${stock} left in stock. The item is ${forSale}. I give it a ${rating} star rating.`)


// Example use
const  transaction = (type,{label,price,stock}) => {
    console.log(`This will be an ${type}`);
    console.log(`${label} will sell for ${price} and we will sell the whole stock of ${stock} items. The total will be $${price * stock}.`)
    return price*stock
}


console.log(transaction("order", product))