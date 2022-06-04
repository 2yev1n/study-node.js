const graphqlHTTP = require("express-graphql").graphqlHTTP;
const express = require("express");
const schema = require("./models/schema");

const app = express();
const PORT = process.env.PORT || 3000;

app.set(express.urlencoded({ extended : true }));
app.set(express.json());


app.use("/graphql", graphqlHTTP({
    schema: schema.schema,
    rootValue: schema.root,
    graphiql: true,
}));


app.listen(PORT, () => {
    console.log(PORT, "번 포트에서 대기 중");
});