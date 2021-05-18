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
     //retrieve value from form input
    const descriptionTask = document.getElementById('exampleInputDescription').value;
    const dueDateTask = document.getElementById('exampleInputDueDate').value;
    let priority;
    if(document.querySelector('#high').checked){
      priority = high;
    }

    if(document.querySelector('#medium').checked){
      priority = medium;
    }

    if(document.querySelector('#low').checked){
      priority = low;
    }

      taskCreation(descriptionTask,dueDateTask,priority,project);
      newTaskForm.style.display = 'none';

    showTask(project);
   
  };
};

const showTask = (project) => {
  // display task=====================================================
  let i = 0;
  document.querySelector('#task-div').innerHTML = '';

   project.todos.forEach(task => {
    const showContainer = document.createElement('div');
    showContainer.setAttribute('class', 'show-task mt-3 pt-1 px-2 mx-2 d-flex');

    const newTaskDiv = document.getElementById('task-div');
    newTaskDiv.appendChild(showContainer);
    
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
    const taskDueDateText = document.createTextNode('Due Date: ' + task.dueDate);
    taskDueDateParagraph.appendChild(taskDueDateText);
    taskDueDate.appendChild(taskDueDateParagraph);

    iconContainer.appendChild(taskDueDate);
    showContainer.appendChild(iconContainer);

    // Edit icon
    const editIconContainer = document.createElement('div');
    const editIcon = document.createElement('i');
    editIcon.setAttribute('class','fas fa-pencil-alt color-green px-2');
    editIcon.setAttribute('id', 'pencil-task');
    editIconContainer.appendChild(editIcon);
    iconContainer.appendChild(editIconContainer);

    const thrashIconContainer = document.createElement('div');
    const thrashIcon = document.createElement('i');
    thrashIcon.setAttribute('class', 'fas fa-trash-alt color-green px-2');
    thrashIconContainer.appendChild(thrashIcon);
    iconContainer.appendChild(thrashIconContainer);

    // create DOM for edit===============================================

    const editDomContainer = document.createElement('div');
    editDomContainer.setAttribute('class', 'd-flex color-white dom-task mt-3 pt-1 px-2 mx-2');
  
    
    const descInputDiv = document.createElement('div');
    descInputDiv.setAttribute('class', 'px-2 py-2');

    const descInput = document.createElement('input');
    descInput.setAttribute('class', 'form-control');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('id', 'dom-description');
    descInput.setAttribute('placeholder', task.description);

    descInputDiv.appendChild(descInput);
    editDomContainer.appendChild(descInputDiv);

    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'd-flex');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('class', 'form-control');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'dom-date');
    dateInput.setAttribute('placeholder', task.dueDate);

   const editSubmit = document.createElement('div');
   editSubmit.setAttribute('class', 'px-2 btn mx-1 btn-success my-1');
   editSubmit.setAttribute('id', 'submit-edit');
   const submitText = document.createTextNode('Submit');
   editSubmit.appendChild(submitText);

   const editCancel = document.createElement('div');
   editCancel.setAttribute('class', 'px-2 mx-1 btn btn-warning my-1');
   editCancel.setAttribute('id', 'cancel-button');
   const cancelText = document.createTextNode('Cancel');
   editCancel.appendChild(cancelText);

   dateDiv.appendChild(editSubmit);
    dateDiv.appendChild(editCancel);
   dateDiv.appendChild(dateInput);
   editDomContainer.appendChild(dateDiv);

   const domListener = document.getElementById('edit-div');

   
   domListener.appendChild(editDomContainer);

  //  edit button event listener
  domListener.style.display='none';

  const pencilEdit = document.getElementById('pencil-task');
  pencilEdit.onclick = () => {
    domListener.style.display='block';
  }

  // cancel button
const cancelButton = document.getElementById('cancel-button');
cancelButton.onclick = () => {
  domListener.style.display='none';
}    

// submit edit button
const submitButton = document.getElementById('submit-edit');
submitButton.onclick = () => {
  

  const descriptionEditTask = document.getElementById('dom-description').value;
    const dueDateEditTask = document.getElementById('dom-date').value;
    let priority;
    if(document.querySelector('#high').checked){
      priority = high;
    }

    if(document.querySelector('#medium').checked){
      priority = medium;
    }

    if(document.querySelector('#low').checked){
      priority = low;
    }

      taskCreation(descriptionEditTask,dueDateEditTask,priority,project);
      domListener.style.display='none';

    showTask(project);
   
  
}





    i++;
    });
};





export { task, showTask };
