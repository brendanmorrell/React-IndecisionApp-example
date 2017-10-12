//var allows you to create identical variables that write over each other, which could be unintentional and cause problems
console.log('Hi')
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


//let can reassign variable values, but you can't create a duplicate that writes over another existing variable
let nameLet ='Jen'
nameLet = 'Julie'

//invalid
//let nameLet='tim'
console.log('nameLet', nameLet)


const nameConst = "Frank"
//invalid
//const nameConst ='tim'


//invalid
//nameConst ='tim'
console.log("nameConst", nameConst)




function getPetName() {
  var petName = "Scruffs"
  return petName
}

var fullName = 'Andrew Mead';
if (fullName) {
  var firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)

var fullName = 'Jen Mead';
if (fullName) {
  const constFirstName = fullName.split(' ')[0]
  console.log(constFirstName)
}
//doesn't work
console.log(constFirstName)
