class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.performance = ['project1'];
    }
    perform(tmp) {
        this.performance.push(tmp)
    }

    work(tmp1, tmp2) {
        this.performance.splice(0, 0, tmp1, tmp2) //splice: 앞에 집어 넣겠다.
    }
}
class Employee extends Person {
    constructor(name, age, addres, position) {
        super(name, age, addres)
        this.estimate = []
        this.position = position
    }
    perform(tmp) {
        this.performance.push(tmp)
    }
    work(tmp) {
        this.performance.push(tmp)
    }
}
const person = new Person('John', 35, "서울시")
const john = new Employee('John', 36, "Seoul", "develpoer")
john.name = "Peter"
console.log(john.name)