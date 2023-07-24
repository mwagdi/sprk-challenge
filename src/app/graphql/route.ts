import { GraphQLError } from 'graphql/error';
import { createSchema, createYoga } from 'graphql-yoga';
import { Product } from 'types';

const fetchProduct = async (code: string) => {
    const response = await fetch('http://localhost:3001/products');
    const responseJson = await response.json();

    return responseJson.find((item: Product) => item.code === code);
};

const schema = createSchema({
    typeDefs: `
        type Query {
            product(code: String!): Product!
        }
        
        type Mutation {
            editProduct(code: String!, data: EditProductInput!): Product!
        }
        
        type Product {
            id: String!
            amount_multiplier: Int!
            brand: String!
            categ_id: Int!
            category_id: String!
            code: String!
            description: String!
            edeka_article_number: String!
            gross_weight: Int!
            net_weight: Int!
            notes: Boolean!
            packaging: String!
            requires_best_before_date: Boolean!
            best_before_date: String
            requires_meat_info: Boolean!
            meat_info: String
            trade_item_unit_descriptor: String!
            trade_item_unit_descriptor_name: String!
            type: String!
            unit_name: String!
            validation_status: String!
            related_products: [Product]
        }
        
        input EditProductInput {
            amount_multiplier: Int
            brand: String
            description: String
            edeka_article_number: String
            gross_weight: Int
            net_weight: Int
            packaging: String
            requires_best_before_date: Boolean
            best_before_date: String
            requires_meat_info: Boolean
            meat_info: String
            trade_item_unit_descriptor: String
            trade_item_unit_descriptor_name: String
            validation_status: String
        }
    `,
    resolvers: {
        Query: {
            product: async (_, { code }) => {
                try {
                    const product = await fetchProduct(code);

                    if(product) return product;
                    return new GraphQLError('Product not found');
                }
                catch (e) {
                    return new GraphQLError('An error has occurred');
                }
            }
        },
        Mutation: {
            editProduct: async (_, { code, data }) => {
                try {
                    const product = await fetchProduct(code);

                    if(product) return {
                        ...product,
                        ...data
                    };
                    return new GraphQLError('Product not found');
                }
                catch (e) {
                    return new GraphQLError('An error has occurred');
                }
            }
        }
    }
});

const { handleRequest } = createYoga({
    graphqlEndpoint: '/graphql',
    schema,
    fetchAPI: {
        Request: Request,
        Response: Response
    }
});

export { handleRequest as GET, handleRequest as POST };