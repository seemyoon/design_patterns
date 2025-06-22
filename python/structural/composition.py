import random


class NotificationService:
    @staticmethod
    def send_notification(msg):
        print(f"notification sent: {msg}")


class User:
    def __init__(self, name):
        self.name = name

    def get_msg_test(self, order):
        return f"order #${order['id']} for {self.name} is processed"


class OrderManager:
    def __init__(self, notification_service):
        self.notification_service = notification_service

    def create_order(self, create_details):
        order = {
            'id': random.randint(100, 999),
            'user': create_details['user'],
            'total': self.calculate_total(create_details)
        }
        self.save_order(order)
        return order

    @staticmethod
    def calculate_total(create_details):
        return sum(item['price'] for item in create_details['items'])

    def save_order(self, order):
        print(f'order saved: #{order['id']} with total {order['total']}')
        msg = order['user'].get_msg_test(order)
        self.notification_service.send_notification(msg)


notification_service = NotificationService()
orderManager = OrderManager(notification_service)

user = User('Oleksandr')

order_details = {
    'user': user,
    'items': [
        {'name': 'iphone 16', 'price': 200000},
        {'name': 'case', 'price': 300},
    ],
}
orderManager.create_order(order_details)
