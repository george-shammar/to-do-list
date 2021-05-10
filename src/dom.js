import projectCreation from './projectsCreation';

let projectArray = [];

const newProject = () => {
    const newProjectButton = document.getElementById('new-project');
    const projectForm=document.getElementById('project-form');
    projectForm.style.display = 'none';

        newProjectButton.addEventListener('click', function form() {
            projectForm.style.display = 'block';
        });            
        
        const formSubmit = document.getElementById('submit');
        formSubmit.addEventListener('click', addNew());
}

const addNew = () => {
    const projectTitle = document.querySelector('.title').value;
    const projectDescription = document.querySelector('.description').value;

    // create new project
    const newProject = projectCreation(projectTitle, projectDescription);
    projectArray.push(newProject);

    displayProjectTitle();
}

const displayProjectTitle = () => {
    document.querySelector('#project-container').innerHTML = '';
        let i = 0;
        projectArray.forEach((project) => {
        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'color-white');
        const titleparagraph = document.createElement('p');
        const titleText = document.createTextNode(`${project.title}`);
        titleparagraph.appendChild(titleText);
        projectDiv.appendChild(titleparagraph);

        const projectContainer = document.getElementById('project-container');
        projectContainer.appendChild(projectDiv);

        i += 1;
    });
}


export default newProject;