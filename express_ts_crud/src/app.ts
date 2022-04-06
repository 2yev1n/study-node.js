import express, { Request, Response, NextFunction } from 'express';
import { Post } from './models/post';
import morgan from "morgan";
import path from 'path';
import * as dotenv from "dotenv";
import router from './routes/post';

const app = express();
const PORT = 3000;

dotenv.config({ path: path.join(__dirname, "../env") });
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("welcome!");
});

app.use("/", router)

Post.sync({ force: false })    // force가 true면 원래 있던 테이블 drop후 생성
    .then(() => {
        console.log("database 연결 & table 생성 성공");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(PORT + '번 포트에서 대기 중');
});