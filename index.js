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
