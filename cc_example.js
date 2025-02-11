// Task 1 
let products =[
   {name: "Laptop", price: 1200, category: "Electronics" },
   {name: "notebook", price: 5, category: "Stationery"},
   {name: "Headphones", price: 100, category: "Electronics"},
];

// function getProductsByCategory(products, category) {
//     return products.filter(product => product.category === category);
// }
// console.log(getProductsByCategory(products,"Electronics")); 

// Task 2 

function applyDiscount(products,discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }
        
    ))
}

console.log(applyDiscount(products, 0.1));

//