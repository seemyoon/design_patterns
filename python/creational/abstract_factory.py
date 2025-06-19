class Animal:
    def speak(self):
        pass


class Sound:
    def make_sound(self):
        pass


class Dog(Animal):
    def speak(self):
        print("i'm dog")


class Bark(Sound):
    def make_sound(self):
        print('Woof!')


class Cat(Animal):
    def speak(self):
        print("i'm cat")


class Meow(Sound):
    def make_sound(self):
        print('meow')


class AnimalFactory:
    def createAnimal(self):
        pass

    def createSound(self):
        pass


class DogFactory(AnimalFactory):
    def createAnimal(self):
        return Dog()

    def createSound(self):
        return Bark()


class CatFactory(AnimalFactory):
    def createAnimal(self):
        return Cat()

    def createSound(self):
        return Meow()


def client(factory: AnimalFactory):
    animal = factory.createAnimal()
    sound = factory.createSound()

    animal.speak()
    sound.make_sound()

client(CatFactory())
client(DogFactory())
