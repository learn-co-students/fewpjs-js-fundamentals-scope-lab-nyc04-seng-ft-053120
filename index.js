let animal = "cat"

function myAnimal() {
  let animal = "dog"
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two

}


// 3) Fix the Scope add2(n) adds two to n:
// ReferenceError: two is not defined
//  at Window.add2 (file://index.html:17:14)
//  at Context.<anonymous> (test/index-test.js:21:21)

