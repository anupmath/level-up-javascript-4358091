// Create a user object where username and password fields are private using Symbol
// Write your code here
const username = Symbol('username');
const password = Symbol('password');

const user = {
  [username]: 'a',
  [password]: 'abcd',
  age: 20
}

console.log(user.username);
console.log(user.password);
console.log(user.age);