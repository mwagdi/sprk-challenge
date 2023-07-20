import {createSchema, createYoga} from 'graphql-yoga';
import {GraphQLError} from "graphql/error";

const schema = createSchema({
    typeDefs: `
        type Query {
            product(code: String!): Product!
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
              requires_meat_info: Boolean!
              trade_item_unit_descriptor: String!
              trade_item_unit_descriptor_name: String!
              type: String!
              unit_name: String!
              validation_status: String!
              related_products: [Product]
        }
    `,
    resolvers: {
        Query: {
            product: async (_, {code}) => {
                try {
                    const response = await fetch('http://localhost:3001/products');
                    const responseJson = await response.json();

                    // @ts-ignore
                    const product = responseJson.find(item => item.code === code);
                    if(product) return product;
                    return new GraphQLError('Product not found');
                }
                catch (e) {
                    console.log({e})
                    return new GraphQLError('An error has occurred');
                }
            }
        }
    }
})

const {handleRequest} = createYoga({
    graphqlEndpoint: '/graphql',
    schema,
    fetchAPI: {
        Request: Request,
        Response: Response
    }
});

export {handleRequest as GET, handleRequest as POST};