class Car:
    @staticmethod
    def my_vehicle():
        print('your vehicle is car')


class Motorbike:
    @staticmethod
    def my_vehicle():
        print('your vehicle is motorbike')


def use_vehicle(vehicle):
    match vehicle:
        case 'motorbike':
            return Motorbike()
        case 'car':
            return Car()
        case _:
            raise ValueError('Only motorbike or car are allowed')

motorbike = use_vehicle('motorbike')
car = use_vehicle('car')

motorbike.my_vehicle()
car.my_vehicle()