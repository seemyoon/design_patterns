# Realization
class Device:
    def turn_on(self):
        pass

    def turn_off(self):
        pass


class TV(Device):

    def turn_off(self):
        print('TV turned OFF')

    def turn_on(self):
        print('TV turned ON')


class Radio(Device):
    def turn_on(self):
        print('Radio turned on')

    def turn_off(self):
        print('Radio turned off')


# Abstraction
class RemoteControl:
    def __init__(self, device):
        self.device = device

    def press_on(self):
        self.device.turn_on()

    def press_off(self):
        self.device.turn_off()


tv_remote = RemoteControl(TV())
radio_remote = RemoteControl(Radio())

tv_remote.press_on()
radio_remote.press_off()
