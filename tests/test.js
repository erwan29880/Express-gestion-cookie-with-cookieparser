const assert = require('assert').strict;
const sessionTest = require('../middlewares/session');

describe("test création chaîne aléatoire", () => {
    it("should have 64 chars", () => {
        st = sessionTest.getCrypto();
        st2 = sessionTest.getCrypto();
        assert.strictEqual(64, st.length);
        assert.notStrictEqual(st, st2);
    })
})