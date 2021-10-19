const express = require("express");
const app = express();
const { sequelize } = require("./models");
const PORT = process.env.PORT || 8080;
const router = require("./routes/create");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use("/", router);

sequelize.sync({ force: false })
    .then(() => {
        console.log("database 연결 성공");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(PORT , "번 포트에서 대기 중");
});