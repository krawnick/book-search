const task = {
  title: 'Task1',
  dueTo: new Date('2024/01/01'),

  get isOverdue() {
    return this.dueTo < new Date()
  },

  set isOverdue(isOver) {
    if (!isOver) {
      this.dueTo = new Date()
    }
  },
}

// console.log(task.isOverdue)

task.isOverdue = true

// console.log(task)

class Task {
  constructor(title, dueDate) {
    this.title = title
    this.dueDate = new Date(dueDate)
  }

  get isOverdue() {
    return new Date() > this.dueDate
  }

  set dueDate(date) {
    if (new Date(date) < new Date()) {
      return
    }
    this._dueDate = new Date(date)
  }
}

const newTask = new Task('New task', '2024/04/04')

newTask.dueDate = '2024/01/01'
console.log(newTask)
console.log(newTask.isOverdue)
