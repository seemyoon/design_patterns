// Realization
class Device {
    turnOn() {
    }

    turnOff() {
    }
}

// Abstraction
class RemoteControl {
    constructor(device) {
        this.device = device
    }

    pressOn() {
        this.device.turnOn()
    }

    pressOff() {
        this.device.turnOff()
    }
}

class TV extends Device {
    turnOn() {
        console.log('TV turned ON')
    }

    turnOff() {
        console.log('TV turned OFF')
    }
}


class Radio extends Device {

    turnOn() {
        console.log('Radio turned ON')
    }

    turnOff() {
        console.log('Radio turned OFF')
    }
}

class Fridge extends Device {

    turnOn() {
        console.log('radio turned ON');
    }

    turnOff() {
        console.log('radio turned OFF')
    }
}

const tvRemote = new RemoteControl(new TV())
const radio = new RemoteControl(new Radio())

tvRemote.pressOff()
radio.pressOn()