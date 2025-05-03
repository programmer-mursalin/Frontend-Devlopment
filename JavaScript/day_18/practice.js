const products = [
  { id: 1, name: 'iPhone 14', brand: 'Apple', price: 1000 },
  { id: 2, name: 'Galaxy S23', brand: 'Samsung', price: 900 },
  { id: 3, name: 'Pixel 7', brand: 'Google', price: 800 },
  { id: 4, name: 'Galaxy A50', brand: 'Samsung', price: 400 },
];

function filterProducts(products, criteria) {
  return products.filter((product) => {
    return Object.keys(criteria).every((key) => product[key] === criteria[key]);
  });
}

const filtered = filterProducts(products, { brand: 'Samsung' });
console.log(filtered);
