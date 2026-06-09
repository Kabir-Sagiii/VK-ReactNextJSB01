var product = {
  productName: "Iphone 17",
  price: 90000,
  rating: 3.4,
  category: "electronics",
  image: "https://static.digit.in/Apple-iPhone-17-Pro-Max-.png",
};

console.log(product);
console.log("");

delete product.rating;

delete product["category"];

console.log(product);
