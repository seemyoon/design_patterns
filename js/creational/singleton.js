class User {
    constructor(name, age) {
        if (User.instance) return User.instance

        this.name = name
        this.age = age

        User.instance = this
    }
}

const user_1 = new User('Oleksandr', 24)
const user_2 = new User('Sasha', 22)

console.log(user_1)
console.log(user_2)

console.log(user_1 === user_2)