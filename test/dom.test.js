/**
 * @jest-environment jsdom
 */

const { myShowTask, showTask } = require('../dom');
const taskCreation = require('../task');


const projectsArray = [];

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
  };

  document.getElementById('submit-task');
};

const displayProjectTitle = () => {
  let i = 0;
  document.querySelector('#project-container').innerHTML = '';
  projectsArray.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'color-white px-4 bolden show-project mx-4 pt-3 mb-2 project-div');
    projectDiv.setAttribute('id', i);
    const titleparagraph = document.createElement('p');
    const titleText = document.createTextNode(`${project.title}`);
    titleparagraph.appendChild(titleText);
    projectDiv.appendChild(titleparagraph);

    // delete icon
    const thrashContainer = document.createElement('div');
    const thrashProjectIcon = document.createElement('i');
    thrashProjectIcon.setAttribute('class', 'fas fa-trash-alt color-green px-2');
    thrashContainer.appendChild(thrashProjectIcon);
    projectDiv.appendChild(thrashContainer);

    // delete functionality==========================
    thrashContainer.addEventListener('click', () => {
      projectsArray.splice(projectDiv.id, 1);
      // showTask(project);
      // saveArray();
      displayProjectTitle();
    });


    const projectContainer = document.getElementById('project-container');
    projectContainer.appendChild(projectDiv);
    i += 1;
  });
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

const task = (projectId) => {
  myTask(projectId);
};


const newProject = projectCreation('title one', 'title description');
taskCreation('task description', '12/03/2021', 'high', newProject);

test('Should contain DOM element created with myShowTask function', () => {
  document.body.innerHTML = '<div id=\'task-div\' class=\'pb-2\'></div>';
  myShowTask(newProject);
  const taskDiv = document.getElementById('task-div');
  expect(taskDiv.innerHTML).toContain('task description');
});

test('Should contain DOM element created with myShowTask function', () => {
  document.body.innerHTML = '<div id=\'task-div\' class=\'pb-2\'></div>';
  myShowTask(newProject);
  const taskDiv = document.getElementById('task-div');
  expect(taskDiv.innerHTML).not.toContain('project description');
});

test('Should contain DOM element created with myShowTask function', () => {
  document.body.innerHTML = '<div id=\'task-div\' class=\'pb-2\'></div>';
  myShowTask(newProject);
  const taskDiv = document.getElementById('task-div');
  expect(taskDiv.innerHTML).toContain('12/03/2021');
});

test('Should contain DOM element created with myShowTask function', () => {
  document.body.innerHTML = '<div id=\'task-div\' class=\'pb-2\'></div>';
  myShowTask(newProject);
  const taskDiv = document.getElementById('task-div');
  expect(taskDiv.innerHTML).not.toContain('09/05/2023');
});

test('Should contain DOM element created with myTask function', () => {
  document.body.innerHTML = '<div id="task-container"></div>';
  projectsArray.push(newProject);
  myTask(0);
  const taskContainer = document.getElementById('task-container');
  expect(taskContainer.innerHTML).toContain('Description: title description');
});

test('Should contain DOM element created with myTask function', () => {
  document.body.innerHTML = '<div id="task-container"></div>';
  projectsArray.push(newProject);
  myTask(0);
  const taskContainer = document.getElementById('task-container');
  expect(taskContainer.innerHTML).not.toContain('task description');
});

test('Should contain DOM element created with displayProjectTitle function', () => {
  document.body.innerHTML = '<div id="project-container"></div>';
  projectsArray.push(newProject);
  displayProjectTitle();
  const projectContainer = document.getElementById('project-container');
  expect(projectContainer.innerHTML).toBeTruthy();
});

test('Should contain DOM element created with displayProjectTitle function', () => {
  document.body.innerHTML = '<div id="project-container"></div>';
  projectsArray.push(newProject);
  displayProjectTitle();
  const projectContainer = document.getElementById('project-container');
  expect(projectContainer.innerHTML).toContain('title one');
});

test('Should contain DOM element created with displayProjectTitle function', () => {
  document.body.innerHTML = '<div id="project-container"></div>';
  projectsArray.push(newProject);
  displayProjectTitle();
  const projectContainer = document.getElementById('project-container');
  expect(projectContainer.innerHTML).not.toContain('title two');
});

test('Should contain DOM element created with ShowTask function', () => {
  document.body.innerHTML = '<div id=\'task-div\' class=\'pb-2\'></div>';
  myShowTask(newProject);
  showTask(newProject);
  const taskDiv = document.getElementById('task-div');
  expect(taskDiv.innerHTML).toContain('12/03/2021');
});

test('Should NOT contain DOM element NOT created with ShowTask function', () => {
  document.body.innerHTML = '<div id=\'task-div\' class=\'pb-2\'></div>';
  myShowTask(newProject);
  showTask(newProject);
  const taskDiv = document.getElementById('task-div');
  expect(taskDiv.innerHTML).not.toContain('11/04/2022');
});

test('Should contain DOM element created with task function', () => {
  document.body.innerHTML = '<div id="task-container"></div>';
  projectsArray.push(newProject);
  myTask(0);
  task(0);
  const taskContainer = document.getElementById('task-container');
  expect(taskContainer.innerHTML).toContain('Description: title description');
});


test('Should NOT contain DOM element NOT created with task function', () => {
  document.body.innerHTML = '<div id="task-container"></div>';
  projectsArray.push(newProject);
  myTask(0);
  task(0);
  const taskContainer = document.getElementById('task-container');
  expect(taskContainer.innerHTML).not.toContain('Description: description');
});
