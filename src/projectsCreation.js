const projectCreation = (title, description) => {
   return {
     title,
     description,
     todos: []
   };
};

const taskCreation = (description, dueDate, priority, status, project) => {
  project.todos.push({
    description,
    dueDate,
    priority,
    status
  });
};

export {projectCreation, taskCreation};