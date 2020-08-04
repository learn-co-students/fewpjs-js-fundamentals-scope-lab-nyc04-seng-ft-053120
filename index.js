let animal = "cat" //global scope

function myAnimal() {
  let animal = "dog" //function scope
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal //looks at gobal scope
}

function add2(n) {
  const two = 2
  return n + two

}



