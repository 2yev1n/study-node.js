const { Users } = require("../models");

const resolvers = {
    Query: {
        users: async() => {
            return await Users.findAll();
        },
        user: async(args) => {
            const { id } =  args;

            const user = await Users.findOne({
                where: {
                    id: id
                }
            });
            
            if(user == null){
                throw (new Error("해당 정보 없음"));
            }
            else return user;
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
        },
        updateUser: async (args) => {
            const { name, email, password } = args;
            console.log(name, email, password);
            try{
                let Newname = await Users.findOne({
                    where: {
                        email: email,
                        password: password
                    }
                });
                
                Newname = await Newname.update({
                    name: name
                });
                return Newname;
            } catch(err) {
                console.error(err);
            };
        },
        deleteUser: async (args) => {
            const { name, email, password } = args;
            console.log(name, email, password);
            try{
                await Users.destroy({
                    where: {
                        email: email,
                        password: password
                    }
                });
                return "삭제 성공";
            } catch(err) {
                console.error(err);
            }
        }
    },
};

module.exports = resolvers;