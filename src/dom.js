import {projectCreation, projectsArray} from './projectsCreation';


const newProject = () => {
    const newProjectButton = document.getElementById('new-project');
    const projectForm=document.getElementById('project-form');
    projectForm.style.display = 'none';

        newProjectButton.addEventListener('click', function form() {
            projectForm.style.display = 'block';
        });            
        
    const formSubmit = document.getElementById('submit');
    formSubmit.addEventListener('click', function submit() {
       
    })
    
}




export {newProject};