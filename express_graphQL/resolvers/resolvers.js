const { Users } = require("../models");

const resolvers = {
    Query: {
        users: async() => {
            return await Users.findAll();
        },
        user: async(args) => {
            const { name } =  args;
            return await Users.findOne({
                where: {
                    name: name
                }
            });
        },
        hello: () => {
            return 'Hello world!';
        },
        world: () => {
            return '이건 조크';
        },
    },
    Mutation: {
        createUser: async (args) => {
            const { name, email, password } = args;
            console.log(args);
            try {
                const newUser = await Users.create({
                    name: name,
                    email: email,
                    password: password
                });

                return newUser;
            } catch (err) {
                console.error(err);
            };
        }
    },
};

module.exports = resolvers;