import { displayProjectTitle } from './dom'; // eslint-disable-line
import { task, showTask } from './task'; // eslint-disable-line


const projectCreation = (title, description) => ({
  title,
  description,
  todos: [],
  edit(title, description) {
    this.title = title;
    this.description = description;
  },
});

let projectsArray = JSON.parse(localStorage.getItem('projectArray')); // eslint-disable-line

if (projectsArray == null) {
  const defaultArray = [{
    title: 'default',
    description: 'default',
    todos: [],
    edit(title, description) {
      this.title = title;
      this.description = description;
    },
  }];

  localStorage.setItem('projectArray', JSON.stringify(defaultArray));
  projectsArray = JSON.parse(localStorage.getItem('projectArray'));
}

const saveArray = () => {
  localStorage.setItem('projectArray', JSON.stringify(projectsArray));
};

const newProjectButton = document.getElementById('new-project');

const projectForm = document.getElementById('project-form');
projectForm.style.display = 'none';

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  projectForm.style.display = 'none';
});


const displayTask = (projectId) => {
  const projectWithTask = document.getElementById(projectId);

  projectWithTask.addEventListener('click', () => {
    task(projectId);
    showTask(projectsArray[projectId]);
  });
};

function myEvent() {
  const projectsDiv = document.getElementsByClassName('project-div');

  for (let i = 0; i < projectsDiv.length; i += 1) {
    projectsDiv[i].addEventListener('click', function display() {
      displayTask(this.id);
    });
  }
}

displayProjectTitle();


const submit = () => {
  const projectTitle = document.querySelector('.title').value;
  const projectDescription = document.querySelector('.description').value;

  // create new project
  const newProject = projectCreation(projectTitle, projectDescription);
  projectsArray.push(newProject);

  displayProjectTitle();
  displayTask();
  saveArray();
};

const newProject = () => {
  newProjectButton.addEventListener('click', () => {
    projectForm.style.display = 'block';
  });

  const formSubmit = document.getElementById('submit');
  formSubmit.addEventListener('click', submit);
};

displayProjectTitle();

export {
  projectCreation, newProject, saveArray, projectsArray, myEvent,
};
