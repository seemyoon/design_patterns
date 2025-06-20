class Cookie:
    def __init__(self, flavor):
        self.flavor = flavor

    def describe(self):
        print(f'cookie with {self.flavor} flavor')

    def clone(self):
        return Cookie(self.flavor)


chocoCookie = Cookie('chocolate')
chocoCookie.describe()

chocoCookieClone = chocoCookie.clone()
chocoCookieClone.describe()

chocoCookieClone.flavor = 'vanilla'
chocoCookieClone.describe()

chocoCookie.describe()
