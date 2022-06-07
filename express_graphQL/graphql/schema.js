const { buildSchema } = require("graphql");
const { Users } = require("../models");

const schema = buildSchema(`
    type Query{ 
        hello: String!
        world: String!
        user: [User]!
    }

    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
    }
`);

const resolvers = {
    hello: () => {
        return 'Hello world!';
    },
    world: () => {
        return '이건 조크';
    },

    Query: {
        ViewUsers: async() => {
            return await Users.all();
        },
        findUser: async(_, args) => {
            return await Users.find({
                where: args
            });
        },
        createUser: async(_, args) => {
            const newUser = await Users.create({
                name: args.name,
                email: args.email,
                password: args.password,
            });
            return newUser;
        },
    },
};


module.exports = { schema, resolvers };