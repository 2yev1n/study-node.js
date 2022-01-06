const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = requrire("path");
const session = requrie("express-session");
const passport = require("passport");
const passportConfig = require("./passport");
const router = require("./routes");
const PORT = process.env.PORT||8080;

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use(session({ secret: process.env.SESSION, resave: true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

passportConfig();

app.use("/", router);

const { sequelize } = require("./models");

sequelize.sync({ force: false })
    .then(() => {
        console.log("데이터베이스 연결 성공");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(PORT , "번 포트에서 대기 중");
});