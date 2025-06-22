class NotificationService {
    sendNotification(msg) {
        console.log(`notification sent: ${msg}`)
    }
}

class User {
    constructor(name) {
        this.name = name
    }

    getMsgTest(order) {
        return `order #${order.id} for ${this.name} is processed`
    }

}

class OrderManager {
    constructor(notificationService) {
        this.notificationService = notificationService
    }

    createOrder(orderDetails) {
        const order = {
            id: Math.floor(Math.random() * 1000),
            user: orderDetails.user,
            total: this.calculateTotal(orderDetails)
        }
        this.saveOrder(order)
        return order
    }

    calculateTotal(orderDetails) {
        return orderDetails.items.reduce((acc, item) => acc + item.price, 0)
    }

    saveOrder(order) {
        console.log(`order saved: #${order.id} with total: ${order.total}`)

        const msg = order.user.getMsgTest(order)
        this.notificationService.sendNotification(msg)
    }
}

const notificationService = new NotificationService()
const orderManager = new OrderManager(notificationService)

const user = new User('Oleksandr')
const orderDetails = {
    user,
    items: [
        {name: 'IPhone 16', price: 200000},
        {name: 'Case for IPhone 16', price: 300}
    ]
}
orderManager.createOrder(orderDetails)