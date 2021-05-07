const taskCreation = (projectArray, dueDate, priority, note, status) => {

  const task = {
    description,
    dueDate,
    priority,
    note,
    status,
  };

  projectArray.push(task);
};

export default taskCreation;