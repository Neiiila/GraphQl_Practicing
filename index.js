// index.js
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Import the schema and mock database
import db from './_db.js';
import { typeDefs } from './schema.js';

// Define resolvers for handling GraphQL queries
const resolvers = {
    Query: {
        reviews: () => db.reviews,
        review : ( _ ,args ) =>{
            return db.reviews.find((review) => review.id === args.id)
        },    
        cars: () => db.cars,
        car: ( _, args  ) => { 
            return db.cars.find((car) => car.make === args.make )
        },
        dealerships: () => db.dealerships,
        dealership: ( _, args  ) => { 
            return db.dealerships.find((dealership) => dealership.id === args.id)}
    },
    Dealership: {
    reviews: (parent) => db.reviews.filter((review) => review.dealership === parent.id )
},
    Car: {
    dealer: (parent) => {
        console.log(parent)
        return db.dealerships.find((dealership) => dealership.id === parent.dealer_id)
    }
},
    Mutation : {
        deleteReview : ( _ , args ) => {
            db.reviews = db.reviews.filter((review) => review.id !== args.id)
            return db.reviews
        },
        addReview : ( _ , args ) => {
            let review = { ... args.review, id : db.reviews.length + 1 }
            // console.log(review)
            db.reviews.push( review )
            return db.reviews
        },
        updateReview( _, args ) {
            let review = db.reviews.find((review) => review.id === args.id)
            console.log("Updated Review", args.id )
            review = { ...review, ...args.review }
            this.deleteReview(null, { id: args.id })
            db.reviews.push(review)
            console.log("Updated Review", review)
            return db.reviews
        }
    }
};

// Create an instance of Apollo Server with the schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Function to start the Apollo Server
async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }, // Server will listen on port 4000
  });
  console.log(`🚀 Server ready at ${url}`);
}

// Call the function to start the server
startServer().catch((error) => {
  console.error('Error starting Apollo Server:', error);
});
