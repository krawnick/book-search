class DataBase {
  save(items) {
    // Save
    console.log('saved: ', items)
  }
}

class MongoDB extends DataBase {
  // ...
  save(items) {
    // Save
    console.log('saved Mongo: ', items)
  }
}

class ToDoList {
  items = [1, 2, 3]
  db
  constructor(db) {
    this.db = db
  }
  saveToDataBase() {
    this.db.save(this.items)
  }
}

const list1 = new ToDoList(new DataBase())
list1.saveToDataBase()

const list2 = new ToDoList(new MongoDB())
list2.saveToDataBase()
