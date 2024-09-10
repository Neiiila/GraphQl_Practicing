export const typeDefs = `#graphql
    type Review {
        id: Int
        name: String
        dealership: Dealership
        review: String
        purchase: Boolean
        purchase_date: String
        car_make: String!
        car_model: String!
        car_year: Int!
    }
    type Car {
        dealer: Dealership
        make: String
        model: String
        bodyType: String!
        year: Int
        mileage: Int!
    }
    type Dealership {
        id: Int
        city: String
        state: String
        address: String
        zip: String
        lat: String
        long: String
        short_name: String!
        full_name: String
        reviews: [Review]
        cars: [Car]
    }
    # reuired to define the entr point and specify the return type
    type Query {
        reviews : [Review], # reviews enty point musl return a list of reviews
        review(id: Int)  : Review,
        cars: [Car],
        car( make: String ): [Car], 
        dealerships: [Dealership],
        dealership(id: Int) : Dealership
        #review (id: int) : Review
    }
`;
