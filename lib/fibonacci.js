const fibonacci = (n)=> {
    if(n>2){
 //   if(n==3){
 //       return 1+1;
 //   }
        return fibonacci(n-2)+fibonacci(n-1);
    }
    else {
//    if(n==1||n==2)
//    {
        return 1;
//    }  
    }
}

module.exports = fibonacci