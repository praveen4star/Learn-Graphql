
const products = [
    {
        id: 'redshoe',
        description: "Red shoe",
        price: 100.00,
        reviews: [{ rating: 5, comment: "Comfortable!" }]
    },
    {
        id: "bluejean",
        description: "Blue jean",
        price: 200.00,
        reviews: [{ rating: 4, comment: "Fits well!" }]
    }
];
function getAllProducts() {
    return products;
}
function getProductByPrice(minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}
function getPrductByID(id) {
    return products.find(product => product.id === id);
}
function addProduct(id, description, price) { 
    products.push({ id, description, price });
    return products.find(product => product.id === id);
}
module.exports = {
    getAllProducts,
    getProductByPrice,
    getPrductByID,
    addProduct
}