const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query{ 
        hello: String
        world: String
        user(id: Int!): User
        users: [User]
    }

    type Mutation {
        createUser(
            name: String!
            email: String!
            password: String!
        ): User!
        updateUser(
            name: String!
            email: String!
            password: String!
        ): User
        deleteUser(
            name: String!
            email: String!
            password: String!
        ): String!
    }

    type User {
        id: Int
        name: String
        email: String
        password: String
    }
`);

module.exports = schema;