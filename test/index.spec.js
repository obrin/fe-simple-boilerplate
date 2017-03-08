const expect = require('chai').expect
const jsdom = require("jsdom").jsdom;
const doc = jsdom(undefined, {});
global.window = doc.defaultView;

require('./../index.js')

describe('#hello', () => {
  it('returns hello world', () => {
    expect(window.hello()).to.equal('hello world')
  })
})
