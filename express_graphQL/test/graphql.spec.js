const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../app");
const expect = chai.expect;
chai.use(chaiHttp);

describe('GraphQL', () => {
    it('Returns Hello world!', (done) => {
        chai
            .request(app)
            .post("/graphql")
            .send({
                query: '{ hello }'
            })
            .end((err, res) => {
                expect(res.body.data.hello)
                    .to.have.include("Hello world!")
                    done();
            });
    });
});