class Component:
    def open(self):
        pass


class File(Component):
    def __init__(self, name):
        self.name = name

    def open(self):
        print(f"file: {self.name}")


class Folder(Component):
    def __init__(self, name):
        self.name = name
        self.children = []

    def add(self, item):
        self.children.append(item)

    def open(self):
        print(f"folder: {self.name}")
        for child in self.children:
            child.open()

    # each child can be:
    # a file → just prints the name
    # a folder → and it too has a .display() method that calls .display() again for its nested objects


file1 = File('my_avatar.jpg')
file2 = File('my_dog.jpg')
file3 = File('doc.pdf')

root_folder = Folder('root')
my_photo_folder = Folder('MyPhoto')
my_docs_folder = Folder('MyDocs')

my_photo_folder.add(file1)
my_photo_folder.add(file2)

my_docs_folder.add(file3)

root_folder.add(my_docs_folder)
root_folder.add(my_photo_folder)

root_folder.open()
