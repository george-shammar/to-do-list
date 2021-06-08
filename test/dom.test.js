/**
 * @jest-environment jsdom
 */

 
const myShowTask = require('../dom');
const taskCreation = require('../task');

let projectsArray = [];


const showTask = (project) => {
  myShowTask(project);
};

const myTask = (projectId) => {
  document.querySelector('#task-container').innerHTML = '';
  const project = projectsArray[projectId];
  const taskTitleParagraph = document.createElement('p');
  const taskTextTitle = document.createTextNode(`Project: ${project.title}`);
  taskTitleParagraph.appendChild(taskTextTitle);

  const taskDescriptionParagraph = document.createElement('p');
  const taskDescriptionText = document.createTextNode(`Description: ${project.description}`);
  taskDescriptionParagraph.appendChild(taskDescriptionText);

  const taskDiv = document.createElement('div');
  taskDiv.setAttribute('class', 'color-white px-4 pt-5 bold-text');


  taskDiv.appendChild(taskTitleParagraph);
  taskDiv.appendChild(taskDescriptionParagraph);


  const taskContainer = document.getElementById('task-container');
  taskContainer.appendChild(taskDiv);

  // Add task button
  const newTaskButton = document.createElement('button');
  newTaskButton.setAttribute('class', 'btn btn-success px-5 mx-4 my-3');
  newTaskButton.setAttribute('id', 'new-task');
  const newTaskText = document.createTextNode('Add A New "To-Do"');
  newTaskButton.appendChild(newTaskText);
  taskContainer.appendChild(newTaskButton);

  // display new task form
  const displayTaskForm = document.getElementById('new-task');
  displayTaskForm.onclick = () => {
    newTaskForm.style.display = 'block';
  };

  const submitTaskButton = document.getElementById('submit-task');

  // submitTaskButton.onclick = () => {
  //   // retrieve value from form input
  //   const descriptionTask = document.getElementById('exampleInputDescription').value;
  //   const dueDateTask = document.getElementById('exampleInputDueDate').value;
  //   let priority;


  //   taskCreation(descriptionTask, dueDateTask, priority, project);
  //   newTaskForm.style.display = 'none';

  //   showTask(project);
  //   saveArray();
  // };
};

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

test('Should contain DOM element created with myTask function', () => {
  document.body.innerHTML = `<div id="task-container"></div>`;
  projectsArray.push(newProject);
  myTask(0);
  const taskContainer = document.getElementById('task-container');
  expect(taskContainer.innerHTML).toContain('Description: title description');
});

test('Should contain DOM element created with myTask function', () => {
  document.body.innerHTML = `<div id="task-container"></div>`;
  projectsArray.push(newProject);
  myTask(0);
  const taskContainer = document.getElementById('task-container');
  expect(taskContainer.innerHTML).not.toContain('task description');
});