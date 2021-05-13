const taskCreation = (projectTasksArray, description, dueDate, priority, status) => {

  const task = {
    description,
    dueDate,
    priority,
    note,
    status,
  };

  projectTasksArray.push(task);
};

export default taskCreation;