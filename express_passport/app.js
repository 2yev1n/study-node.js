const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");
const cookieParser = require("cookie-parser");
const router = require("./routes/index");
const PORT = process.env.PORT||8080;

require("dotenv").config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use(cookieParser(process.env.COOKIE_ID));
app.use(
    session({
        secret: process.env.COOKIE_ID, 
        resave: false, 
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

const { sequelize } = require("./models");

sequelize.sync({ force: false })
    .then(() => {
        console.log("데이터베이스 연결 성공");
    })
    .catch((err) => {
        console.error(err);
    });
    passportConfig();

app.listen(PORT, () => {
    console.log(PORT , "번 포트에서 대기 중");
});