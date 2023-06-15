
const orders = [
    {
        date: "2020-01-01",
        subtotal: 300.00,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: "Red shoe",
                    price: 100.00,
                },
                quantity: 1
            }
        ]
    }
];

function getAllOrders() { 
    return orders;
}
module.exports = {getAllOrders}