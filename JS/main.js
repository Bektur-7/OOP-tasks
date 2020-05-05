//task 1

class Worker {
    constructor(name, surname, rate, days) {
    this.name = name
    this.surname = surname
    this.rate = rate
    this.days = days


    }

    getSalary(){
        console.log(`Зарплата ${this.name} ${this.surname} равна ${this.rate*this.days}`)
    }

}

let worker1 = new Worker ('Chris', 'Hemsworth', 100, 20)
let worker2 = new Worker ('Chris', 'Evans', 100, 31)

console.log(worker1.name)
console.log(worker1.surname)
console.log(worker1.rate)
console.log(worker1.days)
worker2.getSalary()





// task 2

class Worker {
    constructor(name, surname, rate, days) {
    this._name = name
    this._surname = surname
    this._rate = rate
    this._days = days


    }

    get name() {
        return this._name

    }

    get surname() {
        return this._surname

    }
    get rate() {
        return this._rate

    }
    get days() {
        return this._days

    }



    getSalary(){
        console.log(`Зарплата ${this.name} ${this.surname} равна ${this.rate*this.days}`)
    }

}

let worker1 = new Worker ('Chris', 'Hemsworth', 100, 31)

console.log(worker1.name)
console.log(worker1.surname)
console.log(worker1.rate)
console.log(worker1.days)
worker1.getSalary()




// task 3


class Worker {
    constructor(name, surname, rate, days) {
    this._name = name
    this._surname = surname
    this._rate = rate
    this._days = days


    }

  

    set rate(value){
        this._rate = value 
        
    }
    get rate() {
        return this._rate

    }

    set days(value){
        this._days = value 
        
        

    }
    get days() {
        return this._days

    }

   



    getSalary(){
        console.log(`Зарплата ${this.name} ${this.surname} равна ${this.rate * this.days}`)
    }

}

let worker1 = new Worker ('Chris', 'Hemsworth', 100, 31)

worker1.rate = 50
worker1.days = 20

worker1.getSalary()


]