import {projectCreation, taskCreation} from './projectsCreation';

const projectsArray = [];

    const newProjectButton = document.getElementById('new-project');
    const projectForm=document.getElementById('project-form');
    projectForm.style.display = 'none';

    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function removeForm() {
        projectForm.style.display = 'none';
    });

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
};


const displayTask = () => {
    const projectWithTask = document.querySelector('.project-div');
    projectWithTask.addEventListener('click', task);
}

const task = () => {
    document.querySelector('#task-container').innerHTML = '';
    projectsArray.forEach(project => {
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
    const newTaskButton = document.createElement('h3');
    newTaskButton.setAttribute('class', 'btn btn-success px-5 mx-4 my-3')
    const newTaskText = document.createTextNode('Add A New "To-Do"');
    newTaskButton.appendChild(newTaskText);
    taskContainer.appendChild(newTaskButton);
    });
}

export default newProject;