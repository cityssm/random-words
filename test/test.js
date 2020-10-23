"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const index_1 = require("../index");
describe("random-words", function () {
    it("should return one word", function () {
        const word = index_1.getRandomWord();
        assert.ok(typeof (word) === "string", "word is a string");
        assert.ok(word.length, "word is not empty");
        assert.ok(!word.includes(" "), "word does not contain spaces");
    });
});
