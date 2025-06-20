class OldLogger {
    write_log(text) {
        console.log(`old log: ${text}`)
    }
}

class LoggerAdapter {
    constructor(oldLogger) {
        this.oldLogger = oldLogger
    }

    log(oldLogger, text) {
        this.oldLogger.write_log(text)
    }
}

const client = (logger, text) => {
    logger.log(text)
}

oldLogger = new OldLogger()
adapterLogger = new LoggerAdapter(oldLogger)


client(adapterLogger, 'hello adapter pattern')