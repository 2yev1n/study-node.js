const express = require("express");     // express 모듈 사용
const app = express();
const router = require("./routes");     // router 불러오기
const { sequelize } = require("./models");      // model
const PORT = process.env.PORT || 3000;      // port 정하기

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));       // extended는 중첩된 객체표현을 허용할지 말지를 정하는 것


app.use("/", router);   // router 사용하기 위함

app.set("jwt-secret", process.env.JWT_KEY);
app.set("refresh-secret", process.env.REFRESH_KEY);

sequelize.sync({ force: false })    // force가 true면 원래 있던 테이블 drop후 생성
    .then(() => {
        console.log("database 연결 성공");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(PORT , "번 포트에서 대기 중");
});