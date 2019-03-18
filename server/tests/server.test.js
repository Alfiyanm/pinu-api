const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Name} = require('./../models/name');

beforeEach((done) => {
    Name.remove({}).then(() => done());
});

describe('POST /nama', () => {
    it('should create new nama', (done) => {
        var nama = 'Muchlas';

        request(app)
            .post('/nama')
            .send({nama})
            .expect(200)
            .expect((res) => {
                expect(res.body.nama).toBe(nama);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Name.find().then((nama) => {
                    expect(nama.length).toBe(1);
                    expect(nama[0].nama).toBe(nama);
                    done();
                }).catch((e) => done(e));
            });
    });
});