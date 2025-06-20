class Pizza {
    constructor() {
        this.ingridients = []
    }

    show() {
        console.log(`pizza contains: ${this.ingridients.join(', ')}`)
    }

}

class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza()
    }

    add_cheese() {
        this.pizza.ingridients.push('cheese')
        return this
    }

    add_tomato() {
        this.pizza.ingridients.push('tomato')
        return this
    }

    add_pepperoni() {
        this.pizza.ingridients.push('pepperoni')
        return this
    }

    build() {
        return this.pizza
    }
}

builder = new PizzaBuilder()
const pizza = builder.add_cheese().add_pepperoni().add_tomato().build();
pizza.show()