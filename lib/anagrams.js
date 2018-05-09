const anagrams = (str)=> {
    var result = [];
//    if(!str){
//        return result;
//    }

//    if(str.length===1){
//        return[str]
//    }

//    if(str.length===2){
//        return[str]
//    }

//    result.push(str);
//for(var i=0;i<str.length;i++){
//    for(var j=0;j<2;j++){
//        result.push(str[i]+anagram(drop(str,i))[i]);
//    }
//}

//result.push(str[0]+anagram(drop(str,1))[0]);
//result.push(str[1]+anagram(drop(str,1))[1]);

//result.push(str[0]+anagram(drop(str,2))[0]);
//result.push(str[1]+anagram(drop(str,2))[1]);

    return result;
}

function drop(str,n){
    var result = ""
    for(var i=0;i<str.length;i++){
        if(i===n){
            continue
        }
        result +=str[i]
    }
}

module.exports = anagrams