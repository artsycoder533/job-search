const fruits = ["Apple", "Banana", "Orange"];
const vegetables = ["Cucumber", "Radish"];

console.log([...fruits, ...vegetables]);

const developer = {
  salary: 100000,
  lookingForWork: true,
  techStack: ["Vue", "Next", "React"],
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  }
}

console.log(developer.salary);
console.log(developer.lookingForWork);

developer.doubleSalary();

console.log(developer.salary);
console.log(developer.lookingForWork);