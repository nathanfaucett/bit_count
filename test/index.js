var tape = require("tape"),
    bitCount = require("..");


tape("bitCount(value: Number)", function(assert) {
    assert.equal(bitCount(1), 1);
    assert.equal(bitCount(3), 2);
    assert.equal(bitCount(Math.pow(2, 16) - 1), 16);
    assert.equal(bitCount(Math.pow(2, 53) - 1), 32);
    assert.end();
});
