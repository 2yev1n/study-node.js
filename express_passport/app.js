const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT||8080;

const { sequelize } = require("./models");

require("dotenv").config();

const auth = require("./routes/auth");
const post = require("./routes/post");
const page = require("./routes/page");
const user = require("./routes/user");

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'public')));
app.use("/img", express.static(path.join(__dirname, 'uploads')));
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

app.use("/page", page);
app.use("/post", post);
app.use("/auth", auth);
app.use("/user", user);


app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 494;
    next(error);
})


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