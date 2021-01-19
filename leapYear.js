function isLeapyear(year){ 
let remainder = year % 4;
if (remainder ==0){
   return true;
}
else{
    return false;   
}
}
const cheak2000 = isLeapyear(1700);
console.log(cheak2000);