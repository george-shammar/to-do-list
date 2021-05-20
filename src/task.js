import { projectsArray, saveArray } from './project'; // eslint-disable-line
import { myShowTask, myTask } from './dom'; // eslint-disable-line

const taskCreation = (description, dueDate, priority, project) => {
  project.todos.push({
    description,
    dueDate,
    priority,
    edit(description, dueDate, priority) {
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    },
  });
};

const newTaskForm = document.getElementById('task-form');
newTaskForm.style.display = 'none';


const showTask = (project) => {
  myShowTask(project);
};


const task = (projectId) => {
  myTask(projectId);
};


export {
  task, showTask, taskCreation, newTaskForm,
};
