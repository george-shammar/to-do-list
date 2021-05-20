import { projectsArray, saveArray } from './project'; // eslint-disable-line
import { myTask } from './dom';

const taskCreation = (description, dueDate, priority, project) => {
  project.todos.push({
    description,
    dueDate,
    priority,
    edit: function(description, dueDate, priority) {
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    },
  });
};

const newTaskForm = document.getElementById('task-form');
newTaskForm.style.display = 'none';


const showTask = (project) => {
  myTask(project);
};


const task = (projectId) => {
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

  submitTaskButton.onclick = () => {
    // retrieve value from form input
    const descriptionTask = document.getElementById('exampleInputDescription').value;
    const dueDateTask = document.getElementById('exampleInputDueDate').value;
    let priority;


    taskCreation(descriptionTask, dueDateTask, priority, project);
    newTaskForm.style.display = 'none';

    showTask(project);
    saveArray();
  };
};


export { task, showTask };
