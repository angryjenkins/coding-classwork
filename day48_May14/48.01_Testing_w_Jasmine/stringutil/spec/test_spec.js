var stringUtil = require("../stringMan.js");

describe("stringUtil", function() {
 describe("firstWord", function() {
   it("should return the first word of a string", function () {
     expect(stringUtil.firstWord("one two")).toBe("one");
     expect(stringUtil.firstWord("one two three four")).toBe("one");
   });
 });

 describe("nthWord", function() {
   it("should return the nth word of a string", function () {
     expect(stringUtil.nthWord("one two", 1)).toBe("one");
     expect(stringUtil.nthWord("one two", 2)).toBe("two");
     expect(stringUtil.nthWord("one two three", 3)).toBe("three");
   });
 });
});