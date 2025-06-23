const testFunc = () => {
    for (let i = 0; i < 9999; i++) {
        const num = Math.random() * 2 / 55 * 1000 + i
        console.log(num)
    }
}


const timeDecorator = (fn) => {
    return (...args) => {
        const start = new Date()
        const result = fn(...args)
        const end = new Date()
        const duration = (end - start).toFixed(4)
        console.log(`function ${fn.name} executed in ${duration}`)
        return result
    }

}

const decoratedFunc = timeDecorator(testFunc)
decoratedFunc()