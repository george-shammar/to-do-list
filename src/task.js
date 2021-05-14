import projectsArray from './project';

const taskCreation = (description, dueDate, priority, project) => {
    project.todos.push({
      description,
      dueDate,
      priority,
      edit(description, dueDate, priority){
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
      }
    });
};

const newTaskForm = document.getElementById('task-form');
newTaskForm.style.display = 'none';

const task = (projectId) => {
  document.querySelector('#task-container').innerHTML = '';
  let project = projectsArray[projectId];
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
      taskCreation('my description', '24/032/21','hight',project);
      newTaskForm.style.display = 'none';


// display task=====================================================
   project.todos.forEach(task => {
    const showContainer = document.createElement('div');
    showContainer.setAttribute('class', 'show-task mt-3 pt-1 px-2 mx-2 d-flex');
    taskDiv.appendChild(showContainer);
    
    const radioTask = document.createElement('div');
    radioTask.setAttribute('class', 'd-flex');

    const radio = document.createElement('div');
    radio.setAttribute('class', 'radio color-green mt-1');


    const taskTask = document.createElement('div');
    taskTask.setAttribute('class', 'to-do color-white px-2 pt-1');
    const taskTaskParagraph = document.createElement('p');
    const taskTaskText = document.createTextNode(task.description);
    taskTaskParagraph.appendChild(taskTaskText);
    taskTask.appendChild(taskTaskParagraph);

    radioTask.appendChild(radio);
    radioTask.appendChild(taskTask);

    showContainer.appendChild(radioTask);


    // create icons
    const iconContainer = document.createElement('div');
    iconContainer.setAttribute('class', 'd-flex icons pt-1');

    const taskDueDate = document.createElement('div');
    taskDueDate.setAttribute('class', 'color-white px-2');
    const taskDueDateParagraph = document.createElement('p');
    const taskDueDateText = document.createTextNode(`Due Date: ${task.dueDate}`);
    taskDueDateParagraph.appendChild(taskDueDateText);
    taskDueDate.appendChild(taskDueDateParagraph);

    iconContainer.appendChild(taskDueDate);
    showContainer.appendChild(iconContainer);


    const editIconContainer = document.createElement('div');
    const editIcon = document.createElement('i');
    editIcon.setAttribute('class','fas fa-pencil-alt color-green px-2');
    editIconContainer.appendChild(editIcon);
    iconContainer.appendChild(editIconContainer);

    const thrashIconContainer = document.createElement('div');
    const thrashIcon = document.createElement('i');
    thrashIcon.setAttribute('class', 'fas fa-trash-alt color-green px-2');
    thrashIconContainer.appendChild(thrashIcon);
    iconContainer.appendChild(thrashIconContainer);
    });
  };
};







export default task;
