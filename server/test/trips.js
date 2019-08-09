import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const should = chai.should();
chai.use(chaiHttp);

describe('Trip', () => {
    it('POST /api/v1/trips should creat new trip', (done) => {
        const trip = {
            id:1,
            seating_capacity:21,
            bus_license_number:'RAD21D',
            origin:'Kigali',
            destination:'Kampala',
            trip_date:'12/08/2018',
            fare:​2000,
        };
        chai.request(app)
            .post('/api/v1/trips')
            .send(trips)
            .end((err, res) => {
                res.should.have.status(201);
                // res.body.bus_license_number.should.match(/RAD21D/);
                res.body.should.include.keys('bus_license_number');
                res.body.status.should.be.a('string')
                res.body.status.should.eql('RAD21D')
                done();
            });
    });
});