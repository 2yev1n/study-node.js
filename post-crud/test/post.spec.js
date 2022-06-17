const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const expect = chai.expect;
chai.use(chaiHttp);

let token;

describe("Post spec Test", () => {
    before((done) => {
        chai
            .request(app)
            .post("/user/login")
            .send({
                email: "이메일",
                password: "비밀번호"
            })
            .end((err, res) => {
                token = res.body.accessToken
                done();
            })
    })
    it("POST post/ (200)", (done) => {
        chai
            .request(app)
            .post("/post")
            .set("access-token", token)
            .send({
                title: "제목이지롱",
                content: "내용이지롱",
                filed: "주제",
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("GET post/ (200)", (done) => {
        chai
            .request(app)
            .get("/post")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    });

    before((done) => {
        chai
            .request(app)
            .post("/user/login")
            .send({
                email: "이메일",
                password: "비밀번호"
            })
            .end((err, res) => {
                token = res.body.accessToken
                done();
            })
    })
    it("GET post/mypage (200)", (done) => {
        chai
            .request(app)
            .get("/post/mypage")
            .set("access-token", token)
            
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    
});