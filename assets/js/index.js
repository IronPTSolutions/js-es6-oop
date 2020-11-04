let person = new Person('Pedro', 'García', 30);
console.log(person);
console.log(`Type of ${person.name} is:`, person.constructor.name);
console.log(`${person.name} is instance of Person:`, person instanceof Person);
console.log(`${person.name} is instance of Student:`, person instanceof Student);
console.log(`${person.name} is instance of Teacher:`, person instanceof Teacher);
console.log(person.greet());


let student = new Student('Juan', 'Pérez', 30);
student.addSubject('maths', 8);
student.addSubject('history', 6);
student.addSubject('natural science', 2);

console.log(student);
console.log(`Type of ${student.name} is:`, student.constructor.name);
console.log(`${person.name} is instance of Person:`, student instanceof Person);
console.log(`${person.name} is instance of Student:`, student instanceof Student);
console.log(`${person.name} is instance of Teacher:`, student instanceof Teacher);
console.log(student.getFullName());
console.log(student.greet());
console.log(student.getCourseAvg());


let teacher = new Teacher('Pepito', 'Pérez', 30, ['maths', 'history']);
teacher.addSkill('natural science');

console.log(teacher);
console.log(`Type of ${teacher.name} is:`, teacher.constructor.name);
console.log(`${person.name} is instance of Person:`, teacher instanceof Person);
console.log(`${person.name} is instance of Student:`, teacher instanceof Student);
console.log(`${person.name} is instance of Teacher:`, teacher instanceof Teacher);
console.log(teacher.getFullName());
console.log(teacher.greet());
console.log(`Knowns about maths:`, teacher.knownsAbout('maths'));
console.log(`Knowns about language:`,teacher.knownsAbout('language'));


