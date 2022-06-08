const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type User {
        id: Int
        name: String
        email: String
        password: String
    }

    type Query{ 
        hello: String
        world: String
        user(name: String): User
        users: [User]
    }

    input UserInput{
        email: String
        name: String
        password: String
    }

    type Mutation {
        createUser(
            userInput: UserInput
        ): User!
    }
`);

module.exports = schema;