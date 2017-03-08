const expect = require('chai').expect
const jsdom = require("jsdom").jsdom;
const fs = require('fs')
const html = fs.readFileSync('./index.html', 'utf8')

global.document = jsdom(html, {});
global.window = document.defaultView;
require('./../index.js')

describe('#hello', () => {
  it('returns hello world', () => {
    expect(window.hello()).to.equal('hello world')
  })
})
