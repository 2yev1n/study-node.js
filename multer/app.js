const express = require("express");
const app = express();
const router = require("./routes");
const fs = require("fs");
const PORT = process.env.PORT || 8000;

app.use("/", router);

app.listen(PORT, () => {
    console.log(PORT, " 번 포트에서 대기 중");
})