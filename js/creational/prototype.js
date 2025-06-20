class Cookie {
    constructor(flavor) {
        this.flavor = flavor
    }

    describe() {
        console.log(`cookie with ${this.flavor} flavor`)
    }

    clone() {
        return new Cookie(this.flavor)
    }
}

const chocoCookie = new Cookie('chocolate')
chocoCookie.describe()

const chocoCookieClone = chocoCookie.clone()
chocoCookieClone.describe()

chocoCookieClone.flavor = 'vanilla'
chocoCookieClone.describe()

chocoCookie.describe()