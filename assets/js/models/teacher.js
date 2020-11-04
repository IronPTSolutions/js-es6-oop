class Teacher extends Person {

  constructor(name, lastName, age, skills) {
    super(name, lastName, age);
    this.skills = skills;
  }

  greet() {
    return `${super.greet()} and I'm a teacher`
  }

  addSkill(skill) {
    this.skills.push(skill)
  }

  knownsAbout(skill) {
    return this.skills.some((s) => s === skill);
  }

}
