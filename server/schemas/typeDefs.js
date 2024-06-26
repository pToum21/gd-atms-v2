const gql = String.raw;

const typeDefs = gql`
type User { 
    _id: ID
    username: String
    email: String
    password: String
    role: String
    reviews: [Review]
}

type Review {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
    status: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(_id: ID!): Review
    myReviews: [Review]
}

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    addReview(reviewText: String!): Review
    updateUser(username: String!, email: String!, password: String!): User
    updateReview(_id: ID!, reviewText: String!): Review
    removeReview(_id: ID!): Review
    deleteUser(_id: ID!): User
    updateReviewStatus(_id: ID!, status: String!): Review
}
`;

module.exports = typeDefs;
