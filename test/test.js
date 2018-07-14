
const expect = require('chai').expect
const Conversor = require('..').default
describe('#conversor', function () {
  it('5 kilogramos son 10 libras', function() {
    const conversion = convertidorkilo(5)
    expect(conversion).to.equal(10)
  })


})
