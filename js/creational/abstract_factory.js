class Animal {
    speak() {
    }
}

class AnimalSound {
    makeSound() {
    }
}

class Cat extends Animal {
    speak() {
        console.log("i'm cat")
    }
}

class Meow extends AnimalSound {
    makeSound() {
        console.log('meow')
    }
}

class Dog extends Animal {
    speak() {
        console.log("i'm dog")
    }
}

class Bark extends AnimalSound {
    makeSound() {
        console.log("Woof!")
    }
}

class AnimalFactory {
    createAnimal() {
    }

    createSound() {
    }
}

class CatFactory extends AnimalFactory {
    createAnimal() {
        return new Cat()
    }

    createSound() {
        return new Meow()
    }
}


class DogFactory extends AnimalFactory {

    createAnimal() {
        return new Dog()
    }

    createSound() {
        return new Bark()
    }
}

const client = (factory) => {
    const animal = factory.createAnimal()
    const sound = factory.createSound()

    animal.speak()
    sound.makeSound()
}
client(new DogFactory())
client(new CatFactory())