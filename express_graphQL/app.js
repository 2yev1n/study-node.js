const graphqlHTTP = require("express-graphql").graphqlHTTP;
const express = require("express");
const schema = require("./graphql/schema");
const resolvers  = require("./resolvers/resolvers");
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

app.set(express.urlencoded({ extended : true }));
app.set(express.json());


app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: {...resolvers.Query, ...resolvers.Mutation},
    graphiql: true,
}));

sequelize.sync({ force : false })
    .then(() => {
        console.log("database 연결 성공");
    })
    .catch((err) => {
        console.error(err);
    })

app.listen(PORT, () => {
    console.log(PORT, "번 포트에서 대기 중");
});