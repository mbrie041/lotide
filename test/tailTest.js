const assert = require('chai').assert;
const tail = require('../tail');

describe("#Tail", () => {
  it("It returns '[Labs]' for '[Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), 'Labs');
  });

  it("It returns '[Lighthouse]' for '[Yo Yo', 'Lighthouse']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse']), 'Lighthouse');
  });

});