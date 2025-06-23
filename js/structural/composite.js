class Component {
    open() {
    }
}

class File extends Component {
    constructor(name) {
        super();
        this.name = name
    }

    open() {
        console.log(`file ${this.name}`);
    }
}

class Folder extends Component {
    constructor(name) {
        super();
        this.name = name
        this.childrens = []
    }

    add(item) {
        this.childrens.push(item)
    }

    open() {
        console.log(`folder: ${this.name}`)
        this.childrens.forEach(child => child.open())
    }
}

const file1 = new File('my_avatar.jpg')
const file2 = new File('my_dog.jpg')
const file3 = new File('doc.pdf')

const root_folder = new Folder('root')
const my_photo_folder = new Folder('MyPhoto')
const my_docs_folder = new Folder('MyDocs')

my_photo_folder.add(file1)
my_photo_folder.add(file2)

my_docs_folder.add(file3)

root_folder.add(my_docs_folder)
root_folder.add(my_photo_folder)

root_folder.open()
