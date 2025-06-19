class User:
    __instance = None

    def __new__(cls, *args, **kwargs):
        if not isinstance(cls.__instance, cls):
            cls.__instance = super().__new__(
                cls)  # This is a call to the parent's __new__ method, which creates a new object of class cls (e.g. User) and returns it.

        return cls.__instance

    def __init__(self, name, age):
        self.name = name
        self.age = age


user1 = User('Oleksandr', 24)
user2 = User('Sasha', 22)

print(user1.name)
print(user2.name)
