// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../app';

// const should = chai.should();
// chai.use(chaiHttp);

// describe('Signin', () => {
//     it('POST /api/v1/auth/signin should login into account', (done) => {
//         const user = {
//             email:'umwaline@gmail.com',
//             password:'456',
//         };
//         chai.request(app)
//             .post('/api/v1/auth/signin')
//             .send(user)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.first_name.should.match(/umurisa/);
//                 done();
//             });
//     });
// });
