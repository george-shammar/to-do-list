import {projectCreation, taskCreation} from './projectsCreation';

const projectsArray = [];

    const newProjectButton = document.getElementById('new-project');
    const projectForm=document.getElementById('project-form');
    projectForm.style.display = 'none';

    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function removeForm() {
        projectForm.style.display = 'none';
    });

    // New task form display style: none
    const newTaskForm = document.getElementById('task-form');
    newTaskForm.style.display = 'none';

const newProject = () => {
        newProjectButton.addEventListener('click', function form() {
            projectForm.style.display = 'block';
        });            

        const formSubmit = document.getElementById('submit');
        formSubmit.addEventListener('click',  submit);
};

const submit = () => {
    const projectTitle = document.querySelector('.title').value;
    const projectDescription = document.querySelector('.description').value;

    // create new project
    const newProject = projectCreation(projectTitle, projectDescription);
    projectsArray.push(newProject);
    
    displayProjectTitle();
    displayTask();
};

const displayProjectTitle = () => {
    let i = 0;
    document.querySelector('#project-container').innerHTML = '';
    projectsArray.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.setAttribute('class', 'color-white px-4 bolden project-div');
      projectDiv.setAttribute('id', i);
      const titleparagraph = document.createElement('p');
      const titleText = document.createTextNode(`# ${project.title}`);
      titleparagraph.appendChild(titleText);
      projectDiv.appendChild(titleparagraph);

      const projectContainer = document.getElementById('project-container');
      projectContainer.appendChild(projectDiv);
      i++;
    });
    myEvent();
};


const displayTask = (projectId) => {
    const projectWithTask = document.getElementById(projectId);

    projectWithTask.addEventListener('click', function(){
        task(projectId);
    });
};

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
    }

    const submitTaskButton = document.getElementById('submit-task');

    submitTaskButton.onclick = () => {
        newTaskForm.style.display = 'none';
    };

};

function myEvent(){
    let projectsDiv = document.getElementsByClassName('project-div');

    for(let i = 0; i<projectsDiv.length; i++){
        projectsDiv[i].addEventListener('click', function(){
            displayTask(this.id);
        });
    }
}

const showTask = () => {
    const showContainer = document.createElement('div');
    showContainer.setAttribute('class', 'show-task mt-3 pt-3 px-2 mx-2 d-flex');

    const radioTask = document.createElement('div');
    radioTask.setAttribute('class', 'd-flex');

    const radio = document.createElement('div');
    radio.setAttribute('class', 'radio color-green');

    const taskTask = document.createElement('div');
    taskTask.setAttribute('class', 'to-do color-white px-2');
    const taskTaskParagraph = document.createElement('p');
    const taskTaskText = document.createTextNode('First to-do task for this project');
    taskTaskParagraph.appendChild(taskTaskText);
    taskTask.appendChild(taskTaskParagraph);

    radioTask.appendChild(radio);
    radioTask.appendChild(taskTask);

    showContainer.appendChild(radioTask);


    // create icons
    const iconContainer = document.createElement('div');
    iconContainer.setAttribute('class', 'd-flex');

    const taskDueDate = document.createElement('div');
    taskDueDate.setAttribute('class', 'color-blue px-2');
    const taskDueDateParagraph = document.createElement('p');
    const taskDueDateText = document.createTextNode('Due Date:13/10');
    taskDueDateParagraph.appendChild(taskDueDateText);
    taskDueDate.appendChild(taskDueDateParagraph);

    iconContainer.appendChild(taskDueDate);
    showContainer.appendChild(iconContainer);


}


export default newProject;




