const express = require("express");
const app = express();
const router = require("./routes");
const { sequelize } = require("./models");
const PORT = process.env.PORT || 3000;


require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use("/", router);

sequelize.sync({ force : false })
    .then(() => {
        console.log("database 연결 성공")
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(PORT, "번 포트에서 대기중")
})