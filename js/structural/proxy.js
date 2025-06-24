class DB {
    readData() {
        console.log('reading data from DB')
    }
}

class DBProxy {
    constructor(is_auth) {
        this.is_auth = is_auth
        this.db = new DB()
    }

    readData() {
        if (this.is_auth === true) this.db.readData()
        else console.error('access denied')

    }
}

proxy = new DBProxy(false)
proxy.readData()

proxy2 = new DBProxy(true)
proxy2.readData()