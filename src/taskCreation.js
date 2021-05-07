const taskCreation = (projectTasksArray, dueDate, priority, note, status) => {

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