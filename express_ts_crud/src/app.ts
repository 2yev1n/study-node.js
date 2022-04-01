import express, { Request, Response, NextFunction } from 'express';
import { sequelize } from './config/config';
const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("welcome!");
});

sequelize.sync({ force: false })    // force가 true면 원래 있던 테이블 drop후 생성
    .then(() => {
        console.log("database 연결 성공");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(PORT + '번 포트에서 대기 중');
});