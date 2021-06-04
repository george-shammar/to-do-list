const taskCreation = require('../task');

const projectCreation = (title, description) => ({
    title,
    description,
    todos: [],
    edit(title, description) {
      this.title = title;
      this.description = description;
    },
  });


const newProject = projectCreation('title one', 'title description');

test('Should set the description to be equal to the first parameter received', () => {
    const task = taskCreation('task description', '12/03/2021', 'high', newProject);
  expect(newProject.todos[0].dueDate).toBe('12/03/2021');    
});

test('The description should not be null', () => {
    const task = taskCreation('task description', '12/03/2021', 'high', newProject);
  expect(newProject.todos[0].description).not.toBe(null);    
});

test('Should set the dueDate to be equal to the second parameter received', () => {
    const task = taskCreation('task description', '12/03/2021', 'high', newProject);
  expect(newProject.todos[0].description).toBe('task description');    
});

test('The dueDate should not be null.', () => {
    const task = taskCreation('task description', '12/03/2021', 'high', newProject);
  expect(newProject.todos[0].description).not.toBe(null);    
});