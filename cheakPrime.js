function isPrime(n) {
    var n = 139;
 for( i = 2; i <n; i++) {
     if ( n % i == 0) {
         return 'Not a prime Number';
     }
 }
 return 'Your number is a prime number';
}
var result = isPrime(139);
console.log(result);
