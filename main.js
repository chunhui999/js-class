const fibonacci = require('./lib/fibonacci')
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

var len = 20;
for(;len--;){
    console.log(fibonacci(len));
}
for(i=0;i<10;i++){
    console.log(fibonacci(i));
}


console.log("hello world");

function isLeaapYear(n){
    if(n%400==0){
        return true
    }
    else if ((n%100!=0) && (n%4==0))
    {
        return true
    }
    else{
        return false
    }
}

console.log("2000:"+isLeaapYear(2000));
console.log("1900:"+isLeaapYear(1900));
console.log("2004:"+isLeaapYear(2004));
console.log("2003:"+isLeaapYear(2003));

//const anagrams = require("../lib/anagrams")
//console.log("null:"+anagrams());
//console.log("a:"+anagrams("a"));