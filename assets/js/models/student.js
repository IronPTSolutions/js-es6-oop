class Student extends Person {

  constructor(name, lastName, age, subjects = []) {
    super(name, lastName, age);
    this.subjects = subjects;
  }

  addSubject(name, note) {
    this.subjects.push({
      name: name,
      note: note
    })
  }

  getCourseAvg() {
    const sum = this.subjects.reduce((acc, subject) => acc + subject.note, 0);
    return sum / this.subjects.length;
  }

  greet() {
    return `${super.greet()} and I'm a student`;
  }
}
