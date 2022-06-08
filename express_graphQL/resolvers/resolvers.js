const { Users } = require("../models");

const resolvers = {
    hello: () => {
        return 'Hello world!';
    },
    world: () => {
        return '이건 조크';
    },
    Query: {
        users: async() => {
            return await Users.all();
        },
        user: async(_, name) => {
            return await Users.find({
                where: {
                    name: name
                }
            });
        },
    },
    User: {
        id(_, args) {
            return _.id;
        },
        name(_, args) {
            return _.name;
        },
        email(_, args) {
            return _.email;
        },
        password(_, args) {
            return _.password;
        }
    },

    Mutation: {
        async createUser(_, args) {  
            console.log(args);      
            try {
                console.log(args);
                const newUser = await Users.create({
                    name: args.name,
                    email: args.email,
                    password: args.password
                });
                
                return newUser;
            } catch(err) {
                console.error(err);
            };
        }
    },
};

module.exports = resolvers;