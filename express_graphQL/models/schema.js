const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query{ 
        hello: String,
        world: String,
    }
`);

const root = {
    hello: () => {
        return 'Hello world!';
    },
    world: () => {
        return '이건 조크';
    },
};

module.exports = { schema, root };