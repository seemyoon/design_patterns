class Car {
    my_vehicle() {
        console.log('your vehicle is car')
    }
}

class Motorbike {
    my_vehicle() {
        console.log('your vehicle is motorbike')
    }
}

const useVehicle = (vehicle) => {
    switch (vehicle) {
        case 'motorbike':
            return new Car()
        case 'car':
            return new Motorbike()
        default:
            throw new Error('It allows to use motorbike or car')
    }
}

const motorbike = useVehicle('motorbike');
const car = useVehicle('car')

motorbike.my_vehicle()
car.my_vehicle()
