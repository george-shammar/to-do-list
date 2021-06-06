/**
 * @jest-environment jsdom
 */

 
const myShowTask = require('../dom');
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

test('Should contain DOM element created with myShowTask function', () => {
    document.body.innerHTML = `<div id='task-div' class='pb-2'></div>`;
    myShowTask(newProject);
    const taskDiv = document.getElementById('task-div');
    expect(taskDiv.innerHTML).toContain('task description');
});

test('Should contain DOM element created with myShowTask function', () => {
    document.body.innerHTML = `<div id='task-div' class='pb-2'></div>`;
    myShowTask(newProject);
    const taskDiv = document.getElementById('task-div');
    expect(taskDiv.innerHTML).toContain('12/03/2021');
});

