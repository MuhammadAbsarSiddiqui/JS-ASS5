// ******Q1******
function greetUser(username)
{
    
    return username+" welcome to my page you are visiting this example. We are thrilled to have you on board.";
}
var name =prompt("enter your name");
alert(greetUser(name));


// ******Q2******
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  let number = prompt("Enter a positive integer:");
  if (Number(number) && number > 0) {
    if (isPrime(number)) {
      console.log('It is a prime number.');
    } else {
      console.log('It is not a prime number.');
    }
  }
  

