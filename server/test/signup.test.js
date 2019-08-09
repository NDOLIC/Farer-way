import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const should = chai.should();
chai.use(chaiHttp);

describe('Signup', () => {
    it('POST /api/v1/auth/signup should creat new account', (done) => {
        const user = {
            first_name:'Umwiza',
            last_name:'Aline',
            email:'umwaline@gmail.com',
            password:'456',
        };
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.first_name.should.match(/Umwiza/);
                done();
            });
    });
});
