const animal = "" //could have put dog here

function myAnimal() {
  const animal = "dog" //could have put nothing here because dog would have been defined above
  return animal
}

function yourAnimal() {
  let animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
 // two = 2
}