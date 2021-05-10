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
        formSubmit.addEventListener('click', submit());
}

const submit = () => {
    const projectTitle = document.getElementById('project-title').value;
    const projectDescription = document.getElementById('project-description').value;

    // create new project
    const newProject = projectCreation(projectTitle, projectDescription);
    projectArray.push(newProject);
}

const displayProjectTitle = () => {

}


export {newProject};