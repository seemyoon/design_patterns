class DB:
    @staticmethod
    def read_data():
        print('reading data from DB')


class DBProxy:
    def __init__(self, is_auth):
        self.is_auth = is_auth
        self._real_db = DB()

    def read_data(self):
        if self.is_auth:
            self._real_db.read_data()
        else:
            raise TypeError('access denied')


proxy = DBProxy(is_auth=True)
proxy.read_data()

proxy2 = DBProxy(is_auth=False)
proxy2.read_data()
