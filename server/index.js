const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build"))); // path 모듈 사용 (server & client folder를 join으로 합쳐주기), build 폴더명까지 작성 주의! (여기엔 파일명 작성 X)
app.use(express.json()); // [body-parser] client에서 보내는 body 명령어 추적 가능해짐!
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", require("./Router/user.js"));

// https://localhost:4000/ 으로 빌드한 client 파일 연결
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// 모든 path로도 빌드한 client 파일 연결되도록 설정
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app;
