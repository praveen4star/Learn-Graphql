const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP} = require('express-graphql');
const app = express();

const schema = buildSchema(`
    type Query {
        products : [Product]
        orders : [Order]
    }
    type Product {
        id : ID!
        description : String!
        reviews : [Review]
        price : Float!
    }
    type Review {
        rating : Float!
        comment : String
    }
    type Order {
        date : String!
        subtotal : Float!
        items : [OrderItem]
    }
    type OrderItem {
        product : Product!
        quantity : Int!
    }
`);
const root = {
    products: [
        {
            id: 'redshoe',
            description: "Red shoe",
            price: 100.00,
            reviews: [{rating : 5, comment : "Comfortable!"}]
        },
        {
            id: "bluejean",
            description: "Blue jean",
            price: 200.00,
            reviews : [{rating : 4, comment : "Fits well!"}]
        }
    ], 
    orders: [
        {
            date: "2020-01-01",
            subtotal: 300.00,
            items: [
                { 
                    product: {
                        id: 'redshoe',
                        description: "Red shoe",
                        price : 100.00,
                    },
                    quantity: 1
                }
            ]
        }
    ]
}
app.use("/graphql", graphqlHTTP({ schema : schema, rootValue : root, graphiql : true}));
const prot = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started on port 3000'));