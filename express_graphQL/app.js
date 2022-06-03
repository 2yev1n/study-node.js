const graphqlHTTP = require("express-graphql").graphqlHTTP;
const express = require("express");
const schema = require("./models/schema");

const app = express();
const PORT = process.env.PORT || 3000;

var root = {
    hello: () => {
        return 'Hello world!';
    },
};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


app.listen(PORT, () => {
    console.log(PORT, "번 포트에서 대기 중");
});