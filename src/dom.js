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
    
};

const displayProjectTitle = () => {
    let i = 0;
    document.querySelector('#project-container').innerHTML = '';
    projectsArray.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.setAttribute('class', 'color-white px-4 bold');
      projectDiv.setAttribute('id', i);
      const titleparagraph = document.createElement('p');
      const titleText = document.createTextNode(` ${project.title}`);
      titleparagraph.appendChild(titleText);
      projectDiv.appendChild(titleparagraph);

      const projectContainer = document.getElementById('project-container');
      projectContainer.appendChild(projectDiv);
      i++;
    });
};


export default newProject;