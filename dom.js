
const myShowTask = (project) => {
  // display task=====================================================
  let i = 0;
  // document.querySelector('#task-div').innerHTML = '';

  project.todos.forEach(task => {
    const showContainer = document.createElement('div');
    showContainer.setAttribute('class', 'show-task mt-3 pt-1 px-2 mx-2 d-flex');
    showContainer.id = i;

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


    // status=============
    radio.id = i;
    const statusComplete = () => {
      radio.addEventListener('click', () => {
        radio.style.backgroundColor = 'rgb(96, 236, 96)';
        taskTaskParagraph.style.textDecoration = 'line-through';
      });
    };

    statusComplete();


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

    // Edit icon
    const editIconContainer = document.createElement('div');
    const editIcon = document.createElement('i');
    editIcon.setAttribute('class', 'fas fa-pencil-alt color-green px-2');
    editIconContainer.appendChild(editIcon);
    iconContainer.appendChild(editIconContainer);


    // delete icon
    const thrashIconContainer = document.createElement('div');
    const thrashIcon = document.createElement('i');
    thrashIcon.setAttribute('class', 'fas fa-trash-alt color-green px-2');
    thrashIconContainer.appendChild(thrashIcon);
    iconContainer.appendChild(thrashIconContainer);

    // delete functionality==========================
    thrashIconContainer.addEventListener('click', () => {
      project.todos.splice(showContainer.id, 1);
      showTask(project);  // eslint-disable-line
      saveArray();  // eslint-disable-line
    });

    // create DOM for edit===============================================

    const editDomContainer = document.createElement('div');
    editDomContainer.setAttribute('class', 'color-white dom-task px-2 mx-2');
    editDomContainer.id = i.toString() + i.toString();
    showContainer.appendChild(editDomContainer);


    document.getElementById(i.toString() + i.toString()).style.display = 'none';


    // edit functionality
    editIconContainer.id = i;
    editIconContainer.onclick = () => {
      editDomContainer.style.display = 'block';
    };

    const descInputDiv = document.createElement('div');
    descInputDiv.setAttribute('class', 'px-2 py-2');


    const descInput = document.createElement('input');
    descInput.setAttribute('class', 'form-control');
    descInput.setAttribute('type', 'text');

    descInput.id = i;

    descInput.setAttribute('placeholder', task.description);

    descInputDiv.appendChild(descInput);
    editDomContainer.appendChild(descInputDiv);

    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'd-flex');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('class', 'form-control');
    dateInput.setAttribute('type', 'date');
    dateInput.id = i;
    dateInput.setAttribute('placeholder', task.dueDate);

    const editSubmit = document.createElement('div');
    editSubmit.setAttribute('class', 'px-2 btn mx-1 btn-success my-1');

    // submit edit button
    editSubmit.id = i;
    editSubmit.onclick = () => {
      const descriptionEditTask = descInput.value;
      const dueDateEditTask = dateInput.value;

      project.todos[editSubmit.id].edit(descriptionEditTask, dueDateEditTask, 'High');
      showTask(project);  // eslint-disable-line
      saveArray();  // eslint-disable-line
    };

    const submitText = document.createTextNode('Submit');
    editSubmit.appendChild(submitText);

    const editCancel = document.createElement('div');
    editCancel.setAttribute('class', 'px-2 mx-1 btn btn-warning my-1');

    editCancel.id = i;
    editCancel.onclick = () => {
      editDomContainer.style.display = 'none';
    };

    const cancelText = document.createTextNode('Cancel');
    editCancel.appendChild(cancelText);


    dateDiv.appendChild(dateInput);
    editDomContainer.appendChild(dateDiv);
    dateDiv.appendChild(editSubmit);
    dateDiv.appendChild(editCancel);


    i += 1;
  });
};

const showTask = (project) => {
  myShowTask(project);
};


module.exports = { myShowTask, showTask };