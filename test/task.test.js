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
const task = taskCreation('task description', '12/03/2021', 'high', newProject);
 
test('Should set the description to be equal to the first parameter received', () => {
  expect(newProject.todos[0].description).toBe('task description');    
});

test('The description should not be null', () => {
  expect(newProject.todos[0].description).not.toBe(null);    
});

test('Should set the dueDate to be equal to the second parameter received', () => {
  expect(newProject.todos[0].dueDate).toBe('12/03/2021');    
});

test('The dueDate should not be null.', () => {
  expect(newProject.todos[0].dueDate).not.toBe(null);    
});

test('Should set the priority to be equal to the third parameter received', () => {
  expect(newProject.todos[0].priority).toBe('high');    
});

test('Priority shoud not be empty', () => {
  expect(newProject.todos[0].priority).not.toBe(null);    
});

test('task should belong to a project', () => {
  expect(newProject.todos[0].project).not.toBe(null);    
});

test('Should edit the task description', () => {
    newProject.todos[0].edit('edited description', '12/03/2021', 'high');
    expect(newProject.todos[0].description).toBe('edited description');    
});

test('Edited task should not be equal --task description--', () => {
    newProject.todos[0].edit('edited description', '12/03/2021', 'high');
    expect(newProject.todos[0].description).not.toBe('task description');    
});