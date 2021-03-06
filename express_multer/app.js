const app = require("express")();
const router = require("./routes/index");
const fs = require("fs");

const PORT = process.env.PORT || 8000;

require("dotenv").config();

app.use("/", router);

app.listen(PORT, () => {
    console.log(PORT, " 번 포트에서 대기 중");
});