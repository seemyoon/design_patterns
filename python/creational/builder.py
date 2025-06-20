class Pizza:
    def __init__(self):
        self.ingredients = []

    def show(self):
        print(f'pizza with: {', '.join(self.ingredients)}')


class PizzaBuilder:
    def __init__(self):
        self.pizza = Pizza()

    def add_cheese(self):
        self.pizza.ingredients.append('cheese')
        return self

    def add_tomato(self):
        self.pizza.ingredients.append('tomato')
        return self

    def add_pepperoni(self):
        self.pizza.ingredients.append('pepperoni')
        return self

    def build(self):
        return self.pizza

builder = PizzaBuilder()
pizza = builder.add_cheese().add_tomato().add_cheese().build()

pizza.show()