
const taskCreation = (description, dueDate, priority, project) => {
    project.todos.push({
      description,
      dueDate,
      priority,
      edit(description, dueDate, priority) {
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
      },
    });
  };

  module.exports = taskCreation;