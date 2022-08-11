const express = require("express");
const bodyParser = require("body-parser");   // request, req.body를 파싱하는 미들웨어
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");

require("dotenv").config({ path: "../.env"});

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: "http://localhost:8080"
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("jwt-secret", process.env.JWTKEY);

app.use("/", router);

db = require("./models/index");
    db.mongoose.connect(process.env.URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true, 
            // useFindAndModify: false,
        }).then(() => {
            console.log('MongoDB 연결 성공')})
        .catch((err) => {
            console.error(err);
        });
        require("./models");


app.listen(PORT, () => {
    console.log(PORT, '번 포트에서 대기 중');
});