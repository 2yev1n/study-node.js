const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query{ 
        hello: String
        world: String
        user(name: String!): User
        users: [User]
    }

    type Mutation {
        createUser(
            name: String!
            email: String!
            password: String!
        ): User
        updateUser(
            name: String!
            email: String!
            password: String!
        ): User
    }

    type User {
        id: Int
        name: String
        email: String
        password: String
    }
`);

module.exports = schema;