class Person {
  
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

  greet() {
    return `Hi! I'm ${this.getFullName()}`
  }
  
}
