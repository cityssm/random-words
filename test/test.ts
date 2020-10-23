import * as assert from "assert";
import { getRandomWord } from "../index";

describe("random-words", function() {

  it("should return one word", function() {

    const word = getRandomWord();

    assert.ok(typeof (word) === "string", "word is a string");
    assert.ok(word.length, "word is not empty");
    assert.ok(!word.includes(" "), "word does not contain spaces");
  });
});
