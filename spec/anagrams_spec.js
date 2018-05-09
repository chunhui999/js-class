const anagrams = require("../lib/anagrams")

describe("anagrams", ()=> {

    it("should return [] when input is empty string", ()=> {
        expect(anagrams()).toEqual([])
    })
    it("should return [a] when input is a", ()=> {
       expect(anagrams("a")).toEqual(["a"])
    })
    it("should return [ab,ba] when input is ab", ()=> {
        expect(anagrams("ab")).toEqual(["a"])
    })
    it("should return 6 elements when input is abc", ()=> {
        expect(anagrams("abc")).toEqual(["abc","bac","cab","cba","acb","bca"])
    })
})