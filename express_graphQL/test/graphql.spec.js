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
    
    it('Returns users', (done) => {
        chai
            .request(app)
            .post("/graphql")
            .send({
                query: '{ users { id name email } }'
            })
            .end((err, res) => {
                if(err) return done(err);
                expect(res.body.data.users)
                    .to.have.lengthOf(2)
                    done();
            })
    });

    it('Returns user with id = 1', (done) => {
        chai
            .request(app)
            .post("/graphql")
            .send({
                query: '{ user(id : 1) { id name email } }'
            })
            .end((err, res) => {
                if(err) return done(err);
                expect(res.body.data.user)
                    .to.have.keys('id', 'name', 'email')
                    done();
            })
    });
});