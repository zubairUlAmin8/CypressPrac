var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert
describe('chaian and mocha test', () => {
    let name='zubair'

    it('should', () => {
        name.should.equal('zubair')
        name.should.have.lengthOf(6)
    })
    it('expect', () => {
        expect(name).to.equal('zubair')
    })
    it('assert', () => {
        assert.equal(name, "zubair")
    })
})