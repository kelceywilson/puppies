const chai = require('chai');
var db = require('./queries');
// const { db, pgp } = require('../db/db_connection');
// const { addUser, checkUser } = require('../db/db_utilities.js');
// const { initDB, seedUsername, seedPassword } = require('./db/db_test_utils.js');

const expect = chai.expect;

// NOTE THAT all the returns are needed when synchronicity is needed and {} are used
// you can eliminate the returns by eliminating the brackets
// describe('addUser() when user does not exist', () => {
//   const email = 'new@new';
//   const pass = 'new';
//   let addPromise;
//   before('reset the database', () => { // when using curlies, need to return to make synchro
//     return addPromise = initDB()
//       .then(() => addUser(email, pass))
//       .then(id => db.one('SELECT * FROM users WHERE user_id = $1', id));
//   });
//   it('adds user when user does not exist', () =>  // no brackets, return is implicit ^ synchro
//     addPromise.then(user =>
//       expect(user.email).to.equal(email)  // expect is synchro
//     )
//   )
//   it('adds user when user does not exist', () =>
//     addPromise.then(user =>
//       expect(user.password).to.equal(pass)
//     )
//   )
// });
//
// const chaiAsPromised = require('chai-as-promised');
//
// chai.use(chaiAsPromised);
//
// describe('addUser when user does exist', () => {
//   beforeEach('initialize db', () => initDB());
//   it('throws an error when user does exist', () =>
//     expect(addUser(seedUsername, seedPassword))
//       .to.eventually.be
//       .rejectedWith(`User ${seedUsername} already exists`));
// });
//
// describe('checkUser', () => {
//   beforeEach('initialize db', () => initDB());
//   it('returns true when user and pass exist', () => {
//     return expect(checkUser(seedUsername, seedPassword)).to.eventually.equal(true);
//   });
//   it('returns false when user exists and password is wrong', () => {
//     return expect(checkUser(seedUsername, 'boogers')).to.eventually.equal(false);
//   });
//   it('returns true when user does not exist', () => {
//     return expect(checkUser('bob@bob.com', seedPassword)).to.eventually.equal(false);
//   });
// });
