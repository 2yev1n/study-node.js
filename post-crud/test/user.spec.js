const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const expect = chai.expect;
chai.use(chaiHttp);

describe("User spec Test", () => {
    it("POST user/ (409)", (done) => {
        chai
            .request(app)
            .post("/user")
            .send({
                name: "이름",
                email: "이메일",
                password: "비밀번호",
            })
            .end((err, res) => {
                expect(res).to.have.status(409);
                done();
            });
    });

    it("POST user/login (200)", (done) => {
        chai
            .request(app)
            .post("/user/login")
            .send({
                email: "이메일",
                password: "비밀번호"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("POST user/login 1 (401)", (done) => {
        chai
            .request(app)
            .post("/user/login")
            .send({
                email: "이메일",
                password: "password"
            })
            .end((err, res) => {
                expect(res).to.have.status(401);
                done();
            });
    });

    it("POST user/login 2 (401)", (done) => {
        chai
            .request(app)
            .post("/user/login")
            .send({
                email: "email",
                password: "비밀번호"
            })
            .end((err, res) => {
                expect(res).to.have.status(401);
                done();
            });
    });
});