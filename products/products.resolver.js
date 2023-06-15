
const productModel = require('./products.model');

module.exports = {
    Query: {
        products: async (parent, args, context, info) => { 
            return productModel.getAllProducts();
        },
        productsByPrice : async (parent, args) => {
            return productModel.getProductByPrice(args.min, args.max);
        },
        productById: async (parent, args) => {
            return productModel.getPrductByID(args.id);
        }
    },
    Mutation: {
        addNewProduct: async (parent, args) => {
            return productModel.addProduct(args.id, args.description, args.price);
        },
        addNewRview: async (parent, args) => { 
            return productModel.addNewReview(args.id, args.rating, args.comment)
        }
    }
}