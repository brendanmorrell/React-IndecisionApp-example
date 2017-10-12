const square = function (x) {
  return x * x;
};

console.log(square(8))


const squareArrow = (x) => {
  return x * x;
};

const quickSquareArrow = (x) => x * x;

console.log(squareArrow(9))

console.log(quickSquareArrow(10))

//arguments object no longer bound
const add = function (a,b) {
  console.log(arguments);//can't do this
  return a+b;
};
console.log(add(40,55))
//this keyword no longer bound

/*const user = {
  name: 'bren',
  cities: ['philly', 'ny', 'taipei'],
  printPlacesLived: function (){
    console.log(this.name);
    console.log(this.cities);
    const that = this//only way to workaround the binding of this in regular functions
    this.cities.forEach(function (city){
      console.log(that.name +' has lived in '+ city)
    });
  }
}

user.printPlacesLived()*/

//with arrow functions, 'this' is just bound to whatever its parent function's this would be, so it chains backward and you don't need the workaround

const user2 = {
  name: 'bren2',
  cities: ['philly2', 'ny2', 'taipei2'],
  printPlacesLivedArrow: function (){
    console.log(this.name);
    console.log(this.cities);
    //don't need the 'that=this'
    this.cities.forEach( (city) =>{
      console.log(this.name +' has lived in '+ city)
    });
  }
}

user2.printPlacesLivedArrow()


//if you use the old function method, you can now leave the word 'function' out of the actual function and just put the parens with the arguments directly after the name
const user = {
  name: 'bren',
  cities: ['philly', 'ny', 'taipei'],
  printPlacesLived(){
    console.log(this.name);
    console.log(this.cities);
    const that = this//only way to workaround the binding of this in regular functions
    this.cities.forEach(function (city){
      console.log(that.name +' has lived in '+ city)
    });
  }
}

user.printPlacesLived()

const tools = {
  name: 'bren',
  tool: ['hammer', 'saw', 'chisel'],
  printTools() {
    return this.tool.map((eachTool) => this.name+" has used a "+eachTool);
    return toolMessages;
  }
}

console.log(tools.printTools());


//challenge area

const multiplier = {
  numbers: [12, 24, 6, 7],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((eachNumber) => `${eachNumber} times ${this.multiplyBy} equals ${this.multiplyBy*eachNumber}`);
  }
}

console.log(multiplier.multiply())
