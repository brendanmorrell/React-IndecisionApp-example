class Person {
  constructor(name='Anonymous', location='Unknown') {
    this.name = name;
    this.location = location;
  }
  getGreeting() {
    return `Hi, ${this.name}! I hope you like ${this.location}. `;
  }
  getDescriptionPerson() {
    return `${this.name} is from ${this.location}`
  }
}

const me = new Person('Brendan Morrell')
console.log(me.getGreeting())
const other = new Person()
console.log(other.getGreeting())



class Animal {
  constructor(species="unknown species", age="unknown age") {
    this.species = species;
    this.age = age;
  }
  getDescription() {
    return `${this.species} is ${this.age} year(s) old`;
  };
}

const donkey = new Animal('donkey', 95);
console.log(donkey.getDescription())




class Student extends Person {
  constructor(name, location, major) {
    super(name, location);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescriptionPerson() {
    let description = super.getDescriptionPerson();
    if (this.hasMajor()) {
      return description += ` His/her major is ${this.major}.`;
    }
    return description += ` His/her major has yet to be determined.`;
  }
}

const student = new Student('Thomas', 'Pittsburgh', 'Computer Science')
const student2 = new Student('Yobias', "NY")
console.log(student.getGreeting());
console.log(student.hasMajor());
console.log(student2.hasMajor());
console.log(me.getDescriptionPerson());
console.log(student.getDescriptionPerson());
console.log(student2.getDescriptionPerson());




class Traveler extends Person {
  constructor(name, location, homeLocation) {
    super(name, location);
    this.homeLocation = homeLocation;
  }
/*  hasHomeLocation() {
    return (!!this.homeLocation);
  }*/
  getGreeting() {
    let homeLocationGreeting = super.getGreeting();
    if(this.homeLocation/*this.hasHomeLocation()*/) {
      return homeLocationGreeting += `Is it better than ${this.homeLocation}?`;
    }
    return homeLocationGreeting += `It's quite odd that you have no home. What's the deal?`
  }
}

const waywayrdTraveler = new Traveler('Weirdo', 'Columbia');
const normalTraveler = new Traveler('James', 'Philly', 'The Rogue Valley');

console.log("*********CHALLENGE**********")
console.log(normalTraveler.getGreeting());
console.log(waywayrdTraveler.getGreeting());
