function checkYuGiOh (n){
    if(!Number(n)){
      return console.log(`invalid parameter "${n}`);
     }
    else{
       var arr = [];
     for(var i=1; i<= n; i++) {
     if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
       arr.push("yu-gi-oh");
     }
     else if(i % 2 === 0 && i % 3 === 0 ){
       arr.push("yu-gi");
     }
     else if(i % 2 === 0 &&  i % 5 === 0){
       arr.push("yu-oh");
     }
     else if(i % 3 === 0 && i % 5 === 0){
       arr.push("gi-oh");
     }
     else if(i % 2 === 0 ){
       arr.push("yu");
     }
     else if( i % 3 === 0 ){
       arr.push("gi");
     }
     else if( i % 5 === 0){
       arr.push("oh");
     }
     else {arr.push(i)}
     }
   return arr;
    }
 }
 
 console.log(checkYuGiOh(10));
 console.log(checkYuGiOh(5));
 console.log(checkYuGiOh("fizzbuzz is meh"));
 console.log(checkYuGiOh(40));